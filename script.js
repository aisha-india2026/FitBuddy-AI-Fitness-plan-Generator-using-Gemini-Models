function generatePlan() {
    const age = document.getElementById("age").value;
    const weight = document.getElementById("weight").value;
    const height = document.getElementById("height").value;
    const goal = document.getElementById("goal").value;
    const activity = document.getElementById("activity").value;
    const days = document.getElementById("days").value;

    const result = document.getElementById("result");

    if (!age || !weight || !height || !goal || !activity || !days) {
        result.innerHTML = "⚠️ Please fill in all the details.";
        return;
    }

    result.innerHTML = `
        <h3>💪 Your Fitness Plan</h3>
        <br>
        <p><strong>Age:</strong> ${age} years</p>
        <p><strong>Weight:</strong> ${weight} kg</p>
        <p><strong>Height:</strong> ${height} cm</p>
        <p><strong>Goal:</strong> ${goal}</p>
        <p><strong>Activity Level:</strong> ${activity}</p>
        <p><strong>Workout Days:</strong> ${days} days/week</p>
        <br>
        <h3>🏋️ Workout Plan</h3>
        <p>• Warm-up: 5-10 minutes</p>
        <p>• Strength training: 20-30 minutes</p>
        <p>• Cardio: 15-20 minutes</p>
        <p>• Cool-down: 5 minutes</p>
        <br>
        <h3>🥗 Diet Plan</h3>
        <p>• Eat a balanced diet with vegetables and fruits.</p>
        <p>• Include sufficient protein in your meals.</p>
        <p>• Drink enough water throughout the day.</p>
        <p>• Avoid excessive processed and sugary foods.</p>
        <br>
        <p>🤖 <strong>Gemini AI integration will be connected in the next step.</strong></p>
    `;
}
