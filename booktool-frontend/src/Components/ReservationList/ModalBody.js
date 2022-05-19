import "./ModalBody.css";
import ClientInformation from "./ClientInformation";
import ReservationInformation from "./ReservationInformation";

export default function ModalBody(props) {
  return (
    <div className="modal-body">
      <ReservationInformation />
      <ClientInformation />
    </div>
  );
}
