import { useState } from "react";

export function useUser() {
  const [userId] = useState();
  const [username, setUsername] = useState<string>("dsadsa");

  return {
    userId,
    username,
    setUsername,
  };
}
