// Inch to cm converter with animated feedback
function convertInchesToCm() {
    let inches = parseFloat(document.getElementById("inchesInput").value);
    if (!isNaN(inches)) {
        let cm = (inches * 2.54).toFixed(2);
        let output = `${inches} inches = ${cm} cm 📏`;
        animateText("cmOutput", output);
    } else {
        animateText("cmOutput", "❌ Please enter a valid number.");
    }
}

// Show appropriate height inputs based on the selected unit
document.getElementById("heightUnit").addEventListener("change", function() {
    if (this.value === "feet") {
        document.getElementById("heightCm").style.display = "none";
        document.getElementById("heightFeet").style.display = "inline-block";
        document.getElementById("heightInches").style.display = "inline-block";
    } else {
        document.getElementById("heightCm").style.display = "inline-block";
        document.getElementById("heightFeet").style.display = "none";
        document.getElementById("heightInches").style.display = "none";
    }
});

// BMI calculation with animated feedback and emojis
function calculateBMI() {
    let weight = parseFloat(document.getElementById("weight").value);
    let weightUnit = document.getElementById("weightUnit").value;
    let heightCm = parseFloat(document.getElementById("heightCm").value);
    let heightFeet = parseFloat(document.getElementById("heightFeet").value);
    let heightInches = parseFloat(document.getElementById("heightInches").value);
    let heightUnit = document.getElementById("heightUnit").value;
    
    if (weightUnit === "lbs") {
        weight = weight * 0.453592;
    }

    let heightInMeters;
    if (heightUnit === "cm") {
        heightInMeters = heightCm / 100;
    } else if (heightUnit === "feet") {
        let totalInches = (heightFeet * 12) + heightInches;
        heightInMeters = totalInches * 0.0254;
    }

    if (!isNaN(weight) && !isNaN(heightInMeters)) {
        let bmi = (weight / (heightInMeters * heightInMeters)).toFixed(1);
        animateText("bmiScore", `Your BMI is ${bmi} 🏅`);
        displayBMICategory(bmi);
    } else {
        animateText("bmiScore", "⚠️ Please enter valid inputs.");
    }
}

// Display BMI category with animated tips and emojis
function displayBMICategory(bmi) {
    let category, tip;
    if (bmi < 18.5) {
        category = "Underweight";
        tip = "💪 Consider a balanced diet with more calorie intake.";
    } else if (bmi >= 18.5 && bmi <= 24.9) {
        category = "Normal weight";
        tip = "🎉 Great job! Maintain a balanced lifestyle.";
    } else if (bmi >= 25 && bmi <= 29.9) {
        category = "Overweight";
        tip = "🏃 Include regular exercise and a healthy diet.";
    } else {
        category = "Obesity";
        tip = "🩺 Consider consulting a healthcare provider.";
    }
    animateText("bmiTip", `<strong>${category}:</strong> ${tip}`);
}

// Text animation function
function animateText(id, text) {
    const element = document.getElementById(id);
    element.style.opacity = "0";
    setTimeout(() => {
        element.innerHTML = text;
        element.style.opacity = "1";
        element.style.transition = "opacity 0.5s ease";
    }, 200);
}
