<template>
    <q-layout view="lHh Lpr lFf">

        <q-header elevated class="glossy">
            <q-toolbar>
                <q-btn dense flat round icon="menu" @click="left = !left" />
                <q-toolbar-title class="absolute-center">
                    AIR MINUM CICI WATER
                </q-toolbar-title>
                <q-footer>
                    <div class="text-white">
                        <div class="text-weight-bold">
                            <marquee direction="right" scollamount="5" align="cemter">AIR MINUM CICI WATER</marquee>
                        </div>
                    </div>
                </q-footer>

                <q-toolbar-title></q-toolbar-title>
        <div></div>
                 <q-btn
                 rounded=""
                 outline=""
                  color=""
                  @click="LOGOUT()"
                  label="LOGOUT"
                  class="q-mr-sm">
                  <q-tooltip>keluar disini..</q-tooltip>
                </q-btn>
            </q-toolbar>
            <q-toolbar inset="">
              <q-toolbar-title>
                <strong>
                  <q-btn to="/"
                rounded=""
                outline=""
                icon ="dashboard"
                  color=""
                  class="q-mr-sm"
                  label="HOME"></q-btn>
                  <q-btn to="/DataBarang"
                rounded=""
                outline=""
                  color=""
                  icon="storefront"
                  class="q-mr-sm"
                  label="DATA BARANG"></q-btn>
                  <q-btn to="/InputDataBarang"
                rounded=""
                outline=""
                icon="note_add"
                  color=""
                  class="q-mr-sm"
                  label="INPUT DATA BARANG"></q-btn>
                  <q-btn to="/DataPembeli"
                rounded=""
                outline=""
                  color=""
                  icon ="folder_shared"
                  class="q-mr-sm"
                  label="DATA PEMBELI"></q-btn>
                  <q-btn to="/TransaksiPenjualan"
                rounded=""
                outline=""
                icon="chrome_reader_mode"
                  color=""
                  class="q-mr-sm"
                  label="TRANSAKSI PENJUALAN"></q-btn>
                </strong>
              </q-toolbar-title>
            </q-toolbar>
    </q-header>

    <q-drawer
      v-model="left"
      content-class="bg-deep-purple-2 text-white-h6"
    >
      <q-scroll-area class="fit">
        <q-list>
          <q-item style="height: 50px;" class="bg-white text-bold">
            <q-toolbar-title class="absolute-center">
                   HALAMAN ADMIN
                </q-toolbar-title>
          </q-item>
          <q-item class="justify-center text-center q-mb-md q-pt-md">
            <div>
              <q-avatar size="100px" class="q-mb-md">
                <img src="statics/foto.jpeg">
              </q-avatar>
              <div class="text-weight-bold">{{ dataUser.userName}}</div>
              <div>{{ dataUser.namaLengkap}}</div>
            </div>
          </q-item>
          <q-item-label
            header
            class="text-grey-8"
          >
           BERANDA
          </q-item-label>
          <q-item clickable active-class="active" exact v-ripple to="/">
            <q-item-section avatar>
              <q-icon name="dashboard" />
            </q-item-section>
            <q-item-section>
              HOME
            </q-item-section>
          </q-item>

          <q-item clickable active-class="active" exact v-ripple to="/DataBarang">
            <q-item-section avatar>
              <q-icon name="storefront" />
            </q-item-section>
            <q-item-section>
              DATA BARANG
            </q-item-section>
          </q-item>
          <q-item clickable active-class="active" exact v-ripple to="/InputDataBarang">
            <q-item-section avatar>
              <q-icon name="note_add" />
            </q-item-section>
            <q-item-section>
              INPUT DATA BARANG
            </q-item-section>
          </q-item>

          <q-item-label
            header
            class="text-grey-8"
          >
            PENDATAAN
          </q-item-label>
          <q-item clickable active-class="active" exact v-ripple to="/DataPembeli">
            <q-item-section avatar>
              <q-icon name="folder_shared" />
            </q-item-section>
            <q-item-section>
              DATA PEMBELI
            </q-item-section>
          </q-item>
          <q-item clickable active-class="active" exact v-ripple to="/TransaksiPenjualan" >
            <q-item-section avatar>
              <q-icon name="chrome_reader_mode" />
            </q-item-section>
            <q-item-section>
              TRANSAKSI PENJUALAN
            </q-item-section>
          </q-item>

        </q-list>
      </q-scroll-area>
    </q-drawer>
    <q-page-container class="bg-grey-2">
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>

export default {
  name: 'MainLayout',

  data () {
    return {
      left: false,
      dataUser: this.$q.localStorage.getItem('datauser')
    }
  },
  methods: {
    LOGOUT () {
      this.$q.localStorage.clear()
      this.$router.push('outh/login')
    }
  }
}
</script>
