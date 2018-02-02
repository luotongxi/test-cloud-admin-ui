<template>
  <div>
    <span>{{message}}--{{myPro}}---{{myLan}}--{{myNum}}---{{numChange}}--{{numPP}}</span>
    <p>{{numPP}}</p>
  </div>
</template>

<script>
  export default {
    data(){
      return {
        message: '这事一个span组件',
        numPP: this.myNum + 12
      }
    },
    props:{
      "myPro":{
        type:String,
        default:"默认props"
      },
      "myLan":{
        type : String,
        default: "java"
      },
      "myNum":{
        type:Number,
        default:0,
        required:true
      }
    },
    computed:{
      numChange:function () {
        return this.myNum + 1;
      }
    }
  }
</script>

