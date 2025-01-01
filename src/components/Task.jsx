import PropTypes from "prop-types";
import { useEffect, useState } from "react";
import { getSubtaskByTaskID } from "../api";
import TaskModal from "./modals/TaskModal";

const Task = ({ task }) => {
  const [subtask, setSubtask] = useState([]);
  const [completed, setCompleted] = useState(0);
  const [isTaskModalOpen, setIsTaskModalOpen] = useState(false);

  useEffect(() => {
    fetchSubtask();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [task.id]);

  const fetchSubtask = async () => {
    const response = await getSubtaskByTaskID(task.id);
    if (response.error) {
      console.log(response.error);
    } else {
      setSubtask(response.data);

      const completedCount = subtask.filter((sub) => sub.isCompleted).length;
      setCompleted(completedCount);
    }
  };

  return (
    <div>
      <div
        onClick={() => setIsTaskModalOpen(true)}
        className="px-3 py-6 text-gray-800 rounded-lg shadow-lg cursor-pointer bg-sky-200 shadow-sky-500 w-72 first:my-5 hover:text-sky-500"
      >
        <p className="font-bold tracking-wide">{task.title}</p>
        <p className="mt-2 text-xs font-bold tracking-tighter text-gray-500">
          {completed} of {subtask && subtask.length} completed tasks
        </p>
      </div>
      {/* Task Modal */}
      {isTaskModalOpen && (
        <TaskModal task={task} setIsTaskModalOpen={setIsTaskModalOpen} />
      )}
    </div>
  );
};

Task.propTypes = {
  task: PropTypes.shape({
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string,
    column_id: PropTypes.string.isRequired,
  }).isRequired,
};

export default Task;
