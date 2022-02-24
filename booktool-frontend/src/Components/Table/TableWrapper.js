import "./TableWrapper.css";

const TableWrapper = (props) => {
    return (
        <div className="table__wrapper">
            {props.children}
        </div>
    )
}

export default TableWrapper;