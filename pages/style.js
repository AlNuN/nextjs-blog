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
  padding-top: 1px;
`;

const Ul = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`;

const Li = styled.li`
  margin: 0 0 1.25rem;
`;

const LightDate = styled.div`
  color: ${(props) => props.theme.colors.light};
`;

export {
  Heading2XL,
  HeadingXl,
  HeadingLG,
  HeadingMd,
  HeadingMdPadding,
  Ul,
  Li,
  LightDate,
};
