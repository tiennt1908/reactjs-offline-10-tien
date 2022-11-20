let products = [
  { id: createId(), name: 'Fushigidane', thumb: 'Fushigidane.png', shortDesc: 'Người ta thường thấy Fushigidane nằm ngủ dưới ánh nắng. Càng đắm mình trong nắng, hạt giống trên lưng chúng càng phát triển.', price: 12 },
  { id: createId(), name: 'Hitokage', thumb: 'Hitokage.png', shortDesc: 'Tính cách ưa thích đồ nóng. Nghe nói khi trời mưa khói sẽ phụt ra từ đuôi của nó.', price: 15 },
  { id: createId(), name: 'Zenigame', thumb: 'Zenigame.png', shortDesc: 'Chiếc mai của Zenigame không chỉ để tự vệ, mà còn làm giảm tối đa lực cản nước nhờ hình dáng tròn trịa cùng bề mặt nhiều rãnh, giúp chúng bơi nhanh hơn.', price: 25 },
  { id: createId(), name: 'Pikachu', thumb: 'Pikachu.png', shortDesc: 'Những Pikachu có thể tạo ra dòng điện càng mạnh thì túi má càng mềm mại và lớn nhanh.', price: 32 },
  { id: createId(), name: 'Purin', thumb: 'Purin.png', shortDesc: 'Những bản thu âm tuyển tập bài hát ru kì lạ của Purin được bán tại các cửa hàng tạp hóa. Rất nhiều người coi chúng là vật gối đầu giường.', price: 9 },
];
const carts = [];
function createId() {
  // trả về một chuỗi ngẫu nhiên gồm 12 ký tự: 0-9a-zA-Z;
  const characters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
  let length = 12;
  let charactersLength = characters.length;
  let result = '';
  for (let i = 0; i < length; i++) {
    let idx = Math.floor(Math.random() * charactersLength);
    result += characters[idx];
  }
  return result;
}
function reduceItem(e){
  const val = document.getElementById("input-product-"+e.dataset.productId).value;
  document.getElementById("input-product-"+e.dataset.productId).value = val-1<1?1:val-1;
}
function increaseItem(e){
  document.getElementById("input-product-"+e.dataset.productId).value++;
}
function addToCart(e){
  const productId = e.dataset.productId;
  const amount = parseInt(document.getElementById("input-product-"+productId).value);
  const checkProduct = carts.findIndex((e)=>{
    return e.productId==productId;
  });

  if(checkProduct==-1){
    carts.push({id:createId(), productId, amount:parseInt(amount)});
  }
  else{
    carts[checkProduct].amount=carts[checkProduct].amount+amount;
  }
  document.getElementById("input-product-"+productId).value = 1;
  RenderCart();
}
function RemoveProduct(cartId){
  carts.splice(carts.findIndex(e=>e.id==cartId),1);
  RenderCart();
}
function UpdateProduct(cartId){
  carts[carts.findIndex(e=>e.id==cartId)].amount = document.getElementById("input-item-cart-"+cartId).value;
  RenderCart();
}
function RenderCart(){
  const total= carts.reduce((total, item)=>{
    const product = products[products.findIndex(p=>p.id==item.productId)];
    return total+item.amount*product.price;
  },0)
  document.getElementById("table-cart").innerHTML = `
  <table class="table align-middle mb-0 bg-white">
    <thead class="bg-light">
      <tr>
        <th>#</th>
        <td>Pokemon</td>
        <th>Price</th>
        <th>Quantity</th>
        <th>Subtotal</th>
        <th>Actions</th>
      </tr>
    </thead>
    <tbody>
      ${
        carts.map((e)=>{
          const product = products[products.findIndex(p=>p.id==e.productId)];
          return `
          <tr>
            <td>${product.id}</td>
            <td>${product.name}</td>
            <td>${product.price}</td>
            <td>
              <input type="number" class="form-control" id="input-item-cart-${e.id}" value="${e.amount}">
            </td>
            <td><span class="fw-bold">${product.price*e.amount}</span></td>
            <td>
              <button type="button" class="btn btn-link btn-sm btn-rounded" data-cart-id=${e.id} onclick="UpdateProduct(this.dataset.cartId)">Update</button>
              <button type="button" class="btn btn-link btn-sm btn-rounded" data-cart-id=${e.id} onclick="RemoveProduct(this.dataset.cartId)">Delete</button>
            </td>
          </tr>
          `;
        })
      }
    </tbody>
    <tfoot>
      <tr>
        <td colspan="4">There are <span>${carts.length}</span> items in your shopping cart.</td>
        <td colspan="2"><span class="fw-bold text-danger">${total}</span></td>
      </tr>
    </tfoot>
  </table>
  `;
}
document.getElementById("list-product").innerHTML = products.map((e)=>{
   return `
   <div class="row align-items-center">
       <div class="col-6 col-md-4">
         <img src="img/${e.thumb}" alt="" class="img-fluid">
       </div>
       <div class="col-6 col-md-8">
         <h6>${e.name}</h6>
         <div class="form-group">
           <div class="d-flex">
             <button class="btn btn-primary" data-product-id=${e.id} onclick=reduceItem(this)> - </button>
             <input type="value" class="form-control mx-1" value="1" min="1" id="input-product-${e.id}">
             <button class="btn btn-primary" data-product-id=${e.id} onclick=increaseItem(this)> + </button>
           </div>
           <button class="btn btn-danger btn-block mt-1 btn-add-to-cart" data-product-id=${e.id} onclick=addToCart(this)>$20</button>
         </div>
       </div>
   </div>
   `
 }).join("");
 