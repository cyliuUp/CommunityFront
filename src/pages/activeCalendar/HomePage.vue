<!--活动日历页-->
<template>
  <div>
    <el-calendar v-model="value" id="calendar">
      <!-- 这里使用的是 2.5 slot 语法，对于新项目请使用 2.6 slot 语法-->
      <template
        slot="dateCell"
        slot-scope="{date, data}">
        <!--自定义内容-->
        <div>
          <!--日期显示-->
          <div class="calendar-day">{{data.day.split('-').slice(2).join('-')}}</div>
          <div v-for="item in calendarData">
            <div v-if="item.year===data.day.split('-').slice(0)[0]">
              <!--月份判断是否存在活动-->
              <div v-if="item.months===data.day.split('-').slice(1)[0]">
                <!--日判断是否存在活动-->
                <div v-if="item.days===data.day.split('-').slice(2).join()">
                  <!-- 活动显示-->
                  <el-tooltip class="item" effect="dark" :content="item.things" placement="right">
                    <div class="is-selected">{{item.things}}</div>
                  </el-tooltip>
                </div>
                <div v-else></div>
              </div>
              <div v-else></div>
            </div>
            <div v-else></div>
          </div>
        </div>
      </template>
    </el-calendar>
    <bottom-bar></bottom-bar>
  </div>
</template>

<script>
  import bottomBar from '../public/BottomBar'
    export default {
        name: "calendar",
        components:{
            bottomBar
        },
        data() {
            return {
                calendarData: [
                    {year: '2020', months: '03', days: '15', things: '看电影'},
                    {year: '2020', months: '03', days: '15', things: '看电影'},
                    {year: '2020', months: '04', days: '02', things: '去公园野炊'},
                    {year: '2020', months: '03', days: '02', things: '看星星'},
                    {year: '2019', months: '11', days: '02', things: '看月亮'}
                ],
                value: new Date()
            }
        },
        mounted() {
            // console.log(['1', '2'].indexOf(['2020','02','19'].split('-').slice(1)[0]))
            console.log(['1', '2'].indexOf('2020-2-19'.split('-').slice(1)[0]))
            console.log('2020-2-19'.split('-'))
            console.log(["2020", "2", "19"].slice(1)[0])
            console.log("2" === ["2020", "2", "19"].slice(1)[0])
            console.log(["2020", "2", "19"].slice(2)[0])
        }
    }
</script>

<style>
  #calendar .prev{
    /*color: #fff;*/
  }

  #calendar {
    margin: 101px auto;
    width: 90%;
  }

  .el-calendar{
    border: #fff solid 1px;
    background-color:rgba(0,0,0,0);
  }

  .calendar-day {
    text-align: center;
    /*color: #202535;*/
    line-height: 30px;
    font-size: 12px;
  }

  .current .is-selected {
    color: #F8A535;
    font-size: 10px;
    margin-top: 5px;
  }

  /*.el-calendar-day .item{*/
  /*  color:#ffffff;*/
  /*}*/

  #calendar .el-button-group > .el-button:not(:first-child):not(:last-child):after {
    content: '当月';
  }

  .el-button--mini{
    background-color: rgba(0,0,0,0);
  }

  #calendar .el-calendar__header {
    margin: 0 auto;
    width: 90%;
  }

  #calendar .el-calendar__title {
font-size: 24px;
  }

  .item {
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
</style>
