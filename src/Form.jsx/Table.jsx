import React from 'react';
//import { useState } from 'react';

const Table = (props) => {
 
  return (
    <>
      <table>
        <tr>
          <td>s.No.</td>  
          <td>Name</td>
          <td>Email</td>
        </tr>
        {props.tableData.map((data,index) => {
          return (
            <>
              <tr key={index}>
                <td>{index+1}</td>
                <td>{data.userName}</td>
                <td>{data.email}</td>
                <td>
                  {' '}
                  <button onClick={()=> props.onClick1(index)}>Delete</button>
                  <button onClick={()=> props.onClick2(index)}>Update</button>
                </td>
              </tr>
            </>
          );
        })}
      </table>
    </>
  );
};

export default Table;
