import { PlusIcon, UploadCloudIcon } from "lucide-react";
import { Suspense } from "react";
import DashboardGreeting from "../components/Dashboard/DashboardGreeting";
import DashboardActionBtn from "../components/Dashboard/DashboardActionBtn";

function Dashboard() {
  return (
    <Suspense>
      <div>
        <div className="max-w-7xl mx-auto px-4 py-8">
          <DashboardGreeting username={"Aayush Vyas"} />
          <div className="flex gap-4">
            <DashboardActionBtn icon={PlusIcon} text={"Create Resume"}  />
            <DashboardActionBtn icon={UploadCloudIcon} text={"Upload Resume"} />
          </div>
        </div>
      </div>
    </Suspense>
  );
}

export default Dashboard;
