import { Route, Routes } from "react-router-dom";
import DashboardPages from "../pages/logged";
import Layouts from "../layouts";
import NotFoundPages from "./../pages/not-found";
import { useEffect, useState } from "react";
import { getBoards } from "../api";
import Swal from "sweetalert2";
import BoardPages from "../pages/logged/board";

const LoggedRoutes = () => {
  const [boards, setBoards] = useState([]);

  useEffect(() => {
    const fetchBoards = async () => {
      const response = await getBoards();
      if (response.error) {
        Swal.fire({
          icon: "error",
          title: "Ups...",
          text: response.error,
        });
      }
      setBoards(response.data);
    };
    fetchBoards();
  }, []);

  return (
    <Layouts>
      <Routes>
        <Route path="/" element={<DashboardPages />} />

        {boards?.map((board) => (
          <Route
            key={board.id}
            path={`/board/${board.id}`}
            element={<BoardPages id={board.id} />}
          />
        ))}

        <Route path="*" element={<NotFoundPages />} />
      </Routes>
    </Layouts>
  );
};

export default LoggedRoutes;
