import { createSlice } from '@reduxjs/toolkit'

interface IPlayerState {
  currentSong: any
}
const initialState: IPlayerState = {
  currentSong: {
    name: 'Lonely Christmas',
    id: 26608793,
    pst: 0,
    t: 0,
    ar: [
      {
        id: 2116,
        name: '陈奕迅',
        tns: [],
        alias: []
      }
    ],
    alia: [],
    pop: 100,
    st: 0,
    rt: '',
    fee: 8,
    v: 87,
    crbt: null,
    cf: '',
    al: {
      id: 2532179,
      name: '2013 陈奕迅 music life 精选',
      picUrl: 'https://p2.music.126.net/1I8ELtF6pswNRAVs4CwjfA==/109951166656425505.jpg',
      tns: [],
      pic_str: '109951166656425505',
      pic: 109951166656425500
    },
    dt: 280693,
    h: {
      br: 320000,
      fid: 0,
      size: 11230607,
      vd: -39503,
      sr: 44100
    },
    m: {
      br: 192000,
      fid: 0,
      size: 6738382,
      vd: -37011,
      sr: 44100
    },
    l: {
      br: 128000,
      fid: 0,
      size: 4492269,
      vd: -35483,
      sr: 44100
    },
    sq: {
      br: 842120,
      fid: 0,
      size: 29547202,
      vd: -39491,
      sr: 44100
    },
    hr: null,
    a: null,
    cd: '01',
    no: 7,
    rtUrl: null,
    ftype: 0,
    rtUrls: [],
    djId: 0,
    copyright: 2,
    s_id: 0,
    mark: 8192,
    originCoverType: 0,
    originSongSimpleData: null,
    tagPicList: null,
    resourceState: true,
    version: 87,
    songJumpInfo: null,
    entertainmentTags: null,
    awardTags: null,
    single: 0,
    noCopyrightRcmd: null,
    rtype: 0,
    rurl: null,
    mst: 9,
    cp: 2706568,
    mv: 0,
    publishTime: 1372176000007
  }
}

const playerSlice = createSlice({
  name: 'player',
  initialState,
  reducers: {}
})

export default playerSlice.reducer
