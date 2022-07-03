import React from 'react';

import { increment, decrement, removeCounter } from 'store/rootReducer';

import { useAppDispatch } from 'types/hooks';
import { CounterData } from 'types/interfaces';

import Button from '@mui/material/Button';
import { Box, ButtonGroup } from '@mui/material';


const Counter: React.FC<CounterData> = ({id, value}) => {
  const dispatch = useAppDispatch();

  const handleRemoveCounter = () => {
    dispatch(removeCounter({id}))
  }

  const handleIncrement = () => {
    dispatch(increment({id}))
  }

  const handleDecrement = () => {
    dispatch(decrement({id}))
  }

  return (      
    <Box sx={{ mx: 5, my: 3 }}>
      <Box sx={{ mx: 3 }}>{value}</Box>
      <ButtonGroup variant='outlined'
                   sx={{ my: 1 }}>
        <Button color='success'
                onClick={() => handleIncrement()}>
          +
        </Button>
        <Button color='error'
                onClick={() => handleDecrement()}>
          -
        </Button>
      </ButtonGroup>
      <br/>
      <Button variant='outlined'
              color='error'
              size='small'
              onClick={() => handleRemoveCounter()}>
        Удалить
      </Button>
    </Box>
  );
}

export default Counter;
