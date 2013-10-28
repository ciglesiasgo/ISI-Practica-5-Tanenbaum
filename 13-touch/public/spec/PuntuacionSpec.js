describe("Puntuaciones", function() {

        var canvas, ctx;

        beforeEach(function(){
                loadFixtures('index.html');

                canvas = $('#game')[0];
                expect(canvas).toExist();

                ctx = canvas.getContext('2d');
                expect(ctx).toBeDefined();
                SpriteSheetOrig = SpriteSheet;
                GameOrig = Game;

        });

        afterEach(function() {
                SpriteSheet = SpriteSheetOrig;
                Game = GameOrig;
        });

        it("Ganar Puntos", function() {
                var enemies = {
                   basic: { x: 100, y: -50, sprite: 'enemy_purple', B: 100, C: 2 , E: 100, health: 10 }
                };

                var Points = new GamePoints();
                var enemy = new Enemy(enemies.basic);

                enemy.board = {
			add: function(){},
			remove: function(){ return true;}
		};

                expect(Game.points).toBe(0);
                enemy.hit(10);
                expect(Game.points).toBe(100);
        });

        it("Reinicio de contador", function() {
                var Points = new GamePoints(500);
                loseGame();
                expect(Game.points).toBe(0);
        });

	it("Fireball suma puntos", function() {
		var dt = 30/10000;

                var enemies = {
                   basic: { x: 100, y: -50, sprite: 'enemy_purple', B: 100, C: 2 , E: 100, health: 10 }
                };

                var board = new GameBoard();
                
		var enemy = new Enemy(enemies.basic);
                var fireball = new FireBallB(100,-50);
		fireball.x=100;
		fireball.y=-50;

		board.add(enemy);
                board.add(fireball);
                
                expect(Game.points).toBe(0);
                board.step(dt);
                expect(Game.points).toBe(100);
        });

});
