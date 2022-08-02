import { Container } from './components/styles/Container'
import Header from './components/Header'
import { ThemeProvider } from 'styled-components'
import GlobalStyles from './components/styles/Global'
const theme = {
  colors: {
    header: "#ebfbff",
    body: "#fff",
    footer: "#003333"
  }
}


function App() {
  return (
    <ThemeProvider theme={theme}>
      <>
      <GlobalStyles />
        <Header />
        <Container>

          <h1> test</h1>

        </Container>
      </>
    </ThemeProvider>


  );
}

export default App;
