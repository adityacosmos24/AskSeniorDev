// "use client";

// import { useState } from "react";
// import { Menu, X } from "lucide-react";
// import Link from "next/link";
// import { useRouter, usePathname } from "next/navigation";
// import { ShinyButton } from "@/components/ui/shiny-button";

// const NAVBAR_HEIGHT = 64;

// export default function Navbar() {
//   const [isOpen, setIsOpen] = useState(false);
//   const router = useRouter();
//   const pathname = usePathname();

//   const handleScrollNav = (targetId: string) => {
//     setIsOpen(false);

//     const doScroll = () => {
//       const el = document.getElementById(targetId);
//       if (el) {
//         const y =
//           el.getBoundingClientRect().top +
//           window.scrollY -
//           NAVBAR_HEIGHT;
//         window.scrollTo({ top: y, behavior: "smooth" });
//       }
//     };

//     if (pathname !== "/") {
//       router.push("/");
//       setTimeout(doScroll, 200);
//     } else {
//       doScroll();
//     }
//   };

//   const navItems = [
//     { name: "Home", to: "/", type: "route" },
//     { name: "CM Sheet", to: "aboutus", type: "scroll" },
//     { name: "Blog", to: "teams", type: "scroll" },
//     { name: "Ask Code", to: "/Councellors", type: "route" },
//     { name: "QA", to: "footer", type: "scroll" },
//   ];

//   return (
//     <nav
//       className="bg-white/80 backdrop-blur-md border-b border-white/20 shadow-lg fixed w-full z-50"
//       style={{ height: NAVBAR_HEIGHT }}
//     >
//       <div className="max-w-7xl mx-auto h-full">
//         <div className="grid grid-cols-3 items-center h-full">
          
//           {/* LOGO — FIXED VERTICAL ALIGNMENT */}
//           <div className="flex items-center justify-start h-full">
//             <Link
//               href="/"
//               onClick={() => setIsOpen(false)}
//               className="flex items-center"
//             >
//               <span className="text-xl md:text-2xl font-bold tracking-wide text-[#00A3FF]">
//                 Senior
//               </span>
//             </Link>
//           </div>

//           {/* Desktop Navigation */}
//           <ul className="hidden md:flex gap-10 text-gray-800 font-medium justify-center">
//             {navItems.map((item) => (
//               <li key={item.name} className="relative group cursor-pointer">
//                 {item.type === "scroll" ? (
//                   <span
//                     onClick={() => handleScrollNav(item.to)}
//                     className="relative inline-block transition-all duration-300 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-[#00A3FF] group-hover:to-[#ADE2FF] group-hover:bg-clip-text"
//                   >
//                     {item.name}
//                     <span className="absolute left-0 bottom-0 h-0.5 w-0 bg-gradient-to-r from-[#00A3FF] to-[#ADE2FF] transition-all duration-300 group-hover:w-full" />
//                   </span>
//                 ) : (
//                   <Link
//                     href={item.to}
//                     onClick={() => setIsOpen(false)}
//                     className="relative inline-block transition-all duration-300 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-[#00A3FF] group-hover:to-[#ADE2FF] group-hover:bg-clip-text"
//                   >
//                     {item.name}
//                     <span className="absolute left-0 bottom-0 h-0.5 w-0 bg-gradient-to-r from-[#00A3FF] to-[#ADE2FF] transition-all duration-300 group-hover:w-full" />
//                   </Link>
//                 )}
//               </li>
//             ))}
//           </ul>

//           {/* CTA Buttons */}
//           <div className="hidden md:flex gap-3 justify-end">
//             <ShinyButton className="bg-[#00A3FF] text-white">
//               <Link href="/login">Sign In</Link>
//             </ShinyButton>
//             <ShinyButton className="border border-[#00A3FF]">
//               <Link href="/register" className="text-[#00A3FF]">
//                 Sign Up
//               </Link>
//             </ShinyButton>
//           </div>

//           {/* Mobile Menu Button */}
//           <div className="md:hidden col-start-3 justify-self-end mx-5">
//             <button
//               onClick={() => setIsOpen(!isOpen)}
//               className="text-gray-800 focus:outline-none"
//               aria-label="Toggle menu"
//             >
//               {isOpen ? <X size={28} /> : <Menu size={28} />}
//             </button>
//           </div>
//         </div>
//       </div>

//       {/* Mobile Dropdown (UNCHANGED) */}
//       {isOpen && (
//         <ul className="md:hidden bg-white shadow-md px-6 py-4 space-y-4 text-gray-800 font-medium">
//           {navItems.map((item) => (
//             <li key={item.name}>
//               {item.type === "scroll" ? (
//                 <span
//                   onClick={() => handleScrollNav(item.to)}
//                   className="block hover:text-orange-600 transition duration-200 cursor-pointer"
//                 >
//                   {item.name}
//                 </span>
//               ) : (
//                 <Link
//                   href={item.to}
//                   onClick={() => setIsOpen(false)}
//                   className="block hover:text-orange-600 transition duration-200"
//                 >
//                   {item.name}
//                 </Link>
//               )}
//             </li>
//           ))}

//           <li>
//             <ShinyButton className="w-full bg-[#00A3FF] text-white px-4 py-2 rounded-md">
//               <Link href="/login" onClick={() => setIsOpen(false)}>
//                 Sign In
//               </Link>
//             </ShinyButton>
//           </li>

//           <li>
//             <ShinyButton className="w-full border bg-[#00A3FF] text-white px-4 py-2 rounded-md">
//               <Link href="/register" onClick={() => setIsOpen(false)}>
//                 Sign Up
//               </Link>
//             </ShinyButton>
//           </li>
//         </ul>
//       )}
//     </nav>
//   );
// }



import Link from 'next/link';

// 1. Added "default" so it matches your import
export default function Navbar() {         
  
  // 2. Added the "return" keyword
  return (
    <header className="w-full bg-[#F7FCFF] border-b border-slate-200 shrink-0">
      {/* 3. Fixed Tailwind classes to standard values (7xl and px-8) */}
      <div className="max-w-7xl mx-auto px-4 lg:px-8">
        <div className="h-16 flex items-center justify-between">

          <div className="flex-1 flex justify-start">
            <Link href="/">
              <h1 className="text-[#00A3FF] font-bold text-2xl cursor-pointer tracking-tight">
                Senior
              </h1>
            </Link>
          </div>

          <nav className="hidden md:flex items-center gap-10 text-sm font-medium text-slate-700">
            <Link href="/cm-sheet" className="hover:text-[#00A3FF] transition-colors">CM Sheet</Link>
            <Link href="/blog" className="hover:text-[#00A3FF] transition-colors">Blog</Link>
            <Link href="/ask-code" className="hover:text-[#00A3FF] transition-colors">Ask Code</Link>
            <Link href="/qa" className="hover:text-[#00A3FF] transition-colors">QA</Link>
          </nav>

          <div className="flex-1 flex justify-end">
            <Link 
              href="/profile" 
              className="inline-block bg-[#00A3FF] hover:bg-sky-600 text-white px-6 py-2 rounded font-semibold text-sm shadow-sm transition-colors"
            >
              Log in
            </Link>
          </div>

        </div>
      </div>
    </header>
  );
}