const platformSelect = document.getElementById("platform");
const categorySelect = document.getElementById("category");
const subcategorySelect = document.getElementById("subcategory");
const resultDiv = document.getElementById("result");
const generateBtn = document.getElementById("generateBtn");

const populatePlatforms = () => {
  Object.keys(plans).forEach(platform => {
    const opt = document.createElement("option");
    opt.value = platform;
    opt.textContent = platform.charAt(0).toUpperCase() + platform.slice(1);
    platform
