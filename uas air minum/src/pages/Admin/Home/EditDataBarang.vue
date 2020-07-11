<template xmlns:v-slot="http://www.w3.org/1999/XSL/Transform">
  <q-page padding class="items-center-justify-center bg-grey-3">
    <q-card flat class="bg-white q-pa-md">
      <span class="text-h5 text-black q-pa-md">
        <span class="text-black-10">EDIT DATA PEMBELI</span>
      </span>
      <div class="q-pa-md">
        <q-form
          @submit="onSubmit"
          class="q-gutter-md"
        >

          <q-input
            label="KODE BARANG"
            lazy-rules
            color="teal"
            v-model="form.kodeBarang"
            :rules="[
           val => val !== null && val !== '' || 'KODE BARANG Dibutuhkan'
           ]">
            <template v-slot:append>
              <q-icon name="dns"/>
            </template>
          </q-input>
          <q-input
            label="NAMA BARANG"
            lazy-rules
            color="teal"
            v-model="form.namaBarang"
            :rules="[
           val => val !== null && val !== '' || 'NAMA BARANG Dibutuhkan'
           ]">
            <template v-slot:append>
              <q-icon name="title"/>
            </template>
          </q-input>
          <q-input
            label="STOK BARANG"
            lazy-rules
            color="teal"
            v-model="form.stokBarang"
            :rules="[
           val => val !== null && val !== '' || 'STOK BARANG Dibutuhkan'
           ]">
            <template v-slot:append>
              <q-icon name="menu_book"/>
            </template>
          </q-input>
          <q-input
            label="HARGA"
            lazy-rules
            color="teal"
            v-model="form.harga"
            :rules="[
           val => val !== null && val !== '' || 'HARGA Dibutuhkan'
           ]">
            <template v-slot:append>
              <q-icon name="person"/>
            </template>
          </q-input>
          <q-img :src="baseUrl + this.gambar" style="width: 250px; height: 250px"/>
          <q-toggle v-model="gangtiGambar" label="GANTI GAMBAR ?" />
          <q-input
            lazy-rules
            hint="PILIH GAMBAR"
            type="file"
            ref="file"
            v-if="gangtiGambar == true"
            @input="selectFile()"
            color="teal"
            :rules="[
           val => val !== null && val !== '' || 'Gambar Dibutuhkan'
           ]">
            <template v-slot:append>
              <q-icon name="add_photo_alternate"/>
            </template>
          </q-input>

          <div>
            <q-btn
              unelevated
              icon="add"
              label="UBAH DATA BARANG"
              style="height: 50px"
              type="submit"
              color="primary"/>
          </div>
        </q-form>
      </div>
    </q-card>
  </q-page>
</template>

<script>
export default {
  data () {
    return {
      gangtiGambar: false,
      baseUrl: 'http://localhost:5050/gambar/',
      form: {
        kodeBarang: null,
        namaBarang: null,
        stokBarang: null,
        harga: null
      },
      id: null,
      gambar: null
    }
  },
  methods: {
    selectFile () {
      this.gambar = this.$refs.file.$refs.input.files[0]
    },
    onSubmit () {
      const formData = new FormData()
      formData.append('gambar', this.gambar)
      formData.append('namaBarang', this.form.namaBarang)
      formData.append('kodeBarang', this.form.kodeBarang)
      formData.append('stokBarang', this.form.stokBarang)
      formData.append('harga', this.form.harga)
      this.$axios.put('/Barang/ubah/' + this.id, formData)
        .then((res) => {
          if (res.data.error) {
            this.$q.notify({
              color: 'negative',
              message: res.data.msg,
              icon: 'ion-close'
            })
          } else {
            this.$q.notify({
              color: 'positive',
              message: res.data.msg,
              icon: 'ion-close'
            })
            this.$router.push('/')
          }
        })
    },
    getDataBarangById () {
      this.$axios.get('/Barang/databarang/' + this.$route.params.id)
        .then((res) => {
          console.log(res)
          this.data = res.data.data
          this.form.kodeBarang = this.data.kodeBarang
          this.form.namaBarang = this.data.namaBarang
          this.form.stokBarang = this.data.stokBarang
          this.form.harga = this.data.harga
          this.gambar = this.data.gambar
          this.id = this.data._id
        })
    }
  },
  mounted () {
    this.getDataBarangById()
  }
}
</script>

<style scoped>
</style>
