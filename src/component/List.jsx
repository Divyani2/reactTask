import React from 'react';

const List = () => {
  const names = ['div', 'diya', 'dviyani'];
  return (
    <div>
      {names.map((x) =>
        <h2>{x}</h2>   
    )}
    </div>
  );
};

export default List;
