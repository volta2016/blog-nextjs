import React from "react";
import Image from "next/dist/client/image";
import SocialMedia from "./SocialMedia";
import Link from "next/link";

const Header = () => (
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
      <SocialMedia />
    </div>
  </header>
);

export default Header;
