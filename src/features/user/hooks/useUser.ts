import { useState } from "react";
import type { UserType } from "../../../types/userTypes";
import { userService } from "../service/userService";

export function useUser() {
  const [user, setUser] = useState<UserType>({
    id: crypto.randomUUID(),
    name: "",
  });
  const [error, setError] = useState<string | null>(null);

  async function submitUser(user: UserType) {
    try {
      const data = await userService.postUser(user.name);
      setUser(data);
    } catch (err) {
      setError((err as Error).message);
    }
  }

  return {
    user,
    submitUser,
    error,
  };
}
