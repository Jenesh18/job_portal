import { getSavedJobs } from "@/api/apiJobs";
import JobCard from "@/components/job-card";
import useFetch from "@/hooks/use-fetch";
import { useUser } from "@clerk/clerk-react";
import React, { useEffect } from "react";
import { ScaleLoader } from "react-spinners";

const SavedJobs = () => {
  const { isLoaded } = useUser();

  const {
    loading: loadingSavedJobs,
    data: savedJobs,
    fn: fnSavedJobs,
  } = useFetch(getSavedJobs);

  useEffect(() => {
    if (isLoaded) {
      fnSavedJobs();
    }
  }, [isLoaded]);

  if (!isLoaded || loadingSavedJobs) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <ScaleLoader color="#36d7b7" height={35} width={15} margin={2} />
      </div>
    );
  }

  return (
   <div>
     <h1 className="gradient-title font-extrabold text-6xl sm:text-7xl text-center pb-8">
      Saved job
     </h1>

     {loadingSavedJobs === false && (
        <div className="mt-8 grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {savedJobs?.length ? (
            savedJobs.map((saved) => {
              return (
                <JobCard
                  key={saved?.id}
                  job={saved?.job}
                  savedInit={true}
                  onJobAction={fnSavedJobs}
                />
              );
            })
          ) : (
            <div className="col-span-3 flex flex-col justify-center items-center text-center min-h-[400px]">
              <h2 className="text-3xl font-extrabold text-gray-800">
                Oops! No Saved Jobs 
              </h2>
              <p className="text-lg text-gray-500 mt-3">
                We couldn't find any jobs that you saved.
              </p>
            </div>
          )}
        </div>
      )}
   </div>
  );
};

export default SavedJobs;
