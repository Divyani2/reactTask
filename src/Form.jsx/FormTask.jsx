import React from 'react';
import { useState } from 'react';
import InputBox from './InputBox';
import Table from './Table';
//import { ContextProvider } from '../component/CreateContext';

const FormTak = () => {
  const [input, setinput] = useState({ userName: '', email: '' });
  const [data, setdata] = useState([])

  const handleOnChange = (e) => {
    e.preventDefault();
    const { name, value } = e.target;
    setinput({ ...input, [name]: value });
  };

 let{userName,email}= input; 
  const handleSubmit = (e) => {
    e.preventDefault();
   setdata([...data,{userName,email}])
   setinput({userName: '', email: '' })
   console.log(input)
  };

  const onDelete = (index) =>{
    console.log(index)
     const deletedData = data.filter((elem,i)=>{
         return index!==i;
     }) 
     console.log(deletedData)
     setdata(deletedData)
   }
 
   const onEdit = (index) =>{
    console.log(index)
     const editedData = data.filter((elem,i)=>{
         return index===i;
     }) 
     console.log(editedData)
   }



 
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

        <button type='submit' onClick={handleSubmit}>
          Submit
        </button>
      </form>
      <Table tableData={data} onClick1={onDelete} onClick2={onEdit} />
    </>
  );
};

export default FormTak;
