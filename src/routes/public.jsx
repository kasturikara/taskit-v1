import { Route, Routes } from "react-router-dom";
import NotFoundPages from "../pages/not-found";
import PublicPages from "../pages/public";
import LoginPages from "../pages/public/login";
import RegisterPages from "../pages/public/register";

const PublicRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<PublicPages />} />

      <Route path="/login" element={<LoginPages />} />
      <Route path="/register" element={<RegisterPages />} />

      <Route path="*" element={<NotFoundPages />} />
    </Routes>
  );
};

export default PublicRoutes;
