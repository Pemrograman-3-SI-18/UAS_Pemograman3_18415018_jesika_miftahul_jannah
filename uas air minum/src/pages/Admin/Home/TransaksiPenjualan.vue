<template>
  <q-page >
    <div class="q-pa-md">
      <q-table
        title="Treats"
        :data="data"
        :columns="columns"
        row-key="id"
        :filter="filter"
        :loading="loading"
      >

        <template v-slot:top>
          <span class="text-h6 text-weight-black q-pa-md">
        <span class="absolute-center text-black-14">DATA TRANSAKSI</span>
      </span>
                    <!--          <q-btn class="q-ml-sm" color="primary" :disable="loading" label="Remove row" @click="removeRow" />-->
                    <q-space />
                    <q-input borderless dense debounce="300" v-model="filter" placeholder="Search">
          <template v-slot:append>
            <q-icon name="search" />
            </template>
          </q-input>
        </template>
        <template v-slot:body="props">
          <q-tr :props="props">
            <q-td key="kodePembeli" :props="props">
              {{ props.row.kodePembeli }}
            </q-td>
            <q-td key="namaPembeli" :props="props">{{ props.row.namaPembeli }}</q-td>
            <q-td key="alamat" :props="props">{{ props.row.alamat }}</q-td>
            <q-td key="nomorTelphone" :props="props">{{ props.row.nomorTelphone }}</q-td>
            <q-td key="kodeBarang" :props="props">{{ props.row.kodeBarang }}</q-td>
            <q-td key="jumlahBeli" :props="props">{{ props.row.jumlahBeli }}</q-td>
            <q-td key="pengiriman" :props="props">{{ props.row.pengiriman }}</q-td>
            <q-td key="pembayaran" :props="props">{{ props.row.pembayaran }}</q-td>
            <q-td key="action" :props="props">
              <div class="justify-center q-gutter-x-xs">
                <q-btn
                        color="red"
                        dense
                        size="sm"
                        @click="hapusDataTransaksiPenjualan(props.row._id)"
                        class="q-px-xs"
                        icon="delete"
                        label="Hapus"></q-btn>
              </div>
            </q-td>

          </q-tr>
        </template>
      </q-table>
    </div>
  </q-page>
</template>

<script>
export default {
  data () {
    return {
      loading: false,
      filter: '',
      rowCount: 10,
      columns: [
        {
          name: 'kodePembeli',
          required: true,
          label: 'KODE PEMBELI',
          align: 'left',
          field: row => row.kodePembeli,
          format: val => `${val}`,
          sortable: true
        },
        { name: 'namaPembeli', align: 'center', label: 'NAMA PEMBELI', field: 'namaPembeli', sortable: true },
        { name: 'alamat', align: 'center', label: 'ALAMAT', field: 'alamat', sortable: true },
        { name: 'nomorTelphone', align: 'center', label: 'NOMOR TELPHONE', field: 'nomorTelphone', sortable: true },
        { name: 'kodeBarang', align: 'center', label: 'KODE BARANG', field: 'kodeBarang', sortable: true },
        { name: 'jumlahBeli', align: 'center', label: 'JUMLAH BELI', field: 'jumlahBeli', sortable: true },
        { name: 'pengiriman', align: 'center', label: 'PENGIRIMAN', field: 'pengiriman', sortable: true },
        { name: 'pembayaran', align: 'center', label: 'PEMBAYARAN', field: 'pembayaran' },
        { name: 'action', align: 'center', label: 'ACTION', field: 'action', sortable: true }
      ],
      data: []
    }
  },
  methods: {
    hapusDataTransaksiPenjualan (id) {
      this.$axios.delete('/TransaksiPenjualan/hapus/' + id)
        .then((res) => {
          this.$q.notify({
            color: 'positive',
            message: 'Berhasil Menghapus Data'
          })
          this.getDataBarang()
        })
    },
    getDataTransaksiPenjualan () {
      this.$axios.get('/TransaksiPenjualan/datatransaksipenjualan/')
        .then((res) => {
          this.data = res.data.data
        })
    }
  },

  mounted () {
    this.getDataTransaksiPenjualan()
  }
}
</script>

<style scoped>

</style>
