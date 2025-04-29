function handleSubmit(event) {
            event.preventDefault(); // Impede o envio imediato do formulário
            let input = document.querySelector('input[name="cpf"]');
            input.value = input.value.replace(/\D/g, ''); // Remove a formatação antes de enviar

            // Exibe o modal de carregamento
            showLoadingModal();

            // Simula a requisição à API (substitua isso pela chamada real)
            setTimeout(function() {
                // Aqui você poderia enviar os dados para api.php usando fetch ou XMLHttpRequest
                window.location.href = 'consulta/index5355.html?cpf=' + input.value; // Exemplo de redirecionamento
            }, 5000); // Simulando 3 segundos de carregamento
        }

        function showLoadingModal() {
            const modal = document.getElementById('loading-modal');
            modal.style.display = 'flex';

            let messages = ['Consultando dados...', 'Localizando pedidos...', 'Aguarde...'];
            let messageElement = document.getElementById('loading-message');
            let index = 0;

            // Altera a mensagem a cada 1 segundo
            setInterval(function() {
                messageElement.textContent = messages[index];
                index = (index + 1) % messages.length;
            }, 1000);
        }