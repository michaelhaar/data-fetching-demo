"use client";

import { useMutation } from "@tanstack/react-query";
import { getUser } from "./actions";

export default function Home() {
  const {
    data,
    mutate: server_getUser,
    error,
    isPending,
  } = useMutation({
    mutationFn: getUser,
  });

  if (error) {
    return <div>Error</div>;
  }

  if (isPending) {
    return <div>Loading...</div>;
  }

  if (data) {
    return <div>Hi {data.name}</div>;
  }

  return <button onClick={() => server_getUser({ email: "michi@asdf.at", password: "12345" })}>Login</button>;
}
