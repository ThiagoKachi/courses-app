export function transformDuration(minutes: string) {
  const hours = Math.floor(Number(minutes) / 60);
  const minutesLeft = Number(minutes) % 60;

  if (minutesLeft === 0) return `${hours} horas`;

  return `${hours} horas e ${minutesLeft} minutos`;
}