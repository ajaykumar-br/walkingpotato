"use client";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { FaInstagram, FaWhatsapp } from "react-icons/fa";
import { BsEnvelope } from "react-icons/bs";

export default function Navbar() {
  const pathname = usePathname();
  const [isVisible, setIsVisible] = useState(true);

  const navItems = [
    { name: "Home", href: "/" },
    { name: "Menu", href: "/menu" },
    { name: "Gallery", href: "/gallery" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const scrollPercentage = (window.scrollY / window.innerHeight) * 100;
      setIsVisible(scrollPercentage < 5);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`pl-10 pr-14 sticky top-0 z-50 shadow-md bg-wp-brown transition-transform duration-500 ease-in-out ${
        isVisible ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      <div className="text-wp-text">
        <div className="flex h-fit items-center justify-between">
          {/* Logo */}
          <Link href="/">
            <Image
              src="/assets/logo_sm.png"
              alt="Logo"
              width={100}
              height={50}
              className="object-contain"
              priority
            />
          </Link>

          {/* Navigation */}
          <ul className="flex items-center gap-8 font-script">
            {navItems.map((item) => (
              <li key={item.name}>
                <Link
                  href={item.href}
                  className={`pb-1 transition hover:border-b-2 font-semibold text-3xl ${
                    pathname === item.href ? "border-b-2 border-wp-red" : ""
                  }`}
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>

          {/* Social Icons */}
          <div className="flex items-center gap-4">
            <a
              href="https://instagram.com/yourusername"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="hover:scale-110 transition"
            >
              <FaInstagram className="h-7 w-7" />
            </a>

            <a
              href="https://wa.me/1234567890"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="WhatsApp"
              className="hover:scale-110 transition"
            >
              <FaWhatsapp className="h-7 w-7" />
            </a>

            <a
              href="mailto:youremail@example.com"
              aria-label="Email"
              className="hover:scale-110 transition"
            >
              <BsEnvelope className="h-7 w-7" />
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}