<template xmlns:v-slot="http://www.w3.org/1999/XSL/Transform">
    <q-page padding class="items-center-justify-center bg-grey-3">
        <q-card flat class="bg-white q-pa-md">
      <span class="text-h5 text-black q-pa-md">
        <span class="text-black-10">SILAHKAN ISI DATA TRANSAKSI</span>
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
                            label="ALAMAT LENGKAP"
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
                            label="KODE BARANG"
                            lazy-rules
                            color="teal"
                            v-model="form.kodeBarang"
                            :rules="[
           val => val !== null && val !== '' || 'KODE BARANG Dibutuhkan'
           ]">
                        <template v-slot:append>
                            <q-icon name="ballot"/>
                        </template>
                    </q-input>
                    <q-input
                            label="JUMLAH BELI"
                            lazy-rules
                            color="teal"
                            v-model="form.jumlahBeli"
                            :rules="[
           val => val !== null && val !== '' || 'JUMLAH BELI Dibutuhkan'
           ]">
                        <template v-slot:append>
                            <q-icon name="ballot"/>
                        </template>
                    </q-input>
                    <q-input
                            label="PENGIRIMAN"
                            lazy-rules
                            color="teal"
                            v-model="form.pengiriman"
                            :rules="[
           val => val !== null && val !== '' || 'PENGIRIMAN Dibutuhkan'
           ]">
                        <template v-slot:append>
                            <q-icon name="mail"/>
                        </template>
                    </q-input>
                    <q-input
                            label="PEMBAYARAN"
                            lazy-rules
                            color="teal"
                            v-model="form.pembayaran"
                            :rules="[
           val => val !== null && val !== '' || 'PEMBAYARAN Dibutuhkan'
           ]">
                        <template v-slot:append>
                            <q-icon name="mail"/>
                        </template>
                    </q-input>

                    <div>
                        <q-btn
                                unelevated
                                icon="add"
                                label="TAMBAH DATA TRANSAKSI"
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
        kodeBarang: null,
        jumlahBeli: null,
        alamat: null,
        nomorTelphone: null,
        pembayaran: null,
        pengiriman: null
      },
      accept: false
    }
  },
  methods: {
    onSubmit () {
      this.$axios.post('/TransaksiPenjualan/input/', {
        kodePembeli: this.form.kodePembeli,
        namaPembeli: this.form.namaPembeli,
        alamat: this.form.alamat,
        nomorTelphone: this.form.nomorTelphone,
        kodeBarang: this.form.kodeBarang,
        jumlahBeli: this.form.jumlahBeli,
        pengiriman: this.form.pengiriman,
        pembayaran: this.form.pembayaran
      })
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
    },

    onReset () {
      this.accept = false
      this.age = null
      this.name = null
    }
  }
}
</script>

<style scoped>
</style>
