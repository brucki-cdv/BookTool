import "./Apartments.css";
import FormTitle from "../../Components/Title";
import SquareCard from "../../Components/SquareCard";
import CreateButton from "../../Components/CreateButton";

import { ApartmentsContext } from "./ApartmentsContainer";
import { useContext } from "react";
import { useDispatch } from "react-redux";

export default function Apartments(second) {
  const { apartments } = useContext(ApartmentsContext);
  const dispatch = useDispatch();

  return (
    <>
      <FormTitle name="Apartamenty" />
      <CreateButton
        name="Dodaj domek"
        onClick={() => dispatch({ type: "ADD_APARTMENT_OPEN" })}
      />
      <div className="apartments-container">
        {apartments.map((apartment) => {
          return (
            <SquareCard
              smlText={apartment._id}
              text={apartment.name}
              iconText={apartment.houseNumber}
              adultCost={apartment.adultCost}
              childrenCost={apartment.childrenCost}
              maxSlots={apartment.maxSlots}
              onClick={() =>
                dispatch({ type: "EDIT_APARTMENT_OPEN", payload: apartment._id })
              }
            />
          );
        })}
      </div>
    </>
  );
}
