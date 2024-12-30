import { Bell } from "@phosphor-icons/react";

const Header = () => {
  const user = JSON.parse(sessionStorage.getItem("user"));

  return (
    <div className="p-3">
      <div className="container flex justify-between mx-auto">
        <span className="gap-0">
          <h1 className="text-xl font-extrabold tracking-widest uppercase">
            {user?.username}
          </h1>
          <h6 className="text-sm">selamat datang</h6>
        </span>
        <div className="flex items-center gap-4">
          <input
            type="text"
            placeholder="Search tasks..."
            className="w-64 p-2 border rounded-xl"
            onChange={(e) => console.log(e.target.value)}
          />
          <Bell className="w-6 h-6 fill-sky-600" weight="fill" />
        </div>
      </div>
    </div>
  );
};

export default Header;
