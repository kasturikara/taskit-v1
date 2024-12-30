import { BaseballHelmet, Kanban, SignOut } from "@phosphor-icons/react";
import { useEffect, useState } from "react";
import { getBoards } from "../api";
import Swal from "sweetalert2";
import { Link, useLocation } from "react-router-dom";

const Sidebar = () => {
  const [boards, setBoards] = useState([]);
  const location = useLocation();

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

  const handleLogout = () => {
    Swal.fire({
      title: "Keluar?",
      text: "Apakah anda yakin ingin keluar?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "Ya",
      cancelButtonText: "Tidak",
    }).then((result) => {
      if (result.isConfirmed) {
        sessionStorage.removeItem("user");
        window.location.href = "/login";
      }
    });
  };

  return (
    <div className="relative flex flex-col h-full p-4 text-gray-50 w-52 bg-sky-600">
      <div className="space-y-3">
        <div className="flex items-center justify-between">
          <BaseballHelmet className="w-11 h-11 fill-sky-50" />
          <h2 className="text-2xl font-black tracking-widest">TASKIT</h2>
        </div>
        <div className="flex-1">
          <ul className="pt-2 pb-4 space-y-1 text-sm">
            <li className="rounded-sm">
              <Link
                to="/"
                className={`flex items-center p-2 space-x-3 rounded-md ${
                  location.pathname === "/" && "bg-sky-700 font-bold"
                }`}
              >
                <Kanban className="w-7 h-7 fill-sky-50" />
                <span>Dashboard</span>
              </Link>
            </li>
            {boards.length > 0 ? (
              boards.map((board) => (
                <li key={board.id} className="rounded-sm">
                  <Link
                    to={`board/${board.id}`}
                    className={`flex items-center p-2 space-x-3 rounded-md ${
                      location.pathname === `/board/${board.id}` &&
                      "bg-sky-700 font-bold"
                    }`}
                  >
                    <Kanban className="w-7 h-7 fill-sky-50" />
                    <span>{board.name}</span>
                  </Link>
                </li>
              ))
            ) : (
              <li className="rounded-sm">No boards</li>
            )}
          </ul>
        </div>
      </div>

      <button
        onClick={handleLogout}
        className="absolute bottom-2 flex items-center justify-center gap-2 w-48 p-2 rounded-md left-[0.45rem] bg-sky-700 text-gray-50"
      >
        <SignOut className="w-6 h-6 fill-sky-50" />
        <span>Keluar</span>
      </button>
    </div>
  );
};

export default Sidebar;
