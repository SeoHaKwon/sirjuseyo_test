<template>
  <div class="search">
    <allSearch />
  </div>
</template>

<script>
// @ is an alias to /src
import allSearch from '@/components/allSearch.vue'

export default {
  name: 'Search',
  components: {
    allSearch
  }
}
</script>
