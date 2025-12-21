import { useState } from "react";
import type { UserType } from "../components/userForm";

export function useUser() {
  const [user, setUser] = useState<UserType>({
    id: crypto.randomUUID(),
    username: "",
  });
  const [error, setError] = useState<string | null>(null);

  function submitUser() {}

  return {
    user,
    submitUser,
    error,
  };
}
