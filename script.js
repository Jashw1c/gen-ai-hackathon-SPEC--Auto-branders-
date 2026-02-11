function goToResult() {
  const brandName = document.getElementById("brandName").value;
  const brandType = document.getElementById("brandType").value;
  const description = document.getElementById("description").value;

  // Validate that all fields are filled
  if (!brandName || !brandType || !description) {
    alert("Please fill all fields.");
    return;
  }

  // Save data to localStorage
  localStorage.setItem("brandName", brandName);
  localStorage.setItem("brandType", brandType);
  localStorage.setItem("description", description);

  // Redirect to result page
  window.location.href = "result.html";
}
