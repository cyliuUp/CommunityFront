<!--首页头部-->
<template>
  <div style="height: 60px;padding: 0 25px;">
    <div class="title"><img style="height: 60px" src="/static/img/logo.png"/></div>
    <el-menu
      class="navTabs"
      :default-active="activeIndex"
      mode="horizontal"
      @select="handleSelect">
      <el-menu-item v-for="tab in navTab"
                    :index="tab.id.toString()">{{tab.name}}
      </el-menu-item>
    </el-menu>
  </div>
</template>

<script>
    export default {
        name: "homeHeader",
        data() {
            return {
                activeIndex: '1',
                navTab: [{
                    id: 1, name: "首页"
                }, {
                    id: 2, name: "活动日历"
                }, {
                    id: 3, name: "社区空间"
                }, {
                    id: 4, name: "跳蚤市场"
                }, {
                    id: 5, name: "个人中心"
                }
                ]
            };
        },
        props: {
            pageKey: String
        },
        methods: {
            handleSelect(key, keyPath) {
                console.log(key, keyPath);
                this.$emit("changePage", key)
            }
        },
        watch: {
            pageKey(newVal) {
                this.activeIndex = newVal
            }
        }
    }
</script>

<style scoped>
  .title {
    float: left;
  }

  .navTabs {
    float: right;
    background: rgba(255, 255, 255, 0);
  }

  .navTabs >>> .el-menu-item {
    font-size: 18px;
  }

  .el-menu--horizontal > .el-menu-item:not(.is-disabled):focus,
  .el-menu--horizontal > .el-menu-item:not(.is-disabled):hover,
  .el-menu--horizontal > .el-submenu .el-submenu__title:hover {
    background: rgba(255, 255, 255, 0);
  }
</style>
