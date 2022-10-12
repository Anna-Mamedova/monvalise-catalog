let products = [
    {
      foto: "/image/foto-1.svg",
      top: "image/top-icon.svg",
      brand: "Louis Vuitton",
      description: "Темно-сині джинси Louis Vuitton",
      old_price: "5 499",
      price: "3 799",
      city: "Херсон",
      seller: "LoveBrand",
      seller_icon: "/image/seller-LoveBrand.svg"
    },
    {
      foto: "/image/foto-2.svg",
      top: "image/top-icon.svg",
      brand: "Thom Browne",
      description: "Чорний піджак Thom Browne",
      old_price: "11 499",
      price: "8 599",
      city: "Хмельницький",
      seller: "Sell_For_Men",
      seller_icon: "/image/seller-sell_for_men.svg"
    },
    {
      foto: "/image/foto-3.svg",
      brand: "Canali",
      description: "Вовняний піджак Canali",
      old_price: "4 999",
      price: "2 599",
      city: "Хмельницький",
      seller: "Sell_For_Men",
      seller_icon: "/image/seller-sell_for_men.svg"
    },
    {
      foto: "/image/foto-4.svg",
      brand: "Louis Vuitton",
      description: "Клатч Louis Vuitton Limelight",
      old_price: "4 999",
      price: "3 499",
      city: "Дніпро",
      seller: "Brandear",
      seller_icon: "/image/seller-Brandear.svg"
    },
    {
      foto: "/image/foto-5.svg",
      brand: "Elena Ghiselini",
      description: "Сумка з декором Elena Ghiselini",
      old_price: "1 999",
      price: "1 599",
      city: "Дніпро",
      seller: "Brandear",
      seller_icon: "/image/seller-Brandear.svg"
    },
    {
      foto: "/image/foto-6.svg",
      brand: "Acne",
      description: "Бомбер Acne на блискавці",
      old_price: "5 999",
      price: "4 199",
      city: "Київ",
      seller: "Alexalex",
      seller_icon: "/image/seller-Alexalex.svg"
    },
    {
      foto: "/image/foto-7.svg",
      brand: "Gucci",
      description: "Довга сукня Gucci",
      old_price: "11 999",
      price: "8 599",
      city: "Рівне",
      seller: "SellBuy",
      seller_icon: "/image/seller-SellBuy.svg"
    },
    {
      foto: "/image/foto-8.svg",
      brand: "Chanel",
      description: "Помаранчевий бомбер Woolrich",
      old_price: "1 999",
      price: "1 599",
      city: "Кропивницький",
      seller: "Deeva_Sofia",
      seller_icon: "/image/seller-Deeva_Sofia.svg"
    },
    {
      foto: "/image/foto-9.svg",
      brand: "Hache",
      description: "Салатову пальто Hache",
      old_price: "5 999",
      price: "4 199",
      city: "Київ",
      seller: "LoveBrand",
      seller_icon: "/image/seller-LoveBrand.svg"
    },    
];
  
let catalogProducts = document.querySelector(".products");
let i = 0
let productsHTML = `<div class="row">`;
  
for (;i < products.length; i++) {
    
    if (products[i].top){
  
    productsHTML = productsHTML + 
      `
      <div class="col-4">
          <div class="card">
            <img src="${products[i].foto}" class="product-foto"/>
            <img src="/image/like-button.svg" class="like-button" />
              <div class="card-body-top">
                  <img src="${products[i].top}" class="top-icon"/>
                  <p class="product-brand">${products[i].brand}</p>
                  <p class="product-description">${products[i].description}</p>
                  <div class="d-flex justify-content-between">
                      <div>
                          <p class="old-price">${products[i].old_price}<span>!</span></p>
                          <p class="price">${products[i].price}</p>
                      </div>
                      <div class="m-0">
                          <div class="d-flex justify-content-end align-items-center">
                              <img src="/image/map-pointer.svg" />
                              <p class="city">${products[i].city}</p>
                          </div>
                          <div class="d-flex align-items-center">
                              <img src="${products[i].seller_icon}" class="seller-icon"/>
                              <p class="seller">${products[i].seller}</p>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
      </div>
      `
    } else {
      productsHTML = productsHTML + 
      `
      <div class="col-4">
          <div class="card">
              <img src="${products[i].foto}" class="product-foto"/>
              <img src="/image/like-button.svg" class="like-button" />
              <div class="card-body">
                  <p class="product-brand">${products[i].brand}</p>
                  <p class="product-description">${products[i].description}</p>
                  <div class="d-flex justify-content-between">
                      <div>
                          <p class="old-price">${products[i].old_price}<span>!</span></p>
                          <p class="price">${products[i].price}</p>
                      </div>
                      <div class="m-0">
                          <div class="d-flex justify-content-end align-items-center">
                              <img src="/image/map-pointer.svg" />
                              <p class="city">${products[i].city}</p>
                          </div>
                          <div class="d-flex align-items-center">
                              <img src="${products[i].seller_icon}" class="seller-icon"/>
                              <p class="seller">${products[i].seller}</p>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
      </div>
      `
    }
}
  
productsHTML = productsHTML + `</div>`;
catalogProducts.innerHTML = productsHTML;