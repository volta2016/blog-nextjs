import { NextPage, GetStaticPaths, GetStaticProps } from "next";
import { MDXRemote } from "next-mdx-remote";
import { getFiles, getFileBySlug } from "../../lib/mdx";

import ViewsCounter from "../../components/ViewsCounter";
import MDXComponents from "../../components/MDXComponents";

const DynamicPost: NextPage = (props) => {
	console.log(props);
	return <>Hello World</>;
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
