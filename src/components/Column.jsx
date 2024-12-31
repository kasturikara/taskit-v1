import { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { getTaskByColumnID } from "../api";
import Task from "./Task";

const Column = ({ col }) => {
  const [task, setTask] = useState(null);
  const [color, setColor] = useState("");

  useEffect(() => {
    fetchTask();
    setColor(generateRandomColor());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [col.id]);

  const fetchTask = async () => {
    const response = await getTaskByColumnID(col.id);
    if (response.error) {
      console.log(response.error);
    } else {
      setTask(response.data);
    }
  };

  const generateRandomColor = () => {
    const colors = [
      "bg-red-500",
      "bg-blue-500",
      "bg-green-500",
      "bg-yellow-500",
      "bg-indigo-500",
      "bg-purple-500",
      "bg-pink-500",
      "bg-teal-500",
      "bg-orange-500",
    ];
    const randomIndex = Math.floor(Math.random() * colors.length);
    return colors[randomIndex];
  };

  return (
    <div className="mx-5 scrollbar-hide min-w-72">
      {col && (
        <>
          <p className="font-semibold flex items-center gap-2 tracking-widest md:tracking-[.2em] text-gray-800">
            <div className={`rounded-full w-4 h-4 ${color}`} />
            {col.name} ({task ? task.length : 0})
          </p>

          {task && task.map((t) => <Task key={t.id} task={t} />)}
        </>
      )}
    </div>
  );
};
Column.propTypes = {
  col: PropTypes.shape({
    id: PropTypes.string,
    board_id: PropTypes.string,
    name: PropTypes.string,
  }).isRequired,
};

export default Column;
