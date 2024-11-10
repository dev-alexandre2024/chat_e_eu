document.getElementById('alertBtn').addEventListener('click', function() {
    alert("Você clicou no botão! Isso foi feito com JavaScript.");
});
const { exec } = require('child_process');

exec('python process_data.py', (err, stdout, stderr) => {
    if (err) {
        console.error('Erro ao executar o Python:', err);
        return;
    }
    console.log('Resultado do Python:', stdout);
});
