import { useState } from "react";
import "./userForm.css";
import type { UserType } from "../../../types/userTypes";

type UserFormProps = {
  submitUser: (user: UserType) => void;
};

function UserForm({ submitUser }: UserFormProps) {
  const [userData, setUserData] = useState<UserType>({
    id: crypto.randomUUID(),
    username: "",
  });

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    const user = { ...userData, username: userData.username.trim() };
    e.preventDefault();
    submitUser(user);
  }

  return (
    <form className="user-form" onSubmit={handleSubmit}>
      <section>
        <label htmlFor="username" id="username">
          Username
        </label>
        <input
          type="text"
          value={userData.username}
          onChange={(e) => {
            setUserData((prev) => ({ ...prev, username: e.target.value }));
          }}
          placeholder="Enter your username"
        />
      </section>
    </form>
  );
}

export default UserForm;
