import { v4 } from 'uuid';
export const uuid = () => {
  return v4();
};

export const generateId = (length = 16): string => {
  const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  let noceStr = '',
    maxPos = chars.length;
  while (length--) noceStr += chars[(Math.random() * maxPos) | 0];
  return noceStr;
};
