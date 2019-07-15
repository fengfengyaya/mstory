<template>
  <div>
    <ul>
      <li v-for="data in datalist" :key="data.heat">
        <div class="left">
          <h5>{{data.title}}</h5>
          <div class="down">
            <p>{{data.interact_count}}人互动<span>&nbsp;·&nbsp;</span>{{data.story_count}}个故事</p>
          </div>
        </div>
        <div class="right">
          <img :src="data.images" alt=""/>
        </div>
      </li>
    </ul>
  </div>
</template>
<script>
import axios from 'axios'
export default {
  data () {
    return {
      datalist: []
    }
  },
  mounted () {
    axios
      .get(
        '/api/topic/list?order=desc&per_page=20&from_id=2&sortby=add_time&page=1'
      )
      .then(res => {
        console.log(res.data)
        this.datalist = res.data.data.topic_data
      })
  }
}
</script>
<style lang="scss" scoped>
ul{
    margin-top: .8rem;
    margin-bottom: .78rem;
}
.left{
  float: left;
  margin-left: .26rem;
  margin-right: .13rem;
  .down{

    p{
    margin-top: .32rem;
    float: left;
    font-size: .2rem;
    width: 4.34rem;
    height: .32rem;
    }

  }
}
.right{
  float:right;
  margin-left: .13rem;
  margin-right: .26rem;
  img{
    width: 2.36rem;
    height: 1.5rem;
    border-radius: .1rem;
  }

}
li {
  list-style: none;
  height: 2.3rem;
  width: 7.5rem;
}
h5 {
  float: left;
  width: 4.34rem;
  height: .96rem;
  font-size: .34rem;
  overflow: hidden;
  text-overflow: ellipsis;
  font-weight: normal;
}
</style>
