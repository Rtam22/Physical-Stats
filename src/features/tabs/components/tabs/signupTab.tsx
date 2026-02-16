import { teamImages } from "../../../../data/teamImages";
import Carousel from "../../../../shared/components/ui/carousel";
import type { UserType } from "../../../../types/userTypes";
import UserForm from "../../../user/components/userForm";
import "./signupTab.css";
type SignupFormProps = {
  submitUser: (user: UserType) => void;
  error: string | null;
};

function SignupTab({ submitUser, error }: SignupFormProps) {
  return (
    <div className="signup-tab">
      <span className="flex">
        <h1>Physical </h1>
        <h1 className="red"> Stats</h1>
      </span>
      <Carousel type="tabs" content={teamImages} />{" "}
      <UserForm submitUser={submitUser} />
      {error && <span className="error-container">{error}</span>}
    </div>
  );
}

export default SignupTab;
