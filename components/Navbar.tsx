export default function Navbar() {
 return (
  <nav className="w-full bg-teal-500 shadow-md p-4 flex justify-between">
   <div className="text-lg font-bold">
    App Name
   </div>
   <div className="flex items-center gap-4">
    <div>Notification</div>
    <div>Menu / User</div>
   </div>
  </nav>
 );
}
