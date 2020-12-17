var vm = new Vue({
  el: '#app',
  data:{
    target: 15,
    text: 'You need $15 more to reach your target.',
    currentTime: 0,
    timer: null,
  },
  mounted() {
    this.startTimer()
  },
  destroyed() {
    this.stopTimer()
  },
  methods:{
    startTimer() {
      this.timer = setInterval(() => {
        this.currentTime++
      }, 1000)
    },
    stopTimer() {
      clearTimeout(this.timer)
    },
  },
  watch:{
    currentTime(time) {
      if (time === 15) {
        this.stopTimer()
        this.text = 'Target reached!'
      }
      else{
        this.text = `You need $${this.target - this.currentTime} more to reach your target.`
      }
    }
  },
})
