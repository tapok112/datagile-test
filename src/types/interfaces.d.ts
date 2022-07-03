// Описание базового набора данных счетчика
export interface CounterData {
  id: number,
  value: number,
}

export interface CounterId {
  id: number
}

export interface StateData {
  counters: CounterData[]
}