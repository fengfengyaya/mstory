<template>
    <nav>
        <ul>
       <router-link to="/story" tag="li" activeClass="active">故事</router-link>
       <router-link to="/subject" tag="li" activeClass="active">主题</router-link>
        </ul>
    </nav>
</template>
<style lang="scss" scoped>
    .active{
        color: #f7644a;
    }
    ul{
        font-size: .4rem;
    }
    nav{
        position: fixed;
        left: 0;
        bottom: 0;
        width: 100%;
        height: .78rem;
        background: white;
        line-height: .78rem;
    }
    ul{
        display: flex;
        li{
            flex: 1;
            text-align: center;
        }
    }
</style>
