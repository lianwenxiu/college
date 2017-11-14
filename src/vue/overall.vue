<template>
    <div>
        <div class="filter-box">
            <div class="selected-condition">
                <div class="left-area">
                    <span>已选条件：</span>
                </div>
                <div class="right-area"> <!--如果这一项是不限就不显示-->
                    <p class="selected-item" v-if="selected_range_item!='不限'">{{selected_range_item}}<em @click="closeRange">X</em>
                    </p>
                    <p class="selected-item" v-if="selected_area_item!='不限'">{{selected_area_item}}<em @click="closeArea">X</em>
                    </p>
                </div>
            </div>
            <div style="clear:both"></div>
            <div class="select-box">
                <div class="professional-level">
                    <div class="left-title">
                        <span>专业层次：</span>
                    </div>
                    <div class="right-area">
                        <span class="major-item">不限</span>
                        <span class="major-item">本科</span>
                        <span class="major-item">专科</span>
                    </div>
                </div>
                <!--传数据的时候直接传处理好的数组对象-->
                <university-level :school-range-list="$store.state.school_range_obj"></university-level>
                <university-area :school-area-list="$store.state.school_area_obj"></university-area>
            </div>
        </div> 
		<!-- 选考科目-->
        <choice-subjects></choice-subjects>  
		<!-- 高校名称 -->
		 <!-- <table class="table_college_name"> -->
			<table-wrap :title="table_title">
				<table-row v-for="(x, index) in table_row" :row="x" :key="index"></table-row>
			</table-wrap>  
		 <!-- </table>         -->
    </div>
</template>
<script>
import scholl_range from "../components/school_range.vue";
import scholl_area from "../components/school_area.vue";
import choice_subjects from "../components/subjects.vue";
import table_wrap from '../components/table_wrap.vue';
import table_row from '../components/table_row.vue';

export default {
  name: "overall",
  data:() => {
	 return {
		table_title:[],
		table_row: []
	 }	
  },
  computed: {
    selected_range_item: function() {
      return this.$store.getters.selected_range;
    },
    selected_area_item: function() {
      return this.$store.getters.selected_area;
    }
  },
  methods: {
    closeRange: function() {
      this.$store.commit("clear_range");
    },
    closeArea: function() {
      this.$store.commit("clear_area");
    }
  },
  // 数据(本地数据-请求数据-把数据交给vuex来管理)->视图->vuex容器
  created: function() {
    //    console.log(this.$store.state.school_range_obj)
    var vm = this;
    // 对数据进行处理，变为对象，并且加上我们想要的字段
    vm.$http.get("/src/data/data.json").then(function(res) {
      let range_data = res.data.school_range_list.map((value, index) => {
        return index == 0
          ? { value: value, selected: true }
          : { value: value, selected: false };
      });
      vm.$store.commit("updated_school_range", range_data);
    });
    vm.$http.get("/src/data/data.json").then(function(res) {
      let area_data = res.data.school_area_list.map((value, index) => {
        return index == 0
          ? { value: value, selected: true }
          : { value: value, selected: false };
      });
      vm.$store.commit("updated_school_area", area_data);
    });
    // 综合检索/选考科目
    vm.$http.get("/src/data/综合检索（学校方式聚合）.json").then(function(res) {
		// let len = res.data.result.rows.length;
		vm.$store.commit("choice_subjects", res.data.result);
		vm.table_title = res.data.result.title;
		vm.table_row = res.data.result.rows;

		console.log(vm.table_title);
		console.log(vm.table_row);
	});	
  },
  components: {
    "university-level": scholl_range,
    "university-area": scholl_area,
    "choice-subjects": choice_subjects,
    "table-wrap": table_wrap,
    "table-row": table_row
  }
};
</script>
<style>
* {
  margin: 0;
  padding: 0;
  list-style: none;
  box-sizing: border-box;
}
.box {
  width: 1000px;
  margin: 20px auto;
  padding: 10px;
  font-size: 15px;
}
.select-box {
  border: 1px solid #ccc;
}
.left-area {
  float: left;
}
.left-title,
.right-area {
  float: left;
  width: 100px;
}
.right-area {
  width: 1000px;
}
.right-area span:hover {
  background: #00a05c;
  color: #fff;
}

p {
  display: inline-block;
  padding: 10px 0;
  color: #000;
  margin: 5px;
}
span {
  display: inline-block;
  padding: 10px;
  color: #000;
  margin: 5px;
  cursor: pointer;
}
.selected {
  background: #00a05c;
  color: #fff;
}

.selected-item {
  border: 1px solid #ccc;
  display: inline-block;
  padding: 5px 10px;
  color: #000;
  margin: 5px;
  cursor: pointer;
}
/* 已选条件样式结束 */

</style>
