export const isObject = (paramter: any) => {
  return typeof paramter === 'object';
};

export const isTrue = (paramter: any) => {
  return !!paramter;
};

export const isEmpty = (paramter: any) => {
  console.log(paramter);
  const type = typeof paramter;
  if (type === 'undefined') {
    return true;
  } else if (type === 'string') {
    return paramter.length === 0;
  } else if (type === 'number') {
    return false;
  } else if (type === 'object') {
    return Object.keys(paramter).length === 0;
  } else {
    return false;
  }
};
