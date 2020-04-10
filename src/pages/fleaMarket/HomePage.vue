<!--跳蚤市场页-->
<template>
  <div>
    <div style="margin: 35px 10px 25px 35px">
      <commodities-list></commodities-list>
      <side-information></side-information>
      <div class="clear"></div>
    </div>
    <bottom-bar></bottom-bar>
  </div>
</template>

<script>
  import commoditiesList from "./components/CommoditiesList"
  import sideInformation from "./components/SideInformation"
    import bottomBar from "../public/BottomBar"
    export default {
        components: {
            commoditiesList,
            sideInformation,
            bottomBar
        },
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
  .clear {
    clear: both
  }
</style>
