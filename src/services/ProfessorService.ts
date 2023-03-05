import axios from "axios";
import IProfessorCreateDto from "../models/IProfessorCreateDto";

import IProfessorEntity from "../models/IProfessorEntity";

//const BASE_URL = "http://localhost:3000/api/v1/professores";localhost:8085
//const BASE_URL = "http://localhost:8085/api/v1/professores";
const BASE_URL = "https://registropontoall.azurewebsites.net/api/v1/professores";

export function getProfessores() {
  return axios.get<Array<IProfessorEntity>>(BASE_URL);
}

export function getProfessorById(professorId: number) {
  return axios.get<IProfessorEntity>(`${BASE_URL}/${professorId}`);
}

export function postProfessor(professorDto: IProfessorCreateDto) {
  return axios.post(BASE_URL, professorDto);
}

export function deleteProfessorById(professorId: number) {
  return axios.delete(`${BASE_URL}/${professorId}`);
}
