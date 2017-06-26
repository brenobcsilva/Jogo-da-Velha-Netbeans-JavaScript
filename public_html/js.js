var jogador = 'x';
var jogada = 0;
function chkJogo(id){
    var src = chkSrc(id);
    var cpu = document.getElementById('cpu').checked;
    if(src === "branco.PNG"){
        document.getElementById(id).src = jogador + ".PNG";
        jogada++;
        
        if(chkVitoria()){
            alert("Fim do Jogo! Vitoria do " + jogador);
            location.reload();
        }
        if(jogada >= 9){
            alert(" Empate");
            location.reload();
        }
        if(jogador == 'x'){
            jogador = 'o';
        }else {
            jogador = 'x';
        }
    }
    if(cpu && jogador == 'o'){
        chkJogo(jogadaDoComputador());
    }
}

function jogadaDoComputador(){
    return 'cel' + Math.floor((Math.random() * 9)+1);
}

function chkSrc(id){
    var src=document.getElementById(id).src;
    return src.substring(src.length - 10, src.length);
}


function chkVitoria(){
    if((chkSrc('cel1') == chkSrc('cel2')) && (chkSrc('cel1')== chkSrc('cel3')) && chkSrc('cel1') != 'branco.PNG'){
        return true;
    }
    if((chkSrc('cel4') == chkSrc('cel5')) && (chkSrc('cel4')== chkSrc('cel6')) && chkSrc('cel4') != 'branco.PNG'){
        return true;
    }
    if((chkSrc('cel7') == chkSrc('cel8')) && (chkSrc('cel7')== chkSrc('cel9')) && chkSrc('cel7') != 'branco.PNG'){
        return true;
    }
    if((chkSrc('cel1') == chkSrc('cel4')) && (chkSrc('cel1')== chkSrc('cel7')) && chkSrc('cel1') != 'branco.PNG'){
        return true;
    }
    if((chkSrc('cel2') == chkSrc('cel5')) && (chkSrc('cel2')== chkSrc('cel8')) && chkSrc('cel2') != 'branco.PNG'){
        return true;
    }
    if((chkSrc('cel3') == chkSrc('cel6')) && (chkSrc('cel3')== chkSrc('cel9')) && chkSrc('cel3') != 'branco.PNG'){
        return true;
    }
    if((chkSrc('cel1') == chkSrc('cel5')) && (chkSrc('cel1')== chkSrc('cel9')) && chkSrc('cel1') != 'branco.PNG'){
        return true;
    }
    if((chkSrc('cel3') == chkSrc('cel5')) && (chkSrc('cel3')== chkSrc('cel7')) && chkSrc('cel3') != 'branco.PNG'){
        return true;
    }
    return false;
}