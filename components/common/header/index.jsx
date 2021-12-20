import React from "react";
import Image from "next/dist/client/image";
import SocialMedia from "./SocialMedia";

const Header = () => (
  <header>
    <Image src="/logo-voltadev.svg" alt="Vercel Logo" width={120} height={60} />
    <SocialMedia />
  </header>
);

export default Header;
