import Link from 'next/link';
import styled from 'styled-components';
import {
  Ul, LightDate, BlogTitle,
} from '../style';
import Date from '../date';

const Li = styled.li`
  margin: 0 0 .5rem 0;

  &:not(:last-child){
    padding-bottom: .5rem;
    border-bottom: 1px ${(props) => props.theme.colors.neutral3} solid
  }
`;

export default function BlogList({ data }) {
  return (
    <Ul>
      {data.map(({ id, date, title }) => (
        <Li key={id}>
          <Link href="posts/[id]" as={`posts/${id}`}>
            <BlogTitle>{title}</BlogTitle>
          </Link>
          <br />
          <LightDate as="small">
            <Date dateString={date} />
          </LightDate>
        </Li>
      ))}
    </Ul>
  );
}
