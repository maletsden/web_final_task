function tune(arr) {
    const expected_results = [329.63, 246.94, 196, 146.83, 110, 82.41];

    return arr.map((freq, i)  => {
        if (freq === 0) return '-';
        if (freq === expected_results[i]) return "OK";
        if (freq < expected_results[i]) {
            return freq <= expected_results[i] * 0.97 ? ">>•" : ">•";
        } else {
            return freq >= expected_results[i] * 1.03 ? "<<•" : "<•";
        }
    });
}

console.log([
    tune([0, 246.94, 0, 0, 0, 78]),                         // ➞ [" - ", "OK", " - ", " - ", " - ", ">>•"]
    tune([329.63, 246.94, 195, 146, 111, 82.41]),           // ➞ ["OK", "OK", ">•", ">•", "•<", "OK" ]
    tune([329.63, 246.94, 196.00, 146.83, 110.00, 82.41])   // ➞ ["OK", "OK", "OK", "OK", "OK", "OK"]
])