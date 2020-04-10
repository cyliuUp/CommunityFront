<!--底边栏-->
<template>
  <div class="bottom">
    <div class="left">
      A信工校园社区平台是一个为学生服务的校园社区平台，在这里你可以分享自己的知识，和同学们一起徜徉在知识的海洋。还可以将你的闲置发布出来，变废为宝。
    </div>
    <div class="right">
      <h3>Contact Us</h3>&nbsp;
      <ul>
        <li>Email：438956336@qq.com</li>
        <li>QQ：438956336</li>
        <li>Phone：17775463430</li>
      </ul>
    </div>
  </div>
</template>

<script>
    export default {
        name: "bottomBar"
    }
</script>

<style scoped>
  .bottom {
    /*margin-top: 750px;*/
    width: 90%;
    height: 260px;
    padding-left: 10%;
    /*background-color: #FF9900;*/
    /*background-color: rgb(175,120,74);*/
    background-color: rgb(211, 140, 35);
    color: #ffffff;
  }

  .left {
    margin-top: 100px;
    position: relative;
    float: left;
    width: 40%;
    /*允许长单词换到下一行*/
    word-wrap: break-word;
  }

  .left p {

    left: 120px;
    right: 120px;
    top: 0;
    bottom: 0;
    position: absolute;
  }

  .right {
    margin-top: 80px;
    float: right;
    width: 55%;
  }
  li{
    margin-top: 5px;
  }
</style>
