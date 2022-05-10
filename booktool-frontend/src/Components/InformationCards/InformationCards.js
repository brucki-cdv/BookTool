import InformationCard from "../InformationCard";

import { InformationCardsContext } from "./InformationCardsContainer";

import { useContext } from "react";
import { RiCalendarEventLine } from "react-icons/ri";
import { BsCalendar3 } from "react-icons/bs";
import { AiOutlineClose, AiOutlineMail } from "react-icons/ai";

export default function InformationCards() {
  const { summary } = useContext(InformationCardsContext);

  return (
    <div className="information-cards-container">
      <InformationCard
        title="Dzisiejsze rezerwacje"
        value={summary.todayReservation}
        icon={<RiCalendarEventLine size={30} />}
        bgColor="#12DC26"
      />
      <InformationCard
        title="Wszystkie rezerwacje"
        value={summary.allReservation}
        icon={<BsCalendar3 size={30} />}
        bgColor="#6D71F9"
      />
      <InformationCard
        title="Anulowane rezerwacje"
        value={summary.cancelledReservation}
        icon={<AiOutlineClose size={30} />}
        bgColor="#FF4C41"
      />
      <InformationCard
        title="Ilość wiadomości"
        value={summary.messages}
        icon={<AiOutlineMail size={30} />}
        bgColor="#1263DC"
      />
    </div>
  );
}
