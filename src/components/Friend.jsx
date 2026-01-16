import { Button } from "../App";
import { BalanceMessage } from "./BalanceMessage";

export function Friend({ friend, onSelection, selectedFriend, deleteFriend }) {
  const isSelected = selectedFriend?.id === friend.id;

  return (
    <li
      className={`flex items-center gap-4 p-4 bordering hover:bg-stone-50 ${
        isSelected ? "bg-stone-50 selected" : ""
      }`}
    >
      <img className="rounded-full" src={friend.image} alt={friend.name} />
      <span className="grow">
        <h3 className="font-bold">{friend.name}</h3>
        <BalanceMessage balance={friend.balance} name={friend.name} />
      </span>
      <Button onClick={() => onSelection(friend)}>
        {isSelected ? "❌ Close" : "Select"}
      </Button>
      <span>
        <button
          onClick={() => deleteFriend(friend.id)}
          className="cursor-pointer text-indigo-300"
        >
          &times;
        </button>
      </span>
    </li>
  );
}
