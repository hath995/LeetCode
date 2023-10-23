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

function canonicalRegex(email: string): string {
    let [localname, domainName] = email.split("@");
    return localname.replace(/(\.|\+(.+))/g,"") + "@" + domainName;
}

function numUniqueEmails(emails: string[]): number {
    let uniqueEmails = new Set();
    for(let email of emails) {
        uniqueEmails.add(canonicalRegex(email));
    }
    return uniqueEmails.size;
};

function numUniqueEmailsReduce(emails: string[]): number {
    return emails.reduce((emailSet, email) => emailSet.add(canonical(email)), new Set()).size;
};