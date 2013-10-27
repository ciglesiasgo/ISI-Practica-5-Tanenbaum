/*

  Requisitos:

    El objetivo de este prototipo es añadir niveles al juego. En cada
    nivel deberán ir apareciendo baterías de enemigos según avanza el
    tiempo.

    Cada nivel termina cuando no quedan enemigos por crear en ninguno
    de sus niveles, y cuando todos los enemigos del nivel han
    desaparecido del tablero de juegos (eliminados por misiles/bolas
    de fuego o desaparecidos por la parte de abajo de la pantalla).

    Cuando terminan todos los niveles sin que la nave haya colisionado
    termina el juego, ganando el jugador.

    Cuando la nave del jugador colisiona con un enemigo debe terminar
    el juego, perdiendo el jugador.


  Especificación:

    El constructor Level() recibirá como argumentos la definición del
    nivel y la función callback a la que llamar cuando termine el
    nivel.

    La definición del nivel tiene este formato:
      [ 
        [ parametros de bateria de enemigos ] , 
        [ parametros de bateria de enemigos ] , 
        ... 
      ]


      Los parámetros de cada batería de enemigos son estos:
             Comienzo (ms),  Fin (ms),   Frecuencia (ms),  Tipo,    Override
   Ejemplo:
           [ 0,              4000,       500,              'step',  { x: 100 } ]


    Cada vez que se llame al método step() del nivel éste comprobará:

      - si ha llegado ya el momento de añadir nuevos sprites de alguna
        de las baterías de enemigos.
    
      - si hay que eliminar alguna batería del nivel porque ya ha
        pasado la ventana de tiempo durante la que hay tiene que crear
        enemigos

      - si hay que terminar porque no quedan baterías de enemigos en
        el nivel ni enemigos en el tablero de juegos.

*/
describe("Clase LevelSpec", function(){
    var canvas, ctx;

    beforeEach(function(){
//        GameOrig = Game;
    	loadFixtures('index.html');
    
    	canvas = $('#game')[0];
    	expect(canvas).toExist();

    	ctx = canvas.getContext('2d');
    	expect(ctx).toBeDefined();
    SpriteSheetOrig= SpriteSheet;


});

    afterEach(function(){
        Game = GameOrig;
        SpriteSheet= SpriteSheetOrig;
    });


    it("pasar el nivel1", function(){

        
        spyOn(window, "startGame").andCallThrough();
        spyOn(window, "playGame");
        spyOn(window, "loseGame");
        spyOn(window, "winGame");

        Game.initialize("game",sprites,startGame);


        Game.keys ={'fire': false};
        waits(100);
                
        // En title pulso fire
        runs(function(){
          expect(window.startGame).toHaveBeenCalled(); 
          expect(window.playGame).not.toHaveBeenCalled(); 
          Game.keys = {'fire':true};  
        });
                        
        waits(100);
                
        // Suelto fire y empezara el juego
        runs(function(){
          Game.keys = {'fire':false};
          expect(window.playGame).toHaveBeenCalled(); 
        });

        waits(1000);
        
        runs(function(){
            //Game.keys = {'left':true};
            expect(window.loseGame).toHaveBeenCalled(); //Termina el nivel 1
        });
    });
});






