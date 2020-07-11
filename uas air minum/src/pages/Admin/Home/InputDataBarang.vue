<template xmlns:v-slot="http://www.w3.org/1999/XSL/Transform">
    <q-page padding class="items-center-justify-center bg-grey-3">
        <q-card flat class="bg-white q-pa-md">
      <span class="text-h5 text-black q-pa-md">
        <span class="text-black-10">TAMBAH DATA BARANG</span>
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
                            <q-icon name="all_inclusive"/>
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
                            <q-icon name="assignment"/>
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
                            <q-icon name="shopping_bag"/>
                        </template>
                    </q-input>

                    <q-input
                            label="HARGA BARANG"
                            lazy-rules
                            color="teal"
                            v-model="form.harga"
                            :rules="[
           val => val !== null && val !== '' || 'HARGA BARANG Dibutuhkan'
           ]">
                        <template v-slot:append>
                            <q-icon name="attach_money"/>
                        </template>
                    </q-input>

                    <q-input
                            lazy-rules
                            hint="PILIH GAMBAR"
                            type="file"
                            ref="file"
                            @input="selectFile()"
                            color="primary"
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
                                label="TAMBAH DATA BARANG"
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
        namaBarang: null,
        kodeBarang: null,
        stokBarang: null,
        harga: null
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
      formData.append('namaBarang', this.form.namaBarang)
      formData.append('kodeBarang', this.form.kodeBarang)
      formData.append('stokBarang', this.form.stokBarang)
      formData.append('harga', this.form.harga)
      this.$axios.post('/Barang/input/', formData)
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
    }
  }
}
</script>

<style scoped>
</style>
