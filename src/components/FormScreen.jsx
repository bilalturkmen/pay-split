import { useState } from "react";
import { SplitBillForm } from "./SplitBillForm";
import { FormAddFriend } from "./FormAddFriend";
import { WelcomeScreen } from "./WelcomeScreen";

export function FormScreen({
  selectedFriend,
  onSplitBill,
  addFriend,
  showAddFriend,
  onAddFriendClick,
}) {
  const [isPending, setIsPending] = useState(false);

  return (
    <>
      {selectedFriend ? (
        <SplitBillForm
          selectedFriend={selectedFriend}
          onSplitBill={onSplitBill}
          isPending={isPending}
          setIsPending={setIsPending}
        />
      ) : showAddFriend ? (
        <FormAddFriend
          onAddFriend={addFriend}
          onAddFriendClick={onAddFriendClick}
          isPending={isPending}
          setIsPending={setIsPending}
        />
      ) : (
        <WelcomeScreen onAddFriendClick={onAddFriendClick} />
      )}
    </>
  );
}
