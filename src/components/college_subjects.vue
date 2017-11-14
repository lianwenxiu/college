<template>
    <div class="choice-subjects">
        <div class="table-data">
            <p class="tit">选考科目分析</p>
            <div class="tip">科目比例：要求所选考科目的专业总数/条件范围内专业总数。以专业为例：经济统计学专业历史所占比例为66.7%，意为选考历史，66.7%的经济统计学专业均可报考。</div>
            <table class="table_left">
                <thead class="thead">
                    <tr>
                        <th>选考科目</th> 
                        <th>高校数</th>
                        <th>专业（类）数</th>
                        <th>科目比例</th>
                    </tr>
                </thead>
                <tbody class="tbody">
                    <tr v-for="(item, index) in $store.state.subjects_left" :key="index">
                        <td>{{item.subject}}</td>
                        <td>{{item.collegesCount}}</td>
                        <td>{{item.majorCount}}</td>
                        <td>{{item.rate}}</td>
                    </tr>
                </tbody>
            </table>
            <table class="table_right">
                <thead class="thead">
                    <tr>
                        <th>选考科目</th>
                        <th>高校数</th>
                        <th>专业（类）数</th>
                        <th>科目比例</th>
                    </tr>
                </thead>
                <tbody class="tbody">
                    <tr v-for="(item, index) in $store.state.subjects_right" :key="index">
                        <td>{{item.subject}}</td> 
                        <td>{{item.collegesCount}}</td>
                        <td>{{item.majorCount}}</td>
                        <td>{{item.rate}}</td>
                    </tr>
                </tbody>
            </table>
            <!-- 高校名称 -->
            <table class="table_college_name">
                <thead class="thead">
                    <tr>
                        <th v-for="(item, index) in $store.state.college_title" :key="index">{{item}}</th>
                    </tr>
                   
                </thead>                
                <tbody> 
                                    
                    <tr class="tbody" v-for="(item, index) in $store.state.college_name" :key="index">
                        <td class="first-td"><label class="add" >+</label>{{item[0]}}</td> 
                        <td>{{item[1]}}</td>                        
                        <td>{{item[2]}}</td> 
                        <td>{{item[3]}}</td> 
                        <td>{{item[4]}}</td> 
                        <td>{{item[5]}}</td> 
                        <td>{{item[6]}}</td> 
                        <td>{{item[7]}}</td> 
                        <td>{{item[8]}}</td>                        
                    </tr>  
                     <tr>
                        <td colspan="9"><showbox></showbox></td>
                    </tr>                   
                </tbody>                 
            </table>
            
        </div>
    </div>
</template>
<script>
import choice_major from '../components/showbox.vue';
export default {   
    components: {       
        'showbox': choice_major       
    }
   
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

</style>
