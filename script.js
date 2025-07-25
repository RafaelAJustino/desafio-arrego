document.addEventListener('DOMContentLoaded', () => {

    // --- NOVA ESTRUTURA DE DESAFIOS ---
    // Cada desafio é um objeto com a string e o gênero alvo do Jogador 1.
    // 'qualquer' serve para ambos os gêneros.
    const desafios = [
        { desafio: '{Jogador 1} dá um selinho em {Jogador 2}.', genero: 'qualquer' },
        { desafio: '{Jogador 1} beija de língua {Jogador 2}.', genero: 'qualquer' },
        { desafio: '{Jogador 1} beija a orelha de {Jogador 2}.', genero: 'qualquer' },
        { desafio: '{Jogador 1} dá um tapa na bunda de {Jogador 2}.', genero: 'qualquer' },
        { desafio: '{Jogador 1} dá uma mordidinha na bunda de {Jogador 2}.', genero: 'qualquer' },
        { desafio: '{Jogador 1} faz uma massagem sensual nos ombros e pescoço de {Jogador 2} por {tempo}.', genero: 'qualquer' },
        { desafio: '{Jogador 1} dança de forma provocante para {Jogador 2} por {tempo}.', genero: 'mulher' },
        { desafio: '{Jogador 1} tira uma peça de roupa de {Jogador 2} e deve ficar sem por {rodada} (acessórios não contam).', genero: 'qualquer' },
        { desafio: '{Jogador 1} fica sentado no colo de {Jogador 2} por {rodada}.', genero: 'mulher' },
        { desafio: '{Jogador 1} passa um cubo de gelo lentamente pelo pescoço e clavícula de {Jogador 2}.', genero: 'qualquer' },
        { desafio: '{Jogador 1} fica de roupa íntima e faz um desfile sensual para o grupo.', genero: 'qualquer' },
        { desafio: '{Jogador 1} fica apenas de calcinha e faz um desfile sensual para o grupo.', genero: 'mulher' },
        { desafio: '{Jogador 1} fica apenas de cueca e faz um desfile sensual para o grupo.', genero: 'homem' },
        { desafio: '{Jogador 1} assina a bunda de {Jogador 2}.', genero: 'qualquer' },
        { desafio: '{Jogador 1} assina o peito de {Jogador 2}.', genero: 'qualquer' },
        { desafio: '{Jogador 1} tira uma peça de roupa por {rodada} (acessórios não contam).', genero: 'qualquer' },
        { desafio: '{Jogador 1} fica apenas de calcinha por {rodada}.', genero: 'mulher' },
        { desafio: '{Jogador 1} fica apenas de cueca por {rodada}.', genero: 'homem' },
        { desafio: '{Jogador 1} dança no colo de {Jogador 2} por {tempo}.', genero: 'mulher' },
        { desafio: '{Jogador 1} acaricie os peitos de {Jogador 2} por {tempo}.', genero: 'qualquer' }, // O gênero do J2 é aleatório
        { desafio: '{Jogador 1} mostra os peitos para todo mundo.', genero: 'mulher' },
        { desafio: '{Jogador 1} mostra a bunda para todo mundo.', genero: 'qualquer' },
        { desafio: '{Jogador 1} simula uma posição sexual com {Jogador 2} por {tempo}.', genero: 'qualquer' },
        { desafio: '{Jogador 1} simula uma posição sexual com o jogador da sua direita e da sua esquerda por {tempo}.', genero: 'qualquer' },
        { desafio: '{Jogador 1} beija a parte do corpo escolhida por {Jogador 2} por {tempo}.', genero: 'qualquer' },
        { desafio: '{Jogador 1} beija sensualmente o umbigo do jogador {Jogador 2} por {tempo}.', genero: 'qualquer' },
        { desafio: '{Jogador 1} beija sensualmente o pescoço de {Jogador 2} por {tempo}.', genero: 'qualquer' },
        { desafio: '{Jogador 1} fica vendado e realiza todos os desafios por {rodada}.', genero: 'qualquer' },
        { desafio: '{Jogador 1} recebe um selinho de todos os jogadores.', genero: 'qualquer' },
        { desafio: '{Jogador 1} recebe um tapa na bunda de todos os jogadores.', genero: 'qualquer' },
        { desafio: '{Jogador 1} manda uma foto provocante para todos os jogadores.', genero: 'mulher' },
        { desafio: '{Jogador 1} manda uma foto provocante para {Jogador 2}.', genero: 'mulher' },
        { desafio: '{Jogador 1} recebe um "chupão" em um local visível de {Jogador 2}.', genero: 'qualquer' },
        { desafio: '{Jogador 1} recebe um "chupão" em um local escondido de {Jogador 2}.', genero: 'qualquer' },
        { desafio: '{Jogador 1} chupa os mamilos de {Jogador 2}.', genero: 'qualquer' },
        { desafio: '{Jogador 1} escohe uma peça de roupa de cada jogador na roda e a retira (acessórios não contam).', genero: 'qualquer' },
        { desafio: '{Jogador 1} e {Jogador 2} dão um beijo triplo com um terceiro jogador à escolha deles.', genero: 'qualquer' },
        { desafio: '{Jogador 1} tem que beijar o jogador que estiver mais vestido na roda.', genero: 'qualquer' },
        { desafio: '{Jogador 1} tem que beijar o jogador que estiver menos vestido na roda.', genero: 'qualquer' },
        { desafio: '{Jogador 1} mostra os peitos para {Jogador 2}.', genero: 'mulher' },
        { desafio: '{Jogador 1} beija {Jogador 2} em uma parte íntima.', genero: 'qualquer' },
        { desafio: '{Jogador 1} e {Jogador 2} se beijam enquanto {Jogador 2} está sentado no colo de {Jogador 1}.', genero: 'homem' },
        { desafio: '{Jogador 1} tira toda a parte de baixo da roupa e fica sentada no colo de {Jogador 2}.', genero: 'mulher' },
        { desafio: '{Jogador 1} tira toda a parte de cima da roupa e fica sentada no colo de {Jogador 2}.', genero: 'mulher' },
        { desafio: '{Jogador 1} tem seus mamilos chupados por todos os jogadores da roda (um de cada vez).', genero: 'qualquer' },
        { desafio: '{Jogador 1} escolhe dois jogadores para se beijarem de língua por {tempo}.', genero: 'qualquer' },
        { desafio: '{Jogador 1} escolhe dois jogadores para simularem uma posição sexual por {tempo}.', genero: 'qualquer' },
        { desafio: '{Jogador 1} fica de 4 e deixa cada jogador dar um tapa em sua bunda.', genero: 'qualquer' },
        { desafio: '{Jogador 2} dá uma ordem para {Jogador 1}, que deve ser cumprida imediatamente.', genero: 'qualquer' },
        { desafio: '{Jogador 1} mostra uma parte íntima do corpo sem tirar a roupa.', genero: 'qualquer' },
        { desafio: '{Jogador 1} mostra a genital sem tirar a roupa.', genero: 'qualquer' },
        { desafio: '{Jogador 1} dá um beijo com mordida leve em {Jogador 2}.', genero: 'qualquer' },
        { desafio: '{Jogador 1} faz um carinho íntimo sobre a roupa em {Jogador 2} por {tempo}.', genero: 'qualquer' },
        { desafio: '{Jogador 1} escolhe dois outros jogadores para ficarem de conchinha por {tempo}.', genero: 'qualquer' },
        { desafio: '{Jogador 1} fica de conchinha com {Jogador 2} por {tempo}.', genero: 'qualquer' },
        { desafio: 'Todos os jogadores escrevem anonimamente uma fantasia em um pedaço de papel. {Jogador 1} lê todas em voz alta.', genero: 'qualquer' },
        { desafio: 'Os jogadores à direita e esquerda de {Jogador 1} devem acariciar os peitos de {Jogador 1} por {tempo}.', genero: 'mulher' },
        { desafio: '{Jogador 2} senta no rosto de {Jogador 1} por {tempo}.', genero: 'homem' },
        { desafio: '{Jogador 2} pode usar um cinto para bater 3 vezes na bunda de {Jogador 1}.', genero: 'qualquer' },
        { desafio: '{Jogador 2} tira uma foto sensual e a envia para {Jogador 1}.', genero: 'homem' },
        { desafio: '{Jogador 2} fica nu(a) no meio da roda e deixa todos desenharem algo em seu corpo onde quiserem.', genero: 'mulher' },
        { desafio: '{Jogador 2} e {Jogador 1} se beijam enquanto se apalpam por {tempo}.', genero: 'qualquer' },
        { desafio: '{Jogador 2} e {Jogador 1} vão para outro cômodo e o {Jogador 1} deve exibir alguma parte de seu corpo.', genero: 'qualquer' },
        { desafio: '{Jogador 1} vai para outro cômodo, e cada jogador, um de cada vez, deve ir até lá para que {Jogador 1} exiba uma parte do corpo.', genero: 'qualquer' },
        { desafio: '{Jogador 1} vai para outro cômodo, e cada jogador, um de cada vez, vai até lá e exibe uma parte do corpo para {Jogador 1}.', genero: 'qualquer' },
        { desafio: '{Jogador 1} vai para outro cômodo, e cada jogador, um de cada vez, vai até lá para que {Jogador 1} beije a parte do corpo que o outro jogador escolher.', genero: 'qualquer' },
        { desafio: '{Jogador 1} vai para outro cômodo, e cada jogador, um de cada vez, vai até lá e beija a parte do corpo de {Jogador 1} que ele(a) escolher.', genero: 'qualquer' },
        { desafio: '{Jogador 1} vai para outro cômodo, e cada jogador, um de cada vez, vai até lá para que {Jogador 1} realize um desafio que o outro escolher', genero: 'qualquer' },
        { desafio: '{Jogador 1} vai para outro cômodo, e cada jogador, um de cada vez, vai até lá e realize um desafio que {Jogador 1} escolher.', genero: 'qualquer' },
        { desafio: '{Jogador 1} beija a nuca de {Jogador 2} lentamente por {tempo}.', genero: 'qualquer' },
        { desafio: '{Jogador 1} escolhe uma parte do corpo de {Jogador 2} (que não seja a boca) e dá um beijo por {tempo}.', genero: 'qualquer' },
        { desafio: '{Jogador 1} deve lamber os lábios de {Jogador 2} de forma provocante.', genero: 'qualquer' },
        { desafio: '{Jogador 1} e {Jogador 2} simulam a posição "69" por {tempo}.', genero: 'qualquer' },
        { desafio: '{Jogador 1} beija a parte interna da coxa de {Jogador 2} por {tempo}.', genero: 'homem' },
        { desafio: '{Jogador 1} usa a língua para traçar uma linha do umbigo de {Jogador 2} até a clavícula.', genero: 'qualquer' },
        { desafio: '{Jogador 1} faz uma massagem nos pés de {Jogador 2} por {tempo}.', genero: 'qualquer' },
        { desafio: 'Todos os jogadores tiram uma peça de roupa. O último a tirar, cumpre um desafio extra escolhido por {Jogador 1}.', genero: 'qualquer' },
        { desafio: '{Jogador 1} tira toda a roupa de cima e deixa {Jogador 2} desenhar algo em suas costas.', genero: 'qualquer' },
        { desafio: '{Jogador 1} deve fazer uma pergunta "Eu nunca..." Quem já fez, toma uma dose.', genero: 'qualquer' },
        { desafio: '{Jogador 1} deve fazer uma pergunta "Eu nunca..." Quem já fez, toma uma dose.', genero: 'qualquer' },
        { desafio: '{Jogador 1} deve fazer uma pergunta "Eu nunca..." Quem já fez, toma uma dose.', genero: 'qualquer' },
        { desafio: '{Jogador 1} deve fazer uma pergunta "Eu nunca..." Quem já fez, toma uma dose.', genero: 'qualquer' },
        { desafio: '{Jogador 1} deve fazer uma pergunta "Eu nunca..." Quem já fez, toma uma dose.', genero: 'qualquer' },
        { desafio: '{Jogador 1} deve fazer uma pergunta "Eu nunca..." Quem já fez, toma uma dose.', genero: 'qualquer' },
        { desafio: '{Jogador 1} deve fazer uma pergunta "Eu nunca..." Quem já fez, toma uma dose.', genero: 'qualquer' },
        { desafio: '{Jogador 1} deve fazer uma pergunta "Eu nunca..." Quem já fez, toma uma dose.', genero: 'qualquer' },
        { desafio: '{Jogador 1} deve fazer uma pergunta "Eu nunca..." Quem já fez, toma uma dose.', genero: 'qualquer' },
        { desafio: '{Jogador 1} deve fazer uma pergunta "Eu nunca..." Quem já fez, toma uma dose.', genero: 'qualquer' },
        { desafio: '{Jogador 1} usa um batom para deixar uma marca de beijo em um lugar secreto no corpo de {Jogador 2}.', genero: 'mulher' },
        { desafio: '{Jogador 1} tem que tirar uma peça de roupa de {Jogador 2} o mais lentamente possível.', genero: 'qualquer' },
        { desafio: '{Jogador 1} e {Jogador 2} devem tirar a parte de cima da roupa e se abraçar por {tempo}.', genero: 'qualquer' },
        { desafio: '{Jogador 2} deita no chão virado para cima e o {Jogador 1} tem que fazer 5 flexões. A cada flexão, {Jogador 2} dá um selinho em {jogador 2}.', genero: 'homem' },
        { desafio: '{Jogador 2} deita no chão virado para cima e o {Jogador 1} tem que fazer 10 agachamentos até encostar a bunda no colo de {jogador 2}', genero: 'mulher' },
        { desafio: '{Jogador 1} faz um desafio para ser cumprido por {Jogador 2}', genero: 'qualquer' },
        { desafio: '{Jogador 1} mostra um nude próprio para o grupo. Se não tiver nenhum é so tirar um', genero: 'mulher' },
        { desafio: 'O grupo vota na parte do corpo mais sexy de {Jogador 1}. {Jogador 2} deve beijar essa parte.', genero: 'qualquer' },
        { desafio: '{Jogador 1} deve tirar uma foto sensual de {Jogador 2} e guardar como lembrança.', genero: 'homem' },
        { desafio: '{Jogador 1} é um cavalo, {Jogador 2} deve cavalgar por 30 segundos.', genero: 'homem' },
    ];

    const tempos = ['15 segundos', '30 segundos', '1 minuto'];
    const rodadas = ['1 rodada', '2 rodadas', '3 rodadas'];
    const CACHE_KEY = 'verdadeOuDesafioJogadores';

    let jogadores = [];
    let jogadorAtivoIndex = 0;

    // --- Funções de Cache (localStorage) ---
    function salvarJogadoresNoCache() {
        localStorage.setItem(CACHE_KEY, JSON.stringify(jogadores));
    }

    function carregarJogadoresDoCache() {
        const jogadoresSalvos = localStorage.getItem(CACHE_KEY);
        if (jogadoresSalvos) {
            jogadores = JSON.parse(jogadoresSalvos);
            renderizarJogadores();
        }
    }

    // --- Funções de Lógica do Jogo ---
    function adicionarJogador() {
        const nomeInput = document.getElementById('nome');
        const generoInput = document.getElementById('genero');
        const preferenciaInput = document.getElementById('preferencia');

        const nome = nomeInput.value.trim();
        if (!nome) {
            alert('Por favor, insira um nome.');
            return;
        }

        const jogador = {
            id: Date.now(),
            nome: nome,
            genero: generoInput.value,
            preferencia: preferenciaInput.value
        };

        jogadores.push(jogador);
        salvarJogadoresNoCache();
        renderizarJogadores();

        nomeInput.value = '';
        nomeInput.focus();
    }

    function removerJogador(idJogador) {
        jogadores = jogadores.filter(j => j.id !== idJogador);
        salvarJogadoresNoCache();
        renderizarJogadores();
    }

    function renderizarJogadores() {
        const lista = document.getElementById('lista-jogadores');
        lista.innerHTML = '';
        jogadores.forEach(jogador => {
            const item = document.createElement('li');
            item.innerHTML = `<span>${jogador.nome} <small>(${jogador.genero}, pref: ${jogador.preferencia})</small></span>
                              <button class="remove-btn" data-id="${jogador.id}">Remover</button>`;
            lista.appendChild(item);
        });
    }

    function trocarTela(idTelaAtiva) {
        document.querySelectorAll('.tela').forEach(tela => tela.classList.remove('ativa'));
        document.getElementById(idTelaAtiva).classList.add('ativa');
    }

    function iniciarJogo() {
        if (jogadores.length < 2) {
            alert('É necessário ter pelo menos 2 jogadores para iniciar.');
            return;
        }
        jogadorAtivoIndex = -1;
        trocarTela('tela-jogo');
        proximoDesafio();
    }

    function finalizarJogo() {
        trocarTela('tela-cadastro');
    }

    function proximoDesafio() {
        if (jogadores.length < 2) {
            finalizarJogo();
            alert('Jogadores insuficientes. O jogo foi finalizado.');
            return;
        }

        jogadorAtivoIndex = (jogadorAtivoIndex + 1) % jogadores.length;
        const jogador1 = jogadores[jogadorAtivoIndex];

        // --- LÓGICA DE FILTRO DE DESAFIO MODIFICADA ---

        // 1. Filtra desafios com base no gênero do jogador ativo ('homem', 'mulher') ou 'qualquer'.
        let desafiosCandidatos = desafios.filter(d =>
            d.genero.toLowerCase() === jogador1.genero.toLowerCase() || d.genero.toLowerCase() === 'qualquer'
        );

        // 2. Fallback: se não houver desafios específicos para o gênero, usa apenas os de 'qualquer'.
        if (desafiosCandidatos.length === 0) {
            desafiosCandidatos = desafios.filter(d => d.genero.toLowerCase() === 'qualquer');
        }

        // 3. Se ainda assim não houver desafios, informa o jogador e passa a vez.
        if (desafiosCandidatos.length === 0) {
            document.getElementById('texto-desafio').innerHTML = `<strong>${jogador1.nome}</strong>, não encontramos um bom desafio para você. Passe a vez!`;
            return;
        }

        // 4. Seleciona um desafio aleatório da lista de candidatos filtrada.
        const desafioObj = desafiosCandidatos[Math.floor(Math.random() * desafiosCandidatos.length)];
        let desafioAtual = desafioObj.desafio;

        // --- FIM DA LÓGICA MODIFICADA ---

        desafioAtual = desafioAtual.replace(/{Jogador 1}|{jogador 1}|{jogador1}/gi, `<strong>${jogador1.nome}</strong>`);

        if (desafioAtual.includes('{Jogador 2}') || desafioAtual.includes('{jogador 2}')) {
            let candidatosJogador2 = jogadores.filter(j => j.id !== jogador1.id);
            let candidatosFiltrados = [];

            // Filtra Jogador 2 baseado na preferência do Jogador 1
            if (jogador1.preferencia === 'homem') {
                candidatosFiltrados = candidatosJogador2.filter(j => j.genero === 'homem');
            } else if (jogador1.preferencia === 'mulher') {
                candidatosFiltrados = candidatosJogador2.filter(j => j.genero === 'mulher');
            } else { // Preferência 'ambos'
                candidatosFiltrados = candidatosJogador2;
            }

            // Fallback: se o filtro de preferência não retornar ninguém, usa a lista geral (exceto o próprio jogador 1)
            if (candidatosFiltrados.length === 0) {
                candidatosFiltrados = candidatosJogador2;
            }

            if (candidatosFiltrados.length > 0) {
                const jogador2 = candidatosFiltrados[Math.floor(Math.random() * candidatosFiltrados.length)];
                desafioAtual = desafioAtual.replace(/{Jogador 2}|{jogador 2}/gi, `<strong>${jogador2.nome}</strong>`);
            } else {
                desafioAtual = `<strong>${jogador1.nome}</strong>, você precisa de mais gente no jogo para este desafio! Passe a vez.`
            }
        }

        if (desafioAtual.includes('{tempo}')) {
            const tempoAleatorio = tempos[Math.floor(Math.random() * tempos.length)];
            desafioAtual = desafioAtual.replace(/{tempo}/gi, `<strong>${tempoAleatorio}</strong>`);
        }

        if (desafioAtual.includes('{rodada}')) {
            const rodadaAleatoria = rodadas[Math.floor(Math.random() * rodadas.length)];
            desafioAtual = desafioAtual.replace(/{rodada}/gi, `<strong>${rodadaAleatoria}</strong>`);
        }

        document.getElementById('texto-desafio').innerHTML = desafioAtual;
    }

    // --- Vinculando Eventos (Event Listeners) ---
    document.getElementById('add-player-btn').addEventListener('click', adicionarJogador);
    document.getElementById('start-game-btn').addEventListener('click', iniciarJogo);
    document.getElementById('next-challenge-btn').addEventListener('click', proximoDesafio);
    document.getElementById('end-game-btn').addEventListener('click', finalizarJogo);

    document.getElementById('lista-jogadores').addEventListener('click', (e) => {
        if (e.target && e.target.classList.contains('remove-btn')) {
            const idParaRemover = parseInt(e.target.getAttribute('data-id'));
            removerJogador(idParaRemover);
        }
    });

    // --- Inicialização ---
    carregarJogadoresDoCache();
});