<template>
    <q-page>
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
        <span class="absolute-center text-black-14">DATA BARANG</span>
      </span>
                    <q-btn color="primary" :disable="loading" label="TAMBAH DATA BARANG" to="/inputdatabarang"/>
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
                        <q-td key="kodeBarang" :props="props">
                            {{ props.row.kodeBarang }}
                        </q-td>
                        <q-td key="namaBarang" :props="props">{{ props.row.namaBarang }}</q-td>
                        <q-td key="stokBarang" :props="props">{{ props.row.stokBarang }}</q-td>
                        <q-td key="harga" :props="props">{{ props.row.harga }}</q-td>
                        <q-td key="gambar" :props="props">
                            <q-img :src="baseUrl + props.row.gambar" style="width: 50px; height: 50px"/>
                        </q-td>
                        <q-td key="action" :props="props">
                            <div class="justify-center q-gutter-x-xs">
                                <q-btn color="teal"
                                       dense size="sm"
                                       class="q-px-xs"
                                       icon="edit"
                                       @click="edit(props.row.kodeBarang)"
                                       label="Edit"></q-btn>
                                <q-btn
                                        color="red"
                                        dense
                                        size="sm"
                                        @click="hapusDataBarang(props.row._id)"
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
      urlGambar: null,
      baseUrl: 'http://localhost:5050/gambar/',
      columns: [
        {
          name: 'kodeBarang',
          required: true,
          label: 'KODE BARANG',
          align: 'left',
          field: row => row.kodeBarang,
          format: val => `${val}`,
          sortable: true
        },
        { name: 'namaBarang', align: 'center', label: 'NAMA BARANG', field: 'namaBarang', sortable: true },
        { name: 'stokBarang', align: 'center', label: 'STOK BARANG', field: 'stokBarang', sortable: true },
        { name: 'harga', label: 'Harga', align: 'center', field: 'harga', sortable: true },
        { name: 'gambar', label: 'GAMBAR', align: 'center', field: 'gambar' },
        { name: 'action', align: 'center', label: 'ACTION', field: 'action', sortable: true }
      ],
      data: []
    }
  },
  methods: {
    getDataBarang () {
      this.$axios.get('/Barang/databarang/')
        .then((res) => {
          this.data = res.data.data
        })
    },
    hapusDataBarang (id) {
      this.$axios.delete('/Barang/hapus/' + id)
        .then((res) => {
          this.$q.notify({
            color: 'positive',
            message: 'Berhasil Menghapus Data'
          })
          this.getDataBarang()
        })
    },
    edit (kodeBarang) {
      this.$router.push('/Editdatabarang/' + kodeBarang)
    }
  },
  mounted () {
    this.getDataBarang()
  }
}
</script>
