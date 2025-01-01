import PropTypes from "prop-types";
import { useEffect, useState } from "react";
import { getSubtaskByTaskID } from "../../api";
import { X } from "@phosphor-icons/react";

const TaskModal = ({ task, setIsTaskModalOpen }) => {
  const [subtask, setSubtask] = useState([]);

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
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white rounded-lg shadow-lg w-96">
        <div className="flex items-center justify-between p-4 border-b">
          <h2 className="text-xl font-bold">{task.title}</h2>
          <button
            onClick={() => setIsTaskModalOpen(false)}
            className="text-gray-500 hover:text-gray-700"
          >
            <X size={20} />
          </button>
        </div>
        <div className="p-4">
          <p className="mb-4">{task.description}</p>
          <h3 className="text-lg font-semibold">Subtasks</h3>
          <ul className="list-disc list-inside">
            {subtask.map((sub) => (
              <li key={sub.id} className="ml-4">
                {sub.title} - {sub.isCompleted ? "Completed" : "Not Completed"}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

TaskModal.propTypes = {
  task: PropTypes.shape({
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string,
    column_id: PropTypes.string.isRequired,
  }).isRequired,
  setIsTaskModalOpen: PropTypes.func.isRequired,
};

export default TaskModal;
