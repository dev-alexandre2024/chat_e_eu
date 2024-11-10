<?php
    if ($_SERVER["REQUEST_METHOD"] == "POST") {
        $nome = $_POST['nome'];
        echo "<h3>Obrigado, $nome, por nos contatar!</h3>";
    }
?>

<form method="POST">
    <label for="nome">Seu Nome: </label>
    <input type="text" id="nome" name="nome" required>
    <button type="submit">Enviar</button>
</form>
