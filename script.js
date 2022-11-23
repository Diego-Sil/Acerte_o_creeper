var tela = document.querySelector('canvas');
        var pincel = tela.getContext('2d');
        var marcador = document.querySelector('#pontuacao');
        var xAleatorio;
        var yAleatorio;
        var pontos = 0


        function limpaTela(){

            pincel.clearRect(0, 0, 2000, 800);
        }

        function desenhaCreep(x,y){

            pincel.fillStyle = 'darkgreen'
            pincel.fillRect(x, y, 350, 300);
            //olho esquerdo
            pincel.fillStyle = 'black'
            pincel.fillRect((x + 50),(y + 50), 90, 90);
            //olho direito
            pincel.fillRect((x + 210),y +  50, 90, 90);
            //nariz
            pincel.fillRect(x + 140,y +  140, 70, 100);
            //canto esquerdo da boca
            pincel.fillRect(x + 100,y +  190, 40, 110);
            //canto direto da boca
            pincel.fillRect(x + 210,y +  190, 40, 110);
        }    

        function sorteiaPosicao(maximo){
            return Math.floor(Math.random() * maximo);
        }
        function atualizaTela(){
            limpaTela()
            xAleatorio = sorteiaPosicao(1600);
            yAleatorio = sorteiaPosicao(500);
            desenhaCreep(xAleatorio, yAleatorio);
        }

        setInterval(atualizaTela,2000)

        function dispara(evento){
            var x = evento.pageX - tela.offsetLeft;
            var y = evento.pageY - tela.offsetTop;
            if (( x > xAleatorio) && (x < xAleatorio + 300) && (y > yAleatorio ) && (y < yAleatorio + 300)){
                alert('Acertou!')
                pontos ++;
                marcador.innerHTML = ('PONTOS: '+ pontos)
            }
            console.log(pontos)

        }

        tela.onclick = dispara;
