/**
 * JavaScript desta página.
 */

// Define o <title> desta página:
setTitle("Sobre...");

// Detecta clique nos cads
$('.card').click(getHref)

// Processa clique nos cads
|function getHref() {
    loadPage ($(this) .attr('data-href'))
}