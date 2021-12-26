class Datar {
  constructor() {}

  persegi(sisi) {
    let keliling = `Keliling = 4 x sisi
             = 4 X ${sisi}
             = ${4 * sisi}`;
    let luas = `Luas = sisi x sisi
         = ${sisi} x ${sisi}
         = ${sisi * sisi}`;

    return {
      keliling: {
        hasil: 4 * sisi,
        rumus: keliling,
      },
      luas: {
        hasil: sisi * sisi,
        rumus: luas,
      },
    };
  }

  persegipanjang(p, l) {
    let keliling = `Keliling = 2 x ( Panjang + Lebar )
             = 2 x ( ${p} + ${l} )
             = 2 x ${p + l}
             = ${2 * (p + l)}`;

    let luas = `Luas = Panjang x Lebar
         =  ${p} x ${l}
         = ${p * l}`;

    return {
      keliling: {
        hasil: 2 * (p + l),
        rumus: keliling,
      },
      luas: {
        hasil: p * l,
        rumus: luas,
      },
    };
  }

  segitiga(a, b, c, d) {
    let keliling = `Keliling = sisi 1 + sisi 2 + sisi 3
             = ${a} + ${b} + ${c}
             = ${a + b + c}`;
    let luas = `Luas = 1/2 x alas x tinggi
         = 1/2 x ${a} x ${b}
         = ${(1 / 2) * a * b}`;

    return {
      keliling: {
        hasil: a + b + c,
        rumus: keliling,
      },
      luas: {
        hasil: (1 / 2) * a * b,
        rumus: luas,
      },
    };
  }

  lingkaran(a) {
    let keliling = `Keliling = pi x Diameter
             = 22/7 x ${a}
             = ${(22 / 7) * a}`;
    let luas = `Luas = pi x Jari-jari^2
         = 22/7 x ${a} x ${a}
         = ${(22 / 7) * a * a}`;

    return {
      keliling: {
        hasil: (22 / 7) * a,
        rumus: keliling,
      },
      luas: {
        hasil: (22 / 7) * a * a,
        rumus: luas,
      },
    };
  }

  jajargenjang(a, b, c, d) {
    let keliling = `Keliling = sisi 1 + sisi 2 + sisi 3 + sisi 4
             = ${a} + ${b} + ${c} + ${d}
             = ${a + b + c + d}`;

    let luas = `Luas = Alas x Tinggi
         = ${a} x ${b}
         = ${a * b}`;

    return {
      keliling: {
        hasil: a + b + c + d,
        rumus: keliling,
      },
      luas: {
        hasil: a * b,
        rumus: luas,
      },
    };
  }

  layang(a, b, c, d) {
    let keliling = `Keliling = Sisi 1 + Sisi 2 + Sisi 3 + Sisi 4
             = ${a} + ${b} + ${c} + ${d}
             = ${a + b + c + d}`;

    let luas = `Luas = 1/2 x Diameter 1 x Diameter 2
         = 1/2 x ${a} x ${b}
         = ${(1 / 2) * a * b}`;

    return {
      keliling: {
        hasil: a + b + c + d,
        rumus: keliling,
      },
      luas: {
        hasil: (1 / 2) * a * b,
        rumus: luas,
      },
    };
  }

  belahketupat(a, b, c, d) {
    let keliling = `Keliling = Sisi 1 + Sisi 2 + Sisi 3 + Sisi 4
             = ${a} + ${b} + ${c} + ${d}
             = ${a + b + c + d}`;

    let luas = `Luas = 1/2 x Diameter 1 x Diameter 2
         = 1/2 x ${a} x ${b}
         = ${(1 / 2) * a * b}`;

    return {
      keliling: {
        hasil: a + b + c + d,
        rumus: keliling,
      },
      luas: {
        hasil: (1 / 2) * a * b,
        rumus: luas,
      },
    };
  }

  trapesium(a, b, c, d) {
    let keliling = `Keliling = Sisi 1 + Sisi 2 + Sisi 3 + Sisi 4
             = ${a} + ${b} + ${c} + ${d}
             = ${a + b + c + d}`;

    let luas = `Luas = ( Sisi atas + Sisi bawah ) / 2 x Tinggi
         = ( ${a} + ${b} ) / 2 x ${c}
         = ${(a + b) / (2 * c)}`;

    return {
      keliling: {
        hasil: a + b + c + d,
        rumus: keliling,
      },
      luas: {
        hasil: ((a + b) / 2) * c,
        rumus: luas,
      },
    };
  }
}

class Ruang {
  constructor() {}

  kubus(r) {
    let luas = `Luas = 6 x ( Rusuk x Rusuk )
         = 6 x ( ${r} x ${r} )
         = 6 x ${r * r}
         = ${6 * (r * r)}`;
    let volume = `Volume = Rusuk^3
           = ${r} x ${r} x ${r}
           = ${r * r * r}`;

    return {
      volume: {
        hasil: r * r * r,
        rumus: volume,
      },
      luas: {
        hasil: 6 * (r * r),
        rumus: luas,
      },
    };
  }

  balok(p, l, t) {
    let luas = `Luas = (2 x Panjang x Lebar) + (2 x Panjang x Tinggi) + (2 x Lebar x Tinggi)
         = (2 x ${p} x ${l}) + (2 x ${p} x ${t}) + (2 x ${l} x ${t})
         = ${2 * p * l} + ${2 * p * t} + ${2 * l * t}
         = ${2 * p * l + 2 * p * t + 2 * l * t}`;

    let volume = `Volume = Panjang x Lebar x Tinggi
           = ${p} x ${l} x ${t}
           = ${p * l * t}`;

    return {
      volume: {
        hasil: p * l * t,
        rumus: volume,
      },
      luas: {
        hasil: 2 * p * l + 2 * p * t + 2 * l * t,
        rumus: luas,
      },
    };
  }

  tabung(r, t) {
    let luas = `Luas = (2 x pi x Jari-jari x Tinggi) + (2 x pi x Jari-jari^2)
         = (2 x 22/7 x ${r} x ${t}) + (2 x 22/7 x (${r} x ${r}))
         = ${2 * (22 / 7) * r * t} + ${2 * (22 / 7) * (r * r)}
         = ${2 * (22 / 7) * r * t + 2 * (22 / 7) * (r * r)}`;

    let volume = `Volume = Luas Alas x Tinggi
           = pi x (Jari-jari x Jari-jari) x Tinggi
           = 22/7 x ${r * r} x ${t}
           = ${(22 / 7) * (r * r) * t}`;
    return {
      volume: {
        hasil: (22 / 7) * (r * r) * t,
        rumus: volume,
      },
      luas: {
        hasil: 2 * (22 / 7) * r * t + 2 * (22 / 7) * (r * r),
        rumus: luas,
      },
    };
  }

  kerucut(r, s, t) {
    let volume = `Volume = 1/3 x Luas alas x Tinggi
           = 1/3 x (pi x Jari-jari^2) x Tinggi
           = 1/3 x ${(22 / 7) * r * r} x ${t}
           = ${(1 / 3) * ((22 / 7) * r * r) * t}`;

    let luas = `Luas = (pi x Jari-jari x Sisi samping) + (pi x Jari-jari^2)
         = (22/7 x ${r} x ${s}) + (22/7 x ${r} x ${r})
         = ${(22 / 7) * r * s} + ${(22 / 7) * r * r}
         = ${(22 / 7) * r * s + (22 / 7) * r * r}`;

    return {
      volume: {
        hasil: (1 / 3) * ((22 / 7) * r * r) * s,
        rumus: volume,
      },
      luas: {
        hasil: (22 / 7) * r * s + (22 / 7) * r * r,
        rumus: luas,
      },
    };
  }

  bola(r) {
    let volume = `Volume = Luas 4 Lingkaran
           = 4 x pi x Jari-jari^2
           = 4 x 22/7 x ${r} x ${r}
           = ${((4 * 22) / 7) * r * r}`;

    let luas = `Luas = 4/3 x pi x Jari-jari^3
         = 4/3 x 22/7 x ${r}^3
         = 4/3 x 22/7 x ${r * r * r}
         = ${(((4 / 3) * 22) / 7) * r * r * r}`;

    return {
      volume: {
        hasil: ((4 * 22) / 7) * r * r,
        rumus: volume,
      },
      luas: {
        hasil: (((4 / 3) * 22) / 7) * r * r * r,
        rumus: luas,
      },
    };
  }

  limassegiempat(sa, t, ts) {
    let volume = `Volume =  1/3 x Luas Alas x Tinggi
           = 1/3 x (Sisi Alas x Sisi Alas) x Tinggi
           = 1/3 x ${sa * sa} x ${t}
           = ${(1 / 3) * sa * sa * t}`;

    let luas = `Luas = Luas Alas + 4 x Luas selubung segitiga
         = (sisi x sisi) + 4 x (1/2 x Alas x Tinggi Segitiga)
         = (${sa} x ${sa}) + 4 x (1/2 x ${sa} x ${ts})
         = ${sa * sa} + ${4 * ((1 / 2) * sa * ts)}
         = ${sa * sa + 4 * ((1 / 2) * sa * ts)}`;

    return {
      volume: {
        hasil: (1 / 3) * sa * sa * t,
        rumus: volume,
      },
      luas: {
        hasil: sa * sa + 4 * ((1 / 2) * sa * ts),
        rumus: luas,
      },
    };
  }

  limassegitiga(ls, ts, t) {
    let volume = `Volume = 1/3 x Luas alas x Tinggi
           = 1/3 x (1/2 x Alas x Tinggi) x Tinggi
           = 1/3 x (1/2 x ${ls} x ${ts}) x ${t}
           = 1/3 x ${(1 / 2) * ls * ts} x ${t}
           = ${(1 / 3) * ((1 / 2) * ls * ts) * t}`;

    let luas = `Luas = 4 x Luas alas
         = 4 x (1/2 x Alas x Tinggi alas)
         = 4 x (1/2 x ${ls} x ${ts})
         = 4 x ${(1 / 2) * ls * ts}
         = ${4 * ((1 / 2) * ls * ts)}`;

    return {
      volume: {
        hasil: (1 / 3) * ((1 / 2) * ls * ts) * t,
        rumus: volume,
      },
      luas: {
        hasil: 4 * ((1 / 2) * ls * ts),
        rumus: luas,
      },
    };
  }

  prismasegitiga(a, b, c, d, e, f) {
    let volume = `Volume = Luas Alas x Tinggi Prisma
           = (1/2 x Alas x Tinggi) x Tinggi Prisma
           = (1/2 x ${a} x ${b}) x ${c}
           = ${(1 / 2) * a * b} x ${c}
           = ${(1 / 2) * a * b * c}`;

    let luas = `Luas = (2 x Luas alas) + (Keliling alas x Tinggi prisma)
         = (2 x 1/2 x Alas x Tinggi alas) + (Jumlah sisi alas x Tinggi Prisma)
         = (2 x 1/2 x ${a} x ${b}) + ((${d} + ${e} + ${f}) x ${c})
         = ${2 * (1 / 2) * a * b} + ${(d + e + f) * c}
         = ${2 * (1 / 2) * a * b + (d + e + f) * c}`;

    return {
      volume: {
        hasil: (1 / 2) * a * b * c,
        rumus: volume,
      },
      luas: {
        hasil: 2 * (1 / 2) * a * b + (d + e + f) * c,
        rumus: luas,
      },
    };
  }
}

class Intruction {
  constructor() {}

  text(cari, bangun) {
    let result = [];
    for (let car of cari) {
      result.push(`Tentukan ${car} dari ${bangun}`);
    }
    return result;
  }

  history(luas, keliling) {
    return {
      luas,
      keliling,
    };
  }

  persegi() {
    return {
      luas: this.text(["Sisi"], "Persegi"),
      keliling: this.text(["Sisi"], "Persegi"),
      history: this.history(["Sisi"], ["Sisi"]),
    };
  }

  persegipanjang() {
    return {
      luas: this.text(["Panjang", "Lebar"], "Persegi Panjang"),
      keliling: this.text(["Panjang", "Lebar"], "Persegi Panjang"),
      history: this.history(["Panjang", "Lebar"], ["Panjang", "Lebar"]),
    };
  }

  segitiga() {
    return {
      luas: this.text(["Alas", "Tinggi"], "Segitiga"),
      keliling: this.text(["Sisi ke-1", "Sisi ke-2", "Sisi ke-3"], "Segitiga"),
      history: this.history(["Alas", "Tinggi"], ["Sisi-1", "Sisi-2", "Sisi-3"]),
    };
  }

  lingkaran() {
    return {
      keliling: this.text(["Diameter"], "Lingkaran"),
      luas: this.text(["Jari-jari"], "Lingkaran"),
      history: this.history(["Jari-jari"], ["Diameter"]),
    };
  }

  jajargenjang() {
    return {
      keliling: this.text(
        ["Sisi ke-1", "Sisi ke-2", "Sisi ke-3", "Sisi ke-4"],
        "Jajar Genjang"
      ),
      luas: this.text(["Alas", "Tinggi"], "Jajar Genjang"),
      history: this.history(
        ["Alas", "Tinggi"],
        ["Sisi-1", "Sisi-2", "Sisi-3", "Sisi-4"]
      ),
    };
  }

  layang() {
    return {
      keliling: this.text(
        ["Sisi ke-1", "Sisi ke-2", "Sisi ke-3", "Sisi ke-4"],
        "Bangun Layang"
      ),
      luas: this.text(["Diameter 1", "Diameter 2"], "Bangun Layang"),
      history: this.history(
        ["Diameter-1", "Diameter-2"],
        ["Sisi-1", "Sisi-2", "Sisi-3", "Sisi-4"]
      ),
    };
  }

  belahketupat() {
    return {
      keliling: this.text(
        ["Sisi ke-1", "Sisi ke-2", "Sisi ke-3", "Sisi ke-4"],
        "Belah Ketupat"
      ),
      luas: this.text(["Diameter 1", "Diameter 2"], "Belah Ketupat"),
      history: this.history(
        ["Diameter-1", "Diameter-2"],
        ["Sisi-1", "Sisi-2", "Sisi-3", "Sisi-4"]
      ),
    };
  }

  trapesium() {
    return {
      keliling: this.text(
        ["Sisi ke-1", "Sisi ke-2", "Sisi ke-3", "Sisi ke-4"],
        "Trapesium"
      ),
      luas: this.text(["Sisi Atas", "Sisi Bawah", "Tinggi"], "Trapesium"),
      history: this.history(
        ["Sisi atas", "Sisi Bawah", "Tinggi"],
        ["Sisi-1", "Sisi-2", "Sisi-3", "Sisi-4"]
      ),
    };
  }

  /* keliling = volume */
  balok() {
    return {
      luas: this.text(["Panjang", "Lebar", "Tinggi"], "Balok"),
      keliling: this.text(["Panjang", "Lebar", "Tinggi"], "Balok"),
      history: this.history(
        ["Panjang", "Lebar", "Tinggi"],
        ["Panjang", "Lebar", "Tinggi"]
      ),
    };
  }

  kubus() {
    return {
      luas: this.text(["Rusuk"], "Kubus"),
      keliling: this.text(["Rusuk"], "Kubus"),
      history: this.history(["Rusuk"], ["Rusuk"]),
    };
  }

  tabung() {
    return {
      luas: this.text(["Jari-jari", "Tinggi"], "Tabung"),
      keliling: this.text(["Jari-jari", "Tinggi"], "Tabung"),
      history: this.history(
        ["Jari-jari Alas", "Tinggi Tabung"],
        ["Jari-jari Alas", "Tinggi Tabung"]
      ),
    };
  }

  kerucut() {
    return {
      keliling: this.text(["Jari-jari", "Tinggi"], "Kerucut"),
      luas: this.text(["Jari-jari", "Sisi Samping", "Tinggi"], "Kerucut"),
      history: this.history(
        ["Jari-jari Alas", "Sisi Miring/Samping Kerucut", "Tinggi Kerucut"],
        ["Jari-jari Alas", "Tinggi Kerucut"]
      ),
    };
  }

  bola() {
    return {
      luas: this.text(["Jari-jari"], "Bola"),
      keliling: this.text(["Jari-jari"], "Bola"),
      history: this.history(["Jari-jari"], ["Jari-jari"]),
    };
  }

  limassegiempat() {
    return {
      keliling: this.text(["Sisi Alas", "Tinggi Limas"], "Limas Segiempat"),
      luas: this.text(
        ["Sisi Alas", "Tinggi Limas", "Tinggi Alas Segitiga"],
        "Limas Segiempat"
      ),
      history: this.history(
        ["Sisi Alas", "Tinggi Limas", "Tinggi Alas Segitiga Penutup"],
        ["Sisi Alas", "Tinggi Limas"]
      ),
    };
  }

  limassegitiga() {
    return {
      keliling: this.text(
        ["Lebar Alas", "Tinggi Alas", "Tinggi Limas"],
        "Limas Segitiga"
      ),
      luas: this.text(["Lebar Alas", "Tinggi Alas"], "Limas Segitiga"),
      history: this.history(
        ["Lebar Alas", "Tinggi Alas Segitiga"],
        ["Lebar Alas", "Tinggi Alas Segitiga", "Tinggi Limas"]
      ),
    };
  }

  prismasegitiga() {
    return {
      luas: this.text(
        [
          "Lebar Alas",
          "Tinggi Alas",
          "Tinggi Prisma",
          "Sisi Alas ke-1",
          "Sisi Alas ke-2",
          "Sisi Alas ke-3",
        ],
        "Prisma Segitiga"
      ),
      keliling: this.text(
        ["Lebar Alas", "Tinggi Alas", "Tinggi Prisma"],
        "Prisma Segitiga"
      ),
      history: this.history(
        [
          "Lebar Alas",
          "Tinggi Alas Segitiga",
          "Tinggi Prisma",
          "Sisi-1",
          "Sisi-2",
          "Sisi-3",
        ],
        ["Lebar Alas", "Tinggi Alas Segitiga", "Tinggi Prisma"]
      ),
    };
  }
}
