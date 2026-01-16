import { useState } from "react";
import { Button } from "../App";
import Hero from "../assets/hero-img.avif";
import { FormAddFriend } from "./FormAddFriend";

export function FormSplitBill({
  selectedFriend,
  onSplitBill,
  addFriend,
  showAddFriend,
  onAddFriendClick,
}) {
  const [bill, setBill] = useState("");
  const [paidByUser, setPaidByUser] = useState("");
  const paidByFriend = bill ? bill - paidByUser : "";
  const [whoIsPaying, setWhoIsPaying] = useState("user");
  const [isPending, setIsPending] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!bill || !paidByUser) return;

    setIsPending(true);
    const amountToSplit = whoIsPaying === "user" ? paidByFriend : -paidByUser;

    await new Promise((resolve) => setTimeout(resolve, 1000));
    onSplitBill(amountToSplit);
    resetForm();
    setIsPending(false);
  };

  const resetForm = () => {
    setBill("");
    setPaidByUser("");
    setWhoIsPaying("user");
  };

  return (
    <>
      {selectedFriend ? (
        <div className="split-bill order-1 mb-6">
          <form className="form-split-bill bordering" onSubmit={handleSubmit}>
            <h2>Split a bill with {selectedFriend.name}</h2>
            <label>💰 Bill value</label>
            <input
              type="text"
              value={bill}
              onChange={(e) => setBill(Number(e.target.value))}
              autoFocus
            />
            <label>🧍‍♀️ Your expense</label>
            <input
              type="text"
              value={paidByUser}
              onChange={(e) =>
                setPaidByUser(Math.min(Number(e.target.value), bill))
              }
            />
            <label>👫 {selectedFriend.name}'s expense</label>
            <input
              type="text"
              disabled
              value={paidByFriend}
              className="border-0"
            />
            <label>🤑 Who is paying the bill</label>
            <div className="relative">
              <select
                value={whoIsPaying}
                onChange={(e) => setWhoIsPaying(e.target.value)}
              >
                <option value="user">You</option>
                <option value="friend">{selectedFriend.name}</option>
              </select>
              <span className="absolute right-0 top-0 h-full w-10 text-center text-gray-600 pointer-events-none flex items-center justify-center">
                <svg
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  className="w-4 h-4"
                  viewBox="0 0 24 24"
                >
                  <path d="M6 9l6 6 6-6"></path>
                </svg>
              </span>
            </div>
            <Button className="w-48 mt-3" disabled={isPending}>
              Split bill
            </Button>
          </form>
          <span className="self-start">
            {isPending && "...the bill is being split"}
          </span>
        </div>
      ) : showAddFriend ? (
        <div className="add-friend selected w-full flex flex-col items-end md:h-147 order-1 mb-8">
          <FormAddFriend
            onAddFriend={addFriend}
            onAddFriendClick={onAddFriendClick}
            isPending={isPending}
            setIsPending={setIsPending}
          />
        </div>
      ) : (
        <div className="flex flex-col items-start md:h-150 order-1 mb-6">
          <img className="w-auto -mt-6" src={Hero} alt="Hero img" />
          <div className="px-6">
            This app helps you keep track of who paid what. Invite your friends,
            add your expenses, focus on the fun.
          </div>
          {!showAddFriend && (
            <div className="self-end sm:mt-auto mt-6 mr-3 mb-3">
              <Button onClick={onAddFriendClick}>👉 Add Friend</Button>
            </div>
          )}
        </div>
      )}
    </>
  );
}
