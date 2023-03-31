const url = 'https://servicodados.ibge.gov.br/api/v1/localidades/estados'

        async function lista() {
            const response = await fetch(url);
            const listaEstados = await response.json();
            return listaEstados;
        }

        lista().then(listaEstados => {
            const estados = document.getElementById('estados');

            const valores = document.getElementById('valores');
            valores.innerHTML = "";
            const listagem = document.getElementById('listar');
            const grupo = document.getElementById('grupoReg');
            grupo.style.display = "none";

            listagem.onclick = () => {
                if (valores.innerHTML === "") {
                    estados.style.display = 'block';
                    for (let i = 0; i < 27; i++) {
                        valores.innerHTML += `<tr>
                                        <td>
                                        ${listaEstados[i].nome} - ${listaEstados[i].sigla}
                                        </td> 
                                    </tr>`;
                    }
                } else {
                    valores.innerHTML = "";
                    estados.style.display = 'none';
                }
            }

            const agrupar = document.getElementById('agrupar');

            agrupar.onclick = () => {

                if (grupo.style.display === "none") {
                    grupo.style.display = "block"

                    var regiao = document.getElementById('norte');
                    regiao.innerHTML += `<tr>
                                                <th>Norte</th>
                                            </tr>`
                    var regiao = document.getElementById('nordeste');
                    regiao.innerHTML += `<tr>
                                                <th>Nordeste</th>
                                            </tr>`
                    var regiao = document.getElementById('centro');
                    regiao.innerHTML += `<tr>
                                                <th>Centro-Oeste</th>
                                            </tr>`
                    var regiao = document.getElementById('sudeste');
                    regiao.innerHTML += `<tr>
                                                <th>Sudeste</th>
                                            </tr>`
                    var regiao = document.getElementById('sul');
                    regiao.innerHTML += `<tr>
                                                <th>Sul</th>
                                            </tr>`

                    for (let index = 0; index < 27; index++) {

                        switch (listaEstados[index].regiao.sigla) {
                            case 'N':
                                var regiao = document.getElementById('norte');
                                regiao.innerHTML += `<tr>
                                                <td>${listaEstados[index].nome} - ${listaEstados[index].sigla}</td>
                                            </tr>`
                                break;
                            case 'NE':
                                var regiao = document.getElementById('nordeste');
                                regiao.innerHTML += `<tr>
                                                <td>${listaEstados[index].nome} - ${listaEstados[index].sigla}</td>
                                            </tr>`
                                break;
                            case 'CO':
                                var regiao = document.getElementById('centro');
                                regiao.innerHTML += `<tr>
                                                <td>${listaEstados[index].nome} - ${listaEstados[index].sigla}</td>
                                            </tr>`
                                break;
                            case 'SE':
                                var regiao = document.getElementById('sudeste');
                                regiao.innerHTML += `<tr>
                                                <td>${listaEstados[index].nome} - ${listaEstados[index].sigla}</td>
                                            </tr>`
                                break;
                            case 'S':
                                var regiao = document.getElementById('sul');
                                regiao.innerHTML += `<tr>
                                                <td>${listaEstados[index].nome} - ${listaEstados[index].sigla}</td>
                                            </tr>`
                                break;
                            default:
                                break;
                        }

                    }

                } else {
                    let s = document.getElementById('sul'), se = document.getElementById('sudeste'), co = document.getElementById('centro'), ne = document.getElementById('nordeste'), n = document.getElementById('norte');
                    s.innerHTML = '';
                    se.innerHTML = '';
                    co.innerHTML = '';
                    ne.innerHTML = '';
                    n.innerHTML = '';
                    grupo.style.display = "none"
                }

            }

            document.getElementById('UF').onchange = () => {
                let x = document.getElementById('UF');
                x.value = x.value.toUpperCase();
                for (let index = 0; index < 27; index++) {
                    if (listaEstados[index].sigla === x.value)
                        document.getElementById('resUF').innerHTML = listaEstados[index].nome;
                }
            }

            });