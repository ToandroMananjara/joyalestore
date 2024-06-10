// import { updateLocal } from "./index.js"
const container = document.querySelector('.product-container')
const myProducts = JSON.parse(localStorage.getItem('myProduct'))
const renderShowDetail = (product, container) =>{
    const render = `
    <div class="d-flex">
        <div class="details-left ">
            <div class="product-image">
                <img class="w-100" src="${product.photos[0]}" alt="">
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
    </div>
    `
    container.innerHTML = render;
}
renderShowDetail(myProducts[0], container)
const addToCart = (product, container)=>{
    
}
