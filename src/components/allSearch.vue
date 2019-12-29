<template>
  <div class="top_Components">
    <table class="table table-striped">
      <thead class="thead-dark">
        <tr>
          <th scope="col">#no</th>
          <th scope="col">#name</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(item, idx) in allData" v-bind:key="idx" v-on:click="getOneData(item.no)">
          <td>{{ item.no }}</td>
          <td>{{ item.name}}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  data: () => {
    return {
      allData: []
    }
  },
  mounted () {
    const _self = this
    _self.$store.dispatch('GETONEDATA', '')
      .then(res => {
        _self.allData = res.contacts
      })
  },
  methods: {
    getOneData (no) {
      const _self = this
      _self.$router.replace({ name: 'selectSearch', params: { 'no': no } })
    }
  }
}
</script>

<style lang="scss" scoped>
tbody {
  tr {
    cursor: pointer;
  }
}
table {
  width: 80vw;
  margin-left: 10vw;
}
</style>
