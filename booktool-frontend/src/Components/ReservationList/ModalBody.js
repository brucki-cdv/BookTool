import "./ModalBody.css";
import ClientInformation from "./ClientInformation";
import ReservationInformation from "./ReservationInformation";

const ModalBody = (props) => {
  return (
    <div className="modal-body">
      <ReservationInformation />
      <ClientInformation />
    </div>
  );
};

export default ModalBody;
