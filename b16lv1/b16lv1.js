let mang = [1,2,3,4,5,6,1,3,4,5,6,1]
let dem=[]
mang.forEach((phanTu) => {
    if (dem[phanTu] === undefined) {
        dem[phanTu] = 1;
    } else {
        dem[phanTu]++;
    }
});


for (let phanTu in dem) {
    console.log(`Phần tử: ${phanTu}. Xuất hiện ${dem[phanTu]} lần`);
}

