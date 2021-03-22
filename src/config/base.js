export const ModalHelper = ((bodyCls) => {
  let scrollTop
  let isOpen = false
  return {
    afterOpen: function () {
      if (!isOpen) { // 防止多次连续调用出现错乱
        scrollTop = document.body.scrollTop || document.documentElement.scrollTop
        document.body.classList.add(bodyCls)
        document.body.style.top = -scrollTop + 'px'
        isOpen = true
      }
    },
    beforeClose: function () {
      isOpen = false
      document.body.classList.remove(bodyCls)
      document.body.style.top = null
      if (document.documentElement) {
        document.documentElement.scrollTop = scrollTop
      }
      if (document.body) {
        document.body.scrollTop = scrollTop
      }
    }
  }
})('no-scroll')