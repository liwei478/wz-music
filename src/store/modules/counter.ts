import { createSlice, PayloadAction } from '@reduxjs/toolkit'

// 对于无法明确推导出来的类型，需要在这里指定
interface IState {
  count: number
  age: number
  message: string
  direction: 'left' | 'right' | 'up' | 'down'
}

const initialState: IState = {
  count: 100,
  age: 18,
  message: '无名市',
  direction: 'left'
}

const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    changeMessageAction(state, { payload }: PayloadAction<string>) {
      state.message = payload
    }
  }
})

export const { changeMessageAction } = counterSlice.actions
export default counterSlice.reducer
