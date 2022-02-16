import React, { useState } from "react";
import Image from "next/dist/client/image";
import DarkMode from "./DarkMode";
import SocialMedia from "./SocialMedia";
import MenuMobile from "./MenuMobile";
import NavMobile from "./NavMobile";
import Link from "next/link";

const Header = () => {
  const [sidebar, setSidebar] = useState(true);
  const showSideBar = () => setSidebar(!sidebar);
  return (
    <>
      <header>
        <div className="container flex-d ai-c jc-sb py-s">
          <Link href="/" passHref>
            <a>
              <Image
                src="/static/images/logo-voltadev.svg"
                alt="Vercel Logo"
                width={120}
                height={60}
              />
            </a>
          </Link>
          <nav className="flex-d">
            <DarkMode />
            <SocialMedia />
          </nav>
          <MenuMobile showSideBar={showSideBar} sidebar={sidebar} />
        </div>
      </header>
      <NavMobile sidebar={sidebar} />
    </>
  );
};

export default Header;
