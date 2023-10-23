// https://leetcode.com/problems/valid-phone-numbers

# Read from the file file.txt and output all valid phone numbers to stdout.
grep -e '(\(\d{3}\)|\d{3})[ -]\d{3}-\d{4}' file.txt