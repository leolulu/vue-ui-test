<template>
    <div>
        <mu-alert color="success">
            <mu-icon left value="warning"></mu-icon> {{form.date}}
        </mu-alert>
        <mu-container>
            <mu-flex align-items="center" style="padding-bottom: 8px;">
                <span style="margin-right: 16px;">Label Position:</span>
                <mu-radio v-model="labelPosition" style="margin-right: 16px;" value="top" label="Top"></mu-radio>
                <mu-radio v-model="labelPosition" style="margin-right: 16px;" value="left" label="Left"></mu-radio>
                <mu-radio v-model="labelPosition" style="margin-right: 16px;" value="right" label="Right"></mu-radio>
            </mu-flex>
            <mu-form :model="form" class="mu-demo-form" :label-position="labelPosition" label-width="100">

                <mu-form-item prop="select" label="Select">
                    <mu-select v-model="form.select">
                        <mu-option v-for="(option,index) in selections" :key="index" :label="option" :value="index"></mu-option>
                    </mu-select>
                </mu-form-item>

                <mu-form-item prop="date" label="Date Time">
                    <mu-date-input v-model="form.date" type="date"></mu-date-input>
                </mu-form-item>

            </mu-form>
        </mu-container>
    </div>
</template>

<script>
export default {
  data() {
    return {
      selections: ["青羊", "武侯", "高新"],
      labelPosition: "top",
      form: {
        select: "",
        date:''
      }
    };
  }
};
</script>

<style scoped>
.mu-demo-form {
  width: 100%;
  max-width: 460px;
}
</style>