<template>
    <div v-if="recommedinfo" class="i">
        <div class="title">
            <h2><span>来自主题:</span>{{recommedinfo.topic.title}}</h2>
        </div>
        <div class="nav">
            <div class="ti">
                {{recommedinfo.title}}
            </div>
            <div class="info">
                <span>{{recommedinfo.user.name}}</span>
                <span class="date"></span>
            </div>
            <h3>
                {{recommedinfo.default_image_text}}
            </h3>
            <div class="content" v-html="recommedinfo.content">
                {{recommedinfo.content}}
            </div>
            <div class="praise">
                <div class="wrap"></div>
                <div class="zhong">

                </div>
            </div>
            <div class="from">
                <p class="in"></p>
                <h2 class="tit">
                    {{recommedinfo.topic.title}}
                </h2>
                <ul>
                    <li></li>
                </ul>
            </div>
            <div class="comment">
                <h2>留言</h2>
                <div class="nickname"></div>
            </div>
        </div>

    </div>
</template>

<script>
import axios from 'axios'
export default {
  data () {
    return {
      recommedinfo: null
    }
  },
  mounted () {
    console.log(this.$route.params.id)

    axios.get(`/api/story/detail?story_id=${this.$route.params.id}&from_id=2`).then(res => {
      console.log(res.data)
      this.recommedinfo = res.data.data
    })
  }
}
</script>

<style lang="scss" scoped>
    .i{
        margin-bottom: .78rem;
    }
    .title{
        width: 6.4rem;
        height: .84rem;
        font-size: .2rem;
        span{
            color: gray;
        }
    }
    .ti{
        height: 1.46rem;
        width: 6.5rem;
        text-align: left;
        font-size: .5rem;
        color: #333;
        font-weight: 600;
    }
    .info{
        width: 6.5rem;
        height: .6rem;
        span{
            float: left;
            font-size: .2rem;
        }
        span.date{
            color: #ccc;
            font-size: .2rem;
        }
    }
    h3{
        width: 6.5rem;
        height: 2.28rem;
        font-size: .32rem;
        color: #333;
    }
    .content{
        width: 6.5rem;
        height: 20rem;
        color: #333;
        font-size: .34rem;
        overflow: hidden;
    }
    .praise{
        width: 7.5rem;
        height: 5.2rem;
        .zhong{
            width: 4.8rem;
            height: 3.2rem;
        }
        .wrap{
            width: 4.8rem;
            height: .4rem;

        }
    }
    .from{
        width: 6.5rem;
        height: 4.54rem;
        .tit{
            width: 3.86rem;
            height: 1rem;
            font-size: .38rem;
            font-weight: 700;
        }
    }
    .comment{
        width: 7.5rem;
        height: 100%;
        h2{
            font-size: .36rem;
            height: .48rem;
            width: 7rem;
            text-align: left;
            padding-left: .5rem;

        }
        .nickname{
            width: 5.7rem;
            height: .48rem;
        }
    }
</style>
