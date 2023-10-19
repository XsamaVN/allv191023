let mang = [1, 2, 3, 4, 5, 6, 1, 3, 4, 5, 6, 1,7,8,9]
let dem = []
mang.forEach((phanTu) => {
    if (dem[phanTu] === undefined) {
        dem[phanTu] = 1;
    } else {
        dem[phanTu]++;
    }
});


for (let phanTu in dem) {
    if (dem[phanTu] == 1) {
        console.log(`Phần tử: ${phanTu}. Xuất hiện ${dem[phanTu]} lần`);
    }
}

