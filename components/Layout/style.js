import styled from 'styled-components';

const Nav = styled.nav`
  display: flex;
  flex-direction: row;
  justify-content: space-around; 
  width: 100%;
`;

const Header = styled.header`
  display: flex;
  flex-direction: column;
  align-items: center;
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
  Ainherit,
  Container,
  BackToHome,
  Nav,
};
