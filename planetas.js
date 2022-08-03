function carregarImagens() {

    var xmlHttpRequest = new XMLHttpRequest();
    var url = "https://api.nasa.gov/planetary/apod?api_key=zr0DWJsRMqWgUSS26JUOP0iQ1EI8OVmZO34OuwrK"

    xmlHttpRequest.open("GET", url, true);

    xmlHttpRequest.onreadystatechange = function () {
        if (xmlHttpRequest.readyState == 3) {
             console.log('Carregando o conteúdo');
        }
        if (xmlHttpRequest.readyState == 4) {

            var jsonResponse = JSON.parse(xmlHttpRequest.responseText);

            console.log('Requisição Finalizada');
            console.log('Resultado da Requisição: ' + jsonResponse);
            console.log('Resultado da Requisição: ' + jsonResponse.url);
            console.log('Resultado da Requisição: ' + jsonResponse.title);

            var imgPlan = document.getElementById("img_plan");
            imgPlan.src = jsonResponse.url;
        }
    };
    xmlHttpRequest.send(null);

    }

