import axios from "axios";
import IRegistroDePontoAgg, {
  IRegistroHoraInfo,
} from "../models/IRegistroDePontoAgg";
import IRegistroDePontoCreateDto from "../models/IRegistroDePontoCreateDto";

//const BASE_URL = "http://localhost:3000/api/v1/registros";
//const BASE_URL = "http://localhost:8085/api/v1/registros";
const BASE_URL = "https://registropontoall.azurewebsites.net/api/v1/registros";

export function getRegistrosDePontoByProfessorId(idProfessor: number) {
  return axios.get<IRegistroDePontoAgg[]>(
    `${BASE_URL}/professor/${idProfessor}`
  );
}

export function registrarPonto(registroDePontoDto: IRegistroDePontoCreateDto) {
  return axios.post(BASE_URL, registroDePontoDto);
}
