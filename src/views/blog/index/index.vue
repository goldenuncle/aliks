<template>
  <div id="blog"> 
      <navMemu/>
      <router-view/>
  </div>
</template>

<script>
import navMemu from '../components/navmemu'
export default {
components: {
    navMemu,
  },
}
</script>

<style>

</style>