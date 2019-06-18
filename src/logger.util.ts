const warning = (...args: any[]) => {
  console.warn.apply(console, args);
};

const info = (...args: any[]) => {
  console.info.apply(console, args);
};

export { warning, info };
