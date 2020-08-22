const Client = require('./client')

async function main() {
  const url = "ldap://161.246.38.141:389";
  const baseDn = "DC=it,DC=kmitl,DC=ac,DC=th";
  const upn = "XXXXXXXX@it.kmitl.ac.th"; // Change this
  const password = "XXXXXXX"; // Change this

  const client = new Client(url, baseDn);
  const isAuthenticated = await client.authenticate(upn, password);

  if (isAuthenticated) {
    console.log("+ Authenticated successfully");
  } else {
    console.log("- Authenticated unsuccessfully");
  }
}

// Run main
(async () => {
  await main();
})();
