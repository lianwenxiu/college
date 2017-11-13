import Vue from 'vue';
import Vuex from 'vuex';
Vue.use(Vuex);

let storeObj = new Vuex.Store({   
    state: { // 相当于data数据
        school_range_obj: [],
        school_area_obj: [],
        subjects_left: [],
        subjects_right: [],
        college_title: [],
        college_name: []

    },
    mutations: {
        // 第一个参数是上面的state，第二个是接收到的数据
        updated_school_range: function(state, list){ 
            // 把接收到的数据赋值给它开始定义的属性
            state.school_range_obj = list;       
        },
        updated_school_area: function(state, list){           
            state.school_area_obj = list;
        },
        reset_school_range: function(state, item){           
            let arr = [...state.school_range_obj];            
            arr.map((value, index) => {
                if(item.index == index){
                    value.selected = item.selected;
                } else {
                    value.selected = false;
                }
                return value;
            })            
            var selected_none = true;
            arr.forEach((value, index) => {
                if(item.selected){
                    selected_none = false;
                }
            })
            if(selected_none){
                arr[0].selected = true;
            }
            state.school_range_obj = arr;
            // console.log(state.school_range_obj)
        },
        reset_school_area: function(state, item){
            let brr = [...state.school_area_obj];           
            if(item.index != 0){
                brr[item.index].selected = item.selected;
                brr[0].selected = false;
            } else {
                brr.forEach((val, index) => {
                    val.selected = (index == 0);
                })
                // val.selected = (index == 0);
            }          

            var selected_none = true;
            brr.forEach((value, index) => {
                // if (index == 0) return;
                if(item.selected){
                    selected_none = false;
                }
            })
            if(selected_none){
                brr[0].selected = true;
            }
            state.school_area_obj = brr;
        },
        clear_range: function(state){
            state.school_range_obj.forEach((item, index) => {
                item.selected = (index == 0);
            })
        },
        clear_area: function(state){
            state.school_area_obj.forEach((item, index) => {
                item.selected = (index == 0 );
            })
        },
        choice_subjects: function(state, params){ //选考科目
            // 把数据处理成两组
            state.subjects_left = params.analysisData.slice(0,21);
            state.subjects_right = params.analysisData.slice(21); 
            state.college_title = params.title;
            state.college_name = params.rows;
            // console.log( state.college_name)     
        },
        
    },
    getters: {
        selected_range: function(state){
            var str = '';
            state.school_range_obj.forEach((val, index) => {
                if(val.selected){
                    str += val.value;
                }                
            })  
            return str;
        },
        selected_area: function(state) {
            var arr = [];
            state.school_area_obj.forEach((val, index) => {
                if(val.selected){
                    arr.push(val.value);
                }                      
            }) 
            return arr.join(',');
        }
    }
})
export default storeObj;