<!--活动列表组件-->
<template>
  <div class="activeList">
    <div class="title">活动列表</div>
    <ul>
      <li class="active" v-for="item of activeList" :key="item.id">
        <div class="activeName"><img :src="item.headUrl" class="headPortrait"/>{{item.title}}</div>
        <div class="news">
          <span>活动时间：</span>{{item.developTime}}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span>活动地点：</span>{{item.place}}
        </div>
        <p class="activeContent">{{item.content}}</p>
      </li>
    </ul>
    <!--    <p class="showMore"><router-link to="/AList">查看更多>>></router-link></p>-->
    <p class="showMore">
      <router-link style="text-decoration: none;" :to="{path: '/AList', query: {type:'活动'}}">查看更多>>></router-link>
    </p>
  </div>
</template>

<script>
    export default {
        name: "activeList",
        data() {
            return {
                activeList: [
                    {
                        id: 1,
                        headUrl: "/static/img/listImg.jpg",
                        title: "活动1111",
                        developTime: "2019-12-13",
                        place: "XXXX",
                        content: "男は暴力的な生命力に満ち溢れていた、無残「呼吸を使う剣士にはもう興味がない」そういうや否や男は腕を振るった"
                    },
                    {
                        id: 2, headUrl: "/static/img/listImg.jpg",
                        title: "我是文章二的标题",
                        developTime: "2019-12-13",
                        place: "YYYY",
                        content: "熟练掌握 HTML、CSS、JavaScript 等前端基础技术\n" +
                            "熟练掌握至少一种 HTML 模板语言如 Jinja、Smarty、Velocity、Jade、Mustache 等\n" +
                            "熟练掌握 LESS、SASS、Stylus 等 CSS 预处理器技术，或 PostCSS 等 CSS 处理框架\n" +
                            "熟练掌握至少一种 Web 应用的前端开发框架，如 BackboneJS、ReactJS、VueJS 等\n" +
                            "熟练使用 Git、SVN 等项目代码管理工具\n" +
                            "中、大型的 Web 应用系统设计与开发经验\n" +
                            "有良好的编码习惯，对开发高品质的 Web 产品充满热情"
                    }
                ]
            }
        },
    }
</script>

<style scoped>
  .activeList {
    float: right;
    width: 45%;
  }

  .title {
    margin-top: 120px;
    font-size: 23px;
    font-weight: 800;
  }

  .active {
    list-style: none;
  }

  .activeName {
    display: flex;
    margin: 25px 0 6px;
    width: 300px;
    line-height: 20px;
    align-items: center;
    font-size: 22px;
    color: #FF9900;
    font-weight: 800;
  }

  .headPortrait {
    margin-right: 5px;
    align-items: center;
    width: 10%;
    border: 1px solid #bbb;
    border-radius: 50%;
  }

  .news {
    margin-bottom: 5px;
    font-size: 16px;
    color: #696969;
  }

  .news span {
    color: #000;
  }

  .activeContent {
    height: 146px;
    font-size: 18px;
    display: -webkit-box;
    overflow: hidden;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 6; /*控制可显示几行文本*/
  }

  .showMore {
    float: right;
    margin-top: 35px;
    font-size: 18px;
  }
</style>
