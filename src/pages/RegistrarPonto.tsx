import { useFormik } from "formik";
import { Button, Container, Form } from "react-bootstrap";
import { useNavigate, useSearchParams } from "react-router-dom";
import IRegistroDePontoCreateDto from "../models/IRegistroDePontoCreateDto";
import { registrarPonto } from "../services/RegistroDePontoService";

export default function RegistrarPonto() {
  const navigate = useNavigate();
  const [searchParams, setSearchParams] = useSearchParams();

  const formik = useFormik({
    initialValues: {
      matricula: searchParams.get("matricula") ?? "",
      password: "",
    },
    onSubmit: (values) => {
      registrarPonto({
        matricula: Number(values.matricula),
        password: values.password,
      });
      navigate("../professores");
    },
  });

  return (
    <Container as="main" fluid className="d-flex flex-column border">
      {/* <Row className="align-items-flex-start justify-content-center"> */}
      <section
        className="d-flex flex-column justify-content-space-between align-items-center"
        style={{ width: "100%" }}
      >
        <h1 className="m-4">Registrar Ponto</h1>
        <Form
          style={{ height: "100%", maxWidth: "450px", width: "100%" }}
          onSubmit={formik.handleSubmit}
        >
          <Form.Group className="mb-3" controlId="formBasicMatricula">
            <Form.Control
              type="number"
              placeholder="Digite a matricula"
              id="matricula"
              name="matricula"
              onChange={formik.handleChange}
              value={formik.values.matricula}
            ></Form.Control>
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Control
              type="password"
              placeholder="Senha"
              id="password"
              name="password"
              onChange={formik.handleChange}
              value={formik.values.password}
            ></Form.Control>
          </Form.Group>

          <Form.Group className="mb-3">
            <Button variant="primary" type="submit">
              Registrar
            </Button>
          </Form.Group>
        </Form>
      </section>
      {/* <Col as="section" className="text-center">
          <h2>Onde você está</h2>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d116968.86365899375!2d-46.57540463749999!3d-23.63024939999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce68d42228f82f%3A0xdbc4d5e12385c087!2sE.E.%20Jardim%20Santo%20Andre%20III!5e0!3m2!1spt-BR!2sbr!4v1655729517817!5m2!1spt-BR!2sbr"
            width="398"
            height="325"
            style={{ border: 0 }}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </Col>
        <Col as="section" className="d-flex justify-content-center">
          <Card style={{ width: "12rem" }}>
            <Card.Img src="../../public/escolapequena.png"></Card.Img>
            <Card.Title>E.E. Jardim Santo André III</Card.Title>
            <Card.Text>
              <p>
                R. Miguel Ferreira de Melo, 677 - Jardim Santo André, São Paulo
                - SP
              </p>
            </Card.Text>
          </Card>
        </Col> */}
      {/* </Row> */}
    </Container>
  );
}
