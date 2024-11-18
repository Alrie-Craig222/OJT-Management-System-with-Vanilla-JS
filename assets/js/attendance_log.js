
let checkInTime, checkOutTime;

function getCurrentDateTime() {
    const now = new Date();
    const date = now.toLocaleDateString();
    const time = now.toLocaleTimeString();
    return { date, time };
}

function checkIn() {
    const { date, time } = getCurrentDateTime();
    checkInTime = `${date} ${time}`;
    document.getElementById("checkInBtn").disabled = true;
    document.getElementById("checkOutBtn").disabled = false;

    addLogEntry("Check-In", checkInTime);
}

function checkOut() {
    const { date, time } = getCurrentDateTime();
    checkOutTime = `${date} ${time}`;
    document.getElementById("checkInBtn").disabled = false;
    document.getElementById("checkOutBtn").disabled = true;

    addLogEntry("Check-Out", checkOutTime);
}

function addLogEntry(type, dateTime) {
    const log = document.getElementById("attendanceLog");
    const logItem = document.createElement("div");
    logItem.className = "log-item";
    logItem.innerHTML = `<span><strong>${type}:</strong> ${dateTime}</span>`;
    log.appendChild(logItem);
}
