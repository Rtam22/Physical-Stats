import { useState } from "react";
import "./userForm.css";

export type UserType = {
  id: string;
  username: string;
};

function UserForm() {
  const [userData, setUserData] = useState<UserType>({
    id: crypto.randomUUID(),
    username: "",
  });

  function handleSubmit() {}

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="username" id="username">
        Username
      </label>
      <input
        type="text"
        value={userData.username}
        onChange={(e) => {
          setUserData((prev) => ({ ...prev, username: e.target.value }));
        }}
      />
    </form>
  );
}

export default UserForm;
