function sortManual(arr) {
    let arrAsc = arr;
    let arrDesc = [];
    const n = arrAsc.length;
    for (let i = 1; i < n; i++) {
        const key = arrAsc[i];
        let j = i - 1;
        while (j >= 0 && arrAsc[j] > key) {
            arrAsc[j + 1] = arrAsc[j];
            j--;
        }
        arrAsc[j + 1] = key;
    }

    for (let i = arrAsc.length-1; i >= 0; i--) {
        arrDesc.push(arrAsc[i]);
    }

    console.log(arrAsc);
    console.log(arrDesc);
}

const input = process.argv.slice(2).map(Number);
sortManual(input);