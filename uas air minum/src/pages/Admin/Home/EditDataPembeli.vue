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
            label="KODE PEMBELI"
            lazy-rules
            color="teal"
            v-model="form.kodePembeli"
            :rules="[
           val => val !== null && val !== '' || 'KODE PEMBELI Dibutuhkan'
           ]">
            <template v-slot:append>
              <q-icon name="dns"/>
            </template>
          </q-input>
          <q-input
            label="NAMA PEMBELI"
            lazy-rules
            color="teal"
            v-model="form.namaPembeli"
            :rules="[
           val => val !== null && val !== '' || 'NAMA PEMBELI Dibutuhkan'
           ]">
            <template v-slot:append>
              <q-icon name="title"/>
            </template>
          </q-input>
          <q-input
            label="email"
            lazy-rules
            color="teal"
            v-model="form.email"
            :rules="[
           val => val !== null && val !== '' || 'EMAIL Dibutuhkan'
           ]">
            <template v-slot:append>
              <q-icon name="menu_book"/>
            </template>
          </q-input>
          <q-input
            label="ALAMAT"
            lazy-rules
            color="teal"
            v-model="form.alamat"
            :rules="[
           val => val !== null && val !== '' || 'ALAMAT Dibutuhkan'
           ]">
            <template v-slot:append>
              <q-icon name="person"/>
            </template>
          </q-input>
           <q-input
            label="NOMOR TELPHONE"
            lazy-rules
            color="teal"
            v-model="form.nomorTelphone"
            :rules="[
           val => val !== null && val !== '' || 'NOMOR TELPHONE Dibutuhkan'
           ]">
            <template v-slot:append>
              <q-icon name="person"/>
            </template>
          </q-input>
          <q-img :src="baseUrl + this.gambar" style="width: 250px; height: 250px"/>
          <q-toggle v-model="gangtiGambar" label="GANTI FOTO ?" />
          <q-input
            lazy-rules
            hint="PILIH FOTO"
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
              label="UBAH DATA PEMBELI"
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
        kodePembeli: null,
        namaPembeli: null,
        email: null,
        alamat: null,
        nomorTelphone: null
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
      formData.append('namaPembeli', this.form.namaPembeli)
      formData.append('kodePembeli', this.form.kodePembeli)
      formData.append('email', this.form.email)
      formData.append('alamat', this.form.alamat)
      formData.append('nomorTelphone', this.form.nomorTelphone)
      this.$axios.put('/Pembeli/ubah/' + this.id, formData)
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
    getDataPembeliById () {
      this.$axios.get('/Pembeli/datapembeli/' + this.$route.params.id)
        .then((res) => {
          console.log(res)
          this.data = res.data.data
          this.form.kodePembeli = this.data.kodePembeli
          this.form.namaPembeli = this.data.namaPembeli
          this.form.email = this.data.email
          this.form.alamat = this.data.alamat
          this.form.nomorTelphone = this.data.nomorTelphone
          this.gambar = this.data.gambar
          this.id = this.data._id
        })
    }
  },
  mounted () {
    this.getDataPembeliById()
  }
}
</script>

<style scoped>
</style>
