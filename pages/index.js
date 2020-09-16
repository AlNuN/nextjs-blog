import Head from 'next/head';
import Link from 'next/link';
import Layout, { siteTitle } from '../components/Layout';
import Date from '../components/date';
import { getSortedPostsData } from '../lib/posts';
import {
  HeadingLG, HeadingMd, HeadingMdPadding, Ul, Li, LightDate,
} from './style';

export function getStaticProps() {
  const lastPostsData = getSortedPostsData('posts', 3);
  return {
    props: {
      lastPostsData,
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
          I'm a JavaScript developer that loves to learn new technologies.
          You can contact me on my e-mail matheus.alnun@gmail.com
        </p>
      </HeadingMd>
      <HeadingMdPadding>
        <HeadingLG>Blog</HeadingLG>
        <Ul>
          {lastPostsData.map(({ id, date, title }) => (
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
