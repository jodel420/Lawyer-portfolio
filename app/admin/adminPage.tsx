// "use client"

// import { useState, useEffect } from "react"
// import { Menu, X } from "lucide-react"
// import { cn } from "@/lib/utils"

// export function AdminPage() {
//   const [isOpen, setIsOpen] = useState(false)
//   const [isScrolled, setIsScrolled] = useState(false)

//   // Handle scroll event to change header style
//   useEffect(() => {
//     const handleScroll = () => {
//       setIsScrolled(window.scrollY > 50)
//     }

//     window.addEventListener("scroll", handleScroll)
//     return () => {
//       window.removeEventListener("scroll", handleScroll)
//     }
//   }, [])

//   return (
    
//     <div className="min-h-screen bg-slate-50">
//       {/* Header */}

      
//       <header
//         className={cn(
//           "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
//           isScrolled ? "bg-slate-900 shadow-md py-2" : "bg-transparent py-4",
//         )}
//       >
//         <div className="container mx-auto px-4 flex justify-between items-center">
//           <div className="text-white text-xl font-bold">Admin Panel</div>

//           {/* Desktop Navigation - Added this section */}
//           <nav className="hidden md:flex space-x-6">
//             <button className="text-white hover:text-slate-300 transition-colors">Dashboard</button>
//             <button className="text-white hover:text-slate-300 transition-colors">Users</button>
//             <button className="text-white hover:text-slate-300 transition-colors">Settings</button>
//             <button className="text-white hover:text-slate-300 transition-colors">Reports</button>
//           </nav>

//           {/* Mobile Menu Toggle */}
//           <button className="md:hidden text-white p-2" onClick={() => setIsOpen(!isOpen)} aria-label="Toggle menu">
//             {isOpen ? <X size={24} /> : <Menu size={24} />}
//           </button>
//         </div>

//         {/* Mobile Navigation */}
//         {isOpen && (
//           <nav className="md:hidden bg-slate-800">
//             <div className="container mx-auto px-4 py-4 flex flex-col space-y-4">
//               <button className="text-white hover:text-slate-300 transition-colors">Dashboard</button>
//               <button className="text-white hover:text-slate-300 transition-colors">Users</button>
//               <button className="text-white hover:text-slate-300 transition-colors">Settings</button>
//               <button className="text-white hover:text-slate-300 transition-colors">Reports</button>
//             </div>
//           </nav>
//         )}
//       </header>

//       {/* Main Content - Added padding-top to account for fixed header */}
//       <main className="pt-24 p-4 container mx-auto">
//         <h1 className="text-2xl font-bold">Admin Dashboard</h1>
//         <p className="mt-4">Welcome to the admin dashboard. Here you can manage your application.</p>

//         {/* Added some example content to make the page more visible */}
//         <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
//           <div className="bg-white p-6 rounded-lg shadow">
//             <h2 className="text-lg font-semibold">Users</h2>
//             <p className="text-3xl font-bold mt-2">1,234</p>
//             <p className="text-green-500 text-sm mt-1">↑ 12% from last month</p>
//           </div>
//           <div className="bg-white p-6 rounded-lg shadow">
//             <h2 className="text-lg font-semibold">Revenue</h2>
//             <p className="text-3xl font-bold mt-2">$34,567</p>
//             <p className="text-green-500 text-sm mt-1">↑ 8% from last month</p>
//           </div>
//           <div className="bg-white p-6 rounded-lg shadow">
//             <h2 className="text-lg font-semibold">Active Sessions</h2>
//             <p className="text-3xl font-bold mt-2">267</p>
//             <p className="text-red-500 text-sm mt-1">↓ 3% from last month</p>
//           </div>
//         </div>
//       </main>
//     </div>
//   )
// }


"use client";
export default function Admin() {
  return (
    <div className="bg-blue-500 text-white p-4 m-4 rounded">
    Tailwind Test
  </div>
  );
}