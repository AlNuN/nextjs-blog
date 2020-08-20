import Head from 'next/head';
import Link from 'next/link';
import Layout, { siteTitle } from '../components/Layout';
import Date from '../components/date';
import { getSortedPostsData } from '../lib/posts';
import {
  HeadingLG, HeadingMd, HeadingMdPadding, Ul, Li, LightDate,
} from './style';

export async function getStaticProps() {
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData,
    },
  };
}

export default function Home({ allPostsData }) {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <HeadingMd>
        <p>
          Hello, I'm Matheus. I'm a software developer. You can contact me on
          {' '}
          <a href="https://twitter.com/matallves">Twitter</a>
        </p>
      </HeadingMd>
      <HeadingMdPadding>
        <HeadingLG>Blog</HeadingLG>
        <Ul>
          {allPostsData.map(({ id, date, title }) => (
            <Li key={id}>
              <Link href="posts/[id]" as={`posts/${id}`}>
                <a>{title}</a>
              </Link>
              <br />
              <LightDate as="small">
                <Date dateString={date} />
              </LightDate>
            </Li>
          ))}
        </Ul>
      </HeadingMdPadding>
    </Layout>
  );
}
