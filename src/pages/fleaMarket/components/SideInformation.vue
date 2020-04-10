<!--跳蚤市场侧边栏-->
<template>
  <div class="right">
    <div style="border-bottom:1px solid #bbb">
      <div class="activeName"><img src="/static/img/listImg.jpg" class="headPortrait"/>郝帅</div>
    </div>
    <div style="text-align: center">
      <div class="myData">我的闲置</div>
      <div class="myData">我卖出的</div>
      <div class="myData">我的订单</div>
    </div>
    <div style="text-align: center">
      <div class="myData1">8</div>
      <div class="myData1">8</div>
      <div class="myData1">5</div>
    </div>
    <p style="font-size:18px;font-weight: 800;letter-spacing: 2px">推荐商品</p>
    <div class="recommend" v-for="item of commodityList" :key="item.id">
      <img :src="item.commodityMap" class="recommendCommodity"/>
      <div style="padding: 2px 2px 15px">
        <div class="title">{{item.title}}</div>
        <div class="content">{{item.content}}</div>
        <div class="price">￥{{item.price}}</div>
      </div>
      <!--        <img class="book" src="/static/img/listImg.jpg"/>-->
      <!--        <p>XX书</p>-->
      <!--      </div>-->
      <!--      <div class="bookList">-->
      <!--        <img class="book" src="/static/img/listImg.jpg"/>-->
      <!--        <p>XX书</p>-->
      <!--      </div>-->
      <!--      <div class="bookList">-->
      <!--        <img class="book" src="/static/img/listImg.jpg"/>-->
      <!--        <p>XX书</p>-->
    </div>
  </div>
</template>

<script>
    export default {
        data() {
            return {
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
  .right {
    float: right;
    width: 30%;
    height: 500px;
  }

  .activeName {
    display: flex;
    margin: 35px 0 15px;
    width: 300px;
    line-height: 20px;
    align-items: center;
    font-size: 22px;
    font-weight: 800;
    letter-spacing: 4px;
  }

  .headPortrait {
    margin-right: 20px;
    align-items: center;
    width: 22%;
    border: 1px solid #bbb;
    border-radius: 50%;
  }

  .myData {
    display: inline-block;
    margin: 5px 15px;
    font-size: 17px;
  }

  .myData1 {
    display: inline-block;
    margin: 5px 43px 50px;
    font-size: 17px;
    font-weight: 700;
  }

  .recommend {
    float: left;
    margin: 20px 11px 0;
    width: 43%;
  }

  .recommendCommodity {
    width: 100%;
    height: 180px;
    object-fit: cover;
  }

  .title {
    font-size: 15px;
    font-weight: 800;
    display: -webkit-box;
    overflow: hidden;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 1; /*控制可显示几行文本*/
  }

  .content {
    margin: 3px 0 3px;
    height: 36px;
    font-size: 13px;
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
</style>
