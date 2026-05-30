import { FaHome, FaTasks, FaCalendarAlt, FaCog } from "react-icons/fa";

function MobileNav() {
  return (
    <div className="bg-white border-t p-4 flex justify-around text-xl">
      <FaHome />
      <FaTasks />
      <FaCalendarAlt />
      <FaCog />
    </div>
  );
}

export default MobileNav;