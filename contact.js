document.addEventListener('DOMContentLoaded', function () {
  // Espera o HTML completo carregar antes de acessar o botão
  let contactButton = document.querySelector('button[type="button"]');

  // Só adiciona o evento se o botão existir na página
  if (contactButton) {
    contactButton.addEventListener('click', function () {
      // Endereço de email para envio
      let recipient = 'marcelosfilho.fundador@yellowbagedu.com';
      // Assunto do email
      let subject = 'Contato via currículo';
      // Texto do corpo do email com quebras de linha em URL encoding
      let body = 'Olá Marcelo,%0D%0A%0D%0AGostaria de entrar em contato com você para falar sobre uma oportunidade.%0D%0A%0D%0AAtenciosamente,%0D%0A';
      // Cria o link mailto completo, codificando título e corpo
      let mailto = 'mailto:' + recipient + '?subject=' + encodeURIComponent(subject) + '&body=' + encodeURIComponent(body);

      // Abre a janela/aba do navegador para enviar o email
      window.open(mailto, '_blank');
    });
  }
});