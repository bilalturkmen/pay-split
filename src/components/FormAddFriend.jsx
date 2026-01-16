import { useState } from "react";
import { Button } from "../App";

export function FormAddFriend({
  onAddFriend,
  onAddFriendClick,
  isPending,
  setIsPending,
}) {
  const [name, setName] = useState("");
  const [image, setImage] = useState("https://i.pravatar.cc/48");
  const [message, setMessage] = useState("");

  // Capitalize the first letter of the name
  const formattedName =
    name.charAt(0).toUpperCase() + name.slice(1).toLowerCase();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage(""); // Reset message on submit

    if (!name || !image) {
      setMessage("Please enter a name");
      return;
    }

    setIsPending(true);
    const id = crypto.randomUUID();
    const newFriend = {
      id,
      name: formattedName, // Capitalize name
      image: `${image}?=${id}`,
      balance: 0,
    };

    // Simulate a delay for adding a friend
    await new Promise((resolve) => setTimeout(resolve, 1000));

    onAddFriend(newFriend);
    resetForm();
    setIsPending(false);
  };

  const resetForm = () => {
    setName("");
    setImage("https://i.pravatar.cc/48");
    setMessage(""); // Reset message when form is reset
  };

  const handleOtherButtonClick = () => {
    resetForm();
    setMessage(""); // Reset message when other buttons are clicked
    onAddFriendClick();
  };

  return (
    <>
      <form className="form-add-friend bordering" onSubmit={handleSubmit}>
        <label>👫 Friend name</label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          autoFocus
        />
        <label>🌄 Image URL</label>
        <input
          type="text"
          value={image}
          onChange={(e) => setImage(e.target.value)}
        />
        <Button type="submit" disabled={isPending}>
          Add
        </Button>
      </form>

      <span className="self-start">
        {isPending && "...friend is being added"}
        {message && <div className="text-red-300">{message}</div>}
      </span>
      <Button onClick={handleOtherButtonClick} className="mr-4 mt-auto">
        ❌ Close
      </Button>
    </>
  );
}
