import "./RecentMessages";
import MessagesWrapper from "./MessagesWrapper";
import Message from "./Message";
import FormTitle from "../FormTitle/FormTitle";
const RecentMessages = (props) => {
  return <div className="details__messages">
      <MessagesWrapper>
          <FormTitle name="Wiadomości"/>
          <Message message="Anulowano rezerwację" reservationId="2467577575" icon="close"/>
          <Message message="Dodano rezerwację" reservationId="2467577575" icon="add"/>
          <Message message="Zbliża się termin rezerwacji" reservationId="2467577575" icon="schedule"/>
          <Message message="Dodano rezerwację" reservationId="2467577575" icon="add"/>
      </MessagesWrapper>
  </div>;
};

export default RecentMessages;
