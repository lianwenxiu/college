<template>
    <div class="choice-subjects">
        <div>
            <p class="tit">选考科目分析</p>
            <div class="tip">科目比例：要求所选考科目的专业总数/条件范围内专业总数。以专业为例：经济统计学专业历史所占比例为66.7%，意为选考历史，66.7%的经济统计学专业均可报考。</div>
            <table class="table_left">
                <thead>
                    <tr>
                        <th>选考科目</th> 
                        <th>高校数</th>
                        <th>专业（类）数</th>
                        <th>科目比例</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="(item, index) in $store.state.subjects_left" :key="index">
                        <td>{{item.subject}}</td>
                        <td>{{item.collegesCount}}</td>
                        <td>{{item.majorCount}}</td>
                        <td>{{item.rate}}</td>
                    </tr>
                </tbody>
            </table>
            <table class="table_right">
                <thead>
                    <tr>
                        <th>选考科目</th>
                        <th>高校数</th>
                        <th>专业（类）数</th>
                        <th>科目比例</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="(item, index) in $store.state.subjects_right" :key="index">
                        <td>{{item.subject}}</td> 
                        <td>{{item.collegesCount}}</td>
                        <td>{{item.majorCount}}</td>
                        <td>{{item.rate}}</td>
                    </tr>
                </tbody>
            </table>           
        </div>
    </div>
</template>
<script>
export default {   
   
};
</script>
<style>
/* 表格数据的样式开始 */
.tit {
  width: 100%;
  font-size: 14px;
  color: #000;
  cursor: pointer;
  border-bottom: 1px solid #ccc;
}
.tip {
  color: #ff0000;
  line-height: 40px;
  font-size: 13px;
}
.table_left,
.table_right {
  width: 50%;
  float: left;
  border-collapse: collapse;
}
.table_left th,.table_right th{
    height: 45px;
    line-height: 45px;
    font-size: 14px;
    color: #fff;
    font-weight: normal;
    background: #00a05c;
}
.table_left td,.table_right td{
    width: 150px;
    height: 45px;
    line-height: 45px;
    text-align: center;
    border: 1px solid #ccc;
}

</style>
