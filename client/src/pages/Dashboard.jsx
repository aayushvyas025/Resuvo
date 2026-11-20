import { PlusIcon, UploadCloudIcon } from "lucide-react";
import { Suspense, useEffect, useState } from "react";
import DashboardGreeting from "../components/Dashboard/DashboardGreeting";
import DashboardActionBtn from "../components/Dashboard/DashboardActionBtn";
import HorizontalRule from "../components/helpers/HorizontalRule";
import { dummyResumeData, resumesThemeColor } from "../constant/content";
import UsersResumeChip from "../components/helpers/UsersResumeChip";
import { useNavigate } from "react-router-dom";
import ResumeBuilderForm from "../components/Form/ResumeBuilderForm";
import DeleteResumeModal from "../components/helpers/DeleteResumeModal";

function Dashboard() {
  const [allResumes, setAllResumes] = useState([]);
  const [activeModal, setActiveModal] = useState(null);
  const [resumeTitle, setResumeTitle] = useState("");
  const [resumeFile, setResumeFile] = useState(null);
  const [selectResumeId, setSelectResumeId] = useState(null);
  const navigate = useNavigate();

  const loadAllResumes = () => {
    setAllResumes(dummyResumeData);
  };

  const handleCloseModal = () => {
    setActiveModal(null);
    setResumeTitle("");
    setResumeFile(null);
    setSelectResumeId(null);
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];

    if (!file) return;

    if (file.type !== "application/pdf") {
      // show validation error
      return;
    }

    setResumeFile(file);
  };

  async function handleCreateResume(e) {
    e.preventDefault();
    setActiveModal(null);
    navigate("builder/demoID01");
  }

  async function handleUploadResume(e) {
    e.preventDefault();
    setActiveModal(null);
    navigate("builder/demoID01");
  }

  async function handleEditResume(e) {
    e.preventDefault();
    if (!selectResumeId) return;
    const resumeId = selectResumeId;
    handleCloseModal();
    navigate(`builder/${resumeId}`);
  }

  function handleDeleteResume(resumeId) {
    if (!resumeId) {
      // toast
      return;
    }
    setAllResumes((prev) => prev.filter((resume) => resume._id !== resumeId));

    handleCloseModal();
  }

  useEffect(() => {
    loadAllResumes();
  }, []);

  return (
    <Suspense>
      <main>
        <div className="max-w-7xl mx-auto px-4 py-8">
          <DashboardGreeting username={"Aayush Vyas"} />
          <div className="flex gap-4">
            <DashboardActionBtn
              icon={PlusIcon}
              text={"Create Resume"}
              onClick={() => setActiveModal("create")}
            />
            <DashboardActionBtn
              icon={UploadCloudIcon}
              text={"Upload Resume"}
              onClick={() => setActiveModal("upload")}
            />
          </div>
          <HorizontalRule style={"border-slate-300 my-6 sm:w-[305px]"} />
          <div className="grid grid-cols-2 sm:flex flex-wrap gap-4">
            {allResumes.map((resume, idx) => {
              const baseColor =
                resumesThemeColor[idx % resumesThemeColor.length];
              return (
                <UsersResumeChip
                  key={resume._id}
                  baseColor={baseColor}
                  title={resume.title}
                  updatedAt={resume.updatedAt}
                  href={`builder/${resume._id}`}
                  handleEdit={() => {
                    setActiveModal("edit");
                    setSelectResumeId(resume._id);
                    setResumeTitle(resume.title);
                  }}
                  handleDelete={() => {
                    setActiveModal("delete");
                    setSelectResumeId(resume._id);
                  }}
                />
              );
            })}
          </div>
        </div>
        {activeModal && (
          <ResumeBuilderForm
            modalTitle={
              activeModal === "create"
                ? "Create A Resume"
                : activeModal === "upload"
                  ? "Upload A Resume"
                  : "Edit A Resume"
            }
            submitLabel={
              activeModal === "create"
                ? "Create"
                : activeModal === "upload"
                  ? "Upload"
                  : "Edit"
            }
            resumeTitle={resumeTitle}
            onTitleChange={(e) => setResumeTitle(e.target.value)}
            onSubmit={
              activeModal === "create"
                ? handleCreateResume
                : activeModal === "upload"
                  ? handleUploadResume
                  : handleEditResume
            }
            onClose={handleCloseModal}
            isUploadMode={activeModal === "upload"}
            resumeFile={resumeFile}
            onFileChange={handleFileChange}
          />
        )}
        {activeModal === "delete" && (
          <DeleteResumeModal
            closeModal={() => setActiveModal(null)}
            handleDeleteResume={() => handleDeleteResume(selectResumeId)}
          />
        )}
      </main>
    </Suspense>
  );
}

export default Dashboard;
