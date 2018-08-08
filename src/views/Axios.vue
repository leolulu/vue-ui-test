<template>
    <div>
        <mu-button fab color="teal" @click='getdatame'>
            <mu-icon value="add"></mu-icon>
        </mu-button>
        <mu-card style="width: 90%;  margin: 20px auto;">
            <mu-card-title title="获取到的数据"></mu-card-title>
            <mu-card-text>
                {{getdata}}
            </mu-card-text>
        </mu-card>
    </div>
</template>

<script>
import axios from 'axios'
export default {
  data() {
    return {
      getdata: "点击按钮获取数据"
    };
  },
  methods: {
    getdatame() {
      axios
        .get("http://rap2api.taobao.org/app/mock/data/189725")
        .then(res => (this.getdata = res))
        .catch(err => (this.getdata = err));
    }
  }
};
</script>

<style scoped>
</style>