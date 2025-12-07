// components/ResponsiveNavBar.js
"use client";

import Link from "next/link";

export default function ResponsiveNavBar() {
  return (
    <nav className="bg-black text-white p-4 px-5 w-full">
      <div className="container mx-auto flex justify-between items-center">
        <div className="font-bold text-xl">
          <Link href="/">Declan-Infotech</Link>
        </div>

        <ul className="flex space-x-6">

          {/* Scroll to contact section on the same page */}
          <li>
            <a
              href="#contact-section"
              className="hover:text-gray-300 transition-colors duration-300"
            >
              Contact
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}
