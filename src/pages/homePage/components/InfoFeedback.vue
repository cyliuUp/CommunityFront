<!--反馈模态框-->
<template>
  <el-dialog title="信息反馈"
             class="allModal"
             width="720px"
             :visible.sync="feedbackModel"
             :close-on-press-escape="false"
             :close-on-click-modal="false"
             :before-close="closeModal">
    <hr class="boundaryModal">
    <!--提示文本-->
    <div class="bodyModalhandle">
      <div class="tips">反馈模块</div>
      <el-select v-model="value" placeholder="请选择">
        <el-option
          v-for="item in options"
          :key="item.value"
          :label="item.label"
          :value="item.value">
        </el-option>
      </el-select>
      <div class="tipsContent">反馈内容 </div>
      <el-input type="textarea"
                v-model="content"
                placeholder="请输入内容"
                :autosize="{ minRows: 7, maxRows: 7}">
      </el-input>
    </div>
    <hr class="boundaryModal">
    <div slot="footer" class="dialog-footer">
      <el-button @click="closeModal">取 消</el-button>
      <el-button type="primary" @click="closeModal">确 认</el-button>
    </div>
  </el-dialog>
</template>

<script>
    export default {
        props: {
            feedbackModel: Boolean
        },
        data() {
            return {
                content: '',
                options: [{
                    value: '选项1',
                    label: '黄金糕'
                }, {
                    value: '选项2',
                    label: '双皮奶'
                }, {
                    value: '选项3',
                    label: '蚵仔煎'
                }, {
                    value: '选项4',
                    label: '龙须面'
                }, {
                    value: '选项5',
                    label: '北京烤鸭'
                }],
                value: ''
            }
        },
        methods: {
            closeModal() {
                this.$emit('closeModel')
            }
        },
        watch: {}
    }
</script>

<style scoped>
  button {
    outline: none;
    cursor: pointer;
  }

  /*模态框*/
  .allModal >>> .el-dialog {
    -webkit-border-radius: 8px;
    -moz-border-radius: 8px;
    border-radius: 8px;
  }

  /*头部*/
  .allModal >>> .el-dialog__header {
    padding: 15px 17px;
  }

  .allModal >>> .el-dialog__headerbtn {
    top: 17px;
    font-size: 22px;
    outline: none;
  }

  .allModal >>> .el-dialog__title {
    font-size: 22px;
    color: #77A2FB;
  }

  /*分界线*/
  .boundaryModal {
    margin: 0 13px;
    width: 95%;
  }

  .bodyModalhandle {
    margin: 20px 66px 30px;
    width: 82%;
    text-align: center;
  }

  .allModal >>> .el-dialog__body {
    padding: 0;
  }

  .tips {
    width: 100px;
    color: #101010;
    font-size: 24px;
  }

  .allModal >>> .el-select {
    margin-top: 10px;
    width: 100%;
  }

  .tipsContent{
    margin-top: 20px;
    width: 100px;
    color: #101010;
    font-size: 24px;
  }

  .el-textarea {
    margin-top: 10px;
  }

  .allModal >>> .el-dialog__footer {
    padding: 15px 20px;
  }

  .allModal >>> .el-button--primary {
    position: relative;
    top: 0;
    right: 0;
  }
</style>
