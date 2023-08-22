import { styled, ThemeProvider } from "styled-components";
import { GlobalStyle } from "./style/globalStyle";
import { theme } from "./style/theme.js";

import { Outlet } from "react-router-dom";

import NavBar from "./components/layouts/nabBar/NavBar";
import Footer from "./components/layouts/footer/Footer";

const AppWrapper = styled.div`
  margin-top: 44px;

  width: 390px;
  height: 800px;

  flex-grow: 1;

  display: flex;
  flex-direction: column;

  align-items: center;
`;

const Wrapper = styled.div`
  margin: 0 auto;
  width: 100%;
  flex-grow: 1;

  display: flex;
  flex-direction: column;

  align-items: center;
`;

const Layout = () => {
  return (
    <AppWrapper>
      <NavBar />
      <Wrapper>
        <Outlet />
      </Wrapper>
      <Footer />
    </AppWrapper>
  );
};

function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Layout />
      </ThemeProvider>
    </>
  );
}

export default App;
