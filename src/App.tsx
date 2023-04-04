import GlobalStyle from './styles/GlobalStyle';
import Background from "./components/Background";
import NavBar from "./components/NavBar";
import Main from "./pages/main";

const App = () => {
  return (
    <Background>
      <GlobalStyle />
      <NavBar />
      <Main />
    </Background>
  )
}
export default App;
