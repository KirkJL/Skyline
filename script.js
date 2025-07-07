const categorySelect = document.getElementById("category");
const subcategorySelect = document.getElementById("subcategory");
const platformSelect = document.getElementById("platform");
const contentTypeSelect = document.getElementById("contentType");
const postTimeSelect = document.getElementById("postTime");
const generateBtn = document.getElementById("generateBtn");
const resultDiv = document.getElementById("result");

const subcategoryLabel = document.getElementById("subcategory-label");
const platformLabel = document.getElementById("platform-label");
const contentTypeLabel = document.getElementById("contentType-label");
const postTimeLabel = document.getElementById("postTime-label");

function populateDropdown(selectElement, items, placeholder) {
  selectElement.innerHTML = `<option value="">${placeholder}</option>`;
  items.forEach(item => {
    const option = document.createElement("option");
    option.value = item;
    option.textContent = item.charAt(0).toUpperCase() + item.slice(1);
    selectElement.appendChild(option);
  });
}

function populateCategories() {
  const cats = Object.keys(plans);
  populateDropdown(categorySelect, cats, "-- Choose a Category --");
}

function populateSubcategories() {
  const selectedCategory = categorySelect.value;
  if (selectedCategory && plans[selectedCategory]) {
    const subs = Object.keys(plans[selectedCategory]);
    populateDropdown(subcategorySelect, subs, "-- Choose a Subcategory --");
    subcategorySelect.style.display = "block";
    subcategoryLabel.style.display = "block";
  } else {
    subcategorySelect.style.display = "none";
    subcategoryLabel.style.display = "none";
  }
  checkEnableGenerate();
  hideFurtherDropdowns();
}

function hideFurtherDropdowns() {
  platformSelect.style.display = "none";
  platformLabel.style.display = "none";
  contentTypeSelect.style.display = "none";
  contentTypeLabel.style.display = "none";
  postTimeSelect.style.display = "none";
  postTimeLabel.style.display = "none";
}

function populateFurtherDropdowns() {
  if(subcategorySelect.value) {
    populateDropdown(platformSelect, platforms, "-- Choose a Platform --");
    platformSelect.style.display = "block";
    platformLabel.style.display = "block";
  } else {
    platformSelect.style.display = "none";
    platformLabel.style.display = "none";
  }

  if(platformSelect.value) {
    populateDropdown(contentTypeSelect, contentTypes, "-- Choose Content Type --");
    contentTypeSelect.style.display = "block";
    contentTypeLabel.style.display = "block";
  } else {
    contentTypeSelect.style.display = "none";
    contentTypeLabel.style.display = "none";
  }

  if(contentTypeSelect.value) {
    populateDropdown(postTimeSelect, postTimes, "-- Choose Post Time --");
    postTimeSelect.style.display = "block";
    postTimeLabel.style.display = "block";
  } else {
    postTimeSelect.style.display = "none";
    postTimeLabel.style.display = "none";
  }

  checkEnableGenerate();
}

function checkEnableGenerate() {
  if(categorySelect.value && subcategorySelect.value && platformSelect.value && contentTypeSelect.value && postTimeSelect.value) {
    generateBtn.disabled = false;
  } else {
    generateBtn.disabled = true;
  }
}

categorySelect.addEventListener("change", () => {
  populateSubcategories();
  resultDiv.textContent = "";
});

subcategorySelect.addEventListener("change", () => {
  populateFurtherDropdowns();
  resultDiv.textContent = "";
});

platformSelect.addEventListener("change", () => {
  populateFurtherDropdowns();
  resultDiv.textContent = "";
});

contentTypeSelect.addEventListener("change", () => {
  populateFurtherDropdowns();
  resultDiv.textContent = "";
});

postTimeSelect.addEventListener("change", () => {
  checkEnableGenerate();
  resultDiv.textContent = "";
});

generateBtn.addEventListener("click", () => {
  const cat = categorySelect.value;
  const subcat = subcategorySelect.value;
  const platform = platformSelect.value;
  const contentType = contentTypeSelect.value;
  const postTime = postTimeSelect.value;

  const basePlan = plans[cat][subcat];

  const sound = trendingSounds[Math.floor(Math.random() * trendingSounds.length)];
  const hashtags = trendingHashtags.join(" ");

  const finalPlan = basePlan
    .replace("{sound}", sound)
    .replace("{hashtags}", hashtags)
    + `\n\nPlatform: ${platform}\nContent Type: ${contentType}\nBest Posting Time: ${postTime}`;

  resultDiv.textContent = finalPlan;
});

populateCategories();
