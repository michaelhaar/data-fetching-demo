"use client";

import { useMutation } from "@tanstack/react-query";
import { getUser } from "./actions";

export default function Home() {
  const {
    data,
    mutate: server_getUser,
    isPending,
  } = useMutation({
    mutationFn: getUser,
    onError: (error) => {
      console.error(error);
    },
    onSuccess: (data) => {
      console.log(data);
    },
  });

  return <button onClick={() => server_getUser({ email: "michi@asdf.at", password: "12345" })}>Login</button>;
}
