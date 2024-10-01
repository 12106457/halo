import SideBar from '@/app/ui/sidemenu/sidebar'
import DashboardHeaderBar from '@/app/ui/dashboardheader/headerbar'

export default function Layout({ children }: { children: React.ReactNode }) {
    return (
      <div className="min-h-screen flex flex-col">
        {/* Top Header */}
        <header className="bg-white text-blue-800 h-20 flex items-center justify-between border-b-[1.5px] border-[#d9d9d9] bg-blue-400">
          <DashboardHeaderBar/>
        </header>
  
        <div className="flex flex-1 h-screen bg-white">
          {/* Side Menu */}
          <SideBar />
          {/* Main Content */}
          <main className="flex-1  bg-white border-b-2 border-[#d9d9d9]">
            {children}
          </main>
        </div>
      </div>
    );
}