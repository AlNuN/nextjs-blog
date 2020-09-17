import '../styles/global.css';
import { ThemeProvider } from 'styled-components';

const theme = {
  colors: {
    primary1: 'hsl(276, 91%, 23%)',
    primary2: 'hsl(162, 63%, 41%)',
    primary3: 'hsl(268, 82%, 60%)',
    primary4: 'hsl(262, 100%, 78%)',
    primary5: 'hsl(262, 90%, 96%)',
    neutral1: 'hsl(209, 61%, 16%)',
    neutral2: 'hsl(209, 34%, 30%)',
    neutral3: 'hsl(210, 22%, 49%)',
    neutral4: 'hsl(211, 27%, 70%)',
    neutral5: 'hsl(210, 36%, 96%)',
    link: 'hsl(199, 84%, 55%)',
  },
};

export default function App({ Component, pageProps }) {
  return (
    <ThemeProvider theme={theme}>
      <Component {...pageProps} />
    </ThemeProvider>
  );
}
