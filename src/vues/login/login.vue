<template>
  <div class="container">
    <div class="form-signin" v-show="showLogin">
      <h2 class="form-signin-heading">微服务后台管理系统</h2>
      <p v-show="showTishi">{{tishi}}</p>
      <input type="text"  class="form-control" placeholder="用户名" v-model="username">
      <input type="password"  class="form-control" placeholder="密码" v-model="password">
      <button class="btn btn-lg btn-primary btn-block" type="submit" v-on:click="login">登陆</button>
      <h5 v-on:click="toRegister">没有账号？马上注册</h5>
    </div>
    <div class="form-signin" v-show="showRegister">
      <h2 class="form-signin-heading">微服务后台管理系统</h2>
      <p v-show="showTishi">{{tishi}}</p>
      <input type="text"  class="form-control" placeholder="用户名" v-model="newUsername">
      <input type="text"  class="form-control" placeholder="请输入姓名" v-model="newName">
      <input type="password"  class="form-control" placeholder="密码" v-model="newPassword">
      <button class="btn btn-lg btn-primary btn-block" type="submit" v-on:click="register">注册</button>
      <h5 v-on:click="toLogin">已有账号？马上登录</h5>
    </div>
  </div>
</template>

<script>
  import loginCtl from './login';
  export default loginCtl;
</script>

<style>
  body {
    padding-top: 40px;
    padding-bottom: 40px;
    background-color: #eee;
  }

  .form-signin {
    max-width: 330px;
    padding: 15px;
    margin: 0 auto;
  }
  .form-signin .form-signin-heading,
  .form-signin .checkbox {
    margin-bottom: 10px;
  }
  .form-signin .checkbox {
    font-weight: normal;
  }
  .form-signin .form-control {
    position: relative;
    height: auto;
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    box-sizing: border-box;
    padding: 10px;
    font-size: 16px;
  }
  .form-signin .form-control:focus {
    z-index: 2;
  }
  .form-signin input[type="email"] {
    margin-bottom: -1px;
    border-bottom-right-radius: 0;
    border-bottom-left-radius: 0;
  }
  .form-signin input[type="password"] {
    margin-bottom: 10px;
    border-top-left-radius: 0;
    border-top-right-radius: 0;
  }
  p{color:red;}
</style>
