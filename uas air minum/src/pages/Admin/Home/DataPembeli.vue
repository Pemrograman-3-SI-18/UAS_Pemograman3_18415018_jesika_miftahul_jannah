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
        <span class="absolute-center text-black-14">DATA PEMBELI</span>
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
                        <q-td key="email" :props="props">{{ props.row.email}}</q-td>
                        <q-td key="alamat" :props="props">{{ props.row.alamat }}</q-td>
                        <q-td key="nomorTelphone" :props="props">{{ props.row.nomorTelphone }}</q-td>
                        <q-td key="gambar" :props="props">
                            <q-img :src="baseUrl + props.row.gambar" style="width: 50px; height: 50px"/>
                        </q-td>
                        <q-td key="action" :props="props">
                            <div class="justify-center q-gutter-x-xs">
                                <q-btn color="teal"
                                       dense size="sm"
                                       class="q-px-xs"
                                       icon="edit"
                                       @click="edit(props.row.kodePembeli)"
                                       label="Edit"></q-btn>
                                <q-btn
                                        color="red"
                                        dense
                                        size="sm"
                                        @click="hapusDataPembeli(props.row._id)"
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
          name: 'kodePembeli',
          required: true,
          label: 'KODE PEMBELI',
          align: 'left',
          field: row => row.kodePembeli,
          format: val => `${val}`,
          sortable: true
        },
        { name: 'namaPembeli', align: 'center', label: 'NAMA PEMBELI', field: 'namaPembeli', sortable: true },
        { name: 'email', align: 'center', label: 'EMAIL', field: 'email', sortable: true },
        { name: 'alamat', label: 'ALAMAT', align: 'center', field: 'alamat', sortable: true },
        { name: 'nomorTelphone', label: 'NOMOR TELPHONE', align: 'center', field: 'nomorTelphone', sortable: true },
        { name: 'gambar', label: 'FOTO', align: 'center', field: 'gambar' },
        { name: 'action', align: 'center', label: 'ACTION', field: 'action', sortable: true }
      ],
      data: []
    }
  },
  methods: {
    getDataPembeli () {
      this.$axios.get('/Pembeli/datapembeli/')
        .then((res) => {
          this.data = res.data.data
        })
    },
    hapusDataPembeli (id) {
      this.$axios.delete('/Pembeli/hapus/' + id)
        .then((res) => {
          this.$q.notify({
            color: 'positive',
            message: 'berhasil menghapus data'
          })
          this.getDataPembeli()
        })
    },
    edit (kodePembeli) {
      this.$router.push('/Editdatapembeli/' + kodePembeli)
    }
  },
  mounted () {
    this.getDataPembeli()
  }
}
</script>
