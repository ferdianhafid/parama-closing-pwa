const SANTARA_V4 = Object.freeze({
  VERSION: "4.3.9",
  TIME_ZONE: "Asia/Jakarta",
  LOCALE: "id_ID",
  ACTIVE: "Aktif",
  PROPERTY_MIGRATED: "SANTARA_V4_MIGRATED",
  PROPERTY_START_DATE: "SANTARA_V4_START_DATE",
  PROPERTY_ADMIN_PIN: "SANTARA_V42_ADMIN_PIN",
  PROPERTY_SPREADSHEET_ID: "SANTARA_V4_SPREADSHEET_ID",
  PROPERTY_DASHBOARD_PENDING: "SANTARA_V4_DASHBOARD_REFRESH_PENDING",
  PROPERTY_DASHBOARD_STATUS: "SANTARA_V4_DASHBOARD_REFRESH_STATUS",
  PROPERTY_DASHBOARD_REQUESTED_AT: "SANTARA_V4_DASHBOARD_REQUESTED_AT",
  PROPERTY_DASHBOARD_LAST_ATTEMPT: "SANTARA_V4_DASHBOARD_LAST_ATTEMPT",
  PROPERTY_DASHBOARD_LAST_SUCCESS: "SANTARA_V4_DASHBOARD_LAST_SUCCESS",
  PROPERTY_DASHBOARD_LAST_ERROR: "SANTARA_V4_DASHBOARD_LAST_ERROR",
  DASHBOARD_TRIGGER_HANDLER: "processPendingDashboardRefresh",
  ADMIN_SESSION_PREFIX: "SANTARA_V42_ADMIN_SESSION_",
  DEFAULT_ADMIN_PIN: "2468",
  CACHE_KEY: "SANTARA_V4_MASTER_CACHE",
  SHEETS: Object.freeze({
    MASTER_STAFF: "Master_Staff",
    MASTER_UNIT: "Master_Satuan",
    MASTER_STOCK: "Master_Stok",
    MASTER_MENU: "Master_Menu",
    MASTER_RECIPE: "Master_Resep",
    MASTER_BASE_RECIPE: "Master_Resep_Base",
    MASTER_CONVERSION: "Master_Konversi",
    REPORT: "Laporan_Closing",
    MENU_SOLD: "Detail_Menu_Terjual",
    STOCK_IN: "Detail_Stock_In",
    EXPENSE: "Detail_Pengeluaran_Harian",
    ADMIN_PRODUCTION: "Detail_Produksi_Internal",
    BASE: "Detail_Base",
    FREE_WASTE: "Detail_Free_Waste",
    RECIPE_SNAPSHOT: "Detail_Resep_Terpakai",
    OPENING_BALANCE: "Saldo_Awal_Stok",
    STOCK_MOVEMENT: "Stock_Movement",
    CURRENT_STOCK: "Stock_Saat_Ini",
    OPNAME_LATEST: "Stock_Opname_Terbaru",
    OPNAME_HISTORY: "Riwayat_Stock_Opname",
    AUDIT: "Audit_Submit",
    MIGRATION_REVIEW: "Migrasi_Perlu_Ditinjau",
    MASTER_HPP_MENU: "Master_HPP_Menu",
    MASTER_PRICE: "Master_Harga_Bahan",
    STOCK_IN_HISTORY: "Riwayat_Stok_Masuk",
    FREE_WASTE_HISTORY: "Riwayat_Free_Waste",
    DASHBOARD: "Dashboard"
  }),
  LEGACY_SHEETS: Object.freeze([
    "Laporan_Closing",
    "Detail_Stock_Closing",
    "Riwayat_Stock_Closing",
    "Detail_Stock_In",
    "Detail_Base",
    "Detail_Free_Waste",
    "Master_Stok"
  ]),
  BASE_NAMES: Object.freeze(["Base Coffee", "Base Milk", "Base Tea", "SimSi", "Palm Sugar Syrup"]),
  STAFF_BASE_NAMES: Object.freeze(["Base Coffee", "Base Milk", "Base Tea", "SimSi", "Palm Sugar Syrup"]),
  DEFAULT_UNITS: Object.freeze(["ml", "gram", "pack", "box", "pcs", "botol", "sachet", "porsi"])
});

const V4_HEADERS = Object.freeze({
  MASTER_STAFF: ["Nama Staff", "Status"],
  MASTER_UNIT: ["Satuan", "Status"],
  MASTER_STOCK: [
    "Kategori", "Nama Barang", "Satuan Dasar", "Limit Minimum", "Safety Stock",
    "Status", "Satuan Beli", "Isi per Satuan Beli", "Catatan"
  ],
  MASTER_MENU: ["Nama Menu", "Ukuran", "Kategori", "Status"],
  MASTER_RECIPE: [
    "Nama Menu", "Ukuran", "Bahan", "Jumlah", "Satuan", "Versi",
    "Mulai Berlaku", "Akhir Berlaku", "Status"
  ],
  MASTER_BASE_RECIPE: [
    "Nama Base", "Bahan", "Jumlah", "Satuan", "Hasil Standar (ml)", "Versi",
    "Mulai Berlaku", "Akhir Berlaku", "Status", "Produksi Aktif"
  ],
  MASTER_CONVERSION: ["Nama Barang", "Satuan Input", "Satuan Dasar", "Faktor", "Status", "Catatan"],
  REPORT: [
    "Tanggal", "Nama Staff", "Start Till", "Cash Sales", "Transfer", "QRIS",
    "Shopee", "Grab", "Debit", "Total Sales", "Total Order", "Total Item Terjual",
    "Total Expense", "Expected Cash", "Actual Cash", "Selisih Cash", "Sumber",
    "Dibuat Pada", "Terakhir Diperbarui"
  ],
  MENU_SOLD: ["Tanggal", "Nama Staff", "Nama Menu", "Ukuran", "Jumlah", "Versi Resep", "Timestamp"],
  STOCK_IN: [
    "Tanggal", "Nama Staff", "Nama Item", "Jumlah Input", "Satuan Input",
    "Jumlah Satuan Dasar", "Satuan Dasar", "Total Biaya", "Catatan", "Timestamp"
  ],
  EXPENSE: [
    "Tanggal", "Nama Staff", "Nama Pengeluaran", "Jumlah", "Satuan",
    "Harga Satuan", "Subtotal", "Catatan", "Timestamp"
  ],
  ADMIN_PRODUCTION: [
    "ID Produksi", "Tanggal", "Nama Admin", "Jenis Base", "Hasil Aktual (ml)",
    "Hasil Standar (ml)", "Versi Resep", "Bahan", "Jumlah Keluar", "Satuan",
    "Catatan", "Timestamp"
  ],
  BASE: [
    "Tanggal", "Nama Staff", "Jenis Base", "Opening (ml)", "Dibuat Aktual (ml)",
    "Closing (ml)", "Terpakai (ml)", "Hasil Standar (ml)", "Versi Resep", "Timestamp"
  ],
  FREE_WASTE: [
    "Tanggal", "Nama Staff", "Tipe", "Jenis Item", "Nama Item", "Ukuran",
    "Jumlah", "Satuan", "Catatan / Alasan", "Timestamp"
  ],
  RECIPE_SNAPSHOT: [
    "Tanggal", "Konteks", "Referensi", "Nama Produk", "Ukuran", "Jumlah Produk",
    "Bahan", "Jumlah Keluar", "Satuan", "Versi Resep", "Timestamp"
  ],
  OPENING_BALANCE: ["Tanggal Efektif", "Nama Item", "Jumlah", "Satuan", "Sumber", "Timestamp"],
  STOCK_MOVEMENT: [
    "Tanggal", "Urutan", "Tipe", "Sumber", "Nama Item", "Masuk", "Keluar",
    "Satuan", "Catatan", "Timestamp"
  ],
  CURRENT_STOCK: [
    "Nama Item", "Kategori", "Satuan", "Stok Sistem", "Limit Minimum",
    "Safety Stock", "Status", "Terakhir Diperbarui"
  ],
  OPNAME: [
    "Tanggal", "Nama Staff", "Nama Item", "Stok Sistem Sebelum Opname",
    "Stok Aktual", "Selisih", "Satuan", "Catatan", "Timestamp"
  ],
  AUDIT: ["Tanggal Laporan", "Waktu Submit", "Nama Staff", "Aksi", "Versi Aplikasi", "Catatan"],
  MIGRATION_REVIEW: ["Nama Item", "Jumlah Lama", "Satuan Lama", "Satuan Dasar V4", "Masalah", "Tindakan"],
  MASTER_HPP_MENU: ["Nama Menu", "Ukuran", "HPP per Porsi", "Versi Resep", "Mulai Berlaku", "Akhir Berlaku", "Status", "Catatan"],
  MASTER_PRICE: ["Nama Barang", "Harga Beli", "Satuan Beli", "Isi per Satuan Beli", "Satuan Dasar", "Harga per Satuan Dasar", "Mulai Berlaku", "Akhir Berlaku", "Status", "Catatan"],
  STOCK_IN_HISTORY: ["Tanggal", "Sumber", "Diinput Oleh", "Barang", "Jumlah", "Satuan", "Jumlah ke Stok", "Satuan Stok", "Nilai", "Dampak Stok"],
  FREE_WASTE_HISTORY: ["Tanggal", "Nama Staff", "Tipe", "Jenis Item", "Menu / Barang", "Ukuran", "Jumlah", "Satuan", "Alasan / Catatan", "Timestamp"],
  DASHBOARD: []
});

const ITEM_ALIASES = Object.freeze({
  "beans": "Bubuk Kopi",
  "bubuk kopi": "Bubuk Kopi",
  "kopi bubuk": "Bubuk Kopi",
  "brown sugar": "Brown Sugar",
  "butterscotch": "Butterscotch Syrup",
  "cheese": "Cheese Syrup",
  "caramel": "Caramel Syrup",
  "lemon": "Lemon Syrup",
  "strawberry": "Strawberry Syrup",
  "chocolate": "Chocolate Powder",
  "cocolatte powder": "Chocolate Powder",
  "choco powder": "Chocolate Powder",
  "redvelvet": "Red Velvet Powder",
  "red velved powder": "Red Velvet Powder",
  "matcha": "Matcha Powder",
  "macha powder": "Matcha Powder",
  "simsi": "SimSi",
  "milk base": "Base Milk",
  "base milk": "Base Milk",
  "base coffe": "Base Coffee",
  "base kopi": "Base Coffee",
  "tea": "Base Tea",
  "uht": "Susu UHT",
  "susu uht": "Susu UHT",
  "palm sugar": "Palm Sugar Syrup",
  "palm sugar sirup": "Palm Sugar Syrup",
  "stroberry jam": "Strawberry Jam",
  "stroberry sirup": "Strawberry Syrup"
});

const DEFAULT_STOCK_ITEMS = Object.freeze([
  ["Bahan Kopi", "Espresso", "ml", 0, 0, "Aktif", "ml", 1, "Produk espresso; belum ada proses produksi dari beans di sistem"],
  ["Bahan Kopi", "Bubuk Kopi", "gram", 0, 0, "Aktif", "gram", 1, "Beans/bubuk kopi, sesuai alias sistem"],
  ["Bubuk", "Creamer Bubuk", "gram", 0, 0, "Aktif", "gram", 1, "Bahan base"],
  ["Bahan", "SKM", "ml", 0, 0, "Aktif", "ml", 1, "Bahan minuman/base"],
  ["Bubuk", "Brown Sugar", "gram", 0, 0, "Aktif", "gram", 1, "Bahan Base Coffee dan Palm Sugar"],
  ["Bubuk", "Gula Pasir", "gram", 0, 0, "Aktif", "gram", 1, "Bahan SimSi"],
  ["Bahan", "Susu UHT", "ml", 0, 0, "Aktif", "ml", 0, "Satuan beli/isi perlu disesuaikan melalui Admin"],
  ["Base", "Base Coffee", "ml", 0, 0, "Aktif", "ml", 1, "Diproduksi internal"],
  ["Base", "Base Milk", "ml", 0, 0, "Aktif", "ml", 1, "Diproduksi internal"],
  ["Base", "Base Tea", "ml", 0, 0, "Nonaktif", "ml", 1, "Resep produksi belum tersedia"],
  ["Base", "SimSi", "ml", 0, 0, "Aktif", "ml", 1, "Diproduksi internal"],
  ["Base", "Palm Sugar Syrup", "ml", 0, 0, "Aktif", "ml", 1, "Diproduksi internal"],
  ["Syrup", "Cheese Syrup", "ml", 0, 0, "Aktif", "botol", 1, "Isi botol perlu disesuaikan"],
  ["Syrup", "Butterscotch Syrup", "ml", 0, 0, "Aktif", "botol", 1, "Isi botol perlu disesuaikan"],
  ["Syrup", "Caramel Syrup", "ml", 0, 0, "Aktif", "botol", 1, "Isi botol perlu disesuaikan"],
  ["Syrup", "Tiramisu Syrup", "ml", 0, 0, "Aktif", "botol", 1, "Belum dipakai resep Parama; isi botol perlu disesuaikan"],
  ["Syrup", "Lemon Syrup", "ml", 0, 0, "Aktif", "botol", 1, "Isi botol perlu disesuaikan"],
  ["Syrup", "Lychee Syrup", "ml", 0, 0, "Aktif", "botol", 1, "Isi botol perlu disesuaikan"],
  ["Syrup", "Strawberry Syrup", "ml", 0, 0, "Aktif", "botol", 1, "Belum dipakai resep Parama; isi botol perlu disesuaikan"],
  ["Syrup", "Pistachio Syrup", "ml", 0, 0, "Aktif", "botol", 1, "Isi botol perlu disesuaikan"],
  ["Bahan", "Orange Juice", "ml", 0, 0, "Nonaktif", "ml", 1, "Tidak digunakan pada menu Parama saat ini"],
  ["Jam", "Strawberry Jam", "gram", 0, 0, "Aktif", "gram", 1, ""],
  ["Jam", "Blueberry Jam", "gram", 0, 0, "Aktif", "gram", 1, ""],
  ["Bubuk", "Chocolate Powder", "gram", 0, 0, "Aktif", "gram", 1, ""],
  ["Bubuk", "Red Velvet Powder", "gram", 0, 0, "Aktif", "gram", 1, ""],
  ["Bubuk", "Matcha Powder", "gram", 0, 0, "Aktif", "gram", 1, ""],
  ["Bahan", "Madu", "ml", 0, 0, "Aktif", "ml", 1, "Takaran menu sudah tersedia; satuan beli perlu disesuaikan bila perlu"],
  ["Bahan", "Soda", "ml", 0, 0, "Aktif", "ml", 1, "Isi kemasan perlu disesuaikan"],
  ["Bahan", "Dry Lemon", "pcs", 0, 0, "Aktif", "pcs", 1, "1 pcs per resep sesuai instruksi"],
  ["Bahan", "Lemon Slice", "pcs", 0, 0, "Aktif", "pcs", 1, "1 slice per resep sesuai instruksi"],
  ["Bahan", "Lychee Buah", "pcs", 0, 0, "Aktif", "pcs", 1, "1 pcs per resep sesuai instruksi"],
  ["Kitchen", "Chicken Katsu", "pcs", 0, 0, "Aktif", "pcs", 1, "1 pcs per porsi sesuai instruksi"],
  ["Kitchen", "Chicken Karage", "pcs", 0, 0, "Aktif", "pcs", 1, "Takaran resep belum diberikan"],
  ["Kitchen", "Ayam Filet", "pcs", 0, 0, "Aktif", "pcs", 1, "Takaran resep belum diberikan; satuan dapat disesuaikan"],
  ["Kitchen", "Kentang", "gram", 0, 0, "Aktif", "gram", 1, ""],
  ["Kitchen", "Cireng", "pcs", 0, 0, "Aktif", "pcs", 1, ""],
  ["Kitchen", "Nugget", "pcs", 0, 0, "Aktif", "pcs", 1, ""],
  ["Kitchen", "Sosis", "pcs", 0, 0, "Aktif", "pcs", 1, "Takaran menu belum diberikan"],
  ["Kitchen", "Indomie", "pcs", 0, 0, "Aktif", "pcs", 1, "Takaran menu belum diberikan; satuan dapat disesuaikan"],
  ["Kitchen", "Mie", "pcs", 0, 0, "Aktif", "pcs", 1, "Takaran menu belum diberikan; satuan dapat disesuaikan"],
  ["Kitchen", "Tortilla Chips", "pcs", 0, 0, "Aktif", "pcs", 1, "TAKARAN BELUM DITENTUKAN — perlu diisi"],
  ["Kitchen", "Saus Teriyaki", "ml", 0, 0, "Aktif", "ml", 1, "TAKARAN BELUM DITENTUKAN — perlu diisi"],
  ["Kitchen", "Salted Egg", "gram", 0, 0, "Aktif", "gram", 1, "TAKARAN BELUM DITENTUKAN — perlu diisi"],
  ["Kitchen", "Churros Frozen", "pcs", 0, 0, "Aktif", "pcs", 1, "Takaran resep belum diberikan"],
  ["Kitchen", "Selai Coklat", "gram", 0, 0, "Aktif", "gram", 1, "Takaran resep belum diberikan"],
  ["Kitchen", "Donat Frozen", "pcs", 0, 0, "Aktif", "pcs", 1, "Takaran resep belum diberikan"],
  ["Kitchen", "Gula Halus", "gram", 0, 0, "Aktif", "gram", 1, "Takaran resep belum diberikan"],
  ["Kitchen", "Dancow", "gram", 0, 0, "Aktif", "gram", 1, "Takaran resep belum diberikan"],
  ["Kitchen", "Roti Tawar", "pcs", 0, 0, "Aktif", "pcs", 1, "Takaran resep belum diberikan"],
  ["Kitchen", "Margarin", "gram", 0, 0, "Aktif", "gram", 1, "Takaran resep belum diberikan"],
  ["Kitchen", "Ham", "pcs", 0, 0, "Nonaktif", "pcs", 1, "Tidak dihitung stok sesuai instruksi; dicatat sebagai nonaktif"],
  ["Kitchen", "Cheese Slice", "pcs", 0, 0, "Nonaktif", "pcs", 1, "Tidak dihitung stok sesuai instruksi; dicatat sebagai nonaktif"],
  ["Kitchen", "Tahu", "pcs", 0, 0, "Aktif", "pcs", 1, "Takaran resep belum diberikan"],
  ["Kitchen", "Tahu Walik", "pcs", 0, 0, "Aktif", "pcs", 1, "Takaran resep belum diberikan"],
  ["Kitchen", "Tepung Terigu", "gram", 0, 0, "Aktif", "gram", 1, "Takaran resep belum diberikan"],
  ["Kitchen", "Cabai", "gram", 0, 0, "Aktif", "gram", 1, "Takaran resep belum diberikan"],
  ["Kitchen", "Saus Kecap", "ml", 0, 0, "Aktif", "ml", 1, "Takaran resep belum diberikan"],
  ["Kitchen", "Chicken Wings Frozen", "pcs", 0, 0, "Aktif", "pcs", 1, "Takaran resep belum diberikan"]
]);

const DEFAULT_MENUS = Object.freeze([
  ["Spanish Latte", "", "Kopi & Minuman", "Aktif"],
  ["Vietnam Drip", "", "Kopi & Minuman", "Aktif"],
  ["Latte", "", "Kopi & Minuman", "Aktif"],
  ["Americano", "", "Kopi & Minuman", "Aktif"],
  ["Americano Lemon", "", "Kopi & Minuman", "Aktif"],
  ["Berry Americano", "", "Kopi & Minuman", "Aktif"],
  ["Kopi Susu Gula Aren", "", "Kopi & Minuman", "Aktif"],
  ["Kopsu Kotchio", "", "Kopi & Minuman", "Aktif"],
  ["Kopsu Parama", "", "Kopi & Minuman", "Aktif"],
  ["Kopsu Cosco", "", "Kopi & Minuman", "Aktif"],
  ["Choco Strawberry", "", "Kopi & Minuman", "Aktif"],
  ["Coklat", "", "Kopi & Minuman", "Aktif"],
  ["Rough Velvet", "", "Kopi & Minuman", "Aktif"],
  ["Red Velvet", "", "Kopi & Minuman", "Aktif"],
  ["Matcha Boost", "", "Kopi & Minuman", "Aktif"],
  ["Matcha", "", "Kopi & Minuman", "Aktif"],
  ["Strawberry Matcha", "", "Kopi & Minuman", "Aktif"],
  ["Blueberry Matcha", "", "Kopi & Minuman", "Aktif"],
  ["Lemonade Squash", "", "Kopi & Minuman", "Aktif"],
  ["Lemon Tea", "", "Kopi & Minuman", "Aktif"],
  ["Lychee Tea", "", "Kopi & Minuman", "Aktif"],
  ["Pinky Squash", "", "Kopi & Minuman", "Aktif"],
  ["Nasi Katsu Sambal Matah", "", "Kitchen & Makanan", "Aktif"],
  ["Nasi Katsu Teriyaki", "", "Kitchen & Makanan", "Aktif"],
  ["Nasi Ayam Karage Matah", "", "Kitchen & Makanan", "Nonaktif"],
  ["Nasi Ayam Karage Teriyaki", "", "Kitchen & Makanan", "Nonaktif"],
  ["Nasi Ayam Karage Salted Egg", "", "Kitchen & Makanan", "Nonaktif"],
  ["Indomie Katsu Matah", "", "Kitchen & Makanan", "Nonaktif"],
  ["Indomie Ayam Karage Matah", "", "Kitchen & Makanan", "Nonaktif"],
  ["Chicken Steak", "", "Kitchen & Makanan", "Nonaktif"],
  ["Indomie Karbonara", "", "Kitchen & Makanan", "Nonaktif"],
  ["Indomie Karbonara Katsu", "", "Kitchen & Makanan", "Nonaktif"],
  ["Mix Platter", "", "Kitchen & Makanan", "Nonaktif"],
  ["Cireng", "", "Kitchen & Makanan", "Nonaktif"],
  ["Kentang", "", "Kitchen & Makanan", "Nonaktif"],
  ["Tahu Cabe Garam", "", "Kitchen & Makanan", "Nonaktif"],
  ["Tahu Walik", "", "Kitchen & Makanan", "Nonaktif"],
  ["Spicy Chicken Wings", "", "Kitchen & Makanan", "Nonaktif"],
  ["Churros", "", "Kitchen & Makanan", "Nonaktif"],
  ["Donat", "", "Kitchen & Makanan", "Nonaktif"],
  ["Ham & Cheese", "", "Kitchen & Makanan", "Nonaktif"],
  ["Croissant", "", "Cake & Bakery", "Nonaktif"],
  ["Cheesecake", "", "Cake & Bakery", "Nonaktif"]
]);

const DEFAULT_RECIPES = Object.freeze([
  ["Spanish Latte", "", "Espresso", 20, "ml"],
  ["Spanish Latte", "", "SKM", 25, "ml"],
  ["Vietnam Drip", "", "Bubuk Kopi", 18, "gram"],
  ["Vietnam Drip", "", "SKM", 15, "ml"],
  ["Latte", "", "Espresso", 20, "ml"],
  ["Americano", "", "Espresso", 40, "ml"],
  ["Americano Lemon", "", "Espresso", 40, "ml"],
  ["Americano Lemon", "", "Lemon Syrup", 20, "ml"],
  ["Americano Lemon", "", "SimSi", 7, "ml"],
  ["Americano Lemon", "", "Dry Lemon", 1, "pcs"],
  ["Americano Lemon", "", "Lemon Slice", 1, "pcs"],
  ["Berry Americano", "", "Espresso", 40, "ml"],
  ["Berry Americano", "", "Blueberry Jam", 15, "gram"],
  ["Berry Americano", "", "Madu", 7, "ml"],
  ["Kopi Susu Gula Aren", "", "Base Coffee", 140, "ml"],
  ["Kopi Susu Gula Aren", "", "Palm Sugar Syrup", 10, "ml"],
  ["Kopsu Kotchio", "", "Base Coffee", 140, "ml"],
  ["Kopsu Kotchio", "", "Pistachio Syrup", 7, "ml"],
  ["Kopsu Parama", "", "Base Coffee", 140, "ml"],
  ["Kopsu Parama", "", "Cheese Syrup", 7, "ml"],
  ["Kopsu Cosco", "", "Base Coffee", 140, "ml"],
  ["Kopsu Cosco", "", "Butterscotch Syrup", 7, "ml"],
  ["Choco Strawberry", "", "Base Milk", 140, "ml"],
  ["Choco Strawberry", "", "Chocolate Powder", 15, "gram"],
  ["Choco Strawberry", "", "Strawberry Jam", 20, "gram"],
  ["Coklat", "", "Base Milk", 140, "ml"],
  ["Coklat", "", "Chocolate Powder", 15, "gram"],
  ["Rough Velvet", "", "Espresso", 40, "ml"],
  ["Rough Velvet", "", "Base Milk", 140, "ml"],
  ["Rough Velvet", "", "Red Velvet Powder", 15, "gram"],
  ["Red Velvet", "", "Base Milk", 140, "ml"],
  ["Red Velvet", "", "Red Velvet Powder", 15, "gram"],
  ["Matcha Boost", "", "Espresso", 40, "ml"],
  ["Matcha Boost", "", "Base Milk", 140, "ml"],
  ["Matcha Boost", "", "Matcha Powder", 20, "gram"],
  ["Matcha", "", "Base Milk", 140, "ml"],
  ["Matcha", "", "Matcha Powder", 20, "gram"],
  ["Strawberry Matcha", "", "Susu UHT", 140, "ml"],
  ["Strawberry Matcha", "", "Strawberry Jam", 20, "gram"],
  ["Blueberry Matcha", "", "Base Milk", 140, "ml"],
  ["Blueberry Matcha", "", "Matcha Powder", 20, "gram"],
  ["Blueberry Matcha", "", "Blueberry Jam", 20, "gram"],
  ["Lemonade Squash", "", "Lemon Syrup", 20, "ml"],
  ["Lemonade Squash", "", "SimSi", 10, "ml"],
  ["Lemonade Squash", "", "Soda", 150, "ml"],
  ["Lemonade Squash", "", "Lemon Slice", 1, "pcs"],
  ["Lemon Tea", "", "Lemon Syrup", 20, "ml"],
  ["Lemon Tea", "", "SimSi", 10, "ml"],
  ["Lemon Tea", "", "Lemon Slice", 1, "pcs"],
  ["Lychee Tea", "", "Lychee Syrup", 20, "ml"],
  ["Lychee Tea", "", "SimSi", 10, "ml"],
  ["Lychee Tea", "", "Lychee Buah", 1, "pcs"],
  ["Pinky Squash", "", "Lemon Syrup", 10, "ml"],
  ["Pinky Squash", "", "SimSi", 7, "ml"],
  ["Pinky Squash", "", "Soda", 150, "ml"],
  ["Pinky Squash", "", "Lemon Slice", 1, "pcs"],
  ["Pinky Squash", "", "Strawberry Jam", 20, "gram"],
  ["Nasi Katsu Sambal Matah", "", "Chicken Katsu", 1, "pcs"],
  ["Nasi Katsu Teriyaki", "", "Chicken Katsu", 1, "pcs"]
]);

const DEFAULT_BASE_RECIPES = Object.freeze([
  ["Base Coffee", "Espresso", 250, "ml", 1540, "v1", "2026-01-01", "", "Aktif", "Ya"],
  ["Base Coffee", "Creamer Bubuk", 140, "gram", 1540, "v1", "2026-01-01", "", "Aktif", "Ya"],
  ["Base Coffee", "SKM", 100, "ml", 1540, "v1", "2026-01-01", "", "Aktif", "Ya"],
  ["Base Coffee", "Brown Sugar", 50, "gram", 1540, "v1", "2026-01-01", "", "Aktif", "Ya"],
  ["Base Coffee", "Susu UHT", 1000, "ml", 1540, "v1", "2026-01-01", "", "Aktif", "Ya"],
  ["Base Milk", "Creamer Bubuk", 140, "gram", 1415, "v1", "2026-01-01", "", "Aktif", "Ya"],
  ["Base Milk", "SKM", 100, "ml", 1415, "v1", "2026-01-01", "", "Aktif", "Ya"],
  ["Base Milk", "SimSi", 25, "ml", 1415, "v1", "2026-01-01", "", "Aktif", "Ya"],
  ["Base Milk", "Susu UHT", 1000, "ml", 1415, "v1", "2026-01-01", "", "Aktif", "Ya"],
  ["SimSi", "Gula Pasir", 500, "gram", 1000, "v1", "2026-01-01", "", "Aktif", "Ya"],
  ["Palm Sugar Syrup", "Brown Sugar", 500, "gram", 1000, "v1", "2026-01-01", "", "Aktif", "Ya"],
  ["Base Tea", "", 0, "ml", 0, "v1", "2026-01-01", "", "Aktif", "Tidak"]
]);

const DEFAULT_HPP_MENU_PARAMA = Object.freeze([
  ["Spanish Latte", "", 7500, "v1", "2026-01-01", "", "Aktif", ""],
  ["Vietnam Drip", "", 6000, "v1", "2026-01-01", "", "Aktif", ""],
  ["Latte", "", 5500, "v1", "2026-01-01", "", "Aktif", ""],
  ["Americano", "", 4000, "v1", "2026-01-01", "", "Aktif", ""],
  ["Americano Lemon", "", 8100, "v1", "2026-01-01", "", "Aktif", ""],
  ["Berry Americano", "", 6300, "v1", "2026-01-01", "", "Aktif", ""],
  ["Kopi Susu Gula Aren", "", 6500, "v1", "2026-01-01", "", "Aktif", ""],
  ["Kopsu Kotchio", "", 7000, "v1", "2026-01-01", "", "Aktif", ""],
  ["Kopsu Parama", "", 7000, "v1", "2026-01-01", "", "Aktif", ""],
  ["Kopsu Cosco", "", 7000, "v1", "2026-01-01", "", "Aktif", ""],
  ["Choco Strawberry", "", 7500, "v1", "2026-01-01", "", "Aktif", ""],
  ["Coklat", "", 5000, "v1", "2026-01-01", "", "Aktif", ""],
  ["Rough Velvet", "", 8500, "v1", "2026-01-01", "", "Aktif", ""],
  ["Red Velvet", "", 5000, "v1", "2026-01-01", "", "Aktif", ""],
  ["Matcha Boost", "", 9940, "v1", "2026-01-01", "", "Aktif", ""],
  ["Matcha", "", 6000, "v1", "2026-01-01", "", "Aktif", ""],
  ["Strawberry Matcha", "", 8440, "v1", "2026-01-01", "", "Aktif", ""],
  ["Blueberry Matcha", "", 9500, "v1", "2026-01-01", "", "Aktif", ""],
  ["Lemonade Squash", "", 5500, "v1", "2026-01-01", "", "Aktif", ""],
  ["Lemon Tea", "", 4000, "v1", "2026-01-01", "", "Aktif", ""],
  ["Lychee Tea", "", 6000, "v1", "2026-01-01", "", "Aktif", ""],
  ["Pinky Squash", "", 7000, "v1", "2026-01-01", "", "Aktif", ""],
  ["Nasi Katsu Sambal Matah", "", 9000, "v1", "2026-01-01", "", "Aktif", ""],
  ["Nasi Katsu Teriyaki", "", 8500, "v1", "2026-01-01", "", "Aktif", ""],
  ["Nasi Ayam Karage Matah", "", 10000, "v1", "2026-01-01", "", "Aktif", ""],
  ["Nasi Ayam Karage Teriyaki", "", 9000, "v1", "2026-01-01", "", "Aktif", ""],
  ["Nasi Ayam Karage Salted Egg", "", 10000, "v1", "2026-01-01", "", "Aktif", ""],
  ["Indomie Katsu Matah", "", 8000, "v1", "2026-01-01", "", "Aktif", ""],
  ["Indomie Ayam Karage Matah", "", 8500, "v1", "2026-01-01", "", "Aktif", ""],
  ["Chicken Steak", "", 14000, "v1", "2026-01-01", "", "Aktif", ""],
  ["Indomie Karbonara", "", 8000, "v1", "2026-01-01", "", "Aktif", ""],
  ["Indomie Karbonara Katsu", "", 12000, "v1", "2026-01-01", "", "Aktif", ""],
  ["Mix Platter", "", 13000, "v1", "2026-01-01", "", "Aktif", ""],
  ["Cireng", "", 3500, "v1", "2026-01-01", "", "Aktif", ""],
  ["Kentang", "", 5000, "v1", "2026-01-01", "", "Aktif", ""],
  ["Tahu Cabe Garam", "", 5000, "v1", "2026-01-01", "", "Aktif", ""],
  ["Tahu Walik", "", 5000, "v1", "2026-01-01", "", "Aktif", ""],
  ["Spicy Chicken Wings", "", 9000, "v1", "2026-01-01", "", "Aktif", ""],
  ["Churros", "", 4000, "v1", "2026-01-01", "", "Aktif", ""],
  ["Donat", "", 5500, "v1", "2026-01-01", "", "Aktif", ""],
  ["Ham & Cheese", "", 8000, "v1", "2026-01-01", "", "Aktif", ""],
  ["Croissant", "", 18500, "v1", "2026-01-01", "", "Aktif", ""],
  ["Cheesecake", "", 15000, "v1", "2026-01-01", "", "Aktif", ""]
]);

const DEFAULT_SALES_PRICES_PARAMA = Object.freeze([
  ["Spanish Latte", 22000, "", "1", "", "", "2026-01-01", "", "Aktif", "Harga jual Parama"],
  ["Vietnam Drip", 20000, "", "1", "", "", "2026-01-01", "", "Aktif", "Harga jual Parama"],
  ["Latte", 20000, "", "1", "", "", "2026-01-01", "", "Aktif", "Harga jual Parama"],
  ["Americano", 18000, "", "1", "", "", "2026-01-01", "", "Aktif", "Harga jual Parama"],
  ["Americano Lemon", 23000, "", "1", "", "", "2026-01-01", "", "Aktif", "Harga jual Parama"],
  ["Berry Americano", 22000, "", "1", "", "", "2026-01-01", "", "Aktif", "Harga jual Parama"],
  ["Kopi Susu Gula Aren", 18000, "", "1", "", "", "2026-01-01", "", "Aktif", "Harga jual Parama"],
  ["Kopsu Kotchio", 20000, "", "1", "", "", "2026-01-01", "", "Aktif", "Harga jual Parama"],
  ["Kopsu Parama", 20000, "", "1", "", "", "2026-01-01", "", "Aktif", "Harga jual Parama"],
  ["Kopsu Cosco", 20000, "", "1", "", "", "2026-01-01", "", "Aktif", "Harga jual Parama"],
  ["Choco Strawberry", 22000, "", "1", "", "", "2026-01-01", "", "Aktif", "Harga jual Parama"],
  ["Coklat", 19000, "", "1", "", "", "2026-01-01", "", "Aktif", "Harga jual Parama"],
  ["Rough Velvet", 23000, "", "1", "", "", "2026-01-01", "", "Aktif", "Harga jual Parama"],
  ["Red Velvet", 19000, "", "1", "", "", "2026-01-01", "", "Aktif", "Harga jual Parama"],
  ["Matcha Boost", 23000, "", "1", "", "", "2026-01-01", "", "Aktif", "Harga jual Parama"],
  ["Matcha", 20000, "", "1", "", "", "2026-01-01", "", "Aktif", "Harga jual Parama"],
  ["Strawberry Matcha", 22000, "", "1", "", "", "2026-01-01", "", "Aktif", "Harga jual Parama"],
  ["Blueberry Matcha", 24000, "", "1", "", "", "2026-01-01", "", "Aktif", "Harga jual Parama"],
  ["Lemonade Squash", 19000, "", "1", "", "", "2026-01-01", "", "Aktif", "Harga jual Parama"],
  ["Lemon Tea", 17000, "", "1", "", "", "2026-01-01", "", "Aktif", "Harga jual Parama"],
  ["Lychee Tea", 19000, "", "1", "", "", "2026-01-01", "", "Aktif", "Harga jual Parama"],
  ["Pinky Squash", 19000, "", "1", "", "", "2026-01-01", "", "Aktif", "Harga jual Parama"],
  ["Nasi Katsu Sambal Matah", 25000, "", "1", "", "", "2026-01-01", "", "Aktif", "Harga jual Parama"],
  ["Nasi Katsu Teriyaki", 23000, "", "1", "", "", "2026-01-01", "", "Aktif", "Harga jual Parama"],
  ["Nasi Ayam Karage Matah", 25000, "", "1", "", "", "2026-01-01", "", "Aktif", "Harga jual Parama"],
  ["Nasi Ayam Karage Teriyaki", 23000, "", "1", "", "", "2026-01-01", "", "Aktif", "Harga jual Parama"],
  ["Nasi Ayam Karage Salted Egg", 23000, "", "1", "", "", "2026-01-01", "", "Aktif", "Harga jual Parama"],
  ["Indomie Katsu Matah", 20000, "", "1", "", "", "2026-01-01", "", "Aktif", "Harga jual Parama"],
  ["Indomie Ayam Karage Matah", 20000, "", "1", "", "", "2026-01-01", "", "Aktif", "Harga jual Parama"],
  ["Chicken Steak", 29000, "", "1", "", "", "2026-01-01", "", "Aktif", "Harga jual Parama"],
  ["Indomie Karbonara", 18000, "", "1", "", "", "2026-01-01", "", "Aktif", "Harga jual Parama"],
  ["Indomie Karbonara Katsu", 24000, "", "1", "", "", "2026-01-01", "", "Aktif", "Harga jual Parama"],
  ["Mix Platter", 28000, "", "1", "", "", "2026-01-01", "", "Aktif", "Harga jual Parama"],
  ["Cireng", 15000, "", "1", "", "", "2026-01-01", "", "Aktif", "Harga jual Parama"],
  ["Kentang", 17000, "", "1", "", "", "2026-01-01", "", "Aktif", "Harga jual Parama"],
  ["Tahu Cabe Garam", 15000, "", "1", "", "", "2026-01-01", "", "Aktif", "Harga jual Parama"],
  ["Tahu Walik", 17000, "", "1", "", "", "2026-01-01", "", "Aktif", "Harga jual Parama"],
  ["Spicy Chicken Wings", 22000, "", "1", "", "", "2026-01-01", "", "Aktif", "Harga jual Parama"],
  ["Churros", 15000, "", "1", "", "", "2026-01-01", "", "Aktif", "Harga jual Parama"],
  ["Donat", 15000, "", "1", "", "", "2026-01-01", "", "Aktif", "Harga jual Parama"],
  ["Ham & Cheese", 19000, "", "1", "", "", "2026-01-01", "", "Aktif", "Harga jual Parama"],
  ["Croissant", 25000, "", "1", "", "", "2026-01-01", "", "Aktif", "Harga jual Parama"],
  ["Cheesecake", 25000, "", "1", "", "", "2026-01-01", "", "Aktif", "Harga jual Parama"]
]);

function setupParamaV439() {
  const result = setupSantaraV4();
  const ss = getRuntimeSpreadsheet_();
  seedParamaPricing_(ss);
  clearSantaraCache_();
  rebuildAllStock_(ss);
  refreshDashboard_(ss);
  formatAllSheets_(ss);
  SpreadsheetApp.flush();
  return { success: true, version: SANTARA_V4.VERSION, message: "Parama V4.3.9 siap. Master menu, resep, HPP, dan harga jual Parama sudah di-seed." };
}

function seedParamaPricing_(ss) {
  const hppSheet = ss.getSheetByName(SANTARA_V4.SHEETS.MASTER_HPP_MENU);
  if (hppSheet && hppSheet.getLastRow() < 2) {
    hppSheet.getRange(2, 1, DEFAULT_HPP_MENU_PARAMA.length, V4_HEADERS.MASTER_HPP_MENU.length).setValues(DEFAULT_HPP_MENU_PARAMA);
  } else if (hppSheet && hppSheet.getLastRow() >= 2) {
    // Preserve existing rows; seed only missing menu+size keys.
    mergeRowsByKey_(hppSheet, V4_HEADERS.MASTER_HPP_MENU, DEFAULT_HPP_MENU_PARAMA, function(r) { return normalizeKey_(r[0]) + "|" + normalizeKey_(r[1]) + "|" + normalizeKey_(r[3]); });
  }
  let priceSheet = ss.getSheetByName("Master_Harga_Jual");
  if (!priceSheet) priceSheet = ss.insertSheet("Master_Harga_Jual");
  const headers = ["Nama Menu","Harga Jual","Ukuran","Isi Satuan","Satuan","Harga Referensi","Mulai Berlaku","Akhir Berlaku","Status","Catatan"];
  if (priceSheet.getLastRow() < 1) priceSheet.getRange(1,1,1,headers.length).setValues([headers]);
  if (priceSheet.getLastRow() < 2) priceSheet.getRange(2,1,DEFAULT_SALES_PRICES_PARAMA.length,headers.length).setValues(DEFAULT_SALES_PRICES_PARAMA);
  priceSheet.getRange(2,2,Math.max(priceSheet.getMaxRows()-1,1),1).setNumberFormat('Rp #,##0;[Red]-Rp #,##0;-');
  priceSheet.getRange(2,7,Math.max(priceSheet.getMaxRows()-1,1),2).setNumberFormat("dd mmmm yyyy");
}

function doGet() {
  return HtmlService.createHtmlOutputFromFile("Index")
    .setTitle("Parama")
    .setXFrameOptionsMode(HtmlService.XFrameOptionsMode.ALLOWALL);
}

function onOpen() {
  SpreadsheetApp.getUi()
    .createMenu("Parama V4")
    .addItem("Setup Parama V4.3.9", "setupParamaV439")
    .addItem("Upgrade Aman ke Parama V4.3.9", "upgradeSantaraV439")
    .addItem("Setup Baru / Migrasi ke V4", "setupSantaraV4")
    .addItem("Perbarui Dashboard", "refreshDashboard")
    .addItem("Bangun Ulang Stok", "rebuildStockNow")
    .addItem("Rapikan & Susun Semua Sheet", "formatSantaraV4")
    .addItem("Segarkan Cache", "refreshSantaraCache")
    .addToUi();
}

function upgradeSantaraV439() {
  const ss = SpreadsheetApp.getActiveSpreadsheet();
  const lock = LockService.getScriptLock();
  lock.waitLock(30000);
  try {
    ss.setSpreadsheetTimeZone(SANTARA_V4.TIME_ZONE);
    ss.setSpreadsheetLocale(SANTARA_V4.LOCALE);
    ensureAllV4Sheets_(ss, false);
    ensureAdminPin_();
    rememberRuntimeSpreadsheet_(ss);
    refreshCurrentStockDisplay_(ss);
    rebuildVisibleHistories_(ss);
    refreshDashboard_(ss);
    clearDashboardRefreshPending_();
    ensureDashboardRefreshTrigger_();
    organizeSheetTabs_(ss);
    clearSantaraCache_();
    SpreadsheetApp.flush();
    return "Upgrade Parama V4.3.9 selesai. Draft laporan harian kini tersimpan otomatis di perangkat, menu terjual dapat dipilih di Free/Waste, dan seluruh proses server pada Admin Panel memiliki loading serta perlindungan klik berulang. Data, rumus stok, HPP, Dashboard, dan fitur stabil V4.3.8 tetap dipertahankan.";
  } finally {
    lock.releaseLock();
  }
}

function upgradeSantaraV438() {
  return upgradeSantaraV439();
}

function upgradeSantaraV437() {
  return upgradeSantaraV439();
}

function upgradeSantaraV436() {
  return upgradeSantaraV439();
}

function upgradeSantaraV435() {
  return upgradeSantaraV439();
}

function upgradeSantaraV434() {
  return upgradeSantaraV439();
}

function upgradeSantaraV433() {
  return upgradeSantaraV439();
}

function upgradeSantaraV432() {
  return upgradeSantaraV434();
}

function upgradeSantaraV431() {
  return upgradeSantaraV434();
}

function upgradeSantaraV425() {
  return upgradeSantaraV434();
}

function upgradeSantaraV424() {
  return upgradeSantaraV434();
}

function upgradeSantaraV423() {
  return upgradeSantaraV434();
}

function upgradeSantaraV422() {
  return upgradeSantaraV434();
}

function upgradeSantaraV421() {
  return upgradeSantaraV434();
}

function upgradeSantaraV42() {
  return upgradeSantaraV434();
}

function setupSantaraV4() {
  const ss = SpreadsheetApp.getActiveSpreadsheet();
  const lock = LockService.getScriptLock();
  lock.waitLock(30000);
  try {
    ss.setSpreadsheetTimeZone(SANTARA_V4.TIME_ZONE);
    ss.setSpreadsheetLocale(SANTARA_V4.LOCALE);

    const props = PropertiesService.getScriptProperties();
    const alreadyMigrated = props.getProperty(SANTARA_V4.PROPERTY_MIGRATED) === "yes";
    let migrationSummary = null;

    if (!alreadyMigrated) {
      migrationSummary = migrateV3ToV4_(ss);
      props.setProperty(SANTARA_V4.PROPERTY_MIGRATED, "yes");
    }

    ensureAllV4Sheets_(ss);
    ensureAdminPin_();
    seedMasterData_(ss);
    ensureConversionRows_(ss);
    validateMasterRecipes_(ss);
    rebuildAllStock_(ss);
    refreshDashboard_(ss);
    formatAllSheets_(ss);
    clearSantaraCache_();
    SpreadsheetApp.flush();

    return {
      success: true,
      version: SANTARA_V4.VERSION,
      message: "Parama V4 sudah siap.",
      migration: migrationSummary
    };
  } finally {
    lock.releaseLock();
  }
}

function getInitialData() {
  const ss = getRuntimeSpreadsheet_();
  const master = getCachedMasterData_(ss);
  const actualToday = formatDateId_(new Date());
  const activationDate = getActivationDate_();
  const today = actualToday < activationDate ? activationDate : actualToday;
  return {
    version: SANTARA_V4.VERSION,
    today: today,
    activationDate: activationDate,
    staff: master.staff,
    units: master.units,
    stockItems: master.stockItems,
    menuOptions: master.menuOptions,
    baseTypes: getStaffBaseTypes_(ss),
    currentStock: getCurrentStock_(ss),
    report: getDailyReportByDate_(ss, today),
    opname: getOpnameByDate_(ss, today)
  };
}

function getDailyReportByDate(dateString) {
  return getDailyReportByDate_(getRuntimeSpreadsheet_(), normalizeDateString_(dateString));
}

function getStockOpnameByDate(dateString) {
  return getOpnameByDate_(getRuntimeSpreadsheet_(), normalizeDateString_(dateString));
}

function submitDailyReport(payload) {
  const ss = getRuntimeSpreadsheet_();
  const lock = LockService.getScriptLock();
  lock.waitLock(30000);
  try {
    const clean = validateDailyPayload_(ss, payload);
    const reportSheet = ss.getSheetByName(SANTARA_V4.SHEETS.REPORT);
    const existingRow = findDateRow_(reportSheet, clean.date);

    if (existingRow && !clean.replaceExisting) {
      return {
        success: false,
        requiresConfirmation: true,
        existingStaff: String(reportSheet.getRange(existingRow, 2).getDisplayValue() || ""),
        message: "Laporan tanggal ini sudah ada. Data lama akan diganti dengan data terbaru."
      };
    }

    const now = new Date();
    const createdAt = existingRow ? reportSheet.getRange(existingRow, 18).getValue() || now : now;
    const reportRow = [[
      parseDateId_(clean.date), clean.staff, clean.startTill,
      clean.sales.cash, clean.sales.transfer, clean.sales.qris, clean.sales.shopee,
      clean.sales.grab, clean.sales.debit, clean.totalSales, clean.totalOrder,
      clean.totalItemsSold, clean.totalExpense, clean.expectedCash, clean.actualCash,
      clean.cashDifference, "V" + SANTARA_V4.VERSION, createdAt, now
    ]];

    if (existingRow) {
      reportSheet.getRange(existingRow, 1, 1, V4_HEADERS.REPORT.length).setValues(reportRow);
    } else {
      reportSheet.getRange(reportSheet.getLastRow() + 1, 1, 1, V4_HEADERS.REPORT.length).setValues(reportRow);
    }

    replaceRowsByDate_(ss.getSheetByName(SANTARA_V4.SHEETS.MENU_SOLD), clean.date,
      clean.menuSold.map(function(item) {
        return [parseDateId_(clean.date), clean.staff, item.menu, item.size, item.quantity, item.recipeVersion, now];
      }), V4_HEADERS.MENU_SOLD.length);

    replaceRowsByDate_(ss.getSheetByName(SANTARA_V4.SHEETS.EXPENSE), clean.date,
      clean.expenses.map(function(item) {
        return [parseDateId_(clean.date), clean.staff, item.name, item.quantity, item.unit,
          item.unitPrice, item.subtotal, item.note, now];
      }), V4_HEADERS.EXPENSE.length);

    replaceRowsByDate_(ss.getSheetByName(SANTARA_V4.SHEETS.BASE), clean.date,
      clean.baseReport.map(function(item) {
        return [parseDateId_(clean.date), clean.staff, item.type, item.opening, item.produced,
          item.closing, item.used, item.standardOutput, item.recipeVersion, now];
      }), V4_HEADERS.BASE.length);

    const fwRows = [];
    clean.freeWaste.forEach(function(item) {
      fwRows.push([parseDateId_(clean.date), clean.staff, item.type, item.itemType,
        item.name, item.size, item.quantity, item.unit, item.note, now]);
    });
    replaceRowsByDate_(ss.getSheetByName(SANTARA_V4.SHEETS.FREE_WASTE), clean.date,
      fwRows, V4_HEADERS.FREE_WASTE.length);

    const snapshotRows = buildRecipeSnapshots_(ss, clean, now);
    replaceRowsByDate_(ss.getSheetByName(SANTARA_V4.SHEETS.RECIPE_SNAPSHOT), clean.date,
      snapshotRows, V4_HEADERS.RECIPE_SNAPSHOT.length);

    appendAudit_(ss, clean.date, clean.staff, existingRow ? "REVISI" : "BARU", "Laporan harian");
    sortDailySheets_(ss);
    rebuildAllStock_(ss);
    rebuildVisibleHistories_(ss);
    markDashboardRefreshPending_(ss, "LAPORAN_HARIAN");
    clearSantaraCache_();
    SpreadsheetApp.flush();

    return {
      success: true,
      replaced: Boolean(existingRow),
      date: clean.date,
      dateLabel: formatDateLabel_(parseDateId_(clean.date)),
      totalSales: clean.totalSales,
      totalExpense: clean.totalExpense,
      expectedCash: clean.expectedCash,
      actualCash: clean.actualCash,
      cashDifference: clean.cashDifference,
      totalItemsSold: clean.totalItemsSold,
      dashboardRefreshRequired: true,
      warning: ""
    };
  } finally {
    lock.releaseLock();
  }
}

function submitStockOpname(payload) {
  const ss = getRuntimeSpreadsheet_();
  const lock = LockService.getScriptLock();
  lock.waitLock(30000);
  try {
    const clean = validateOpnamePayload_(ss, payload);
    const historySheet = ss.getSheetByName(SANTARA_V4.SHEETS.OPNAME_HISTORY);
    const existing = readRowsByDate_(historySheet, clean.date);
    if (existing.length && !clean.replaceExisting) {
      return {
        success: false,
        requiresConfirmation: true,
        existingStaff: String(existing[0][1] || ""),
        message: "Stock opname pada tanggal ini sudah ada dan akan diperbarui."
      };
    }

    const beforeMap = getCurrentStockMap_(ss);
    const now = new Date();
    const rows = clean.items.map(function(item) {
      const before = beforeMap.has(normalizeKey_(item.name)) ? beforeMap.get(normalizeKey_(item.name)).stock : 0;
      return [parseDateId_(clean.date), clean.staff, item.name, before, item.actual,
        item.actual - before, item.unit, item.note, now];
    });

    replaceRowsByDate_(historySheet, clean.date, rows, V4_HEADERS.OPNAME.length);
    appendAudit_(ss, clean.date, clean.staff, existing.length ? "REVISI OPNAME" : "OPNAME BARU", "Stock opname mingguan");
    rebuildAllStock_(ss);
    markDashboardRefreshPending_(ss, "STOCK_OPNAME");
    clearSantaraCache_();
    SpreadsheetApp.flush();

    return {
      success: true,
      replaced: Boolean(existing.length),
      date: clean.date,
      dateLabel: formatDateLabel_(parseDateId_(clean.date)),
      itemCount: rows.length,
      dashboardRefreshRequired: true
    };
  } finally {
    lock.releaseLock();
  }
}

function refreshDashboard() {
  const ss = getRuntimeSpreadsheet_();
  rememberRuntimeSpreadsheet_(ss);
  rebuildAllStock_(ss);
  rebuildVisibleHistories_(ss);
  refreshDashboard_(ss);
  clearDashboardRefreshPending_();
  formatAllSheets_(ss);
  SpreadsheetApp.flush();
  return "Dashboard Parama V4.3.9 berhasil diperbarui.";
}

function refreshDashboardAfterSubmit() {
  const ss = getRuntimeSpreadsheet_();
  const lock = LockService.getScriptLock();
  lock.waitLock(30000);
  try {
    rememberRuntimeSpreadsheet_(ss);
    refreshDashboard_(ss);
    clearDashboardRefreshPending_();
    SpreadsheetApp.flush();
    return { success: true };
  } catch (error) {
    markDashboardRefreshPending_(ss, "RETRY_SETELAH_SUBMIT", error);
    throw error;
  } finally {
    lock.releaseLock();
  }
}

function processPendingDashboardRefresh() {
  const props = PropertiesService.getScriptProperties();
  if (props.getProperty(SANTARA_V4.PROPERTY_DASHBOARD_PENDING) !== "yes") return;

  const lock = LockService.getScriptLock();
  if (!lock.tryLock(1000)) return;
  try {
    props.setProperty(SANTARA_V4.PROPERTY_DASHBOARD_STATUS, "RUNNING");
    props.setProperty(SANTARA_V4.PROPERTY_DASHBOARD_LAST_ATTEMPT, timestampId_());

    const spreadsheetId = props.getProperty(SANTARA_V4.PROPERTY_SPREADSHEET_ID);
    if (!spreadsheetId) throw new Error("ID spreadsheet untuk worker Dashboard belum tersimpan. Jalankan upgradeSantaraV439 satu kali.");

    const ss = SpreadsheetApp.openById(spreadsheetId);
    refreshDashboard_(ss);
    SpreadsheetApp.flush();
    clearDashboardRefreshPending_();
  } catch (error) {
    props.setProperty(SANTARA_V4.PROPERTY_DASHBOARD_PENDING, "yes");
    props.setProperty(SANTARA_V4.PROPERTY_DASHBOARD_STATUS, "ERROR");
    props.setProperty(SANTARA_V4.PROPERTY_DASHBOARD_LAST_ERROR, String(error && error.message || error));
    console.error("Refresh Dashboard otomatis gagal: " + String(error && error.stack || error));
  } finally {
    lock.releaseLock();
  }
}

function ensureDashboardRefreshTrigger_() {
  const handler = SANTARA_V4.DASHBOARD_TRIGGER_HANDLER;
  const matches = ScriptApp.getProjectTriggers().filter(function(trigger) {
    return trigger.getHandlerFunction() === handler;
  });

  matches.slice(1).forEach(function(trigger) { ScriptApp.deleteTrigger(trigger); });
  if (!matches.length) {
    ScriptApp.newTrigger(handler).timeBased().everyMinutes(1).create();
  }
}

function rememberRuntimeSpreadsheet_(ss) {
  if (!ss) return;
  PropertiesService.getScriptProperties().setProperty(SANTARA_V4.PROPERTY_SPREADSHEET_ID, ss.getId());
}

function markDashboardRefreshPending_(ss, source, error) {
  rememberRuntimeSpreadsheet_(ss);
  const props = PropertiesService.getScriptProperties();
  props.setProperty(SANTARA_V4.PROPERTY_DASHBOARD_PENDING, "yes");
  props.setProperty(SANTARA_V4.PROPERTY_DASHBOARD_STATUS, "PENDING");
  props.setProperty(SANTARA_V4.PROPERTY_DASHBOARD_REQUESTED_AT, timestampId_());
  if (source) props.setProperty("SANTARA_V4_DASHBOARD_REFRESH_SOURCE", String(source));
  if (error) props.setProperty(SANTARA_V4.PROPERTY_DASHBOARD_LAST_ERROR, String(error && error.message || error));
}

function clearDashboardRefreshPending_() {
  const props = PropertiesService.getScriptProperties();
  props.setProperty(SANTARA_V4.PROPERTY_DASHBOARD_PENDING, "no");
  props.setProperty(SANTARA_V4.PROPERTY_DASHBOARD_STATUS, "SUCCESS");
  props.setProperty(SANTARA_V4.PROPERTY_DASHBOARD_LAST_SUCCESS, timestampId_());
  props.deleteProperty(SANTARA_V4.PROPERTY_DASHBOARD_LAST_ERROR);
}

function timestampId_() {
  return Utilities.formatDate(new Date(), SANTARA_V4.TIME_ZONE, "yyyy-MM-dd HH:mm:ss");
}

function rebuildStockNow() {
  const ss = getRuntimeSpreadsheet_();
  rebuildAllStock_(ss);
  refreshDashboard_(ss);
  formatAllSheets_(ss);
  SpreadsheetApp.flush();
  return "Stok sistem berhasil dibangun ulang dan tampilan spreadsheet sudah dirapikan.";
}

function formatSantaraV4() {
  const ss = getRuntimeSpreadsheet_();
  refreshDashboard_(ss);
  formatAllSheets_(ss);
  SpreadsheetApp.flush();
  return "Semua sheet Parama V4 sudah dirapikan, diberi warna, disusun, dan sheet teknis disembunyikan.";
}

function refreshSantaraCache() {
  clearSantaraCache_();
  getCachedMasterData_(getRuntimeSpreadsheet_());
  return "Cache Parama V4 sudah diperbarui.";
}

function onEdit(e) {
  if (!e || !e.range) return;
  const name = e.range.getSheet().getName();
  if ([
    SANTARA_V4.SHEETS.MASTER_STAFF,
    SANTARA_V4.SHEETS.MASTER_UNIT,
    SANTARA_V4.SHEETS.MASTER_STOCK,
    SANTARA_V4.SHEETS.MASTER_MENU,
    SANTARA_V4.SHEETS.MASTER_RECIPE,
    SANTARA_V4.SHEETS.MASTER_BASE_RECIPE,
    SANTARA_V4.SHEETS.MASTER_CONVERSION
  ].indexOf(name) !== -1) clearSantaraCache_();
}

function migrateV3ToV4_(ss) {
  const legacyStock = captureLegacyStock_(ss);
  const legacyBase = captureLegacyBase_(ss);
  const legacyReports = captureLegacyReports_(ss);
  backupLegacySheets_(ss);
  ensureAllV4Sheets_(ss, true);
  migrateExistingMasterStock_(ss);
  seedMasterData_(ss);
  ensureConversionRows_(ss);
  migrateLegacyReports_(ss, legacyReports);
  const openingResult = initializeOpeningBalance_(ss, legacyStock, legacyBase, legacyReports);
  return {
    legacyReports: legacyReports.length,
    openingBalances: openingResult.migrated,
    reviewItems: openingResult.review
  };
}

function backupLegacySheets_(ss) {
  const stamp = Utilities.formatDate(new Date(), SANTARA_V4.TIME_ZONE, "yyyyMMdd_HHmmss");
  SANTARA_V4.LEGACY_SHEETS.forEach(function(name) {
    const sheet = ss.getSheetByName(name);
    if (!sheet) return;
    const backupName = uniqueSheetName_(ss, "ARSIP_V3_" + name + "_" + stamp);
    sheet.copyTo(ss).setName(backupName).hideSheet();
  });
}

function captureLegacyReports_(ss) {
  const sheet = ss.getSheetByName("Laporan_Closing");
  if (!sheet || sheet.getLastRow() < 2) return [];
  const headers = sheet.getRange(1, 1, 1, sheet.getLastColumn()).getDisplayValues()[0]
    .map(function(v) { return String(v || "").trim(); });
  const values = sheet.getRange(2, 1, sheet.getLastRow() - 1, sheet.getLastColumn()).getValues();
  return values.map(function(row) {
    const get = function(name, fallback) {
      const index = headers.indexOf(name);
      return index >= 0 ? row[index] : fallback;
    };
    const dateValue = get("Tanggal", get("Report ID", ""));
    return {
      date: normalizeStoredDate_(dateValue),
      staff: String(get("Nama Staff", "") || ""),
      startTill: toNumber_(get("Start Till", 0)),
      cash: toNumber_(get("Cash Sales", 0)),
      transfer: toNumber_(get("Transfer", 0)),
      qris: toNumber_(get("QRIS", 0)),
      shopee: toNumber_(get("Shopee", 0)),
      grab: toNumber_(get("Grab", 0)),
      debit: toNumber_(get("Debit", 0)),
      totalSales: toNumber_(get("Total Sales", 0)),
      totalOrder: toNumber_(get("Total Order", 0)),
      totalItems: toNumber_(get("Total Item Terjual", 0)),
      totalExpense: toNumber_(get("Total Expense", 0)),
      expectedCash: toNumber_(get("Expected Cash", 0)),
      actualCash: toNumber_(get("Actual Cash", 0)),
      difference: toNumber_(get("Selisih Cash", 0)),
      created: get("Dibuat Pada", new Date()),
      updated: get("Terakhir Diperbarui", new Date())
    };
  }).filter(function(item) { return item.date; });
}

function captureLegacyStock_(ss) {
  const sheet = ss.getSheetByName("Detail_Stock_Closing");
  if (!sheet || sheet.getLastRow() < 2) return [];
  const headers = sheet.getRange(1, 1, 1, sheet.getLastColumn()).getDisplayValues()[0]
    .map(function(v) { return String(v || "").trim(); });
  const values = sheet.getRange(2, 1, sheet.getLastRow() - 1, sheet.getLastColumn()).getValues();
  return values.map(function(row) {
    function get(name, fallback) {
      const i = headers.indexOf(name);
      return i >= 0 ? row[i] : fallback;
    }
    return {
      date: normalizeStoredDate_(get("Tanggal", get("Report ID", ""))),
      name: String(get("Nama Barang", "") || "").trim(),
      unit: String(get("Satuan", "") || "").trim(),
      quantity: toNumber_(get("Stok Aktual", 0)),
      category: String(get("Kategori", "") || "").trim(),
      limit: toNumber_(get("Limit Minimum", 0)),
      safety: toNumber_(get("Safety Stock", 0))
    };
  }).filter(function(item) { return item.name; });
}


function captureLegacyBase_(ss) {
  const sheet = ss.getSheetByName("Detail_Base");
  if (!sheet || sheet.getLastRow() < 2) return [];
  const headers = sheet.getRange(1, 1, 1, sheet.getLastColumn()).getDisplayValues()[0]
    .map(function(v) { return String(v || "").trim(); });
  const values = sheet.getRange(2, 1, sheet.getLastRow() - 1, sheet.getLastColumn()).getValues();
  const rows = values.map(function(row) {
    function get(name, fallback) {
      const i = headers.indexOf(name);
      return i >= 0 ? row[i] : fallback;
    }
    return {
      date: normalizeStoredDate_(get("Tanggal", get("Report ID", ""))),
      name: normalizeItemName_(get("Jenis Base", "")),
      closing: toNumber_(get("Closing (ml)", 0))
    };
  }).filter(function(item) { return item.date && item.name; });
  if (!rows.length) return [];
  const latest = rows.map(function(r) { return r.date; }).sort().slice(-1)[0];
  return rows.filter(function(r) { return r.date === latest; });
}

function migrateLegacyReports_(ss, reports) {
  const sheet = ss.getSheetByName(SANTARA_V4.SHEETS.REPORT);
  rewriteSheet_(sheet, V4_HEADERS.REPORT, reports.map(function(item) {
    return [parseDateId_(item.date), item.staff, item.startTill, item.cash, item.transfer,
      item.qris, item.shopee, item.grab, item.debit, item.totalSales, item.totalOrder,
      item.totalItems, item.totalExpense, item.expectedCash, item.actualCash,
      item.difference, "V3.4 Legacy", item.created || new Date(), item.updated || new Date()];
  }));
}

function initializeOpeningBalance_(ss, legacyStock, legacyBase, legacyReports) {
  const openingSheet = ss.getSheetByName(SANTARA_V4.SHEETS.OPENING_BALANCE);
  const reviewSheet = ss.getSheetByName(SANTARA_V4.SHEETS.MIGRATION_REVIEW);
  const masterMap = getMasterStockMap_(ss);
  const conversionMap = getConversionMap_(ss);
  const latestReportDate = legacyReports.length
    ? legacyReports.map(function(r) { return r.date; }).sort().slice(-1)[0]
    : formatDateId_(new Date());
  const startDate = addDaysToDateId_(latestReportDate, 1);
  PropertiesService.getScriptProperties().setProperty(SANTARA_V4.PROPERTY_START_DATE, startDate);

  const openingRows = [];
  const reviewRows = [];
  const migratedKeys = new Set();
  const reviewedKeys = new Set();
  legacyStock.forEach(function(item) {
    const normalizedName = normalizeItemName_(item.name);
    const master = masterMap.get(normalizeKey_(normalizedName));
    if (!master) {
      reviewRows.push([normalizedName, item.quantity, item.unit, "-", "Barang tidak ditemukan di Master_Stok", "Tambahkan / cocokkan manual"]);
      reviewedKeys.add(normalizeKey_(normalizedName));
      return;
    }
    const conversion = resolveConversion_(normalizedName, item.unit, master.unit, conversionMap, false);
    if (!conversion.valid) {
      reviewRows.push([normalizedName, item.quantity, item.unit, master.unit,
        "Konversi satuan belum tersedia", "Isi faktor di Master_Konversi lalu koreksi Saldo_Awal_Stok"]);
      reviewedKeys.add(normalizeKey_(master.name));
      return;
    }
    openingRows.push([parseDateId_(startDate), master.name, item.quantity * conversion.factor,
      master.unit, "Migrasi stok aktual terakhir V3.4", new Date()]);
    migratedKeys.add(normalizeKey_(master.name));
  });

  (legacyBase || []).forEach(function(item) {
    const name = normalizeItemName_(item.name);
    const master = masterMap.get(normalizeKey_(name));
    if (!master || migratedKeys.has(normalizeKey_(name))) return;
    openingRows.push([parseDateId_(startDate), master.name, item.closing, master.unit,
      "Migrasi closing base terakhir V3.4", new Date()]);
    migratedKeys.add(normalizeKey_(master.name));
  });

  masterMap.forEach(function(master, key) {
    if (migratedKeys.has(key) || reviewedKeys.has(key)) return;
    reviewRows.push([master.name, "-", "-", master.unit,
      "Tidak ada stok awal di data V3.4", "Isi Saldo_Awal_Stok jika barang tersedia; biarkan 0 jika memang kosong"]);
    reviewedKeys.add(key);
  });

  rewriteSheet_(openingSheet, V4_HEADERS.OPENING_BALANCE, openingRows);
  rewriteSheet_(reviewSheet, V4_HEADERS.MIGRATION_REVIEW, reviewRows);
  return { migrated: openingRows.length, review: reviewRows.length };
}

function ensureAllV4Sheets_(ss, resetDetailSheets) {
  ensureSheet_(ss, SANTARA_V4.SHEETS.MASTER_STAFF, V4_HEADERS.MASTER_STAFF, false);
  ensureSheet_(ss, SANTARA_V4.SHEETS.MASTER_UNIT, V4_HEADERS.MASTER_UNIT, false);
  ensureSheet_(ss, SANTARA_V4.SHEETS.MASTER_STOCK, V4_HEADERS.MASTER_STOCK, false);
  ensureSheet_(ss, SANTARA_V4.SHEETS.MASTER_MENU, V4_HEADERS.MASTER_MENU, false);
  ensureSheet_(ss, SANTARA_V4.SHEETS.MASTER_RECIPE, V4_HEADERS.MASTER_RECIPE, false);
  ensureSheet_(ss, SANTARA_V4.SHEETS.MASTER_BASE_RECIPE, V4_HEADERS.MASTER_BASE_RECIPE, false);
  ensureSheet_(ss, SANTARA_V4.SHEETS.MASTER_CONVERSION, V4_HEADERS.MASTER_CONVERSION, false);
  ensureSheet_(ss, SANTARA_V4.SHEETS.REPORT, V4_HEADERS.REPORT, Boolean(resetDetailSheets));
  ensureSheet_(ss, SANTARA_V4.SHEETS.MENU_SOLD, V4_HEADERS.MENU_SOLD, Boolean(resetDetailSheets));
  ensureSheet_(ss, SANTARA_V4.SHEETS.STOCK_IN, V4_HEADERS.STOCK_IN, Boolean(resetDetailSheets));
  ensureSheet_(ss, SANTARA_V4.SHEETS.EXPENSE, V4_HEADERS.EXPENSE, Boolean(resetDetailSheets));
  ensureSheet_(ss, SANTARA_V4.SHEETS.ADMIN_PRODUCTION, V4_HEADERS.ADMIN_PRODUCTION, Boolean(resetDetailSheets));
  ensureSheet_(ss, SANTARA_V4.SHEETS.BASE, V4_HEADERS.BASE, Boolean(resetDetailSheets));
  ensureSheet_(ss, SANTARA_V4.SHEETS.FREE_WASTE, V4_HEADERS.FREE_WASTE, Boolean(resetDetailSheets));
  ensureSheet_(ss, SANTARA_V4.SHEETS.RECIPE_SNAPSHOT, V4_HEADERS.RECIPE_SNAPSHOT, Boolean(resetDetailSheets));
  ensureSheet_(ss, SANTARA_V4.SHEETS.OPENING_BALANCE, V4_HEADERS.OPENING_BALANCE, Boolean(resetDetailSheets));
  ensureSheet_(ss, SANTARA_V4.SHEETS.STOCK_MOVEMENT, V4_HEADERS.STOCK_MOVEMENT, Boolean(resetDetailSheets));
  ensureSheet_(ss, SANTARA_V4.SHEETS.CURRENT_STOCK, V4_HEADERS.CURRENT_STOCK, Boolean(resetDetailSheets));
  ensureSheet_(ss, SANTARA_V4.SHEETS.OPNAME_LATEST, V4_HEADERS.OPNAME, Boolean(resetDetailSheets));
  ensureSheet_(ss, SANTARA_V4.SHEETS.OPNAME_HISTORY, V4_HEADERS.OPNAME, Boolean(resetDetailSheets));
  ensureSheet_(ss, SANTARA_V4.SHEETS.AUDIT, V4_HEADERS.AUDIT, false);
  ensureSheet_(ss, SANTARA_V4.SHEETS.MIGRATION_REVIEW, V4_HEADERS.MIGRATION_REVIEW, Boolean(resetDetailSheets));
  ensureSheet_(ss, SANTARA_V4.SHEETS.MASTER_HPP_MENU, V4_HEADERS.MASTER_HPP_MENU, false);
  ensureSheet_(ss, SANTARA_V4.SHEETS.MASTER_PRICE, V4_HEADERS.MASTER_PRICE, false);
  ensureSheet_(ss, SANTARA_V4.SHEETS.STOCK_IN_HISTORY, V4_HEADERS.STOCK_IN_HISTORY, Boolean(resetDetailSheets));
  ensureSheet_(ss, SANTARA_V4.SHEETS.FREE_WASTE_HISTORY, V4_HEADERS.FREE_WASTE_HISTORY, Boolean(resetDetailSheets));
  if (!ss.getSheetByName(SANTARA_V4.SHEETS.DASHBOARD)) ss.insertSheet(SANTARA_V4.SHEETS.DASHBOARD);
}

function ensureSheet_(ss, name, headers, reset) {
  let sheet = ss.getSheetByName(name);
  if (!sheet) sheet = ss.insertSheet(name);
  if (sheet.getMaxColumns() < headers.length) {
    sheet.insertColumnsAfter(sheet.getMaxColumns(), headers.length - sheet.getMaxColumns());
  }
  if (reset) {
    sheet.clear();
  }
  if (headers.length) {
    const current = sheet.getRange(1, 1, 1, headers.length).getDisplayValues()[0];
    const needsHeader = reset || current.every(function(v) { return String(v).trim() === ""; });
    if (needsHeader) sheet.getRange(1, 1, 1, headers.length).setValues([headers]);
    else sheet.getRange(1, 1, 1, headers.length).setValues([headers]);
  }
  return sheet;
}

function migrateExistingMasterStock_(ss) {
  const sheet = ss.getSheetByName(SANTARA_V4.SHEETS.MASTER_STOCK);
  if (!sheet || sheet.getLastRow() < 2) return;
  const oldHeaders = sheet.getRange(1, 1, 1, sheet.getLastColumn()).getDisplayValues()[0]
    .map(function(v) { return String(v || "").trim(); });
  const rows = sheet.getRange(2, 1, sheet.getLastRow() - 1, sheet.getLastColumn()).getValues();
  const out = [];
  const seen = new Set();
  rows.forEach(function(row) {
    function get(names, fallback) {
      for (let i = 0; i < names.length; i++) {
        const idx = oldHeaders.indexOf(names[i]);
        if (idx >= 0) return row[idx];
      }
      return fallback;
    }
    const rawName = String(get(["Nama Barang"], "") || "").trim();
    if (!rawName) return;
    const name = normalizeItemName_(rawName);
    const key = normalizeKey_(name);
    if (seen.has(key)) return;
    seen.add(key);
    const unit = normalizeUnit_(get(["Satuan Dasar", "Satuan"], "pcs"));
    out.push([
      String(get(["Kategori"], "Lainnya") || "Lainnya").trim(), name, unit,
      toNonNegativeNumber_(get(["Limit Minimum", "Limit Minimal"], 0)),
      toNonNegativeNumber_(get(["Safety Stock"], 0)),
      String(get(["Status"], "Aktif") || "Aktif").trim() || "Aktif",
      normalizeUnit_(get(["Satuan Beli"], unit)),
      positiveOrDefault_(get(["Isi per Satuan Beli"], 1), 1),
      String(get(["Catatan"], "") || "")
    ]);
  });
  rewriteSheet_(sheet, V4_HEADERS.MASTER_STOCK, out);
}

function seedMasterData_(ss) {
  seedSimpleMaster_(ss.getSheetByName(SANTARA_V4.SHEETS.MASTER_STAFF), V4_HEADERS.MASTER_STAFF,
    [["Budi", "Aktif"], ["Siti", "Aktif"], ["Andi", "Aktif"]], 0);
  seedSimpleMaster_(ss.getSheetByName(SANTARA_V4.SHEETS.MASTER_UNIT), V4_HEADERS.MASTER_UNIT,
    SANTARA_V4.DEFAULT_UNITS.map(function(u) { return [u, "Aktif"]; }), 0);
  mergeMasterStockSeeds_(ss.getSheetByName(SANTARA_V4.SHEETS.MASTER_STOCK));
  mergeRowsByKey_(ss.getSheetByName(SANTARA_V4.SHEETS.MASTER_MENU), V4_HEADERS.MASTER_MENU,
    DEFAULT_MENUS, function(r) { return normalizeKey_(r[0]) + "|" + normalizeKey_(r[1]); });
  const recipeRows = DEFAULT_RECIPES.map(function(r) {
    return [r[0], r[1], r[2], r[3], r[4], "v1", parseDateId_("2026-01-01"), "", "Aktif"];
  });
  mergeRowsByKey_(ss.getSheetByName(SANTARA_V4.SHEETS.MASTER_RECIPE), V4_HEADERS.MASTER_RECIPE,
    recipeRows, function(r) {
      return normalizeKey_(r[0]) + "|" + normalizeKey_(r[1]) + "|" + normalizeKey_(r[2]) + "|" + normalizeKey_(r[5]);
    });
  const baseRows = DEFAULT_BASE_RECIPES.map(function(r) {
    return [r[0], r[1], r[2], r[3], r[4], r[5], parseDateId_(r[6]), r[7] ? parseDateId_(r[7]) : "", r[8], r[9]];
  });
  mergeRowsByKey_(ss.getSheetByName(SANTARA_V4.SHEETS.MASTER_BASE_RECIPE), V4_HEADERS.MASTER_BASE_RECIPE,
    baseRows, function(r) {
      return normalizeKey_(r[0]) + "|" + normalizeKey_(r[1]) + "|" + normalizeKey_(r[5]);
    });
}

function seedSimpleMaster_(sheet, headers, seeds, keyIndex) {
  if (sheet.getLastRow() < 2) rewriteSheet_(sheet, headers, seeds);
}

function mergeMasterStockSeeds_(sheet) {
  const existing = sheet.getLastRow() > 1
    ? sheet.getRange(2, 1, sheet.getLastRow() - 1, V4_HEADERS.MASTER_STOCK.length).getValues()
    : [];
  const map = new Map();
  existing.forEach(function(row) {
    const name = normalizeItemName_(row[1]);
    if (!name) return;
    row[1] = name;
    row[2] = normalizeUnit_(row[2] || "pcs");
    if (!row[5]) row[5] = "Aktif";
    if (!row[6]) row[6] = row[2];
    if (normalizeKey_(row[6]) === normalizeKey_(row[2]) && !(Number(row[7]) > 0)) row[7] = 1;
    if (normalizeKey_(row[6]) !== normalizeKey_(row[2]) && !(Number(row[7]) > 0)) row[7] = "";
    map.set(normalizeKey_(name), row.slice(0, V4_HEADERS.MASTER_STOCK.length));
  });
  DEFAULT_STOCK_ITEMS.forEach(function(seed) {
    const key = normalizeKey_(seed[1]);
    if (!map.has(key)) {
      const row = seed.slice();
      if (normalizeKey_(row[6]) !== normalizeKey_(row[2])) row[7] = "";
      map.set(key, row);
      return;
    }
    const current = map.get(key);
    const defaultPurchase = normalizeUnit_(seed[6]);
    const currentPurchase = normalizeUnit_(current[6] || current[2]);
    if (normalizeKey_(currentPurchase) === normalizeKey_(current[2]) &&
        normalizeKey_(defaultPurchase) !== normalizeKey_(seed[2])) {
      current[6] = defaultPurchase;
      current[7] = "";
    }
    if (!String(current[8] || "").trim() && String(seed[8] || "").trim()) current[8] = seed[8];
    map.set(key, current);
  });
  rewriteSheet_(sheet, V4_HEADERS.MASTER_STOCK, Array.from(map.values()));
}

function mergeRowsByKey_(sheet, headers, seedRows, keyFn) {
  const rows = sheet.getLastRow() > 1
    ? sheet.getRange(2, 1, sheet.getLastRow() - 1, headers.length).getValues()
    : [];
  const keys = new Set(rows.map(keyFn));
  seedRows.forEach(function(row) {
    const key = keyFn(row);
    if (!keys.has(key)) {
      rows.push(row);
      keys.add(key);
    }
  });
  rewriteSheet_(sheet, headers, rows);
}

function ensureConversionRows_(ss) {
  const sheet = ss.getSheetByName(SANTARA_V4.SHEETS.MASTER_CONVERSION);
  const masterRows = getMasterStockRows_(ss);
  const existing = sheet.getLastRow() > 1
    ? sheet.getRange(2, 1, sheet.getLastRow() - 1, V4_HEADERS.MASTER_CONVERSION.length).getValues()
    : [];
  const keys = new Set(existing.map(function(r) {
    return conversionKey_(r[0], r[1], r[2]);
  }));
  masterRows.forEach(function(item) {
    const sameKey = conversionKey_(item.name, item.unit, item.unit);
    if (!keys.has(sameKey)) {
      existing.push([item.name, item.unit, item.unit, 1, "Aktif", "Satuan dasar"]);
      keys.add(sameKey);
    }
    if (item.purchaseUnit) {
      const purchaseKey = conversionKey_(item.name, item.purchaseUnit, item.unit);
      if (!keys.has(purchaseKey)) {
        existing.push([item.name, item.purchaseUnit, item.unit,
          item.purchaseFactor > 0 ? item.purchaseFactor : "", "Aktif", "1 " + item.purchaseUnit + " = ? " + item.unit]);
        keys.add(purchaseKey);
      }
    }
  });
  DEFAULT_RECIPES.forEach(function(recipe) {
    const item = normalizeItemName_(recipe[2]);
    const recipeUnit = normalizeUnit_(recipe[4]);
    const master = masterRows.find(function(m) { return normalizeKey_(m.name) === normalizeKey_(item); });
    if (!master || recipeUnit === master.unit) return;
    const key = conversionKey_(item, recipeUnit, master.unit);
    if (!keys.has(key)) {
      existing.push([item, recipeUnit, master.unit, "", "Aktif", "WAJIB DIISI agar resep bisa dihitung"]);
      keys.add(key);
    }
  });
  rewriteSheet_(sheet, V4_HEADERS.MASTER_CONVERSION, existing);
}

function validateMasterRecipes_(ss) {
  const review = ss.getSheetByName(SANTARA_V4.SHEETS.MIGRATION_REVIEW);
  const existing = review.getLastRow() > 1
    ? review.getRange(2, 1, review.getLastRow() - 1, V4_HEADERS.MIGRATION_REVIEW.length).getValues()
    : [];
  const issueKeys = new Set(existing.map(function(r) { return normalizeKey_(r[0]) + "|" + normalizeKey_(r[4]); }));
  const masterMap = getMasterStockMap_(ss);
  const conversionMap = getConversionMap_(ss);
  const recipeSheet = ss.getSheetByName(SANTARA_V4.SHEETS.MASTER_RECIPE);
  if (recipeSheet.getLastRow() > 1) {
    recipeSheet.getRange(2, 1, recipeSheet.getLastRow() - 1, V4_HEADERS.MASTER_RECIPE.length).getValues().forEach(function(r) {
      const ingredient = normalizeItemName_(r[2]);
      const master = masterMap.get(normalizeKey_(ingredient));
      if (!master) return;
      const conversion = resolveConversion_(ingredient, r[4], master.unit, conversionMap, false);
      if (!conversion.valid) {
        const issue = "Konversi resep belum tersedia";
        const key = normalizeKey_(ingredient) + "|" + normalizeKey_(issue);
        if (!issueKeys.has(key)) {
          existing.push([ingredient, r[3], r[4], master.unit, issue,
            "Isi Faktor di Master_Konversi sebelum menu digunakan"]);
          issueKeys.add(key);
        }
      }
    });
  }
  rewriteSheet_(review, V4_HEADERS.MIGRATION_REVIEW, existing);
}

function getRuntimeSpreadsheet_() {
  const ss = SpreadsheetApp.getActiveSpreadsheet();
  const required = Object.keys(SANTARA_V4.SHEETS).map(function(k) { return SANTARA_V4.SHEETS[k]; })
    .filter(function(name) { return name !== SANTARA_V4.SHEETS.DASHBOARD; });
  const missing = required.filter(function(name) { return !ss.getSheetByName(name); });
  if (missing.length) {
    throw new Error("Spreadsheet belum siap. Jalankan setupSantaraV4. Sheet yang belum ada: " + missing.join(", "));
  }
  return ss;
}

function getCachedMasterData_(ss) {
  const cache = CacheService.getScriptCache();
  const cached = cache.get(SANTARA_V4.CACHE_KEY);
  if (cached) {
    try { return JSON.parse(cached); } catch (e) { cache.remove(SANTARA_V4.CACHE_KEY); }
  }
  const stockItems = getMasterStockRows_(ss);
  const allowedUnits = getAllowedUnitsMap_(ss);
  stockItems.forEach(function(item) {
    item.allowedUnits = allowedUnits.get(normalizeKey_(item.name)) || [item.unit];
  });
  const data = {
    staff: getActiveRows_(ss.getSheetByName(SANTARA_V4.SHEETS.MASTER_STAFF), 0, 1),
    units: getActiveRows_(ss.getSheetByName(SANTARA_V4.SHEETS.MASTER_UNIT), 0, 1),
    stockItems: stockItems,
    menuOptions: getMenuOptions_(ss),
    baseTypes: getBaseTypes_(ss)
  };
  try { cache.put(SANTARA_V4.CACHE_KEY, JSON.stringify(data), 180); } catch (e) {}
  return data;
}

function clearSantaraCache_() {
  CacheService.getScriptCache().remove(SANTARA_V4.CACHE_KEY);
}

function getActiveRows_(sheet, valueIndex, statusIndex) {
  if (!sheet || sheet.getLastRow() < 2) return [];
  return sheet.getRange(2, 1, sheet.getLastRow() - 1, Math.max(valueIndex, statusIndex) + 1).getDisplayValues()
    .filter(function(r) {
      return String(r[valueIndex] || "").trim() && normalizeKey_(r[statusIndex]) !== "nonaktif";
    })
    .map(function(r) { return String(r[valueIndex] || "").trim(); });
}

function getMasterStockRows_(ss) {
  const sheet = ss.getSheetByName(SANTARA_V4.SHEETS.MASTER_STOCK);
  if (!sheet || sheet.getLastRow() < 2) return [];
  return sheet.getRange(2, 1, sheet.getLastRow() - 1, V4_HEADERS.MASTER_STOCK.length).getValues()
    .filter(function(r) { return String(r[1] || "").trim() && normalizeKey_(r[5]) !== "nonaktif"; })
    .map(function(r) {
      return {
        category: String(r[0] || "").trim(),
        name: normalizeItemName_(r[1]),
        unit: normalizeUnit_(r[2]),
        limit: toNonNegativeNumber_(r[3]),
        safety: toNonNegativeNumber_(r[4]),
        status: String(r[5] || "Aktif"),
        purchaseUnit: normalizeUnit_(r[6] || r[2]),
        purchaseFactor: normalizeKey_(r[6] || r[2]) === normalizeKey_(r[2])
          ? positiveOrDefault_(r[7], 1)
          : Math.max(0, toNumber_(r[7])),
        note: String(r[8] || "")
      };
    });
}

function getMasterStockMap_(ss) {
  const map = new Map();
  getMasterStockRows_(ss).forEach(function(item) { map.set(normalizeKey_(item.name), item); });
  return map;
}

function getMenuOptions_(ss) {
  const sheet = ss.getSheetByName(SANTARA_V4.SHEETS.MASTER_MENU);
  if (!sheet || sheet.getLastRow() < 2) return [];
  return sheet.getRange(2, 1, sheet.getLastRow() - 1, V4_HEADERS.MASTER_MENU.length).getValues()
    .filter(function(r) { return String(r[0] || "").trim() && normalizeKey_(r[3]) !== "nonaktif"; })
    .map(function(r) {
      return { menu: String(r[0] || "").trim(), size: String(r[1] || "").trim(), category: String(r[2] || "").trim() };
    });
}

function getBaseTypes_(ss) {
  const sheet = ss.getSheetByName(SANTARA_V4.SHEETS.MASTER_BASE_RECIPE);
  if (!sheet || sheet.getLastRow() < 2) return [];
  const grouped = new Map();
  sheet.getRange(2, 1, sheet.getLastRow() - 1, V4_HEADERS.MASTER_BASE_RECIPE.length).getValues().forEach(function(r) {
    const name = String(r[0] || "").trim();
    if (!name || normalizeKey_(r[8]) === "nonaktif") return;
    const key = normalizeKey_(name);
    if (!grouped.has(key)) {
      grouped.set(key, { name: name, productionEnabled: false, standardOutput: 0 });
    }
    const item = grouped.get(key);
    item.productionEnabled = item.productionEnabled || normalizeKey_(r[9]) === "ya";
    item.standardOutput = Math.max(item.standardOutput, toNonNegativeNumber_(r[4]));
    grouped.set(key, item);
  });
  return Array.from(grouped.values());
}

function getStaffBaseTypes_(ss) {
  const allowed = new Set(SANTARA_V4.STAFF_BASE_NAMES.map(normalizeKey_));
  return getBaseTypes_(ss).filter(function(base) {
    return allowed.has(normalizeKey_(base.name)) && base.productionEnabled;
  });
}

function getAdminBaseTypes_(ss) {
  const staffBases = new Set(SANTARA_V4.STAFF_BASE_NAMES.map(normalizeKey_));
  return getBaseTypes_(ss).filter(function(base) {
    return base.productionEnabled && !staffBases.has(normalizeKey_(base.name));
  });
}

function getPreciseCurrentStockMap_(ss) {
  const map = new Map();
  const movement = ss.getSheetByName(SANTARA_V4.SHEETS.STOCK_MOVEMENT);
  if (!movement || movement.getLastRow() < 2) return map;
  movement.getRange(2, 1, movement.getLastRow() - 1, V4_HEADERS.STOCK_MOVEMENT.length).getValues()
    .forEach(function(r) {
      const name = normalizeItemName_(r[4]);
      if (!name) return;
      const key = normalizeKey_(name);
      map.set(key, (map.get(key) || 0) + toNumber_(r[5]) - toNumber_(r[6]));
    });
  return map;
}

function getCurrentStock_(ss) {
  const sheet = ss.getSheetByName(SANTARA_V4.SHEETS.CURRENT_STOCK);
  if (!sheet || sheet.getLastRow() < 2) return [];
  const precise = getPreciseCurrentStockMap_(ss);
  return sheet.getRange(2, 1, sheet.getLastRow() - 1, V4_HEADERS.CURRENT_STOCK.length).getValues()
    .map(function(r) {
      const name = String(r[0] || "");
      const key = normalizeKey_(name);
      const stock = precise.has(key) ? precise.get(key) : toNumber_(r[3]);
      return { name: name, category: String(r[1] || ""), unit: String(r[2] || ""),
        stock: roundNumber_(stock), limit: toNumber_(r[4]), safety: toNumber_(r[5]), status: String(r[6] || "") };
    });
}

function refreshCurrentStockDisplay_(ss) {
  const sheet = ss.getSheetByName(SANTARA_V4.SHEETS.CURRENT_STOCK);
  if (!sheet || sheet.getLastRow() < 2) return;
  const precise = getPreciseCurrentStockMap_(ss);
  const rows = sheet.getRange(2, 1, sheet.getLastRow() - 1, V4_HEADERS.CURRENT_STOCK.length).getValues();
  const display = rows.map(function(r) {
    const key = normalizeKey_(r[0]);
    const stock = precise.has(key) ? precise.get(key) : toNumber_(r[3]);
    return [roundStockDisplay_(stock)];
  });
  sheet.getRange(2, 4, display.length, 1).setValues(display).setNumberFormat('#,##0.##');
}

function getCurrentStockMap_(ss) {
  const map = new Map();
  getCurrentStock_(ss).forEach(function(item) { map.set(normalizeKey_(item.name), item); });
  return map;
}

function getAllowedUnitsMap_(ss) {
  const sheet = ss.getSheetByName(SANTARA_V4.SHEETS.MASTER_CONVERSION);
  const map = new Map();
  if (!sheet || sheet.getLastRow() < 2) return map;
  sheet.getRange(2, 1, sheet.getLastRow() - 1, V4_HEADERS.MASTER_CONVERSION.length).getValues().forEach(function(r) {
    if (!r[0] || !r[1] || normalizeKey_(r[4]) === "nonaktif" || !(Number(r[3]) > 0)) return;
    const key = normalizeKey_(normalizeItemName_(r[0]));
    if (!map.has(key)) map.set(key, []);
    const unit = normalizeUnit_(r[1]);
    if (map.get(key).indexOf(unit) === -1) map.get(key).push(unit);
  });
  return map;
}

function getConversionMap_(ss) {
  const sheet = ss.getSheetByName(SANTARA_V4.SHEETS.MASTER_CONVERSION);
  const map = new Map();
  if (!sheet || sheet.getLastRow() < 2) return map;
  sheet.getRange(2, 1, sheet.getLastRow() - 1, V4_HEADERS.MASTER_CONVERSION.length).getValues().forEach(function(r) {
    if (!r[0] || !r[1] || !r[2] || normalizeKey_(r[4]) === "nonaktif") return;
    map.set(conversionKey_(r[0], r[1], r[2]), Number(r[3]));
  });
  return map;
}

function conversionKey_(item, inputUnit, baseUnit) {
  return normalizeKey_(normalizeItemName_(item)) + "|" + normalizeKey_(normalizeUnit_(inputUnit)) + "|" + normalizeKey_(normalizeUnit_(baseUnit));
}

function resolveConversion_(item, inputUnit, baseUnit, conversionMap, throwOnMissing) {
  const inUnit = normalizeUnit_(inputUnit);
  const base = normalizeUnit_(baseUnit);
  if (normalizeKey_(inUnit) === normalizeKey_(base)) return { valid: true, factor: 1 };
  const key = conversionKey_(item, inUnit, base);
  const factor = Number(conversionMap.get(key));
  if (factor > 0) return { valid: true, factor: factor };
  if (throwOnMissing) {
    throw new Error("Konversi " + item + " dari " + inUnit + " ke " + base + " belum diisi di Master_Konversi.");
  }
  return { valid: false, factor: 0 };
}

function validateDailyPayload_(ss, payload) {
  if (!payload || typeof payload !== "object") throw new Error("Data laporan tidak valid.");
  const date = normalizeDateString_(payload.date);
  const activation = getActivationDate_();
  if (date < activation) {
    throw new Error("Stok otomatis V4 dimulai " + formatDateLabel_(parseDateId_(activation)) + ". Laporan sebelum tanggal itu tetap tersimpan sebagai arsip keuangan V3.4.");
  }
  const staff = String(payload.staff || "").trim();
  const activeStaff = getActiveRows_(ss.getSheetByName(SANTARA_V4.SHEETS.MASTER_STAFF), 0, 1);
  if (!staff) throw new Error("Nama penanggung jawab belum dipilih.");
  if (activeStaff.length && activeStaff.indexOf(staff) === -1) throw new Error("Nama staff tidak aktif di Master_Staff.");

  const startTill = requireNonNegativeNumber_(payload.startTill, "Start Till");
  const salesRaw = payload.sales || {};
  const sales = {
    cash: optionalNonNegativeNumber_(salesRaw.cash, "Cash Sales"),
    transfer: optionalNonNegativeNumber_(salesRaw.transfer, "Transfer"),
    qris: optionalNonNegativeNumber_(salesRaw.qris, "QRIS"),
    shopee: optionalNonNegativeNumber_(salesRaw.shopee, "Shopee"),
    grab: optionalNonNegativeNumber_(salesRaw.grab, "Grab"),
    debit: optionalNonNegativeNumber_(salesRaw.debit, "Debit")
  };
  const totalSales = sales.cash + sales.transfer + sales.qris + sales.shopee + sales.grab + sales.debit;
  const totalOrder = requireNonNegativeInteger_(payload.totalOrder, "Total Order");
  const actualCash = requireNonNegativeNumber_(payload.actualCash, "Actual Cash");

  const menuOptions = getMenuOptions_(ss);
  const menuMap = new Map();
  menuOptions.forEach(function(m) { menuMap.set(menuKey_(m.menu, m.size), m); });
  const menuSold = normalizeMenuRows_(payload.menuSold, menuMap, ss, date);
  const totalItemsSold = menuSold.reduce(function(sum, item) { return sum + item.quantity; }, 0);

  const masterMap = getMasterStockMap_(ss);
  const conversionMap = getConversionMap_(ss);
  const expenses = normalizeExpenseRows_(payload.expenses);
  const totalExpense = expenses.reduce(function(sum, item) { return sum + item.subtotal; }, 0);
  const expectedCash = startTill + sales.cash - totalExpense;
  const cashDifference = actualCash - expectedCash;

  const baseReport = normalizeBaseRows_(ss, payload.baseReport, date);
  const freeWaste = normalizeFreeWasteRows_(ss, payload.freeWaste, menuMap, masterMap, conversionMap);

  return {
    date: date,
    staff: staff,
    replaceExisting: Boolean(payload.replaceExisting),
    startTill: startTill,
    sales: sales,
    totalSales: totalSales,
    totalOrder: totalOrder,
    totalItemsSold: totalItemsSold,
    expenses: expenses,
    totalExpense: totalExpense,
    expectedCash: expectedCash,
    actualCash: actualCash,
    cashDifference: cashDifference,
    menuSold: menuSold,
    baseReport: baseReport,
    freeWaste: freeWaste
  };
}

function normalizeMenuRows_(rows, menuMap, ss, date) {
  if (!Array.isArray(rows)) return [];
  return rows.filter(function(row) { return row && String(row.menu || "").trim(); }).map(function(row, index) {
    const menu = String(row.menu || "").trim();
    const size = String(row.size || "").trim();
    const label = "Menu terjual baris " + (index + 1);
    if (!menu) throw new Error(label + ": menu belum dipilih.");
    if (!menuMap.has(menuKey_(menu, size))) throw new Error(label + ": menu/ukuran tidak ditemukan di Master_Menu.");
    const quantity = requirePositiveInteger_(row.quantity, label + " jumlah");
    const recipe = getActiveRecipe_(ss, menu, size, date);
    if (!recipe.rows.length) throw new Error("Resep " + menu + (size ? " " + size : "") + " belum tersedia.");
    return { menu: menu, size: size, quantity: quantity, recipeVersion: recipe.version };
  });
}

function normalizeExpenseRows_(rows) {
  if (!Array.isArray(rows)) return [];
  return rows.filter(hasMeaningfulObject_).map(function(row, index) {
    const label = "Pengeluaran baris " + (index + 1);
    const name = String(row.name || "").trim();
    if (!name) throw new Error(label + ": nama pengeluaran belum diisi.");
    const quantity = requirePositiveNumber_(row.quantity, label + " jumlah");
    const unit = String(row.unit || "").trim() || "item";
    const unitPrice = requireNonNegativeNumber_(row.unitPrice, label + " harga satuan");
    return {
      name: name,
      quantity: quantity,
      unit: unit,
      unitPrice: unitPrice,
      subtotal: roundNumber_(quantity * unitPrice),
      note: String(row.note || "").trim()
    };
  });
}

function normalizeStockInRows_(rows, masterMap, conversionMap) {
  if (!Array.isArray(rows)) return [];
  return rows.filter(hasMeaningfulObject_).map(function(row, index) {
    const label = "Stock In baris " + (index + 1);
    const name = normalizeItemName_(row.name);
    const master = masterMap.get(normalizeKey_(name));
    if (!master) throw new Error(label + ": barang tidak ditemukan di Master_Stok.");
    const inputQuantity = requirePositiveNumber_(row.quantity, label + " jumlah");
    const inputUnit = normalizeUnit_(row.unit);
    if (!inputUnit) throw new Error(label + ": satuan belum dipilih.");
    const conversion = resolveConversion_(name, inputUnit, master.unit, conversionMap, true);
    return {
      name: master.name,
      inputQuantity: inputQuantity,
      inputUnit: inputUnit,
      baseQuantity: inputQuantity * conversion.factor,
      baseUnit: master.unit,
      totalCost: requireNonNegativeNumber_(row.totalCost, label + " total biaya"),
      note: String(row.note || "").trim()
    };
  });
}

function normalizeBaseRows_(ss, rows, date) {
  const submitted = new Map();
  (Array.isArray(rows) ? rows : []).forEach(function(row) {
    if (row && row.type) submitted.set(normalizeKey_(row.type), row);
  });
  return getStaffBaseTypes_(ss).map(function(base) {
    const row = submitted.get(normalizeKey_(base.name)) || {};
    const opening = optionalNonNegativeNumber_(row.opening, base.name + " Opening");
    const produced = optionalNonNegativeNumber_(row.produced, base.name + " Dibuat Aktual");
    const closing = optionalNonNegativeNumber_(row.closing, base.name + " Closing");
    const used = opening + produced - closing;
    if (used < -0.000001) throw new Error(base.name + ": Closing tidak boleh lebih besar dari Opening + Dibuat.");
    if (produced > 0 && !base.productionEnabled) {
      throw new Error("Produksi " + base.name + " belum aktif karena resep base belum lengkap.");
    }
    let version = "";
    let standardOutput = base.standardOutput;
    if (produced > 0) {
      const recipe = getActiveBaseRecipe_(ss, base.name, date);
      if (!recipe.rows.length || !(recipe.standardOutput > 0)) throw new Error("Resep produksi " + base.name + " belum lengkap.");
      version = recipe.version;
      standardOutput = recipe.standardOutput;
    }
    return {
      type: base.name,
      opening: opening,
      produced: produced,
      closing: closing,
      used: Math.max(0, used),
      standardOutput: standardOutput || 0,
      recipeVersion: version
    };
  });
}

function normalizeFreeWasteRows_(ss, rows, menuMap, masterMap, conversionMap) {
  if (!Array.isArray(rows)) return [];
  return rows.filter(hasMeaningfulObject_).map(function(row, index) {
    const label = "Free/Waste baris " + (index + 1);
    const type = String(row.type || "").trim().toUpperCase();
    const itemType = String(row.itemType || "").trim().toUpperCase();
    if (["FREE", "WASTE"].indexOf(type) === -1) throw new Error(label + ": pilih Free atau Waste.");
    if (["MENU", "MATERIAL", "BASE"].indexOf(itemType) === -1) throw new Error(label + ": jenis item belum dipilih.");
    const name = itemType === "MENU" ? String(row.name || "").trim() : normalizeItemName_(row.name);
    const size = String(row.size || "").trim();
    const quantity = requirePositiveNumber_(row.quantity, label + " jumlah");
    if (!name) throw new Error(label + ": item belum dipilih.");

    if (itemType === "MENU") {
      if (!menuMap.has(menuKey_(name, size))) throw new Error(label + ": menu tidak ditemukan.");
      return { type: type, itemType: itemType, name: name, size: size, quantity: quantity, unit: "porsi", note: String(row.note || "").trim() };
    }

    const master = masterMap.get(normalizeKey_(name));
    if (!master) throw new Error(label + ": barang/base tidak ditemukan di Master_Stok.");
    const inputUnit = normalizeUnit_(row.unit || master.unit);
    const conversion = resolveConversion_(master.name, inputUnit, master.unit, conversionMap, true);
    return {
      type: type, itemType: itemType, name: master.name, size: "",
      quantity: quantity * conversion.factor, unit: master.unit,
      note: String(row.note || "").trim()
    };
  });
}

function validateOpnamePayload_(ss, payload) {
  if (!payload || typeof payload !== "object") throw new Error("Data opname tidak valid.");
  const date = normalizeDateString_(payload.date);
  if (date < getActivationDate_()) throw new Error("Tanggal opname tidak boleh sebelum aktivasi V4.");
  const staff = String(payload.staff || "").trim();
  if (!staff) throw new Error("Nama penanggung jawab belum dipilih.");
  const master = getMasterStockRows_(ss);
  const submitted = new Map();
  (Array.isArray(payload.items) ? payload.items : []).forEach(function(item) {
    if (item && item.name) submitted.set(normalizeKey_(item.name), item);
  });
  const items = master.map(function(m) {
    const item = submitted.get(normalizeKey_(m.name));
    if (!item || String(item.actual === undefined ? "" : item.actual).trim() === "") {
      throw new Error("Stok aktual " + m.name + " belum diisi.");
    }
    return { name: m.name, unit: m.unit, actual: requireNonNegativeNumber_(item.actual, "Stok aktual " + m.name), note: String(item.note || "") };
  });
  return { date: date, staff: staff, items: items, replaceExisting: Boolean(payload.replaceExisting) };
}

function buildRecipeSnapshots_(ss, clean, now) {
  const rows = [];
  clean.menuSold.forEach(function(item, index) {
    const recipe = getActiveRecipe_(ss, item.menu, item.size, clean.date);
    recipe.rows.forEach(function(r) {
      const converted = convertRecipeIngredient_(ss, r.ingredient, r.quantity * item.quantity, r.unit);
      rows.push([parseDateId_(clean.date), "SALE_MENU", "SALE-" + (index + 1), item.menu,
        item.size, item.quantity, converted.name, converted.quantity, converted.unit,
        recipe.version, now]);
    });
  });

  clean.baseReport.forEach(function(item, index) {
    if (!(item.produced > 0)) return;
    const recipe = getActiveBaseRecipe_(ss, item.type, clean.date);
    const factor = item.produced / recipe.standardOutput;
    recipe.rows.forEach(function(r) {
      const converted = convertRecipeIngredient_(ss, r.ingredient, r.quantity * factor, r.unit);
      rows.push([parseDateId_(clean.date), "BASE_PRODUCTION", "BASE-" + (index + 1), item.type,
        "", item.produced, converted.name, converted.quantity, converted.unit,
        recipe.version, now]);
    });
  });

  clean.freeWaste.forEach(function(item, index) {
    if (item.itemType !== "MENU") return;
    const recipe = getActiveRecipe_(ss, item.name, item.size, clean.date);
    recipe.rows.forEach(function(r) {
      if (isCupItem_(r.ingredient)) return;
      const converted = convertRecipeIngredient_(ss, r.ingredient, r.quantity * item.quantity, r.unit);
      rows.push([parseDateId_(clean.date), item.type + "_MENU", item.type + "-" + (index + 1), item.name,
        item.size, item.quantity, converted.name, converted.quantity, converted.unit,
        recipe.version, now]);
    });
  });
  return rows;
}

function convertRecipeIngredient_(ss, ingredient, quantity, unit) {
  const masterMap = getMasterStockMap_(ss);
  const conversionMap = getConversionMap_(ss);
  const name = normalizeItemName_(ingredient);
  const master = masterMap.get(normalizeKey_(name));
  if (!master) throw new Error("Bahan resep " + name + " belum ada di Master_Stok.");
  const conversion = resolveConversion_(name, unit, master.unit, conversionMap, true);
  return { name: master.name, quantity: quantity * conversion.factor, unit: master.unit };
}

function getActiveRecipe_(ss, menu, size, dateId) {
  const sheet = ss.getSheetByName(SANTARA_V4.SHEETS.MASTER_RECIPE);
  if (!sheet || sheet.getLastRow() < 2) return { version: "", rows: [] };
  const date = parseDateId_(dateId);
  const candidates = sheet.getRange(2, 1, sheet.getLastRow() - 1, V4_HEADERS.MASTER_RECIPE.length).getValues()
    .filter(function(r) {
      return normalizeKey_(r[0]) === normalizeKey_(menu) && normalizeKey_(r[1]) === normalizeKey_(size) &&
        normalizeKey_(r[8]) !== "nonaktif" && isDateEffective_(date, r[6], r[7]);
    });
  if (!candidates.length) return { version: "", rows: [] };
  const versions = candidates.map(function(r) { return String(r[5] || "v1"); }).sort(compareVersion_);
  const version = versions[versions.length - 1];
  return {
    version: version,
    rows: candidates.filter(function(r) { return String(r[5] || "v1") === version; }).map(function(r) {
      return { ingredient: normalizeItemName_(r[2]), quantity: toNonNegativeNumber_(r[3]), unit: normalizeUnit_(r[4]) };
    })
  };
}

function getActiveBaseRecipe_(ss, baseName, dateId) {
  const sheet = ss.getSheetByName(SANTARA_V4.SHEETS.MASTER_BASE_RECIPE);
  if (!sheet || sheet.getLastRow() < 2) return { version: "", standardOutput: 0, rows: [] };
  const date = parseDateId_(dateId);
  const candidates = sheet.getRange(2, 1, sheet.getLastRow() - 1, V4_HEADERS.MASTER_BASE_RECIPE.length).getValues()
    .filter(function(r) {
      return normalizeKey_(r[0]) === normalizeKey_(baseName) && normalizeKey_(r[8]) !== "nonaktif" &&
        normalizeKey_(r[9]) === "ya" && isDateEffective_(date, r[6], r[7]);
    });
  if (!candidates.length) return { version: "", standardOutput: 0, rows: [] };
  const versions = candidates.map(function(r) { return String(r[5] || "v1"); }).sort(compareVersion_);
  const version = versions[versions.length - 1];
  const selected = candidates.filter(function(r) { return String(r[5] || "v1") === version && String(r[1] || "").trim(); });
  return {
    version: version,
    standardOutput: selected.length ? toNonNegativeNumber_(selected[0][4]) : 0,
    rows: selected.map(function(r) {
      return { ingredient: normalizeItemName_(r[1]), quantity: toNonNegativeNumber_(r[2]), unit: normalizeUnit_(r[3]) };
    })
  };
}

function getDailyReportByDate_(ss, dateId) {
  const sheet = ss.getSheetByName(SANTARA_V4.SHEETS.REPORT);
  const rowNumber = findDateRow_(sheet, dateId);
  if (!rowNumber) return null;
  const r = sheet.getRange(rowNumber, 1, 1, V4_HEADERS.REPORT.length).getValues()[0];
  return {
    date: dateId,
    staff: String(r[1] || ""),
    startTill: toNumber_(r[2]),
    sales: { cash: toNumber_(r[3]), transfer: toNumber_(r[4]), qris: toNumber_(r[5]),
      shopee: toNumber_(r[6]), grab: toNumber_(r[7]), debit: toNumber_(r[8]) },
    totalSales: toNumber_(r[9]),
    totalOrder: toNumber_(r[10]),
    totalItemsSold: toNumber_(r[11]),
    totalExpense: toNumber_(r[12]),
    expectedCash: toNumber_(r[13]),
    actualCash: toNumber_(r[14]),
    cashDifference: toNumber_(r[15]),
    source: String(r[16] || ""),
    menuSold: readRowsByDate_(ss.getSheetByName(SANTARA_V4.SHEETS.MENU_SOLD), dateId).map(function(x) {
      return { menu: String(x[2] || ""), size: String(x[3] || ""), quantity: toNumber_(x[4]) };
    }),
    expenses: readRowsByDate_(ss.getSheetByName(SANTARA_V4.SHEETS.EXPENSE), dateId).map(function(x) {
      return { name: String(x[2] || ""), quantity: toNumber_(x[3]), unit: String(x[4] || ""),
        unitPrice: toNumber_(x[5]), subtotal: toNumber_(x[6]), note: String(x[7] || "") };
    }),
    baseReport: readRowsByDate_(ss.getSheetByName(SANTARA_V4.SHEETS.BASE), dateId).map(function(x) {
      return { type: String(x[2] || ""), opening: toNumber_(x[3]), produced: toNumber_(x[4]),
        closing: toNumber_(x[5]), used: toNumber_(x[6]) };
    }),
    freeWaste: readRowsByDate_(ss.getSheetByName(SANTARA_V4.SHEETS.FREE_WASTE), dateId).map(function(x) {
      return { type: String(x[2] || ""), itemType: String(x[3] || ""), name: String(x[4] || ""),
        size: String(x[5] || ""), quantity: toNumber_(x[6]), unit: String(x[7] || ""), note: String(x[8] || "") };
    })
  };
}

function getOpnameByDate_(ss, dateId) {
  const rows = readRowsByDate_(ss.getSheetByName(SANTARA_V4.SHEETS.OPNAME_HISTORY), dateId);
  if (!rows.length) return null;
  return {
    date: dateId,
    staff: String(rows[0][1] || ""),
    items: rows.map(function(r) {
      return { name: String(r[2] || ""), theoretical: toNumber_(r[3]), actual: toNumber_(r[4]),
        difference: toNumber_(r[5]), unit: String(r[6] || ""), note: String(r[7] || "") };
    })
  };
}

function rebuildAllStock_(ss) {
  const masterRows = getMasterStockRows_(ss);
  const masterMap = new Map();
  masterRows.forEach(function(item) { masterMap.set(normalizeKey_(item.name), item); });
  const balances = new Map();
  masterRows.forEach(function(item) { balances.set(normalizeKey_(item.name), 0); });

  const normalEvents = [];
  const openingSheet = ss.getSheetByName(SANTARA_V4.SHEETS.OPENING_BALANCE);
  if (openingSheet.getLastRow() > 1) {
    openingSheet.getRange(2, 1, openingSheet.getLastRow() - 1, V4_HEADERS.OPENING_BALANCE.length).getValues().forEach(function(r) {
      normalEvents.push(eventFrom_(r[0], 0, "SALDO_AWAL", r[4], r[1], toNumber_(r[2]), 0, r[3], "Saldo awal migrasi", r[5]));
    });
  }

  const stockInSheet = ss.getSheetByName(SANTARA_V4.SHEETS.STOCK_IN);
  if (stockInSheet.getLastRow() > 1) {
    stockInSheet.getRange(2, 1, stockInSheet.getLastRow() - 1, V4_HEADERS.STOCK_IN.length).getValues().forEach(function(r) {
      normalEvents.push(eventFrom_(r[0], 10, "STOCK_IN", "Stock In", r[2], toNumber_(r[5]), 0, r[6], r[8], r[9]));
    });
  }

  const adminProductionSheet = ss.getSheetByName(SANTARA_V4.SHEETS.ADMIN_PRODUCTION);
  if (adminProductionSheet.getLastRow() > 1) {
    const seenOutputs = new Set();
    adminProductionSheet.getRange(2, 1, adminProductionSheet.getLastRow() - 1, V4_HEADERS.ADMIN_PRODUCTION.length).getValues().forEach(function(r) {
      const id = String(r[0] || "").trim();
      const date = r[1];
      const baseName = normalizeItemName_(r[3]);
      const output = toNumber_(r[4]);
      const ingredient = normalizeItemName_(r[7]);
      const qty = toNumber_(r[8]);
      if (ingredient && qty > 0) {
        normalEvents.push(eventFrom_(date, 20, "ADMIN_BASE_PRODUCTION", id + " • " + baseName,
          ingredient, 0, qty, r[9], "Resep " + r[6] + (r[10] ? " • " + r[10] : ""), r[11]));
      }
      if (id && !seenOutputs.has(id) && baseName && output > 0) {
        normalEvents.push(eventFrom_(date, 30, "ADMIN_BASE_OUTPUT", id + " • Produksi internal",
          baseName, output, 0, "ml", String(r[10] || ""), r[11]));
        seenOutputs.add(id);
      }
    });
  }

  const snapshotSheet = ss.getSheetByName(SANTARA_V4.SHEETS.RECIPE_SNAPSHOT);
  if (snapshotSheet.getLastRow() > 1) {
    snapshotSheet.getRange(2, 1, snapshotSheet.getLastRow() - 1, V4_HEADERS.RECIPE_SNAPSHOT.length).getValues().forEach(function(r) {
      const context = String(r[1] || "");
      const order = context === "BASE_PRODUCTION" ? 20 : (context.indexOf("SALE") === 0 ? 40 : 50);
      normalEvents.push(eventFrom_(r[0], order, context, r[2] + " • " + r[3], r[6], 0, toNumber_(r[7]), r[8], "Resep " + r[9], r[10]));
    });
  }

  const baseSheet = ss.getSheetByName(SANTARA_V4.SHEETS.BASE);
  if (baseSheet.getLastRow() > 1) {
    baseSheet.getRange(2, 1, baseSheet.getLastRow() - 1, V4_HEADERS.BASE.length).getValues().forEach(function(r) {
      const produced = toNumber_(r[4]);
      if (produced > 0) normalEvents.push(eventFrom_(r[0], 30, "BASE_OUTPUT", "Produksi base", r[2], produced, 0, "ml", "Hasil aktual", r[9]));
    });
  }

  const fwSheet = ss.getSheetByName(SANTARA_V4.SHEETS.FREE_WASTE);
  if (fwSheet.getLastRow() > 1) {
    fwSheet.getRange(2, 1, fwSheet.getLastRow() - 1, V4_HEADERS.FREE_WASTE.length).getValues().forEach(function(r) {
      const itemType = String(r[3] || "").toUpperCase();
      if (itemType === "MENU") return;
      normalEvents.push(eventFrom_(r[0], 50, String(r[2] || "") + "_" + itemType,
        r[2] + " " + itemType, r[4], 0, toNumber_(r[6]), r[7], r[8], r[9]));
    });
  }

  normalEvents.sort(compareEvents_);
  const opnameSheet = ss.getSheetByName(SANTARA_V4.SHEETS.OPNAME_HISTORY);
  const opnameGroups = new Map();
  if (opnameSheet.getLastRow() > 1) {
    opnameSheet.getRange(2, 1, opnameSheet.getLastRow() - 1, V4_HEADERS.OPNAME.length).getValues().forEach(function(r) {
      const date = normalizeStoredDate_(r[0]);
      if (!date) return;
      if (!opnameGroups.has(date)) opnameGroups.set(date, []);
      opnameGroups.get(date).push(r);
    });
  }

  const allDates = new Set(normalEvents.map(function(e) { return e.date; }));
  Array.from(opnameGroups.keys()).forEach(function(d) { allDates.add(d); });
  const movementRows = [];
  const recalculatedOpnameRows = [];
  Array.from(allDates).sort().forEach(function(date) {
    normalEvents.filter(function(e) { return e.date === date; }).forEach(function(e) {
      const key = normalizeKey_(normalizeItemName_(e.item));
      if (!balances.has(key)) balances.set(key, 0);
      balances.set(key, balances.get(key) + e.inQty - e.outQty);
      movementRows.push([parseDateId_(e.date), e.order, e.type, e.source, normalizeItemName_(e.item), e.inQty, e.outQty,
        normalizeUnit_(e.unit), e.note, e.timestamp || new Date()]);
    });

    const opnameRows = opnameGroups.get(date) || [];
    opnameRows.forEach(function(r) {
      const name = normalizeItemName_(r[2]);
      const key = normalizeKey_(name);
      const before = balances.has(key) ? balances.get(key) : 0;
      const actual = toNumber_(r[4]);
      const diff = actual - before;
      balances.set(key, actual);
      movementRows.push([parseDateId_(date), 90, "OPNAME_ADJUSTMENT", "Stock opname", name,
        diff > 0 ? diff : 0, diff < 0 ? Math.abs(diff) : 0, normalizeUnit_(r[6]),
        String(r[7] || ""), r[8] || new Date()]);
      recalculatedOpnameRows.push([parseDateId_(date), String(r[1] || ""), name, before, actual, diff,
        normalizeUnit_(r[6]), String(r[7] || ""), r[8] || new Date()]);
    });
  });

  rewriteSheet_(ss.getSheetByName(SANTARA_V4.SHEETS.STOCK_MOVEMENT), V4_HEADERS.STOCK_MOVEMENT, movementRows);
  rewriteSheet_(opnameSheet, V4_HEADERS.OPNAME, recalculatedOpnameRows);

  const currentRows = masterRows.map(function(item) {
    const stock = balances.has(normalizeKey_(item.name)) ? balances.get(normalizeKey_(item.name)) : 0;
    return [item.name, item.category, item.unit, roundStockDisplay_(stock), item.limit, item.safety,
      calculateStockStatus_(stock, item.limit), new Date()];
  });
  rewriteSheet_(ss.getSheetByName(SANTARA_V4.SHEETS.CURRENT_STOCK), V4_HEADERS.CURRENT_STOCK, currentRows);

  const latestDate = recalculatedOpnameRows.length
    ? recalculatedOpnameRows.map(function(r) { return normalizeStoredDate_(r[0]); }).sort().slice(-1)[0]
    : "";
  const latestRows = latestDate ? recalculatedOpnameRows.filter(function(r) { return normalizeStoredDate_(r[0]) === latestDate; }) : [];
  rewriteSheet_(ss.getSheetByName(SANTARA_V4.SHEETS.OPNAME_LATEST), V4_HEADERS.OPNAME, latestRows);
}

function eventFrom_(dateValue, order, type, source, item, inQty, outQty, unit, note, timestamp) {
  return { date: normalizeStoredDate_(dateValue), order: order, type: type, source: String(source || ""),
    item: normalizeItemName_(item), inQty: toNumber_(inQty), outQty: toNumber_(outQty),
    unit: normalizeUnit_(unit), note: String(note || ""), timestamp: timestamp };
}

function compareEvents_(a, b) {
  if (a.date !== b.date) return a.date < b.date ? -1 : 1;
  return a.order - b.order;
}

function refreshDashboard_(ss) {
  const sheet = ss.getSheetByName(SANTARA_V4.SHEETS.DASHBOARD) || ss.insertSheet(SANTARA_V4.SHEETS.DASHBOARD);
  const customPeriod = readDashboardCustomPeriod_(sheet, ss);
  const usedRows = Math.max(80, sheet.getLastRow());
  const usedCols = Math.max(31, sheet.getLastColumn());
  const usedRange = sheet.getRange(1, 1, Math.min(usedRows, sheet.getMaxRows()), Math.min(usedCols, sheet.getMaxColumns()));
  try { usedRange.breakApart(); } catch (e) {}
  try { usedRange.clearDataValidations(); } catch (e) {}
  try { sheet.getCharts().forEach(function(chart) { sheet.removeChart(chart); }); } catch (e) {}
  sheet.clear();
  sheet.setHiddenGridlines(true);

  const latest = getLatestReport_(ss);
  const current = getCurrentStock_(ss);
  const restock = current.filter(function(i) { return i.status !== "✅ AMAN" || i.stock < 0; })
    .sort(function(a, b) { return a.stock - b.stock; });
  const estimate7 = getPurchaseEstimate_(ss, 7);
  const estimate30 = getPurchaseEstimate_(ss, 30);
  const tiers7 = getMenuTier_(ss, 7);
  const tiers30 = getMenuTier_(ss, 30);

  sheet.getRange("A1:F2").merge().setValue("PARAMA OPERATIONS DASHBOARD");
  styleTitle_(sheet.getRange("A1:F2"), "#241c3d");

  if (latest) {
    sheet.getRange("A4:F4").merge().setValue("LAPORAN TERBARU • " + formatDateLabel_(latest.date) + " • " + latest.staff);
    styleSection_(sheet.getRange("A4:F4"), "#7c3aed");
    writeCard_(sheet, "A5:B7", "TOTAL SALES", latest.totalSales, true);
    writeCard_(sheet, "D5:E7", "TOTAL EXPENSE", latest.totalExpense, true);
    writeCard_(sheet, "A9:B11", "EXPECTED CASH", latest.expectedCash, true);
    writeCard_(sheet, "D9:E11", "ACTUAL CASH", latest.actualCash, true);
    writeCard_(sheet, "A13:B15", "SELISIH CASH", latest.cashDifference, true);
    sheet.getRange("D13:E15").merge().setValue("TOTAL ORDER\n" + formatNumber_(latest.totalOrder) + "\n\nTOTAL ITEM TERJUAL\n" + formatNumber_(latest.totalItems));
    styleCard_(sheet.getRange("D13:E15"));
  } else {
    sheet.getRange("A4:F8").merge().setValue("Belum ada laporan V4. Laporan keuangan lama tetap tersimpan di Laporan_Closing.");
    styleEmpty_(sheet.getRange("A4:F8"));
  }

  writeRestockTable_(sheet, restock, 8, 1);
  writeEstimateTable_(sheet, estimate7, 14, 1, "ESTIMASI PEMBELIAN 7 HARI");
  writeEstimateTable_(sheet, estimate30, 20, 1, "ESTIMASI PEMBELIAN 30 HARI");

  writeFinancialDashboard_(ss, sheet, customPeriod);
  writeTierTable_(sheet, tiers7, 1, 48, "MENU TERLARIS 7 HARI");
  writeTierTable_(sheet, tiers30, 7, 48, "MENU TERLARIS 30 HARI");

  const updatedRow = 64;
  sheet.getRange(updatedRow, 1, 1, 24).merge().setValue(
    "Dashboard otomatis berdasarkan laporan, HPP, pengeluaran, penerimaan stok, Free, Waste, produksi base, dan stock opname. Update: " +
    Utilities.formatDate(new Date(), SANTARA_V4.TIME_ZONE, "dd MMMM yyyy HH:mm")
  ).setFontSize(9).setFontColor("#64748b").setHorizontalAlignment("left");

  const widths = [
    190, 145, 120, 185, 95, 145, 55,
    170, 95, 220, 90, 210, 45,
    220, 100, 145, 180, 250, 45,
    220, 100, 145, 180, 250, 45,
    35, 95, 130, 120, 120, 135
  ];
  widths.forEach(function(w, i) { sheet.setColumnWidth(i + 1, w); });

  const dashboardRows = Math.max(66, sheet.getLastRow());
  sheet.getRange(1, 1, dashboardRows, 31).setVerticalAlignment("middle");
  sheet.getRange(3, 8, Math.max(dashboardRows - 2, 1), 5).setWrap(false);
  sheet.getRange(3, 14, Math.max(dashboardRows - 2, 1), 5).setWrap(true);
  sheet.getRange(3, 20, Math.max(dashboardRows - 2, 1), 5).setWrap(true);
  sheet.getRange(3, 12, Math.max(dashboardRows - 2, 1), 1).setHorizontalAlignment("center").setWrap(false);
  sheet.setRowHeights(3, Math.max(dashboardRows - 2, 1), 34);
  sheet.setFrozenRows(2);
}

function readDashboardCustomPeriod_(sheet, ss) {
  const latestId = getLatestAnyReportDate_(ss) || formatDateId_(new Date());
  const firstId = getEarliestAnyReportDate_(ss) || addDaysToDateId_(latestId, -6);
  let start = "";
  let end = "";
  try { start = normalizeStoredDate_(sheet.getRange("O24").getValue()); } catch (e) {}
  try { end = normalizeStoredDate_(sheet.getRange("O25").getValue()); } catch (e) {}
  if (!start) start = firstId;
  if (!end) end = latestId;
  if (start > end) {
    const temp = start;
    start = end;
    end = temp;
  }
  return { start: start, end: end };
}

function getLatestAnyReportDate_(ss) {
  const sheet = ss.getSheetByName(SANTARA_V4.SHEETS.REPORT);
  if (!sheet || sheet.getLastRow() < 2) return "";
  const dates = sheet.getRange(2, 1, sheet.getLastRow() - 1, 1).getValues()
    .map(function(r) { return normalizeStoredDate_(r[0]); }).filter(Boolean).sort();
  return dates.length ? dates[dates.length - 1] : "";
}

function getEarliestAnyReportDate_(ss) {
  const sheet = ss.getSheetByName(SANTARA_V4.SHEETS.REPORT);
  if (!sheet || sheet.getLastRow() < 2) return "";
  const dates = sheet.getRange(2, 1, sheet.getLastRow() - 1, 1).getValues()
    .map(function(r) { return normalizeStoredDate_(r[0]); }).filter(Boolean).sort();
  return dates.length ? dates[0] : "";
}

function startOfWeekMonday_(dateId) {
  const d = parseDateId_(dateId);
  const offset = (d.getDay() + 6) % 7;
  return addDaysToDateId_(dateId, -offset);
}

function startOfMonthId_(dateId) {
  const d = parseDateId_(dateId);
  return Utilities.formatDate(new Date(d.getFullYear(), d.getMonth(), 1, 12, 0, 0), SANTARA_V4.TIME_ZONE, "yyyy-MM-dd");
}

function getHppRows_(ss) {
  const sheet = ss.getSheetByName(SANTARA_V4.SHEETS.MASTER_HPP_MENU) || ss.getSheetByName("Master_HPP");
  if (!sheet || sheet.getLastRow() < 2) return [];
  return sheet.getRange(2, 1, sheet.getLastRow() - 1, Math.min(8, sheet.getLastColumn())).getValues()
    .map(function(r) {
      return {
        menu: String(r[0] || "").trim(),
        size: String(r[1] || "").trim(),
        hpp: toNonNegativeNumber_(r[2]),
        version: String(r[3] || "").trim(),
        start: normalizeStoredDate_(r[4]),
        end: normalizeStoredDate_(r[5]),
        status: String(r[6] || "Aktif").trim()
      };
    })
    .filter(function(r) { return r.menu && r.hpp >= 0 && normalizeKey_(r.status) !== "nonaktif"; });
}

function findHppValue_(rows, dateId, menu, size, version) {
  const menuKey = normalizeKey_(menu);
  const sizeKey = normalizeKey_(size);
  const versionKey = normalizeKey_(version);
  const candidates = rows.filter(function(r) {
    if (normalizeKey_(r.menu) !== menuKey || normalizeKey_(r.size) !== sizeKey) return false;
    if (r.start && r.start > dateId) return false;
    if (r.end && r.end < dateId) return false;
    return true;
  });
  if (!candidates.length) return null;
  const exact = candidates.filter(function(r) { return versionKey && normalizeKey_(r.version) === versionKey; });
  const pool = exact.length ? exact : candidates;
  pool.sort(function(a, b) {
    const av = a.start || "";
    const bv = b.start || "";
    return av < bv ? 1 : av > bv ? -1 : 0;
  });
  return pool[0].hpp;
}

function buildFinancialIndex_(ss) {
  const reports = new Map();
  const reportSheet = ss.getSheetByName(SANTARA_V4.SHEETS.REPORT);
  if (reportSheet && reportSheet.getLastRow() > 1) {
    reportSheet.getRange(2, 1, reportSheet.getLastRow() - 1, V4_HEADERS.REPORT.length).getValues().forEach(function(r) {
      const date = normalizeStoredDate_(r[0]);
      if (!date) return;
      reports.set(date, {
        sales: toNumber_(r[9]),
        expense: toNumber_(r[12]),
        totalItems: toNumber_(r[11])
      });
    });
  }

  const purchases = new Map();
  const stockSheet = ss.getSheetByName(SANTARA_V4.SHEETS.STOCK_IN);
  if (stockSheet && stockSheet.getLastRow() > 1) {
    stockSheet.getRange(2, 1, stockSheet.getLastRow() - 1, V4_HEADERS.STOCK_IN.length).getValues().forEach(function(r) {
      const date = normalizeStoredDate_(r[0]);
      if (!date) return;
      purchases.set(date, (purchases.get(date) || 0) + toNumber_(r[7]));
    });
  }

  const hppRows = getHppRows_(ss);
  const hpp = new Map();
  const soldQty = new Map();
  const missingHpp = new Map();
  const missingDetail = new Map();
  const soldSheet = ss.getSheetByName(SANTARA_V4.SHEETS.MENU_SOLD);
  if (soldSheet && soldSheet.getLastRow() > 1) {
    soldSheet.getRange(2, 1, soldSheet.getLastRow() - 1, V4_HEADERS.MENU_SOLD.length).getValues().forEach(function(r) {
      const date = normalizeStoredDate_(r[0]);
      if (!date) return;
      const quantity = toNonNegativeNumber_(r[4]);
      soldQty.set(date, (soldQty.get(date) || 0) + quantity);
      const value = findHppValue_(hppRows, date, r[2], r[3], r[5]);
      if (value === null) {
        missingHpp.set(date, (missingHpp.get(date) || 0) + Math.max(1, quantity));
      } else {
        hpp.set(date, (hpp.get(date) || 0) + value * quantity);
      }
    });
  }

  reports.forEach(function(report, date) {
    const detailed = soldQty.get(date) || 0;
    if (report.totalItems > detailed) {
      missingDetail.set(date, (missingDetail.get(date) || 0) + Math.max(1, report.totalItems - detailed));
    }
  });

  return {
    reports: reports,
    purchases: purchases,
    hpp: hpp,
    missingHpp: missingHpp,
    missingDetail: missingDetail,
    soldQty: soldQty
  };
}

function summarizeFinance_(index, startId, endId) {
  let sales = 0;
  let hpp = 0;
  let expense = 0;
  let purchases = 0;
  let missingHpp = 0;
  let missingDetail = 0;
  let reportDays = 0;
  const detailDates = [];
  const hppDates = [];
  index.reports.forEach(function(r, date) {
    if (date < startId || date > endId) return;
    sales += r.sales;
    expense += r.expense;
    hpp += index.hpp.get(date) || 0;
    purchases += index.purchases.get(date) || 0;
    const detailCount = index.missingDetail.get(date) || 0;
    const hppCount = index.missingHpp.get(date) || 0;
    missingDetail += detailCount;
    missingHpp += hppCount;
    if (detailCount > 0) detailDates.push(date);
    if (hppCount > 0) hppDates.push(date);
    reportDays++;
  });
  const gross = sales - hpp;
  const net = gross - expense;
  const cashFlow = sales - expense - purchases;
  let status = "Belum ada data";
  if (reportDays) {
    if (!missingDetail && !missingHpp) {
      status = "✅ Lengkap";
    } else {
      const parts = [];
      if (missingDetail) {
        const labels = detailDates.slice(0, 3).map(function(date) {
          return Utilities.formatDate(parseDateId_(date), SANTARA_V4.TIME_ZONE, "dd MMM");
        });
        parts.push(formatNumber_(missingDetail) + " item lama tanpa rincian" + (labels.length ? " (" + labels.join(", ") + ")" : ""));
      }
      if (missingHpp) {
        parts.push(formatNumber_(missingHpp) + " item tanpa HPP");
      }
      status = "⚠️ Parsial • " + parts.join(" • ");
    }
  }
  return {
    sales: roundNumber_(sales),
    hpp: roundNumber_(hpp),
    gross: roundNumber_(gross),
    expense: roundNumber_(expense),
    net: roundNumber_(net),
    purchases: roundNumber_(purchases),
    cashFlow: roundNumber_(cashFlow),
    status: status
  };
}

function writeFinancialDashboard_(ss, sheet, customPeriod) {
  const latestId = getLatestAnyReportDate_(ss) || formatDateId_(new Date());
  const weekStart = startOfWeekMonday_(latestId);
  const monthStart = startOfMonthId_(latestId);
  const index = buildFinancialIndex_(ss);
  const summaries = [
    ["Minggu Ini\n" + formatDateLabel_(parseDateId_(weekStart)) + " – " + formatDateLabel_(parseDateId_(latestId)), summarizeFinance_(index, weekStart, latestId)],
    ["Bulan Ini\n" + formatDateLabel_(parseDateId_(monthStart)) + " – " + formatDateLabel_(parseDateId_(latestId)), summarizeFinance_(index, monthStart, latestId)],
    ["Custom\n" + formatDateLabel_(parseDateId_(customPeriod.start)) + " – " + formatDateLabel_(parseDateId_(customPeriod.end)), summarizeFinance_(index, customPeriod.start, customPeriod.end)]
  ];

  sheet.getRange("A23:L23").merge().setValue("RINGKASAN KEUANGAN");
  styleSection_(sheet.getRange("A23:L23"), "#0f766e");
  sheet.getRange("A24:F24").setValues([["Periode", "Pendapatan", "Total HPP", "Laba Kotor", "Pengeluaran", "Laba Bersih"]]);
  styleTableHeader_(sheet.getRange("A24:F24"));
  sheet.getRange("H24").setValue("Pembelian Stok");
  styleTableHeader_(sheet.getRange("H24"));
  sheet.getRange("I24:J24").merge().setValue("Arus Kas Bersih");
  styleTableHeader_(sheet.getRange("I24:J24"));
  sheet.getRange("K24:L24").merge().setValue("Status HPP");
  styleTableHeader_(sheet.getRange("K24:L24"));

  const metricRows = summaries.map(function(pair) {
    const s = pair[1];
    return [pair[0], s.sales, s.hpp, s.gross, s.expense, s.net, "", s.purchases, s.cashFlow];
  });
  sheet.getRange(25, 1, 3, 9).setValues(metricRows);
  styleTableBody_(sheet.getRange(25, 1, 3, 9));
  for (let row = 25; row <= 27; row++) sheet.getRange(row, 9, 1, 2).merge();
  styleTableBody_(sheet.getRange("I25:J27"));
  const statusRows = summaries.map(function(pair) { return [pair[1].status]; });
  sheet.getRange("K25:K27").setValues(statusRows);
  for (let row = 25; row <= 27; row++) sheet.getRange(row, 11, 1, 2).merge();
  styleTableBody_(sheet.getRange("K25:L27"));
  sheet.getRange("B25:F27").setNumberFormat('Rp #,##0;[Red]-Rp #,##0;-');
  sheet.getRange("H25:J27").setNumberFormat('Rp #,##0;[Red]-Rp #,##0;-');
  sheet.getRange("A25:A27").setFontWeight("bold").setBackground("#f8fafc");
  sheet.getRange("F25:F27").setFontWeight("bold").setBackground("#ecfdf5");
  sheet.getRange("I25:J27").setFontWeight("bold").setBackground("#eff6ff").setHorizontalAlignment("right");
  sheet.getRange("K25:L27").setWrap(true).setFontWeight("bold").setHorizontalAlignment("left").setFontSize(10);
  sheet.getRange("A24:L27").setFontSize(10);
  sheet.setRowHeight(24, 50);
  sheet.setRowHeights(25, 3, 56);

  sheet.getRange("M23:R23").merge().setValue("PERIODE CUSTOM");
  styleSection_(sheet.getRange("M23:R23"), "#7c3aed");
  sheet.getRange("M24:N24").merge().setValue("Tanggal Mulai");
  styleTableHeader_(sheet.getRange("M24:N24"));
  sheet.getRange("O24:P24").merge().setValue(parseDateId_(customPeriod.start)).setNumberFormat("dd mmmm yyyy");
  sheet.getRange("M25:N25").merge().setValue("Tanggal Selesai");
  styleTableHeader_(sheet.getRange("M25:N25"));
  sheet.getRange("O25:P25").merge().setValue(parseDateId_(customPeriod.end)).setNumberFormat("dd mmmm yyyy");
  sheet.getRange("Q24:R26").merge().setValue("Ubah tanggal, lalu jalankan Santara V4 → Perbarui Dashboard untuk menghitung ulang periode custom.").setWrap(true);
  styleEmpty_(sheet.getRange("Q24:R26"));
  const dateRule = SpreadsheetApp.newDataValidation().requireDate().setAllowInvalid(false).build();
  sheet.getRange("O24").setDataValidation(dateRule);
  sheet.getRange("O25").setDataValidation(dateRule);
  sheet.getRange("O24:P25").setBackground("#f5f3ff").setFontWeight("bold").setHorizontalAlignment("center")
    .setBorder(true, true, true, true, true, true, "#8b5cf6", SpreadsheetApp.BorderStyle.SOLID_MEDIUM);

  const helper = [["Tanggal", "Pendapatan", "HPP", "Pengeluaran", "Laba Bersih"]];
  const start30 = addDaysToDateId_(latestId, -29);
  for (let i = 0; i < 30; i++) {
    const date = addDaysToDateId_(start30, i);
    const s = summarizeFinance_(index, date, date);
    helper.push([parseDateId_(date), s.sales, s.hpp, s.expense, s.net]);
  }
  sheet.getRange(1, 27, helper.length, 5).setValues(helper);
  sheet.getRange(2, 27, helper.length - 1, 1).setNumberFormat("dd MMM");
  sheet.getRange(2, 28, helper.length - 1, 4).setNumberFormat('Rp #,##0;[Red]-Rp #,##0;-');
  sheet.getRange(1, 27, 1, 5).setFontWeight("bold").setBackground("#e2e8f0");

  try {
    const chart1 = sheet.newChart()
      .setChartType(Charts.ChartType.LINE)
      .addRange(sheet.getRange("AA1:AB31"))
      .addRange(sheet.getRange("AE1:AE31"))
      .setPosition(30, 1, 0, 0)
      .setOption("title", "Pendapatan vs Laba Bersih • 30 Hari")
      .setOption("legend", { position: "bottom" })
      .setOption("colors", ["#2563EB", "#16A34A"])
      .setOption("curveType", "function")
      .setOption("height", 330)
      .setOption("width", 720)
      .build();
    sheet.insertChart(chart1);

    const chart2 = sheet.newChart()
      .setChartType(Charts.ChartType.COLUMN)
      .addRange(sheet.getRange("AA1:AA31"))
      .addRange(sheet.getRange("AC1:AD31"))
      .setPosition(30, 14, 0, 0)
      .setOption("title", "HPP dan Pengeluaran • 30 Hari")
      .setOption("legend", { position: "bottom" })
      .setOption("colors", ["#8B5CF6", "#F97316"])
      .setOption("height", 330)
      .setOption("width", 680)
      .build();
    sheet.insertChart(chart2);
  } catch (chartError) {
    console.error("Grafik Dashboard belum berhasil dibuat: " + chartError);
  }
}

function rebuildVisibleHistories_(ss) {
  const stockRows = [];
  const stockIn = ss.getSheetByName(SANTARA_V4.SHEETS.STOCK_IN);
  if (stockIn && stockIn.getLastRow() > 1) {
    stockIn.getRange(2, 1, stockIn.getLastRow() - 1, V4_HEADERS.STOCK_IN.length).getValues().forEach(function(r) {
      const marker = String(r[8] || "");
      const source = marker.indexOf("__SANTARA_STOCKIN_ADMIN__") !== -1
        ? "Penerimaan Stok • Admin Panel"
        : "Penerimaan Stok • Laporan";
      const note = marker.replace("__SANTARA_STOCKIN_ADMIN__", "").replace(/^\\s*[•·-]\\s*/, "").trim();
      stockRows.push([r[0], source, r[1], r[2], r[3], r[4], r[5], r[6], r[7], "Menambah stok" + (note ? " • " + note : "")]);
    });
  }
  const base = ss.getSheetByName(SANTARA_V4.SHEETS.BASE);
  if (base && base.getLastRow() > 1) {
    base.getRange(2, 1, base.getLastRow() - 1, V4_HEADERS.BASE.length).getValues().forEach(function(r) {
      const produced = toNumber_(r[4]);
      if (produced <= 0) return;
      stockRows.push([r[0], "Produksi Base • Laporan Harian", r[1], r[2], produced, "ml", produced, "ml", 0, "Menambah stok"]);
    });
  }
  const prod = ss.getSheetByName(SANTARA_V4.SHEETS.ADMIN_PRODUCTION);
  if (prod && prod.getLastRow() > 1) {
    const seen = new Set();
    prod.getRange(2, 1, prod.getLastRow() - 1, V4_HEADERS.ADMIN_PRODUCTION.length).getValues().forEach(function(r) {
      const id = String(r[0] || "");
      if (!id || seen.has(id)) return;
      seen.add(id);
      stockRows.push([r[1], "Produksi Base • Admin Panel", r[2], r[3], r[4], "ml", r[4], "ml", 0, "Menambah stok"]);
    });
  }
  stockRows.sort(function(a, b) { return normalizeStoredDate_(a[0]) < normalizeStoredDate_(b[0]) ? 1 : -1; });
  rewriteSheet_(ss.getSheetByName(SANTARA_V4.SHEETS.STOCK_IN_HISTORY), V4_HEADERS.STOCK_IN_HISTORY, stockRows);

  const fwSheet = ss.getSheetByName(SANTARA_V4.SHEETS.FREE_WASTE);
  const fwRows = [];
  if (fwSheet && fwSheet.getLastRow() > 1) {
    fwSheet.getRange(2, 1, fwSheet.getLastRow() - 1, V4_HEADERS.FREE_WASTE.length).getValues().forEach(function(r) {
      fwRows.push([r[0], r[1], titleCase_(r[2]), titleCase_(r[3]), r[4], r[5], r[6], r[7], r[8], r[9]]);
    });
  }
  fwRows.sort(function(a, b) { return normalizeStoredDate_(a[0]) < normalizeStoredDate_(b[0]) ? 1 : -1; });
  rewriteSheet_(ss.getSheetByName(SANTARA_V4.SHEETS.FREE_WASTE_HISTORY), V4_HEADERS.FREE_WASTE_HISTORY, fwRows);
}
function getLatestReport_(ss) {
  const sheet = ss.getSheetByName(SANTARA_V4.SHEETS.REPORT);
  if (!sheet || sheet.getLastRow() < 2) return null;
  const rows = sheet.getRange(2, 1, sheet.getLastRow() - 1, V4_HEADERS.REPORT.length).getValues()
    .filter(function(r) { return normalizeStoredDate_(r[0]); })
    .sort(function(a, b) { return normalizeStoredDate_(a[0]) < normalizeStoredDate_(b[0]) ? 1 : -1; });
  if (!rows.length) return null;
  const r = rows[0];
  return { date: parseDateId_(normalizeStoredDate_(r[0])), staff: String(r[1] || ""), totalSales: toNumber_(r[9]),
    totalOrder: toNumber_(r[10]), totalItems: toNumber_(r[11]), totalExpense: toNumber_(r[12]),
    expectedCash: toNumber_(r[13]), actualCash: toNumber_(r[14]), cashDifference: toNumber_(r[15]) };
}

function getPurchaseEstimate_(ss, periodDays) {
  const latest = getLatestV4Date_(ss);
  if (!latest) return [];
  const start = addDaysToDateId_(latest, -(periodDays - 1));
  const validDates = getV4ReportDates_(ss).filter(function(d) { return d >= start && d <= latest; });
  const dayCount = validDates.length;
  const dateSet = new Set(validDates);
  const usage = new Map();
  const movement = ss.getSheetByName(SANTARA_V4.SHEETS.STOCK_MOVEMENT);
  if (movement.getLastRow() > 1) {
    movement.getRange(2, 1, movement.getLastRow() - 1, V4_HEADERS.STOCK_MOVEMENT.length).getValues().forEach(function(r) {
      const date = normalizeStoredDate_(r[0]);
      const type = String(r[2] || "");
      if (!dateSet.has(date) || type === "OPNAME_ADJUSTMENT" || type === "SALDO_AWAL") return;
      const out = toNumber_(r[6]);
      if (out <= 0) return;
      const key = normalizeKey_(r[4]);
      usage.set(key, (usage.get(key) || 0) + out);
    });
  }
  const currentMap = getCurrentStockMap_(ss);
  return getMasterStockRows_(ss).filter(function(item) {
    return normalizeKey_(item.category) !== "base";
  }).map(function(item) {
    const totalOut = usage.get(normalizeKey_(item.name)) || 0;
    const avg = dayCount > 0 ? totalOut / dayCount : 0;
    const current = currentMap.has(normalizeKey_(item.name)) ? currentMap.get(normalizeKey_(item.name)).stock : 0;
    const neededBase = dayCount >= 3 ? Math.max(0, avg * periodDays + item.safety - current) : 0;
    const samePurchaseUnit = normalizeKey_(item.purchaseUnit) === normalizeKey_(item.unit);
    const conversionReady = samePurchaseUnit || item.purchaseFactor > 0;
    const factor = samePurchaseUnit ? 1 : item.purchaseFactor;
    const purchaseQty = neededBase > 0 && conversionReady ? Math.ceil(neededBase / factor) : 0;
    let basis = dayCount < 3 ? "Data belum cukup (" + dayCount + " hari)" :
      (dayCount < 7 ? "Estimasi awal (" + dayCount + " hari)" : "Berdasarkan " + dayCount + " laporan");
    if (neededBase > 0 && !conversionReady) basis = "Atur isi per " + (item.purchaseUnit || "satuan beli");
    return { name: item.name, unit: item.unit, current: current, avg: avg, neededBase: neededBase,
      purchaseQty: purchaseQty, purchaseUnit: item.purchaseUnit || item.unit, basis: basis,
      conversionReady: conversionReady };
  }).filter(function(item) { return item.purchaseQty > 0 || item.avg > 0; })
    .sort(function(a, b) { return b.neededBase - a.neededBase; });
}

function getMenuTier_(ss, periodDays) {
  const latest = getLatestV4Date_(ss);
  if (!latest) return [];
  const start = addDaysToDateId_(latest, -(periodDays - 1));
  const sheet = ss.getSheetByName(SANTARA_V4.SHEETS.MENU_SOLD);
  const map = new Map();
  if (sheet.getLastRow() > 1) {
    sheet.getRange(2, 1, sheet.getLastRow() - 1, V4_HEADERS.MENU_SOLD.length).getValues().forEach(function(r) {
      const date = normalizeStoredDate_(r[0]);
      if (date < start || date > latest) return;
      const menu = String(r[2] || "");
      const size = String(r[3] || "");
      const qty = toNumber_(r[4]);
      const key = normalizeKey_(menu);
      if (!map.has(key)) map.set(key, { menu: menu, total: 0, sizes: {} });
      const item = map.get(key);
      item.total += qty;
      const sizeLabel = size || "Satu ukuran";
      item.sizes[sizeLabel] = (item.sizes[sizeLabel] || 0) + qty;
    });
  }
  return Array.from(map.values()).sort(function(a, b) { return b.total - a.total; }).map(function(item, index) {
    const rank = index + 1;
    const tier = rank <= 3 ? "S" : rank <= 6 ? "A" : rank <= 10 ? "B" : "C";
    const detail = Object.keys(item.sizes).map(function(s) { return s + ": " + formatNumber_(item.sizes[s]); }).join(" • ");
    return { tier: tier, menu: item.menu, total: item.total, detail: detail };
  });
}

function getLatestV4Date_(ss) {
  const dates = getV4ReportDates_(ss);
  return dates.length ? dates.sort().slice(-1)[0] : "";
}

function getV4ReportDates_(ss) {
  const sheet = ss.getSheetByName(SANTARA_V4.SHEETS.REPORT);
  if (!sheet || sheet.getLastRow() < 2) return [];
  return Array.from(new Set(sheet.getRange(2, 1, sheet.getLastRow() - 1, V4_HEADERS.REPORT.length).getValues()
    .filter(function(r) { return /^V4(?:\.|$)/i.test(String(r[16] || "").trim()); })
    .map(function(r) { return normalizeStoredDate_(r[0]); })
    .filter(Boolean)));
}

function writeRestockTable_(sheet, rows, startColumn, startRow) {
  const titleRange = sheet.getRange(startRow, startColumn, 1, 5);
  titleRange.merge().setValue("STOK PERLU DIPERHATIKAN");
  styleSection_(titleRange, "#b91c1c");
  sheet.getRange(startRow + 1, startColumn, 1, 5).setValues([["Item", "Stok", "Limit", "Saran", "Status"]]);
  styleTableHeader_(sheet.getRange(startRow + 1, startColumn, 1, 5));
  const body = rows.slice(0, 14).map(function(item) {
    const suggestion = Math.max(0, item.limit + item.safety - item.stock);
    return [item.name, formatStockWithUnit_(item.stock, item.unit), roundNumber_(item.limit), roundStockDisplay_(suggestion), item.status];
  });
  if (body.length) {
    sheet.getRange(startRow + 2, startColumn, body.length, 5).setValues(body);
    styleTableBody_(sheet.getRange(startRow + 2, startColumn, body.length, 5));
  } else {
    sheet.getRange(startRow + 2, startColumn, 2, 5).merge().setValue("Semua stok dalam kondisi aman.");
    styleEmpty_(sheet.getRange(startRow + 2, startColumn, 2, 5));
  }
}

function writeEstimateTable_(sheet, rows, startColumn, startRow, title) {
  const titleRange = sheet.getRange(startRow, startColumn, 1, 5);
  titleRange.merge().setValue(title);
  styleSection_(titleRange, "#1d4ed8");
  sheet.getRange(startRow + 1, startColumn, 1, 5).setValues([["Item", "Stok", "Rata-rata/Hari", "Saran Beli", "Basis"]]);
  styleTableHeader_(sheet.getRange(startRow + 1, startColumn, 1, 5));
  const body = rows.slice(0, 18).map(function(item) {
    const suggestion = !item.conversionReady && item.neededBase > 0
      ? "Atur konversi"
      : (item.purchaseQty > 0
        ? formatNumber_(item.purchaseQty) + " " + item.purchaseUnit + " (" + formatNumber_(item.neededBase) + " " + item.unit + ")"
        : "-");
    return [item.name, formatStockWithUnit_(item.current, item.unit), formatAverageWithUnit_(item.avg, item.unit), suggestion, item.basis];
  });
  if (body.length) {
    sheet.getRange(startRow + 2, startColumn, body.length, 5).setValues(body);
    styleTableBody_(sheet.getRange(startRow + 2, startColumn, body.length, 5));
  } else {
    sheet.getRange(startRow + 2, startColumn, 2, 5).merge().setValue("Data pemakaian V4 belum tersedia.");
    styleEmpty_(sheet.getRange(startRow + 2, startColumn, 2, 5));
  }
}

function writeTierTable_(sheet, rows, startColumn, startRow, title) {
  const titleRange = sheet.getRange(startRow, startColumn, 1, 5);
  titleRange.merge().setValue(title);
  styleSection_(titleRange, "#7c3aed");
  sheet.getRange(startRow + 1, startColumn, 1, 5).setValues([["Tier", "Menu", "Terjual", "Detail Ukuran", "Peringkat"]]);
  styleTableHeader_(sheet.getRange(startRow + 1, startColumn, 1, 5));
  const body = rows.slice(0, 12).map(function(item, index) {
    return [item.tier, item.menu, item.total, item.detail, index + 1];
  });
  if (body.length) {
    sheet.getRange(startRow + 2, startColumn, body.length, 5).setValues(body);
    styleTableBody_(sheet.getRange(startRow + 2, startColumn, body.length, 5));
    sheet.getRange(startRow + 2, startColumn + 2, body.length, 1).setNumberFormat("0");
    sheet.getRange(startRow + 2, startColumn + 4, body.length, 1).setNumberFormat("0");
    body.forEach(function(item, index) {
      const color = item[0] === "S" ? "#f59e0b" : item[0] === "A" ? "#8b5cf6" : item[0] === "B" ? "#2563eb" : "#64748b";
      sheet.getRange(startRow + 2 + index, startColumn).setBackground(color).setFontColor("#ffffff").setFontWeight("bold").setHorizontalAlignment("center");
    });
  } else {
    sheet.getRange(startRow + 2, startColumn, 2, 5).merge().setValue("Menu terjual mulai dihitung sejak V4 digunakan.");
    styleEmpty_(sheet.getRange(startRow + 2, startColumn, 2, 5));
  }
}

function writeCard_(sheet, a1, title, value, currency) {
  const range = sheet.getRange(a1);
  range.merge().setValue(title + "\n" + (currency ? formatCurrency_(value) : formatNumber_(value)));
  styleCard_(range);
}

function styleTitle_(range, color) {
  range.setBackground(color).setFontColor("#ffffff").setFontWeight("bold")
    .setFontSize(18).setHorizontalAlignment("left").setVerticalAlignment("middle");
}

function styleSection_(range, color) {
  range.setBackground(color).setFontColor("#ffffff").setFontWeight("bold")
    .setHorizontalAlignment("center").setVerticalAlignment("middle");
}

function styleCard_(range) {
  range.setBackground("#f8fafc").setFontColor("#1e293b").setFontWeight("bold")
    .setFontSize(12).setHorizontalAlignment("center").setVerticalAlignment("middle")
    .setWrap(true).setBorder(true, true, true, true, false, false, "#d8b4fe", SpreadsheetApp.BorderStyle.SOLID_MEDIUM);
}

function styleTableHeader_(range) {
  range.setBackground("#e0e7ff").setFontColor("#1d4ed8").setFontWeight("bold")
    .setHorizontalAlignment("center").setVerticalAlignment("middle").setWrap(true);
}

function styleTableBody_(range) {
  range.setFontColor("#1f2937").setVerticalAlignment("middle").setWrap(true)
    .setBorder(true, true, true, true, true, true, "#cbd5e1", SpreadsheetApp.BorderStyle.SOLID);
}

function styleEmpty_(range) {
  range.setBackground("#f8fafc").setFontColor("#64748b").setHorizontalAlignment("center")
    .setVerticalAlignment("middle").setWrap(true);
}

function formatAllSheets_(ss) {
  const configs = {};
  configs[SANTARA_V4.SHEETS.MASTER_STAFF] = [180, 110];
  configs[SANTARA_V4.SHEETS.MASTER_UNIT] = [120, 110];
  configs[SANTARA_V4.SHEETS.MASTER_STOCK] = [130, 210, 110, 115, 110, 100, 110, 130, 240];
  configs[SANTARA_V4.SHEETS.MASTER_MENU] = [210, 90, 140, 100];
  configs[SANTARA_V4.SHEETS.MASTER_RECIPE] = [210, 90, 210, 100, 90, 90, 120, 120, 100];
  configs[SANTARA_V4.SHEETS.MASTER_BASE_RECIPE] = [170, 210, 100, 90, 130, 90, 120, 120, 100, 120];
  configs[SANTARA_V4.SHEETS.MASTER_CONVERSION] = [210, 110, 110, 100, 100, 240];
  configs[SANTARA_V4.SHEETS.REPORT] = [115, 170, 115, 110, 110, 110, 110, 110, 110, 120, 105, 130, 120, 125, 115, 115, 120, 165, 165];
  configs[SANTARA_V4.SHEETS.MENU_SOLD] = [115, 170, 210, 90, 90, 100, 165];
  configs[SANTARA_V4.SHEETS.STOCK_IN] = [115, 170, 210, 105, 105, 125, 105, 120, 220, 165];
  configs[SANTARA_V4.SHEETS.EXPENSE] = [115, 170, 220, 100, 100, 120, 120, 220, 165];
  configs[SANTARA_V4.SHEETS.ADMIN_PRODUCTION] = [190, 115, 170, 180, 135, 140, 100, 210, 115, 90, 220, 165];
  configs[SANTARA_V4.SHEETS.BASE] = [115, 170, 170, 110, 125, 110, 105, 130, 100, 165];
  configs[SANTARA_V4.SHEETS.FREE_WASTE] = [115, 170, 90, 110, 210, 90, 100, 90, 220, 165];
  configs[SANTARA_V4.SHEETS.RECIPE_SNAPSHOT] = [115, 130, 120, 210, 90, 105, 210, 115, 90, 100, 165];
  configs[SANTARA_V4.SHEETS.OPENING_BALANCE] = [130, 210, 110, 90, 230, 165];
  configs[SANTARA_V4.SHEETS.STOCK_MOVEMENT] = [115, 80, 160, 210, 210, 100, 100, 90, 220, 165];
  configs[SANTARA_V4.SHEETS.CURRENT_STOCK] = [210, 130, 90, 120, 110, 110, 115, 165];
  configs[SANTARA_V4.SHEETS.OPNAME_LATEST] = [115, 170, 210, 150, 110, 110, 90, 220, 165];
  configs[SANTARA_V4.SHEETS.OPNAME_HISTORY] = configs[SANTARA_V4.SHEETS.OPNAME_LATEST];
  configs[SANTARA_V4.SHEETS.AUDIT] = [125, 165, 170, 130, 110, 230];
  configs[SANTARA_V4.SHEETS.MIGRATION_REVIEW] = [210, 110, 110, 120, 230, 260];
  configs[SANTARA_V4.SHEETS.MASTER_HPP_MENU] = [210, 90, 125, 105, 125, 125, 100, 260];
  configs[SANTARA_V4.SHEETS.MASTER_PRICE] = [210, 120, 110, 135, 110, 145, 125, 125, 100, 260];
  configs[SANTARA_V4.SHEETS.STOCK_IN_HISTORY] = [120, 210, 170, 210, 100, 100, 120, 110, 120, 230];
  configs[SANTARA_V4.SHEETS.FREE_WASTE_HISTORY] = [120, 170, 90, 110, 210, 90, 100, 90, 230, 165];

  Object.keys(configs).forEach(function(name) {
    const sheet = ss.getSheetByName(name);
    if (!sheet) return;

    const widths = configs[name];
    widths.forEach(function(width, index) {
      sheet.setColumnWidth(index + 1, width);
    });

    const style = getSheetVisualStyle_(name);
    const lastColumn = Math.max(1, widths.length, sheet.getLastColumn());
    const formatRows = Math.min(sheet.getMaxRows(), Math.max(200, sheet.getLastRow() + 50));

    sheet.setFrozenRows(1);
    sheet.setHiddenGridlines(true);
    sheet.setTabColor(style.tab);

    // Hapus banding lama lalu pasang banding sampai baris maksimum.
    // Dengan begitu baris baru dari aplikasi langsung ikut rapi tanpa perlu format ulang.
    try {
      sheet.getBandings().forEach(function(banding) { banding.remove(); });
    } catch (e) {}

    const banding = sheet.getRange(2, 1, formatRows - 1, lastColumn)
      .applyRowBanding(SpreadsheetApp.BandingTheme.LIGHT_GREY, false, false);
    banding.setFirstRowColor(style.row1).setSecondRowColor(style.row2);

    const header = sheet.getRange(1, 1, 1, lastColumn);
    header.setBackground(style.header)
      .setFontColor("#ffffff")
      .setFontWeight("bold")
      .setHorizontalAlignment("center")
      .setVerticalAlignment("middle")
      .setWrap(true);
    sheet.setRowHeight(1, 38);

    const usedRows = Math.max(sheet.getLastRow() - 1, 1);
    const body = sheet.getRange(2, 1, usedRows, lastColumn);
    body.setFontColor("#1f2937")
      .setVerticalAlignment("middle")
      .setWrap(true);
    sheet.setRowHeights(2, usedRows, 28);
  });

  organizeSheetTabs_(ss);
  applyNumberFormats_(ss);
  applyConditionalFormats_(ss);
}

function getSheetVisualStyle_(name) {
  const masterSheets = [
    SANTARA_V4.SHEETS.MASTER_STAFF,
    SANTARA_V4.SHEETS.MASTER_UNIT,
    SANTARA_V4.SHEETS.MASTER_STOCK,
    SANTARA_V4.SHEETS.MASTER_MENU,
    SANTARA_V4.SHEETS.MASTER_RECIPE,
    SANTARA_V4.SHEETS.MASTER_BASE_RECIPE,
    SANTARA_V4.SHEETS.MASTER_CONVERSION
  ];
  const stockSheets = [
    SANTARA_V4.SHEETS.CURRENT_STOCK,
    SANTARA_V4.SHEETS.OPNAME_LATEST,
    SANTARA_V4.SHEETS.OPNAME_HISTORY
  ];
  const setupSheets = [
    SANTARA_V4.SHEETS.OPENING_BALANCE,
    SANTARA_V4.SHEETS.MIGRATION_REVIEW
  ];
  const technicalSheets = [
    SANTARA_V4.SHEETS.RECIPE_SNAPSHOT,
    SANTARA_V4.SHEETS.STOCK_MOVEMENT,
    SANTARA_V4.SHEETS.AUDIT
  ];

  if (masterSheets.indexOf(name) !== -1) {
    return { header: "#4c1d95", row1: "#ffffff", row2: "#f5f3ff", tab: "#7c3aed" };
  }
  if (stockSheets.indexOf(name) !== -1) {
    return { header: "#14532d", row1: "#ffffff", row2: "#ecfdf5", tab: "#16a34a" };
  }
  if (setupSheets.indexOf(name) !== -1) {
    return { header: "#9a3412", row1: "#ffffff", row2: "#fff7ed", tab: name === SANTARA_V4.SHEETS.MIGRATION_REVIEW ? "#dc2626" : "#f59e0b" };
  }
  if (technicalSheets.indexOf(name) !== -1) {
    return { header: "#334155", row1: "#ffffff", row2: "#f1f5f9", tab: "#64748b" };
  }
  if (name === SANTARA_V4.SHEETS.FREE_WASTE) {
    return { header: "#9f1239", row1: "#ffffff", row2: "#fff1f2", tab: "#e11d48" };
  }
  if (name === SANTARA_V4.SHEETS.BASE) {
    return { header: "#115e59", row1: "#ffffff", row2: "#f0fdfa", tab: "#0f766e" };
  }
  if (name === SANTARA_V4.SHEETS.STOCK_IN) {
    return { header: "#075985", row1: "#ffffff", row2: "#eff6ff", tab: "#0284c7" };
  }
  if (name === SANTARA_V4.SHEETS.EXPENSE) {
    return { header: "#7c2d12", row1: "#ffffff", row2: "#fff7ed", tab: "#f97316" };
  }
  if (name === SANTARA_V4.SHEETS.ADMIN_PRODUCTION) {
    return { header: "#0f766e", row1: "#ffffff", row2: "#f0fdfa", tab: "#14b8a6" };
  }
  if (name === SANTARA_V4.SHEETS.MENU_SOLD) {
    return { header: "#155e75", row1: "#ffffff", row2: "#ecfeff", tab: "#0891b2" };
  }
  return { header: "#1e3a5f", row1: "#ffffff", row2: "#eef6ff", tab: "#2563eb" };
}

function organizeSheetTabs_(ss) {
  const visibleOrder = [
    SANTARA_V4.SHEETS.DASHBOARD,
    SANTARA_V4.SHEETS.REPORT,
    SANTARA_V4.SHEETS.STOCK_IN_HISTORY,
    SANTARA_V4.SHEETS.FREE_WASTE_HISTORY,
    SANTARA_V4.SHEETS.CURRENT_STOCK,
    SANTARA_V4.SHEETS.OPNAME_LATEST
  ];
  const visible = new Set(visibleOrder);
  const colors = {};
  colors[SANTARA_V4.SHEETS.DASHBOARD] = "#1d4ed8";
  colors[SANTARA_V4.SHEETS.REPORT] = "#16a34a";
  colors[SANTARA_V4.SHEETS.STOCK_IN_HISTORY] = "#0284c7";
  colors[SANTARA_V4.SHEETS.FREE_WASTE_HISTORY] = "#e11d48";
  colors[SANTARA_V4.SHEETS.CURRENT_STOCK] = "#f59e0b";
  colors[SANTARA_V4.SHEETS.OPNAME_LATEST] = "#8b5cf6";

  visibleOrder.forEach(function(name, index) {
    const sheet = ss.getSheetByName(name);
    if (!sheet) return;
    try { sheet.showSheet(); } catch (e) {}
    if (colors[name]) sheet.setTabColor(colors[name]);
    ss.setActiveSheet(sheet);
    ss.moveActiveSheet(index + 1);
  });

  ss.getSheets().forEach(function(sheet) {
    if (visible.has(sheet.getName())) return;
    try { sheet.hideSheet(); } catch (e) {}
  });

  const dashboard = ss.getSheetByName(SANTARA_V4.SHEETS.DASHBOARD);
  if (dashboard) {
    try { dashboard.showSheet(); } catch (e) {}
    ss.setActiveSheet(dashboard);
  }
}


function applyNumberFormats_(ss) {
  const report = ss.getSheetByName(SANTARA_V4.SHEETS.REPORT);
  if (report && report.getMaxRows() > 1) {
    report.getRange(2, 1, report.getMaxRows() - 1, 1).setNumberFormat("dd mmmm yyyy");
    report.getRange(2, 3, report.getMaxRows() - 1, 8).setNumberFormat('Rp #,##0;[Red]-Rp #,##0;-');
    report.getRange(2, 11, report.getMaxRows() - 1, 2).setNumberFormat('#,##0;[Red]-#,##0;-');
    report.getRange(2, 13, report.getMaxRows() - 1, 4).setNumberFormat('Rp #,##0;[Red]-Rp #,##0;-');
    report.getRange(2, 18, report.getMaxRows() - 1, 2).setNumberFormat("dd mmmm yyyy HH:mm");
  }
  [SANTARA_V4.SHEETS.MENU_SOLD, SANTARA_V4.SHEETS.STOCK_IN, SANTARA_V4.SHEETS.EXPENSE,
    SANTARA_V4.SHEETS.BASE,
    SANTARA_V4.SHEETS.FREE_WASTE, SANTARA_V4.SHEETS.RECIPE_SNAPSHOT,
    SANTARA_V4.SHEETS.OPENING_BALANCE, SANTARA_V4.SHEETS.STOCK_MOVEMENT,
    SANTARA_V4.SHEETS.OPNAME_LATEST, SANTARA_V4.SHEETS.OPNAME_HISTORY,
    SANTARA_V4.SHEETS.STOCK_IN_HISTORY, SANTARA_V4.SHEETS.FREE_WASTE_HISTORY,
    SANTARA_V4.SHEETS.MASTER_HPP_MENU, SANTARA_V4.SHEETS.MASTER_PRICE,
    SANTARA_V4.SHEETS.AUDIT].forEach(function(name) {
      const sheet = ss.getSheetByName(name);
      if (sheet && sheet.getMaxRows() > 1) sheet.getRange(2, 1, sheet.getMaxRows() - 1, 1).setNumberFormat("dd mmmm yyyy");
    });
  const currentStock = ss.getSheetByName(SANTARA_V4.SHEETS.CURRENT_STOCK);
  if (currentStock && currentStock.getMaxRows() > 1) {
    currentStock.getRange(2, 4, currentStock.getMaxRows() - 1, 1).setNumberFormat('#,##0.##');
  }
  const stockIn = ss.getSheetByName(SANTARA_V4.SHEETS.STOCK_IN);
  if (stockIn) stockIn.getRange(2, 8, stockIn.getMaxRows() - 1, 1).setNumberFormat('Rp #,##0;[Red]-Rp #,##0;-');
  const expense = ss.getSheetByName(SANTARA_V4.SHEETS.EXPENSE);
  if (expense) expense.getRange(2, 6, expense.getMaxRows() - 1, 2).setNumberFormat('Rp #,##0;[Red]-Rp #,##0;-');
  const historyStock = ss.getSheetByName(SANTARA_V4.SHEETS.STOCK_IN_HISTORY);
  if (historyStock) historyStock.getRange(2, 9, historyStock.getMaxRows() - 1, 1).setNumberFormat('Rp #,##0;[Red]-Rp #,##0;-');
  const hppSheet = ss.getSheetByName(SANTARA_V4.SHEETS.MASTER_HPP_MENU);
  if (hppSheet) {
    hppSheet.getRange(2, 3, hppSheet.getMaxRows() - 1, 1).setNumberFormat('Rp #,##0;[Red]-Rp #,##0;-');
    hppSheet.getRange(2, 5, hppSheet.getMaxRows() - 1, 2).setNumberFormat("dd mmmm yyyy");
  }
  const priceSheet = ss.getSheetByName(SANTARA_V4.SHEETS.MASTER_PRICE);
  if (priceSheet) {
    priceSheet.getRange(2, 2, priceSheet.getMaxRows() - 1, 1).setNumberFormat('Rp #,##0;[Red]-Rp #,##0;-');
    priceSheet.getRange(2, 6, priceSheet.getMaxRows() - 1, 1).setNumberFormat('Rp #,##0.00;[Red]-Rp #,##0.00;-');
    priceSheet.getRange(2, 7, priceSheet.getMaxRows() - 1, 2).setNumberFormat("dd mmmm yyyy");
  }
  const production = ss.getSheetByName(SANTARA_V4.SHEETS.ADMIN_PRODUCTION);
  if (production && production.getMaxRows() > 1) {
    production.getRange(2, 2, production.getMaxRows() - 1, 1).setNumberFormat("dd mmmm yyyy");
    production.getRange(2, 12, production.getMaxRows() - 1, 1).setNumberFormat("dd mmmm yyyy HH:mm");
  }
}

function applyConditionalFormats_(ss) {
  const current = ss.getSheetByName(SANTARA_V4.SHEETS.CURRENT_STOCK);
  if (current) {
    const rowRange = current.getRange(2, 1, Math.max(current.getMaxRows() - 1, 1), 8);
    const statusRange = current.getRange(2, 7, Math.max(current.getMaxRows() - 1, 1), 1);
    current.setConditionalFormatRules([
      SpreadsheetApp.newConditionalFormatRule()
        .whenFormulaSatisfied('=ISNUMBER(SEARCH("RESTOCK",$G2))')
        .setBackground("#fee2e2").setFontColor("#991b1b").setRanges([rowRange]).build(),
      SpreadsheetApp.newConditionalFormatRule()
        .whenFormulaSatisfied('=ISNUMBER(SEARCH("MENIPIS",$G2))')
        .setBackground("#fef3c7").setFontColor("#92400e").setRanges([rowRange]).build(),
      SpreadsheetApp.newConditionalFormatRule()
        .whenTextContains("AMAN")
        .setBackground("#dcfce7").setFontColor("#166534").setRanges([statusRange]).build()
    ]);
  }

  const report = ss.getSheetByName(SANTARA_V4.SHEETS.REPORT);
  if (report) {
    const diffRange = report.getRange(2, 16, Math.max(report.getMaxRows() - 1, 1), 1);
    report.setConditionalFormatRules([
      SpreadsheetApp.newConditionalFormatRule().whenNumberLessThan(0)
        .setBackground("#fee2e2").setFontColor("#b91c1c").setBold(true).setRanges([diffRange]).build(),
      SpreadsheetApp.newConditionalFormatRule().whenNumberGreaterThan(0)
        .setBackground("#fef3c7").setFontColor("#92400e").setBold(true).setRanges([diffRange]).build(),
      SpreadsheetApp.newConditionalFormatRule().whenNumberEqualTo(0)
        .setBackground("#dcfce7").setFontColor("#166534").setBold(true).setRanges([diffRange]).build()
    ]);
  }

  const conversion = ss.getSheetByName(SANTARA_V4.SHEETS.MASTER_CONVERSION);
  if (conversion) {
    const factorRange = conversion.getRange(2, 4, Math.max(conversion.getMaxRows() - 1, 1), 1);
    const statusRange = conversion.getRange(2, 5, Math.max(conversion.getMaxRows() - 1, 1), 1);
    conversion.setConditionalFormatRules([
      SpreadsheetApp.newConditionalFormatRule()
        .whenFormulaSatisfied('=AND($E2="Aktif",OR($D2="",NOT(ISNUMBER($D2)),$D2<=0))')
        .setBackground("#fef3c7").setFontColor("#92400e").setBold(true).setRanges([factorRange]).build(),
      SpreadsheetApp.newConditionalFormatRule().whenTextEqualTo("Aktif")
        .setBackground("#dcfce7").setFontColor("#166534").setRanges([statusRange]).build(),
      SpreadsheetApp.newConditionalFormatRule().whenTextEqualTo("Nonaktif")
        .setBackground("#e5e7eb").setFontColor("#6b7280").setRanges([statusRange]).build()
    ]);
  }

  const masterStock = ss.getSheetByName(SANTARA_V4.SHEETS.MASTER_STOCK);
  if (masterStock) {
    const factorRange = masterStock.getRange(2, 8, Math.max(masterStock.getMaxRows() - 1, 1), 1);
    const statusRange = masterStock.getRange(2, 6, Math.max(masterStock.getMaxRows() - 1, 1), 1);
    masterStock.setConditionalFormatRules([
      SpreadsheetApp.newConditionalFormatRule()
        .whenFormulaSatisfied('=AND($F2="Aktif",$G2<>$C2,OR($H2="",NOT(ISNUMBER($H2)),$H2<=0))')
        .setBackground("#fef3c7").setFontColor("#92400e").setBold(true).setRanges([factorRange]).build(),
      SpreadsheetApp.newConditionalFormatRule().whenTextEqualTo("Aktif")
        .setBackground("#dcfce7").setFontColor("#166534").setRanges([statusRange]).build(),
      SpreadsheetApp.newConditionalFormatRule().whenTextEqualTo("Nonaktif")
        .setBackground("#e5e7eb").setFontColor("#6b7280").setRanges([statusRange]).build()
    ]);
  }

  applyActiveStatusRules_(ss.getSheetByName(SANTARA_V4.SHEETS.MASTER_STAFF), 2);
  applyActiveStatusRules_(ss.getSheetByName(SANTARA_V4.SHEETS.MASTER_UNIT), 2);
  applyActiveStatusRules_(ss.getSheetByName(SANTARA_V4.SHEETS.MASTER_MENU), 4);
  applyActiveStatusRules_(ss.getSheetByName(SANTARA_V4.SHEETS.MASTER_RECIPE), 9);
  applyActiveStatusRules_(ss.getSheetByName(SANTARA_V4.SHEETS.MASTER_BASE_RECIPE), 9);

  const baseRecipe = ss.getSheetByName(SANTARA_V4.SHEETS.MASTER_BASE_RECIPE);
  if (baseRecipe) {
    const existingRules = baseRecipe.getConditionalFormatRules();
    const productionRange = baseRecipe.getRange(2, 10, Math.max(baseRecipe.getMaxRows() - 1, 1), 1);
    existingRules.push(
      SpreadsheetApp.newConditionalFormatRule().whenTextEqualTo("Tidak")
        .setBackground("#e5e7eb").setFontColor("#6b7280").setRanges([productionRange]).build(),
      SpreadsheetApp.newConditionalFormatRule().whenTextEqualTo("Ya")
        .setBackground("#dcfce7").setFontColor("#166534").setRanges([productionRange]).build()
    );
    baseRecipe.setConditionalFormatRules(existingRules);
  }

  const freeWaste = ss.getSheetByName(SANTARA_V4.SHEETS.FREE_WASTE);
  if (freeWaste) {
    const typeRange = freeWaste.getRange(2, 3, Math.max(freeWaste.getMaxRows() - 1, 1), 1);
    freeWaste.setConditionalFormatRules([
      SpreadsheetApp.newConditionalFormatRule().whenTextEqualTo("Free")
        .setBackground("#dcfce7").setFontColor("#166534").setBold(true).setRanges([typeRange]).build(),
      SpreadsheetApp.newConditionalFormatRule().whenTextEqualTo("Waste")
        .setBackground("#fee2e2").setFontColor("#b91c1c").setBold(true).setRanges([typeRange]).build()
    ]);
  }

  const opname = ss.getSheetByName(SANTARA_V4.SHEETS.OPNAME_LATEST);
  if (opname) {
    const diffRange = opname.getRange(2, 6, Math.max(opname.getMaxRows() - 1, 1), 1);
    opname.setConditionalFormatRules([
      SpreadsheetApp.newConditionalFormatRule().whenNumberLessThan(0)
        .setBackground("#fee2e2").setFontColor("#b91c1c").setBold(true).setRanges([diffRange]).build(),
      SpreadsheetApp.newConditionalFormatRule().whenNumberGreaterThan(0)
        .setBackground("#fef3c7").setFontColor("#92400e").setBold(true).setRanges([diffRange]).build(),
      SpreadsheetApp.newConditionalFormatRule().whenNumberEqualTo(0)
        .setBackground("#dcfce7").setFontColor("#166534").setBold(true).setRanges([diffRange]).build()
    ]);
  }

  const migration = ss.getSheetByName(SANTARA_V4.SHEETS.MIGRATION_REVIEW);
  if (migration && migration.getMaxRows() > 1) {
    const body = migration.getRange(2, 1, migration.getMaxRows() - 1, 6);
    migration.setConditionalFormatRules([
      SpreadsheetApp.newConditionalFormatRule()
        .whenFormulaSatisfied('=$A2<>""')
        .setBackground("#fff1f2").setFontColor("#9f1239").setRanges([body]).build()
    ]);
  }
}

function applyActiveStatusRules_(sheet, statusColumn) {
  if (!sheet) return;
  const range = sheet.getRange(2, statusColumn, Math.max(sheet.getMaxRows() - 1, 1), 1);
  sheet.setConditionalFormatRules([
    SpreadsheetApp.newConditionalFormatRule().whenTextEqualTo("Aktif")
      .setBackground("#dcfce7").setFontColor("#166534").setRanges([range]).build(),
    SpreadsheetApp.newConditionalFormatRule().whenTextEqualTo("Nonaktif")
      .setBackground("#e5e7eb").setFontColor("#6b7280").setRanges([range]).build()
  ]);
}


function ensureAdminPin_() {
  const props = PropertiesService.getScriptProperties();
  if (!props.getProperty(SANTARA_V4.PROPERTY_ADMIN_PIN)) {
    props.setProperty(SANTARA_V4.PROPERTY_ADMIN_PIN, SANTARA_V4.DEFAULT_ADMIN_PIN);
  }
}

function adminLogin(pin) {
  ensureAdminPin_();
  const expected = PropertiesService.getScriptProperties().getProperty(SANTARA_V4.PROPERTY_ADMIN_PIN);
  if (String(pin || "") !== String(expected || "")) throw new Error("PIN admin salah.");
  const token = Utilities.getUuid().replace(/-/g, "");
  CacheService.getScriptCache().put(SANTARA_V4.ADMIN_SESSION_PREFIX + token, "ok", 1800);
  return { success: true, token: token, expiresMinutes: 30, data: getAdminData_(getRuntimeSpreadsheet_()) };
}

function adminLogout(token) {
  if (token) CacheService.getScriptCache().remove(SANTARA_V4.ADMIN_SESSION_PREFIX + String(token));
  return true;
}

function assertAdminSession_(token) {
  const key = SANTARA_V4.ADMIN_SESSION_PREFIX + String(token || "");
  if (!token || CacheService.getScriptCache().get(key) !== "ok") {
    throw new Error("Sesi admin berakhir. Masukkan PIN lagi.");
  }
  CacheService.getScriptCache().put(key, "ok", 1800);
}

function adminGetData(token) {
  assertAdminSession_(token);
  return getAdminData_(getRuntimeSpreadsheet_());
}

function getAdminData_(ss) {
  return {
    today: formatDateId_(new Date()),
    units: getActiveRows_(ss.getSheetByName(SANTARA_V4.SHEETS.MASTER_UNIT), 0, 1),
    stockItems: getAllMasterStockRows_(ss),
    menus: getAllMenuRows_(ss),
    baseTypes: getAdminBaseTypes_(ss),
    allBaseTypes: getBaseTypes_(ss),
    currentStock: getCurrentStock_(ss),
    openingBalances: getOpeningBalanceMap_(ss),
    checks: runSystemChecks_(ss),
    recentStockIn: getRecentRows_(ss.getSheetByName(SANTARA_V4.SHEETS.STOCK_IN), V4_HEADERS.STOCK_IN.length, 10),
    recentProduction: getRecentRows_(ss.getSheetByName(SANTARA_V4.SHEETS.ADMIN_PRODUCTION), V4_HEADERS.ADMIN_PRODUCTION.length, 12)
  };
}

function getAllMasterStockRows_(ss) {
  const sheet = ss.getSheetByName(SANTARA_V4.SHEETS.MASTER_STOCK);
  if (!sheet || sheet.getLastRow() < 2) return [];
  return sheet.getRange(2, 1, sheet.getLastRow() - 1, V4_HEADERS.MASTER_STOCK.length).getValues()
    .filter(function(r) { return String(r[1] || "").trim(); })
    .map(function(r) { return {
      category: String(r[0] || ""), name: normalizeItemName_(r[1]), unit: normalizeUnit_(r[2]),
      limit: toNonNegativeNumber_(r[3]), safety: toNonNegativeNumber_(r[4]),
      status: String(r[5] || "Aktif"), purchaseUnit: normalizeUnit_(r[6] || r[2]),
      purchaseFactor: toNumber_(r[7]), note: String(r[8] || "")
    }; });
}

function getAllMenuRows_(ss) {
  const sheet = ss.getSheetByName(SANTARA_V4.SHEETS.MASTER_MENU);
  if (!sheet || sheet.getLastRow() < 2) return [];
  return sheet.getRange(2, 1, sheet.getLastRow() - 1, V4_HEADERS.MASTER_MENU.length).getValues()
    .filter(function(r) { return String(r[0] || "").trim(); })
    .map(function(r) { return { menu: String(r[0] || ""), size: String(r[1] || ""), category: String(r[2] || ""), status: String(r[3] || "Aktif") }; });
}

function getOpeningBalanceMap_(ss) {
  const sheet = ss.getSheetByName(SANTARA_V4.SHEETS.OPENING_BALANCE);
  const map = {};
  if (!sheet || sheet.getLastRow() < 2) return map;
  sheet.getRange(2, 1, sheet.getLastRow() - 1, V4_HEADERS.OPENING_BALANCE.length).getValues().forEach(function(r) {
    if (r[1]) map[normalizeKey_(r[1])] = { date: normalizeStoredDate_(r[0]), quantity: toNumber_(r[2]), unit: String(r[3] || "") };
  });
  return map;
}

function getRecentRows_(sheet, columns, limit) {
  if (!sheet || sheet.getLastRow() < 2) return [];
  const count = Math.min(limit || 10, sheet.getLastRow() - 1);
  return sheet.getRange(Math.max(2, sheet.getLastRow() - count + 1), 1, count, columns).getDisplayValues().reverse();
}

function adminChangePin(token, currentPin, newPin) {
  assertAdminSession_(token);
  ensureAdminPin_();
  const props = PropertiesService.getScriptProperties();
  if (String(currentPin || "") !== String(props.getProperty(SANTARA_V4.PROPERTY_ADMIN_PIN) || "")) throw new Error("PIN lama salah.");
  const pin = String(newPin || "").trim();
  if (!/^\d{4,8}$/.test(pin)) throw new Error("PIN baru harus 4 sampai 8 angka.");
  props.setProperty(SANTARA_V4.PROPERTY_ADMIN_PIN, pin);
  return { success: true };
}

function adminSubmitStockIn(token, payload) {
  assertAdminSession_(token);
  const ss = getRuntimeSpreadsheet_();
  const lock = LockService.getScriptLock();
  lock.waitLock(30000);
  try {
    const date = normalizeDateString_(payload && payload.date);
    const admin = String(payload && payload.admin || "Admin").trim() || "Admin";
    const masterMap = getMasterStockMap_(ss);
    const conversionMap = getConversionMap_(ss);
    const rows = normalizeStockInRows_(payload && payload.items, masterMap, conversionMap);
    if (!rows.length) throw new Error("Belum ada barang yang dimasukkan.");
    const now = new Date();
    const sheet = ss.getSheetByName(SANTARA_V4.SHEETS.STOCK_IN);
    const values = rows.map(function(item) { return [parseDateId_(date), admin, item.name, item.inputQuantity, item.inputUnit,
      item.baseQuantity, item.baseUnit, item.totalCost, item.note, now]; });
    sheet.getRange(sheet.getLastRow() + 1, 1, values.length, V4_HEADERS.STOCK_IN.length).setValues(values);
    appendAudit_(ss, date, admin, "ADMIN STOCK IN", rows.length + " item");
    rebuildAllStock_(ss); rebuildVisibleHistories_(ss); refreshDashboard_(ss); clearSantaraCache_(); SpreadsheetApp.flush();
    return { success: true, itemCount: rows.length };
  } finally { lock.releaseLock(); }
}

function adminSubmitProduction(token, payload) {
  assertAdminSession_(token);
  const ss = getRuntimeSpreadsheet_();
  const lock = LockService.getScriptLock();
  lock.waitLock(30000);
  try {
    const date = normalizeDateString_(payload && payload.date);
    const admin = String(payload && payload.admin || "Admin").trim() || "Admin";
    const items = (Array.isArray(payload && payload.items) ? payload.items : []).filter(hasMeaningfulObject_);
    if (!items.length) throw new Error("Belum ada produksi internal yang diisi.");
    const now = new Date();
    const out = [];
    items.forEach(function(item, index) {
      const type = String(item.type || "").trim();
      const produced = requirePositiveNumber_(item.produced, "Produksi baris " + (index + 1));
      const recipe = getActiveBaseRecipe_(ss, type, date);
      if (!recipe.rows.length || !(recipe.standardOutput > 0)) throw new Error("Resep produksi " + type + " belum lengkap atau belum aktif.");
      const id = "PROD-" + Utilities.formatDate(now, SANTARA_V4.TIME_ZONE, "yyyyMMdd-HHmmss") + "-" + Utilities.getUuid().slice(0, 6);
      const factor = produced / recipe.standardOutput;
      recipe.rows.forEach(function(r) {
        const converted = convertRecipeIngredient_(ss, r.ingredient, r.quantity * factor, r.unit);
        out.push([id, parseDateId_(date), admin, type, produced, recipe.standardOutput, recipe.version,
          converted.name, converted.quantity, converted.unit, String(item.note || "").trim(), now]);
      });
    });
    const sheet = ss.getSheetByName(SANTARA_V4.SHEETS.ADMIN_PRODUCTION);
    sheet.getRange(sheet.getLastRow() + 1, 1, out.length, V4_HEADERS.ADMIN_PRODUCTION.length).setValues(out);
    appendAudit_(ss, date, admin, "ADMIN PRODUKSI", items.length + " batch");
    rebuildAllStock_(ss); rebuildVisibleHistories_(ss); refreshDashboard_(ss); clearSantaraCache_(); SpreadsheetApp.flush();
    return { success: true, batchCount: items.length };
  } finally { lock.releaseLock(); }
}

function adminSaveStockItem(token, payload) {
  assertAdminSession_(token);
  const ss = getRuntimeSpreadsheet_();
  const name = normalizeItemName_(payload && payload.name);
  if (!name) throw new Error("Nama barang belum diisi.");
  const originalName = normalizeItemName_(payload && payload.originalName);
  if (originalName && normalizeKey_(originalName) !== normalizeKey_(name)) throw new Error("Nama barang lama tidak boleh diganti. Nonaktifkan barang lama lalu buat barang baru.");
  const unit = normalizeUnit_(payload.unit);
  const purchaseUnit = normalizeUnit_(payload.purchaseUnit || unit);
  if (!unit || !purchaseUnit) throw new Error("Satuan dasar dan satuan beli wajib diisi.");
  const factor = normalizeKey_(unit) === normalizeKey_(purchaseUnit) ? 1 : requirePositiveNumber_(payload.purchaseFactor, "Isi per satuan beli");
  const row = [String(payload.category || "Lainnya").trim() || "Lainnya", name, unit,
    toNonNegativeNumber_(payload.limit), toNonNegativeNumber_(payload.safety),
    normalizeKey_(payload.status) === "nonaktif" ? "Nonaktif" : "Aktif", purchaseUnit, factor, String(payload.note || "").trim()];
  const sheet = ss.getSheetByName(SANTARA_V4.SHEETS.MASTER_STOCK);
  let rowNumber = 0;
  if (sheet.getLastRow() > 1) {
    const names = sheet.getRange(2, 2, sheet.getLastRow() - 1, 1).getDisplayValues();
    for (let i = 0; i < names.length; i++) if (normalizeKey_(names[i][0]) === normalizeKey_(name)) { rowNumber = i + 2; break; }
  }
  if (rowNumber) {
    const oldUnit = normalizeUnit_(sheet.getRange(rowNumber, 3).getDisplayValue());
    if (oldUnit && normalizeKey_(oldUnit) !== normalizeKey_(unit)) throw new Error("Satuan dasar barang lama tidak boleh diubah karena bisa merusak histori. Buat barang baru.");
    sheet.getRange(rowNumber, 1, 1, row.length).setValues([row]);
  } else sheet.getRange(sheet.getLastRow() + 1, 1, 1, row.length).setValues([row]);
  upsertConversion_(ss, name, unit, unit, 1, "Aktif", "Satuan dasar");
  upsertConversion_(ss, name, purchaseUnit, unit, factor, "Aktif", "1 " + purchaseUnit + " = " + factor + " " + unit);
  clearSantaraCache_(); rebuildAllStock_(ss); refreshDashboard_(ss); SpreadsheetApp.flush();
  return { success: true };
}

function upsertConversion_(ss, name, inputUnit, baseUnit, factor, status, note) {
  const sheet = ss.getSheetByName(SANTARA_V4.SHEETS.MASTER_CONVERSION);
  let rowNumber = 0;
  if (sheet.getLastRow() > 1) {
    const rows = sheet.getRange(2, 1, sheet.getLastRow() - 1, V4_HEADERS.MASTER_CONVERSION.length).getValues();
    for (let i = 0; i < rows.length; i++) {
      if (conversionKey_(rows[i][0], rows[i][1], rows[i][2]) === conversionKey_(name, inputUnit, baseUnit)) { rowNumber = i + 2; break; }
    }
  }
  const row = [name, inputUnit, baseUnit, factor, status || "Aktif", note || ""];
  if (rowNumber) sheet.getRange(rowNumber, 1, 1, row.length).setValues([row]);
  else sheet.getRange(sheet.getLastRow() + 1, 1, 1, row.length).setValues([row]);
}

function adminSaveMenu(token, payload) {
  assertAdminSession_(token);
  const ss = getRuntimeSpreadsheet_();
  const menu = String(payload && payload.menu || "").trim();
  const size = String(payload && payload.size || "").trim();
  if (!menu) throw new Error("Nama menu belum diisi.");
  const originalMenu = String(payload && payload.originalMenu || "").trim();
  const originalSize = String(payload && payload.originalSize || "").trim();
  if (originalMenu && menuKey_(originalMenu, originalSize) !== menuKey_(menu, size)) throw new Error("Nama/ukuran menu lama tidak boleh diganti. Nonaktifkan lalu buat menu baru.");
  const row = [menu, size, String(payload.category || "Lainnya").trim() || "Lainnya",
    normalizeKey_(payload.status) === "nonaktif" ? "Nonaktif" : "Aktif"];
  const sheet = ss.getSheetByName(SANTARA_V4.SHEETS.MASTER_MENU);
  let rowNumber = 0;
  if (sheet.getLastRow() > 1) {
    const rows = sheet.getRange(2, 1, sheet.getLastRow() - 1, V4_HEADERS.MASTER_MENU.length).getValues();
    for (let i = 0; i < rows.length; i++) if (menuKey_(rows[i][0], rows[i][1]) === menuKey_(menu, size)) { rowNumber = i + 2; break; }
  }
  if (rowNumber) sheet.getRange(rowNumber, 1, 1, row.length).setValues([row]);
  else sheet.getRange(sheet.getLastRow() + 1, 1, 1, row.length).setValues([row]);
  clearSantaraCache_(); return { success: true };
}

function adminGetMenuRecipe(token, menu, size, dateString) {
  assertAdminSession_(token);
  const ss = getRuntimeSpreadsheet_();
  const date = normalizeStoredDate_(dateString) || formatDateId_(new Date());
  return getActiveRecipe_(ss, menu, size, date);
}

function adminSaveMenuRecipe(token, payload) {
  assertAdminSession_(token);
  const ss = getRuntimeSpreadsheet_();
  const menu = String(payload && payload.menu || "").trim();
  const size = String(payload && payload.size || "").trim();
  const effectiveDate = normalizeDateString_(payload && payload.effectiveDate);
  const ingredients = normalizeRecipeEditorRows_(ss, payload && payload.ingredients, "Resep menu");
  if (!menu || !ingredients.length) throw new Error("Menu dan bahan resep wajib diisi.");
  const sheet = ss.getSheetByName(SANTARA_V4.SHEETS.MASTER_RECIPE);
  const version = nextRecipeVersion_(sheet, 5, function(r) { return menuKey_(r[0], r[1]) === menuKey_(menu, size); });
  closePreviousRecipeRows_(sheet, 6, 7, effectiveDate, function(r) { return menuKey_(r[0], r[1]) === menuKey_(menu, size) && normalizeKey_(r[8]) !== "nonaktif"; });
  const rows = ingredients.map(function(i) { return [menu, size, i.name, i.quantity, i.unit, version, parseDateId_(effectiveDate), "", "Aktif"]; });
  sheet.getRange(sheet.getLastRow() + 1, 1, rows.length, V4_HEADERS.MASTER_RECIPE.length).setValues(rows);
  clearSantaraCache_(); return { success: true, version: version };
}

function adminGetBaseRecipe(token, baseName, dateString) {
  assertAdminSession_(token);
  const date = normalizeStoredDate_(dateString) || formatDateId_(new Date());
  return getActiveBaseRecipe_(getRuntimeSpreadsheet_(), baseName, date);
}

function adminSaveBaseRecipe(token, payload) {
  assertAdminSession_(token);
  const ss = getRuntimeSpreadsheet_();
  const baseName = String(payload && payload.baseName || "").trim();
  const effectiveDate = normalizeDateString_(payload && payload.effectiveDate);
  const standardOutput = requirePositiveNumber_(payload && payload.standardOutput, "Hasil standar");
  const ingredients = normalizeRecipeEditorRows_(ss, payload && payload.ingredients, "Resep base");
  if (!baseName || !ingredients.length) throw new Error("Nama base dan bahan resep wajib diisi.");
  if (!getMasterStockMap_(ss).has(normalizeKey_(baseName))) throw new Error(baseName + " belum ada di Master_Stok.");
  const sheet = ss.getSheetByName(SANTARA_V4.SHEETS.MASTER_BASE_RECIPE);
  const version = nextRecipeVersion_(sheet, 5, function(r) { return normalizeKey_(r[0]) === normalizeKey_(baseName); });
  closePreviousRecipeRows_(sheet, 6, 7, effectiveDate, function(r) { return normalizeKey_(r[0]) === normalizeKey_(baseName) && normalizeKey_(r[8]) !== "nonaktif"; });
  const production = payload.productionEnabled === false ? "Tidak" : "Ya";
  const rows = ingredients.map(function(i) { return [baseName, i.name, i.quantity, i.unit, standardOutput, version,
    parseDateId_(effectiveDate), "", "Aktif", production]; });
  sheet.getRange(sheet.getLastRow() + 1, 1, rows.length, V4_HEADERS.MASTER_BASE_RECIPE.length).setValues(rows);
  clearSantaraCache_(); return { success: true, version: version };
}

function normalizeRecipeEditorRows_(ss, rows, label) {
  const masterMap = getMasterStockMap_(ss);
  const conversions = getConversionMap_(ss);
  return (Array.isArray(rows) ? rows : []).filter(hasMeaningfulObject_).map(function(r, i) {
    const name = normalizeItemName_(r.name);
    const master = masterMap.get(normalizeKey_(name));
    if (!master) throw new Error(label + " bahan " + (i + 1) + " tidak ditemukan di Master_Stok.");
    const unit = normalizeUnit_(r.unit || master.unit);
    resolveConversion_(master.name, unit, master.unit, conversions, true);
    return { name: master.name, quantity: requirePositiveNumber_(r.quantity, label + " bahan " + (i + 1)), unit: unit };
  });
}

function nextRecipeVersion_(sheet, versionIndex, filterFn) {
  let max = 0;
  if (sheet.getLastRow() > 1) sheet.getRange(2, 1, sheet.getLastRow() - 1, sheet.getLastColumn()).getValues().forEach(function(r) {
    if (!filterFn(r)) return;
    max = Math.max(max, Number(String(r[versionIndex] || "").replace(/\D/g, "")) || 0);
  });
  return "v" + (max + 1);
}

function closePreviousRecipeRows_(sheet, startIndex, endIndex, effectiveDate, filterFn) {
  if (sheet.getLastRow() < 2) return;
  const rows = sheet.getRange(2, 1, sheet.getLastRow() - 1, sheet.getLastColumn()).getValues();
  const endDate = parseDateId_(addDaysToDateId_(effectiveDate, -1));
  let changed = false;
  rows.forEach(function(r) {
    if (filterFn(r) && !r[endIndex] && normalizeStoredDate_(r[startIndex]) <= effectiveDate) { r[endIndex] = endDate; changed = true; }
  });
  if (changed) sheet.getRange(2, 1, rows.length, sheet.getLastColumn()).setValues(rows);
}

function adminSaveOpeningBalances(token, payload) {
  assertAdminSession_(token);
  if (String(payload && payload.confirmation || "").trim().toUpperCase() !== "SALDO AWAL") throw new Error('Ketik "SALDO AWAL" untuk konfirmasi.');
  const ss = getRuntimeSpreadsheet_();
  const date = normalizeDateString_(payload && payload.date);
  const master = getMasterStockRows_(ss);
  const submitted = new Map();
  (Array.isArray(payload && payload.items) ? payload.items : []).forEach(function(i) { if (i && i.name) submitted.set(normalizeKey_(i.name), i); });
  backupSheet_(ss, SANTARA_V4.SHEETS.OPENING_BALANCE, "BACKUP_SALDO_AWAL");
  const now = new Date();
  const rows = master.map(function(m) {
    const item = submitted.get(normalizeKey_(m.name)) || {};
    return [parseDateId_(date), m.name, optionalNonNegativeNumber_(item.quantity, "Saldo " + m.name), m.unit, "Stok awal V4.2", now];
  });
  rewriteSheet_(ss.getSheetByName(SANTARA_V4.SHEETS.OPENING_BALANCE), V4_HEADERS.OPENING_BALANCE, rows);
  rebuildAllStock_(ss); rebuildVisibleHistories_(ss); refreshDashboard_(ss); SpreadsheetApp.flush();
  return { success: true, itemCount: rows.length };
}

function adminRunSystemCheck(token) {
  assertAdminSession_(token);
  return runSystemChecks_(getRuntimeSpreadsheet_());
}

function runSystemChecks_(ss) {
  const issues = [];
  const allStock = getAllMasterStockRows_(ss);
  const activeMap = getMasterStockMap_(ss);
  const conversions = getConversionMap_(ss);
  allStock.forEach(function(item) {
    if (normalizeKey_(item.status) === "nonaktif") return;
    if (normalizeKey_(item.purchaseUnit) !== normalizeKey_(item.unit) && !(item.purchaseFactor > 0)) issues.push({ level: "error", text: item.name + ": isi per satuan beli belum valid." });
    if (!resolveConversion_(item.name, item.purchaseUnit, item.unit, conversions, false).valid) issues.push({ level: "error", text: item.name + ": konversi " + item.purchaseUnit + " ke " + item.unit + " belum tersedia." });
  });
  getAllMenuRows_(ss).forEach(function(menu) {
    if (normalizeKey_(menu.status) === "nonaktif") return;
    const recipe = getActiveRecipe_(ss, menu.menu, menu.size, formatDateId_(new Date()));
    if (!recipe.rows.length) issues.push({ level: "error", text: menu.menu + (menu.size ? " " + menu.size : "") + ": menu aktif tetapi resep aktif belum ada." });
    recipe.rows.forEach(function(r) { if (!activeMap.has(normalizeKey_(r.ingredient))) issues.push({ level: "error", text: menu.menu + ": bahan " + r.ingredient + " tidak aktif/ tidak ada." }); });
  });
  const hppRows = getHppRows_(ss);
  const todayId = formatDateId_(new Date());
  getAllMenuRows_(ss).forEach(function(menu) {
    if (normalizeKey_(menu.status) === "nonaktif") return;
    const recipe = getActiveRecipe_(ss, menu.menu, menu.size, todayId);
    const version = recipe.version || "";
    if (findHppValue_(hppRows, todayId, menu.menu, menu.size, version) === null) {
      issues.push({ level: "warning", text: menu.menu + (menu.size ? " " + menu.size : "") + ": HPP aktif belum tersedia." });
    }
  });
  getBaseTypes_(ss).forEach(function(base) {
    if (!base.productionEnabled) issues.push({ level: "warning", text: base.name + ": produksi belum aktif." });
  });
  if (!issues.length) issues.push({ level: "ok", text: "Semua master utama, resep, konversi, dan HPP terlihat konsisten." });
  return issues;
}

function adminResetTestData(token, payload) {
  assertAdminSession_(token);
  if (String(payload && payload.confirmation || "").trim().toUpperCase() !== "RESET") throw new Error('Ketik "RESET" untuk konfirmasi.');
  const ss = getRuntimeSpreadsheet_();
  const stamp = Utilities.formatDate(new Date(), SANTARA_V4.TIME_ZONE, "yyyyMMdd_HHmmss");
  [SANTARA_V4.SHEETS.REPORT, SANTARA_V4.SHEETS.MENU_SOLD, SANTARA_V4.SHEETS.EXPENSE,
    SANTARA_V4.SHEETS.STOCK_IN, SANTARA_V4.SHEETS.ADMIN_PRODUCTION, SANTARA_V4.SHEETS.BASE,
    SANTARA_V4.SHEETS.FREE_WASTE, SANTARA_V4.SHEETS.RECIPE_SNAPSHOT,
    SANTARA_V4.SHEETS.OPNAME_HISTORY, SANTARA_V4.SHEETS.AUDIT].forEach(function(name) {
      const sheet = ss.getSheetByName(name); if (!sheet) return;
      sheet.copyTo(ss).setName(uniqueSheetName_(ss, "BACKUP_TEST_" + name + "_" + stamp)).hideSheet();
    });
  const report = ss.getSheetByName(SANTARA_V4.SHEETS.REPORT);
  const keep = report.getLastRow() > 1 ? report.getRange(2, 1, report.getLastRow() - 1, V4_HEADERS.REPORT.length).getValues().filter(function(r) { return !/^v4/i.test(String(r[16] || "")); }) : [];
  rewriteSheet_(report, V4_HEADERS.REPORT, keep);
  // Rewrite eksplisit untuk memastikan header tepat.
  rewriteSheet_(ss.getSheetByName(SANTARA_V4.SHEETS.MENU_SOLD), V4_HEADERS.MENU_SOLD, []);
  rewriteSheet_(ss.getSheetByName(SANTARA_V4.SHEETS.EXPENSE), V4_HEADERS.EXPENSE, []);
  rewriteSheet_(ss.getSheetByName(SANTARA_V4.SHEETS.STOCK_IN), V4_HEADERS.STOCK_IN, []);
  rewriteSheet_(ss.getSheetByName(SANTARA_V4.SHEETS.ADMIN_PRODUCTION), V4_HEADERS.ADMIN_PRODUCTION, []);
  rewriteSheet_(ss.getSheetByName(SANTARA_V4.SHEETS.BASE), V4_HEADERS.BASE, []);
  rewriteSheet_(ss.getSheetByName(SANTARA_V4.SHEETS.FREE_WASTE), V4_HEADERS.FREE_WASTE, []);
  rewriteSheet_(ss.getSheetByName(SANTARA_V4.SHEETS.RECIPE_SNAPSHOT), V4_HEADERS.RECIPE_SNAPSHOT, []);
  rewriteSheet_(ss.getSheetByName(SANTARA_V4.SHEETS.OPNAME_HISTORY), V4_HEADERS.OPNAME, []);
  rewriteSheet_(ss.getSheetByName(SANTARA_V4.SHEETS.AUDIT), V4_HEADERS.AUDIT, []);
  appendAudit_(ss, formatDateId_(new Date()), String(payload.admin || "Admin"), "RESET TEST", "Backup dibuat sebelum reset");
  rebuildAllStock_(ss); rebuildVisibleHistories_(ss); refreshDashboard_(ss); clearSantaraCache_(); formatAllSheets_(ss); SpreadsheetApp.flush();
  return { success: true };
}

function backupSheet_(ss, sheetName, prefix) {
  const sheet = ss.getSheetByName(sheetName);
  if (!sheet) return;
  const stamp = Utilities.formatDate(new Date(), SANTARA_V4.TIME_ZONE, "yyyyMMdd_HHmmss");
  sheet.copyTo(ss).setName(uniqueSheetName_(ss, prefix + "_" + stamp)).hideSheet();
}


function titleCase_(value) {
  return String(value || "").toLowerCase().replace(/(^|\s)\S/g, function(letter) { return letter.toUpperCase(); });
}

function appendAudit_(ss, date, staff, action, note) {
  const sheet = ss.getSheetByName(SANTARA_V4.SHEETS.AUDIT);
  sheet.appendRow([parseDateId_(date), new Date(), staff, action, SANTARA_V4.VERSION, note || ""]);
}

function sortDailySheets_(ss) {
  [SANTARA_V4.SHEETS.REPORT, SANTARA_V4.SHEETS.MENU_SOLD, SANTARA_V4.SHEETS.EXPENSE,
    SANTARA_V4.SHEETS.BASE, SANTARA_V4.SHEETS.FREE_WASTE,
    SANTARA_V4.SHEETS.RECIPE_SNAPSHOT].forEach(function(name) {
      const sheet = ss.getSheetByName(name);
      if (sheet && sheet.getLastRow() > 2) {
        sheet.getRange(2, 1, sheet.getLastRow() - 1, sheet.getLastColumn()).sort([{ column: 1, ascending: false }]);
      }
    });
}

function findDateRow_(sheet, dateId) {
  if (!sheet || sheet.getLastRow() < 2) return 0;
  const target = normalizeStoredDate_(dateId);
  const values = sheet.getRange(2, 1, sheet.getLastRow() - 1, 1).getValues();
  for (let i = 0; i < values.length; i++) {
    if (normalizeStoredDate_(values[i][0]) === target) return i + 2;
  }
  return 0;
}

function readRowsByDate_(sheet, dateId) {
  if (!sheet || sheet.getLastRow() < 2) return [];
  const target = normalizeStoredDate_(dateId);
  return sheet.getRange(2, 1, sheet.getLastRow() - 1, sheet.getLastColumn()).getValues()
    .filter(function(r) { return normalizeStoredDate_(r[0]) === target; });
}

function replaceRowsByDate_(sheet, dateId, newRows, columnCount) {
  const target = normalizeStoredDate_(dateId);
  const existing = sheet.getLastRow() > 1
    ? sheet.getRange(2, 1, sheet.getLastRow() - 1, columnCount).getValues()
    : [];
  const retained = existing.filter(function(r) { return normalizeStoredDate_(r[0]) !== target; });
  rewriteSheet_(sheet, sheet.getRange(1, 1, 1, columnCount).getValues()[0], retained.concat(newRows));
}

function rewriteSheet_(sheet, headers, rows) {
  if (sheet.getMaxColumns() < headers.length) {
    sheet.insertColumnsAfter(sheet.getMaxColumns(), headers.length - sheet.getMaxColumns());
  }
  sheet.clearContents();
  if (headers.length) sheet.getRange(1, 1, 1, headers.length).setValues([headers]);
  if (rows && rows.length) sheet.getRange(2, 1, rows.length, headers.length).setValues(rows);
}

function getActivationDate_() {
  const value = PropertiesService.getScriptProperties().getProperty(SANTARA_V4.PROPERTY_START_DATE);
  return value || formatDateId_(new Date());
}

function menuKey_(menu, size) {
  return normalizeKey_(menu) + "|" + normalizeKey_(size);
}

function normalizeItemName_(value) {
  const raw = String(value === null || value === undefined ? "" : value).trim();
  if (!raw) return "";
  const alias = ITEM_ALIASES[normalizeKey_(raw)];
  if (alias) return alias;
  return raw.replace(/\s+/g, " ").replace(/(^|\s)\S/g, function(c) { return c.toUpperCase(); });
}

function normalizeUnit_(value) {
  const text = String(value === null || value === undefined ? "" : value).trim().toLowerCase();
  const aliases = { "gr": "gram", "g": "gram", "pcs.": "pcs", "pc": "pcs", "piece": "pcs", "liter": "liter", "l": "liter" };
  return aliases[text] || text;
}

function normalizeKey_(value) {
  return String(value === null || value === undefined ? "" : value).trim().toLowerCase().replace(/\s+/g, " ");
}

function normalizeDateString_(value) {
  const normalized = normalizeStoredDate_(value);
  if (!/^\d{4}-\d{2}-\d{2}$/.test(normalized)) throw new Error("Tanggal laporan tidak valid.");
  return normalized;
}

function normalizeStoredDate_(value) {
  if (value instanceof Date && !isNaN(value.getTime())) {
    return Utilities.formatDate(value, SANTARA_V4.TIME_ZONE, "yyyy-MM-dd");
  }
  const text = String(value === null || value === undefined ? "" : value).trim();
  if (!text) return "";
  const exact = text.match(/^(\d{4})-(\d{2})-(\d{2})$/);
  if (exact) return exact[1] + "-" + exact[2] + "-" + exact[3];
  const parsed = new Date(text);
  return isNaN(parsed.getTime()) ? "" : Utilities.formatDate(parsed, SANTARA_V4.TIME_ZONE, "yyyy-MM-dd");
}

function parseDateId_(dateId) {
  const parts = String(dateId).split("-").map(Number);
  return new Date(parts[0], parts[1] - 1, parts[2], 12, 0, 0);
}

function formatDateId_(date) {
  return Utilities.formatDate(date, SANTARA_V4.TIME_ZONE, "yyyy-MM-dd");
}

function formatDateLabel_(date) {
  return Utilities.formatDate(date, SANTARA_V4.TIME_ZONE, "dd MMMM yyyy");
}

function addDaysToDateId_(dateId, days) {
  const date = parseDateId_(dateId);
  date.setDate(date.getDate() + days);
  return formatDateId_(date);
}

function isDateEffective_(target, startValue, endValue) {
  const targetId = formatDateId_(target);
  const start = normalizeStoredDate_(startValue) || "0000-01-01";
  const end = normalizeStoredDate_(endValue) || "9999-12-31";
  return targetId >= start && targetId <= end;
}

function compareVersion_(a, b) {
  const an = Number(String(a).replace(/\D/g, "")) || 0;
  const bn = Number(String(b).replace(/\D/g, "")) || 0;
  return an - bn;
}

function calculateStockStatus_(stock, limit) {
  if (stock < 0) return "🚨 RESTOCK • MINUS";
  if (!(limit > 0)) return "✅ AMAN";
  if (stock < limit) return "🚨 RESTOCK";
  if (stock <= limit * 1.25) return "⚠️ MENIPIS";
  return "✅ AMAN";
}

function isCupItem_(name) {
  const key = normalizeKey_(name);
  return key === "cup m" || key === "cup l";
}

function hasMeaningfulObject_(item) {
  if (!item || typeof item !== "object") return false;
  return Object.keys(item).some(function(k) {
    const v = item[k];
    return String(v === undefined || v === null ? "" : v).trim() !== "";
  });
}

function toNumber_(value) {
  if (typeof value === "number") return isFinite(value) ? value : 0;
  let text = String(value === null || value === undefined ? "" : value).trim()
    .replace(/Rp\s?/gi, "").replace(/\s/g, "");
  if (!text) return 0;
  if (/^-?\d+(\.\d+)?$/.test(text)) {
    const direct = Number(text);
    return isFinite(direct) ? direct : 0;
  }
  if (text.indexOf(",") !== -1 && text.indexOf(".") !== -1) {
    text = text.replace(/\./g, "").replace(/,/g, ".");
  } else if (text.indexOf(",") !== -1) {
    text = text.replace(/,/g, ".");
  }
  const number = Number(text);
  return isFinite(number) ? number : 0;
}

function toNonNegativeNumber_(value) {
  return Math.max(0, toNumber_(value));
}

function positiveOrDefault_(value, fallback) {
  const n = toNumber_(value);
  return n > 0 ? n : fallback;
}

function requireNonNegativeNumber_(value, label) {
  if (String(value === undefined || value === null ? "" : value).trim() === "") throw new Error(label + " belum diisi.");
  const n = toNumber_(value);
  if (!isFinite(n) || n < 0) throw new Error(label + " harus berupa angka 0 atau lebih.");
  return n;
}

function optionalNonNegativeNumber_(value, label) {
  if (String(value === undefined || value === null ? "" : value).trim() === "") return 0;
  return requireNonNegativeNumber_(value, label);
}

function requirePositiveNumber_(value, label) {
  const n = requireNonNegativeNumber_(value, label);
  if (!(n > 0)) throw new Error(label + " harus lebih dari 0.");
  return n;
}

function requireNonNegativeInteger_(value, label) {
  const n = requireNonNegativeNumber_(value, label);
  if (!Number.isInteger(n)) throw new Error(label + " harus berupa angka bulat.");
  return n;
}

function requirePositiveInteger_(value, label) {
  const n = requirePositiveNumber_(value, label);
  if (!Number.isInteger(n)) throw new Error(label + " harus berupa angka bulat.");
  return n;
}

function roundStockDisplay_(value) {
  const n = toNumber_(value);
  const sign = n < 0 ? -1 : 1;
  return sign * (Math.round((Math.abs(n) + Number.EPSILON) * 2) / 2);
}

function formatStockWithUnit_(value, unit) {
  const label = formatNumber_(roundStockDisplay_(value));
  const unitLabel = normalizeUnit_(unit) || String(unit || "").trim();
  return label + (unitLabel ? " " + unitLabel : "");
}

function formatAverageWithUnit_(value, unit) {
  const label = formatNumber_(roundNumber_(value));
  const unitLabel = normalizeUnit_(unit) || String(unit || "").trim();
  return label + (unitLabel ? " " + unitLabel : "");
}

function roundNumber_(value) {
  return Math.round((toNumber_(value) + Number.EPSILON) * 1000) / 1000;
}

function formatCurrency_(value) {
  const sign = toNumber_(value) < 0 ? "-" : "";
  return sign + "Rp " + Math.abs(Math.round(toNumber_(value))).toLocaleString("id-ID");
}

function formatNumber_(value) {
  return roundNumber_(value).toLocaleString("id-ID", { maximumFractionDigits: 3 });
}

function uniqueSheetName_(ss, base) {
  let name = base.substring(0, 95);
  let counter = 1;
  while (ss.getSheetByName(name)) {
    name = (base.substring(0, 90) + "_" + counter).substring(0, 99);
    counter++;
  }
  return name;
}
