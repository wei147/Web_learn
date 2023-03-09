import {
  createStore
} from 'vuex'

// VueX 数据管理框架
// Vuex 创建了一个全局唯一的仓库,用来存放全局的数据
export default createStore({
  state: {
    name: "wei",
    age:20
  },
  getters: {},
  //mutation 里面只允许写同步代码,不允许写异步代码
  mutations: {
    //第四步,对应的mutation被执行 changeAge
    change(state, str) {
      //第五步,对应的mutation 被执行
      state.name = str
    },
    changeAge(state, str) {
      state.age = str
    }
  },
  //actions 一般写异步代码
  //dispatch和actions做关联
  actions: {
    //第二步,store感知到发出了一个叫change的action,执行change 方法
    change(store,str) {
      console.log(" I change the name");
      //第三步, 提交一个commit 触发一个mutation
      store.commit('change',str)
    },
    // changeAge(state, str) {
    //   console.log(" I change the age");
    //   store.commit('changeAge',str)
    // }
  },
  modules: {}
})