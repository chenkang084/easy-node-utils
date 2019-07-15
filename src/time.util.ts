import moment from 'moment';

export const convertMinutesToDayHourMinute = (minutes: number) => {
  const days = Math.floor(minutes / (60 * 24));
  const hours = days
    ? Math.floor((minutes - days * 60 * 24) / 60)
    : Math.floor(minutes / 60);
  const minute = minutes - days * 60 * 24 - hours * 60;

  return `${days ? `${days} days ` : ''}${hours ? `${hours} hours ` : ''}${
    minute ? `${minute} minutes` : ''
  }`;
};

export const convertDateByType = (date: Date | string, dateType: string) => {
  return moment(date).format(dateType);
};

export const convertDateToYYYYMMDD = (date: string, dateType?: string) => {
  return moment(date, dateType).format('YYYYMMDD');
};

export const getCurrentDayAsYYYYMMDD = () => {
  return moment().format('YYYYMMDD');
};
