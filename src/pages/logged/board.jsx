import PropTypes from "prop-types";
import { useEffect, useState } from "react";
import { getColumnByBoardID } from "../../api";
import Swal from "sweetalert2";
import Column from "../../components/Column";

const BoardPages = ({ boardID }) => {
  const [columns, setColumns] = useState(null);

  useEffect(() => {
    fetchColumns();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [boardID]);

  const fetchColumns = async () => {
    const response = await getColumnByBoardID(boardID);
    if (response.error) {
      Swal.fire({
        icon: "error",
        title: "Ups...",
        text: response.error,
      });
    } else {
      setColumns(response.data);
    }
  };

  return (
    <div className="flex h-screen gap-6 overflow-x-scroll">
      {columns && columns.length > 0 ? (
        <>
          {columns.map((col, i) => (
            <Column key={i} col={col} />
          ))}
        </>
      ) : (
        <div className="">
          <h1 className="text-2xl font-bold text-center">Tidak ada data.</h1>
        </div>
      )}
    </div>
  );
};

BoardPages.propTypes = {
  boardID: PropTypes.string.isRequired,
};

export default BoardPages;
