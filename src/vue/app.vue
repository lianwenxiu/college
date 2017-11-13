<template>
    <div class="route container">
        <p class="remind">
        *由于2020年拟在京招生普通高校专业（类）选考科目范围尚未公布，暂时调用2018年拟在浙招生普通高校专业（类）选考科目范围，该数据仅供参考，正式文件公布后会即时替换！
        </p>
        <ul class="navList">
            <router-link :to="{name:'overall'}" :tag="'li'">综合检索</router-link>
            <router-link :to="{name:'college'}" :tag="'li'">高校检索</router-link>
            <router-link :to="{name:'major'}" :tag="'li'">专业检索</router-link>
        </ul>
        <router-view class="content"></router-view>        
    </div>
</template>
<script>
export default {
  name: "app"
};
</script>
<style>
* {
  margin: 0;
  padding: 0;
  list-style: none;
}
.container {
  min-width: 960px;
  max-width: 96%;
  margin: 0 auto;
}
.navList {
  border-bottom: 1px solid #ccc;
}
.navList li {
  display: inline-block;
  padding: 8px 10px;
  color: #000;
  cursor: pointer;
  font-size: 14px;
}
.navList li.router-link-active {
  background: #00a05c;
  color: #fff;
}
.remind {
  color: #ff0000;
  font-size: 13px;
  line-height: 25px;
  padding: 10px 0;
}
</style>