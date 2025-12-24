import type { UserType } from "../../../../types/userTypes";
import UserForm from "../../../user/components/userForm";
import "./signupTab.css";
type SignupFormProps = {
  submitUser: (user: UserType) => void;
};

function SignupTab({ submitUser }: SignupFormProps) {
  return (
    <div className="signup-tab">
      <h1>Physical Stats</h1>
      <UserForm submitUser={submitUser} />
    </div>
  );
}

export default SignupTab;
