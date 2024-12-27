import { Route, Routes } from "react-router-dom";

const LoggedRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<>welcome</>} />
    </Routes>
  );
};

export default LoggedRoutes;
