function calculateAge() {
    let birthInput = document.getElementById("birthDate").value.trim();

    if (!birthInput) {
        document.getElementById("result").innerText = "Please enter your birthdate.";
        return;
    }

    // Split dd/mm/yyyy
    let parts = birthInput.split("/");
    if (parts.length !== 3) {
        document.getElementById("result").innerText = "Invalid format. Use dd/mm/yyyy.";
        return;
    }

    let day = parseInt(parts[0], 10);
    let month = parseInt(parts[1], 10) - 1; // JavaScript months are 0-based
    let year = parseInt(parts[2], 10);

    let birthDate = new Date(year, month, day);
    let today = new Date();

    if (isNaN(birthDate.getTime()) || birthDate > today) {
        document.getElementById("result").innerText = "Invalid or future date!";
        return;
    }

    let age = today.getFullYear() - birthDate.getFullYear();
    let monthDiff = today.getMonth() - birthDate.getMonth();
    let dayDiff = today.getDate() - birthDate.getDate();

    if (dayDiff < 0) {
        monthDiff--;
        let prevMonth = new Date(today.getFullYear(), today.getMonth(), 0);
        dayDiff += prevMonth.getDate();
    }

    if (monthDiff < 0) {
        age--;
        monthDiff += 12;
    }

    document.getElementById("result").innerText =
        `Your age is ${age} years, ${monthDiff} months, and ${dayDiff} days.`;
}
