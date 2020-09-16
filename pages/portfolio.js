import Link from 'next/link';
import Layout from '../components/Layout';
import { getSortedPostsData } from '../lib/posts';
import Date from '../components/date';
import {
  HeadingLG, HeadingMdPadding, Ul, Li, LightDate,
} from './style';

export function getStaticProps() {
  const allCardsData = getSortedPostsData('posts', undefined, 'portfolio');
  return {
    props: {
      allCardsData,
    },
  };
}

export default function Portfolio({ allCardsData }) {
  return (
    <Layout page="portfolio">
      <HeadingMdPadding>
        <HeadingLG>Portfolio</HeadingLG>
        <Ul>
          {
            allCardsData.map(({
              id, date, title, photo, description,
            }) => (
              <Li key={id}>
                <Link href="posts/[id]" as={`posts/${id}`}>
                  <a>{title}</a>
                </Link>
                <br />
                <picture>
                  <source srcSet={`images/${id}-1.webp`} type="image/webp" />
                  <img src={`images/${id}-1.png`} alt={photo[0]} />
                </picture>
                <LightDate as="small">
                  <Date dateString={date} />
                </LightDate>
                <div>{description}</div>
              </Li>
            ))}
        </Ul>
      </HeadingMdPadding>
    </Layout>
  );
}
