import Head from 'next/head';
import Link from 'next/link';
import {
  Header, HeaderHomeImage, Heading2XL, HeadingLG, Ainherit, Container, BackToHome,
} from './style';

const name = 'Matheus Nunes';
export const siteTitle = `${name} personal website`;

export default function Layout({ children, home }) {
  return (
    <Container>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta
          name="description"
          content="Matheus Alves Nunes personal website"
        />
        <meta
          property="og:image"
          content={`https://og-image.now.sh/${encodeURI(
            siteTitle,
          )}.png?theme=light&md=0&fontSize=75px&images=https%3A%2F%2Fassets.vercel.com%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg`}
        />
        <meta name="og:title" content={siteTitle} />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>
      <Header>
        {home ? (
          <>
            <HeaderHomeImage
              src="/images/profile.jpg"
              alt={name}
            />
            <Heading2XL>{name}</Heading2XL>
          </>
        ) : (
          <>
            <Link href="/">
              <a>
                <HeaderHomeImage
                  src="/images/profile.jpg"
                  alt={name}
                />
              </a>
            </Link>
            <HeadingLG>
              <Link href="/">
                <Ainherit>{name}</Ainherit>
              </Link>
            </HeadingLG>
          </>
        )}
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
