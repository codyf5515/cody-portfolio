const canvas = document.getElementById("skillsChart");
const ctx = canvas.getContext("2d");

const skillData = [
    { label: "Databases", value: 30, color: "#00ff99" },
    { label: "Web Dev", value: 20, color: "#00ccff" },
    { label: "Security", value: 20, color: "#ffcc00" },
    { label: "Programming", value: 15, color: "#ff6666" },
    { label: "Networking", value: 15, color: "#9966ff" }
];

const total = skillData.reduce((sum, item) => sum + item.value, 0);

let startAngle = 0;

const centerX = canvas.width / 2;
const centerY = canvas.height / 2;
const radius = 150;

// Glow for the pie chart
ctx.shadowColor = "#00ff99";
ctx.shadowBlur = 12;

for (let i = 0; i < skillData.length; i++) {
    const sliceAngle = (skillData[i].value / total) * 2 * Math.PI;
    const endAngle = startAngle + sliceAngle;

    // Draw pie slice
    ctx.beginPath();
    ctx.moveTo(centerX, centerY);
    ctx.arc(centerX, centerY, radius, startAngle, endAngle);
    ctx.closePath();

    ctx.fillStyle = skillData[i].color;
    ctx.fill();

    ctx.strokeStyle = "#0b0f0c";
    ctx.lineWidth = 2;
    ctx.stroke();

    // Calculate middle angle for text placement
    const midAngle = startAngle + sliceAngle / 2;

    // Move text slightly inward so it fits better
    const textX = centerX + Math.cos(midAngle) * (radius * 0.58);
    const textY = centerY + Math.sin(midAngle) * (radius * 0.58);

    // Save canvas state before rotating text
    ctx.save();

    // Move origin to text position
    ctx.translate(textX, textY);

    // Rotate text to follow the slice direction
    ctx.rotate(midAngle);

    // Keep text upright
    if (midAngle > Math.PI / 2 && midAngle < (3 * Math.PI) / 2) {
        ctx.rotate(Math.PI);
    }

    // Text styling
    ctx.shadowBlur = 0; // prevent text glow
    ctx.fillStyle = "#000";
    ctx.font = "bold 12px Arial";
    ctx.textAlign = "center";
    ctx.textBaseline = "middle";

    ctx.fillText(`${skillData[i].label} (${skillData[i].value}%)`, 0, 0);

    // Restore canvas state
    ctx.restore();

    // Turn glow back on for next slice
    ctx.shadowColor = "#00ff99";
    ctx.shadowBlur = 12;

    startAngle = endAngle;
}

// Turn off glow after drawing
ctx.shadowBlur = 0;