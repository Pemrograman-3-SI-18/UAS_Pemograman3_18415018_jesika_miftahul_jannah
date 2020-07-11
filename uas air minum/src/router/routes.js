
const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    meta: {
      outh: true
    },
    children: [
      { path: '', component: () => import('pages/Admin/Home/Menu.vue') },
      { path: 'DataBarang', component: () => import('pages/Admin/Home/DataBarang.vue') },
      { path: 'InputDataBarang', component: () => import('pages/Admin/Home/InputDataBarang.vue') },
      { path: 'TransaksiPenjualan', component: () => import('pages/Admin/Home/TransaksiPenjualan.vue') },
      { path: 'DataPembeli', component: () => import('pages/Admin/Home/DataPembeli.vue') },
      { path: 'Editdatabarang/:id', component: () => import('pages/Admin/Home/EditDataBarang.vue') },
      { path: 'Editdatapembeli/:id', component: () => import('pages/Admin/Home/EditDataPembeli.vue') }
    ]
  },
  {
    path: '/Pembeli',
    component: () => import('layouts/PembeliLayout.vue'),
    meta: {
      outh: true
    },
    children: [
      { path: '', component: () => import('pages/Pembeli/DataBarang/home.vue') },
      { path: 'Transaksi', component: () => import('pages/Pembeli/DataBarang/Transaksi.vue') },
      { path: 'tentangkami', component: () => import('pages/Pembeli/DataBarang/tentangkami.vue') },
      { path: 'produk', component: () => import('pages/Pembeli/DataBarang/produk.vue') },
      { path: 'panduan', component: () => import('pages/Pembeli/Transaksi/panduan.vue') },
      { path: 'InputDataPembelii', component: () => import('pages/Pembeli/DataBarang/InputDataPembelii.vue') }
    ]
  },
  {
    path: '/',
    component: () => import('layouts/LoginRegisLayout.vue'),
    children: [
      { path: 'outh/Login', component: () => import('pages/users/Login.vue') },
      { path: 'outh/registrasi', component: () => import('pages/users/registrasi.vue') },
      { path: 'outh/datapembeli', component: () => import('pages/Admin/Home/DataPembeli.vue') },
      { path: 'outh/inputdatapembelii', component: () => import('pages/Pembeli/DataBarang/InputDataPembelii.vue') },
      { path: 'outh/menu', component: () => import('pages/Pembeli/DataBarang/home.vue') },
      { path: 'outh/transaksi', component: () => import('pages/Pembeli/DataBarang/Transaksi.vue') },
      { path: 'outh/InputDataBarang', component: () => import('pages/Admin/Home/InputDataBarang.vue') },
      { path: 'outh/TransaksiPenjualan', component: () => import('pages/Admin/Home/TransaksiPenjualan.vue') },
      { path: 'outh/produk', component: () => import('pages/Pembeli/DataBarang/produk.vue') },
      { path: 'outh/panduan', component: () => import('pages/Pembeli/Transaksi/panduan.vue') }
    ]
  }
]

// Always leave this as last one
if (process.env.MODE !== 'ssr') {
  routes.push({
    path: '*',
    component: () => import('pages/Error404.vue')
  })
}

export default routes
