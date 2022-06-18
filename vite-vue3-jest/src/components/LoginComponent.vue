<template>
  <div class="form">
    <div class="form__item">
      <p class="label">请输入手机号码</p>
      <input type="text" name="phone" class="input phone" v-model="phone" />
      <p v-if="error1" class="error1">请输入正确的手机号码</p>
    </div>
    <div class="form__item">
      <p class="label">请输入验证码</p>
      <input type="text" name="capture" class="input capture" v-model="capture" />
      <button class="btn1" @click="getCapture">获取验证码</button>
      <p v-if="error2" class="error2">请输入正确的验证码</p>
    </div>
    <div class="form__item">
      <button class="btn2" @click="register">登录</button>
    </div>
  </div>
</template>

<script lang="ts">
import { reactive, toRefs } from 'vue';
// Compiler vue-next-template-explorer.netlify.app
const state = reactive({
  phone: '',
  capture: '',
  error1: false,
  error2: false,
});

function getCapture() {
  alert('发送验证码到' + state.phone);
}
export default {
  setup() {
    return { ...toRefs(state), getCapture };
  },
};
</script>

<style scoped>
.form__item {
  padding: 10px;
}
.label {
  padding-bottom: 10px;
  margin: 0px;
}
.input {
  padding: 4px;
  margin-right: 10px;
}
.error1,
.error2 {
  font-size: 12px;
  color: red;
}
</style>
