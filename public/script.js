// Mostrar la hora actual
function updateTime() {
    const now = new Date();
    document.getElementById("time").textContent =
        "Hora actual: " + now.toLocaleTimeString();
}
setInterval(updateTime, 1000);
updateTime();

// Llamada simple a una API pública
fetch("https://api.chucknorris.io/jokes/random")
    .then(res => res.json())
    .then(data => {
        document.getElementById("api-result").textContent =
            "Dato de API: " + data.value;
    });

// Uso de variable de entorno (solo demostración)
const saludo = import.meta.env?.VITE_SALUDO || "Variable no definida";
console.log("Variable de entorno:", saludo);
