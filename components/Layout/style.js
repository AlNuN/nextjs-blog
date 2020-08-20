import styled from 'styled-components';

const Header = styled.header`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const HeaderHomeImage = styled.img`
  width: 8rem;
  height: 8rem;
  border-radius: 9999px;
`;

const Heading2XL = styled.h1`
  font-size: 2.5rem;
  line-height: 1.2;
  font-weight: 800;
  letter-spacing: -0.05rem;
  margin: 1rem 0;
`;

const HeadingLG = styled.h2`
  font-size: 1.5rem;
  line-height: 1.4;
  margin: 1rem 0;
`;

const Ainherit = styled.a`
  color: inherit;
`;

const Container = styled.div`
  max-width: 36rem;
  padding: 0 1rem;
  margin: 3rem auto 6rem;
`;

const BackToHome = styled.div`
  margin: 3rem 0 0;
`;

export {
  Header,
  HeaderHomeImage,
  Heading2XL,
  HeadingLG,
  Ainherit,
  Container,
  BackToHome,
};
