import { getApplications } from "@/api/apiApplication";
import useFetch from "@/hooks/use-fetch";
import { useUser } from "@clerk/clerk-react";
import { ScaleLoader } from "react-spinners";
import ApplicationCard from "./application-card";
import { useEffect } from "react";

const CreatedApplications = () => {
  const { user } = useUser();

  const {
    loading: loadingApplications,
    data: dataApplications,
    fn: fnApplications,
  } = useFetch(getApplications, {
    user_id: user.id,
  });

  useEffect(() => {
    fnApplications();
  }, []);

  if (loadingApplications) {
    return (
        <div className="flex justify-center items-center min-h-screen">
          <ScaleLoader color="#36d7b7" height={35} width={15} margin={2} />
        </div>
      );
  }

  return (
    <div className="flex flex-col gap-2">
    {dataApplications?.map((application)=>{
    return(
        <ApplicationCard  
            key={application.id}
            application={application}
            isCandidate = {true}
        />
    )
    })  
    }
    </div>
  );
};

export default CreatedApplications;
