import { useState } from "react";
import type { UserType } from "../../../types/userTypes";

export function useUser() {
  const [user, setUser] = useState<UserType>({
    id: crypto.randomUUID(),
    username: "",
  });
  const [error, setError] = useState<string | null>(null);

  function submitUser(user: UserType) {
    setUser(user);
  }

  return {
    user,
    submitUser,
    error,
  };
}
