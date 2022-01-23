const { authenticate } = require('ldap-authentication')

async function auth() {
    options = {
        ldapOpts: {
            url: 'ldap://127.0.0.1:10389'
        },
        
        //userDn: 'cn=John A. Zoidberg,ou=people,dc=planetexpress,dc=com',
        
        adminDn: 'cn=admin,dc=planetexpress,dc=com',
        adminPassword: 'GoodNewsEveryone',

        userSearchBase: 'dc=planetexpress,dc=com',
        usernameAttribute: 'uid',
        username: 'zoidberg',
        userPassword: 'zoidberg',
    }

    user = await authenticate(options)

    console.log('Usuário conectado!')
    console.log(`dn: ${user.dn}`)
    console.log(`cn: ${user.cn}`)
    console.log(`uid: ${user.uid}`)
    console.log(`mail: ${user.mail}`)
}

auth()
