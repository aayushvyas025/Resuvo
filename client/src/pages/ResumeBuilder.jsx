import { Suspense, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { dummyResumeData, resumeSections } from "../constant/content";
import DashboardNavigation from "../components/helpers/DashboardNavigation";
import HorizontalRule from "../components/helpers/HorizontalRule";
import ProgressBar from "../components/ResumeBuilder/ProgressBar";

function ResumeBuilder() {
  const [resumeData, setResumeData] = useState({
    _id: "",
    title: "",
    professionalInfo: {},
    professional_summary: "",
    experience: [],
    education: [],
    project: [],
    skills: [],
    template: "classic",
    accent_color: "#3B82F6",
    public: false,
  });
  const [activeSectionIdx, setActiveSectionIdx] = useState(0);
  const [removeBackground, setRemoveBackground] = useState(false);

  const activeSection = resumeSections[activeSectionIdx];

  const { id } = useParams();

  async function handleLoadExistResume() {
    const resume = dummyResumeData.find((resume) => resume._id === id);
    if (!resume) return;
    setResumeData(resume);
    document.title = resume.title;
  }

  useEffect(() => {
    handleLoadExistResume();
  }, []);

  return (
    <Suspense>
      <main>
        <DashboardNavigation />
        <div className="max-w-7xl mx-auto px-4 pb-8">
          <div className="grid lg:grid-cols-12 gap-8">
            {/* left panel: Resume Builder Form */}
            <div className="relative lg:col-span-5 rounded-lg overflow-hidden">
              <ProgressBar
                width={`${(activeSectionIdx * 100) / (resumeSections.length - 1)}%`}
              />
            </div>
            {/* right panel: resume preview */}
          </div>
        </div>
      </main>
    </Suspense>
  );
}

export default ResumeBuilder;
