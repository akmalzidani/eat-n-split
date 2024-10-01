/* eslint-disable react/prop-types */
import Friend from "./Friend";

export default function FriendsList({
  friends,
  onSelectFriend,
  selectedFriend,
}) {
  return (
    <ul>
      {friends.map((friend) => (
        <Friend
          key={friend.id}
          friend={friend}
          onSelectFriend={onSelectFriend}
          selectedFriend={selectedFriend}
        />
      ))}
    </ul>
  );
}
