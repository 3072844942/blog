<template>
<!--  <div class="vue3-menus-item" v-menus:right="menus">-->
  <v-content>
    <router-view :key="$route.fullPath" />
  </v-content>
<!--  </div>-->
</template>

<script>
// import { ref } from "vue";
// import { directive } from 'vue3-menus';

export default ({
  // name: "App",
  // directives: {
  //   menus: directive
  // },
  // setup() {
  //   const menus = ref({
  //     menus: [
  //       {
  //         label: "返回(B)",
  //         tip: 'Alt+向左箭头',
  //         click: () => {
  //           window.history.back(-1);
  //         }
  //       },
  //       {
  //         label: "点击不关闭菜单",
  //         tip: '不关闭菜单',
  //         click: () => {
  //           return false;
  //         }
  //       }
  //     ]
  //   })
  //   return { menus }
  // },
});
</script>