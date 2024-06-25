"use server";

type GetUserParams = {
  email: string;
  password: string;
};

export const getUser = async ({ email, password }: GetUserParams) => {
  // make a db call
  return { name: "Michi" };
};
