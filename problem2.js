class Kendaraan {
  // totalRoda & kecepatanPerJam set to 0
  constructor(totalRoda = 0, kecepatanPerJam = 0) {
    this.totalRoda = totalRoda;
    this.kecepatanPerJam = kecepatanPerJam;
  }
}

class Mobil extends Kendaraan {
  constructor(totalRoda, kecepatanPerJam) {
    super(totalRoda, kecepatanPerJam);
  }
  //  memanggil method tambahkecepatan
  berjalan() {
    this.tambahKecepatan(10);
  }
  // memiliki 1 parameter untuk set global variable this.kecepatanPerJam
  tambahKecepatan(kecepatanBaru) {
    this.kecepatanPerJam = this.kecepatanPerJam + kecepatanBaru;
  }
}
function main() {
  mobilCepat = new Mobil();
  mobilCepat.berjalan();
  mobilCepat.berjalan();
  mobilCepat.berjalan();

  mobilLamban = new Mobil();
  mobilLamban.berjalan();
}
// Invoke main method
main()