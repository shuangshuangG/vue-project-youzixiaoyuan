import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    condition: {
      userName: false,
      passWord: false
    },
    user: [
      {
        userName: 'admin1',
        passWord: '123',
        msg: {
          name: 'admin1',
          Authentication: '一卡通认证',
          autograph: '这是我的个签',
          email: '12345678@123.com',
          school: '北京大学'
        }
      },
      {
        userName: 'admin2',
        passWord: '123',
        msg: {
          name: 'admin2',
          Authentication: '未认证',
          autograph: '',
          email: '',
          school: ''
        }
      },
      {
        userName: 'admin3',
        passWord: '123',
        msg: {
          name: 'admin3',
          Authentication: '未认证',
          autograph: '',
          email: '',
          school: ''
        }
      }
    ],
    buyData: [],
    isLogin: '',
    isRegister: false,
    route: '',
    saleid:"",
    detail:{}
  },
  mutations: {
    setSaleid(state, payload){
      state.saleid=payload
      // console.log(state.saleid)
    },
    setDetail(state,payload){
      state.detail = payload
    },
    register(state, payload){
      state.user.push(payload)
    },
    setBuyData(state, payload){
      state.buyData.unshift(payload)
    },
    setRoute(state, payload){
      state.route = payload
    },
    login(state, payload){
      state.isLogin = ''
      let userState = {userName: false,passWord: false}
      state.user.forEach(function (item) {
        if( item.userName == payload.userName ){
          userState.userName = true
          if( item.passWord == payload.passWord ){
            userState.passWord = true
            state.isLogin = item.msg
          }
        }
      })
      if( !state.isLogin ) state.isLogin = userState
    },
    isRegister(state, payload){
      let num = 0
      state.isRegister = false
      state.user.forEach(function (item) {
        if( item.userName == payload.userName ) num++
      })
      if (num == 0 ){
        const modPayload = {
          userName: payload.userName,
          passWord: payload.passWord,
          msg: {
            name: payload.userName,
            Authentication: '未认证',
            autograph: '',
            email: payload.email,
            school: payload.school
          }
        }
        this.commit('register',modPayload)
        // console.log(state.user)
        state.isRegister = true
        // alert('注册成功')
      }
      else state.isRegister = false
    },
    clearLogin(state){
      state.isLogin = ''
    }
  },
  actions: {
    setSaleid({commit},payload){
      commit("setSaleid",payload)
    },
    setDetail({commit},payload){
      commit("setDetail",payload)
    },
    setBuyData({commit}, payload){
      commit('setBuyData', payload)
    },
    setRoute({commit}, payload){
      commit('setRoute', payload)
    },
    register({commit}, payload){
      commit('isRegister', payload)
      return this.state.isRegister
    },
    login({commit}, payload){
      commit('login', payload)
      return this.state.isLogin
    },
    clearLogin({ commit }){
      commit('clearLogin')
    }
  }
})
