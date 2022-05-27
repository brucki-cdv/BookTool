import "./ReservationOptions.css";
import MaterialIcon from "../../Components/MaterialIcon";

import { AiOutlineEdit, AiOutlineDelete } from "react-icons/ai";
import { useDispatch } from "react-redux";

const ReservationOptions = (props) => {
  const dispatch = useDispatch();

  return (
    <div className="reservation__options">
      <ul>
        <li
          onClick={() =>
            dispatch({
              type: "EDIT_RESERVATION_OPEN",
              payload: {
                reservationId: props.reservationId,
                clientId: props.clientId,
              },
            })
          }
        >
          <AiOutlineEdit size={25} />
        </li>
        <li>
          <AiOutlineDelete size={25} />
        </li>
      </ul>
    </div>
  );
};

export default ReservationOptions;
