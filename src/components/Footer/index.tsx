import { Container, Row, Col } from "react-bootstrap";

export default function Footer() {
  return (
    <Container
      fluid
      as="footer"
      className="bg-dark text-white fixed-bottom fw-light"
      style={{ height: "12vh" }}
    >
      <Row className="mt-4 mb-4 align-items-center small justify-content-space-between">
        <Col>
          <div>
            Aplicação Web apresentado na disciplina de Projeto Integrador II
            para o curso de Graduação - Eixo da Computação da Universidade
            Virtual do Estado de São Paulo (UNIVESP). 2022
          </div>
        </Col>
        {/* <Col>
          <div className="d-flex flex-column align-items-center">
            <span>Sergio Aparecido Virgolino, 1402449</span>
            <span>Ezio Vicente De Paula, 2002118</span>
            <span>Simone Almeida Santos, 2004008</span>
            <span>Henrique Melo Kikuchi, 2005992</span>
            <span>Tiago Vinicius Santos De Araujo, 2006755</span>
            <span>Rodrigo Tribiolli Moreira, 2009962</span>
            <span>Osvaldo Shuquichi Iochida, 2015214</span>
          </div>
        </Col> */}
        <Col md={3}>
          <div className="text-center">
            <img src="/Logounivesp.png" className="img-fluid"></img>
          </div>
        </Col>
      </Row>
    </Container>
  );
}
