const products = [
  {
    "id" : "a",
    "unggulan" : false,
    "kategori" : "pakaian",
    "nama" : "Original kaos Homicide Godzkilla Necronometry",
    "harga" : "Rp. 275.000",
    "deskripsi" : ["Original Grimloc", "Bekas", "Size M", "Katun"],
    "cover": "products/hmcd1-1.webp",
    "gbr1" : "products/hmcd1-2.webp",
    "gbr2" : "products/hmcd1-3.webp",
    "shopee" : "https://shopee.co.id/Original-kaos-Homicide-Godzkilla-Necronometry-i.216352831.9668656195",
    "tokopedia" : "tokopedia.com"
  },
  {
    "id" : "b",
    "unggulan" : true,
    "kategori" : "pakaian",
    "nama" : "Original kaos Homicide Barisan Nisan",
    "harga" : "Rp. 275.000",
    "deskripsi" : ["Original Grimloc", "Bekas", "Size M", "Katun"],
    "cover": "products/hmcd2-1.webp",
    "gbr1" : "products/hmcd2-2.webp",
    "gbr2" : "products/hmcd2-3.webp",
    "shopee" : "https://shopee.co.id/Original-Kaos-Homicide-i.216352831.2969666258",
    "tokopedia" : "tokopedia.com"
  },
  {
    "id" : "c",
    "unggulan" : true,
    "kategori" : "pakaian",
    "nama" : "BARU Original Kaos Homicide 10th year Illsurrekshun",
    "harga" : "Rp. 350.000",
    "deskripsi" : ["Original Uprock 83", "BARU", "Size M", "Katun"],
    "cover": "products/hmcd3-1.webp",
    "gbr1" : "products/hmcd3-2.webp",
    "gbr2" : "products/hmcd3-3.webp",
    "shopee" : "https://shopee.co.id/BARU-Original-Kaos-Homicide-10th-year-Illsurrekshun-i.216352831.9768666849",
    "tokopedia" : "tokopedia.com"
  },
  {
    "id" : "d",
    "unggulan" : true,
    "kategori" : "buku",
    "nama" : "ORI TANDA TANGAN Catatan Najwa - Najwa Shihab",
    "harga" : "Rp. 150.000",
    "deskripsi" : ["Penulis Najwa Shihab", "Original + TANDA TANGAN", "bekas", "Bookpaper"],
    "cover" : "products/catna1-1.webp",
    "gbr1" : "products/catna1-2.webp",
    "gbr2" : "products/catna1-3.webp",
    "gbr3" : "products/catna1-4.webp",
    "shopee" : "https://shopee.co.id/ORI-TANDA-TANGAN-Catatan-Najwa-Najwa-Shihab-i.216352831.11612484262",
    "tokopedia" : "tokopedia.com"
  },
  {
    "id" : "e",
    "unggulan" : false,
    "kategori" : "buku",
    "nama" : "TEROR ORDE BARU",
    "harga" : "Rp. 85.000",
    "deskripsi" : ["Penulis Julie Southwood - Patrick Planagan", "Original", "Bekas", "Bookpaper"],
    "cover": "products/teor1-1.webp",
    "gbr1" : "products/teor1-2.webp",
    "gbr2" : "products/teor1-3.webp",
    "shopee" : "https://shopee.co.id/buku-TEROR-ORDE-BARU-(PRELOVED)-i.216352831.10110530261",
    "tokopedia" : "tokopedia.com"
  },
  {
    "id" : "f",
    "unggulan" : false,
    "kategori" : "buku",
    "nama" : "Agar Istri Suami Makin Sayang - Adil Fathi Abdullah",
    "harga" : "Rp. 25.000",
    "deskripsi" : ["Penulis Adil Fathi Abdullah", "Original", "Bekas", "HVS"],
    "cover": "products/f-1.webp",
    "gbr1" : "products/f-2.webp",
    "gbr2" : "products/f-3.webp",
    "shopee" : "https://shopee.co.id/Agar-Istri-Suami-Makin-Sayang-Adil-Fathi-Abdullah-i.216352831.11412485576?position=2",
    "tokopedia" : "tokopedia.com"
  },
  {
    "id" : "g",
    "unggulan" : false,
    "kategori" : "buku",
    "nama" : "Fear Trump di Gedung Putih - Bob Woodward",
    "harga" : "Rp. 35.000",
    "deskripsi" : ["Penulis Bob Woodward", "Original", "Bekas", "Bookpaper"],
    "cover": "products/g-1.webp",
    "gbr1" : "products/g-2.webp",
    "gbr2" : "products/g-3.webp",
    "shopee" : "https://shopee.co.id/Fear-Trump-di-Gedung-Putih-Bob-Woodward-i.216352831.10917230657?adsid=0&campaignid=0&position=-1",
    "tokopedia" : "tokopedia.com"
  },
  {
    "id" : "h",
    "unggulan" : false,
    "kategori" : "buku",
    "nama" : "Soekarno Komunis dan Fasis Orba - Wilson",
    "harga" : "Rp. 20.000",
    "deskripsi" : ["Penulis Wilson", "Repro", "Bekas", "Bookpaper"],
    "cover": "products/h-1.webp",
    "gbr1" : "products/h-2.webp",
    "gbr2" : "products/h-3.webp",
    "shopee" : "https://shopee.co.id/Soekarno-Komunis-dan-Fasis-Orba-Wilson-i.216352831.8276301300?adsid=0&campaignid=0&position=-1",
    "tokopedia" : "tokopedia.com"
  },
  {
    "id" : "i",
    "unggulan" : false,
    "kategori" : "buku",
    "nama" : "The Odessa File - Frederick Forsyth",
    "harga" : "Rp. 35.000",
    "deskripsi" : ["Penulis Frederick Forsyth", "Original", "Bekas", "Bookpaper"],
    "cover": "products/i-1.webp",
    "gbr1" : "products/i-2.webp",
    "gbr2" : "products/i-3.webp",
    "shopee" : "https://shopee.co.id/The-Odessa-File-Frederick-Forsyth-i.216352831.2977058571?adsid=0&campaignid=0&position=-1",
    "tokopedia" : "tokopedia.com"
  },
  {
    "id" : "j",
    "unggulan" : false,
    "kategori" : "buku",
    "nama" : "The Dogs of War - Frederick Forsyth",
    "harga" : "Rp. 35.000",
    "deskripsi" : ["Penulis Frederick Forsyth", "Original", "Bekas", "Bookpaper"],
    "cover": "products/j-1.webp",
    "gbr1" : "products/j-2.webp",
    "gbr2" : "products/j-3.webp",
    "shopee" : "https://shopee.co.id/The-Dogs-of-War-Frederick-Forsyth-i.216352831.2977056289?position=6",
    "tokopedia" : "tokopedia.com"
  },
  {
    "id" : "k",
    "unggulan" : false,
    "kategori" : "RAM Laptop",
    "nama" : "Ram laptop SODIMM DDR3 2GB - Kingstone",
    "harga" : "Rp. 45.000",
    "deskripsi" : ["Original Kingstone", "Bekas", "Spesifikasi lengkap cek Google"],
    "cover": "products/k-1.webp",
    "gbr1" : "products/k-1.webp",
    "gbr2" : "products/k-1.webp",
    "shopee" : "https://shopee.co.id/Ram-laptop-SODIMM-DDR3L-2GB-i.216352831.8063959656?position=7",
    "tokopedia" : "tokopedia.com"
  },
  {
    "id" : "l",
    "unggulan" : false,
    "kategori" : "RAM Laptop",
    "nama" : "Ram laptop SODIMM DDR3 2GB - Samsung",
    "harga" : "Rp. 45.000",
    "deskripsi" : ["Original Samsung", "Bekas", "Spesifikasi lengkap cek Google"],
    "cover": "products/l-1.webp",
    "gbr1" : "products/l-1.webp",
    "gbr2" : "products/l-1.webp",
    "shopee" : "https://shopee.co.id/Ram-laptop-SODIMM-DDR3L-2GB-i.216352831.8063959656?position=7",
    "tokopedia" : "tokopedia.com"
  },
  {
    "id" : "m",
    "unggulan" : false,
    "kategori" : "buku",
    "nama" : "The Devil's Alternative - Frederick Forsyth",
    "harga" : "Rp. 30.000",
    "deskripsi" : ["Penulis Frederick Forsyth", "Original", "Bekas", "Bookpaper"],
    "cover": "products/m-1.webp",
    "gbr1" : "products/m-2.webp",
    "gbr2" : "products/m-3.webp",
    "shopee" : "https://shopee.co.id/The-Devil's-Alternative-Frederick-Forsyth-i.216352831.3064309941?position=8",
    "tokopedia" : "tokopedia.com"
  },
  {
    "id" : "n",
    "unggulan" : false,
    "kategori" : "buku",
    "nama" : "Ekonomi Indonesia Dalam Lintasan Sejarah - Boediono",
    "harga" : "Rp. 30.000",
    "deskripsi" : ["Penulis Boediono", "Original", "Bekas", "Bookpaper"],
    "cover": "products/n-1.webp",
    "gbr1" : "products/n-2.webp",
    "gbr2" : "products/n-3.webp",
    "shopee" : "https://shopee.co.id/Ekonomi-Indonesia-Dalam-Lintasan-Sejarah-Boediono-i.216352831.9668643599?position=13",
    "tokopedia" : "tokopedia.com"
  },
  {
    "id" : "o",
    "unggulan" : false,
    "kategori" : "buku",
    "nama" : "The art of war - Niccolo Machiavelli",
    "harga" : "Rp. 20.000",
    "deskripsi" : ["Penulis Niccolo Machiavelli", "Repro", "Sudah disampul", "Bekas", "Bookpaper"],
    "cover": "products/o-1.webp",
    "gbr1" : "products/o-2.webp",
    "gbr2" : "products/o-3.webp",
    "shopee" : "https://shopee.co.id/The-art-of-war-Niccolo-Machiavelli-i.216352831.7692237120?position=15",
    "tokopedia" : "tokopedia.com"
  },
  {
    "id" : "p",
    "unggulan" : false,
    "kategori" : "buku",
    "nama" : "Guantanamo diary - Mohamedou Ould Slahi",
    "harga" : "Rp. 35.000",
    "deskripsi" : ["Penulis Mohamedou Ould Slahi", "Original", "Bekas", "Bookpaper"],
    "cover": "products/p-1.webp",
    "gbr1" : "products/p-2.webp",
    "gbr2" : "products/p-3.webp",
    "shopee" : "https://shopee.co.id/Guantanamo-diary-Mohamedou-Ould-Slahi-i.216352831.3491147228?position=18",
    "tokopedia" : "tokopedia.com"
  },
  {
    "id" : "q",
    "unggulan" : false,
    "kategori" : "buku",
    "nama" : "Pasar modal diujung pena",
    "harga" : "Rp. 30.000",
    "deskripsi" : ["Original", "Bekas", "Book paper", "Sudah berjamur dibagian pinggir"],
    "cover": "products/q-1.webp",
    "gbr1" : "products/q-2.webp",
    "gbr2" : "products/q-3.webp",
    "shopee" : "https://shopee.co.id/Pasar-modal-diujung-pena-i.216352831.8082265849?position=0",
    "tokopedia" : "tokopedia.com"
  },
  {
    "id" : "r",
    "unggulan" : false,
    "kategori" : "buku",
    "nama" : "Agar pernikahan seindah impian - Muhammad Albani",
    "harga" : "Rp. 20.000",
    "deskripsi" : ["Karangan Muhammad Albani", "Original", "Bekas", "Kertas HVS", "Masih seperti baru"],
    "cover": "products/r-1.webp",
    "gbr1" : "products/r-2.webp",
    "gbr2" : "products/r-3.webp",
    "shopee" : "https://shopee.co.id/Agar-pernikahan-seindah-impian-Muhammad-Albani-i.216352831.10320934468?position=1",
    "tokopedia" : "tokopedia.com"
  },
  {
      "id" : "s",
      "unggulan" : false,
      "kategori" : "buku",
      "nama" : "Menguak misteri kekuasaan Soeharto - Baskara T Wardaya",
      "harga" : "Rp. 25.000",
      "deskripsi" : ["Karangan Baskara T Wardaya", "Original", "Masih seperti baru", "Bekas", "Kertas HVS"],
      "cover": "products/s-1.webp",
      "gbr1" : "products/s-2.webp",
      "gbr2" : "products/s-3.webp",
      "shopee" : "https://shopee.co.id/Menguak-misteri-kekuasaan-Soeharto-Baskara-T-Wardaya-i.216352831.10320934345?position=2",
      "tokopedia" : "tokopedia.com"
    },
    {
      "id" : "t",
      "unggulan" : false,
      "kategori" : "buku",
      "nama" : "The day of the jackal - Frederick Forsyth",
      "harga" : "Rp. 30.000",
      "deskripsi" : ["Karangan Frederick Forsyth", "Original", "Bekas", "Book paper", "Bahasa Indonesia"],
      "cover": "products/t-1.webp",
      "gbr1" : "products/t-2.webp",
      "gbr2" : "products/t-3.webp",
      "shopee" : "https://shopee.co.id/The-day-of-the-jackal-Frederick-Forsyth-i.216352831.9482247935?position=3",
      "tokopedia" : "tokopedia.com"
    },
    {
      "id" : "u",
      "unggulan" : false,
      "kategori" : "buku",
      "nama" : "Omerta - Mario Puzo",
      "harga" : "Rp. 30.000",
      "deskripsi" : ["karangan Mario Puzo", "Bekas", "Original", "Book paper", "Sudah disampul"],
      "cover": "products/u-1.webp",
      "gbr1" : "products/u-2.webp",
      "gbr2" : "products/u-3.webp",
      "shopee" : "https://shopee.co.id/Omerta-Mario-Puzo-i.216352831.8682259466?position=4",
      "tokopedia" : "tokopedia.com"
    }

  // {
  //   "id" : "",
  //   "unggulan" : false,
  //   "kategori" : "buku/pakaian/lain-lain",
  //   "nama" : "",
  //   "harga" : "Rp. ",
  //   "deskripsi" : [],
  //   "cover": "products/-1.webp",
  //   "gbr1" : "products/-2.webp",
  //   "gbr2" : "products/-3.webp",
  //   "shopee" : "",
  //   "tokopedia" : "tokopedia.com"
  // }
]