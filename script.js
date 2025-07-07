const platformSelect = document.getElementById("platform");
const categorySelect = document.getElementById("category");
const subcategorySelect = document.getElementById("subcategory");
const generateBtn = document.getElementById("generateBtn");
const resultDiv = document.getElementById("result");

const categoryWrapper = document.getElementById("category-wrapper");
const subcategoryWrapper = document.getElementById("subcategory-wrapper");

// Populate Platforms
const populatePlatforms = () => {
  Object.keys(plans).forEach(platform => {
    const opt = document.createElement("option");
    opt.value = platform;
    opt.textContent = platform.charAt(0).toUpperCase() + platform.slice(1);
    platformSelect.appendChild(opt);
  });
};

// Populate Categories
const populateCategories = () => {
  const selectedPlatform = platformSelect.value;
  categorySelect.innerHTML = '<option value="">-- Choose a Category --</option>';
  subcategorySelect.innerHTML = '<option value="">-- Choose a Subcategory --</option>';
  subcategoryWrapper.classList.add("hidden");
  generateBtn.classList.add("hidden");

  if (plans[selectedPlatform]) {
    categoryWrapper.classList.remove("hidden");
    Object.keys(plans[selectedPlatform]).forEach(category => {
      const opt = document.createElement("option");
      opt.value = category;
      opt.textContent = category.charAt(0).toUpperCase() + category.slice(1);
      categorySelect.appendChild(opt);
    });
  } else {
    categoryWrapper.classList.add("hidden");
  }
};

// Populate Subcategories
const populateSubcategories = () => {
  const selectedPlatform = platformSelect.value;
  const selectedCategory = categorySelect.value;
  subcategorySelect.innerHTML = '<option value="">-- Choose a Subcategory --</option>';
  generateBtn.classList.add("hidden");

  if (plans[selectedPlatform] && plans[selectedPlatform][selectedCategory]) {
    subcategoryWrapper.classList.remove("hidden");
    Object.keys(plans[selectedPlatform][selectedCategory]).forEach(sub => {
      const opt = document.createElement("option");
      opt.value = sub;
      opt.textContent = sub.charAt(0).toUpperCase() + sub.slice(1);
      subcategorySelect.appendChild(opt);
    });
  } else {
    subcategoryWrapper.classList.add("hidden");
  }
};

// Enable Generate Button
subcategorySelect.addEventListener("change", () => {
  if (subcategorySelect.value) {
    generateBtn.classList.remove("hidden");
  } else {
    generateBtn.classList.add("hidden");
  }
});

// Generate Plan
generateBtn.addEventListener("click", () => {
  const platform = platformSelect.value;
  const category = categorySelect.value;
  const subcategory = subcategorySelect.value;

  const plan = plans[platform]?.[category]?.[subcategory];
  resultDiv.textContent = plan || "No plan available for this selection.";
});

// Events
platformSelect.addEventListener("change", populateCategories);
categorySelect.addEventListener("change", populateSubcategories);

// Init
populatePlatforms();
