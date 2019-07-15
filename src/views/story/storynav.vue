<template>
  <div class="bar">
    <ul>
      <router-link to="/story/recommend" tag="li" activeClass="active">
        <p>推荐</p>
      </router-link>
      <router-link to="/story/uptodate" tag="li" activeClass="active">
        <p>最新</p>
      </router-link>
    </ul>
  </div>
</template>
<style lang="scss" scoped>
.active {
    color: #f7644a;
    border-bottom: 0.06rem solid #f7644a;
}

ul {
  font-size: 0.3rem;
}
.bar {
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  height: 0.8rem;
  background: white;
  line-height: 0.8rem;
}
ul {
  display: flex;
  li {
    flex: 1;
    text-align: center;

  }
}
</style>
