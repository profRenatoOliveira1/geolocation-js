/**
 * Recupera as coordenadas geográficas e redireciona o usuário
 * para a página do Google Maps
 */
function openGoogleMaps() {
    // Verifica se o navegador suporta a API de Geolocalização
    if (navigator.geolocation) {  
        
        // Obtém a posição atual do usuário
        navigator.geolocation.getCurrentPosition(
            (position) => { // Callback executado em caso de sucesso
                
                // Captura a latitude do usuário
                const latitude = position.coords.latitude;
                
                // Captura a longitude do usuário
                const longitude = position.coords.longitude;
                
                // Cria a URL do Google Maps com as coordenadas obtidas
                const mapsUrl = `https://www.google.com/maps?q=${latitude},${longitude}`;
                
                // Abre o Google Maps em uma nova aba/janela do navegador
                window.open(mapsUrl, "_blank");
            },
            (error) => { // Callback executado em caso de erro
                
                // Exibe um alerta caso a geolocalização falhe (exemplo: permissão negada)
                alert("Erro ao obter localização. Verifique as permissões.");
            }
        );
    } else {  
        // Exibe um alerta caso o navegador não suporte a API de Geolocalização
        alert("Geolocalização não suportada pelo seu navegador.");
    }
}
