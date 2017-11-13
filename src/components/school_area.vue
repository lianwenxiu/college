
<template>
    <div class="university-area">
        <div class="left-title"><span>高校地区：</span></div>
        <div class="right-area">
            <filter-item v-for="(item, index) in schoolAreaList" :key="index" :index="index" :range-obj="item" :category="'高校地区'"> 
            </filter-item>
        </div>
        <div style="clear:both"></div>    
    </div>
</template>
<script>
import filter_item from './filter_item.vue';
export default {
    props: {
        'schoolAreaList': {
            required: true,
            type: Array
        }
    },
    components: {
        "filter-item": filter_item
    }
}
</script>
<style>

</style>
