<!--文章/活动列表-->
<template>
  <div>
    <home-header></home-header>
    <div class="header">
      <el-breadcrumb separator-class="el-icon-arrow-right">
        <el-breadcrumb-item :to="{name:'HomePage',params:{type:'1'}}">首页</el-breadcrumb-item>
        <el-breadcrumb-item>{{$route.query.type}}列表</el-breadcrumb-item>
      </el-breadcrumb>
<!--      <router-link to="/" class="back">返回</router-link>-->
<!--      <div class="pageTitle"> {{$route.query.type}}列表</div>-->
    </div>
    <div>
      <ul style="margin:30px 0 70px;">
        <li class="list" v-for="item in list" :key="item.id">
          <img :src="item.headUrl" class="headPortrait"/>
          <!--          <div class="title" style="">{{item.title}}</div>-->
          <router-link :to="{path:'/AContent',query: {type:$route.query.type,id:item.id}}" class="title">{{item.title}}</router-link>
          <div style="float:right;color: #8c939d;margin-top: 8px">{{item.time}}</div>
        </li>
      </ul>
      <!--      分页-->
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
                list: [{id: 1, headUrl: "/static/img/listImg.jpg", title: '标题一', time: '2019-03-17'},
                    {id: 2, headUrl: "/static/img/listImg.jpg", title: '标题一', time: '2019-03-17'},
                    {id: 3, headUrl: "/static/img/listImg.jpg", title: '标题一', time: '2019-03-17'},
                    {id: 4, headUrl: "/static/img/listImg.jpg", title: '标题一', time: '2019-03-17'},
                    {id: 5, headUrl: "/static/img/listImg.jpg", title: '标题一', time: '2019-03-17'},
                    {id: 6, headUrl: "/static/img/listImg.jpg", title: '标题一', time: '2019-03-17'},
                    {id: 7, headUrl: "/static/img/listImg.jpg", title: '标题一', time: '2019-03-17'},
                    {id: 8, headUrl: "/static/img/listImg.jpg", title: '标题一', time: '2019-03-17'},
                    {id: 9, headUrl: "/static/img/listImg.jpg", title: '标题一', time: '2019-03-17'},
                    {id: 10, headUrl: "/static/img/listImg.jpg", title: '标题一', time: '2019-03-17'}]
            }
        },
        mounted() {
            if (this.$route.query.type === '活动') {
                // 调用活动列表接口
                console.log("活动列表")
            } else if (this.$route.query.type === '文章') {
                // 调用服务列表接口
                console.log("文章列表")
            }
        }
    }
</script>

<style scoped>
  .header {
    margin-top: 20px;
    position: relative;
    width: 100%;
    line-height: 70px;
    /*background-color: #FF9900;*/
    /*background-color: rgb(211, 140, 35);*/
    /*color: #fff;*/
    font-size: 30px;
    letter-spacing: 8px;
  }

  .header {
    margin-top: 20px;
    margin-left: 50px;
    position: relative;
    width: 100%;
  }

  .el-breadcrumb {
    font-size: 20px;
  }

  .header >>> .el-breadcrumb__inner.is-link {
    font-weight: 500;
    color: #000;
  }

  .header >>> .el-breadcrumb__inner {
    font-weight: 700;
    color: #FF9900;
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

  .list {
    margin: 5px auto 0;
    width: 85%;
    padding: 10px 15px;
    border-bottom: 1px solid #b8b8b8;
    list-style-type: none;
  }

  .headPortrait {
    margin-right: 15px;
    width: 3%;
    border-radius: 50%;
  }

  .title {
    max-width: 75%;
    display: inline-block;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    font-size: 24px;
    text-decoration: none;
  }
</style>
