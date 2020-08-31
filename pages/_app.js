import '../styles/global.css';
import { ThemeProvider } from 'styled-components';

const theme = {
  colors: {
    primary: '#0070f3',
    light: '#999',
    spaceCadet: 'hsla(233, 24%, 19%, 1)',
    plum: 'hsla(307, 43%, 39%, 1)',
    pearlyPurple: 'hsla(306, 22%, 55%, 1)',
    tuscany: 'hsla(346, 31%, 72%, 1)',
    champagnePink: 'hsla(20, 51%, 87%, 1)',
  },
};

export default function App({ Component, pageProps }) {
  return (
    <ThemeProvider theme={theme}>
      <Component {...pageProps} />
    </ThemeProvider>
  );
}
