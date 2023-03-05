import { Formik, useFormik } from "formik";
import { Button, Container, Form } from "react-bootstrap";
import { useNavigate, useParams } from "react-router-dom";

import IProfessorCreateDto from "../models/IProfessorCreateDto";

import { postProfessor } from "../services/ProfessorService";

export default function CadastrarFuncionario() {
  let navigate = useNavigate();

  const formik = useFormik({
    initialValues: {
      nome: "",
      materia: "Português",
      matricula: "",
      password: "",
    },
    onSubmit: (values) => {
      postProfessor({
        nome: values.nome,
        materia: values.materia,
        matricula: Number(values.matricula),
        password: values.password,
      } as IProfessorCreateDto)
        .then((res) => res.data)
        .then((data) => console.log(data));

      navigate("../professores");
    },
  });

  return (
    <Container
      fluid
      className="d-flex flex-column justify-content-space-between align-items-center mt-3"
    >
      <h1>Cadastrar Professor</h1>
      <Form
        style={{ maxWidth: "450px", width: "100%" }}
        onSubmit={formik.handleSubmit}
      >
        <Form.Group className="mb-3">
          <Form.Control
            type="text"
            placeholder="Nome"
            id="nome"
            name="nome"
            required
            onChange={formik.handleChange}
            value={formik.values.nome}
          ></Form.Control>
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Control
            type="number"
            min="1"
            placeholder="Matrícula"
            id="matricula"
            name="matricula"
            required
            onChange={formik.handleChange}
            value={formik.values.matricula ?? ""}
          ></Form.Control>
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Select
            aria-label="Selecione a materia"
            id="materia"
            name="materia"
            required
            onChange={formik.handleChange}
            defaultValue={"Português"}
          >
            <option value="Português">Português</option>
            <option value="História">História</option>
            <option value="Matemática">Matemática</option>
            <option value="Artes">Artes</option>
            <option value="Física">Física</option>
            <option value="Biologia">Biologia</option>
            <option value="Química">Química</option>
            <option value="Educação Física">Educação Física</option>
            <option value="Filosofia">Filosofia</option>
            <option value="Geografia">Geografia</option>
            <option value="Sociologia">Sociologia</option>
            <option value="Teologia">Teologia</option>
          </Form.Select>
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Control
            type="password"
            placeholder="Password"
            id="password"
            name="password"
            required
            onChange={formik.handleChange}
            value={formik.values.password}
          ></Form.Control>
        </Form.Group>
        <Form.Group className="mb-3">
          <Button type="submit">salvar</Button>
        </Form.Group>
      </Form>
    </Container>
  );
}
