import { lazy } from "react";
import { Route, Routes } from "react-router-dom";
import Layout from "../Layout/Layout";

const HomePage = lazy(() => import("../pages/Home"));
const AuthPage = lazy(() => import("../pages/Auth"));
const DashboardPage = lazy(() => import("../pages/Dashboard"));
const PreviewPage = lazy(() => import("../pages/Preview"));
const ResumeBuilderPage = lazy(() => import("../pages/ResumeBuilder"));

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/auth" element={<AuthPage />} />
      <Route path="app" element={<Layout />}>
        <Route index element={<DashboardPage />} />
        <Route path="builder/:id" element={<ResumeBuilderPage />} />
      </Route>
      <Route path="/preview/:id" element={<PreviewPage />} />
    </Routes>
  );
}

export default AppRoutes;
