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

        it("step()", function() {
               
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
});
