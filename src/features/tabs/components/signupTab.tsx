import { teamImages } from "../../../data/teamImages";
import Carousel from "../../../shared/components/ui/carousel";
import type { UserType } from "../../../types/userTypes";
import UserForm from "../../user/components/userForm";
import "./signupTab.css";
type SignupFormProps = {
  submitUser: (user: UserType) => void;
};

function SignupTab({ submitUser }: SignupFormProps) {
  return (
    <div className="signup-tab">
      <span className="flex">
        <h1>Physical </h1>
        <h1 className="red"> Stats</h1>
      </span>
      <Carousel type="tabs" content={teamImages} />{" "}
      <UserForm submitUser={submitUser} />
    </div>
  );
}

export default SignupTab;
