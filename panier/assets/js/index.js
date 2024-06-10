fetch('./assets/data/data.json')
    .then(response => response.json())
    .then(products => {
        const container = document.querySelector('.product-container')
        products.forEach(product => {
            addProduct(product, container)
        });
    })

const addProduct = (product, container)=>{
    container.innerHTML += `
        <div class="product col-lg-3 ">
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