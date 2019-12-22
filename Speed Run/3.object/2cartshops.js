/*
    =============
    Shopping Cart 
    =============

    Saat nya berbelanja di harbolnas. kali ini TokoPC memiliki beberapa product 
    yang menarik.
    
    [INSTRUCTION]
    buatlah system cart untuk TokoPC dimana user memilih belanjaan dari 
    var products dengan cara memasukkan id product nya kedalam array, setelah 
    itu pesanan user di olah , di subtotal dengan cara qty nya di kali price,
    lalu di total semua pesanannya.

    [EXAMPLE]
    jika user memesan [3,2,2,1], maka User telah memesan 
    product-product dengan id: 
    - 3 ( RAM V-Gen 16GB ) sebanyak 1 qty 
      maka subtotalnya adalah price=> 1600000 * qty=> 1 = 1600000
    - 2 ( Harddisk Seagate 1TB ) sebanyak 2 qty
      maka subtotalnya adalah price=> 1500000 * qty=> 2 = 3000000 
    - 1 ( Motherboard Asus GTX 1000 ) sebanyak 1 qty 
      maka subtotalnya adalah price=> 1000000 * qty=> 1 = 1000000
    total nya adalah 5600000

    dengan contoh perhitungan diatas , maka outputnya adalah : 
    {
        title:"Nota Pembayaran"
        carts:{
             {
                id:3,
                title:"RAM V-Gen 16GB"
                qty:1,
                subtotal:1600000
            },
            {
                id:2,
                title:"Harddisk Seagate 1TB"
                qty:2,
                subtotal:3000000
            },
            {
                id:1,
                title:"Motherboard Asus GTX 1000"
                qty:1,
                subtotal:1000000
            }
        },
        total:5600000
    } 

    [NOTE]
    - product di dalam cart , tidak berurutan tidak apa - apa 

    [RULE]
    - Dilarang menggunakan build in function array apapun kecuali push() 
    - Dilarang menggunakan built in function .map(), .filter() dan .reduce()!
    - Dilarang menggunakan regex .match dan lainnya!
    - Dilarang menggunakan built in function .indexOf() dan .include()

*/
function cart(shops) {
  let product = [ [1, 'Motherboard Asus GTX 1000', 1000000], [2, 'Harddisk Seagate 1TB', 1500000], [3, 'RAM V-Gen 16GB', 1600000] ]
  let obj = { title : 'Nota Pembayaran', carts : []}


  let total = 0
  for (let i = 0; i < product.length; i++) {
    let obj2 = {}
    let count = 0
    for (let j = 0; j < shops.length; j++) {
      if (product[i][0] == shops[j]) {
        count++
      }
      obj2.id = product[i][0]
      obj2.title = product[i][1]
      obj2.qty = count
      obj2.subtotal = product[i][2] * count
    }
    total += product[i][2] * count
    obj.carts.push(obj2)
    obj.total = total 
    }
    return obj
}


console.log(cart([1, 1, 2, 3, 3, 3]));
/* 
    {
        title:"Nota Pembayaran"
        carts:[
            {
                id:1,
                title:"Motherboard Asus GTX 1000"
                qty:2,
                subtotal:2000000
            },
            {
                id:2,
                title:"Harddisk Seagate 1TB"
                qty:1,
                subtotal:1500000
            },
            {
                id:3,
                title:"RAM V-Gen 16GB"
                qty:3,
                subtotal:4800000
            }
        ],
        total:8300000
    }
*/

// console.log(cart([1,3,2,1,4,3]))
/* 
    { title: 'Nota Pembayaran',
    cart:
    [{ id: 1,
        title: 'Motherboard Asus GTX 1000',
        qty: 2,
        subtotal: 2000000 },
        { id: 3, title: 'RAM V-Gen 16GB', qty: 2, subtotal: 3200000 },
        { id: 2,
          title: 'Harddisk Seagate 1TB',
          qty: 1,
          subtotal: 1500000 
        },
        { id: 4,
          title: 'Monitor Samsung 15 inch',
          qty: 1,
          subtotal: 1300000 
        }],
    total: 8000000 }
*/

// console.log(cart([]))
// anda harus memilih product 

























// var products = [
//   {
//     id: 1,
//     title: "Motherboard Asus GTX 1000",
//     price: 1000000
//   },
//   {
//     id: 2,
//     title: "Harddisk Seagate 1TB",
//     price: 1500000
//   },
//   {
//     id: 3,
//     title: "RAM V-Gen 16GB",
//     price: 1600000
//   },
//   {
//     id: 4,
//     title: "Monitor Samsung 15 inch",
//     price: 1300000
//   }
// ]

// function cart(shops) {

// let obj = {
//   title : 'Nota Pembayaran',
//   carts : [],
// }

// let total = 0

// for (let i = 0; i < products.length; i++) {
//   for (let j = 0; j < shops.length; j++) {
//     if (products[i].id == shops[j]) {
//       let found = false
//       for(let k = 0; k < obj.carts.length;k++){
//         if(obj.carts[k].id === products[i].id){
//           found = true
//           obj.carts[k].qty++;
//           obj.carts[k].subtotal += products[i].price
//         }
//       }
//       if(!found){
//         obj.carts.push({
//           id: products[i].id,
//           title: products[i].title,
//           qty:1,
//           subtotal: products[i].price
//         })
//       }
//       total += products[i].price
//     }
//   }
// }
// obj.total = total
// return obj
// }







// for(var i = 0; i < shops.length; i++) {
//     var isInCarts = false
//     // count = 0;
//     // console.log(shops[i], 'ini pembelian di shopnyas')
    
//     //looping ke j ini dibutuhin buat ngerubah dari id => object dari id tersebut
//     for (var j = 0; j < products.length; j++) {
//         var index = 0;
//         //supaya ngga double maka kita harus check biar ngga double pake FLAG
//         if(shops[i] === products[j].id) {
//             //cek dulu di dalam cartsnya udah ada apa belum?
//             for(var k = 0; k < output.carts.length; k++) {
//                 if(output.carts[k].id === shops[i]) {
//                     isInCarts = true
//                     index = k
//                 }
//             }
//             //setelah pengecekan baru kita masukan sesuai format
//             if(isInCarts === false) {
//                 output.carts.push({
//                     id: shops[i],
//                     title: products[j].title,
//                     qty: 1,
//                     subtotal: products[j].price 
//                 })
//                 output.total += products[j].price
//             } else {
//                 output.carts[index].qty += 1
//                 output.carts[index].subtotal += products[j].price
//                 output.total += products[j].price
//             }
//         }
