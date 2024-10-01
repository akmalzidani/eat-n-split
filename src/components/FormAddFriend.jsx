/* eslint-disable react/prop-types */
import { useState } from "react";
import Button from "./Button";

export default function FormAddFriend({ onAddFriend }) {
  const [name, setName] = useState("");
  const [image, setImage] = useState("https://i.pravatar.cc/48");

  function clearForm() {
    setName("");
    setImage("https://i.pravatar.cc/48");
  }

  function handleSubmit(e) {
    e.preventDefault();

    if (!name || !image) return;

    const id = crypto.randomUUID();
    const newFriend = {
      id,
      name,
      image: `${image}?=${id}`,
      balance: 0,
    };

    clearForm();
    onAddFriend(newFriend);
  }

  return (
    <form className="form-add-friend" onSubmit={handleSubmit}>
      <label>👥Friend name</label>
      <input
        type="text"
        value={name}
        onInput={(e) => setName(e.target.value)}
      />

      <label>🖼️Image URL</label>
      <input
        type="text"
        value={image}
        onInput={(e) => setImage(e.target.value)}
      />

      <Button>Add</Button>
    </form>
  );
}
