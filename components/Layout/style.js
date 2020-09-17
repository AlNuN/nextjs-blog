import styled from 'styled-components';

const maxWidth = '38rem';

const Nav = styled.nav`
  display: flex;
  flex-direction: row;
  justify-content: space-around; 
  width: 100%;
  max-width: ${maxWidth};
  margin: 0 auto 0; 
  font-size: 1.2em;

  a {
    color: ${(props) => props.theme.colors.primary2};
    font-weight: bold;
  }

  a[${(props) => `href="/${props.page || ''}"`}]{
    background: ${(props) => {
    const color = props.theme.colors.primary2;
    return `linear-gradient(90deg, ${color}, ${color}) repeat-x`;
  }};
    background-size: .2em 3px;
    background-position: bottom;
  }
`;

const SiteName = styled.a`
  font-size: 1.7em;
  font-weight: bold;
  padding-bottom: 1rem;
  color: ${(props) => props.theme.colors.title};
  font-family: 'Orbitron', sans-serif;
`;

const Header = styled.header`
  display: flex;
  flex-direction: column;
  align-items: center;
  background: ${(props) => props.theme.colors.neutral5};
  padding: 1rem 1rem 0 1rem;
`;

const Ainherit = styled.a`
  color: inherit;
`;

const Container = styled.div`
`;

const Main = styled.main`
  max-width: ${maxWidth};
  margin: 0 auto 0; 
  padding: 1rem;
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
  Main,
  SiteName,
};
