import PropTypes from "prop-types";
import Sidebar from "../components/Sidebar";
import Header from "../components/Header";

const Layouts = ({ children }) => {
  return (
    <div className="flex flex-col h-screen md:flex-row">
      <Sidebar className="w-full md:w-1/4 lg:w-1/5" />
      <div className="flex flex-col flex-1 text-gray-800 bg-gray-50">
        <Header />
        <main className="flex-1 p-4 overflow-auto">{children}</main>
      </div>
    </div>
  );
};

Layouts.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layouts;
