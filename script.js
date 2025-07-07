const platformSelect = document.getElementById("platform");
const categorySelect = document.getElementById("category");
const subcategorySelect = document.getElementById("subcategory");
const generateBtn = document.getElementById("generateBtn");
const planContainer = document.getElementById("planContainer");

function populateSelect(select, items) {
  select.innerHTML = '<option value="">-- Select --</option>';
  for (const item of items) {
    const opt = document.createElement("option");
    opt.value = item;
    opt.textContent = item;
    select.appendChild(opt);
  }
}

populateSelect(platformSelect, Object.keys(data));

platformSelect.addEventListener("change", () => {
  const platform = platformSelect.value;
  if (platform && data[platform]) {
    const categories = Object.keys(data[platform]);
    populateSelect(categorySelect, categories);
    categorySelect.disabled = false;
    subcategorySelect.disabled = true;
    subcategorySelect.innerHTML = '<option value="">-- Select Subcategory --</option>';
  }
});

categorySelect.addEventListener("change", () => {
  const platform = platformSelect.value;
  const category = categorySelect.value;
  if (platform && category && data[platform][category]) {
    const subcategories = Object.keys(data[platform][category]);
    populateSelect(subcategorySelect, subcategories);
    subcategorySelect.disabled = false;
  }
});

generateBtn.addEventListener("click", () => {
  const platform = platformSelect.value;
  const category = categorySelect.value;
  const subcategory = subcategorySelect.value;

  if (platform && category && subcategory) {
    const plan = data[platform]?.[category]?.[subcategory];
    planContainer.textContent = plan || "No plan available for that combo.";
  } else {
    planContainer.textContent = "Please make all selections first.";
  }
});
