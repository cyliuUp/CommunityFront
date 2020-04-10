<!--社区空间页-->
<template>
  <div>
    <div style="margin: 35px 10px 25px 35px">
      <div class="left">
        <el-form ref="form">
          <el-form-item>
            <el-input type="textarea" v-model="textarea" :rows="6" placeholder="请输入内容"></el-input>
          </el-form-item>
          <el-form-item>
            <el-button class="submit" @click="">发表</el-button>
          </el-form-item>
        </el-form>
        <ul>
          <li class="community" v-for="(item,index) of articleList" :key="item.id">
            <img :src="item.headUrl" class="headPortrait"/>
            <div class="userName">{{item.author}}</div>
            <div class="time">{{item.addTime}}</div>
            <p class="content">{{item.content}}</p>
            <div style="line-height: 55px"><span class="like">♥</span><span class="likeNum">点赞数：50</span></div>
            <el-form>
              <el-form-item class="reply">
                <el-input placeholder="请输入内容" v-model="radioSelect['content'+index]">
                  <el-button slot="append" class="comment" type="primary" >发表</el-button>
                </el-input>
              </el-form-item>
            </el-form>
          </li>
        </ul>
      </div>
      <div class="right">
        <div style="font-size: 24px;font-weight: 800">推荐好书</div>
        <div  class="bookList">
          <img class="book" src="/static/img/listImg.jpg"/>
          <p>XX书</p>
        </div>
        <div class="bookList">
          <img class="book" src="/static/img/listImg.jpg"/>
          <p>XX书</p>
        </div>
        <div class="bookList">
          <img class="book" src="/static/img/listImg.jpg"/>
          <p>XX书</p>
        </div>
      </div>
      <div class="clear"></div>

    </div><bottom-bar></bottom-bar>
  </div>
</template>

<script>
    import bottomBar from '../public/BottomBar'

    export default {
        components: {
            bottomBar
        },
        data() {
            return {
                textarea: '',
                articleList: [
                    {
                        id: 1,
                        headUrl: "/static/img/listImg.jpg",
                        title: "我是文章一的标题",
                        author: "111",
                        addTime: "2019-12-13",
                        content: "男は暴力的な生命力に満ち溢れていた、無残「呼吸を使う剣士にはもう興味がない」そういうや否や男は腕を振るった男は暴力的な生命力に満ち溢れていた、無残「呼吸を使う剣士にはもう興味がない」そういうや否や男は腕を振るった男は暴力的な生命力に満ち溢れていた、無残「呼吸を使う剣士にはもう興味がない」そういうや否や男は腕を振るった男は暴力的な生命力に満ち溢れていた、無残「呼吸を使う剣士にはもう興味がない」そういうや否や男は腕を振るった"
                    },
                    {
                        id: 2, headUrl: "/static/img/listImg.jpg",
                        title: "我是文章二的标题",
                        author: "111",
                        addTime: "2019-12-13",
                        content: "熟练掌握 HTML、CSS、JavaScript 等前端基础技术\n" +
                            "熟练掌握至少一种 HTML 模板语言如 Jinja、Smarty、Velocity、Jade、Mustache 等\n" +
                            "熟练掌握 LESS、SASS、Stylus 等 CSS 预处理器技术，或 PostCSS 等 CSS 处理框架\n" +
                            "熟练掌握至少一种 Web 应用的前端开发框架，如 BackboneJS、ReactJS、VueJS 等\n" +
                            "熟练使用 Git、SVN 等项目代码管理工具\n" +
                            "中、大型的 Web 应用系统设计与开发经验\n" +
                            "有良好的编码习惯，对开发高品质的 Web 产品充满热情"
                    }
                ],
                radioSelect:{
                    content0: '',
                    content1: ''
                }
            }
        }
    }
</script>

<style scoped>
  .left {
    float: left;
    width: 65%;
  }

  .left >>> .el-form-item {
    margin-bottom: 10px;
    border-radius: 15px;
  }

  .left >>> .el-form-item__content {
    font-size: 18px;
  }

  .submit {
    float: right;
    width: 150px;
    font-size: 20px;
    color: white;
    background-color: #FF9900;
  }

  .community {
    list-style: none;
  }

  .headPortrait {
    float: left;
    margin-right: 5px;
    align-items: center;
    width: 10%;
    border: 1px solid #bbb;
    border-radius: 50%;
  }

  .userName {
    margin: 25px 0 2px 80px;
    width: 300px;
    line-height: 40px;
    align-items: center;
    font-size: 26px;
    font-weight: 800;
  }

  .time {
    margin: 0 0 5px 80px;
    font-size: 18px;
    color: #696969;
  }

  .content {
    margin: 22px 0 0;
    height: 200px;
    font-size: 20px;
    overflow: auto;
    border-bottom: 1px solid #8c939d;
  }

  .like {
    font-size: 40px;
  }

  .likeNum {
    float: right;
    font-size: 20px;
    color: #696969;
  }

  .reply {
    display: inline-block;
    /*float: left;*/
    /*  !*width: 100%;*!*/
    width: 100%;
  }

  .reply >>> .el-input__inner {
    height: 45px;
    border-radius: 8px 0 0 8px;
    border: 1px solid #fff;
  }

  .reply >>> .el-input-group__append{
    width: 20%;
    border: 0;
    border-left: 1px solid #DCDFE6;
    border-radius: 0 8px 8px 0;
    background-color: #409EFF;
    color: white;
    font-size: 16px;
    text-align: center;
  }

  .comment {
    width: 100%;
    letter-spacing: 6px;
  }

  .right {
    float: right;
    width: 30%;
    height: 500px;
    /*background-color: #5daf34;*/
  }

  .bookList{
    float: left;
    margin: 17px 11px 0;
    width: 43%;
    /*height: 230px;*/
    text-align: center;
  }

  .book {
    width: 100%;
    height: 180px;
  }

  .clear {
    clear: both
  }
</style>
