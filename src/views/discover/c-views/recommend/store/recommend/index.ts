import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { getBanners } from '../../service/recommend'

export const fetchBannerDataAction = createAsyncThunk('banners', async () => {
  const res = await getBanners()
  console.log(res)
  return res.data
})

interface IRecommendState {
  banners: any[]
}

const initialState: IRecommendState = {
  banners: []
}

const recommendSlice = createSlice({
  name: 'recommend',
  initialState,
  reducers: {}
})

export default recommendSlice.reducer
