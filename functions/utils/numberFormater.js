const postP = (stringValue) => {
    const answer = []
    const temp = stringValue.toString()
    for (let i = 0; i < temp.length; i++) {
        answer.push(temp[i])
        if (temp[i] === '.') {
            let first = temp[i+1];
            let second = temp[i+2];
            if (temp[i + 3] >= 5) {
                second++;
            }
            if (second >= 5) {
                second = 0
                first++
                if (first === 10) {
                    first = 1;
                }
            }
            answer.push(first, second)
            break
        }
    }
    return answer.join("")
}

const numberFormatter = (number) => {
    if (number !== "N/A") {
        // Nine Zeroes for Billions
        return Math.abs(Number(number)) >= 1.0e+9

        ? `${postP(number / 1.0e+9)}B`
        // Six Zeroes for Millions 
        : Math.abs(Number(number)) >= 1.0e+6

        ? `${postP(number / 1.0e+6)}M`
        // Three Zeroes for Thousands
        : Math.abs(Number(number)) >= 1.0e+3

        ? `${postP(number / 1.0e+3)}K`

        : number;
    }
}
module.exports = {
    numberFormatter
}