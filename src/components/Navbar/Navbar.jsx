import { useNavigate } from "react-router-dom";

const Navbar = ({ onNavigate }) => {
  const navigate = useNavigate();

  return (
    <nav className="flex justify-between items-center text-sm tracking-wide text-gray-600">
      {/* Left */}
      <div className="flex items-center gap-2">
        <span className="w-2 h-2"></span>
        <span className="text-2xl">AD</span>
      </div>

      {/* Right */}
      <div className="hidden md:flex gap-8 px-12 py-4 rounded-full border border-gray-300 bg-white/60 backdrop-blur-md shadow-sm">
        <button
          onClick={onNavigate.projects}
          className="hover:text-black transition"
        >
          WORK
        </button>
        <button
          onClick={onNavigate.experience}
          className="hover:text-black transition"
        >
          EXPERIENCE
        </button>
        <button
          onClick={onNavigate.about}
          className="hover:text-black transition"
        >
          ABOUT
        </button>
        <button
          onClick={onNavigate.contact}
          className="hover:text-black transition"
        >
          CONTACT
        </button>

        {/* Terminal Button */}
        <button
          onClick={() => navigate("/terminal")}
          className="hover:text-black transition"
        >
          TERMINAL
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
