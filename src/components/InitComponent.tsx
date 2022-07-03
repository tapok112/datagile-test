import React from 'react';

import { addCounter } from 'store/rootReducer';

import { useAppDispatch, useAppSelector } from 'types/hooks';
import { CounterData } from 'types/interfaces';

import Counter from './counters/Counter';
import TimerCounter from './counters/TimeCounter';

import Button from '@mui/material/Button';
import { Box } from '@mui/material';


const InitComponent: React.FC = () => {
  const counters = useAppSelector(state => state.counters);
  const dispatch = useAppDispatch();

  const handleAddNewCounter = () => {
    const countersSum = counters.reduce((a: number, b: CounterData) => a + b.value, 0)
    dispatch(addCounter({id: counters.length + 1, value: countersSum}))
  }

  return (
    <Box>
      <Button variant="contained" onClick={handleAddNewCounter}>
        Добавить счетчик
      </Button>

      <hr/>
      
      {counters?.map((counter: CounterData) => 
          counter.id % 4 === 0 ? (
            <TimerCounter id={counter.id} value={counter.value} key={counter.id} />
          ) : (
            <Counter id={counter.id} value={counter.value} key={counter.id} />
          )
        )
      }
    </Box>
  );
}

export default InitComponent;
