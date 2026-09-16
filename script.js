function submitTest() { 
 
    let score = 0; 
 
    // Correct answers 
    const answers = { 
        q1: "300", 
        q2: "Sun", 
        q3: "balcony", 
        q4: "forest", 
        q5: "319", 
        q6: "8000", 
        q7: "relative", 
        q8: "miss", 
        q9: "item", 
        q10: "Ludlow", 
        q11: "C", 
        q12: "A", 
        q13: "A" 
    }; 
 
 
    // Check text answers 
    for (let i = 1; i <= 10; i++) { 
 
        const input = document.getElementById("q" + i); 
 
        if (input) { 
 
            let userAnswer = 
                input.value.trim().toLowerCase(); 
 
            let correctAnswer = 
                answers["q" + i].toLowerCase(); 
 
            if (userAnswer === correctAnswer) { 
                score++; 
            } 
        } 
    } 
 
 
    // Check multiple choice 
    for (let i = 11; i <= 13; i++) { 
 
        const selected = 
            document.querySelector( 
                `input[name="q${i}"]:checked` 
            ); 
 
        if (selected && 
            selected.value === answers["q" + i]) { 
 
            score++; 
        } 
    } 
 
 
    // Display result 
    const result = 
        document.getElementById("result"); 
 
    result.style.display = "block"; 
 
    result.innerHTML = ` 
        <strong>Test completed!</strong> 
        <br><br> 
        Your score: 
        <strong>${score}/13</strong> 
    `; 
 
    // Scroll to result 
    result.scrollIntoView({ 
        behavior: "smooth" 
    }); 
}