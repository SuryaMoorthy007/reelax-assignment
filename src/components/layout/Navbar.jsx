import { FiSearch, FiMenu } from "react-icons/fi";
import { FaRegUserCircle } from "react-icons/fa";

function Navbar() {
  return (
    <div className="bg-white border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-6 py-5 flex items-center justify-between">

        <div className="relative w-full max-w-md">
          <FiSearch className="absolute top-3 left-3 text-gray-400" />

          <input
            type="text"
            placeholder="Find influencers to collaborate with"
            className="w-full pl-10 pr-4 h-12 border border-gray-300 rounded-xl outline-none text-sm"
          />
        </div>

        <div className="flex items-center gap-3 ml-4">

          <button className="bg-yellow-400 text-white px-6 h-12 rounded-xl text-sm font-medium">
            Upgrade
          </button>

          <button className="bg-blue-600 text-white px-6 h-12 rounded-xl text-sm font-medium">
            + Create Campaign
          </button>

          <FaRegUserCircle className="text-3xl text-gray-500 cursor-pointer" />

          <FiMenu className="text-2xl text-gray-500 cursor-pointer" />

        </div>
      </div>
    </div>
  );
}

export default Navbar;
