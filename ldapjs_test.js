const ldap = require('ldapjs')

function authenticateDN(username, password) {
    let client = ldap.createClient({
        url: 'ldap://127.0.0.1:10389'
    })

    client.bind(username, password, function (err) {
        if (err) throw err

        console.log('Sucesso!')
    })
}

authenticateDN('cn=John A. Zoidberg,ou=people,dc=planetexpress,dc=com', 'zoidberg')
