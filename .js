function telephoneCheck(str) {
    let regex = /^(1\s?)?(\(\d{3}\)|\d{3})[\s\-]?\d{3}[\s\-]?\d{4}$/;
    return regex.test(str);
}
// Use ^ to search for patterns at the beginning of strings
// ... $ .............................  end   .............
// Use \s?  to search one whitespace or none
// (\(\d{3}\)|\d{3}) checks for either three digits surrounded by parentheses, or three digits by themselves with no parentheses
// [\s\-]? checks for spaces or dashes between the groups of digits





// Retrieved from
// https://guide.freecodecamp.org/certifications/javascript-algorithms-and-data-structures/javascript-algorithms-and-data-structures-projects/telephone-number-validator/
