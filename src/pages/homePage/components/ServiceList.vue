<!--服务列表组件-->
<template>
  <div>
    <div class="title">服务列表</div>
    <ul class="serviceList">
      <li class="service" v-for="item of serviceList" :key="item.id">
        <img class="serviceImg" :src="item.url" @click="jumpPage(item.id)"/>
        <p class="serviceName" @click="jumpPage(item.id)">{{item.name}}</p>
      </li>
    </ul>
  </div>
</template>

<script>

    export default {
        name: "serviceList",
        components: {},
        data() {
            return {
                serviceList: [
                    {id: 1, url: "/static/img/listImg.jpg", name: "信工小屋"},
                    {id: 2, url: "/static/img/listImg.jpg", name: "消息通"},
                    {id: 3, url: "/static/img/listImg.jpg", name: "干货分享"},
                    {id: 4, url: "/static/img/listImg.jpg", name: "弹幕吐槽"},
                    {id: 5, url: "/static/img/listImg.jpg", name: "举报/反馈"}
                ],
                feedbackModel: false
            }
        },
        methods: {
            jumpPage(id) {
                console.log(id)
                if (id === 5) {
                    this.$emit('showModel', true)
                }
            }
        }
    }
</script>

<style scoped>
  .serviceList {
    display: flex;
    margin: 0 40px;
  }

  .title {
    margin-top: 45px;
    font-size: 23px;
    font-weight: 800;
  }

  .service {
    display: inline-block;
    margin-top: 50px;
    width: 23%;
    height: 100px;
    list-style: none;
    text-align: center;
  }

  .serviceImg {
    width: 55%;
    border: 1px solid #bbb;
    border-radius: 50%;
  }

  .serviceName {
    margin-top: 10px;
    font-size: 18px;
    font-weight: 700;
    letter-spacing: 2px;
  }
</style>
