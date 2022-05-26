<template>
  <div class="container-about">
    <div class="container-about-inner">

      <transition-group name="move" tag="div">
        <div v-for="data in list" :key="data" class="message-about">
          <div class="txt" :class="data.type">
            {{ data.context }}
          </div>
        </div>
      </transition-group>

      <transition-group name="btn" tag="div" class="context" v-if="show">
        <button v-for="data in btn" :key="data.to" @click="click(data)" class="select-button">
          {{ data.context }}
        </button>
      </transition-group>

    </div>
  </div>
</template>

<script>
export default {
  name: "about",
  data() {
    return {
      show: false,
      space: false,
      stop: false,
      list: [],
      btn: [],
      wait: [],
      local: [
        {
          "context": "Hi, Here",
          "from": 0,
          "to": 0,
          "type": "left"
        },
        {
          "context": "Hello，这里是Snak的家, 我是 Conner",
          "from": 0,
          "to": 0,
          "type": "left"
        },
        {
          "context": "一个小小的ACMer",
          "from": 0,
          "to": 1,
          "type": "left"
        },
        {
          "context": "能介绍一下你自己么",
          "from": 1,
          "to": 2,
          "type": "right"
        },
        {
          "context": "哇哦, 竟然对我感兴趣!",
          "from": 2,
          "to": 0,
          "type": "left"
        },
        {
          "context": "现在还是一个小小的本科生",
          "from": 2,
          "to": 0,
          "type": "left"
        },
        {
          "context": "是在某大学软件工程在读颓废大学生",
          "from": 2,
          "to": 0,
          "type": "left"
        },
        {
          "context": "喜欢弄各种小玩意,啥都学,啥都不会,呜呜呜o(╥﹏╥)o",
          "from": 2,
          "to": 4,
          "type": "left"
        },
        {
          "context": "不不不, 我说的是你, Conner",
          "from": 4,
          "to": 5,
          "type": "right"
        },
        {
          "context": "!!! 我吗",
          "from": 5,
          "to": 0,
          "type": "left"
        },
        {
          "context": "我是模控生命公司的RK-800型机器人(开个玩笑)",
          "from": 5,
          "to": 0,
          "type": "left"
        },
        {
          "context": "这是Snak给我起的名字",
          "from": 5,
          "to": 0,
          "type": "left"
        },
        {
          "context": "我只是一个没有感情的机器...",
          "from": 5,
          "to": 9,
          "type": "left"
        },
        {
          "context": "你会做些什么呢",
          "from": 9,
          "to": 6,
          "type": "right"
        },
        {
          "context": "你会做些什么呢",
          "from": 4,
          "to": 6,
          "type": "right"
        },
        {
          "context": "目前算是学会了Vue/SpringBoot啦",
          "from": 6,
          "to": 0,
          "type": "left"
        },
        {
          "context": "但是以后要干些什么 还不太清楚",
          "from": 6,
          "to": 10,
          "type": "left"
        },
        {
          "context": "有什么兴趣爱好嘛!",
          "from": 10,
          "to": 11,
          "type": "right"
        },
        {
          "context": "当然是打游戏, 追番, 睡觉了",
          "from": 11,
          "to": 0,
          "type": "left"
        },
        {
          "context": "偶尔也会和朋友一起出去骑车",
          "from": 11,
          "to": 12,
          "type": "left"
        },
        {
          "context": "可以和你认识一下么!!!",
          "from": 12,
          "to": 15,
          "type": "right"
        },
        {
          "context": "你说你参加了ACM",
          "from": 10,
          "to": 7,
          "type": "right"
        },
        {
          "context": "你说你参加了ACM",
          "from": 4,
          "to": 7,
          "type": "right"
        },
        {
          "context": "是的",
          "from": 7,
          "to": 0,
          "type": "left"
        },
        {
          "context": "一个普通人的梦想罢了",
          "from": 7,
          "to": 13,
          "type": "left"
        },
        {
          "context": "获得过什么奖项嘛(☆▽☆)",
          "from": 13,
          "to": 14,
          "type": "right"
        },
        {
          "context": "......",
          "from": 14,
          "to": 12,
          "type": "left"
        },
        {
          "context": "可以和你认识一下嘛!!!",
          "from": 13,
          "to": 15,
          "type": "right"
        },
        {
          "context": "哈?居然有人想加我的嘛?博客应该必不可能有人看的吧",
          "from": 15,
          "to": -1,
          "type": "left"
        },
        {
          "context": "当然也可以去主页加我的,不过一定记得要备注啊!（害怕.jpg）",
          "from": 15,
          "to": -1,
          "type": "left"
        },
        {
          "context": "当然也欢迎留言和邮件,我会及时回复的。",
          "from": 15,
          "to": -1,
          "type": "left"
        },
        {
          "context": "一般吧, 也就那样",
          "from": 1,
          "to": 3,
          "type": "right"
        },
        {
          "context": "那好吧",
          "from": 3,
          "to": -1,
          "type": "left"
        },
        {
          "context": "记得回来找我哦!",
          "from": 3,
          "to": -1,
          "type": "left"
        }
      ],
      timer: '',
    }
  },
  methods: {
    click(data) {
      this.list.push(data);
      for (var i = 0; i < this.local.length; i++) {
        if (this.local[i].from === data.to) {
          this.wait.push(this.local[i]);
        }
      }
      this.btn = [];
      this.show = false;
      this.space = true;
    },
    add(id) {
      if (id === 0 || id === -1) return;

      for (var i = 0; i < this.local.length; i++) {
        if (this.local[i].from === id) {
          this.btn.push(this.local[i]);
        }
      }
    }
  },
  created() {
    for (var i = 0; i < this.local.length; i++) {
      if (this.local[i].from === 0) {
        this.local[i].from = -1;
        this.wait.push(this.local[i]);
      }
    }
  },
  mounted() {
    this.timer = setInterval(() => {
      if (this.wait.length) {
        if (this.space === true) {
          this.space = false;
        } else {
          this.list.push(this.wait[0]);
          if (this.wait[0].to === -1) this.stop = true;
          this.add(this.wait[0].to);
          this.wait.splice(0, 1);
        }
      } else if (this.show === false && this.stop === false) {
        this.show = true;
      }
    }, 2000);
  }
}
</script>

<style scoped>
* {
  box-sizing: border-box;
}

.container-about {
  align-items: center;
  justify-items: center;
  border-radius: 10px;
  min-height: 300px;
  background-color: rgba(242, 242, 242, 0.5);
}

.container-about-inner {
  padding: 10px 20px;
}

.left, .right {
  display: inline-block;
  width: auto;
}

.left {
  float: left;
  background-color: #ebebeb;
}

.right {
  float: right;
  background-color: #02e6e6;
}

.txt {
  color: #595a5a;
  border-radius: 15px;
  padding: 7px 13px;
}

@keyframes move {
  0% {
    opacity: 0;
  }

  100% {
    opacity: 1;
  }
}

.btn-enter-active {
  animation: move 1s linear;
}

.btn-leave-active {
  animation: move 500ms reverse;
}

.move-enter-active {
  animation: move 2s linear;
}

.move-leave-active {
  animation: move 2s reverse;
}

.message-about {
  min-height: 20px;
  margin: 20px 0;
}

div {
  display: block;
}

#app {
  width: 60vw;
  margin-left: 20vw;
}

.select-button {
  padding: 7px 15px;
  border-radius: 4px;
  font-family: "Open Sans", sans-serif;
  background: #e6f7ff;
  box-shadow: 2px 3px 4px 0 rgb(0 0 0 / 25%);
  margin: 10px 10px 10px 10px;
}
</style>