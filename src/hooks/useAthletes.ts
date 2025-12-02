import { useState } from "react";

function useAthletes() {
  const [athletes, setAthletes] = useState();
  return { athletes };
}
