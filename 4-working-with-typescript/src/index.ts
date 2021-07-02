import { IPerson } from "./interfaces";

const greeter = (arg: IPerson): void => {
  const { firstName, lastName } = arg;
  return console.log(`Hello ${firstName} ${lastName}`);
};

const person: IPerson = {
  firstName: "John",
  lastName: "Doe",
};
greeter(person);
