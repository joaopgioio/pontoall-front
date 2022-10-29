import IRegistroDePonto from "./IRegistroDePonto";

export default interface IProfessorEntity {
  id: number;
  nome: string;
  matricula: number;
  materia: string;
  password: string;
  registros: IRegistroDePonto[];
}
