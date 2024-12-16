// Function to toggle dropdown visibility on click
function toggleDropdown(id) {
    const dropdown = document.getElementById(id);
    // Toggle the visibility of the dropdown
    dropdown.style.display = dropdown.style.display === 'block' ? 'none' : 'block';
    
    // Apply animation for smooth visibility change
    dropdown.style.opacity = dropdown.style.opacity === '1' ? '0' : '1';
    dropdown.style.visibility = dropdown.style.visibility === 'visible' ? 'hidden' : 'visible';
    dropdown.style.transform = dropdown.style.transform === 'translateY(0)' ? 'translateY(-20px)' : 'translateY(0)';
}

// FOV Slider Value Display
document.getElementById("fov-slider").addEventListener("input", function() {
    document.getElementById("fov-value").textContent = this.value;
});
document.getElementById("silent-fov-slider").addEventListener("input", function() {
    document.getElementById("silent-fov-value").textContent = this.value;
});

// Size Slider Value Display
document.getElementById("size-slider").addEventListener("input", function() {
    document.getElementById("size-value").textContent = this.value;
});
document.getElementById("silent-size-slider").addEventListener("input", function() {
    document.getElementById("silent-size-value").textContent = this.value;
});
