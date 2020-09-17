import Head from 'next/head';
import Link from 'next/link';
import Layout, { siteTitle } from '../components/Layout';
import { getSortedPostsData } from '../lib/posts';
import {
  HeadingLG, HeadingMd, HeadingMdPadding, SubLink,
} from '../components/style';
import BlogList from '../components/BlogList';

export function getStaticProps() {
  const lastPostsData = getSortedPostsData('posts', 3);
  const lastPortfolioData = getSortedPostsData('posts', 3, 'portfolio');
  return {
    props: {
      lastPostsData,
      lastPortfolioData,
    },
  };
}

export default function Home({ lastPostsData }) {
  return (
    <Layout>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <HeadingMd>
        <p>
          I'm a JavaScript developer that love to learn new technologies.
          You can contact me on my e-mail matheus.alnun@gmail.com.
        </p>
      </HeadingMd>
      <HeadingMdPadding>
        <HeadingLG>Blog</HeadingLG>
        <BlogList data={lastPostsData} />
        <Link href="/blog">
          <SubLink>
            All Posts &#8594;
          </SubLink>
        </Link>
      </HeadingMdPadding>
    </Layout>
  );
}
