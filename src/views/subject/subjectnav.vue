<template>
    <div class="nav1">
        <ul>
       <router-link to="/subject/recommend1" tag="li" activeClass="active">推荐</router-link>
       <router-link to="/subject/uptodate1" tag="li" activeClass="active">最新</router-link>
       <router-link to="/subject/feeling" tag="li" activeClass="active">情感</router-link>
       <router-link to="/subject/career" tag="li" activeClass="active">职场</router-link>
       <router-link to="/subject/past" tag="li" activeClass="active">忆往事</router-link>
       <router-link to="/subject/native" tag="li" activeClass="active">异乡人</router-link>
        </ul>
    </div>
</template>
<style lang="scss" scoped>

    .active{
        color: #f7644a;
        border-bottom: .1rem solid #f7644a;
    }
    ul{
        font-size: .4rem;
    }
    .nav1{
        position: fixed;
        left: 0;
        top: 0;
        width: 100%;
        height: .8rem;
        background: white;
        line-height: .8rem;
    }
    ul{
        display: flex;
        li{
            flex: 1;
            text-align: center;
        }
    }
</style>
