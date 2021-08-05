import Head from "next/head";
import Image from "next/image";
import { NextPage, GetStaticProps } from "next";
import { getAllFilesFrontMatter } from "../lib/mdx";

const Home: NextPage = (props) => {
	console.log(props);

	return (
		<div className="container">
			<Head>
				<title>VoltaDev Blog</title>
				<meta name="description" content="Generated by create next app" />
				<link rel="icon" href="/favicon.ico" />
			</Head>

			<main className="main"></main>

			<footer className="footer">
				<a
					href="https://voltauxui.cl/"
					target="_blank"
					rel="noopener noreferrer"
				>
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
		</div>
	);
};

//get all post
export const getStaticProps: GetStaticProps = async () => {
	const posts = await getAllFilesFrontMatter("posts");
	return {
		props: {
			posts,
		},
	};
};

export default Home;
