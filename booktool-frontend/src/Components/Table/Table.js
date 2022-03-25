import "./Table.css";
const Table = (props) => {
  const { head, body, searchbarInput } = props;

  const FilterRecords = () => {
    return (body
      .filter((val) => {
        if (searchbarInput === "") {
          return val;
        } else if (
          val.firstName.toLowerCase().includes(searchbarInput.toLowerCase()) ||
          val.lastName.toLowerCase().includes(searchbarInput.toLowerCase()) ||
          val.email.toLowerCase().includes(searchbarInput.toLowerCase()) ||
          val.phoneNumber.toLowerCase().includes(searchbarInput.toLowerCase()) ||
          val._id.toLowerCase().includes(searchbarInput.toLowerCase())
        ) {
          return val;
        }
      })
      .map((val) => {
        return (
          <tr>
            <td>{val._id}</td>
            <td>{val.firstName}</td>
            <td>{val.lastName}</td>
            <td>{val.email}</td>
            <td>{val.phoneNumber}</td>
          </tr>
        );
      }));
  };

  return (
    <div className="table__body">
      <table>
        <thead>
          <tr>
            {head.map((val) => {
              return <th>{val}</th>;
            })}
          </tr>
        </thead>
        <tbody>
          <FilterRecords />
        </tbody>
      </table>
    </div>
  );
};

export default Table;
