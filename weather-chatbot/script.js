async function getWeather() {
    let city = document.getElementById("city").value;

    let response = await fetch("/get_weather", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({ city: city })
    });

    let data = await response.json();

    let chatBox = document.getElementById("chat-box");

    if (data.error) {
        chatBox.innerHTML += `<p>❌ ${data.error}</p>`;
    } else {
        chatBox.innerHTML += `<p>🌍 ${data.city}: ${data.temp}°C, ${data.desc}</p>`;
    }
}
