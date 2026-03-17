import { fetchApi } from "../../../services/api/api";
import type { UserType } from "../../../types/userTypes";

async function postUser(username: string) {
  const res = await fetchApi<UserType>("/users", {
    method: "POST",
    body: JSON.stringify({ name: username }),
  });

  return res;
}

export const userService = {
  postUser,
};
