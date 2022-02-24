import "./Table.css";
import SearchBar from "../SearchBar/SearchBar";
const Table = (props) => {
  const { head, body } = props;
  console.log(head);
  console.log(body);
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
          {body.map((data) => {
            return (
              <tr>
                {data.map((val) => {  
                  return <td>{val}</td>;
                })}
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
