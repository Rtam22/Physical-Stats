import { useState } from "react";
import "./userForm.css";
import type { UserType } from "../../../types/userTypes";

type UserFormProps = {
  submitUser: (user: UserType) => void;
};

function UserForm({ submitUser }: UserFormProps) {
  const [userData, setUserData] = useState<UserType>({
    id: crypto.randomUUID(),
    name: "",
  });

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    const user = { ...userData, username: userData.name.trim() };
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
          required
          value={userData.name}
          onChange={(e) => {
            setUserData((prev) => ({ ...prev, username: e.target.value }));
          }}
          placeholder="Enter your username"
        />
        <button>Enter</button>
      </section>
    </form>
  );
}

export default UserForm;
