const categorySelect = document.getElementById("category");
const subcategorySelect = document.getElementById("subcategory");
const platformSelect = document.getElementById("platform");
const contentTypeSelect = document.getElementById("contentType");
const postTimeSelect = document.getElementById("postTime");
const generateBtn = document.getElementById("generateBtn");
const resultDiv = document.getElementById("result");

const platformLabel = document.querySelector("label[for='platform']");
const contentTypeLabel = document.querySelector("label[for='contentType']");
const postTimeLabel = document.querySelector("label[for='postTime']");

const categories = ["Fitness", "Gaming", "Blogging"];

const subcategories = {
  Fitness: ["Yoga", "Weightlifting", "Running", "Home Workouts", "Nutrition"],
  Gaming: ["PC", "Console", "Mobile", "Esports", "Streaming"],
  Blogging: ["Tech", "Lifestyle", "Travel", "Food", "Personal Development"]
};

const platforms = ["YouTube", "Twitch", "TikTok", "Instagram", "Twitter"];

const contentTypes = ["Video", "Image", "Story", "Live Stream", "Article"];

const postTimes = ["Morning", "Afternoon", "Evening", "Night"];

const plans = {}; // Assume this is filled with 720 unique plans as per previous example

function populateDropdown(dropdown, options, placeholder) {
  dropdown.innerHTML = "";
  const defaultOption = document.createElement("option");
  defaultOption.value = "";
  defaultOption.textContent = placeholder;
  dropdown.appendChild(defaultOption);
  options.forEach((option) => {
    const opt = document.createElement("option");
    opt.value = option;
    opt.textContent = option;
    dropdown.appendChild(opt);
  });
}

function populateSubcategories() {
  const selectedCategory = categorySelect.value;
  if (selectedCategory && subcategories[selectedCategory]) {
    populateDropdown(subcategorySelect, subcategories[selectedCategory], "-- Choose a Subcategory --");
    subcategorySelect.style.display = "block";
    document.querySelector("label[for='subcategory']").style.display = "block";
  } else {
    subcategorySelect.style.display = "none";
    document.querySelector("label[for='subcategory']").style.display = "none";
  }
  platformSelect.style.display = "none";
  platformLabel.style.display = "none";
  contentTypeSelect.style.display = "none";
  contentTypeLabel.style.display = "none";
  postTimeSelect.style.display = "none";
  postTimeLabel.style.display = "none";
  generateBtn.disabled = true;
}

categorySelect.addEventListener("change", () => {
  populateSubcategories();
  resultDiv.textContent = "";
});

subcategorySelect.addEventListener("change", () => {
  if (subcategorySelect.value) {
    populateDropdown(platformSelect, platforms, "-- Choose a Platform --");
    platformSelect.style.display = "block";
    platformLabel.style.display = "block";

    contentTypeSelect.style.display = "none";
    contentTypeLabel.style.display = "none";
    postTimeSelect.style.display = "none";
    postTimeLabel.style.display = "none";

    generateBtn.disabled = true;
  } else {
    platformSelect.style.display = "none";
    platformLabel.style.display = "none";
    contentTypeSelect.style.display = "none";
    contentTypeLabel.style.display = "none";
    postTimeSelect.style.display = "none";
    postTimeLabel.style.display = "none";
    generateBtn.disabled = true;
  }
  resultDiv.textContent = "";
});

platformSelect.addEventListener("change", () => {
  if (platformSelect.value) {
    populateDropdown(contentTypeSelect, contentTypes, "-- Choose Content Type --");
    contentTypeSelect.style.display = "block";
    contentTypeLabel.style.display = "block";

    postTimeSelect.style.display = "none";
    postTimeLabel.style.display = "none";
    generateBtn.disabled = true;
  } else {
    contentTypeSelect.style.display = "none";
    contentTypeLabel.style.display = "none";
    postTimeSelect.style.display = "none";
    postTimeLabel.style.display = "none";
    generateBtn.disabled = true;
  }
  resultDiv.textContent = "";
});

contentTypeSelect.addEventListener("change", () => {
  if (contentTypeSelect.value) {
    populateDropdown(postTimeSelect, postTimes, "-- Choose Post Time --");
    postTimeSelect.style.display = "block";
    postTimeLabel.style.display = "block";
    generateBtn.disabled = true;
  } else {
    postTimeSelect.style.display = "none";
    postTimeLabel.style.display = "none";
    generateBtn.disabled = true;
  }
  resultDiv.textContent = "";
});

postTimeSelect.addEventListener("change", () => {
  generateBtn.disabled = !(
    categorySelect.value &&
    subcategorySelect.value &&
    platformSelect.value &&
    contentTypeSelect.value &&
    postTimeSelect.value
  );
  resultDiv.textContent = "";
});

generateBtn.addEventListener("click", () => {
  const key = `${categorySelect.value}_${subcategorySelect.value}_${platformSelect.value}_${contentTypeSelect.value}_${postTimeSelect.value}`;
  if (plans[key]) {
    resultDiv.textContent = plans[key];
  } else {
    resultDiv.textContent = "No plan available for this combination.";
  }
});

window.onload = () => {
  populateDropdown(categorySelect, categories, "-- Choose a Category --");

  subcategorySelect.style.display = "none";
  platformSelect.style.display = "none";
  contentTypeSelect.style.display = "none";
  postTimeSelect.style.display = "none";

  document.querySelector("label[for='subcategory']").style.display = "none";
  platformLabel.style.display = "none";
  contentTypeLabel.style.display = "none";
  postTimeLabel.style.display = "none";

  generateBtn.disabled = true;
};
