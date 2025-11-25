// Mostrar la hora actual
function updateTime() {
    const now = new Date();
    document.getElementById("time").textContent =
        "Hora actual: " + now.toLocaleTimeString();
}
setInterval(updateTime, 1000);
updateTime();

// Llamada simple a una API pública
fetch("https://api.popcat.xyz/refranes")
    .then(res => res.json())
    .then(data => {
        document.getElementById("api-result").textContent =
            "Refrán: " + data.refran;
    });
// Variable de entorno
console.log("Variable desde Vercel:", process.env.VITE_SALUDO);