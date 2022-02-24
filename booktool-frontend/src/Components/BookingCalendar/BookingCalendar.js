import "./BookingCalendar.css";
import { useState, useEffect } from "react";

const BookingCalendar = (props) => {
  const [dateRange, setDateRange] = useState([]);
  const [userDateRange, setUserDateRange] = useState([]);

  function includeDate(date) {
    console.log(dateRange.includes(date));
  }

  function indexOfDate(date) {
    dateRange.forEach((val) => {
      return val.indexOf(date);
    });
  }

  function getDays(dateArr) {
    let insideArr = [];
    let mainArr = [];
    dateArr.forEach((date) => {
      var loop = new Date(date.start);
      while (loop <= date.end) {
        insideArr.push(loop);
        var newDate = loop.setDate(loop.getDate() + 1);
        loop = new Date(newDate);
      }
      mainArr.push(insideArr);
      insideArr = [];
    });

    return mainArr;
  }

  useEffect(() => {
    setUserDateRange(
      getDays([
        { start: new Date("01/01/2013"), end: new Date("01/04/2013") },
        { start: new Date("01/06/2013"), end: new Date("01/11/2013") },
      ])
    );
    setDateRange(
      getDays([{ start: new Date("01/01/2013"), end: new Date("01/10/2013") }])
    );
  }, []);

  return (
    <div className="booking-calendar">
      <div className="row">
        {dateRange.map((date) => {
          console.log(date.includes(new Date("01/04/2013")));
          return date.map((val) => {
            return <div className="dayOfMonth">{val.toDateString()}</div>;
          });
        })}
      </div>
      <div className="row">
        {userDateRange.map((date) => {
          return date.map((val) => {
            if (includeDate(val)) {
              console.log(includeDate(val));
              switch (val) {
                case indexOfDate(val) === 0:
                  return <div className="day begin">{val.toDateString()}</div>;
                 
                default:
                  return <div className="day"></div>;
                  
              }
            }
          });
        })}
      </div>
    </div>
  );
};

export default BookingCalendar;
