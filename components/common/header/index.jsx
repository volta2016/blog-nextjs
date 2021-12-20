import React from "react";
import Image from "next/dist/client/image";
import SocialMedia from "./SocialMedia";

const Header = () => (
  <header>
    <div className="container flex-d ai-c jc-sb py-s">
      <Image
        src="/logo-voltadev.svg"
        alt="Vercel Logo"
        width={120}
        height={60}
      />
      <SocialMedia />
    </div>
  </header>
);

export default Header;
