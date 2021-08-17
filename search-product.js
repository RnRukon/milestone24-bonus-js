const products = [
    { name: 'samsung s3 phone', price: '12000' },
    { name: 'asus laptop d34', price: '32000' },
    { name: 'apple smart watch', price: '18000' },
    { name: 'bosundhara binding paper', price: '120' },
    { name: 'lg smart phone', price: '10000' },
    { name: 'old granny land phone', price: '100' },
    { name: 'samsung watch', price: '100' },
]
function searchProducts(products, searchText) {

    // console.log(products, searchText)
    const matched = [];
    for (const product of products) {
        const name = product.name;
        if (name.indexOf(searchText) != -1) {
            matched.push(name)
        }
    }
    return matched;
}
console.log(searchProducts(products, 'phome'));