<template>
    <span class="filter-item" @click="toggle" :class="{selected:rangeObj.selected}">{{rangeObj.value}}</span>
</template>
<script>
export default {
    name: "filter-item",
    props: ["index", "category", "rangeObj"],
    data: function () {
        return {
            flag: false
        }
    },   
    methods: {
        toggle: function () {           
            if(this.category == '高校层次') { 
                this.$store.commit('reset_school_range', {
                    index: this.index,
                    selected: !this.rangeObj.selected
                })
                return;
            } 
            if(this.category == '高校地区') {                
                this.$store.commit('reset_school_area', {
                    index: this.index,
                    selected: !this.rangeObj.selected
                })  
            }                     
        }
    }
};
</script>
<style>
.right-area span.selected {
  background: #00a05c;
  color: #fff;
}

</style>

