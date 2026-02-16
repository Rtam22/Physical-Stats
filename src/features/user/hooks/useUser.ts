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
    setError(null);
    try {
      const data = await userService.postUser(user.name);
      setUser(data);
      return { ok: true };
    } catch (err) {
      console.log(err);
      setError((err as Error).message);
      return { ok: false };
    }
  }

  return {
    user,
    submitUser,
    error,
  };
}
