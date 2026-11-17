import { PlusIcon, UploadCloudIcon } from "lucide-react";
import { Suspense, useEffect, useState } from "react";
import DashboardGreeting from "../components/Dashboard/DashboardGreeting";
import DashboardActionBtn from "../components/Dashboard/DashboardActionBtn";
import HorizontalRule from "../components/helpers/HorizontalRule";
import { dummyResumeData, resumesThemeColor } from "../constant/content";
import UsersResumeChip from "../components/helpers/UsersResumeChip";


function Dashboard() {
  const [allResumes, setAllResumes] = useState([]);

  const loadAllResumes = async () => {
    setAllResumes(dummyResumeData);
  };

  useEffect(() => {
    loadAllResumes();
  }, []);

  return (
    <Suspense>
      <div>
        <div className="max-w-7xl mx-auto px-4 py-8">
          <DashboardGreeting username={"Aayush Vyas"} />
          <div className="flex gap-4">
            <DashboardActionBtn icon={PlusIcon} text={"Create Resume"} />
            <DashboardActionBtn icon={UploadCloudIcon} text={"Upload Resume"} />
          </div>
          <HorizontalRule />
          <div className="grid grid-cols-2 sm:flex flex-wrap gap-4">
            {allResumes.map((resume, idx) => {
              const baseColor =
                resumesThemeColor[idx % resumesThemeColor.length];
              return (
                <UsersResumeChip
                  key={idx}
                  baseColor={baseColor}
                  title={resume.title}
                  updatedAt={resume.updatedAt}
                />
              );
            })}
          </div>
        </div>
      </div>
    </Suspense>
  );
}

export default Dashboard;
