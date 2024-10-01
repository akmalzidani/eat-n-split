/* eslint-disable react/prop-types */
import { useState } from "react";
import Button from "./Button";

export default function FormSplitBill({ selectedFriend, onSplitBill }) {
  const [bill, setBill] = useState("");
  const [paidByUser, setPaidByUser] = useState("");
  const [whoIsPaying, setWhoIsPaying] = useState("user");

  const paidByFriend = bill ? bill - paidByUser : "";

  function clearForm() {
    setBill("");
    setPaidByUser("");
    setWhoIsPaying("user");
  }

  function handleSubmit(e) {
    e.preventDefault();

    if (!bill || !paidByUser) return;

    const finalBill = whoIsPaying === "user" ? paidByUser : -paidByFriend;
    onSplitBill(finalBill);
    clearForm();
  }

  return (
    <form className="form-split-bill" onSubmit={handleSubmit}>
      <h2>Split a bill with {selectedFriend?.name ?? "X"}</h2>

      <label>💰Bill Value</label>
      <input
        type="number"
        value={bill}
        onInput={(e) => setBill(+e.target.value)}
      />

      <label>🧍‍♂️Your expense</label>
      <input
        type="number"
        value={paidByUser}
        onInput={(e) =>
          setPaidByUser(+e.target.value > bill ? paidByUser : +e.target.value)
        }
      />

      <label>👥{selectedFriend?.name}&apos;s expense</label>
      <input type="number" disabled value={paidByFriend} />

      <label>🤑Who is paying the bill</label>
      <select
        value={whoIsPaying}
        onChange={(e) => setWhoIsPaying(e.target.value)}
      >
        <option value="user">You</option>
        <option value={selectedFriend.id}>{selectedFriend.name}</option>
      </select>

      <Button>Split bill</Button>
    </form>
  );
}
