import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { getBanners, getHotRecommends } from '../../service/recommend'

export const fetchBannerDataAction = createAsyncThunk('banners', async (arg, { dispatch }) => {
  const res = await getBanners()
  dispatch(changeBannersAction(res.banners))
})

export const fetchHotRecommendsAction = createAsyncThunk(
  'hotRecommends',
  async (org, { dispatch }) => {
    const res = await getHotRecommends(8)
    dispatch(changeHotRecommendsAction(res.result))
  }
)

interface IBannerData {
  imageUrl: string
  targetId: number
  adid: null
  targetType: number
  titleColor: string
  typeTitle: string
  url: string
  scm: string
  bannerBizType: string
}
interface IRecommendState {
  banners: IBannerData[]
  hotRecommends: any[]
}

const initialState: IRecommendState = {
  banners: [],
  hotRecommends: []
}

const recommendSlice = createSlice({
  name: 'recommend',
  initialState,
  reducers: {
    changeBannersAction(state, { payload }) {
      state.banners = payload
    },
    changeHotRecommendsAction(state, { payload }) {
      state.hotRecommends = payload
    }
  }
  // extraReducers: (builder) => {
  //   builder
  //     .addCase(fetchBannerDataAction.pending, () => {
  //       console.log('pending')
  //     })
  //     .addCase(fetchBannerDataAction.fulfilled, (state, { payload }) => {
  //       state.banners = payload
  //     })
  //     .addCase(fetchBannerDataAction.rejected, () => {
  //       console.log('rejected')
  //     })
  // }
})

export const { changeBannersAction, changeHotRecommendsAction } = recommendSlice.actions
export default recommendSlice.reducer
