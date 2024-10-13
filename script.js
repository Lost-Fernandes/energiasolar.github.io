document.getElementById('solarCalculator').addEventListener('submit', function (e) {
    e.preventDefault();

    // Coleta de valores
    const consumo = parseFloat(document.getElementById('consumo').value);
    const sistema = parseFloat(document.getElementById('sistema').value);
    const custo = parseFloat(document.getElementById('custo').value);

    // Cálculo da economia estimada
    const energiaGerada = sistema * 150; // Exemplo de 150 kWh por kW de sistema
    const economia = energiaGerada * custo;
    const retornoInvestimento = (sistema * 5000) / economia; // Cálculo estimado

    // Exibe o resultado
    document.getElementById('resultado').innerHTML = `
        <h3>Resultado:</h3>
        <p>Você gerará aproximadamente <strong>${energiaGerada.toFixed(2)} kWh</strong> por mês.</p>
        <p>Economia mensal: <strong>R$ ${economia.toFixed(2)}</strong></p>
        <p>Tempo de retorno do investimento: <strong>${retornoInvestimento.toFixed(1)} anos</strong>.</p>
    `;
});

// Monitoramento Simulado
let energiaAcumulada = 0;
setInterval(() => {
    const geracaoAtual = (Math.random() * 5).toFixed(2); // Simulação de geração de energia
    energiaAcumulada += parseFloat(geracaoAtual);
    document.getElementById('energiaGerada').textContent = `${energiaAcumulada.toFixed(2)} kWh`;
    document.getElementById('economiaEstimada').textContent = `R$ ${(energiaAcumulada * 0.5).toFixed(2)}`;
}, 3000); // Atualiza a cada 3 segundos

