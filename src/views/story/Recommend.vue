<template>
  <div>
    <ul
      v-infinite-scroll="loadMore"
      infinite-scroll-immediate-check="false"
      infinite-scroll-disabled="isDisabled"
    >
      <li v-for="data in datalist" :key="data.id" @click="handleClick(data.id)">
        <div class="i">
          <div class="up">{{data.info_flow_title}}</div>
          <div class="center">
            <img :src="data.default_image" alt>
          </div>
          <div class="down">
            <div class="lef">{{data.user.name}}</div>
            <div class="rig">
              <p>
                {{data.view_count}}人阅读
                <span>&nbsp;·&nbsp;</span>
                {{data.praise_count}}人喜欢
              </p>
            </div>
          </div>
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
      datalist: [],
      isDisabled: false,
      current: 1,
      total: 0
    }
  },
  methods: {
    handleClick (id) {
      this.$router.push(`/detail/${id}`)
    },
    loadMore () {
      this.current++
      this.isDisabled = true
      console.log('到底了')
      if (this.datalist.length === this.total) {
        return
      }

      axios
        .get(
          `/api/recommend/storyList?per_page=10&page=${this.current}&user_id=48a192eac3b1f9d6798558fda3a29acc&session_id=48a192eac3b1f9d6798558fda3a29acc&action=1`
        )
        .then(res => {
          console.log(res.data)
          this.datalist = [...this.datalist, ...res.data.data.data]
          this.isDisabled = false
        })
    }
  },

  mounted () {
    axios
      .get(
        '/api/recommend/storyList?per_page=10&page=1&user_id=48a192eac3b1f9d6798558fda3a29acc&session_id=48a192eac3b1f9d6798558fda3a29acc&action=2'
      )
      .then(res => {
        console.log(res.data)
        this.datalist = res.data.data.data
        this.total = res.data.page_data.total
      })
  }
}
</script>
<style lang="scss" scoped>
ul {
  margin-top: 0.78rem;
}
li {
  width: 7.5rem;
  height: 6.2rem;
  .i {
    width: 6.9rem;
    height: 6.2rem;
    margin-left: 0.3rem;
    margin-right: 0.3rem;
  }
}
.up {
  width: 6.9rem;
  height: 0.56rem;
  font-size: 0.36rem;
  text-align: center;
}
.center {
  margin-top: 0.4rem;
  width: 6.9rem;
  height: 3.82rem;
  img {
    width: 6.9rem;
    height: 3.82rem;
  }
}
.down {
  margin-top: 0.4rem;
  width: 6.9rem;
  height: 0.4rem;
  .lef {
    width: 1.9rem;
    height: 0.4rem;
    font-size: 0.2rem;
    float: left;
  }
  .rig {
    float: right;
    width: 2.6rem;
    height: 0.4rem;
    font-size: 0.2rem;
    p {
      float: right;
    }
  }
}
</style>
