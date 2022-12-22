import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { getBanners, getHotRecommends, getNewAlbum } from '../../service/recommend'

export const fetchRecommendDataAction = createAsyncThunk('fetchdata', (_, { dispatch }) => {
  // 1. 获取轮播图效果
  getBanners().then((res) => {
    dispatch(changeBannersAction(res.banners))
  })
  getHotRecommends(8).then((res) => {
    dispatch(changeHotRecommendsAction(res.result))
  })
  getNewAlbum().then((res) => {
    dispatch(changeNewAlbumsAction(res.albums))
  })
})

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
  newAlbums: any[]
}

const initialState: IRecommendState = {
  banners: [],
  hotRecommends: [],
  newAlbums: []
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
    },
    changeNewAlbumsAction(state, { payload }) {
      state.newAlbums = payload
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

export const { changeBannersAction, changeHotRecommendsAction, changeNewAlbumsAction } =
  recommendSlice.actions
export default recommendSlice.reducer
