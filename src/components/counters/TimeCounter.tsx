import React, { useEffect } from 'react';

import { increment, removeCounter } from 'store/rootReducer';

import { useAppDispatch } from 'types/hooks';
import { CounterData } from 'types/interfaces';

import Button from '@mui/material/Button';
import { Box } from '@mui/material';


const TimerCounter: React.FC<CounterData> = ({id, value}) => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    const interval = setInterval(() => dispatch(increment({id})), 1000);
    return () => clearInterval(interval)
  },[])

  const handleRemoveCounter = () => {
    dispatch(removeCounter({id}))
  }

  return (
    <Box sx={{ mx: 5, my: 3 }}>
      <Box sx={{ mx: 3 }}>{value}</Box>
      <Button variant='outlined'
              color='error'
              size='small'
              sx={{ my: 1 }}
              onClick={() => handleRemoveCounter()}>
        Удалить
      </Button>
    </Box>
  );
}

export default TimerCounter;
