import styled from 'styled-components';

const Heading2XL = styled.h1`
  font-size: 2.5rem;
  line-height: 1.2;
  font-weight: 800;
  letter-spacing: -0.05rem;
  margin: 1rem 0;
`;

const HeadingXl = styled.h1`
  font-size: 2rem;
  line-height: 1.3;
  font-weight: 800;
  letter-spacing: -0.05rem;
  margin: 1rem 0;
`;

const HeadingLG = styled.h2`
  font-size: 1.5rem;
  line-height: 1.4;
  margin: 1rem 0;
`;

const HeadingMd = styled.section`
  font-size: 1.2rem;
  line-height: 1.5;
`;

const HeadingMdPadding = styled(HeadingMd)`
  padding-top: 1rem;
`;

const Ul = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`;

const PortLi = styled.li`
  margin: 0 0 1.5rem 0;
  display: flex;
  flex-flow: column;

  &:not(:last-child){
    padding-bottom: 1.5rem;
    border-bottom: 1px ${(props) => props.theme.colors.neutral3} solid
  }

  @media (min-width: 800px){
    flex-flow: row;
  }

`;

const Title = styled.a`
  color: ${(props) => props.theme.colors.neural1};
  font-weight: bold;
  font-size: 1.5em;
`;

const BlogTitle = styled.a`
  color: ${(props) => props.theme.colors.primary2};
  font-weight: bold;
`;

const SubLink = styled.a`
  color: ${(props) => props.theme.colors.link};
  font-size: 1em;
`;

const LightDate = styled.div`
  color: ${(props) => props.theme.colors.neutral3};
`;

const PostContent = styled.div`
a{
  color: ${(props) => props.theme.colors.link};
}
`;

const Description = styled.div`
  color: ${(props) => props.theme.colors.neutral2};
`;

const Picture = styled.picture`
  display: flex;
  align-items: center;
  justify-content: center;
  min-width: 324px;

  @media (min-width: 800px){
    margin-right: 15px;
  }

  img {
    width: 324px;
    height: 243px;
    border-radius: 15px;
  }
`;

export {
  Heading2XL,
  HeadingXl,
  HeadingLG,
  HeadingMd,
  HeadingMdPadding,
  Ul,
  Title,
  SubLink,
  LightDate,
  PostContent,
  PortLi,
  BlogTitle,
  Description,
  Picture,
};
