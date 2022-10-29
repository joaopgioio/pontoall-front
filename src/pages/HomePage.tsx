import { Container } from "react-bootstrap";

export default function HomePage() {
  return (
    <Container
      as="main"
      className="d-flex flex-column align-items-center justify-content-space-between"
    >
      <section className="mt-5 d-flex flex-column align-items-center">
        <img
          className="img-fluid"
          src="/logogrande.png"
          alt="logo ponto all"
        ></img>
      </section>
      <section className="mt-5 text-center">
        <h1 className="h3">Ponto eletrônico automatizado para escolas</h1>
        <p>
          Ganhe tempo e liberdade para o que realmente importa, com Ponto All
          todos os professores podem registrar seus pontos direto no computador
          da escola ou de seu próprio celular, ponto all é um site responsivo e
          inclusivo.
        </p>
      </section>
    </Container>
  );
}
