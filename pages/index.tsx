import * as React from "react";
import Head from "next/head";
import Image from "next/image";
import { NextPage, GetStaticProps } from "next";
import { getAllFilesFrontMatter } from "../lib/mdx";
import Layout from "../components/layout"
import Search from "../components/Search"
import Link from "../components/Link";
import { useRouter } from "next/router"
import { Flyyer } from "@flyyer/flyyer"

/* import CodeTest from "../components/code/CodeTest" */

type Props = {
	posts: {
		title: string;
		slug: string;
		image: string;
		author: string;
		nameauthor: string;
	}[];
};

const Home: NextPage<Props> = ({ posts }) => {
	const [search, setSearch] = React.useState("");
	//frontMatter > title string slug image >
	//filter me by title and whether that title includes what I'm looking for
	const filteredPosts = posts.filter((frontMatter) =>
		frontMatter.title.toLowerCase().includes(search.toLowerCase())
	);

	
  const flyyer = new Flyyer({
    project: "voltadev-blog",
    path: useRouter().asPath,
		
  });

	// console.log(posts);

	return (
		<>
			<Head>
				<title>VoltaDev Blog</title>
				<meta name="Blog Volta dev" content="Tips, updates new features and technologies all about the JavaScript language" />
				<meta property="og:url" content="https://blog-voltadev.vercel.app/" />
				<meta property="og:description" content="Tips, updates new features and technologies all about the JavaScript language" />
				<meta key="og:image" property="og:image" content={flyyer.href()} />
        <meta key="twitter:image" name="twitter:image" content={flyyer.href()} />
        <meta key="twitter:card" name="twitter:card" content="summary_large_image" />
        <meta key="flyyer:default" name="flyyer:default" content={flyyer.href()} />

				<link rel="icon" href="/favicon.ico" />
			</Head>
			
			<Layout>
			<main className="main">
				<Search  setSearch={setSearch}/>
				<div className="container flex-content">
				{filteredPosts.map((post) => (
					<Link href={`/blog/${post.slug}`} key={post.slug}>
						<div className="d-flex">
							<Image
								className="img"
								src={post.image}
								alt={post.title}
								width={100}
								height={110}
							/>
							<div>
								<h3 className="my-xxs">{post.title}</h3>
								<Image
									src={post.author}
									alt={post.nameauthor}
									width={16}
									height={16}
								/>
								<span>VoltaDev</span>
							</div>
						</div>
					</Link>
				))}
			
				</div>
			</main>
			</Layout>
		</>
	);
};

//get all post main
export const getStaticProps: GetStaticProps = async () => {
	const posts = await getAllFilesFrontMatter("posts");
	return {
		props: {
			posts,
		},
	};
};

export default Home;
