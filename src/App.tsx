import GlobalStyle from './styles/GlobalStyle';
import Background from "./components/Background";
import Main from "./pages/main";

const App = () => {
  return (
    <Background>
      <GlobalStyle />
      <Main />
    </Background>
  )
}
export default App;
