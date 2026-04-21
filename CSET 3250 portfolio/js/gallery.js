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
        src: "images/databaseproject.jpg",
        desc: "Database-driven web project for a pharmacy"
    },
    {
        src: "images/kaliandmetaonvb.jpg",
        desc: "Kali Linux and Metasploitable virtual lab environment for ethical hacking"
    },
    {
        src: "images/networkbuddygreen.jfif",
        desc: "NetworkBuddy dashboard with green status theme"
    },
    {
        src: "images/networkbuddyred.jfif",
        desc: "NetworkBuddy dashboard with red alert status"
    }
];

let currentIndex = 0;

function updateGallery() {
    const mainImage = document.getElementById("mainImage");
    const description = document.getElementById("description");

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