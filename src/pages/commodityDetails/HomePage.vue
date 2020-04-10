<!--商品详情页面-->
<template>
  <div>
    <home-header></home-header>
    <div class="header">
      <el-breadcrumb separator="/">
        <el-breadcrumb-item :to="{name:'HomePage',params:{type:'4'}}">跳蚤市场</el-breadcrumb-item>
        <el-breadcrumb-item>商品详情</el-breadcrumb-item>
      </el-breadcrumb>
    </div>
    <div class="left">
      <div style="margin: 30px 30px 0">
        <img :src="commodity.commodityMap" class="commodityPhoto"/>
        <div class="intro">
          <div class="title">{{commodity.title}}</div>
          <div class="price">售价：<span style="color:red">￥{{commodity.price}}</span></div>
          <div class="price" style="padding-bottom:10px;border-bottom: 1px solid #8c939d">售价：九成新</div>
          <img :src="commodity.commodityMap" class="headPortrait"/>
          <div class="userName">卖家名</div>
          <div class="qqNum">QQ：603602179</div>
          <div class="telNum">Tel：12345678911</div>
        </div>
        <div class="clear"></div>
      </div>
      <div style="margin: 15px 30px 50px;">
        <div class="commodityTitle">商品详情</div>
        <div style="padding:30px 30px 0;text-align: center;border:  1px solid #8c939d;">
          <img :src="commodity.commodityMap" class="detailsPhoto"/>
          <img :src="commodity.commodityMap" class="detailsPhoto"/>
          <div style="font-size: 20px;padding:20px;width: 100%;word-wrap:break-word">
            dsdsdeeeeeeeeeeerreeeeeeeeeeeeeedsdsdsdsfddddddddddddddddddddddddddd
          </div>
          <div class="clear"></div>
        </div>
      </div>
    </div>
    <side-information></side-information>
    <div class="clear"></div>
    <bottom-bar></bottom-bar>
  </div>
</template>

<script>
    import homeHeader from '../public/Header'
    import sideInformation from "../fleaMarket/components/SideInformation"
    import bottomBar from '../public/BottomBar'

    export default {
        name: "homePage",
        components: {
            homeHeader,
            sideInformation,
            bottomBar
        },
        data() {
            return {
                commodity: {
                    id: 1,
                    commodityMap: "/static/img/listImg.jpg",
                    title: "我是文章一的标题",
                    content: "男は暴力的な生命力に満ち溢れていた、無残「呼吸を使う剣士にはもう興味がない」そういうや否や男は腕を振るった男は暴力的な生命力に満ち溢れていた、無残「呼吸を使う剣士にはもう興味がない」そういうや否や男は腕を振るった男は暴力的な生命力に満ち溢れていた、無残「呼吸を使う剣士にはもう興味がない」そういうや否や男は腕を振るった男は",
                    price: '1314.00'
                },
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
    margin-top: 30px;
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

  .left {
    float: left;
    width: 68%;
  }

  .commodityPhoto {
    float: left;
    width: 59%;
    height: 250px;
    object-fit: cover;
    border: 1px solid #8c939d;
  }

  .intro {
    float: right;
    width: 39%;
    height: 250px;
    border: 1px solid #8c939d;
  }

  .title {
    margin: 5px 8px 10px;
    height: 72px;
    font-size: 18px;
    font-weight: 800;
    display: -webkit-box;
    overflow: hidden;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 3; /*控制可显示几行文本*/
  }

  .price {
    margin: 5px 8px 10px;
    font-size: 18px;
    font-weight: 800;
  }

  .headPortrait {
    float: left;
    margin: 5px 10px;
    /*align-items: center;*/
    width: 25%;
    border: 1px solid #bbb;
    border-radius: 50%;
  }

  .userName {
    margin: 10px 0 2px;
    height: 29px;
    font-size: 22px;
    display: -webkit-box;
    overflow: hidden;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 1; /*控制可显示几行文本*/
  }

  .qqNum {
    font-size: 16px;
    margin-bottom: 1px;
  }

  .telNum {
    font-size: 16px;
  }

  .commodityTitle {
    padding: 15px 20px;
    border: 1px solid #8c939d;
    border-bottom: 0;
    font-size: 22px
  }

  .detailsPhoto{
    width: 100%;
    margin-bottom: 20px;
  }

  .clear {
    clear: both
  }
</style>
