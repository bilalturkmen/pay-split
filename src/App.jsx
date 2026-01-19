import { useState } from "react";
import { initialFriends } from "./data/friends";
import Attribution from "./assets/attribution";
import Header from "./components/Header";
import { FormScreen } from "./components/FormScreen";
import { FriendsList } from "./components/FriendsList";

function App() {
  const [friends, setFriends] = useState(initialFriends);
  const [showAddFriend, setShowAddFriend] = useState(false);
  const [selectedFriend, setSelectedFriend] = useState(null);

  const addFriend = (friend) => {
    setFriends((prev) => [...prev, friend]);
    setSelectedFriend(null);
    setShowAddFriend(false);
  };

  const selectFriend = (friend) => {
    setSelectedFriend((prev) => (prev?.id === friend.id ? null : friend));
    setShowAddFriend(false);
  };

  const splitBill = (value) => {
    setFriends((prev) =>
      prev.map((friend) =>
        friend.id === selectedFriend.id
          ? { ...friend, balance: friend.balance + value }
          : friend,
      ),
    );
    setSelectedFriend(null);
  };

  const handleAddFriendClick = () => {
    setSelectedFriend(null);
    setShowAddFriend((prev) => !prev);
  };

  const deleteFriend = (id) => {
    const friendToDelete = friends.find((friend) => friend.id === id);
    const confirmed = window.confirm(
      `Are you sure you want to delete ${friendToDelete.name}?`,
    );

    if (confirmed) {
      setFriends((prevFriends) =>
        prevFriends.filter((friend) => friend.id !== id),
      );
    }

    setSelectedFriend(null);
  };

  return (
    <div className="w-full h-dvh grid grid-rows-[auto_1fr_auto]">
      <Header />
      <main className="h-full content-center py-3 ">
        <div className="container md:h-160 h-auto grid md:grid-cols-[1fr_1fr] items-start bordering p-3 sm:gap-6">
          <FriendsList
            friends={friends}
            selectedFriend={selectedFriend}
            onSelection={selectFriend}
            addFriend={addFriend}
            showAddFriend={showAddFriend}
            onAddFriendClick={handleAddFriendClick}
            deleteFriend={deleteFriend}
          />
          <FormScreen
            key={selectedFriend?.id}
            selectedFriend={selectedFriend}
            onSplitBill={splitBill}
            addFriend={addFriend}
            showAddFriend={showAddFriend}
            onAddFriendClick={handleAddFriendClick}
          />
        </div>
      </main>
      <footer className="bg-gray-50">
        <div className="container min-h-12">
          <Attribution />
        </div>
      </footer>
    </div>
  );
}

export default App;
