import "./CreateButton.css";

import { IoAddOutline } from "react-icons/io5";

export default function CreateButton({ name, onClick }) {
  return (
    <button className="create-button" onClick={onClick}>
      <IoAddOutline size={25} />
      {name}
    </button>
  );
}
