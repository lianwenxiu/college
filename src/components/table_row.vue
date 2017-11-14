<template>
    <tbody>                                     
        <tr class="parent_range_title">
            <td v-for="(item, index) in parent_range" :key="index"><label v-if="index==0" class="add" @click="showbox">{{symbol}}</label>{{item}}</td> 
        </tr>  
        <tr>
            <td colspan="9">
                <table class="child_range_table" v-if="is_show">
                     <thead>
                        <tr>
                            <td>高校地区</td>
                            <td>高校名称</td>
                            <td>专业（类）</td>
                            <td>类中所含专业</td>
                            <td>选考科目范围</td>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="(item, index) in child_range" :key="index">
                            <td>{{item.province}}</td>
                            <td>{{item.collegeName}}</td>
                            <td>{{item.majorName}}</td>
                            <td>{{item.remark.join(' , ')}}</td>
                            <td>{{item.subjectRangeNames.join(' ')}}</td>
                        </tr>
                    </tbody>
                </table>
            </td>
        </tr>                   
    </tbody>            
</template>
<script>
export default {
    props:['row'],
    data(){
        return {
            parent_range: [],
            child_range:[],
            is_show: false,
            symbol:'+'
        }
    },
    created: function(){
        var len = this.row.length;
        this.parent_range = this.row.slice(0, len-1)
        this.child_range = this.row[9];  
    },
    methods:{
        showbox: function(){
            if(this.is_show){
                this.symbol = '+';
            } else{
                this.symbol = '-';
            }
            this.is_show = !this.is_show;
            
        }
    }
}
</script>
<style scoped>
.child_range_table{
    width:100%;
    border-collapse: collapse;
    background: #F4F4F4;  
}
.child_range_table td{
    text-align: center;
    line-height: 40px;
    border:1px solid #ccc;
    font-weight: normal;
}
.parent_range_title{ 
  line-height: 40px;
  font-weight: normal;
  font-size: 14px;
  border:1px solid #ccc;
}
.parent_range_title td{
    text-align: center;
    border:1px solid #ccc;
}

.add {
  float: left;
  width: 15px;
  height: 15px;
  text-align: center;
  line-height: 15px;
  color: #fff;
  background: #00a05c;
  font-weight: bold;
  font-size: 15px;
  margin-top: 15px;
  margin-left: 5px;
  cursor: pointer;
}
.first-td{
    color:#00a05c;
}
</style>
