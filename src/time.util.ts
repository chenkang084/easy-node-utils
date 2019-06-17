export function convertMinutesToDayHourMinute(minutes: number) {
  const days = Math.floor(minutes / (60 * 24));
  const hours = days
    ? Math.floor((minutes - days * 60 * 24) / 60)
    : Math.floor(minutes / 60);
  const minute = minutes - days * 60 * 24 - hours * 60;

  return `${days ? `${days} days ` : ''}${hours ? `${hours} hours ` : ''}${
    minute ? `${minute} minutes` : ''
  }`;
}
