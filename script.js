const menuBtn=document.querySelector('.menu-btn');const menu=document.querySelector('.menu');
menuBtn?.addEventListener('click',()=>menu.classList.toggle('open'));
document.querySelectorAll('.menu a').forEach(a=>a.addEventListener('click',()=>menu.classList.remove('open')));

// TROQUE pelo número real do WhatsApp, apenas números com código do país.
const whatsappNumber='244900000000';
const wa=document.getElementById('wa');
wa.href=`https://wa.me/${whatsappNumber}`;

document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("bookingForm");
    const whatsappBtn = document.getElementById("whatsappBtn");
    
    const nameInput = document.getElementById("name");
    const childInput = document.getElementById("child");
    const ageInput = document.getElementById("age");
    const messageInput = document.getElementById("message");

    // Função para verificar se todos os campos estão preenchidos
    function checkFormValidity() {
        const isFilled = nameInput.value.trim() !== "" &&
                         childInput.value.trim() !== "" &&
                         ageInput.value.trim() !== "" &&
                         messageInput.value.trim() !== "";

        if (isFilled) {
            whatsappBtn.removeAttribute("disabled");
            whatsappBtn.style.opacity = "1";
            whatsappBtn.style.cursor = "pointer";
        } else {
            whatsappBtn.setAttribute("disabled", "true");
            whatsappBtn.style.opacity = "0.5";
            whatsappBtn.style.cursor = "not-allowed";
        }
    }

    // Ouve qualquer alteração nos campos do formulário
    form.addEventListener("input", checkFormValidity);

    // Ação ao clicar no botão do WhatsApp
    whatsappBtn.addEventListener("click", function (e) {
        if (whatsappBtn.hasAttribute("disabled")) {
            e.preventDefault();
            alert("Por favor, preencha todos os campos antes de continuar.");
            return;
        }

        const nome = encodeURIComponent(nameInput.value);
        const crianca = encodeURIComponent(childInput.value);
        const idade = encodeURIComponent(ageInput.value);
        const mensagem = encodeURIComponent(messageInput.value);

        // Monta a mensagem personalizada com os dados do formulário
        const textoWhatsApp = `Olá! Gostaria de agendar uma visita.%0A%0A*Encarregado:* ${nome}%0A*Criança:* ${crianca}%0A*Idade:* ${idade} anos%0A*Mensagem:* ${mensagem}`;

        const numeroTelefonico = "244956258887"; // Seu número
        const url = `https://wa.me/${numeroTelefonico}?text=${textoWhatsApp}`;

        // Abre o WhatsApp em uma nova aba
        window.open(url, "_blank");
    });
});


