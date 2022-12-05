function checkPalindrome(str) {
    if (str.length === 1) return false;
    let rev = str.split("").reverse().join("");
    if (rev === str) return true;
    return false;
}

function check(str) {
    for (let i = 0; i < str.length; i++) {
        for (let j = i + 1; j < str.length; j++) {
            let res = checkPalindrome(str.substring(i, j));
            if (res) {
                console.log(str.substring(i, j));
            }
        }
    }
}


const str = "daderpapaziasmshmoms";

check(str);