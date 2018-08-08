<template>
  <div class="container">
    <mu-container style="width:90%;">
      <mu-bottom-nav >
        <mu-bottom-nav-item  title="图标" icon="ondemand_video" to="/muse-ui/page1" tag='span'></mu-bottom-nav-item>
        <mu-bottom-nav-item  title="表单" icon="music_note" to="/muse-ui/page2" tag='span'></mu-bottom-nav-item>
      </mu-bottom-nav>
    </mu-container>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
data() {
  return {
    shift: '图标'
  }
},
};
</script>

<style scoped>
.container {
  /* border: 1px dotted green; */
  padding-bottom: 20px;
  font-family: "Avenir", Helvetica, Arial, sans-serif;
}
</style>