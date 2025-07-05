export default class IDHelpers {
  public static generateID() {
    return Math.floor(Math.random() * Date.now());
  }

  public static generateIDStr() {
    return Math.floor(Math.random() * Date.now()).toString();
  }

  public static generateIDString(length = 5) {
    let result = '';
    const characters =
      'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    const charactersLength = characters.length;
    for (let i = 0; i < length; i++) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
  }
}
