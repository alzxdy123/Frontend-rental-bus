import CryptoJs from "crypto-js";

const kunci_akses = "lks-kota-bandung";

export default {
  encryption: function (data) {
    try {
      if (data == null) {
        return null;
      } else {
        let enkripsi = CryptoJs.AES.encrypt(data, kunci_akses).toString();
        return enkripsi;
      }
    } catch (error) {
      window.console.log(error);
      return null;
    }
  },
  dencrytion: function (data) {
    try {
      if (data == null) {
        return null;
      } else {
        let bytes = CryptoJs.AES.decrypt(data, kunci_akses);
        let terjemaah = bytes.toString(CryptoJs.enc.Utf8);
        return terjemaah;
      }
    } catch (error) {
      window.console.log(error);
      return null;
    }
  },
};
