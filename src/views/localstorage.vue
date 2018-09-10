<template>
    <div>
        <template>
            <mu-badge :content="num" circle color="secondary">
                <mu-button color="info" @click='setlocl'>Info</mu-button>
            </mu-badge>
            <br>
            <mu-text-field v-model.lazy="num"></mu-text-field>
        </template>
        <br>
        <template>
            <mu-badge :content="num2" circle color="green">
                <mu-button color="info" @click='seeddons'>Info</mu-button>
            </mu-badge>
            <br>
            <mu-text-field v-model.lazy="num2"></mu-text-field>
        </template>
    </div>
</template>

<script>
export default {
  data() {
    return {
      num: localStorage.getItem("thenum"),
      num2: sessionStorage.getItem("seenum")
    };
  },
  methods: {
    setlocl() {
      localStorage.setItem("thenum", this.num);
    },
    seeddons() {
      sessionStorage.setItem("seenum", this.num2);
    }
  }
};
</script>

<style scoped>
</style>