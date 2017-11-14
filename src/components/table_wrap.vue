<template>
     <!-- 高校名称 -->
    <table class="table_college_name">
        <thead>
            <tr>
                <th v-for="(item, index) in title" :key="index">{{item}}</th>
            </tr>                   
        </thead>  
        <slot>
            
        </slot>
    </table>
</template>
<script>
export default {
    props: {
        title: {
            required: true,
            type: Array
        }
    }
}
</script>
<style scoped>
.table_college_name {
  clear: both;
  width: 100%; 
  border-collapse: collapse;
}
.table_college_name th {
  color: #fff;
  background: #00a05c;
  padding: 10px 0;
  font-weight: normal;
  font-size: 14px;
}

</style>
