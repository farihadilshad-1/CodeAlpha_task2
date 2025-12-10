const galleryItems = document.querySelectorAll('.gallery img');
const lightbox = document.getElementById('lightbox');
const lightboxImg = document.getElementById('lightboxImg');
let currentIndex = 0;

// Open clicked image
galleryItems.forEach((img, index) => {
    img.addEventListener('click', () => {
        lightbox.style.display = 'flex';
        lightboxImg.src = img.src;
        currentIndex = index;
    });
});

// Close lightbox
document.getElementById('closeBtn').onclick = () => {
    lightbox.style.display = 'none';
};

// Function to get currently visible images
const getVisibleImages = () => Array.from(galleryItems).filter(img => img.style.display !== 'none');

// NEXT button
document.getElementById('nextBtn').onclick = () => {
    const visibleImages = getVisibleImages();
    const currentImg = galleryItems[currentIndex];
    let currentVisibleIndex = visibleImages.indexOf(currentImg);

    currentVisibleIndex = (currentVisibleIndex + 1) % visibleImages.length;
    const nextImg = visibleImages[currentVisibleIndex];
    currentIndex = Array.from(galleryItems).indexOf(nextImg);
    lightboxImg.src = nextImg.src;
};

// PREV button
document.getElementById('prevBtn').onclick = () => {
    const visibleImages = getVisibleImages();
    const currentImg = galleryItems[currentIndex];
    let currentVisibleIndex = visibleImages.indexOf(currentImg);

    currentVisibleIndex = (currentVisibleIndex - 1 + visibleImages.length) % visibleImages.length;
    const prevImg = visibleImages[currentVisibleIndex];
    currentIndex = Array.from(galleryItems).indexOf(prevImg);
    lightboxImg.src = prevImg.src;
};

// FILTER BUTTONS
const filterBtns = document.querySelectorAll('.filters button');

filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        const filter = btn.getAttribute('data-filter');

        // Set active button
        filterBtns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');

        // Show/hide images
        galleryItems.forEach(img => {
            if (filter === "all" || img.classList.contains(filter)) {
                img.style.display = "block";
            } else {
                img.style.display = "none";
            }
        });
    });
});
