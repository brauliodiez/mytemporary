import { isLowerThanFive } from './calculator.business';

export const add = (a, b) => {
  const result = a + b;

  if (result < 5) {
    isLowerThanFive(result);
  }

  return result;
};
