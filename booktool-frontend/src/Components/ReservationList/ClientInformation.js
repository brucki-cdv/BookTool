import "./ClientInformation.css";
import ChapterTitle from "../ChapterTitle";
import InputField from "../InputField";

import { useEffect, useContext } from "react";
import { ModalContext } from "./ModalContainer";
const ClientInformation = (props) => {
  const { client, setClientInformationHidden } = useContext(ModalContext);

  return (
    <div className={"body__client " + setClientInformationHidden()}>
      <ChapterTitle title="Dane osobowe" />
      <InputField name="test" label="Imię" value={client.firstName} />
      <InputField name="test" label="Nazwisko" value={client.lastName} />
      <InputField
        name="test"
        label="Numer telefonu"
        value={client.phoneNumber}
      />
      <InputField name="test" label="Email" value={client.email} />
    </div>
  );
};

export default ClientInformation;
