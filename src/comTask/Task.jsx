import React from 'react';
import { useState } from 'react';
import Box from '@mui/material/Box';
import Input from '@mui/material/Input';
import { IoIosAdd } from 'react-icons/io';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import { IoIosClose } from 'react-icons/io';

const Task = () => {
  const [input, setinput] = useState({ title: '', about: '' });
  const [data, setdata] = useState([]);

  const handleOnChange = (e) => {
    e.preventDefault();
    const { name, value } = e.target;
    setinput({ ...input, [name]: value });
  };

  let { title, about } = input;
  const handleSubmit = (e, index) => {
    e.preventDefault();
    setdata([...data, { title, about }]);
    setinput({ title: '', about: '' });
    console.log(data);
  };

  const onDelete = (index) => {
    console.log(index);
    const deletedData = data.filter((elem, i) => index !== i);
    console.log(deletedData);
    setdata(deletedData);
  };

  return (
    <Box bgcolor={'black'} color={'white'}>
      <Box
        bgcolor={'#242320'}
        border={'2px solid #A35709'}
        borderRadius={'0px 0px 8px 8px'}
        width={'1310px'}
        height={'82px'}
        mb={'5px'}
      >
        <Typography variant='h5' margin={'17px 0px 0px 45px'}>
          GYIZER
        </Typography>
        <Typography variant='body2' ml={'48px'}>
          Todo App
        </Typography>
      </Box>
      <form>
        <Box display={'flex'} margin={'44px 0px 44px 350px'}>
          <Box>
            <Box
              bgcolor={'#242320'}
              border={'1px solid #FF8303'}
              borderRadius={'4px'}
              width={'466px'}
              height={'32px'}
              mb={'5px'}
            >
              <Input
                id='title'
                name='title'
                value={input.title}
                onChange={handleOnChange}
                placeholder='Title'
                style={{ color: 'white' }}
              />
              <br />
            </Box>

            <Box
              bgcolor={'#242320'}
              border={'1px solid #FF8303'}
              borderRadius={'4px'}
              width={'466px'}
              height={'32px'}
            >
              <Input
                id='about'
                name='about'
                value={input.about}
                onChange={handleOnChange}
                placeholder='About'
                style={{ color: 'white' }}
              />
              <br />
            </Box>
          </Box>

          <Box
            button
            onClick={handleSubmit}
            type='submit'
            width={'70px'}
            height={'70px'}
            bgcolor={'#242320'}
            border={'2px solid #FF8303'}
            borderRadius={'8px'}
          >
            <IoIosAdd size='4rem' color='#FF8303' />
          </Box>
        </Box>
      </form>
      <Grid
        container
        border={'2px solid #A35709'}
        bgcolor={'#242320'}
        color={'white'}
        width={'1100px'}
        height={'426px'}
        borderRadius={'8px'}
        ml={'95px'}
        padding={'73px'}
      >
        {data.map((elem, index) => {
          return (
            <Grid
              item
              border={'2px solid #A35709'}
              bgcolor={'#242320'}
              color={'white'}
              width={'300px'}
              height={'72px'}
              borderRadius={'8px'}
              mr={'16px'}
            >
              <Box display={'flex'} >
                <Box>
                  <Typography
                    width={'174px'}
                    height={'26px'}
                    variant={'h6'}
                    lineHeight={'26px'}
                    pt={'16px'}
                  >
                    {elem.title}
                  </Typography>
                  <Typography variant={'subtitle2'}>{elem.about}</Typography>
                </Box>
                <Box
                  button
                  onClick={() => onDelete(index)}
                  width={'32px'}
                  height={'32px'}
                  bgcolor={'#242320'}
                  border={'1px solid #FF8303'}
                  borderRadius={'8px'}
                  ml={'55px'}
                  mt={'15px'}
                >
                  <IoIosClose size='2rem' color='#FF8303' />
                </Box>
              </Box>
            </Grid>
          );
        })}
      </Grid>
    </Box>
  );
};

export default Task;
