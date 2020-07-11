<template>
<div class="q-pa-md">
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
                <q-btn to="/pembeli/tentangkami"
                       rounded=""
                       outline=""
                       color=""
                       class="q-mr-sm"
                       label="tentang kami"></q-btn>
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
                  <q-btn to="/pembeli/"
                rounded=""
                outline=""
                icon ="dashboard"
                  color=""
                  class="q-mr-sm"
                  label="HOME"></q-btn>
                  <q-btn to="/pembeli/InputDataPembelii"
                           rounded=""
                           outline=""
                           icon="list_alt"
                           color=""
                           class="q-mr-sm"
                           label="INPUT DATA PEMBELI"></q-btn>
                  <q-btn to="/pembeli/produk"
                rounded=""
                outline=""
                  color=""
                  icon ="shopping_cart"
                  class="q-mr-sm"
                  label="PRODUK"></q-btn>
                  <q-btn to="/Pembeli/Transaksi"
                rounded=""
                outline=""
                icon="local_atm"
                  color=""
                  class="q-mr-sm"
                  label="TRANSAKSI"></q-btn>
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
                            HALAMAN PEMBELI
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
                    <q-item clickable active-class="active" exact v-ripple to="/pembeli">
                        <q-item-section avatar>
                            <q-icon name="dashboard" />
                        </q-item-section>
                        <q-item-section>
                            HOME
                        </q-item-section>
                    </q-item>

                    <q-item clickable active-class="active" exact v-ripple to="/Pembeli/InputDataPembelii">
                        <q-item-section avatar>
                            <q-icon name="local_atm" />
                        </q-item-section>
                        <q-item-section>
                            INPUT DATA PEMBELI
                        </q-item-section>
                    </q-item>
                    <q-item clickable active-class="active" exact v-ripple to="/Pembeli/produk">
            <q-item-section avatar>
              <q-icon name="list_alt" />
            </q-item-section>
            <q-item-section>
              PRODUK
            </q-item-section>
          </q-item>

          <q-item clickable active-class="active" exact v-ripple to="/Pembeli/Transaksi">
            <q-item-section avatar>
              <q-icon name="local_atm" />
            </q-item-section>
            <q-item-section>
              TRANSAKSI
            </q-item-section>
          </q-item>
                    <q-item clickable active-class="active" exact v-ripple to="/Pembeli/panduan">
            <q-item-section avatar>
              <q-icon name="help" />
            </q-item-section>
            <q-item-section>
              ALUR APLIKASI
            </q-item-section>
          </q-item>

                </q-list>
            </q-scroll-area>
        </q-drawer>
        <q-page-container class="bg-grey-2">
            <router-view />
        </q-page-container>
    </q-layout>
</div>
</template>

<script>

export default {
  name: 'PembeliLayout',

  data () {
    return {
      left: false,
      dataUser: this.$q.localStorage.getItem('datauser')
    }
  },
  methods: {
    LOGOUT () {
      this.$q.localStorage.clear()
      this.$router.push('/outh/login')
    }
  }
}
</script>
