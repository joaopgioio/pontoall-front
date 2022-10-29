import { Container } from "react-bootstrap";

export default function AboutUs() {
  return (
    <Container>
      <main className="m-5">
        <h1>Ponto All</h1>
        <section>
          <p>
            Ponto All é um Website de Ponto eletrônico totalmente automatizado e
            gratuito, para escolas públicas e privadas, tem como objetivo
            facilitar o controle de horas/aulas para professores, por meio de
            autenticação, através do nome e número da matrícula, com toda
            segurança e privacidade.
          </p>
        </section>
        <section className="mt-4 lh-1">
          <h2>Quem somos?</h2>
          <p>Sergio Aparecido Virgolino, 1402449</p>
          <p>Ezio Vicente De Paula, 2002118</p>
          <p>Simone Almeida Santos, 2004008</p>
          <p>Henrique Melo Kikuchi, 2005992</p>
          <p>Tiago Vinicius Santos De Araujo, 2006755</p>
          <p>Rodrigo Tribiolli Moreira, 2009962</p>
          <p>Osvaldo Shuquichi Iochida, 2015214</p>
        </section>
      </main>
    </Container>
  );
}
