import { getMyJobs } from "@/api/apiJobs";
import useFetch from "@/hooks/use-fetch";
import { useUser } from "@clerk/clerk-react";
import JobCard from "./job-card";
import { useEffect } from "react";
import { BarLoader, ScaleLoader } from "react-spinners";
import { Link } from "react-router-dom";

const CreatedJobs = () => {
  const { user } = useUser();
  const {
    loading: loadingCreatedJobs,
    data: dataCreatedJobs,
    fn: fnCreatedJobs,
  } = useFetch(getMyJobs, {
    recruiter_id: user.id,
  });

  useEffect(() => {
    fnCreatedJobs();
  }, []);

  return (
    <div>
      {loadingCreatedJobs ? (
        <div className="flex justify-center items-center min-h-screen">
          <ScaleLoader color="#36d7b7" height={35} width={15} margin={2} />
        </div>
      ) : (
        <div className="mt-8 grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {dataCreatedJobs?.length ? (
            dataCreatedJobs.map((job) => {
              return (
                <JobCard
                  key={job?.id}
                  job={job}
                  isMyJob={true}
                  onJobAction={fnCreatedJobs}
                />
              );
            })
          ) : (
            <div className="col-span-3 flex flex-col justify-center items-center text-center min-h-[400px]">
              <h2 className="text-3xl font-extrabold text-gray-800">
                Oops! No Created Jobs
              </h2>
              <p className="text-lg text-gray-500 mt-3">
                We couldn't find any jobs that you created.
              </p>
              <p className="text-gray-500">Try to create your jobs</p>
              <Link
                to={"/post-job"}
                className="mt-6 px-8 py-3 bg-destructive text-destructive-foreground font-semibold rounded-md hover:bg-destructive/90 transition-all"
              >
                Create Jobs
              </Link>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default CreatedJobs;
