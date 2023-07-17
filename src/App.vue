<template>
    <div>
      <the-header v-if="!$route.params.auth"></the-header>
      <transition name="route" mode="out-in">
      <router-view/>
      </transition>
      <TheFooter  v-if="!$route.params.auth && !$route.path==='checkout'"/>

    </div>
</template>
<script>
import TheHeader from './components/layout/TheHeader.vue';
import TheFooter from './components/layout/TheFooter.vue';
export default{
  components:{
    TheHeader,
    TheFooter
  }

}
</script>
<style lang="scss">
.route-enter-from {
  opacity: 0;
  transform: translateY(-30px);
}

.route-leave-to {
  opacity: 0;
  transform: translateY(30px);
}

.route-enter-active {
  transition: all 0.3s ease-out;
}

.route-leave-active {
  transition: all 0.3s ease-in;
}

.route-enter-to,
.route-leave-from {
  opacity: 1;
  transform: translateY(0);
}
</style>
