import InformationCard from "../InformationCard";
import Container from "../Container";

const InformationCards = ({informations}) => {
  return (
    <Container className="information-cards-container">
      <InformationCard
        title="Dzisiejsze rezerwacje"
        value={informations.todayReservation}
        icon="event"
        bgColor="#12DC26"
      />
      <InformationCard
        title="Wszystkie rezerwacje"
        value={informations.allReservation}
        icon="calendar_month"
        bgColor="#6D71F9"
      />
      <InformationCard
        title="Anulowane rezerwacje"
        value={informations.cancelledReservation}
        icon="close"
        bgColor="#FF4C41"
      />
      <InformationCard
        title="Ilość wiadomości"
        value={informations.messages}
        icon="mail"
        bgColor="#1263DC"
      />
    </Container>
  );
};

export default InformationCards;
