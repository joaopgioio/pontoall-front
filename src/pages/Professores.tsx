import { useEffect, useState } from "react";
import { Container, Table } from "react-bootstrap";
import { Link } from "react-router-dom";

import IProfessorEntity from "../models/IProfessorEntity";
import { getProfessores } from "../services/ProfessorService";

export default function Professores() {
  const [professorList, setProfessorList] = useState<IProfessorEntity[]>([]);

  useEffect(() => {
    getProfessores()
      .then((res) => res.data)
      .then((data) => setProfessorList(data));
  }, []);

  return (
    <Container>
      <h1 className="mt-3 mb-3">Professores</h1>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>id</th>
            <th>nome</th>
            <th>materia</th>
            <th>matricula</th>
            <th>registros</th>
            <th>opcoes</th>
          </tr>
        </thead>
        <tbody>
          {professorList.map((prof) => {
            return (
              <tr key={prof.id}>
                <td>{prof.id}</td>
                <td>{prof.nome}</td>
                <td>{prof.materia}</td>
                <td>{prof.matricula}</td>
                <td>{prof.registros.length}</td>
                <td>
                  <Link to={`${prof.id}`}>Detalhes</Link>
                  {" | "}
                  <Link to={`/registrar-ponto?matricula=${prof.matricula}`}>
                    Registrar Ponto
                  </Link>
                </td>
              </tr>
            );
          })}
        </tbody>
      </Table>
    </Container>
  );
}
