import crypto from "./crypto";

export default {
  Save(key, value) {
    let ToJson = JSON.stringify(value);
    let encrypt = crypto.encryption(ToJson);
    return localStorage.setItem(key, encrypt);
  },

  Read(key) {
    let read = localStorage.getItem(key);

    if (read == "null") {
      return null;
    } else {
      let decrypt = crypto.dencrytion(read);

      if (decrypt == "" || decrypt == undefined) {
        return null;
      } else {
        let JsonToData = JSON.parse(decrypt);
        return JsonToData;
      }
    }
  },

  Remove(key) {
    let read = localStorage.getItem(key);

    if (read == null) {
      return false;
    } else {
      localStorage.removeItem(key);
      return true;
    }
  },
};
