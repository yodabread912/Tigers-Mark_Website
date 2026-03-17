"use client";

import { useState } from "react";
import Image from "next/image";

const ChatHelper = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleLinkClick = () => {
    setIsOpen(false);
  };

  const socialLinks = [
    {
      id: "call",
      label: "Call",
      icon: "/call-icon.png",
      color: "bg-green-500",
      href: "tel:+63917231675",
    },
    {
      id: "viber",
      label: "Viber",
      icon: "/viber-icon.png",
      color: "bg-purple-500",
      href: "https://www.viber.com/en/?utm_source=invite&utm_Medium=share&utm_campaign=msgtest",
    },
    {
      id: "messenger",
      label: "Messenger",
      icon: "/messenger-icon.png",
      color: "bg-blue-500",
      href: "https://www.facebook.com/tigersmarkcorporation",
    },
    {
      id: "instagram",
      label: "Instagram",
      icon: "/instagram-icon.png",
      color: "bg-pink-500",
      href: "https://www.instagram.com/tigersmarkcorp?igsh=MWxsdXozdHFrcmpzNg==",
    },
    {
      id: "linkedin",
      label: "LinkedIn",
      icon: "/linkedin-icon.png",
      color: "bg-blue-700",
      href: "https://www.linkedin.com/company/tigersmarkcorp/",
    },
    {
      id: "location",
      label: "Location",
      icon: "/location-icon.png",
      color: "bg-teal-600",
      href: "https://share.google/98USiS7pUrO9jQfeS",
    },
  ];

  return (
    <div className="fixed right-4 bottom-4 md:right-6 md:bottom-6 z-50">
      {/* Expanded Menu */}
      {isOpen && (
        <div className="absolute bottom-16 md:bottom-20 right-0 flex flex-col gap-2 md:gap-3 mb-2 md:mb-4 animate-in fade-in slide-in-from-bottom-2 duration-300">
          {socialLinks.map((link) => (
            <a
              key={link.id}
              href={link.href}
              onClick={handleLinkClick}
              target={link.href.startsWith("http") ? "_blank" : undefined}
              rel={
                link.href.startsWith("http") ? "noopener noreferrer" : undefined
              }
              className="active:opacity-75 hover:opacity-90 transition-all flex items-center gap-2 md:gap-3 px-3 md:px-4 py-2 md:py-3 rounded-full text-black font-medium shadow-lg hover:shadow-xl active:shadow-md transform hover:scale-105 active:scale-100 w-36 md:w-40 bg-white border-2 border-black text-sm md:text-base"
            >
              <Image
                src={link.icon}
                alt={link.label}
                width={24}
                height={24}
                className="w-5 h-5 md:w-6 md:h-6 shrink-0"
              />
              <span className="truncate">{link.label}</span>
            </a>
          ))}
        </div>
      )}

      {/* Toggle Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-14 h-14 md:w-16 md:h-16 rounded-full flex items-center justify-center shadow-lg hover:shadow-xl active:shadow-md transition-all transform hover:scale-110 active:scale-95"
        aria-label={isOpen ? "Close chat helper" : "Open chat helper"}
        aria-expanded={isOpen}
        type="button"
      >
        {isOpen ? (
          <Image
            src="/close-icon.png"
            alt="Close chat helper"
            width={32}
            height={32}
            className="w-7 h-7 md:w-8 md:h-8"
          />
        ) : (
          <Image
            src="/chat-icon.png"
            alt="Chat helper"
            width={32}
            height={32}
            className="w-7 h-7 md:w-8 md:h-8"
          />
        )}
      </button>
    </div>
  );
};

export default ChatHelper;
