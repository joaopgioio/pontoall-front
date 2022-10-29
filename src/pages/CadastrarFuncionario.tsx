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
      materia: "portugues",
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
            onChange={formik.handleChange}
            value={formik.values.nome}
          ></Form.Control>
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Control
            type="number"
            placeholder="Matrícula"
            id="matricula"
            name="matricula"
            onChange={formik.handleChange}
            value={formik.values.matricula ?? ""}
          ></Form.Control>
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Select
            aria-label="Selecione a materia"
            id="materia"
            name="materia"
            onChange={formik.handleChange}
            defaultValue={"portugues"}
          >
            <option value="portugues">Português</option>
            <option value="historia">História</option>
            <option value="matematica">Matemática</option>
            <option value="artes">Artes</option>
            <option value="fisica">Física</option>
            <option value="biologia">Biologia</option>
            <option value="quimica">Química</option>
            <option value="educacaofisica">Educação Física</option>
            <option value="filosofia">Filosofia</option>
            <option value="geografia">Geografia</option>
            <option value="sociologia">Sociologia</option>
          </Form.Select>
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Control
            type="password"
            placeholder="Password"
            id="password"
            name="password"
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
