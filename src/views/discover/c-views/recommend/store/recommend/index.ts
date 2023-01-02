import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import {
  getArtistList,
  getBanners,
  getHotRecommends,
  getNewAlbum,
  getRankingData
} from '../../service/recommend'

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
  getArtistList(5).then((res) => {
    dispatch(changeSettleSingerAction(res.artists))
  })
})

const rankingIds = [19723756, 3779629, 2884035]
export const fetchRankingDataAction = createAsyncThunk('rankingdata', (_, { dispatch }) => {
  // 1. 根据 id 分别获取不同的数据信息
  // for (const id of rankingIds) {
  //   getRankingData(id).then((res) => {
  //     switch (id) {
  //       case 19723756:
  //         console.log('飙升榜', res)
  //         break
  //       case 3779629:
  //         console.log('新歌榜', res)
  //         break
  //       case 2884035:
  //         console.log('原始榜', res)
  //         break
  //     }
  //   })
  // }

  // 2. 将三个结果都拿到，统一放到一个数组中管理
  // 保障一：获取到所有的结果后，进行 dispatch 操作
  // 保障二：获取到的结果一定是有正确的顺序
  const promises: Promise<any>[] = []
  for (const id of rankingIds) {
    promises.push(getRankingData(id))
  }

  Promise.all(promises).then((res) => {
    const playlist = res.filter((item) => item.playlist).map((item) => item.playlist)
    dispatch(changeRankingsAction(playlist))
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
  rankings: any[]

  // upRanking: any[]
  // newRanking: any[]
  // originRanking: any[]

  settleSingers: any[]
}

const initialState: IRecommendState = {
  banners: [],
  hotRecommends: [],
  newAlbums: [],
  rankings: [],

  // upRanking: [],
  // newRanking: [],
  // originRanking: []

  settleSingers: []
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
    },
    changeRankingsAction(state, { payload }) {
      state.rankings = payload
    },
    changeSettleSingerAction(state, { payload }) {
      state.settleSingers = payload
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

export const {
  changeBannersAction,
  changeHotRecommendsAction,
  changeNewAlbumsAction,
  changeRankingsAction,
  changeSettleSingerAction
} = recommendSlice.actions
export default recommendSlice.reducer
