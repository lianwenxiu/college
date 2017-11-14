<template>
    <table class="table_choice_major">
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
            <tr v-for="(item, index) in $store.state.choice_major" :key="index">
                <td>{{item.province}}</td>
                <td>{{item.collegeName}}</td>
                <td>{{item.majorName}}</td>
                <td>{{item.remark.join(' , ')}}</td>
                <td>{{item.subjectRangeNames.join(' ')}}</td>
            </tr>
        </tbody>
    </table>
</template>
<script>
export default {
  
}
</script>
<style scoped>
.table_choice_major{
    width: 100%;
    border-collapse: collapse;
    background: #F4F4F4;
}
.table_choice_major td{
    width: 20%;
    height: 20px;
}
</style>
