import moment from 'moment';

export const convertMinutesToDayHourMinute = (minutes: number) => {
  const days = Math.floor(minutes / (60 * 24));
  const hours = days
    ? Math.floor((minutes - days * 60 * 24) / 60)
    : Math.floor(minutes / 60);
  const minute = Math.floor(minutes - days * 60 * 24 - hours * 60);

  let text = '';

  if (days > 1) {
    text += `${days} days `;
  } else if (days === 1) {
    text += `${days} day `;
  }

  if (hours > 1) {
    text += `${hours} hours `;
  } else if (hours === 1) {
    text += `${hours} hour `;
  }

  if (minute > 1) {
    text += `${minute} minutes`;
  } else if (minute === 1) {
    text += `${minute} minute`;
  }

  return text;
};

convertMinutesToDayHourMinute(86399999 / 1000 / 60);

export const convertDateByType = (date: Date | string, dateType: string) => {
  return moment(date).format(dateType);
};

export const convertDateToYYYYMMDD = (date: string, dateType?: string) => {
  return moment(date, dateType).format('YYYYMMDD');
};

export const getCurrentDayAsYYYYMMDD = () => {
  return moment().format('YYYYMMDD');
};
