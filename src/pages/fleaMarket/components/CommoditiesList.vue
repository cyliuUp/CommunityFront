<!--商品列表-->
<template>
  <div class="left">
    <p style="font-size:20px;font-weight: 800;letter-spacing: 2px">商品类别</p>
    <div class="classification">
      <ul class="classification1">
        <li class="classification1Item" v-for="item of classGroup">{{item.catagoryName}}</li>
        <div class="clear"></div>
      </ul>
      <!--        <ul class="classification2">-->
      <!--          <li></li>-->
      <!--          <div class="clear"></div>-->
      <!--        </ul>-->
    </div>
    <ul class="commodities">
      <router-link to="/CommodityDetails">
        <li class="commodity" v-for="item of commodityList" :key="item.id">
          <img :src="item.commodityMap" class="commodityPhoto"/>
          <div style="padding: 8px 6px 10px 10px">
            <div class="title">{{item.title}}</div>
            <div class="content">{{item.content}}</div>
            <div class="price">￥{{item.price}}</div>
          </div>
        </li>
      </router-link>
      <div class="clear"></div>
    </ul>
  </div>
</template>

<script>
    export default {
        data() {
            return {
                classGroup: [{
                    "id": "1122",
                    "catagoryName": "手机",
                    "children": [{
                        "id": "11221",
                        "catagoryName": "vivo",
                        "children": null
                    }, {
                        "id": "11221",
                        "catagoryName": "huawei",
                        "children": null
                    }]
                }, {
                    "id": "1123",
                    "catagoryName": "电脑",
                    "children": [{
                        "id": "11222",
                        "catagoryName": "联想",
                        "children": null
                    }, {
                        "id": "11221",
                        "catagoryName": "戴尔",
                        "children": null
                    }]
                }, {"catagoryName": "手机",}, {"catagoryName": "手机",}, {"catagoryName": "手机",}, {"catagoryName": "手机",}, {"catagoryName": "手机",}, {"catagoryName": "手机",}, {"catagoryName": "手机",}, {"catagoryName": "手机",}, {"catagoryName": "手机",}, {"catagoryName": "手机",}],
                commodityList: [
                    {
                        id: 1,
                        commodityMap: "/static/img/listImg.jpg",
                        title: "我是文章一的标题",
                        content: "男は暴力的な生命力に満ち溢れていた、無残「呼吸を使う剣士にはもう興味がない」そういうや否や男は腕を振るった男は暴力的な生命力に満ち溢れていた、無残「呼吸を使う剣士にはもう興味がない」そういうや否や男は腕を振るった男は暴力的な生命力に満ち溢れていた、無残「呼吸を使う剣士にはもう興味がない」そういうや否や男は腕を振るった男は",
                        price: '1314.00'
                    },
                    {
                        id: 2, commodityMap: "/static/img/listImg.jpg",
                        title: "我是文章二的标题",
                        content: "熟练掌握 HTML、CSS、JavaScript 等前端基础技术\n",
                        price: '1314.00'
                    },
                    {
                        id: 3, commodityMap: "/static/img/listImg.jpg",
                        title: "我是文章二的标题",
                        content: "熟练掌握 HTML、CSS、JavaScript 等前端基础技术\n",
                        price: '1314.00'
                    },
                    {
                        id: 4, commodityMap: "/static/img/listImg.jpg",
                        title: "我是文章二的标题",
                        content: "熟练掌握 HTML、CSS、JavaScript 等前端基础技术\n",
                        price: '1314.00'
                    }
                ],
            }
        }
    }
</script>

<style scoped>
  .left {
    float: left;
    width: 60%;
  }

  .classification1 {
    margin: 15px 0;
    width: 100%;
    padding: 0 23px 15px 18px;
    background-color: #F2F2F2;
  }

  .classification1Item {
    float: left;
    margin: 15px 0 0 27px;
    list-style: none;
  }

  .commodities {
    margin: 45px 0 20px;
    width: 100%;
    padding: 0 20px 30px;
    background-color: #F2F2F2;
  }

  .commodity {
    float: left;
    margin: 30px 17px 0;
    width: 28%;
    border: 1px solid #bbb;
    list-style: none;
  }

  .commodityPhoto {
    width: 100%;
    height: 200px;
    object-fit: cover;
  }

  .title {
    font-size: 16px;
    font-weight: 800;
    display: -webkit-box;
    overflow: hidden;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 1; /*控制可显示几行文本*/
  }

  .content {
    margin: 5px 0 5px;
    height: 40px;
    font-size: 14px;
    display: -webkit-box;
    overflow: hidden;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 2; /*控制可显示几行文本*/
  }

  .price {
    font-size: 18px;
    color: #FF9900;
    font-weight: 800;
  }

  .clear {
    clear: both
  }
</style>
