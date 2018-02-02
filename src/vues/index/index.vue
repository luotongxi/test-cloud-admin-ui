<template>
  <div>
    <div>
      <h1>人员管理系统</h1>
      <h4>欢迎 {{name}}</h4>
      <a href="#" @click="quit">注销登录</a>
    </div>
    <footer-nav v-bind:class="{'isIndex':isNowPage}"></footer-nav>
  </div>
</template>

<script>
  import FooterNav from '../../components/footer.vue'
  import {getCookie,delCookie} from '../../assets/js/cookie'
  export default {
    mounted(){
      let uname = getCookie('username')
      this.name = uname
      if (uname == "") {
        this.$router.push("/login")
      }
    },
    components: {
      FooterNav
    },
    data(){
      return {
        isNowPage: true,
        name: ''
      }
    },
    methods:{
      quit(){
        /*删除cookie*/
        delCookie('username')
        if (!getCookie('username')) {
          this.$router.push("/login")
        }
      }
    }
  }
</script>
