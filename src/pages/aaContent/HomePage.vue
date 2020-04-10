<!--文章/活动内容页-->
<template>
  <div>
    <home-header></home-header>
    <div class="header">
      <router-link :to="{path: '/AList', query: {type:$route.query.type}}" class="back">返回</router-link>
      <div class="pageTitle"> {{$route.query.type}}详情</div>
    </div>
    <div style="margin: 40px 0;min-height: 800px;">
      <!--      字数限制60字-->
      <div class="title">{{list.title}}</div>
      <div class="info">{{list.author}}--{{list.time}}</div>
      <div class="content">{{list.content}}</div>
    </div>
    <bottom-bar></bottom-bar>
  </div>
</template>

<script>
    import homeHeader from '../public/Header'
    import bottomBar from '../public/BottomBar'

    export default {
        name: "homePage",
        components: {
            homeHeader,
            bottomBar
        },
        data() {
            return {
                list: {
                    id: 1,
                    headUrl: "/static/img/listImg.jpg",
                    title: '标题一',
                    time: '2019-03-17',
                    author: '123',
                    content: '标题一标题一标题一标题一标题一标题一'
                },
            }
        },
        mounted() {
            if (this.$route.query.type === '活动') {
                // 根据this.$route.query.id调用活动详情接口
                console.log("活动详情")
            } else if (this.$route.query.type === '文章') {
                // 根据this.$route.query.id调用服务详情接口
                console.log("文章详情")
            }
        }
    }
</script>


<style scoped>
  .header {
    margin-top: 15px;
    position: relative;
    width: 100%;
    line-height: 70px;
    /*background-color: #FF9900;*/
    background-color: rgb(211, 140, 35);
    color: #fff;
    font-size: 30px;
    letter-spacing: 8px;
  }

  .back {
    position: absolute;
    left: 20px;
  }

  .pageTitle {
    width: 100%;
    font-weight: 800;
    text-align: center;
  }

  .title {
    margin: 0 auto;
    text-align: center;
    width: 840px;
    font-size: 24px;
    font-weight: 700;
    letter-spacing: 2px;
  }

  .info {
    float: right;
    margin: 20px 130px;
    /*margin-right: 100px;*/
    font-size: 20px;
    color: #8c939d;
  }

  .content {
    margin: 70px auto 0;
    width: 88%;
    font-size: 22px;
  }
</style>
