<!--导航栏页面切换-->
<template>
  <div>
    <home-header @changePage="changePage" :pageKey="pageKey"></home-header>
    <web-home v-if="showHome"></web-home>
    <active-calendar v-if="showCalendar"></active-calendar>
    <community-space v-if="showSpace"></community-space>
    <flea-market v-if="showMarket"></flea-market>
  </div>
</template>

<script>
    import homeHeader from "./public/HomeHeader";
    import webHome from "./homePage/HomePage";
    import activeCalendar from "./activeCalendar/HomePage"
    import communitySpace from "./communitySpace/HomePage"
    import fleaMarket from "./fleaMarket/HomePage"

    export default {
        name: "homePage",
        components: {
            homeHeader,
            webHome,
            activeCalendar,
            communitySpace,
            fleaMarket
        },
        data() {
            return {
                pageKey: "",
                showHome: false,
                showCalendar: false,
                showSpace:false,
                showMarket:false
            }
        },
        methods: {
            changePage(key) {
                this.pageKey = key
                this.showHome = false
                this.showCalendar = false
                this.showSpace = false
                this.showMarket = false
            }
        },
        watch: {
            pageKey(newVal) {
                if (newVal === "1") {
                    console.log("首页")
                    this.showHome = true
                } else if (newVal === "2") {
                    console.log("活动日历")
                    this.showCalendar = true
                } else if (newVal === "3") {
                    console.log("社区空间")
                    this.showSpace = true
                } else if (newVal === "4") {
                    console.log("跳蚤市场")
                    this.showMarket = true
                } else if (newVal === "5") {
                    console.log("个人中心")
                }
            }
        },
        mounted() {
            if (this.$route.params.type){
                this.pageKey = this.$route.params.type
            }else {
                this.pageKey = "1"
            }
        }
    }
</script>

<style scoped>

</style>
