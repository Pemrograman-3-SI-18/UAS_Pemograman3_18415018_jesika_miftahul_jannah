<template>
    <q-page>
       <div class="col"></div>
       <div class="text-h5 text-bold text-grey">PRODUK CICI WATER</div>
        <div class="row"></div>

        <div class="q-pa-md">
            <div class="row">

                <div class="col-md-4 col-xs-12 q-pa-md" v-for="(barang, i) in data" :key="i">
                    <q-card flat class="bg-white text-blue-grey-14">
                        <q-card-section>
                            <div class="text-h6">
                                {{ barang.namaBarang}}
                            </div>
                            <div>
                kode : {{ barang.kodeBarang}}
              </div>
                        </q-card-section>
                        <div>
                        <q-card-section class="row items-center justify-center">
                            <q-img spinner-color="white" style="height: 250px; max-width: 50%" :src="baseUrl + barang.gambar"/>
                        </q-card-section>
                        </div>
                        <q-card-section>
                            <div class="text-h6">
                               Harga {{ barang.harga}}
                            </div>
                            <div>
                Stok Barang : {{ barang.stokBarang}}
              </div>
                        </q-card-section>
                        <q-card-section>
                            <q-toolbar-title class="absolute-center">
                                <q-btn unelevated color="primary" icon="add_shopping_cart" type="submit" no-caps label="Tambah Ke Keranjang" to="/pembeli/Transaksi"></q-btn>
                            </q-toolbar-title>
                        </q-card-section>
                    </q-card>
                </div>
            </div>
        </div>
    </q-page>
</template>

<script>
export default {
  name: 'databarang',
  data () {
    return {
      data: [],
      baseUrl: 'http://localhost:5050/gambar/'
    }
  },
  methods: {
    getDataBarang () {
      this.$axios.get('/Barang/databarang')
        .then((res) => {
          this.data = res.data.data
        })
    }
  },
  mounted () {
    this.getDataBarang()
  }
}
</script>

<style scoped>

</style>
