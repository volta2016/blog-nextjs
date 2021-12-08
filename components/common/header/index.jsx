import React from "react";
import Image from "next/dist/client/image";
import Search from "../header/Search";

const Header = (props) => (
  <header>
    <div className="container flex-h">
      <Image
        src="/logo-voltadev.svg"
        alt="Vercel Logo"
        width={120}
        height={60}
      />
      <Search {...props} />
    </div>
  </header>
);

export default Header;
