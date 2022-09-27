/**
 * JavaScript do aplicativo
 * Depende de "jQuery" (https://jquery.com/)
 *
 * OBS1: Este é o aplicativo principal, para que o tema (template) do site
 * opere. Posteriormente, quando necessário, cada página (conteúdo) terá seu
 * próprio JavaScript, assim, somente o JavaScript necessário será carregado.
 * 
 * OBS1: Todas as funções que iniciam com um cifrão ($) fazem parte da 
 * biblioteca jQuery, ou seja, não são do JavaScript "puro" (vanilla).
 *
 * Para saber mais:
 *   • https://www.w3schools.com/js/
 *   • https://www.w3schools.com/jsref/
 *   • https://www.w3schools.com/jquery/
 */

/**
 * runApp() → Aplicativo principal
 * Este aplicativo é executado pela última linha deste código.
 */
function runApp() {

  // Carrega a página inicial do site quando este iniciar:
  loadPage('home');

  /**
   * jQuery → Quando houver click em um elemento <a>, execute o aplicativo 
   * "routerLink":
   **/
  $('a').click(routerLink);

}

/**
 * routerLink() → Aplicativo que processa cliques nos elementos <a>:
 */
function routerLink() {

  /**
   * jQuery → Recebe o atributo "href" do link clicado e armazena em 'href':
   * A função "$(this)" faz referência ao elemento que foi clicado e disparou 
   * este processo.
   **/
  var href = $(this).attr('href');

  /**
   * Se faz referência a link externo que começa com "http://" OU "https://",
   * ou faz referência a uma âncora que começa com "#"...
   * 
   * OBS: O código "||" (pipe pipe) significa o "OU" (OR) lógico em JavaScript.
   * 
   * Referências: 
   *    https://youtu.be/mp3g9IQ651g
   *    https://www.w3schools.com/jsref/jsref_substring.asp
   *    https://www.w3schools.com/js/js_if_else.asp
   **/
  if (
    // Se clicou em um link que começa com "http://...", OU
    href.substr(0, 7) == 'http://' ||

    // Se clicou em um link que começa com "https://...", OU
    href.substr(0, 8) == 'https://' ||

    // Se clicou em uma âncora que começa com "#"...
    href.substr(0, 1) == '#'
  ) {

    /**
     * Encerra o programa retornando "true" (verdade) para que o HTML abra o 
     * link normalmente:
     **/
    return true;
  }

  /**
   * Se clicou em um link interno (rota para uma página), executa o programa 
   * "loadPage()" que carrega a página correta:
   **/
  loadPage(href);

  /**
   * Encerra o programa retornando "false" (falso) para que a ação do HTML ao
   * clicar no link seja bloqueada:
   **/
  return false;
}

/**
 * loadPage() → Aplicativo que processa os arquivos HTML, CSS e JavaScript da 
 * "rota" solicitada e abre estes no site:
 */
function loadPage(href) {

  // Cria objeto contendo todas as partes da página (HTML, CSS e JS):
  var page = {
    "html": `/pages/${href}/index.html`,
    "css": `/pages/${href}/style.css`,
    "js": `/pages/${href}/script.js`
  }

  // Carrega o documento HTML da página na memória:
  $.get(page.html, function (content) {

    // Carrega o CSS da página, no <head> da página "index.html":
    $('#pageCSS').attr('href', page.css);

    // Exibe HTML na página no elemento <main>:
    $('#content').html(content);

    //cCarrega e executa o JavaScript da página:
    $.getScript(page.js);
  });

}

// Função que troca o título da página:
function setTitle(title = '') {

  // Se não definiu um title...
  if (title == '') {

    // Título padrão da página será nomeDoSite + sloganDoSite:
    $('title').html("Mulheres.Tech .:. Programadoras do Futuro");
  } else {

    // Título da página será nomeDoSite + nomeDaPágina:
    $('title').html("Mulheres.Tech .:. " + title);

  }

}

// jQuery → Executa aplicativo "runApp" quando o documento estiver pronto:
$(document).ready(runApp);