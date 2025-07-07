function updateCategories() {
  document.getElementById('category').value = '';
  document.getElementById('subcategory').innerHTML = '<option value="">-- Select Subcategory --</option>';
}

function updateSubcategories() {
  const platform = document.getElementById('platform').value;
  const category = document.getElementById('category').value;
  const subcategorySelect = document.getElementById('subcategory');

  subcategorySelect.innerHTML = '<option value="">-- Select Subcategory --</option>';

  if (platform && category && data[platform] && data[platform][category]) {
    const subs = Object.keys(data[platform][category]);
    subs.forEach(sub => {
      const option = document.createElement('option');
      option.value = sub;
      option.textContent = sub;
      subcategorySelect.appendChild(option);
    });
  }
}

function generatePlan() {
  const platform = document.getElementById('platform').value;
  const category = document.getElementById('category').value;
  const subcategory = document.getElementById('subcategory').value;
  const output = document.getElementById('output');

  if (platform && category && subcategory) {
    const result = data?.[platform]?.[category]?.[subcategory];
    if (result) {
      output.textContent = `📈 Platform: ${platform}\n📂 Category: ${category} > ${subcategory}\n\n📋 Plan:\n${result}`;
    } else {
      output.textContent = "No content plan found for that selection.";
    }
  } else {
    output.textContent = "Please choose all dropdowns before generating.";
  }
}
