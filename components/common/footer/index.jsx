import Image from "next/image";

const index = () => (
	<footer className="footer">
		<a href="https://voltauxui.cl/" target="_blank" rel="noopener noreferrer">
			hecho con amor ❤️{" "}
			<span className="logo">
				<Image
					src="/logo-voltadev.svg"
					alt="Vercel Logo"
					width={100}
					height={43}
				/>
			</span>
		</a>
	</footer>
);

export default index;
