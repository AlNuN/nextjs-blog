import Layout from "../components/Layout";
import { getSortedPostsData } from '../lib/posts';
import Date from '../components/date';
import {
  HeadingLG, HeadingMdPadding, Ul, Li, LightDate,
} from './style';

export async function getStaticProps() {
  const allCardsData = await getSortedPostsData('portfolio', undefined, true);
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
          {allCardsData.map(({ id, date, title, contentHtml }) => (
            <Li key={id}>
                <div>{title}</div>
              <br />
              <LightDate as="small">
                <Date dateString={date} />
              </LightDate>
              <div dangerouslySetInnerHTML={{ __html: contentHtml }} />
            </Li>
          ))}
        </Ul>
      </HeadingMdPadding>
    </Layout>
  );
}
