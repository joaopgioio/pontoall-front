import "bootstrap/dist/css/bootstrap.min.css";
import { ThemeProvider } from "react-bootstrap";
import Footer from "./components/Footer";
import Header from "./components/Header";
import CadastrarFuncionario from "./pages/CadastrarFuncionario";
import ProfessorDetalhes from "./pages/ProfessorDetalhes";
import RegistrarPonto from "./pages/RegistrarPonto";
import RegistrosDePonto from "./pages/Professores";
import { BrowserRouter } from "react-router-dom";
import Routes from "./Routes";

function App() {
  return (
    <ThemeProvider
      breakpoints={["xxxl", "xxl", "xl", "lg", "md", "sm", "xs", "xxs"]}
      minBreakpoint="xxs"
    >
      <div className="App">
        <Header />
        {/* <RegistrarPonto /> */}
        {/* <ProfessorDetalhes /> */}
        {/* <CadastrarFuncionario />
        <RegistrosDePonto /> */}
        <BrowserRouter>
          <Routes></Routes>
        </BrowserRouter>
        <Footer />
      </div>
    </ThemeProvider>
  );
}

export default App;
