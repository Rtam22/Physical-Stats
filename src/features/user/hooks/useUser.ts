import { useState } from "react";
import type { UserType } from "../../../types/userTypes";
import { userService } from "../service/userService";
import { useLocalStorage } from "../../../hooks/useLocalStorage";
import type { ToastVariant } from "../../../types/toastTypes";

type useUserProps = {
  setToastNotification?: (
    type: ToastVariant,
    message: string,
    timer?: number,
  ) => void;
};

export function useUser({ setToastNotification }: useUserProps = {}) {
  const [user, setUser] = useLocalStorage<UserType>("user", {
    id: "",
    name: "",
  });
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const baseError = "Failed to fetch";

  async function submitUser(user: UserType) {
    setError(null);
    try {
      setLoading(true);
      const data = await userService.postUser(user.name);
      setUser(data);
      return { ok: true };
    } catch (err) {
      if (setToastNotification) {
        console.log(err);
        setToastNotification(
          "error",
          (err as Error).message === baseError
            ? "Internal server error"
            : (err as Error).message,
        );
      } else {
        setError((err as Error).message);
      }

      return { ok: false };
    } finally {
      setLoading(false);
    }
  }

  return {
    user,
    submitUser,
    error,
    loading,
  };
}
