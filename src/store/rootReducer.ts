import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { CounterData, CounterId, StateData } from "types/interfaces";

const counterSlice = createSlice({
  name: 'counter',
  initialState: {
    counters: []
  } as StateData,
  reducers: {
    increment(state, action: PayloadAction<CounterId>) {
      const counterIndex: number = state.counters.findIndex(counter => counter.id === action.payload.id)
      state.counters[counterIndex].value++
    },
    decrement(state, action: PayloadAction<CounterId>) {
      const counterIndex: number = state.counters.findIndex(counter => counter.id === action.payload.id)
      state.counters[counterIndex].value--
    },
    addCounter(state, action: PayloadAction<CounterData>) {
      state.counters.push(action.payload)
    },
    removeCounter(state, action: PayloadAction<CounterId>) {
      const countersAfterRemove = state.counters.filter(counter => counter.id !== action.payload.id);
      state.counters = countersAfterRemove;
    },
  },
})

export const { increment, decrement, addCounter, removeCounter } = counterSlice.actions;
export default counterSlice.reducer;
