const { createClient } = require("ldapjs");

const url = "ldap://161.246.38.141:389";
const baseDN = "DC=it,DC=kmitl,DC=ac,DC=th";

const upn = "XXXXXXXX@it.kmitl.ac.th"; // Change this
const password = "XXXXXXX"; // Change this

const client = createClient({ url, base: baseDN, bindDN: upn, bindCredentials: password });

const searchBase = 'OU=IT11,OU=Bachelor,OU=Student,' + baseDN;
const searchOptions = { filter: "(&(cn=*))", scope: "sub" }

client.search(searchBase, searchOptions, (error, res) => {
  if (error) {
    console.error(error);
    throw error;
  }

  const list = [];
  res.on("searchEntry", (entry) => {
    ou.push(entry.object);
  });
  res.on("searchReference", function (referral) {
    console.log("referral: " + referral.uris.join());
  });
  res.on("error", function (err) {
    console.error("error: " + err.message);
  });
  res.on("end", function (result) {
    console.log(list);
  });
});
