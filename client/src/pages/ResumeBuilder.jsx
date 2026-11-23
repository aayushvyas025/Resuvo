import { Suspense, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { dummyResumeData, resumeSections } from "../constant/content";
import DashboardNavigation from "../components/helpers/DashboardNavigation";
import ProgressBar from "../components/ResumeBuilder/ProgressBar";
import SectionNavigation from "../components/ResumeBuilder/SectionNavigation";
import ResumeSections from "../components/ResumeBuilder/ResumeSections";
import ResumePreview from "../components/ResumeBuilder/ResumePreview";

function ResumeBuilder() {
  const [resumeData, setResumeData] = useState({
    _id: "",
    title: "",
    personal_info: {},
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
    console.log(resume)
    if (!resume) return;
    setResumeData(resume);
    document.title = resume.title;
  }

  useEffect(() => {
    handleLoadExistResume();
  }, []);

  console.log(resumeData);

  return (
    <Suspense>
      <main>
        <DashboardNavigation />
        <div className="max-w-7xl mx-auto px-4 pb-8">
          <div className="grid lg:grid-cols-12 gap-8">
            {/* left panel: Resume Builder Form */}
            <div className="relative lg:col-span-5 rounded-lg overflow-hidden">
              <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 pt-1">
                <ProgressBar
                  width={`${(activeSectionIdx * 100) / (resumeSections.length - 1)}%`}
                />
                <SectionNavigation
                  sectionIndex={activeSectionIdx}
                  handleSectionNavigate={setActiveSectionIdx}
                  sections={resumeSections}
                />
                <ResumeSections
                  section={activeSection}
                  personalInfo={resumeData.personal_info}
                  handleChangeResumeData={setResumeData}
                  removeBackground={removeBackground}
                  handleRemoveBackground={setRemoveBackground}
                />
              </div>
            </div>
            {/* right panel: resume preview */}
            <div className="lg:col-span-7 max-lg:mt-6">
             <div>
              {/* Resume Actions Btns */}
             </div>
            <ResumePreview data={resumeData} template={resumeData.template} accentColor={resumeData.accent_color} />
            </div>
          </div>
        </div>
      </main>
    </Suspense>
  );
}

export default ResumeBuilder;
