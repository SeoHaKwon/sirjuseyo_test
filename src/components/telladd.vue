<template>
  <div class='addComponent'>
    <div class="input-group input-group-sm mb-3">
      <div class="input-group-prepend">
        <span class="input-group-text" id="inputGroup-sizing-sm">name</span>
      </div>
      <input type="text" class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-sm" v-model="name">
    </div>

    <div class="input-group input-group-sm mb-3">
      <div class="input-group-prepend">
        <span class="input-group-text" id="inputGroup-sizing-sm">tel</span>
      </div>
      <input type="text" class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-sm" v-model="tel">
    </div>

    <div class="input-group input-group-sm mb-3">
      <div class="input-group-prepend">
        <span class="input-group-text" id="inputGroup-sizing-sm">address</span>
      </div>
      <input type="text" class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-sm" v-model="addr">
    </div>

    <div>
      <input type="button" value="돌아가기" class="btn btn-outline-info" v-on:click="back"/>
      <input type="button" value="추가하기" class="btn btn-outline-danger" v-on:click="addData"/>
    </div>
  </div>
</template>

<script>
export default {
  data: () => {
    return {
      name: '',
      tel: '',
      addr: ''
    }
  },
  methods: {
    back () {
      this.$router.push('/')
    },
    addData () {
      const _self = this
      let data = {
        'name': _self.name,
        'tel': _self.tel,
        'addr': _self.addr
      }
      _self.$store.dispatch('ADDDATA', data)
        .then(res => {
          alert(res.message)
          if (res.status === 'success') {
            _self.$router.replace({ name: 'selectSearch', params: { 'no': res.no } })
          } else {
            _self.back()
          }
        })
    }
  }
}
</script>

<style scoped>
.btn-outline-danger {
  margin-left: 2vw;
}
.addComponent {
  width: 80vw;
  margin-left: 10vw;
}
</style>
