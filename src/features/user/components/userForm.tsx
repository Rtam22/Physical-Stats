import { useState } from "react";
import "./userForm.css";
import type { UserType } from "../../../types/userTypes";
import Loader from "../../../shared/components/ui/loader";

type UserFormProps = {
  submitUser: (user: UserType) => void;
  loading: boolean;
};

function UserForm({ submitUser, loading }: UserFormProps) {
  const [userData, setUserData] = useState<UserType>({
    id: crypto.randomUUID(),
    name: "",
  });

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (loading) return;
    const user = { ...userData, username: userData.name.trim() };
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
            setUserData((prev) => ({ ...prev, name: e.target.value }));
          }}
          placeholder="Enter your username"
        />
        <button className="user-form-button">
          {loading ? <Loader type="dots" size={40} /> : "Enter"}
        </button>
      </section>
    </form>
  );
}

export default UserForm;
