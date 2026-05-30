import Sidebar from "../components/layout/Sidebar";
import Navbar from "../components/layout/Navbar";
import MobileNav from "../components/layout/MobileNav";

function MainLayout({ children }) {
  return (
    <div className="min-h-screen bg-[#f7f7f7] flex">

      {/* SIDEBAR */}
      <Sidebar />

      {/* MAIN CONTENT */}
      <div className="flex-1 lg:ml-72">

        {/* DESKTOP NAVBAR */}
        <div className="hidden lg:block">
          <Navbar />
        </div>

        {/* PAGE CONTENT */}
        <main className="p-4 md:p-6 pt-24 lg:pt-6 pb-24 lg:pb-6">
          {children}
        </main>

      </div>

      {/* MOBILE BOTTOM NAV */}
      <div className="lg:hidden fixed bottom-0 left-0 w-full z-50">
        <MobileNav />
      </div>

    </div>
  );
}

export default MainLayout;

