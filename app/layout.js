import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/header";
import { ClerkProvider } from "@clerk/nextjs";
import { Toaster } from "sonner";
import { Github, Linkedin, Mail, Twitter } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Wealth",
  description: "One Stop Finance Platform",
};

export default function RootLayout({ children }) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className={`${inter.className}`}>
          <Header />
          <main className="min-h-screen">{children}</main>
          <Toaster richColors />
          <footer className="bg-white border-t">
            <div className="container mx-auto px-4 py-8">
              <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                {/* Logo and Description */}
                <div className="col-span-1 md:col-span-2">
                  <Link href="/">
                    <Image
                      src="/logo.png"
                      alt="Welth Logo"
                      width={200}
                      height={60}
                      className="h-12 w-auto object-contain mb-4"
                    />
                  </Link>
                </div>

                {/* Quick Links */}
                <div>
                  <h3 className="font-semibold text-lg mb-4">Quick Links</h3>
                  <ul className="space-y-2">
                    <li>
                      <Link
                        href="/dashboard"
                        className="text-gray-600 hover:text-blue-600"
                      >
                        Dashboard
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/transaction/create"
                        className="text-gray-600 hover:text-blue-600"
                      >
                        Transaction
                      </Link>
                    </li>
                  </ul>
                </div>

                {/* Contact Info */}
                <div>
                  <h3 className="font-semibold text-lg mb-4">
                    Connect With Us
                  </h3>
                  <div className="flex space-x-4">
                    <a
                      href="#"
                      className="text-gray-600 hover:text-blue-600"
                      aria-label="Twitter"
                    >
                      <Twitter size={20} />
                    </a>
                    <a
                      href="#"
                      className="text-gray-600 hover:text-blue-600"
                      aria-label="LinkedIn"
                    >
                      <Linkedin size={20} />
                    </a>
                    <a
                      href="#"
                      className="text-gray-600 hover:text-blue-600"
                      aria-label="GitHub"
                    >
                      <Github size={20} />
                    </a>
                    <a
                      href="mailto:contact@welth.com"
                      className="text-gray-600 hover:text-blue-600"
                      aria-label="Email"
                    >
                      <Mail size={20} />
                    </a>
                  </div>
                </div>
              </div>

              {/* Copyright */}
              {/* <div className="mt-8  text-center text-gray-600">
                <p>
                  &copy; {new Date().getFullYear()} Welth. All rights reserved.
                </p>
              </div> */}
            </div>
          </footer>
        </body>
      </html>
    </ClerkProvider>
  );
}
