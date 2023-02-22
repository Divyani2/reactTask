import React from 'react';
import { useState } from 'react';
import InputBox from './InputBox';
import Table from './Table';
//import { ContextProvider } from '../component/CreateContext';

const FormTak = () => {
  const [input, setinput] = useState({ userName: '', email: '' });
  const [data, setdata] = useState([]);
  const [toggle, setToggle] = useState(true);
  const [editData, setEditData] = useState(null);

  const handleOnChange = (e) => {
    e.preventDefault();
    const { name, value } = e.target;
    setinput({ ...input, [name]: value });
  };

  let { userName, email } = input;
  const handleSubmit = (e, index) => {
    e.preventDefault();
    if (input.userName === '') {
      console.log('notworking');
    } else if (input && toggle === false) {
      console.log('toggle');
      setdata(
        data.map((elem, index) => {
          console.log(index);
          if (index === editData) {
            console.log('check');
            console.log(input.userName);
            return { ...elem, userName: input.userName, email: input.email };
          } else {
            console.log('not working 2');
          }
          return elem;
        }),
        setinput({ userName: '', email: '' }),
        setToggle(true)
      );
    } else {
      setdata([...data, { userName, email }]);
      setinput({ userName: '', email: '' });
      console.log(input);
    }
  };

  const onDelete = (index) => {
    console.log(index);
    const deletedData = data.filter((elem, i) => index !== i);
    console.log(deletedData);
    setdata(deletedData);
  };

  const onEdit = (index) => {
    console.log(index);
    const editedData = data.filter((elem, i) => index === i);
    setToggle(false);
    console.log(editedData);
    setinput({ userName: editedData[0].userName, email: editedData[0].email });
    setEditData(index);
  };

  return (
    <>
      <form>
        <InputBox
          id='userName'
          name='userName'
          value={input.userName}
          onChange={handleOnChange}
          label='Name'
        />
        <br />

        <InputBox
          id='email'
          name='email'
          value={input.email}
          onChange={handleOnChange}
          label='Email'
        />
        <br />
        {toggle ? (
          <button type='submit' onClick={handleSubmit}>
            Submit
          </button>
        ) : (
          <button onClick={handleSubmit}>Update</button>
        )}
      </form>
      <Table tableData={data} onClick1={onDelete} onClick2={onEdit} />
    </>
  );
};

export default FormTak;
