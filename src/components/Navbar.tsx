

"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { ChevronDown, Menu, X } from "lucide-react";
import Image from "next/image";
import Modal from "./Modal";
import { Button } from "./ui/button";

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [data, setData] = useState<{ role?: string } | null>(null);

  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      try {
        const parsedUser = JSON.parse(storedUser);
        setData(parsedUser);
      } catch (error) {
        console.error("Failed to parse localStorage data:", error);
      }
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    window.location.href = "/";
  };


  return (
    <header className="w-full bg-[#001F3F] text-white font-roboto ">
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
          <nav className="hidden items-start space-x-8 md:flex z-50">
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
                <Link
                  href="/calculator"
                  className="block px-4 py-2 text-base font-medium text-gray-800 hover:bg-gray-100"
                >
                  Calculator{" "}
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
                  href="/blog"
                  className="block px-4 py-2 text-base font-medium text-gray-800 hover:bg-gray-100"
                >
                  Blog
                </Link> 
                <Link
                  href="/helps"
                  className="block px-4 py-2 text-base font-medium text-gray-800 hover:bg-gray-100"
                >
                  Help Center
                </Link>
                <a
                  href="https://onedrive.live.com/personal/089c9aa5ae30a2d8/_layouts/15/Doc.aspx?sourcedoc=%7B8067f2db-7c99-4d8c-bbd3-c4106345c956%7D&action=default&wdOrigin=TEAMS%2DMAGLEV%2Ep2p%5Fns%2Erwc&wdExp=TEAMS%2DCONTROL&wdhostclicktime=1758189118007&redeem=aHR0cHM6Ly8xZHJ2Lm1zL3gvYy8wODljOWFhNWFlMzBhMmQ4L0VkdnlaNENaZkl4TnU5UEVFR05GeVZZQl9XNHYxYjlHenlGNGRRV3lPLXg1dFE_d2RPcmlnaW49VEVBTVMtTUFHTEVWLnAycF9ucy5yd2Mmd2RFeHA9VEVBTVMtQ09OVFJPTCZ3ZGhvc3RjbGlja3RpbWU9MTc1ODE4OTExODAwNyZ3ZWI9MQ&slrid=9ce6c6a1-a026-d000-fa89-3d317e46c238&originalPath=aHR0cHM6Ly8xZHJ2Lm1zL3gvYy8wODljOWFhNWFlMzBhMmQ4L0VkdnlaNENaZkl4TnU5UEVFR05GeVZZQl9XNHYxYjlHenlGNGRRV3lPLXg1dFE_cnRpbWU9VGJWbkE1bjIzVWc&CID=91ada7a4-6b89-41ed-9966-0a6046d25888&_SRM=0:G:137"
                  target="_blank"
                  className="block px-4 py-2 text-base font-medium text-gray-800 hover:bg-gray-100"
                >
                  Excel Sheet
                </a>

                {data?.role === "ADMIN" && (
                  <div>
                    <Link
                      href="/news-letter"
                      className="block px-4 py-2 text-base font-medium text-gray-800 hover:bg-gray-100"
                    >
                      All News Letter
                    </Link>
                    <Link
                      href="/create-blog"
                      className="block px-4 py-2 text-base font-medium text-gray-800 hover:bg-gray-100"
                    >
                      Create Blog
                    </Link>
                  </div>
                )}
              </div>
            </div>
          </nav>
        </div>
        {/* Desktop Buttons */}
        <div className="hidden items-center space-x-4 md:flex">
          <Modal />

          {data?.role === "ADMIN" ? (
            <Button onClick={handleLogout} className="rounded-full border border-white px-5 py-6 text-sm font-medium bg-red-400 text-white transition-colors hover:bg-white/10">LogOut</Button>
          ) : (
            <Link
              href="/portal"
              className="rounded-full border border-white px-5 py-3 text-sm font-medium text-white transition-colors hover:bg-white/10"
            >
              Client Portal
            </Link>
          )}


          <Link
            href="/helps"
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
                <div className="mt-8 space-y-4 ">
                  <Modal />
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
