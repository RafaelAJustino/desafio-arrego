const desafios = [
    '{Jogador 1} da um selinho em {Jogador 2}',
    '{Jogador 1} beija de lingua {Jogador 2}',
    '{Jogador 1} beija a orelha de {Jogador 2}',
    '{Jogador 1} da um tapa na bunda de {Jogador 2}',
    '{Jogador 1} da uma mordidinha na bunda de {Jogador 2}',
    '{Jogador 1} faz uma massagem sensual nos ombros e pescoço de {Jogador 2} por 2 minutos',
    '{Jogador 1} dança de forma provocante para {Jogador 2} por {tempo}',
    '{Jogador 1} tira uma peça de roupa de {Jogador 2} e deve ficar sem por {rodada} (acessórios não contam)',
    '{Jogador 1} fica sentado no colo de {Jogador 2} por {rodada}',
    '{Jogador 1} passa um cubo de gelo lentamente pelo pescoço e clavícula de {Jogador 2}',
    '{Jogador 1} fica de roupa íntima e faz um desfile sensual para o grupo',
    '{Jogador 1} fica de roupa íntima e faz um desfile sensual para o grupo',
    '{Jogador 1} fica apenas de calcinha / cueca e faz um desfile sensual para o grupo',
    '{Jogador 1} assina a bunda de {Jogador 2}',
    '{Jogador 1} assina o peito de {Jogador 2}',
    '{jogador 1} tira uma peça de roupa por {rodada} (acessórios não contam)',
    '{Jogador 1} fica apenas de calcinha / cueca por {rodada}',
    '{jogador 1} fica apenas de roupa íntima por {rodada}',
    '{jogador 1} dança no colo de {jogador 2} por {tempo}',
    '{jogador 1} acaricie os peitos de {jogador 2} por {tempo}',
    '{jogador 1} mostra os peitos para todo mundo',
    '{jogador 1} mostra a bunda para todo mundo',
    '{jogador 1} simula uma posição sexual com {jogador 2} por {tempo}',
    '{jogador 1} simula uma posição sexual com o jogador da sua direita e da sua esquerda por {tempo}',
    '{jogador 1} beija a parte do corpo escolhida por {jogador 2} por {tempo}',
    '{jogador 1} beija sensualmente o umbido do jogador {jogador 2} por {tempo}',
    '{jogador 1} beija sensualmente o pescoço {jogador 2} por {tempo}',
    '{jogador 1} fica vendado por e realiza todos os desafios {rodada}',
    '{Jogador 1} tira uma peça de roupa e deve ficar sem por {rodada} (acessórios não contam)',
    '{Jogador 1} tira uma peça de roupa e deve ficar sem por {rodada} (acessórios não contam)',
    '{Jogador 1} tira uma peça de roupa e deve ficar sem por {rodada} (acessórios não contam)',
    '{Jogador 1} tira uma peça de roupa e deve ficar sem por {rodada} (acessórios não contam)',
    '{Jogador 1} tira uma peça de roupa e deve ficar sem por {rodada} (acessórios não contam)',
    '{Jogador 1} tira uma peça de roupa e deve ficar sem por {rodada} (acessórios não contam)',
    '{Jogador 1} tira uma peça de roupa e deve ficar sem por {rodada} (acessórios não contam)',
    '{jogador 1} recebe um selinho de todos os jogadores',
    '{jogador 1} receba um tapa na bunda de todos os jogadores',
    '{jogador 1} mande uma foto provocante para todos os jogadores',
    '{jogador 1} mande uma foto provocante para {jogador 2}',
    '{Jogador 1} recebe um "chupão" em um local visível de {jogador 2',
    '{Jogador 1} recebe um "chupão" em um local escondido de {jogador 2',
    '{Jogador 1} chupe os mamilos de {jogador 2}',
    '{Jogador 2} tem que tirar uma peça de roupa de cada jogador na roda (acessórios não contam)',
    '{Jogador 1} e {Jogador 2} dão um beijo triplo com um terceiro jogador à escolha deles',
    '{Jogador 1} tem que beijar o jogador que estiver mais vestido na roda',
    '{Jogador 1} tem que beijar o jogador que estiver menos vestido na roda',
    '{Jogador 2} fica sem a parte de baixo da roupa por {rodada}',
    '{Jogador 1} mostra os peitos para {Jogador 2}',
    '{Jogador 1} beija o jogador em uma parte íntima {Jogador 2}',
    '{Jogador 1} e {Jogador 2} se beijam enquanto {Jogador 2} esta sentado no colo de {Jogador 1}',
    '{Jogador 1} tira toda a parte de baixo da roupa e fica sentada no colo de {Jogador 2}',
    '{Jogador 1} tira toda a parte de cima da roupa e fica sentada no colo de {Jogador 2}',
    '{Jogador 2} tem seus mamilos chupados por todos os jogadores da roda (um de cada vez)',
    '{Jogador 1} escolhe dois jogadores para se beijarem de língua por {tempo}',
    '{Jogador 1} escolhe dois jogadores para simularem um posição sexual por {tempo}',
    '{Jogador 1} fica de 4 e deixa cada jogador dar um tapa em sua bunda',
    '{Jogador 2} da uma ordem para {Jogador 1}, que deve ser cumprida imediatamente',
    '{jogador1} mostra uma parte íntima do corpo sem tirar a roupa',
    '{jogador1} mostra a genital sem tirar a roupa',
    '{jogador1} dá um beijo com mordida leve em {jogador2}',
    '{jogador1} faz um carinho íntimo sobre a roupa em {jogador 2} por {tempo}',
    '{Jogador 1} escolhe dois outros jogadores para ficarem de conchinha por {tempo}',
    '{Jogador 1} ficar de conchinha com {jogador2} por {tempo}',
    'Todos os jogadores escrevem anonimamente uma fantasia em um pedaço de papel. {Jogador 1} lê todas em voz alta',
    'os jogadores à direita e esquerda de {jogador 1} devem acariar os peitos de {jogador 1} por {tempo}',
    '{Jogador 2} senta no rosto de {Jogador 1} por {tempo}.',
    '{Jogador 2} pode usar um cinto para bater 3 vezes na bunda nua de {Jogador 1}.',
    '{Jogador 2} tira uma foto sensual e a envia para {Jogador 1}.',
    '{Jogador 2} fica nu(a) no meio da roda e deixa todos desenharem algo em seu corpo onde quiserem',
    '{Jogador 2} e {Jogador 1} se beijam enquanto se apalpam {tempo}',
    '{Jogador 2} e {Jogador 1} vão para outro cômodo e o {jogador 1} deve exibir alguma parte de seu corpo',
    '{Jogador 1} vai para outro cômodo, todos os jogadores um de cada vez deve ir até o cômodo o {jogador 1} deve exibir alguma parte de seu corpo',
    '{Jogador 1} vai para outro cômodo, todos os jogadores um de cada vez deve ir até o cômodo e o outro jogador deve exibir alguma parte de seu corpo para {jogador 1} ',
    '{Jogador 1} vai para outro cômodo, todos os jogadores um de cada vez deve ir até o cômodo e o {jogador 1} deve beijar a parte do corpo que o outro jogador escolher',
    '{Jogador 1} vai para outro cômodo, todos os jogadores um de cada vez deve ir até o cômodo e o jogador deve beijar a parte do corpo de {jogador 1} onde {jogador 1} escolher',
]

const tempo = [
    '15 segundos',
    '30 segundos',
    '1 minutos',
]

const rodadas = [
    '1 rodada',
    '2 rodadas',
    '3 rodadas',
    '4 rodadas',
    '5 rodadas',
]

document.getElementById('fullscreen').addEventListener('click', (e) => {
    e.preventDefault();

    const container = document.getElementById('container');
    const fullscreenBtn = document.getElementById('fullscreen');

    if (fullscreenBtn.classList.contains('exit')) {
        fullscreenBtn.classList.remove('exit');
    } else {
        fullscreenBtn.classList.add('exit');
    }

    if ((document.fullScreenElement && document.fullScreenElement !== null) ||
        (!document.mozFullScreen && !document.webkitIsFullScreen)) {
        if (container.requestFullScreen) {
            container.requestFullScreen();
        } else if (container.mozRequestFullScreen) {
            container.mozRequestFullScreen();
        } else if (container.webkitRequestFullScreen) {
            container.webkitRequestFullScreen(Element.ALLOW_KEYBOARD_INPUT);
        }

    } else {
        if (document.cancelFullScreen) {
            document.cancelFullScreen();
        } else if (document.mozCancelFullScreen) {
            document.mozCancelFullScreen();
        } else if (document.webkitCancelFullScreen) {
            document.webkitCancelFullScreen();
        }
    }

})
