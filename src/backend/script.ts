document.addEventListener('DOMContentLoaded', () => {
    const dataInput = document.getElementById('data') as HTMLInputElement;
    const horarioSelect = document.getElementById('horario') as HTMLSelectElement;

    dataInput.addEventListener('change', () => {
        const selectedDate = dataInput.value;
        atualizarHorariosDisponiveis(selectedDate);
    });

    function atualizarHorariosDisponiveis(data: string) {
        // Horários fictícios disponíveis para a data selecionada
        const horarios = [
            '08:00 - 09:00',
            '09:00 - 10:00',
            '10:00 - 11:00',
            '11:00 - 12:00',
            '14:00 - 15:00',
            '15:00 - 16:00',
            '16:00 - 17:00'
        ];

        // Limpa as opções atuais
        horarioSelect.innerHTML = '';

        // Adiciona os horários disponíveis
        horarios.forEach(horario => {
            const option = document.createElement('option');
            option.value = horario;
            option.textContent = horario;
            horarioSelect.appendChild(option);
        });
    }
});
