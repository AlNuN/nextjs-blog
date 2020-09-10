import Layout from "../components/Layout";
import { getSortedPostsData } from '../lib/posts';
import Date from '../components/date';
import {
  HeadingLG, HeadingMdPadding, Ul, Li, LightDate,
} from './style';

export async function getStaticProps() {
  const allCardsData = getSortedPostsData('portfolio');
  return {
    props: {
      allCardsData,
    },
  };
}

export default function Portfolio({allCardsData}) {
  return (
    <Layout page="portfolio">
      <HeadingMdPadding>
        <HeadingLG>Portfolio</HeadingLG>
        <Ul>
          {allCardsData.map(({ id, date, title }) => (
            <Li key={id}>
                <div>{title}</div>
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
