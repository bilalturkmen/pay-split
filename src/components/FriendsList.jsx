import { Friend } from "./Friend";

export function FriendsList({
  friends,
  onSelection,
  selectedFriend,
  deleteFriend,
}) {
  return (
    <div
      className="w-[max(21rem,100%)] h-[max(100%,36rem)] md:order-1 flex flex-col overflow-y-auto order-2"
      id="style-4"
    >
      <ul className="inline-flex flex-col gap-4 list-none mb-8 md:mr-4">
        {friends.map((friend) => (
          <Friend
            friend={friend}
            key={friend.id}
            selectedFriend={selectedFriend}
            onSelection={onSelection}
            deleteFriend={deleteFriend}
          />
        ))}
      </ul>
    </div>
  );
}
