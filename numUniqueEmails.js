/**
 * @param {string[]} emails
 * @return {number}
 */
var numUniqueEmails = function(emails){
    const uniqueEmails = new Set();
    for(const email of emails){
        const [localName, domain] = email.split('@');
        // Extract the username before the '+' sign
        const username = localName.split('+')[0];
        // Remove the periods from the username
        const cleanUsername = username.replace(/\./g, '');
        // Combine the cleaned username and domain for the unique email
        const uniqueEmail = `${cleanUsername}@${domain}`;
        uniqueEmails.add(uniqueEmail);
    }
    return uniqueEmails.size;
};