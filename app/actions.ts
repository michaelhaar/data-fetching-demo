"use server";

type GetUserParams = {
  email: string;
  password: string;
};

export async function getUser({ email, password }: GetUserParams) {
  // simulate a db call
  await new Promise((resolve) => setTimeout(resolve, 1000));
  return { name: "Michi", email: "michi@asdf.at" };
}
