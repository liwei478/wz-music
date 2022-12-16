import { createSlice } from '@reduxjs/toolkit'

const counterSlice = createSlice({
  name: 'counter',
  initialState: {
    count: 100,
    age: 18,
    message: '无名市'
  },
  reducers: {}
})

export default counterSlice.reducer
