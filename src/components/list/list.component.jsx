import React from "react";

import "./list.styles.scss";

const List = ({ listState, setListState }) => {
  const handleDelete = event => {
    const dataKey = event.target.parentNode.parentNode.getAttribute("data-key");
    setListState(listState.filter(listItem => listItem.id != dataKey));
  };

  const handleComplete = event => {
    const dataKey = event.target.parentNode.parentNode.getAttribute("data-key");
    setListState(
      listState.map(listItem => {
        listItem.id == dataKey
          ? (listItem.complete = !listItem.complete)
          : null;
        return listItem;
      })
    );
  };

  return (
    <div className="list">
      {listState.map(({ name, id, date, complete }) => (
        <div key={id} data-key={id} className="list-row">
          <p className={`name ${complete ? "complete" : ""}`}>{name}</p>
          <span className={`date ${complete ? "complete" : ""}`}>{date}</span>
          <div key={id}>
            <span className="icon icon--complete" onClick={handleComplete}>
              &#10003;
            </span>
            <span className="icon icon--delete" onClick={handleDelete}>
              &times;
            </span>
          </div>
        </div>
      ))}
    </div>
  );
};

export default List;
