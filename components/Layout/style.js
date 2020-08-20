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
  Ainherit,
  Container,
  BackToHome,
};
