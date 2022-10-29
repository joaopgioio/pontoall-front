import { useEffect, useState } from "react";
import { Button, Card, Container, Table } from "react-bootstrap";
import { useNavigate, useParams } from "react-router-dom";
import {
  convertMinutesToHours,
  getDateLocaleFormat,
  getTime,
} from "../helpers/DatetimeHelper";
import IRegistroDePontoAgg from "../models/IRegistroDePontoAgg";
import {
  deleteProfessorById,
  getProfessorById,
} from "../services/ProfessorService";
import { getRegistrosDePontoByProfessorId } from "../services/RegistroDePontoService";

interface IProfessorData {
  nome: string;
  matricula: number;
}

export default function ProfessorDetalhes() {
  let { professorId } = useParams();
  const navigate = useNavigate();

  const initialState = {
    professor: {
      nome: "",
      matricula: 0,
    },
  };

  const [professor, setProfessor] = useState<IProfessorData>(
    initialState.professor
  );
  const [registros, setRegistros] = useState<IRegistroDePontoAgg[]>([]);

  useEffect(() => {
    const id = Number(professorId);

    getRegistrosDePontoByProfessorId(id)
      .then((res) => res.data)
      .then((data) => {
        setRegistros(data);
      });

    getProfessorById(id)
      .then((res) => res.data)
      .then((data) => {
        setProfessor({
          nome: data.nome,
          matricula: data.matricula,
        } as IProfessorData);
      });
  }, []);

  const deleteProfessor = () => {
    const professorId2 = Number(professorId);
    deleteProfessorById(professorId2);
    navigate("../professores");
  };

  return (
    <Container className="d-flex flex-column justify-content-center align-items-center">
      <h1 className="mt-3 mb-3 fw-200">Banco de horas do Professor</h1>
      <Card style={{ maxWidth: "400px", width: "100%" }}>
        <Card.Header>
          <Card.Title>{professor.nome}</Card.Title>
          <Card.Subtitle>Matricula: {professor.matricula}</Card.Subtitle>
        </Card.Header>
        <Card.Body>
          <strong>Total de Horas: </strong>{" "}
          {convertMinutesToHours(
            registros
              .map((reg) => reg.registroDePontoAgregado.somaMinutos)
              .reduce((a, b) => a + b, 0)
          )}
        </Card.Body>
        <Card.Footer>
          <Button onClick={deleteProfessor} variant="danger">
            Delete Professor
          </Button>
        </Card.Footer>
      </Card>
      <Table className="mt-4" striped bordered hover>
        <thead>
          <tr>
            <th>Data</th>
            <th>Entrada</th>
            <th>Saida</th>
            <th>Soma (minutos)</th>
          </tr>
        </thead>
        <tbody>
          {registros.map((reg) => {
            return (
              <tr>
                <td> {getDateLocaleFormat(reg.data)} </td>
                <td>{getTime(reg.registroDePontoAgregado.dateTimeEntrada)} </td>
                <td> {getTime(reg.registroDePontoAgregado.dateTimeSaida)}</td>
                <td> {reg.registroDePontoAgregado.somaMinutos} </td>
              </tr>
            );
          })}
        </tbody>
      </Table>
    </Container>
  );
}
