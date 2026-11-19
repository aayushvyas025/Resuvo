import { Suspense, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { dummyResumeData } from "../constant/content";

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

  const { id } = useParams();

  async function handleLoadExistResume() {
    const resume = dummyResumeData.find((resume) => resume._id === id);
    if(!resume) return; 
    setResumeData(resume); 
    document.title = resume.title;
  }
 
  useEffect(() => {
    handleLoadExistResume(); 
  }, [])

  return <Suspense>Resume Builder</Suspense>;
}

export default ResumeBuilder;
