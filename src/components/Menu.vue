<template>
  <div class="div" @click.stop @contextmenu="rightClick">组件方式打开菜单</div>
  <vue3-menus v-model:open="isOpen" :event="eventVal" :menus="menus" hasIcon>
    <template #icon="{menu, activeIndex, index}">{{activeIndex}}</template>
    <template #label="{ menu, activeIndex, index}">插槽：{{ menu.label }}</template>
  </vue3-menus>
</template>
<script>
import { defineComponent, nextTick, ref, shallowRef } from "vue";
import { Vue3Menus } from 'vue3-menus';

export default defineComponent({
  name: "App",
  components: {
    Vue3Menus
  },
  setup() {
    const isOpen = ref(false);
    const eventVal = ref({});
    function rightClick(event) {
      isOpen.value = false;
      nextTick(() => {
        eventVal.value = event;
        isOpen.value = true;
      })
      event.preventDefault();
    }
    const menus = shallowRef([
      {
        label: "返回(B)",
        tip: 'Alt+向左箭头',
        click: () => {
          window.history.back(-1);
        }
      },
      {
        label: "点击不关闭菜单",
        tip: '不关闭菜单',
        click: () => {
          return false;
        }
      }
    ]);
    return { menus, isOpen, rightClick, eventVal }
  },
});
</script>