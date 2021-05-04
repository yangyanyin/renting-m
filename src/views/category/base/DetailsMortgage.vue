<template>
  <div class="mortgage">
    <h3>
      <span v-if="isCount" @click="recalculation"></span>
      {{isCount ? '计算结果' : '房贷计算'}}
      <i @click="closeMortgage"></i>
    </h3>
    <div class="count" v-show="!isCount">
      <div class="input-box">
        <i>房产价格($)</i>
        <input class="inp" type="text" placeholder="输入价格" v-model="roomTotalPrice" />
      </div>
      <div class="input-box">
        <i>贷款比例</i>
        <select class="inp" v-model="loanScale">
          <option value="25">25%</option>
          <option value="30">30%</option>
          <option value="40">40%</option>
          <option value="50">50%</option>
          <option value="70">70%</option>
        </select>
      </div>
      <div class="input-box">
        <i>贷款总额($)</i>
        <input class="inp" placeholder="根据比例自行计算" type="text" v-model="countLoanPrice" disabled="disabled" />
      </div>
      <div class="input-box">
        <i>贷款年利率</i>
        <select class="inp" v-model="interestRate">
          <option value="2.5">2.5%</option>
          <option value="3">3%</option>
          <option value="4">4%</option>
        </select>
      </div>
      <div class="input-box">
        <i>偿还年限</i>
        <select class="inp" v-model="years">
          <option value="10">10</option>
          <option value="20">20</option>
          <option value="30">30</option>
        </select>
      </div>
      <button class="btn" @click="startCount">开始计算</button>
    </div>
    <div class="result" v-show="isCount">
      <ul>
        <li>首付合计<span>{{ countResult.down_payment }}</span></li>
        <li>贷款金额<span>{{ countResult.loan_price }}</span></li>
        <li>支付利息<span>{{ countResult.interest }}</span></li>
        <li>月均还款<span>{{ countResult.repayment }}</span></li>
      </ul>
      <p>本次计算仅作为购房参考，不能作为最终的购房依据。了解更准确的方案，建议<a>咨询置业顾问</a></p>
      <button class="btn" @click="recalculation(1)">重新计算</button>
    </div>
  </div>
</template>
<script>
export default {
  data () {
    return {
      roomTotalPrice: '',
      loanScale: '25',
      interestRate: '2.5',
      years: 10,
      countResult: {
        down_payment: '',
        loan_price: '',
        interest: '',
        repayment: ''
      },
      isCount: false
    }
  },
  computed: {
    countLoanPrice () {
      if (this.roomTotalPrice > 0) {
        return (this.roomTotalPrice * 1) * (this.loanScale / 100).toFixed(2)
      }
      return ''
    },
    //月供
    monthlyPayment () {
      const interestRate = this.interestRate / 100  // 利率
      const month = this.years * 12 // 月数
      return this.countLoanPrice * (interestRate / 12) / (1 - Math.pow(1 + interestRate / 12, -month))
    }
  },
  methods: {
    startCount () {
      this.isCount =
      this.countResult = {
        down_payment: `$${(this.roomTotalPrice * 1 - this.countLoanPrice).toFixed(2)}`,
        loan_price: `$${this.countLoanPrice.toFixed(2)}`,
        interest: `$${(this.monthlyPayment * this.years * 12 - this.countLoanPrice).toFixed(2)}`,
        repayment: `$${this.monthlyPayment.toFixed(2)}`
      }
    },
    recalculation (type) {
      if (type === 1) {
        this.roomTotalPrice = ''
        this.loanScale = '25'
        this.interestRate = '2.5'
        this.years = 10
      }
      this.isCount = !this.isCount
    },
    closeMortgage () {
      this.$emit('closeMortgage')
    }
  },
  mounted () {}
}
</script>
<style lang="less" scoped>
.mortgage {
  position: fixed;
  z-index: 9999;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  background: #fff;
  h3 {
    display: block;
    position: relative;
    height: 50px;
    padding: 0 20px;
    line-height: 50px;
    border-bottom: 1px solid #F5F5F5;
    span {
      display: inline-block;
      position: relative;
      top: -1px;
      width: 10px;
      height: 10px;
      margin-right: 10px;
      border-left: 1px solid #24A10F;
      border-top: 1px solid #24A10F;
      transform: rotate(-45deg);
    }
    i {
      position: absolute;
      right: 15px;
      top: 13px;
      width: 20px;
      height: 20px;
      &:before {
        content: '';
        position: absolute;
        left: 10px;
        top: 0;
        height: 20px;
        width: 1px;
        background: #24A10F;
        transform: rotate(45deg);
      }
      &:after {
        content: '';
        position: absolute;
        left: 10px;
        top: 0;
        height: 20px;
        width: 1px;
        background: #24A10F;
        transform: rotate(-45deg);
      }
    }
  }
}
.count {
  padding: 15px;
  .input-box {
    position: relative;
    height: 42px;
    margin-bottom: 15px;
    padding-left: 100px;
    line-height: 40px;
    border: 1px solid #C9C9C9;
    border-radius: 5px;
    i {
      position: absolute;
      width: 100px;
      left: 0;
      top: 0;
      padding: 0 15px;
      font-size: 12px;
    }
    .inp {
      display: block;
      width: 100%;
      height: 40px;
      padding: 0 15px;
      border:none;
      background-color: #FFFFFF;
      border-radius: 5px;
    }
  }
}
.result {
  margin: 15px;
  ul {
    padding: 20px 25px;
    background: #FFFFFF;
    border: 1px solid #C9C9C9;
    border-radius: 5px;
    li {
      margin-bottom: 26px;
      &:last-child {
        margin: 0;
      }
      span {
        float: right;
        color: #BF3F3F;
      }
    }
  }
  p {
    margin: 10px 30px;
    font-size: 12px;
    color: #7C7C7C;
    line-height: 24px;
    text-align: center;
    a {
      color: #24A10F;
      cursor: pointer;
    }
  }
}
button.btn {
  display: block;
  width: 100%;
  margin-top: 30px;
  line-height: 50px;
  background: #24A10F;
  border-radius: 5px;
  color: #fff;
}
</style>