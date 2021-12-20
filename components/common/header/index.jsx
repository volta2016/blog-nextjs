import React from "react";
import Image from "next/dist/client/image";

const Header = (props) => (
  <header>
    <div className="container flex-h">
      <Image
        src="/logo-voltadev.svg"
        alt="Vercel Logo"
        width={120}
        height={60}
      />
    </div>
  </header>
);

export default Header;
