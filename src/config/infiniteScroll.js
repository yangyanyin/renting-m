import Vue from 'vue'
Vue.directive('pat-infinite-scroll', {
  inserted: function (el, binding) {
    let distancePx = el.getAttribute('pat-infinite-scroll-distance')
    window.addEventListener('scroll', function () {
      let scrollTops = document.documentElement.scrollTop || document.body.scrollTop
      let domeHeight = document.body.clientHeight - window.innerHeight
      let distance = domeHeight - scrollTops
      if (distance <= distancePx) {
        binding.value()
      }
    })
  }
})