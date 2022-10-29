import { Routes as ReactRoutes, Route } from "react-router-dom";
import AboutUs from "./pages/AboutUs";

import CadastrarFuncionario from "./pages/CadastrarFuncionario";
import HomePage from "./pages/HomePage";
import ProfessorDetalhes from "./pages/ProfessorDetalhes";
import Professores from "./pages/Professores";
import RegistrarPonto from "./pages/RegistrarPonto";

export default function Routes() {
  return (
    <ReactRoutes>
      <Route index={true} element={<HomePage />} />
      <Route path="/sobre-nos" element={<AboutUs />} />
      <Route path="cadastrar-professor" element={<CadastrarFuncionario />} />
      <Route path="registrar-ponto" element={<RegistrarPonto />} />
      <Route path="professores" element={<Professores />}></Route>
      <Route path="professores/:professorId" element={<ProfessorDetalhes />} />
    </ReactRoutes>
  );
}
