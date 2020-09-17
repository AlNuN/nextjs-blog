import { getSortedPostsData } from '../lib/posts';
import Layout from '../components/Layout';
import BlogList from '../components/BlogList';
import {
  HeadingMdPadding,
} from '../components/style';

export function getStaticProps() {
  const allPostsData = getSortedPostsData('posts');
  return {
    props: {
      allPostsData,
    },
  };
}

export default function Blog({ allPostsData }) {
  return (
    <Layout page="blog">
      <HeadingMdPadding>
        <BlogList data={allPostsData} />
      </HeadingMdPadding>
    </Layout>
  );
}
