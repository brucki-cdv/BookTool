import "./ReservationOptions.css";
import MaterialIcon from "../../Components/MaterialIcon";

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
          <MaterialIcon name="edit" />
        </li>
        <li>
          <MaterialIcon name="delete" />
        </li>
        <li>
          <MaterialIcon name="visibility" />
        </li>
      </ul>
    </div>
  );
};

export default ReservationOptions;
