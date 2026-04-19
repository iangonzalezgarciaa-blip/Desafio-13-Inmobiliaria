function renderPropiedades(array, containerId, limite = array.length) {

    const container = document.getElementById(containerId);
    container.innerHTML = "";

    for (let i = 0; i < Math.min(limite, array.length); i++) {

        const p = array[i];

        const smoke = p.smoke
            ? `<p class="ok">🚬 Permitido fumar</p>`
            : `<p class="no">🚭 No fumar</p>`;

        const pets = p.pets
            ? `<p class="ok">🐶 Mascotas permitidas</p>`
            : `<p class="no">❌ Mascotas no permitidas</p>`;

        container.innerHTML += `
        <div class="card">
            <img src="${p.src}">
            <div class="card-content">
                <h3>${p.nombre}</h3>
                <p>${p.descripcion}</p>
                <p>📍 ${p.ubicacion}</p>
                <p>🛏 ${p.habitaciones} Habitaciones</p>
                <p>💰 $${p.costo}</p>
                ${smoke}
                ${pets}
            </div>
        </div>
        `;
    }
}