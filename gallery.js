const galleryImages = [
    {
        src: "images/networkbuddy1.jpg",
        desc: "NetworkBuddy hardware setup"
    },
    {
        src: "images/networkbuddy2.jpg",
        desc: "NetworkBuddy touchscreen and system setup"
    },
    {
        src: "images/networkbuddygreen.jfif",
        desc: "NetworkBuddy dashboard with green status theme"
    },
    {
        src: "images/networkbuddyred.jfif",
        desc: "NetworkBuddy dashboard with red alert status"
    },
    {
        src: "images/databaseproject.jpg",
        desc: "Database-driven web project for a pharmacy"
    },
    {
        src: "images/kaliandmetaonvb.jpg",
        desc: "Kali Linux and Metasploitable virtual lab environment for ethical hacking"
    }
];

let currentIndex = 0;

const mainImage = document.getElementById("mainImage");
const description = document.getElementById("description");
const modal = document.getElementById("imageModal");
const modalImg = document.getElementById("modalImg");
const modalCaption = document.getElementById("modalCaption");

function updateGallery() {
    mainImage.src = galleryImages[currentIndex].src;
    description.textContent = galleryImages[currentIndex].desc;
}

function previousImage() {
    currentIndex--;
    if (currentIndex < 0) {
        currentIndex = galleryImages.length - 1;
    }
    updateGallery();
}

function nextImage() {
    currentIndex++;
    if (currentIndex >= galleryImages.length) {
        currentIndex = 0;
    }
    updateGallery();
}

function changeImageByIndex(index) {
    currentIndex = index;
    updateGallery();
}

function openModal() {
    modal.style.display = "block";
    modalImg.src = mainImage.src;
    modalCaption.textContent = description.textContent;
}

function closeModal() {
    modal.style.display = "none";
}

modal.addEventListener("click", function (event) {
    if (event.target === modal) {
        closeModal();
    }
});