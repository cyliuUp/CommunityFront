<!--首页-->
<template>
  <div>
    <service-list style="padding: 0 25px;" @showModel="showModel"></service-list>
    <div style="height: 760px">
      <article-r-e-c style="padding-left:25px;"></article-r-e-c>
      <active-list style="padding-right: 25px"></active-list>
    </div>
    <bottom-bar ></bottom-bar>
    <info-feedback :feedbackModel="feedbackModel" @closeModel="closeModel"></info-feedback>
  </div>
</template>

<script>
    import serviceList from "./components/ServiceList"
    import articleREC from "./components/ArticleREC";
    import activeList from "./components/ActiveList";
    import bottomBar from "../public/BottomBar"
    import infoFeedback from "./components/InfoFeedback"

    export default {
        name: "homePage",
        components: {
            serviceList,
            articleREC,
            activeList,
            bottomBar,
            infoFeedback
        },
        data() {
            return {
                feedbackModel:false
            }
        },
        methods:{
            showModel(val){
                this.feedbackModel = val
            },

            closeModel(){
                this.feedbackModel = false
            }
        }
    }
</script>

<style scoped>

</style>
