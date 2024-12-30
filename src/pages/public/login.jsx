import { BaseballHelmet, Eye, EyeClosed } from "@phosphor-icons/react";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { login } from "../../api";
import Swal from "sweetalert2";

const LoginPages = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [animationClass, setAnimationClass] = useState("login-enter");
  const [fadeClass, setFadeClass] = useState("fade-enter");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  useEffect(() => {
    setAnimationClass("login-enter");
    setFadeClass("fade-enter");
    return () => {
      setAnimationClass("login-exit");
      setFadeClass("fade-exit");
    };
  }, []);

  const handleChange = (e) => {
    const { id, value } = e.target;
    if (id === "email") {
      setEmail(value);
    } else if (id === "password") {
      setPassword(value);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { data, error } = await login(email, password);
    if (error) {
      Swal.fire({
        icon: "error",
        title: "Ups...",
        text: error,
      });
    } else {
      sessionStorage.setItem("user", JSON.stringify(data));
      window.location.href = "/";
    }
  };

  return (
    <div className="relative h-screen bg-sky-500">
      <div>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 320"
          className="absolute top-0 left-0 w-full rotate-180"
        >
          <path
            fill="#3ce"
            fillOpacity="1"
            d="M0,256L48,224C96,192,192,128,288,133.3C384,139,480,213,576,218.7C672,224,768,160,864,165.3C960,171,1056,245,1152,240C1248,235,1344,149,1392,106.7L1440,64L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
          ></path>
        </svg>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 320"
          className="absolute top-0 left-0 w-full rotate-180 opacity-50"
        >
          <path
            fill="#3ce5fb"
            fillOpacity="1"
            d="M0,256L60,240C120,224,240,192,360,197.3C480,203,600,245,720,224C840,203,960,117,1080,101.3C1200,85,1320,139,1380,165.3L1440,192L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"
          ></path>
        </svg>
      </div>

      <div className="relative top-0 grid h-full grid-cols-1 md:grid-cols-2">
        {/* kiri */}
        <div
          className={`flex flex-col items-center justify-center p-4 md:h-full h-28 md:p-8 ${fadeClass}`}
        >
          <BaseballHelmet className="w-20 h-20 text-white md:w-32 md:h-32" />
          <h1 className="text-lg font-bold tracking-widest text-white md:text-xl">
            TASKIT
          </h1>
        </div>

        {/* kanan */}
        <div
          className={`flex flex-col items-center gap-8 p-4 bg-white md:justify-center md:p-16 text-slate-900 rounded-t-3xl md:rounded-tr-none md:rounded-s-3xl ${animationClass}`}
        >
          <div className="text-center">
            <h1 className="text-3xl font-extrabold md:text-4xl text-sky-500">
              Selamat Datang
            </h1>
            <p className="text-lg md:text-xl">
              Masuk ke akun Anda untuk melanjutkan
            </p>
          </div>

          <form
            onSubmit={handleSubmit}
            className="flex flex-col items-center justify-center w-full max-w-md gap-6 md:gap-8"
          >
            <input
              id="email"
              type="email"
              placeholder="Email"
              value={email}
              onChange={handleChange}
              required
              className="w-full p-2 border rounded-md text-sky-700 border-sky-300 focus:border-sky-500 bg-sky-100 focus:outline-none"
            />
            <div className="relative w-full">
              <input
                id="password"
                type={showPassword ? "text" : "password"}
                placeholder="Password"
                value={password}
                onChange={handleChange}
                required
                className="w-full p-2 border rounded-md text-sky-700 border-sky-300 bg-sky-100 focus:border-sky-500 focus:outline-none"
              />
              <span
                className="absolute inset-y-0 right-0 flex items-center pr-3 cursor-pointer"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? (
                  <Eye className="w-6 md:w-8 text-sky-700" />
                ) : (
                  <EyeClosed className="w-6 md:w-8 text-sky-700" />
                )}
              </span>
            </div>

            <button
              type="submit"
              className="w-full p-2 mt-8 text-white rounded-md bg-sky-500"
            >
              Masuk
            </button>
          </form>

          <div className="flex flex-col items-center justify-center w-full max-w-md gap-4">
            <p className="text-center ">
              Belum punya akun?{" "}
              <Link to="/register" className="font-semibold text-sky-500">
                Daftar
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPages;
