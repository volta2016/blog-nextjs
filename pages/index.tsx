import * as React from "react";

import Image from "next/image";
import { NextPage, GetStaticProps } from "next";
import { getAllFilesFrontMatter } from "../lib/mdx";
import Layout from "../components/layout";
import Search from "../components/Search";
import Link from "../components/Link";
// import { useRouter } from "next/router";
// import { Flyyer } from "@flyyer/flyyer";

/* import CodeTest from "../components/code/CodeTest" */

type Props = {
  posts: {
    title: string;
    slug: string;
    image: string;
    author: string;
    nameauthor: string;
    published: string;
  }[];
};

const Home: NextPage<Props> = ({ posts }) => {
  const [search, setSearch] = React.useState("");
  //frontMatter > title string slug image >
  //filter me by title and whether that title includes what I'm looking for
  const filteredPosts = posts.filter((frontMatter) =>
    frontMatter.title.toLowerCase().includes(search.toLowerCase())
  );

  // const SortedPosts = posts.sort((a, b) =>
  //   a.published > b.published ? -1 : 1
  // );

  return (
    <>
      <Layout>
        <main className="main">
          <Search setSearch={setSearch} />
          <div className="container flex-content">
            {filteredPosts
              .sort((a, b) => (a.published > b.published ? 1 : -1))
              .map((post) => (
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
