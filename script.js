const search = () => {
    const searchbox = document.getElementById("search-item").value.toUpperCase();
    const storeitems = document.getElementById("list");
    const products = document.querySelectorAll(".product");
    const matchingProducts = [];
  
    for (let i = 0; i < products.length; i++) {
      let match = products[i].getElementsByTagName("h2")[0];
  
      if (match) {
        let textvalue = match.textContent || match.innerText;
  
        if (textvalue.toUpperCase().indexOf(searchbox) > -1) {
          products[i].style.display = "";
          matchingProducts.push(products[i]);
        } else {
          products[i].style.display = "none";
        }
      }
    }
  
    return matchingProducts;
  };
  


