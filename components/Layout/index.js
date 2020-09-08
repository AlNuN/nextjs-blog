import Head from 'next/head';
import Link from 'next/link';
import {
  Header, Ainherit, Container, BackToHome, Nav,
} from './style';
import { HeadingLG } from '../../pages/style';

const name = 'Matheus Nunes';
export const siteTitle = `${name} personal website`;

export default function Layout({ children, home, blog, portfolio }) {
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
      </Head>
      <Header>
        <>
          <Nav>
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
          <HeadingLG>
            <Link href="/">
              <Ainherit>{name}</Ainherit>
            </Link>
          </HeadingLG>
        </>
      </Header>
      <main>{children}</main>
      {!home && (
        <BackToHome>
          <Link href="/">
            <a>← Back to home</a>
          </Link>
        </BackToHome>
      )}
    </Container>
  );
}
