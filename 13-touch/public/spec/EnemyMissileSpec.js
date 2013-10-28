describe("EnemyMissileSpec", function() {

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

        it("Colision Misiles Enemigos", function() {
               
                var misilEnemy = new EnemyMissile(1,1);

                var obj = { hit: function(){} };
                var dummy = {
                		remove: function() {} ,
                                collide: function() { return obj; }
                };

                spyOn(obj, "hit");
                spyOn(dummy, "remove");

		var dt=30/10000;

                var misilEnemigo = new EnemyMissile(1,1);
                misilEnemigo.board = dummy;
                
                misilEnemigo.step(dt);
                expect(dummy.remove).toHaveBeenCalledWith(misilEnemigo);
                expect(obj.hit).toHaveBeenCalledWith(misilEnemigo.damage);

        });

	it("Misil enemigo alcanza miNave", function() {

                SpriteSheet = {
                        map : {ship: { sx: 0, sy: 0, w: 37, h: 42, frames: 1 },
                                         explosion: { sx: 0, sy: 64, w: 64, h: 64, frames: 12 },
                                        enemy_missile: { sx: 9, sy: 42, w: 3, h: 20, frame: 1 } }
                };
                
                var board = new GameBoard();
        
                var missile = new EnemyMissile(1,1);
                
                var ship = new PlayerShip();

		var dt= 30/10000;

                board.add(missile);
                board.add(ship);

                expect(board.objects.length).toBe(2);

                board.step(dt);

                expect(board.objects.length).toBe(1);

                expect(board.objects[0].sprite).toBe('explosion');
        });
});
