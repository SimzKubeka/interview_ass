export default function Sidebar() {
 return (
  <aside className="w-64 bg-teal-400 p-6 shadow-md hidden md:block">
    {/* logo section */}
    <div className="mb-8">
     <img src="/logo.png" alt="logo" className="w-10 h-10" />
    </div>
   <ul className="space-y-4">
    <li>Dashboard</li>
    <li>User Settings</li>
    <li>Manage Facilities</li>
    <li>Logs</li>
   </ul>
  </aside>
 );
}
