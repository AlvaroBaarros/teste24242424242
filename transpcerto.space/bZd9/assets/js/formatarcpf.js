function formatCPF(cpf) {
            cpf = cpf.replace(/\D/g, ''); // Remove tudo que não é número
            cpf = cpf.replace(/(\d{3})(\d)/, '$1.$2'); // Coloca ponto entre o primeiro e o segundo bloco de 3 números
            cpf = cpf.replace(/(\d{3})(\d)/, '$1.$2'); // Coloca ponto entre o segundo e o terceiro bloco de 3 números
            cpf = cpf.replace(/(\d{3})(\d{1,2})$/, '$1-$2'); // Coloca o traço no final
            return cpf;
        }

        function handleCPFInput(event) {
            let input = event.target;
            input.value = formatCPF(input.value);
        }

        function handleSubmit(event) {
            let input = document.querySelector('input[name="cpf"]');
            input.value = input.value.replace(/\D/g, ''); // Remove a formatação antes de enviar
        }