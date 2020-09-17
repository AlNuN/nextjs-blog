import Link from 'next/link';
import Layout from '../components/Layout';
import { getSortedPostsData } from '../lib/posts';
import Date from '../components/date';
import {
  HeadingMdPadding, Ul, PortLi, LightDate, Title, SubLink, Description, Picture,
} from '../components/style';

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
        <Ul>
          {allCardsData.map(({
            id, date, title, photo, description,
          }) => (
            <PortLi key={id}>
              <Picture>
                <source srcSet={`images/${id}-1.webp`} type="image/webp" />
                <img src={`images/${id}-1.png`} alt={photo[0]} />
              </Picture>
              <div>
                <Link href="posts/[id]" as={`posts/${id}`}>
                  <Title>{title}</Title>
                </Link>
                <br />
                <LightDate as="small">
                  <Date dateString={date} />
                </LightDate>
                <Description>{description}</Description>
                <Link href="posts/[id]" as={`posts/${id}`}>
                  <SubLink>Blog post &#8594;</SubLink>
                </Link>
              </div>
            </PortLi>
          ))}
        </Ul>
      </HeadingMdPadding>
    </Layout>
  );
}
