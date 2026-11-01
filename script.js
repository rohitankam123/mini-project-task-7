// Select HTML elements
let api = document.querySelector(".api");
let practice = document.querySelector(".practice");
let productsDiv = document.querySelector(".products");

// Show loading message before fetching
api.innerHTML = "Loading...";

// Fetch product data from API
fetch("https://fakestoreapi.com/products")

    .then((response) => {
        if (!response.ok) {
            throw new Error("Unable to fetch products");
        }

        return response.json();
    })

    .then((products) => {

        // API successfully loaded
        api.innerHTML = "Products loaded successfully";

        // Function to create each task section
        function showTask(title, content) {
            let task = document.createElement("details");
            task.className = "task";

            task.innerHTML = `
                <summary>${title}</summary>
                <div class="task-output">${content}</div>
            `;

            practice.appendChild(task);
        }

        // Q1: Display only product title inside h1
        let q1 = "";
        products.forEach((product) => {
            q1 += `<h1>${product.title}</h1>`;
        });
        showTask("Q1. Product titles inside h1", q1);


        // Q2: Display product ID and title inside h2
        let q2 = "";
        products.forEach((product) => {
            q2 += `<h2>ID: ${product.id} - ${product.title}</h2>`;
        });
        showTask("Q2. Product ID and title inside h2", q2);


        // Q3: First 30 characters of each title
        let q3 = "";
        products.forEach((product) => {
            q3 += `<p>${product.title.slice(0, 30)}</p>`;
        });
        showTask("Q3. First 30 characters of titles", q3);


        // Q4: First 100 characters of descriptions
        let q4 = "";
        products.forEach((product) => {
            q4 += `<p>${product.description.slice(0, 100)}</p>`;
        });
        showTask("Q4. First 100 characters of descriptions", q4);


        // Q5: Display image inside a div
        let q5 = "";
        products.forEach((product) => {
            q5 += `
                <div>
                    <img src="${product.image}" width="100" alt="${product.title}">
                </div>
            `;
        });
        showTask("Q5. Product images inside div", q5);


        // Q6: Title, description and image inside one div
        let q6 = "";
        products.forEach((product) => {
            q6 += `
                <div>
                    <h3>${product.title}</h3>
                    <p>${product.description}</p>
                    <img src="${product.image}" width="100" alt="${product.title}">
                </div>
            `;
        });
        showTask("Q6. Title, description and image inside one div", q6);


        // Q7: Display price inside p tag
        let q7 = "";
        products.forEach((product) => {
            q7 += `<p>Price: $${product.price}</p>`;
        });
        showTask("Q7. Product prices", q7);


        // Q8: Display category inside h3
        let q8 = "";
        products.forEach((product) => {
            q8 += `<h3>${product.category}</h3>`;
        });
        showTask("Q8. Product categories inside h3", q8);


        // Q9: Display title in uppercase
        let q9 = "";
        products.forEach((product) => {
            q9 += `<p>${product.title.toUpperCase()}</p>`;
        });
        showTask("Q9. Product titles in uppercase", q9);


        // Q10: Title and character count
        let q10 = "";
        products.forEach((product) => {
            q10 += `
                <p>
                    ${product.title}
                    <br>
                    Characters: ${product.title.length}
                </p>
            `;
        });
        showTask("Q10. Title and character count", q10);


        // Q11: Display first 5 products only
        let q11 = "";
        products.slice(0, 5).forEach((product) => {
            q11 += `<p>${product.id} - ${product.title}</p>`;
        });
        showTask("Q11. First 5 products only", q11);


        // Q12: Display ID, title and price
        let q12 = "";
        products.forEach((product) => {
            q12 += `
                <p>
                    ID: ${product.id}<br>
                    Title: ${product.title}<br>
                    Price: $${product.price}
                </p>
                <hr>
            `;
        });
        showTask("Q12. Product ID, title and price", q12);


        // Q13: Display image with width 200px
        let q13 = "";
        products.forEach((product) => {
            q13 += `
                <img src="${product.image}" width="200" alt="${product.title}">
            `;
        });
        showTask("Q13. Product images with 200px width", q13);


        // Q14: Separate div with class card
        let q14 = "";
        products.forEach((product) => {
            q14 += `
                <div class="card">
                    <h3>${product.title}</h3>
                    <p>$${product.price}</p>
                </div>
            `;
        });
        showTask("Q14. Product div with card class", q14);


        // Q15: Title and description limited to 50 characters
        let q15 = "";
        products.forEach((product) => {
            q15 += `
                <h3>${product.title}</h3>
                <p>${product.description.slice(0, 50)}</p>
            `;
        });
        showTask("Q15. Title and 50-character description", q15);


        // Q16: Display titles in console and webpage
        let q16 = "";
        products.forEach((product) => {
            console.log(product.title);
            q16 += `<p>${product.title}</p>`;
        });
        showTask("Q16. Product titles in console and webpage", q16);


        // Q17: Title and category inside same div
        let q17 = "";
        products.forEach((product) => {
            q17 += `
                <div>
                    <h3>${product.title}</h3>
                    <p>${product.category}</p>
                </div>
            `;
        });
        showTask("Q17. Title and category inside same div", q17);


        // Q18: Success message is displayed in .api
        api.innerHTML = "Products loaded successfully";


        // Q19: Loading message was displayed before fetch
        showTask("Q19. Loading message", "<p>Loading... was displayed before fetching data.</p>");


        // Q20: Completion message is added in finally
        // See the finally block below.


        // MINI PROJECT: Product Listing Page
        products.forEach((product) => {

            let card = document.createElement("div");
            card.className = "product-card";

            card.innerHTML = `
                <h3>${product.title.slice(0, 50)}</h3>

                <p><strong>Product ID:</strong> ${product.id}</p>

                <p class="price">Price: $${product.price}</p>

                <p>${product.description.slice(0, 100)}</p>

                <img src="${product.image}" alt="${product.title}">
            `;

            productsDiv.appendChild(card);
        });

    })

    .catch((error) => {
        api.innerHTML = `<p class="error">Error: ${error.message}</p>`;
    })

    .finally(() => {
        api.innerHTML += "<p>API request completed</p>";
    });