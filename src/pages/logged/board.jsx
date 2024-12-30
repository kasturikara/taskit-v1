import PropTypes from "prop-types";
import { useEffect, useState } from "react";
import { getBoardByID } from "../../api";
import Swal from "sweetalert2";

const BoardPages = ({ id }) => {
  const [board, setBoard] = useState(null);

  useEffect(() => {
    const fetchBoard = async () => {
      const response = await getBoardByID(id);
      if (response.error) {
        Swal.fire({
          icon: "error",
          title: "Ups...",
          text: response.error,
        });
      }
      setBoard(response.data);
    };
    fetchBoard();
  }, [id]);

  return (
    <div>
      BoardPages: {id}
      <div className="">
        <h1>{board?.name}</h1>
        <p>{board?.description}</p>
      </div>
    </div>
  );
};

BoardPages.propTypes = {
  id: PropTypes.string.isRequired,
};

export default BoardPages;
