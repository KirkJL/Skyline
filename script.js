const categorySelect = document.getElementById("category");
const subcategorySelect = document.getElementById("subcategory");
const resultDiv = document.getElementById("result");
const generateBtn = document.getElementById("generateBtn");

const populateCategories = () => {
  Object.keys(plans).forEach(category => {
    const opt = document.createElement("option");
    opt.value = category;
    opt.textContent = category.charAt(0).toUpperCase() + category.slice(1);
    categorySelect.appendChild(opt);
  });
};

const populateSubcategories = () => {
  const selectedCategory = categorySelect.value;
  subcategorySelect.innerHTML = '<option value="">-- Choose a Subcategory --</option>';

  if (plans[selectedCategory]) {
    Object.keys(plans[selectedCategory]).forEach(sub => {
      const opt = document.createElement("option");
      opt.value = sub;
      opt.textContent = sub.charAt(0).toUpperCase() + sub.slice(1);
      subcategorySelect.appendChild(opt);
    });
  }
};

categorySelect.addEventListener("change", populateSubcategories);

generateBtn.addEventListener("click", () => {
  const category = categorySelect.value;
  const subcategory = subcategorySelect.value;

  if (category && subcategory && plans[category] && plans[category][subcategory]) {
    resultDiv.textContent = plans[category][subcategory];
  } else {
    resultDiv.textContent = "No plan available for this selection.";
  }
});

populateCategories();
