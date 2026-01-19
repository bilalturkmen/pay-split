import { Button } from "./Button";
import Hero from "../assets/hero-img.avif";

export function WelcomeScreen({ onAddFriendClick }) {
  return (
    <div className="flex flex-col items-start md:h-150 order-1 mb-6">
      <img className="w-auto -mt-6" src={Hero} alt="Hero img" />
      <div className="px-6">
        This app helps you keep track of who paid what. Invite your friends, add
        your expenses, focus on the fun.
      </div>

      <div className="self-end sm:mt-auto mt-6 mr-3 mb-3">
        <Button onClick={onAddFriendClick}>👉 Add Friend</Button>
      </div>
    </div>
  );
}
