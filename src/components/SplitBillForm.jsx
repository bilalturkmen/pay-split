import { useState } from "react";
import { Button } from "./Button";

export function SplitBillForm({
  selectedFriend,
  onSplitBill,
  isPending,
  setIsPending,
}) {
  const [bill, setBill] = useState("");
  const [paidByUser, setPaidByUser] = useState("");
  const [whoIsPaying, setWhoIsPaying] = useState("user");

  const paidByFriend = bill ? bill - paidByUser : "";

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!bill || !paidByUser || isPending) return;

    setIsPending(true);
    const amountToSplit = whoIsPaying === "user" ? paidByFriend : -paidByUser;

    await new Promise((resolve) => setTimeout(resolve, 1000));
    onSplitBill(amountToSplit);
    setIsPending(false);
  };
  return (
    <div className="split-bill order-1 mb-6">
      <form className="form-split-bill bordering" onSubmit={handleSubmit}>
        <h2>Split a bill with {selectedFriend.name}</h2>
        <label>💰 Bill value</label>
        <input
          type="number"
          value={bill}
          onChange={(e) => setBill(Number(e.target.value))}
          autoFocus
        />
        <label>🧍‍♀️ Your expense</label>
        <input
          type="number"
          value={paidByUser}
          onChange={(e) =>
            setPaidByUser(Math.min(Number(e.target.value), bill))
          }
        />
        <label>👫 {selectedFriend.name}'s expense</label>
        <input
          type="number"
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
        <Button type="submit" className="w-48 mt-3" disabled={isPending}>
          Split bill
        </Button>
      </form>

      {isPending && (
        <span className="self-start">...the bill is being split</span>
      )}
    </div>
  );
}
