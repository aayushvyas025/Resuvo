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
  const [editResumeId, setEditResumeId] = useState(null);
  const navigate = useNavigate();

  const loadAllResumes = () => {
    setAllResumes(dummyResumeData);
  };

  const handleCloseModal = () => {
    setActiveModal(null);
    setResumeTitle("");
    setResumeFile(null);
    setEditResumeId(null);
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
    if (!editResumeId) return;
    const resumeId = editResumeId;
    handleCloseModal();
    navigate(`builder/${resumeId}`);
  }

  async function handleDeleteResume(resumeId) {
    const confirm = alert("");
  }

  useEffect(() => {
    loadAllResumes();
  }, []);

  return (
    <Suspense>
      <div>
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
          <HorizontalRule />
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
                  onClick={() => navigate(`builder/${resume._id}`)}
                  handleEdit={() => {
                    setActiveModal("edit");
                    setEditResumeId(resume._id);
                    setResumeTitle(resume.title);
                  }}
                  handleDelete={() => setActiveModal("delete")}
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
        {activeModal === "delete" && <DeleteResumeModal />}
      </div>
    </Suspense>
  );
}

export default Dashboard;
