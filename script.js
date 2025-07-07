document.addEventListener("DOMContentLoaded", () => {
  const platformSelect = document.getElementById("platform");
  const categorySelect = document.getElementById("category");
  const subcategorySelect = document.getElementById("subcategory");
  const categoryContainer = document.getElementById("categoryContainer");
  const subcategoryContainer = document.getElementById("subcategoryContainer");
  const generateBtn = document.getElementById("generateBtn");
  const result = document.getElementById("result");

  // Populate platform dropdown
  Object.keys(plans).forEach(platform => {
    const option = document.createElement("option");
    option.value = platform;
    option.textContent = platform.charAt(0).toUpperCase() + platform.slice(1);
    platformSelect.appendChild(option);
  });

  platformSelect.addEventListener("change", () => {
    const selectedPlatform = platformSelect.value;
    categorySelect.innerHTML = '<option value="">-- Choose a Category --</option>';
    subcategorySelect.innerHTML = '<option value="">-- Choose a Subcategory --</option>';
    result.innerHTML = "";
    subcategoryContainer.classList.add("hidden");

    if (selectedPlatform && plans[selectedPlatform]) {
      Object.keys(plans[selectedPlatform]).forEach(category => {
        const option = document.createElement("option");
        option.value = category;
        option.textContent = category.charAt(0).toUpperCase() + category.slice(1);
        categorySelect.appendChild(option);
      });
      categoryContainer.classList.remove("hidden");
    } else {
      categoryContainer.classList.add("hidden");
    }
  });

  categorySelect.addEventListener("change", () => {
    const selectedPlatform = platformSelect.value;
    const selectedCategory = categorySelect.value;
    subcategorySelect.innerHTML = '<option value="">-- Choose a Subcategory --</option>';
    result.innerHTML = "";

    if (selectedPlatform && selectedCategory) {
      const subcategories = plans[selectedPlatform][selectedCategory];
      Object.keys(subcategories).forEach(sub => {
        const option = document.createElement("option");
        option.value = sub;
        option.textContent = sub.charAt(0).toUpperCase() + sub.slice(1);
        subcategorySelect.appendChild(option);
      });
      subcategoryContainer.classList.remove("hidden");
    } else {
      subcategoryContainer.classList.add("hidden");
    }
  });

  generateBtn.addEventListener("click", () => {
    const platform = platformSelect.value;
    const category = categorySelect.value;
    const subcategory = subcategorySelect.value;

    if (platform && category && subcategory) {
      result.innerHTML = plans[platform][category][subcategory];
    } else {
      result.innerHTML = "<em>Please select all fields before generating a plan.</em>";
    }
  });
});
