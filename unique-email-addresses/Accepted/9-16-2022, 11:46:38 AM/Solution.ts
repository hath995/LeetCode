// https://leetcode.com/problems/unique-email-addresses

function canonical(email: string): string {
    let [localname, domainName] = email.split("@");
    let canonicalLocal = "";
    let encounteredPlus = false;
    for(let i = 0; i < localname.length; i++) {
        if(localname[i] == ".") {
            continue;
        }
        if(localname[i] == "+") {
            break;
        }
        canonicalLocal += localname[i];
    }
    return `${canonicalLocal}@${domainName}`;
}
function numUniqueEmails(emails: string[]): number {
    let uniqueEmails = new Set();
    for(let email of emails) {
        //console.log(canonical(email))
        uniqueEmails.add(canonical(email));
    }
    return uniqueEmails.size;
};