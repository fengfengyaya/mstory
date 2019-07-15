<template>
    <div>
        story
        <router-view></router-view>
        <storynav></storynav>
    </div>
</template>
<script>
import storynav from '@/views/story/storynav.vue'
export default {
  components: {
    storynav
  }
}
</script>

<style lang="scss" scoped>
div{
    font-size: .4rem;
}
</style>
