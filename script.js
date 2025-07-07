const platformSelect = document.getElementById("platform");
const categorySelect = document.getElementById("category");
const subcategorySelect = document.getElementById("subcategory");
const categoryContainer = document.getElementById("category-container");
const subcategoryContainer = document.getElementById("subcategory-container");
const planOutput = document.getElementById("plan");

platformSelect.addEventListener("change", () => {
  const platform = platformSelect.value;
  categorySelect.innerHTML = "<option value=''>Select a category</option>";
  subcategorySelect.innerHTML = "<option value=''>Select a subcategory</option>";
  subcategoryContainer.style.display = "
