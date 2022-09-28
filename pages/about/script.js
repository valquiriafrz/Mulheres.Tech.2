/**
 * JavaScript desta página.
 */

// Define o <title> desta página:
setTitle("Sobre...");

// Detecta clique nos cads
$('.card').click(getHref);

// Processa cliques nos cards
function getHref() {
    loadPage($(this).attr('data-href'));
}

reload();

// Monta menu auxiliar:
$('aside nav').html(aboutMenu);