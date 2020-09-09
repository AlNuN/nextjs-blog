import Head from 'next/head';
import Layout from '../../components/Layout';
import Date from '../../components/date';
import { HeadingXl, LightDate } from '../style';
import { getAllPostIds, getPostData } from '../../lib/posts';

export async function getStaticPaths() {
  const paths = getAllPostIds();
  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const postData = await getPostData(params.id);
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
        <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
      </article>
    </Layout>
  );
}
