class Inimigo {
    constructor(x, y, w, h) {
        inimigo = createSprite(x, y, w, h);

        inimigo.addAnimation("Animigo", Animigo);
        inimigo.scale = 0.38;

        inimigo.velocityX = Math.round(random(4, 16));

        this.velocity = createVector(0, 0);

        // Define a velocidade do inimigo com base na posição atual do Spc

        drawSprites();
        inimigos.collide(ground);
        inimigos.collide(ground2);
        inimigos.collide(ground3);
        inimigos.collide(parede);
        inimigos.collide(parede2);
    }
}
