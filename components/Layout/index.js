import Head from 'next/head';
import Link from 'next/link';
import {
  Header, SiteName, Container, Nav, Main,
} from './style';

const name = 'Matheus Nunes';
export const siteTitle = `${name} Front-end developer`;

export default function Layout({
  children, page,
}) {
  return (
    <Container>
      <Head>
        <link rel="icon" href="/MAN.svg" />
        <meta
          name="description"
          content="Matheus Alves Nunes personal website"
        />
        {/* <meta
          property="og:image"
          content={`https://og-image.now.sh/${encodeURI(
            siteTitle,
          )}.png?theme=light&md=0&fontSize=75px&images=https%3A%2F%2Fassets.vercel.com%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg`}
        /> */}
        <meta name="og:title" content={siteTitle} />
        <meta name="twitter:card" content="summary_large_image" />
        <link href="https://fonts.googleapis.com/css2?family=Orbitron:wght@800&display=swap" rel="stylesheet" />
      </Head>
      <Header>
        <Link href="/">
          <SiteName>{name}</SiteName>
        </Link>
        <Nav page={page}>
          <Link href="/">
            <a>
              Home
            </a>
          </Link>
          <Link href="/portfolio">
            <a>
              Portfolio
            </a>
          </Link>
          <Link href="/blog">
            <a>
              Blog
            </a>
          </Link>
        </Nav>
      </Header>
      <Main>{children}</Main>
    </Container>
  );
}
