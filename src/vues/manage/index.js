import FooterNav from '../../components/footer.vue'
import { getCookie, delCookie } from '../../assets/js/cookie'
import userSer from '@/services/user'
import SpanCom from '@/components/span.vue'

export default {
  data(){
    return {
      isManagePage: true,
      peoples: [
        {name: 'Jack'}, {name: 'Joe'}
      ],
      showAdd: false,
      nameValue: '',
      showEdit: false,
      newName: '',
      editId: 0,
      errorMsg: '服务异常，请联系管理员',
      show: false,
      title: 'This is title (optional)',
      content: 'This is content',
      myPro　: '这事父组件信息',
      myLan: "实施付租金啊mylan",
      todo:{
        myPro　: '这事父组件信息',
        myLan: "实施付租金啊mylan"
      },
      myNum:12
    }
  },
  created(){
    this.list()
  },
  mounted(){
    if (!getCookie('username')) {
      this.$router.push('/login')
    }
  },
  components: {
    FooterNav,
    SpanCom
  },
  methods: {
    add(){
      this.showAdd = true
    },
    addName(){
      if (this.nameValue.trim() == '') {
        alert('请输入姓名')
      } else {
        var people = {}
        people.name = this.nameValue
        this.peoples.push(people)
      }
    },
    delPeople(id) {
      userSer.deleteById({id:id,params: {accessToken: 2}}).then((res) => {
        if (res.code == 0) {
          alert('删除成功')
          this.list()
        }
      }).catch(function (res) {
        alert(this.errorMsg)
        console.log(res)
      })
    },
    edit(id){
      this.showEdit = true
      let config = {params: {accessToken: 2}, id: id}
      userSer.getById(config).then((res) => {
        this.newName = res.user.name
        this.editId = res.user.id
      })
    },
    cancel(){
      this.showEdit = false
    },
    editName(){
      let userData = {'id': this.editId, 'name': this.newName}
      let cfg = {id: this.editId, params: {accessToken: 2}, data: userData}
      if (this.newName.trim() == '') {
        alert('请输入姓名')
      } else {
        userSer.editName(cfg).then(
          (res) => {
            if (res.code == 0) {
              alert('修改成功')
              this.list()
            }
          }
        ).catch(function (res) {
          alert(this.errorMsg)
          console.log(res)
        })
        this.showEdit = false
      }

    },
    list(){
      let cfg = {url: '/user', params: {accessToken: 2}}
      userSer.listAll(cfg).then((res) => {
        this.peoples = res.users
      }).catch((res) => {
        console.log(res)
      })
    }
  }
}
