<template>
  <div class="flyball" :style='flyBallStyle'>
    <div class="inner-ball ignore" :style='innerStyle' ref="inner">

    </div>
  </div>
</template>

<script>
  export default{
    props:['flyBallStyle','innerStyle'],
    methods:{

    },
    mounted(){
      this.$refs.inner.addEventListener('transitionend',(event)=>{
          event.stopPropagation();
      })
    },
    data () {
      return {}
    }
  }
</script>

<style>

</style>
