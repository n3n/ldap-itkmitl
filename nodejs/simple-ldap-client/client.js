// https://www.npmjs.com/package/simple-ldap-client
const ldapClient = require("simple-ldap-client");

class Client {
  constructor(url, baseDn) {
    this.ldap = new ldapClient(url, baseDn);
  }

  async authenticate(upn, password) {
    try {
      await this.ldap.authenticate({ upn, password });
      return true;
    } catch (ex) {
      console.error(ex);
      return false;
    }
  }

  async getUser(upn, password) {
    const result = await this.ldap.getUser({ upn, password });
    return result;
  }
}

module.exports = Client;