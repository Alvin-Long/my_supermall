<template>
    <div id="tab-bar-item" @click="itemClick" >
      <div v-if='activeClick'>
         <slot name="tab-bar-icon"></slot>
      </div>
      <div v-else>
          <slot name="tab-bar-icon-active"></slot>
      </div>  
       <div :style="colorStyle">
          <slot name='tab-bar-text'>
          </slot>
       </div> 
    </div>
</template>

<script>
export default {
  name:'TabBarItem',
  props:{
    path:String,
    activeColor:{
      type:String,
      default:'red'
      }
  },
  data(){
    return {
      isActive:true
    }
 },
 computed:{
      activeClick(){
      return  this.$route.path.indexOf(this.path) !== -1;   //this的指向问题
      },
      colorStyle(){
      return this.activeClick?{color:this.activeColor}:{}  
      }
 },
  methods:{
     itemClick(){
       this.$router.replace(this.path)
      //  console.log(this.path)
     }
     
  }
}
</script>

<style scoped>
    #tab-bar-item {
        flex:1;
        height: 49px;
        background-color:rgb(151, 148, 148);
        text-align: center;
        font-size: 14px;
    }
    #tab-bar-item img{

        height: 24px;
        width: 24px;
        vertical-align: middle;
        margin-top: 3px;
        margin-bottom: 2px;

    }
    /* .active{
      color: hotpink;
    } */
</style>