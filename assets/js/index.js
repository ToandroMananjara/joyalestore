const updateLocal = (array)=>{
    localStorage.setItem('myProduct', JSON.stringify(array));
} 

const myProducts = []   
fetch('./assets/data/data.json')
    .then(response => response.json())
    .then(products => {
        const container = document.querySelector('.product-container')
        products.forEach((product )=> {
            addProduct(product, container)
            console.log(this);
        });
        showProduct(products)
    })
    
const addProduct = (product, container)=>{
    container.innerHTML += `
        <div class="product  col-lg-3 " data-id = "${product.id}">
        <a href="./showDetail/showDetail.html">
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
        </a>
            
        </div>
    ` 
}

const showProduct = (products)=>{
    const productItems = document.querySelectorAll('.product');
    productItems.forEach(productItem =>{
        productItem.addEventListener('click', (e)=>{
            console.log(typeof(productItem.getAttribute("data-id")));
            const myProductItems = products.filter(product => {
                return product.id == productItem.getAttribute("data-id");
            })
            myProducts.push(myProductItems[0]) 
            updateLocal(myProductItems)
            console.log(myProducts);
        })  
    }) 
   
}
