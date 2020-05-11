var firebaseConfig = {
    apiKey: "AIzaSyAxFGtQTw375UmuSGXMMJHjqCJhdWMdufg",
    authDomain: "cupcake-2c494.firebaseapp.com",
    databaseURL: "https://cupcake-2c494.firebaseio.com",
    projectId: "cupcake-2c494",
    storageBucket: "cupcake-2c494.appspot.com",
    messagingSenderId: "426404958238",
    appId: "1:426404958238:web:fd41937ea155188f845e0f",
    measurementId: "G-TW62Z2TKZC"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
//   firebase.analytics();

  var products=[];
  var cartItems=[];
  var cart_n=document.getElementById("cart_n");

  var cakeDiv=document.getElementById("cakeDiv");
  var promotionDiv=document.getElementById("promotionDiv");
  var boxDiv=document.getElementById("boxDiv");

  var CUPCAKE=[
    {name:'Cupcake #1',price:1},
    {name:'Cupcake #2',price:2},
    {name:'Cupcake #3',price:3},
    {name:'Cupcake #4',price:4}
  ];
  var PROMO=[
      {name:'Promotion',price:10}
  ];
  var BOX=[
    {name:'Cupcake Box',price:12}
];

function HTMLcupcakeProduct(con){
    let URL=`img/slide${con}.jpg`;
    let btn=`btnCUPCAKE${con}`;
    return `
            <div class="col-md-6">
             <div class="card mb-4 shadow-sm">
             <div class="cardImg">
             <img class="card-img-top" style="height:19rem" src="${URL}" alt="Card Image">
             </div>
             <div class="card-body">
             <i style="color:orange" class="fa fa-star"></i>
             <i style="color:orange" class="fa fa-star"></i>
             <i style="color:orange" class="fa fa-star"></i>
             <i style="color:orange" class="fa fa-star"></i>
             <i style="color:orange" class="fa fa-star"></i>
             <p class="card-text">${CUPCAKE[con-1].name}</p>
             <p class="card-text">Price:$${CUPCAKE[con-1].price}.00</p>
             <div class="d-flex justify-content-between align-items-center">
              <div class="btn-group">
              <button type="button" onclick="cart2('${CUPCAKE[con-1].name}','${CUPCAKE[con-1].price}','${URL}','${con}','${btn}')" class="btn btn-sm btn-outline-secondary">
              <a style="color:inherit" href="cart.html">BUY</a></button>
              <button id=${btn}" type="button" onclick="cart('${CUPCAKE[con-1].name}','${CUPCAKE[con-1].price}','${URL}','${con}','${btn}')" class="btn btn-sm btn-outline-secondary">Add to cart</button>
              </div>
              <small class="text-muted">Free Shipping</small>
              </div>
              </div>
              </div>
              </div>

    `
}
function HTMLpromotionProduct(){
    let URL=`img/carousel/slide10.jpg`;
    let btn=`btnpromotion`;
    return `
        <div class="row featurette">
        <div class="col-md-7">
        <h2 id="Promotions" style="padding-top:70px">Promotions</h2>
        <p class="lead">
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Magnam vel nihil deleniti impedit enim accusamus rerum assumenda, molestiae minima eum qui at modi, soluta aliquid vitae, veniam sint non quod!
        </p>
        <h3>$${PROMO[0].price}.00</h3>
        <button type="button" onclick="cart2('${PROMO[0].name}','${PROMO[0].price}','${URL}','0','${btn}')" class="btn btn-sm btn-outline-secondary"><a style="color:inherit" href="cart.html">Buy</a></button>
        <button id=${btn}" type="button" onclick="cart('${PROMO[0].name}','${PROMO[0].price}','${URL}','0','${btn}')" class="btn btn-sm btn-outline-secondary">Add to cart</button>
        </div>
        <div class="col-md-5">
        <img src="img/slide6.jpg" width="400" height="500">
        </div>
        </div>
    `
}

function HTMLcupcakeboxProduct(){
    let URL=`img/carousel/slide3.jpg`;
    let btn=`btnBox`;
    return `
        <div class="row featurette">
        <div class="col-md-7  order-md-2">
        <h2 id="Box" style="padding-top:70px">Cupcake box</h2>
        <p class="lead">
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Magnam vel nihil deleniti impedit enim accusamus rerum assumenda, molestiae minima eum qui at modi, soluta aliquid vitae, veniam sint non quod!
        </p>
        <h3>$${BOX[0].price}.00</h3>
        <button type="button" onclick="cart2('${BOX[0].name}','${BOX[0].price}','${URL}','0','${btn}')" class="btn btn-sm btn-outline-secondary"><a style="color:inherit" href="cart.html">Buy</a></button>
        <button id=${btn}" type="button" onclick="cart('${BOX[0].name}','${BOX[0].price}','${URL}','0','${btn}')" class="btn btn-sm btn-outline-secondary">Add to cart</button>
        </div>
        <div class="col-md-5 order-md-1">
        <img src="img/slide1.jpg" width="400" height="300">
        </div>
        </div>
    `
}
// function animation(){
//     const toast=swal.mixin({
//         toast:true,
//         position:'top-end',
//         showConfirmbutton:false,
//         timer:1000
//     });
//     toast({
//         type:'success',
//         title:'Added to shopping cart'
//     })
// }
// function animation(){
//     const toast=Swal.fire({
//       type:'success',
//       title: 'Added to shopping cart',
//       toast:true,
//       position:'top-end',
//       timer:2000,
//       showConfirmButton:false
//     });
//   }
// function cart(name,price,url,con,btncart){
//     var item={
//         name:name,
//         price:price,
//         url:url
//     }
//     cartItems.push(item);
//     let storage=JSON.parse(localStorage.getItem("cart"));
//     if(storage==null){
//         products.push(item);
//         localStorage.setItem("cart",JSON.stringify(products));
//     }
//     else{
//         products=JSON.parse(localStorage.getItem("cart"));
//         products.push(item);
//         localStorage.setItem("cart",JSON.stringify(products));
//     }
//     products=JSON.parse(localStorage.getItem("cart"));
//     cart_n.innerHTML=`[${products.length}]`;
//     document.getElementById(btncart).style.display="none";
//     animation();

// }
// function cart2(name,price,url,con,btncart)
// {
//     var item={
//         name:name,
//         price:price,
//         url:url
//     }
//     cartItems.push(item);
//     let storage=JSON.parse(localStorage.getItem("cart"));
//     if(storage==null){
//         products.push(item);
//         localStorage.setItem("cart",JSON.stringify(products));
//     }
//     else{
//         products=JSON.parse(localStorage.getItem("cart"));
//         products.push(item);
//         localStorage.setItem("cart",JSON.stringify(products));
//     }
//     products=JSON.parse(localStorage.getItem("cart"));
//     cart_n.innerHTML=`[${products.length}]`;
//     document.getElementById(btncart).style.display="none";
   


// }
function render(){ 

    for(let index=1;index<=4;index++)
    {
        cakeDiv.innerHTML+=`${HTMLcupcakeProduct(index)}`;

    }
    promotionDiv.innerHTML+=`${HTMLpromotionProduct()}`;
    boxDiv.innerHTML+=`${HTMLcupcakeboxProduct()}`;
    // if(localStorage.getItem("cart")==null){


    // }
    // else{
    //     products=JSON.parse(localStorage.getItem("cart"));
    //     cart_n.innerHTML=`[${products.length}]`;
    // }
};