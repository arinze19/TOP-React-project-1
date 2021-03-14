import React from "react";

function Overview(props) {
  const tasks = props.tasks.map((item, index) => {
    return (
      <li className="list-container__list" key={item}>
        <i className="las la-edit"></i>
        <p> {index + 1}. {item} </p>
         <i className="las la-times" onClick={()=> props.handleClick(index)}></i>
      </li>
    );
  });

  return <ul className="list-container">{tasks}</ul>;
}

export default Overview;
