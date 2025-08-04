document.addEventListener('DOMContentLoaded', () => {

    // --- ESTRUTURA DE DESAFIOS PADRÃO ---
    const desafios = [
        // ... (sua lista de desafios continua a mesma) ...
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
        { desafio: '{Jogador 1} acaricie os peitos de {Jogador 2} por {tempo}.', genero: 'qualquer' },
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
        { desafio: '{Jogador 1} usa um batom para deixar uma marca de beijo em um lugar secreto no corpo de {Jogador 2}.', genero: 'mulher' },
        { desafio: '{Jogador 1} tem que tirar uma peça de roupa de {Jogador 2} o mais lentamente possível.', genero: 'qualquer' },
        { desafio: '{Jogador 1} e {Jogador 2} devem tirar a parte de cima da roupa e se abraçar por {tempo}.', genero: 'qualquer' },
        { desafio: '{Jogador 2} deita no chão virado para cima e o {Jogador 1} tem que fazer 5 flexões. A cada flexão, {Jogador 2} dá um selinho em {jogador 2}.', genero: 'homem' },
        { desafio: '{Jogador 2} deita no chão virado para cima e o {Jogador 1} tem que fazer 10 agachamentos até encostar a bunda no colo de {jogador 2}', genero: 'mulher' },
        { desafio: '{Jogador 1} faz um desafio para ser cumprido por {Jogador 2}', genero: 'qualquer' },
        { desafio: '{Jogador 1} mostra um nude próprio para o grupo. Se não tiver nenhum é so tirar um', genero: 'mulher' },
        { desafio: 'O grupo vota na parte do corpo mais sexy de {Jogador 1}. {Jogador 2} deve beijar essa parte.', genero: 'qualquer' },
        { desafio: '{Jogador 1} deve tirar uma foto sensual de {Jogador 2} e guardar como lembrança.', genero: 'homem' },
        { desafio: '{Jogador 1} mostra um nude próprio para o grupo. Se não tiver nenhum é so tirar um', genero: 'mulher' },
        { desafio: '{Jogador 1} é um cavalo, {Jogador 2} deve cavalgar por 30 segundos.', genero: 'homem' },
        { desafio: 'A jogadora mais nova deve beijar em cada jogador pelo tempo de sua idade em segundos', genero: 'mulher' },
        { desafio: 'A jogadora mais velha deve fazer uma dança sensual somente de calcinha pelo dobro da sua idade em segundos', genero: 'mulher' },
        { desafio: 'A jogadora mais alta deve fazer um desafio para cada jogador.', genero: 'mulher' },
        { desafio: 'A jogadora mais baixa deve realizar um desafio imposto por cada jogador.', genero: 'mulher' },
        { desafio: 'A jogadora mais peituda deve deixar todos desenharem ou escreverem algo nos seus peitos.', genero: 'mulher' },
        { desafio: 'A jogadora menos peituda deve deixar todos beijar seus mamilos.', genero: 'mulher' },
        { desafio: 'A jogadora mais bunduda deve ficar de 4 e deixar todos desenharem ou escreverem algo na sua bunda.', genero: 'mulher' },
        { desafio: 'A jogadora com mais cara de santa deve beijar as partes íntimas de cada jogador ou deixar cada jogador beijar sua parte íntima.', genero: 'mulher' },
        { desafio: '{jogador 1} e {jogador 2} ficam só de roupas intimas e dão uns amassos por {tempo}.', genero: 'qualquer' },
        { desafio: '{Jogador 1} deixe {Jogador 2} escrever ou desenhar o que quiser no seu monte pubiano.', genero: 'qualquer' },
        { desafio: '{Jogador 1} deve fechar os olhos e deixar {Jogador 2} passar o que quiser na sua boca, em seguida tente adivinhar o que é.', genero: 'qualquer' },
        { desafio: '{Jogador 1} deve fechar os olhos e deixar {Jogador 2} passar o que quiser na sua parte íntima, em seguida tente adivinhar o que é.', genero: 'mulher' },
        { desafio: 'Todos os homens ficam apenas de cueca por {rodada}.', genero: 'homem' },
        { desafio: 'Todos as mulheres ficam apenas de calcinha por {rodada}.', genero: 'mulher' },
    ];

    const arreguei = [
        'Tome 1 shot.',
        'Tome 2 shots.',
        'Tome 3 shots ou cada jogador te da um tapa na bunda',
        'Cumpra o próximo desafio junto com o próximo jogador.',
        'Tire uma peça de roupa e fique sem por 3 rodadas (acessórios não contam).',
        'Mostre a bunda.',
        'Mostre os peitos.',
        'Todos tomam um shot.',
        'Participe de todos os desafios até sua próxima rodada.',
        'Cumpra um desafio que o grupo escolher.',
        'Tome 1 shot por turno até sua próxima rodada.'
    ];

    // NOVO: Listas para a funcionalidade "Rolar o Dado"
    const dado = [
        { desafio: '{jogador 1} {acao} {corpo} de {jogador 2} por {tempo}.', genero: 'qualquer' },
    ];

    const corpo = [
        'a boca',
        'a orelha',
        'o pescoço',
        'a mão',
        'o pé',
        'a barriga',
        'as costas',
        'a coxa',
        'a bunda',
        'o mamilo',
        'a nuca',
        'o umbigo',
        'a virilha',
        'a parte íntima',
    ];

    const acao = [
        'beija',
        'lambe',
        'chupa',
        'acaricia',
        'massageia',
    ];

    const tempos = ['15 segundos', '30 segundos', '1 minuto'];
    const rodadas = ['1 rodada', '2 rodadas', '3 rodadas'];
    const CACHE_KEY_JOGADORES = 'verdadeOuDesafioJogadores';
    const CACHE_KEY_DESAFIOS = 'verdadeOuDesafioDesafiosCustom';

    let jogadores = [];
    let desafiosCustomizados = [];
    let jogadorAtivoIndex = 0;
    let arregueiTimer = null;

    // --- Funções de Cache, Lógica de Jogadores e Desafios (sem alteração) ---
    function salvarJogadoresNoCache() { localStorage.setItem(CACHE_KEY_JOGADORES, JSON.stringify(jogadores)); }
    function carregarJogadoresDoCache() {
        const jogadoresSalvos = localStorage.getItem(CACHE_KEY_JOGADORES);
        if (jogadoresSalvos) {
            jogadores = JSON.parse(jogadoresSalvos);
            renderizarJogadores();
        }
    }
    function salvarDesafiosCustomizadosNoCache() { localStorage.setItem(CACHE_KEY_DESAFIOS, JSON.stringify(desafiosCustomizados)); }
    function carregarDesafiosCustomizadosDoCache() {
        const desafiosSalvos = localStorage.getItem(CACHE_KEY_DESAFIOS);
        if (desafiosSalvos) {
            desafiosCustomizados = JSON.parse(desafiosSalvos);
            renderizarDesafiosCustomizados();
        }
    }
    function adicionarJogador() {
        const nomeInput = document.getElementById('nome');
        const generoInput = document.getElementById('genero');
        const preferenciaInput = document.getElementById('preferencia');
        const nome = nomeInput.value.trim();
        if (!nome) { alert('Por favor, insira um nome.'); return; }
        const jogador = { id: Date.now(), nome: nome, genero: generoInput.value, preferencia: preferenciaInput.value };
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
    function adicionarDesafioCustomizado() {
        const textoInput = document.getElementById('texto-desafio-customizado');
        const generoInput = document.getElementById('genero-desafio');
        const texto = textoInput.value.trim();
        if (!texto) { alert('Por favor, escreva o texto do desafio.'); return; }
        const desafio = { id: Date.now(), desafio: texto, genero: generoInput.value };
        desafiosCustomizados.push(desafio);
        salvarDesafiosCustomizadosNoCache();
        renderizarDesafiosCustomizados();
        textoInput.value = '';
        textoInput.focus();
    }
    function removerDesafioCustomizado(idDesafio) {
        desafiosCustomizados = desafiosCustomizados.filter(d => d.id !== idDesafio);
        salvarDesafiosCustomizadosNoCache();
        renderizarDesafiosCustomizados();
    }
    function renderizarDesafiosCustomizados() {
        const lista = document.getElementById('lista-desafios');
        lista.innerHTML = '';
        desafiosCustomizados.forEach(desafio => {
            const item = document.createElement('li');
            item.innerHTML = `<span>${desafio.desafio} <small>(${desafio.genero})</small></span>
                              <button class="remove-btn" data-id="${desafio.id}">Remover</button>`;
            lista.appendChild(item);
        });
    }

    // --- Funções de Controle de Jogo ---
    function trocarTela(idTelaAtiva) {
        document.querySelectorAll('.tela').forEach(tela => tela.classList.remove('ativa'));
        document.getElementById(idTelaAtiva).classList.add('ativa');
    }

    function iniciarJogo() {
        if (jogadores.length < 2) {
            alert('É necessário ter pelo menos 2 jogadores para iniciar.');
            return;
        }
        jogadorAtivoIndex = -1; // Começa em -1 para que a primeira rodada seja do jogador 0
        trocarTela('tela-jogo');
        proximoDesafio(); // Gera o primeiro desafio
    }

    function finalizarJogo() {
        trocarTela('tela-cadastro');
        const arregueiBtn = document.getElementById('arreguei-btn');
        arregueiBtn.style.display = 'none';
        if (arregueiTimer) {
            clearTimeout(arregueiTimer);
        }
    }

    function handleArregueiClick() {
        const arregueiBtn = document.getElementById('arreguei-btn');
        const textoDesafio = document.getElementById('texto-desafio');
        const jogador1 = jogadores[jogadorAtivoIndex];
        arregueiBtn.style.display = 'none';
        if (arregueiTimer) { clearTimeout(arregueiTimer); }
        const pena = arreguei[Math.floor(Math.random() * arreguei.length)];
        textoDesafio.innerHTML = `<strong>${jogador1.nome}</strong> arregou!<br><br><strong>Pena:</strong> ${pena}`;
    }

    // NOVO: Função auxiliar para encontrar o Jogador 2
    function encontrarJogador2(jogador1) {
        let candidatosJogador2 = jogadores.filter(j => j.id !== jogador1.id);
        if (candidatosJogador2.length === 0) return null;

        let candidatosFiltrados = [];
        if (jogador1.preferencia === 'homem') {
            candidatosFiltrados = candidatosJogador2.filter(j => j.genero === 'homem');
        } else if (jogador1.preferencia === 'mulher') {
            candidatosFiltrados = candidatosJogador2.filter(j => j.genero === 'mulher');
        } else { // 'ambos'
            candidatosFiltrados = candidatosJogador2;
        }

        // Se a preferência não encontrar ninguém, usa a lista geral de candidatos
        if (candidatosFiltrados.length === 0) {
            candidatosFiltrados = candidatosJogador2;
        }

        return candidatosFiltrados[Math.floor(Math.random() * candidatosFiltrados.length)];
    }

    // NOVO: Função para iniciar um turno de jogo (seja desafio ou dado)
    function iniciarTurno(funcaoGeradoraDeDesafio) {
        if (jogadores.length < 2) {
            finalizarJogo();
            alert('Jogadores insuficientes. O jogo foi finalizado.');
            return;
        }

        // Lógica do timer do botão "Arreguei"
        const arregueiBtn = document.getElementById('arreguei-btn');
        if (arregueiTimer) { clearTimeout(arregueiTimer); }
        arregueiBtn.style.display = 'block';
        arregueiTimer = setTimeout(() => {
            arregueiBtn.style.display = 'none';
        }, 10000);

        // Avança para o próximo jogador
        jogadorAtivoIndex = (jogadorAtivoIndex + 1) % jogadores.length;
        const jogador1 = jogadores[jogadorAtivoIndex];

        // Chama a função específica (proximoDesafio ou rolarDado) para gerar o texto
        funcaoGeradoraDeDesafio(jogador1);
    }

    // ALTERADO: Agora apenas gera o texto do desafio
    function gerarDesafioDaLista(jogador1) {
        const todosDesafios = [...desafios, ...desafiosCustomizados];
        if (todosDesafios.length === 0) {
            document.getElementById('texto-desafio').innerHTML = `Não há desafios disponíveis. Adicione alguns!`;
            return;
        }

        let desafiosCandidatos = todosDesafios.filter(d =>
            d.genero.toLowerCase() === jogador1.genero.toLowerCase() || d.genero.toLowerCase() === 'qualquer'
        );
        if (desafiosCandidatos.length === 0) {
            desafiosCandidatos = todosDesafios.filter(d => d.genero.toLowerCase() === 'qualquer');
        }
        if (desafiosCandidatos.length === 0) {
            document.getElementById('texto-desafio').innerHTML = `<strong>${jogador1.nome}</strong>, não há desafios para você. Passe a vez!`;
            return;
        }

        const desafioObj = desafiosCandidatos[Math.floor(Math.random() * desafiosCandidatos.length)];
        let desafioAtual = desafioObj.desafio;

        desafioAtual = desafioAtual.replace(/{Jogador 1}|{jogador 1}|{jogador1}/gi, `<strong>${jogador1.nome}</strong>`);

        if (desafioAtual.includes('{Jogador 2}') || desafioAtual.includes('{jogador 2}')) {
            const jogador2 = encontrarJogador2(jogador1);
            if (jogador2) {
                desafioAtual = desafioAtual.replace(/{Jogador 2}|{jogador 2}/gi, `<strong>${jogador2.nome}</strong>`);
            } else {
                desafioAtual = `<strong>${jogador1.nome}</strong>, precisa de mais gente no jogo! Passe a vez.`
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

    // NOVO: Função que gera o texto do dado
    function gerarDesafioDoDado(jogador1) {
        const desafioTemplate = dado[0].desafio;

        const jogador2 = encontrarJogador2(jogador1);
        if (!jogador2) {
            document.getElementById('texto-desafio').innerHTML = `<strong>${jogador1.nome}</strong>, precisa de mais gente no jogo para rolar o dado! Passe a vez.`;
            return;
        }

        const acaoAleatoria = acao[Math.floor(Math.random() * acao.length)];
        const corpoAleatorio = corpo[Math.floor(Math.random() * corpo.length)];
        const tempoAleatorio = tempos[Math.floor(Math.random() * tempos.length)];

        let desafioFinal = desafioTemplate
            .replace(/{jogador 1}|{jogador 1}|{jogador1}/gi, `<strong>${jogador1.nome}</strong>`)
            .replace(/{acao}/gi, `<strong>${acaoAleatoria}</strong>`)
            .replace(/{corpo}/gi, `<strong>${corpoAleatorio}</strong>`)
            .replace(/{jogador 2}|{jogador 2}/gi, `<strong>${jogador2.nome}</strong>`)
            .replace(/{tempo}/gi, `<strong>${tempoAleatorio}</strong>`);

        document.getElementById('texto-desafio').innerHTML = desafioFinal;
    }

    // --- Vinculando Eventos (Event Listeners) ---
    document.getElementById('add-player-btn').addEventListener('click', adicionarJogador);
    document.getElementById('add-challenge-btn').addEventListener('click', adicionarDesafioCustomizado);
    document.getElementById('start-game-btn').addEventListener('click', iniciarJogo);

    // ALTERADO: Botões de jogo agora chamam o 'iniciarTurno' com a função apropriada
    document.getElementById('next-challenge-btn').addEventListener('click', () => iniciarTurno(gerarDesafioDaLista));
    document.getElementById('roll-dice-btn').addEventListener('click', () => iniciarTurno(gerarDesafioDoDado)); // NOVO

    document.getElementById('end-game-btn').addEventListener('click', finalizarJogo);
    document.getElementById('arreguei-btn').addEventListener('click', handleArregueiClick);

    document.getElementById('lista-jogadores-cadastrados').addEventListener('click', (e) => {
        if (e.target && e.target.classList.contains('remove-btn')) {
            removerJogador(parseInt(e.target.getAttribute('data-id')));
        }
    });
    document.getElementById('lista-desafios-customizados').addEventListener('click', (e) => {
        if (e.target && e.target.classList.contains('remove-btn')) {
            removerDesafioCustomizado(parseInt(e.target.getAttribute('data-id')));
        }
    });

    // --- Inicialização ---
    carregarJogadoresDoCache();
    carregarDesafiosCustomizadosDoCache();
    // Ajuste para deixar a mensagem inicial na tela de jogo
    document.getElementById('texto-desafio').innerHTML = `Clique em "Próxima Rodada" ou "Rolar o Dado" para começar!`;
});