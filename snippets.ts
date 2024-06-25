const makeRequest = async (email: string, password: string) => {
    await fetch("/api/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, password }),
    });
  };




  npm i @tanstack/react-query




  const { data, isPending, isError } = useMutation({
    mutationFn: async () => {
      return await fetch("...");
    },
  });