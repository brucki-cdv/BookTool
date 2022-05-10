import "./StatusPicker.css";

import { useState, useEffect } from "react";
import { MdOutlineDone } from "react-icons/md";

export default function StatusPicker({ onChange, value }) {
  const [statusClicked, setStatusClicked] = useState(value);

  const onWaitingClick = () => {
    onChange("waiting");
    if (statusClicked != "waiting") {
      setStatusClicked("waiting");
    } else {
      setStatusClicked(null);
      onChange(null);
    }
  };

  const onHalfClick = () => {
    onChange("half");
    if (statusClicked != "half") {
      setStatusClicked("half");
    } else {
      setStatusClicked(null);
      onChange(null);
    }
  };

  const onPaidClick = () => {
    onChange("paid");
    if (statusClicked != "paid") {
      setStatusClicked("paid");
    } else {
      setStatusClicked(null);
      onChange(null);
    }
  };

  const onCancelledClick = () => {
    onChange("cancelled");
    if (statusClicked != "cancelled") {
      setStatusClicked("cancelled");
    } else {
      setStatusClicked(null);
      onChange(null);
    }
  };

  useEffect(() => {
    setStatusClicked(value);
  }, [value]);

  return (
    <div className="status-picker">
      <ul>
        <li className="picker-waiting" onClick={onWaitingClick}>
          <div className="picker-waiting__icon">
            {statusClicked == "waiting" && <MdOutlineDone size={25} />}
          </div>
          Oczekuje na wpłate
        </li>
        <li className="picker-half" onClick={onHalfClick}>
          <div className="picker-half__icon">
            {statusClicked == "half" && <MdOutlineDone size={25} />}
          </div>
          Wpłacono zadatek
        </li>
        <li className="picker-paid" onClick={onPaidClick}>
          <div className="picker-paid__icon">
            {statusClicked == "paid" && <MdOutlineDone size={25} />}
          </div>
          Wpłacono całość
        </li>
        <li className="picker-cancelled" onClick={onCancelledClick}>
          <div className="picker-cancelled__icon">
            {statusClicked == "cancelled" && <MdOutlineDone size={25} />}
          </div>
          Anulowana
        </li>
      </ul>
    </div>
  );
}
