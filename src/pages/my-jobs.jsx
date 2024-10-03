import CreatedApplications from "@/components/created-applications";
import CreatedJobs from "@/components/created-jobs";
import { useUser } from "@clerk/clerk-react";
import { ScaleLoader } from "react-spinners";


const MyJobs = () => {
  const {user, isLoaded}=useUser();

  if (!isLoaded) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <ScaleLoader color="#36d7b7" height={35} width={15} margin={2} />
      </div>
    );
  }
  return (
    <div>
      <h1 className="gradient-title font-extrabold text-6xl sm:text-7xl text-center pb-8">
      {
        user?.unsafeMetadata?.role === "candidate" ? "My Applications" : "My Jobs"
      }     
     </h1>
     {
        user?.unsafeMetadata?.role === "candidate" ? 
        (<CreatedApplications />) : 
        (<CreatedJobs />)
      } 
    </div>
  );
};

export default MyJobs;
