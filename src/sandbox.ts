let greet: Function;

greet = () => {
  console.log("hello");
};

const sum = (a: number, b: number, c: number = 0) => {
  return a + b + c;
};

const minus = (a: number, b: number): number => {
  return a - b;
};

const noReturn = (): void => {
  console.log("void return");
};

sum(10, 20);
minus(10, 5);
noReturn();
