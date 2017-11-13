<template>
    <div class="university-level">
        <div class="left-title"><span>高校层次：</span></div>
        <div class="right-area">
            <filter-item v-for="(item, index) in schoolRangeList" :key="index" :index="index" :range-obj="item" :category="'高校层次'"> 
            </filter-item>
        </div>
        <div style="clear:both"></div>
    </div>
</template>
<script>
import filter_item from './filter_item.vue';
export default {
    props: {
        'schoolRangeList': {
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
