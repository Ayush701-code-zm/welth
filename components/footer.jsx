import React from "react";
import { Facebook, Twitter, Instagram } from "lucide-react"; // Customize icons as needed
import Link from "next/link";
import Image from "next/image";

const Footer = () => {
  return (
    <footer className="bg-white/80 backdrop-blur-md border-t py-8">
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-between space-y-6 md:space-y-0">
        {/* Logo and Links */}
        <div className="flex flex-col items-center md:items-start space-y-4 md:space-y-0 md:flex-row md:space-x-8">
          <Link href="/">
            <Image
              src={"/logo.png"}
              alt="Welth Logo"
              width={200}
              height={60}
              className="h-12 w-auto object-contain"
            />
          </Link>
          <div className="flex flex-col md:flex-row md:space-x-8">
            <Link
              href="#features"
              className="text-gray-600 hover:text-blue-600"
            >
              Features
            </Link>
            <Link
              href="#testimonials"
              className="text-gray-600 hover:text-blue-600"
            >
              Testimonials
            </Link>
          </div>
        </div>

        {/* Social Media Icons */}
        <div className="flex space-x-6">
          <Link href="https://facebook.com" target="_blank">
            <Facebook size={24} className="text-gray-600 hover:text-blue-600" />
          </Link>
          <Link href="https://twitter.com" target="_blank">
            <Twitter size={24} className="text-gray-600 hover:text-blue-600" />
          </Link>
          <Link href="https://instagram.com" target="_blank">
            <Instagram
              size={24}
              className="text-gray-600 hover:text-blue-600"
            />
          </Link>
        </div>

        {/* Footer Text */}
        <div className="text-center md:text-right text-gray-600">
          <p>&copy; 2025 Welth. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
