import { NextPage, GetStaticPaths, GetStaticProps } from "next";
import { MDXRemote } from "next-mdx-remote";
import { getFiles, getFileBySlug } from "../../lib/mdx";
import ViewsCounter from "../../components/ViewsCounter";
import MDXComponents from "../../components/MDXComponents";

type Prosp = {
	frontMatter: {
		title: string;
		slug: string;
		iamge: string;
		wordCount: number;
		readingTime: {
			minutes: number;
			text: string;
			time: number;
			words: number;
		};
	};
	mdxSource: {
		compiledSource: string;
	};
};

const DynamicPost: NextPage<Prosp> = ({ frontMatter, mdxSource }) => {
	// console.info(props);
	return (
		<div className="container">
			<h1>{frontMatter.title}</h1>
			<span>
				- <ViewsCounter slug={frontMatter.slug} />
			</span>
			<article>
				<MDXRemote {...mdxSource} components={MDXComponents} />
			</article>
		</div>
	);
};

//get all posts
export const getStaticPaths: GetStaticPaths = async () => {
	const posts = await getFiles("posts");
	const paths = posts.map((post) => ({
		params: {
			slug: post.replace(/\.mdx/, ""),
		},
	}));

	return {
		paths,
		fallback: false,
	};
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
	const post = await getFileBySlug("posts", String(params?.slug)); //search file with params slug

	return {
		props: {
			...post,
		},
	};
};

export default DynamicPost;
