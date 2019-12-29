<template>
  <div>
    <table class="table table-bordered">
      <thead>
        <tr>
          <th scope="col">항목</th>
          <th scope="col" colspan="2">내용</th>
          <th scope="col">사진</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <th scope="row">no</th>
          <td colspan="2">#{{ mainData.no }}</td>
          <td rowspan="3">
            <img :src='mainData.photo'/>
          </td>
        </tr>
        <tr>
          <th scope="row">name</th>
          <td colspan="2">{{ mainData.name }}</td>
        </tr>
        <tr>
          <th scope="row">tel</th>
          <td colspan="2">{{ mainData.tel }}</td>
        </tr>
        <tr>
          <th scope="row">address</th>
          <td colspan="3">{{ mainData.address }}</td>
        </tr>
      </tbody>
    </table>
    <div>
      <input type="button" value="돌아가기" class="btn btn-outline-info" v-on:click="back"/>
      <input type="button" value="삭제하기" class="btn btn-outline-danger" v-on:click="delData"/>
    </div>
  </div>
</template>

<script>
export default {
  data: () => {
    return {
      mainData: [],
      no: 0
    }
  },
  mounted () {
    const _self = this
    _self.setNo()
  },
  watch: {
    'this.$route.params' () {
      const _self = this
      _self.setNo()
    }
  },
  methods: {
    setNo () {
      const _self = this
      _self.no = Number(_self.$route.params.no)
      _self.getData()
    },
    getData () {
      const _self = this
      _self.$store.dispatch('GETONEDATA', _self.no)
        .then(res => {
          console.log(res)
          if (res.no) {
            _self.mainData = res
          } else {
            alert('잘못된 접근')
            _self.back()
          }
        })
    },
    back () {
      this.$router.push('/')
    },
    delData () {
      const _self = this
      if (confirm('정말로 삭제하시겠습니까?')) {
        _self.$store.dispatch('DELONEDATA', _self.no)
          .then(res => {
            console.log(res)
            alert(res.message)
            _self.back()
          })
      }
    }
  }
}
</script>

<style scoped>
.btn-outline-danger {
  margin-left: 2vw;
}
</style>
