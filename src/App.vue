<template>
  <v-app id="app">
<!--    <transition name="fade">-->
<!--      <Loading v-if="this.$store.state.isLoading === 'true'"></Loading>-->
<!--    </transition>-->
<!--    <div v-show="this.$store.state.isLoading !== 'true'">-->
      <!-- 导航栏 -->
      <TopNavBar></TopNavBar>
      <!-- 侧边导航栏 -->
      <SideNavBar></SideNavBar>
      <!-- 内容 -->
      <Context></Context>
      <!-- 页脚 -->
      <Footer></Footer>
      <!-- 返回顶部 -->
      <BackTop></BackTop>
      <!-- 搜索模态框 -->
      <searchModel></searchModel>
      <!-- 登录模态框 -->
      <LoginModel></LoginModel>
      <!-- 注册模态框 -->
      <RegisterModel></RegisterModel>
      <!-- 忘记密码模态框 -->
      <ForgetModel></ForgetModel>
      <!-- 绑定邮箱模态框 -->
      <EmailModel></EmailModel>
      <!-- 音乐播放器 -->
      <Player v-if="blogInfo.websiteConfig.isMusicPlayer === 1 && !isMobile" />
      <!-- 聊天室 -->
      <ChatRoom v-if="blogInfo.websiteConfig.isChatRoom === 1"></ChatRoom>
<!--    </div>-->
  </v-app>
</template>

<script>
import TopNavBar from "./components/layout/TopNavBar";
import SideNavBar from "./components/layout/SideNavBar";
import Footer from "./components/layout/Footer";
import BackTop from "./components/BackTop";
import searchModel from "./components/model/SearchModel";
import LoginModel from "./components/model/LoginModel";
import RegisterModel from "./components/model/RegisterModel";
import ForgetModel from "./components/model/ForgetModel";
import EmailModel from "./components/model/EmailModel";
import Player from "./components/zw-player/player.vue";
import ChatRoom from "./components/ChatRoom";
import Context from "./components/Context";
import Loading from "./views/Loading/Loading";

export default {
  created() {
    // 获取博客信息
    this.getBlogInfo();
    // 上传访客信息
    this.axios.post("/api/report");

    this.$store.state.isLoading = "false";
    console.log(this.$store.state.isLoading);
  },
  components: {
    TopNavBar,
    Player,
    SideNavBar,
    Footer,
    BackTop,
    searchModel,
    LoginModel,
    RegisterModel,
    ForgetModel,
    EmailModel,
    ChatRoom,
    Context,
    Loading
  },
  methods: {
    getBlogInfo() {
      this.axios.get("/api/").then(({ data }) => {
        this.$store.commit("checkBlogInfo", data.data);
      });
    }
  },
  computed: {
    blogInfo() {
      return this.$store.state.blogInfo;
    },
    isMobile() {
      const flag = navigator.userAgent.match(
        /(phone|pad|pod|iPhone|iPod|ios|iPad|Android|Mobile|BlackBerry|IEMobile|MQQBrowser|JUC|Fennec|wOSBrowser|BrowserNG|WebOS|Symbian|Windows Phone)/i
      );
      return flag;
    }
  }
};
</script>
