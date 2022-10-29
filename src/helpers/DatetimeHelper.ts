import dayjs from "dayjs";
import "dayjs/locale/pt-br";

export function getDateLocaleFormat(date: Date): string {
  return dayjs(date).locale("pt-br").format("DD/MM/YYYY");
}

export function getTime(date: Date): string {
  return dayjs(date).locale("pt-br").format("HH:mm:ss");
}

export function convertMinutesToHours(minutes: number) {
  return (minutes / 60).toFixed(2);
}
