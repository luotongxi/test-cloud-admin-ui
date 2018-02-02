import { setCookie, getCookie } from '../../assets/js/cookie'
import loginService from '@/services/loginService'

export default {
  /*页面挂载获取cookie，如果存在username的cookie，则跳转到主页，不需登录*/
  mounted(){
    if (getCookie('username')) {
      this.$router.push('/')
    } else {
      this.$router.push('/login')
    }

  },
  data(){
    return {
      showLogin: true,
      showRegister: false,
      username: '',
      password: '',
      showTishi: false,
      tishi: '',
      newUsername: '',
      newPassword: '',
      newName: '',
      errorMsg: '服务异常，请联系管理员'
    }
  },
  methods: {
    login(){
      if (this.username == '' && this.password == '') {
        alert('请输入用户名密码')
      } else {
        let cfg = {
          params: {accessToken: 2},
          data: {'username': this.username, 'password': this.password}
        }
        loginService.login(cfg).then((res) => {
            console.log(res)
            if (res == -1) {
              this.tishi = '用户名不存在'
              this.showTishi = true
            } else if (res == 0) {
              this.tishi = '密码错误'
              this.showTishi = true
            } else {
              this.tishi = '登陆成功'
              this.showTishi = true
              setCookie('username', this.username, 1000 * 60)
              setTimeout(function () {
                this.$router.push('/')
              }.bind(this, 1000))
            }

          }
        ).catch(function (res) {
          alert(this.errorMsg)
          console.log(res)
        })
      }
    },
    toRegister(){
      this.showLogin = false
      this.showRegister = true
    },
    toLogin(){
      this.showLogin = true
      this.showRegister = false
    },
    register(){
      if (this.newUsername == '') {
        alert('请输入用户名')
      } else if (this.newPassword == '') {
        alert('请输入密码')
      } else if (this.newName == '') {
        alert('请输入姓名')
      } else {
        let cfg = {
          params: {accessToken: 2},
          data: {'username': this.newUsername, 'password': this.newPassword, 'name': this.newName}
        }
        loginService.register(cfg).then((res) => {
          console.log(res)
          if (res.code != 0) {
            this.tishi = res.msg
            this.showTishi = true
          } else if (res.code == 0) {
            this.tishi = '注册成功'
            this.showTishi = true
            setTimeout(function () {
              this.showLogin = true
              this.showRegister = false
              this.showTishi = false
            }.bind(this), 1000)

          }
        }, (res) => {
          alert(this.errorMsg)
          console.log(res)
        })
      }
    }
  }
}
