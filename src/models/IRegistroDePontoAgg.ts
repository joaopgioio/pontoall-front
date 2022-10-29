export default interface IRegistroDePontoAgg {
  data: Date;
  registroDePontoAgregado: IRegistroHoraInfo;
}

export interface IRegistroHoraInfo {
  dateTimeEntrada: Date;
  dateTimeSaida: Date;
  somaMinutos: number;
}
