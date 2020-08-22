const { createClient } = require("ldapjs");

const url = "ldap://161.246.38.141:389";
const baseDN = "DC=it,DC=kmitl,DC=ac,DC=th";

const upn = "XXXXXXXX@it.kmitl.ac.th"; // Change this
const password = "XXXXXXX"; // Change this

const client = createClient({ url, base: baseDN });

client.bind(upn, password, (error) => {
  if (error) {
    console.error(error);
    throw error;
  }

  console.log('Authenticated successfully');
});
