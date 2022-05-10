import "./SquareCard.css";

import SquareCardWrapper from "./SquareCardWrapper";
import SquareCardCircleIcon from "./SquareCardCircleIcon";
import SquareCardOption from "./SquareCardOption";
import SquareCardDetails from "./SquareCardDetails";
import SquareCardSmlText from "./SquareCardSmlText";
import SquareCardText from "./SquareCardText";
import SquareCardIcons from "./SquareCardIcons";
import SquareCardIcon from "./SquareCardIcon";

import { IoMdMore } from "react-icons/io";
import { IoPersonSharp } from "react-icons/io5";
import { AiOutlineDollarCircle } from "react-icons/ai";
import { FaBaby } from "react-icons/fa";
export default function SquareCard({
  smlText,
  text,
  iconText,
  adultCost,
  childrenCost,
  maxSlots,
  onClick
}) {
  return (
    <SquareCardWrapper>
      <SquareCardCircleIcon>{iconText}</SquareCardCircleIcon>
      <SquareCardOption onClick={onClick}>
        <IoMdMore size={35} />
      </SquareCardOption>
      <SquareCardDetails>
        <SquareCardSmlText>{smlText}</SquareCardSmlText>
        <SquareCardText>{text}</SquareCardText>
        <SquareCardIcons>
          <SquareCardIcon>
            <IoPersonSharp size={20} />: {maxSlots}
          </SquareCardIcon>
          <SquareCardIcon>
            <AiOutlineDollarCircle size={20} />: {adultCost}
          </SquareCardIcon>
          <SquareCardIcon>
            <FaBaby size={20} />: {childrenCost}
          </SquareCardIcon>
        </SquareCardIcons>
      </SquareCardDetails>
    </SquareCardWrapper>
  );
}
