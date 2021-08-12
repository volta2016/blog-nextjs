import React from "react";
import Image from "next/dist/client/image";
import Search from "../header/Search";

const Header = (props) => (
	<header>
		<Image src="/logo-voltadev.svg" alt="Vercel Logo" width={120} height={60} />
		<Search {...props} />
	</header>
);

export default Header;
