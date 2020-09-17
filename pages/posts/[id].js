import Head from 'next/head';
import Link from 'next/link';
import Layout from '../../components/Layout';
import Date from '../../components/date';
import {
  HeadingXl, LightDate, SubLink, PostContent,
} from '../../components/style';
import { getAllPostIds, getPostData } from '../../lib/posts';

const directory = 'posts';

export async function getStaticPaths() {
  const paths = getAllPostIds(directory);
  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const postData = await getPostData(params.id, directory);
  return {
    props: {
      postData,
    },
  };
}

export default function Post({ postData }) {
  return (
    <Layout page="blog">
      <Head>
        <title>{postData.title}</title>
      </Head>
      <article>
        <HeadingXl>{postData.title}</HeadingXl>
        <LightDate>
          <Date dateString={postData.date} />
        </LightDate>
        <PostContent dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
      </article>
      <Link href="/blog">
        <SubLink>
          &larr; Back to Blog
        </SubLink>
      </Link>
    </Layout>
  );
}
