<template xmlns:v-slot="http://www.w3.org/1999/XSL/Transform">
    <q-page padding class="items-center-justify-center bg-grey-3">
        <q-card flat class="bg-white q-pa-md">
      <span class="text-h5 text-black q-pa-md">
        <span class="text-black-10">TAMBAH DATA PEMBELI</span>
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
                            <q-icon name="all_inclusive"/>
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
                            <q-icon name="ballot"/>
                        </template>
                    </q-input>
                    <q-input
                            label="EMAIL"
                            lazy-rules
                            color="teal"
                            v-model="form.email"
                            :rules="[
           val => val !== null && val !== '' || 'EMAIL Dibutuhkan'
           ]">
                        <template v-slot:append>
                            <q-icon name="mail"/>
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
                            <q-icon name="location_city"/>
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
                            <q-icon name="phone_iphone"/>
                        </template>
                    </q-input>

                    <q-input
                            lazy-rules
                            hint="PILIH FOTO"
                            type="file"
                            ref="file"
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
                                label="TAMBAH DATA PEMBELI"
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
      form: {
        namaPembeli: null,
        kodePembeli: null,
        email: null,
        alamat: null,
        nomorTelphone: null
      },
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
      this.$axios.post('/Pembeli/input/', formData)
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
            this.$router.push('/pembeli/')
          }
        })
    }
  }
}
</script>

<style scoped>
</style>
