let products = JSON.parse(localStorage.getItem("products")) || [];
let editingIndex = null;

function saveToLocal() {
  localStorage.setItem("products", JSON.stringify(products));
}

function render() {
  const list = document.getElementById("productList");
  const filter = document.getElementById("filter").value;
  const search = document.getElementById("search").value.toLowerCase();
  const sort = document.getElementById("sort").value;

  let filtered = products.filter(p =>
    p.title.toLowerCase().includes(search) &&
    (filter === "" || p.category === filter)

  );

  if (sort === "low") filtered.sort((a, b) => a.price - b.price);
  else if (sort === "high") filtered.sort((a, b) => b.price - a.price);

  list.innerHTML = "";
  filtered.forEach((product, i) => {
    list.innerHTML += `
          <div class="col-md-4">
            <div class="card mb-3">
              <img src="${product.image}" class="card-img-top" alt="${product.title}" style="height: 200px; object-fit: cover;">
              <div class="card-body">
                <h5 class="card-title">${product.title}</h5>
                <p class="card-text">₹${product.price} <br><small class="text-muted">${product.category}</small></p>
                <div class="d-flex justify-content-between">
                  <button class="btn btn-sm btn-warning" onclick="editProduct(${i})">Edit</button>
                  <button class="btn btn-sm btn-danger" onclick="deleteProduct(${i})">Delete</button>
                </div>
              </div>
            </div>
          </div>
        `;
  });

  updateCategoryFilter();
}

function updateCategoryFilter() {
  const filter = document.getElementById("filter");
  const categories = [...new Set(products.map(p => p.category))];
  filter.innerHTML = `<option value="">Filter by Category</option>`;
  categories.forEach(cat => {
    filter.innerHTML += `<option value="${cat}">${cat}</option>`;
  });
  
}

document.getElementById("productForm").addEventListener("submit", function (e) {
  e.preventDefault();
  const title = document.getElementById("title").value.trim();
  const price = parseFloat(document.getElementById("price").value);
  const image = document.getElementById("image").value.trim();
  const category = document.getElementById("category").value.trim();

  if (!title || !price) return alert("Title and Price required");

  const product = { title, price, image, category };
  if (editingIndex !== null) {
    products[editingIndex] = product;
    editingIndex = null;
  } else {
    products.push(product);
  }
  saveToLocal();
  render();
  this.reset();
});

function editProduct(index) {
  const product = products[index];
  document.getElementById("title").value = product.title;
  document.getElementById("price").value = product.price;
  document.getElementById("image").value = product.image;
  document.getElementById("category").value = product.category;
  editingIndex = index;
}

function deleteProduct(index) {
  if (confirm("Are you sure you want to delete product?")) {
    products.splice(index, 1);
    saveToLocal();
    render();
  }
}

document.getElementById("search").addEventListener("input", render);
document.getElementById("sort").addEventListener("change", render);
document.getElementById("filter").addEventListener("change", render);

render();