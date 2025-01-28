import { FaGoogle } from "react-icons/fa";

const AuthPage = () => {
  return (
    <div className="flex h-svh flex-col items-center justify-center">
      <div className="flex flex-col items-center justify-between gap-4 rounded-lg p-12 text-center transition hover:shadow-lg hover:shadow-black md:shadow-md">
        <h1 className="bg-gradient-to-br from-[#28A7ED] via-[#A337F6] to-[#E84D70] bg-clip-text text-transparent">
          Welcome to our feedback board!
        </h1>
        <p>We hope you enjoy feeding back 😉.</p>
        <button className="flex items-center gap-2 rounded-2xl bg-gradient-to-br from-[#28A7ED] via-[#A337F6] to-[#E84D70] px-8 py-2 font-bold text-white transition hover:-translate-y-1 hover:shadow-md hover:shadow-black/30">
          Login with Google
          <FaGoogle />
        </button>
        <p className="text-pretty italic text-gray-600/90">
          Made by Omar & Abdallah.
        </p>
      </div>
    </div>
  );
};

export default AuthPage;
