<template>
  <div class="search-Keyword">
    <select>
      <option value="新楼盘">新楼盘</option>
      <option value="新楼盘">二手房</option>
      <option value="新楼盘">租房</option>
    </select>
    <input type="text" placeholder="输入MRT、小区名、地区名称" />
    <button>搜索</button>
  </div>
</template>
<style lang="less" scoped>
.search-Keyword {
  position: absolute;
  top: 87px;
  left: 10%;
  z-index: 9;
  width: 80%;
  height: 40px;
  background: #FFFFFF;
  box-shadow: 0px 3px 6px rgba(0, 0, 0, 0.16);
  border-radius: 5px;
  overflow: hidden;
  padding-top: 20px;
  select {
    position: absolute;
    left: 0;
    top: 50%;
    width: 80px;
    text-align: center;
    text-align-last: center;
    border: none;
    font-size: 13px;
    transform: translateY(-50%);
  }
  input {
    position: absolute;
    left: 80px;
    top: 0;
    padding: 0 10px;
    width: calc(100% - 74px - 80px);
    font-size: 12px;
    height: 40px;
  }
  button {
    position: absolute;
    right: 0;
    top: 0;
    width: 74px;
    height: 40px;
    color: #fff;
    font-size: 14px;
    background: #24A10F;
    transition: .3s;
    cursor: pointer;
    &:hover {
      background: #198407;
    }
  }
}
</style>