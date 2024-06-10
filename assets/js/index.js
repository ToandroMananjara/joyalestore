fetch('./assets/data/data.json')
    .then(response => response.json())
    .then(products => {
        const container = document.querySelector('.product-container')
        products.forEach((product )=> {
            addProduct(product, container)
            console.log(this);
        });
        showProduct(products, container)
    })
    
const addProduct = (product, container)=>{
    container.innerHTML += `
        <div class="product col-lg-3 " data-id = "${product.id}">
            <div class="product-image w-100">
                <img src="${product.photos[0]}" alt="" srcset="" class="w-100">
            </div>
            <div class="product-description">
                <h3 class="product-title">
                    <a href="">${product.description}</a>
                </h3>
                <span class="price">${product.prix} €</span>
                <div class="star-container">
                    <span class="star"></span>
                    <span class="star"></span>
                    <span class="star"></span>
                    <span class="star"></span>
                    <span class="star"></span>
                </div>
            </div>
        </div>
    ` 
}

const showProduct = (products, container)=>{
    const productItems = document.querySelectorAll('.product');
    let myProduct = []
    productItems.forEach(productItem =>{
        productItem.addEventListener('click', (e)=>{
            console.log(typeof(productItem.getAttribute("data-id")));
            myProduct = products.filter(product => {
                return product.id == productItem.getAttribute("data-id");
            })
            console.log(myProduct);
            renderShowDetail(myProduct[0], container)
        })  
    }) 
   
}

const renderShowDetail = (product, container) =>{
    const render = `
    <div class="details-container-item-left  col-md-6 col-12 " data-id = "${product.id}">
    <div class="details-left ">
        <div class="product-image">
            <img class="w-100" src="${product.photos[0]}" alt="">
        </div>
    </div>
    </div>
    <div class="details-container-item-right  col-md-6 col-12">
        <div class="details-right ">
            <div class="product-title-details">
                <h3>${product.description}</h3>
            </div>

            <div class="product-prix-details">
                <h3>${product.prix} €</h3>
            </div>
            <hr>
            <div class="">
                <div class="product-quantity d-flex align-items-center gap-4">
                    <span class="control-label">Quantité</span>
                    <div class="qty">
                    <input class="input-qty" type="number" min="1" value="1">
                    </div>
                </div>

                <div class="add">
                    <button class="btn btn-primary add-to-cart" data-button-action="add-to-cart" type="submit">
                    <i class="fa fa-shopping-cart"></i>
                    Ajouter au panier
                    </button>
                </div>
                
            </div>


            <div class="blockreassurance_product">
                <div class="item-product-container">
                    <span class="item-product">
                        <img src="./assets/img/theme/rea_customer_service.png"/>
                    </span>
                    <p class="block-title" style="color:#000000;">Service client au 06 49 54 94 19</p>
                </div>
                <div class="item-product-container">
                    <span class="item-product">
                        <img
                            src="./assets/img/theme/reassurance-joya-le-store-moyens-paiements.png"/>

                    </span>
                    <p class="block-title" style="color:#000000;">Paiements sécurisés; 3x sans frais avec Alma
                    </p>
                </div>
                <div class="item-product-container">
                    <span class="item-product">
                        <img class=""
                            src="./assets/img/theme/rea_shipping.png"/>  
                    </span>
                    <p class="block-title" style="color:#000000;">Livraison offerte avec Mondial Relay à partir de
                        100€</p>
                </div>
                <div class="item-product-container">
                    <span class="item-product">
                        <img src="./assets/img/theme/rea_click_collect.png"/>
                        
                    </span>
                    <p class="block-title" style="color:#000000;">Click; Collect à La Grande Motte</p>
                </div>
                <div class="clearfix"></div>
                <hr>
            </div>
        </div>
    </div>
    `
    container.innerHTML = render;
    
}