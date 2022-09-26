/**
 * JavaScript do aplicativo
 * Depende de "jQuery" (https://jquery.com/)
 *
 * OBS: Este é o aplicativo principal, para que o tema (template) do site
 * opere. Posteriormente, quando necessário, cada página (conteúdo) terá seu
 * próprio JavaScript, assim, somente o JavaScript necessário será carregado.
 *
 * Para saber mais:
 *   • https://www.w3schools.com/js/
 *   • https://www.w3schools.com/jsref/
 *   • https://www.w3schools.com/jquery/
 */

// Aplicativo principal
function runApp() {

    // Carrega a página inicial do site:
    loadPage('home');
  
    // Detecta cliques nos links (tags <a>)
    $('a').click(routerLink);
  
  }
  
  // Aplicativo que executa clicques nos links:
  function routerLink() {
  
    // Lê o atributo "href" do link clicado e armazena em 'href':
    var href = $(this).attr('href');
  
    // Detecta clique em links "http://" OU "https://" OU "#":
    if (
      // Se clicou em um link "http://..."...
      href.substr(0, 7) == 'http://' ||
  
      // Se clicou em um link "https://..."...
      href.substr(0, 8) == 'https://' ||
  
      // Se clicou em uma âncora...
      href.substr(0, 1) == '#'
    ) {
  
      // Retorna para o HTML abrir o link:
      return true;
    }
  
    // Se clicou em um link interno (rota), executa o programa que carrega a página correta:
    loadPage(href);
  
    // Bloqueia ação do HTML ao clicar no link
    return false;
  }
  
  // Carrega a página correta do link:
  function loadPage(href) {
  
    console.log(href);
  
  }
  
  // Executa aplicativo "runApp" quando o documento estiver pronto
  $(document).ready(runApp);