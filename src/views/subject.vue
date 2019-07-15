<template>
    <div>
        subject
        <router-view></router-view>
        <subjectnav></subjectnav>
    </div>
</template>
<script>
import subjectnav from '@/views/subject/subjectnav.vue'
export default {
  components: {
    subjectnav
  }
}
</script>
<style lang="scss" scoped>
div{
    font-size: .4rem;
}
</style>
