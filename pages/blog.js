import Link from 'next/link';
import { getSortedPostsData } from '../lib/posts';
import Layout from '../components/Layout';
import Date from '../components/date';
import {
  HeadingLG, HeadingMdPadding, Ul, Li, LightDate,
} from './style';

export async function getStaticProps() {
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData,
    },
  };
}

export default function Blog({ allPostsData }) {
  return (
    <Layout blog>
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
