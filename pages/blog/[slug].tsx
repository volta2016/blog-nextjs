import { NextPage, GetStaticPaths, GetStaticProps } from "next";
import { MDXRemote } from "next-mdx-remote";
import { getFiles, getFileBySlug } from "../../lib/mdx";
import { NextSeo } from "next-seo";
import ViewsCounter from "../../components/ViewsCounter";
import MDXComponents from "../../components/MDXComponents";
import Layout from "../../components/layout";
import Image from "next/image";

type Prosp = {
  frontMatter: {
    title: string;
    slug: string;
    image: string;
    cover: string;
    wordCount: number;
    published: string;
    description: string;
    className: string;
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
    <>
      <NextSeo
        title={frontMatter.title}
        description={frontMatter.description}
        openGraph={{
          url: `${frontMatter.cover}`,
          site_name: "VoltaDev Blog",
        }}
      />
      <Layout>
        <article className="container-blog">
          <div className="flex-d mb-m">
            <div>
              <h1>{frontMatter.title}</h1>
              <p className="font-xs mb-m">
                <ViewsCounter slug={frontMatter.slug} /> -{" "}
                <i>{frontMatter.published}</i>
              </p>
            </div>
            <div className="ml-m">
              <Image
                className="img"
                src={frontMatter.image}
                alt={frontMatter.title}
                width={100}
                height={110}
              />
            </div>
          </div>

          <div>
            <MDXRemote {...mdxSource} components={MDXComponents} />
          </div>
        </article>
      </Layout>
    </>
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
