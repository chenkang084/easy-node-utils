export const sleep = (seconds: number) => {
  if (!seconds) {
    throw new Error('seconds must be not null.');
  } else {
    return new Promise(resolve => {
      setTimeout(() => {
        resolve();
      }, seconds);
    });
  }
};
