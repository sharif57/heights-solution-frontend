// "use client"

// import { useState } from "react"
// import Image from "next/image"
// import Link from "next/link"
// import { ChevronDown, Menu } from "lucide-react"
// import { Button } from "@/components/ui/button"
// import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
// import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"

// export default function Navbar() {
//   const [isOpen, setIsOpen] = useState(false)

//   return (
//     <header className="w-full  bg-[#001F3F] text-white">
//       <div className="container mx-auto flex h-16 items-center justify-between px-4 md:px-6">
//         <div className="flex items-center">
//           <Link href="/" className="flex items-center">
//             <Image src="/public.svg" alt="Heights Solutions" width={140} height={40} className="h-8 w-auto" />
//           </Link>
//         </div>

//         {/* Desktop Navigation */}
//         <nav className="hidden items-center space-x-1 md:flex">
//           <DropdownMenu>
//             <DropdownMenuTrigger asChild>
//               <Button variant="ghost" className="flex items-center space-x-1 text-white">
//                 <span>Solutions</span>
//                 <ChevronDown className="h-4 w-4" />
//               </Button>
//             </DropdownMenuTrigger>
//             <DropdownMenuContent align="end" className="w-48">
//               <DropdownMenuItem>
//                 <Link href="#" className="w-full">
//                   Practice Management
//                 </Link>
//               </DropdownMenuItem>
//               <DropdownMenuItem>
//                 <Link href="#" className="w-full">
//                   Patient Engagement
//                 </Link>
//               </DropdownMenuItem>
//               <DropdownMenuItem>
//                 <Link href="#" className="w-full">
//                   Revenue Cycle
//                 </Link>
//               </DropdownMenuItem>
//             </DropdownMenuContent>
//           </DropdownMenu>

//           <DropdownMenu>
//             <DropdownMenuTrigger asChild>
//               <Button variant="ghost" className="flex items-center space-x-1 text-white">
//                 <span>Resources</span>
//                 <ChevronDown className="h-4 w-4" />
//               </Button>
//             </DropdownMenuTrigger>
//             <DropdownMenuContent align="end" className="w-48">
//               <DropdownMenuItem>
//                 <Link href="#" className="w-full">
//                   Case Studies
//                 </Link>
//               </DropdownMenuItem>
//               <DropdownMenuItem>
//                 <Link href="#" className="w-full">
//                   Blog
//                 </Link>
//               </DropdownMenuItem>
//               <DropdownMenuItem>
//                 <Link href="#" className="w-full">
//                   Support
//                 </Link>
//               </DropdownMenuItem>
//             </DropdownMenuContent>
//           </DropdownMenu>
//         </nav>

//         <div className="hidden items-center space-x-4 md:flex">
//           <Button variant="ghost" className="text-white hover:bg-blue-800">
//             Client Portal
//           </Button>
//           <Button className="bg-blue-600 text-white hover:bg-blue-700">Request a Demo</Button>
//         </div>

//         {/* Mobile Navigation */}
//         <Sheet>
//           <SheetTrigger asChild>
//             <Button variant="ghost" size="icon" className="md:hidden text-white">
//               <Menu className="h-6 w-6" />
//               <span className="sr-only">Toggle menu</span>
//             </Button>
//           </SheetTrigger>
//           <SheetContent side="right" className="w-[300px] sm:w-[400px]">
//             <nav className="flex flex-col gap-4 py-6">
//               <Link href="/" className="flex items-center px-2">
//                 <Image src="/logo.svg" alt="Heights Solutions" width={140} height={40} className="h-8 w-auto" />
//               </Link>

//               <div className="flex flex-col space-y-3 mt-6">
//                 <div className="px-2 py-1 font-medium">Solutions</div>
//                 <Link href="#" className="px-4 py-2 text-sm hover:bg-gray-100 rounded-md">
//                   Practice Management
//                 </Link>
//                 <Link href="#" className="px-4 py-2 text-sm hover:bg-gray-100 rounded-md">
//                   Patient Engagement
//                 </Link>
//                 <Link href="#" className="px-4 py-2 text-sm hover:bg-gray-100 rounded-md">
//                   Revenue Cycle
//                 </Link>
//               </div>

//               <div className="flex flex-col space-y-3 mt-2">
//                 <div className="px-2 py-1 font-medium">Resources</div>
//                 <Link href="#" className="px-4 py-2 text-sm hover:bg-gray-100 rounded-md">
//                   Case Studies
//                 </Link>
//                 <Link href="#" className="px-4 py-2 text-sm hover:bg-gray-100 rounded-md">
//                   Blog
//                 </Link>
//                 <Link href="#" className="px-4 py-2 text-sm hover:bg-gray-100 rounded-md">
//                   Support
//                 </Link>
//               </div>

//               <div className="mt-6 space-y-4 px-2">
//                 <Button variant="outline" className="w-full justify-center">
//                   Client Portal
//                 </Button>
//                 <Button className="w-full justify-center bg-blue-600 hover:bg-blue-700">Request a Demo</Button>
//               </div>
//             </nav>
//           </SheetContent>
//         </Sheet>
//       </div>
//     </header>
//   )
// }

"use client";

import { useState } from "react";
import Link from "next/link";
import { ChevronDown, Menu, X } from "lucide-react";
import Image from "next/image";

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="w-full bg-[#001F3F] text-white font-roboto">
      <div className="container mx-auto flex h-20 items-center justify-between px-4 md:px-6 ">
        <div className="flex  items-center gap-10">
          {/* Logo */}
          <div className="flex items-center">
            <Link href="/" className="flex items-center">
              <Image
                src="/public.svg"
                alt="Heights Solutions"
                width={800}
                height={400}
                className="h-[40px] w-auto"
              />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden items-start space-x-8 md:flex">
            <div className="relative group">
              <button className="flex items-center space-x-1 text-white py-2">
                <span>Solutions</span>
                <ChevronDown className="h-4 w-4" />
              </button>
              <div className="absolute left-0 top-full z-10 mt-2 w-48 rounded-md bg-white py-2 shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all">
                <Link
                  href="/services"
                  className="block px-4 py-2 text-base font-medium text-gray-800 hover:bg-gray-100"
                >
                  Managed Services{" "}
                </Link>
                <Link
                  href="/wound-care"
                  className="block px-4 py-2 text-base font-medium text-gray-800 hover:bg-gray-100"
                >
                  Wound Care
                </Link>
                <Link
                  href="/it-service"
                  className="block px-4 py-2 text-base font-medium text-gray-800 hover:bg-gray-100"
                >
                  IT Services
                </Link>
                <Link
                  href="/consulting-services"
                  className="block px-4 py-2 text-base font-medium text-gray-800 hover:bg-gray-100"
                >
                  Practice Optimization{" "}
                </Link>
              </div>
            </div>

            <div className="relative group">
              <button className="flex items-center space-x-1 text-white py-2">
                <span>Resources</span>
                <ChevronDown className="h-4 w-4" />
              </button>
              <div className="absolute left-0 top-full z-10 mt-2 w-48 rounded-md bg-white py-2 shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all">
                {/* <Link
                  href="#"
                  className="block px-4 py-2 text-sm text-gray-800 hover:bg-gray-100"
                >
                  Case Studies
                </Link> */}
                <Link
                  href="#"
                  className="block px-4 py-2 text-base font-medium text-gray-800 hover:bg-gray-100"
                >
                  Blog
                </Link>
                <Link
                  href="#"
                  className="block px-4 py-2 text-base font-medium text-gray-800 hover:bg-gray-100"
                >
                 Help Center
                </Link>
              </div>
            </div>
          </nav>
        </div>
        {/* Desktop Buttons */}
        <div className="hidden items-center space-x-4 md:flex">
          <Link
            href="#"
            className="rounded-full border border-white px-5 py-3 text-sm font-medium text-white transition-colors hover:bg-white/10"
          >
            Client Portal
          </Link>
          <Link
            href="#"
            className="rounded-full bg-[#00509E] px-5 py-3 text-sm font-medium border border-white text-white transition-colors hover:bg-[#0060d3]"
          >
            Request a Demo
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-white"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          <Menu className="h-6 w-6" />
        </button>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="fixed inset-0 z-50 bg-[#001a3a] md:hidden">
            <div className="flex h-16 items-center justify-between px-4">
              <Link href="/" className="flex items-center">
                <div className="relative h-8 w-8 mr-2">
                  <div className="absolute inset-0 bg-[#0070F3] rounded-sm flex items-center justify-center">
                    <div
                      className="h-4 w-4 bg-white"
                      style={{
                        clipPath:
                          "polygon(0 0, 100% 0, 100% 30%, 60% 30%, 60% 100%, 40% 100%, 40% 30%, 0 30%)",
                      }}
                    ></div>
                  </div>
                </div>
                <span className="text-[#0070F3] font-medium">
                  Heights Solutions
                </span>
              </Link>
              <button
                className="text-white"
                onClick={() => setMobileMenuOpen(false)}
              >
                <X className="h-6 w-6" />
              </button>
            </div>
            <nav className="mt-8 px-4">
              <div className="space-y-6">
                <div className="space-y-3">
                  <div className="text-lg font-medium text-white">
                    Solutions
                  </div>
                  <Link
                    href="#"
                    className="block py-2 text-gray-300 hover:text-white"
                  >
                    Practice Management
                  </Link>
                  <Link
                    href="#"
                    className="block py-2 text-gray-300 hover:text-white"
                  >
                    Patient Engagement
                  </Link>
                  <Link
                    href="#"
                    className="block py-2 text-gray-300 hover:text-white"
                  >
                    Revenue Cycle
                  </Link>
                </div>
                <div className="space-y-3">
                  <div className="text-lg font-medium text-white">
                    Resources
                  </div>
                  <Link
                    href="#"
                    className="block py-2 text-gray-300 hover:text-white"
                  >
                    Case Studies
                  </Link>
                  <Link
                    href="#"
                    className="block py-2 text-gray-300 hover:text-white"
                  >
                    Blog
                  </Link>
                  <Link
                    href="#"
                    className="block py-2 text-gray-300 hover:text-white"
                  >
                    Support
                  </Link>
                </div>
                <div className="mt-8 space-y-4">
                  <Link
                    href="#"
                    className="block w-full rounded-full border border-white px-5 py-2 text-center font-medium text-white transition-colors hover:bg-white/10"
                  >
                    Client Portal
                  </Link>
                  <Link
                    href="#"
                    className="block w-full rounded-full bg-[#0070F3] px-5 py-2 text-center font-medium text-white transition-colors hover:bg-[#0060d3]"
                  >
                    Request a Demo
                  </Link>
                </div>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
