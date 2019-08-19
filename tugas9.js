function panggilObjects() {
    var buku = {
      judul : "Sapiens",
      pengaran : "Yuval Noah Harari",
      tahun_terbit : "2018",
      cetakan_ke : 8,
    }
for (var i in buku){
  console.log(buku[i]);
}
}

panggilObjects()
