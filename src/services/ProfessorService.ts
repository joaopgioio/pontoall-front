import axios from "axios";
import IProfessorCreateDto from "../models/IProfessorCreateDto";

import IProfessorEntity from "../models/IProfessorEntity";

const BASE_URL = "https://ponto-all-backend.herokuapp.com/api/v1/professores";

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
