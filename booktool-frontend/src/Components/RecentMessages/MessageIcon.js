import "./MessageIcon.css";

import { IoAddOutline } from "react-icons/io5";
import { AiOutlineClose } from "react-icons/ai";
import { MdOutlineSchedule } from "react-icons/md";

export default function MessageIcon(props) {
  console.log("TYPE = ", props.type);
  const getStatusIcon = () => {
    switch (props.icon) {
      case "added":
        return <IoAddOutline size={30} />;
      case "cancelled":
        return <AiOutlineClose size={30} />;
      case "date":
        return <MdOutlineSchedule size={30} />;
    }
  };

  return <div className="icon-container">{getStatusIcon()}</div>;
}
