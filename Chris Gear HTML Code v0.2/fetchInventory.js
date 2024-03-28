fetch('inventory.csv')
    .then(response => response.text())
    .then(csvData => {
      // Parse CSV data
      const products = csvData.split('\n').map(line => line.split(','));

      // Remove header row if exists
      const headerRow = products.shift();

      // Populate HTML with product data
      const productContainer = document.getElementById('product-container');

      products.forEach(product => {
        const [name, price, description, image, category] = product;
        const productItem = `
            <div class="shop-item">
                <span class="shop-item-title">${name}</span>
                <img class="shop-item-image" src="${image}">
                <div class="shop-item-details">
                    <span class="shop-item-price">$${price}</span>
                    <button class="btn btn-primary shop-item-button" type="button">ADD TO CART</button>
                </div>
            </div>
        `;
        // modified from Web Dev Simplified
        productContainer.innerHTML += productItem;
      });
    })
    .catch(error => {
      console.error('Error fetching or parsing CSV file:', error);
    });

/*
Run chrome with tags:

    chrome.exe --user-data-dir="C://chrome-dev-disabled-security" --disable-web-security --disable-site-isolation-trials

to allow csv file to fetch properly
*/