import { PlusIcon } from "lucide-react";
import { Suspense } from "react";
import DashboardGreeting from "../components/Dashboard/DashboardGreeting";

function Dashboard() {
  return (
    <Suspense>
      <div>
        <div className="max-w-7xl mx-auto px-4 py-8">
          <DashboardGreeting username={"Aayush Vyas"} />
          <div className="flex gap-4">
            <button className="w-full group flex flex-col items-center gap-2">
              <PlusIcon className="size-11 transition-all duration-300 p-2.5 bg-gradient-to-br from-indigo-300 to-indigo-500 text-white rounded-full" />
              <span className="text-sm group-hover:text-indigo-600 transition-all duration-300">
                Create Resume
              </span>
            </button>
          </div>
        </div>
      </div>
    </Suspense>
  );
}

export default Dashboard;
