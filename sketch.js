var Spc;
var inimigo;
var inimigos;
var inimigos2;
var inimigos3;
var parede, parede2;
function preload() {
    Animigo = loadAnimation(
        "correndoverde1.png",
        "correndoverde2.png",
        "correndoverde3.png",
        "correndoverde4.png",
        "correndoverde5.png",
        "correndoverde6.png"
    );
    pc = loadAnimation(
        "1 crri.png",
        "2 crri.png",
        "3 crri.png",
        "4 crri.png",
        "5 crri.png",
        " 6 crri.png"
    );
    Pparado = loadAnimation("parado1.png", "parado2.png");
    Pparado.frameDelay = 20;
    m1 = loadImage("DE.jpg");
    m2 = loadImage("EM.jpg");
    m3 = loadImage("MD.jpg");
}

function setup() {
    createCanvas(windowWidth, windowHeight);
    var Sm1 = createSprite(windowWidth / 2, windowHeight - 150, 50, 50);
    Sm1.scale = 1.05;
    Sm1.addImage(m1);
    inimigos = new Group();
    inimigos2 = new Group();
    inimigos3 = new Group();

    var Sm2 = createSprite(windowWidth / 2, windowHeight - 444, 50, 50);
    Sm2.scale = 1.05;
    Sm2.addImage(m2);

    var Sm3 = createSprite(windowWidth / 2, windowHeight - 737, 50, 50);
    Sm3.scale = 1.05;
    Sm3.addImage(m3);

    Spc = createSprite(500, 600, 50, 50);
    Spc.addAnimation("pc_parado", Pparado);
    Spc.scale = 0.52;

    Spc.addAnimation("Pc_crri", pc);

    ground = createSprite(windowWidth / 2, windowHeight - 78, width, 5);
    ground.visible = false;

    ground2 = createSprite(windowWidth / 2, windowHeight - 372, width, 5);
    ground2.visible = false;

    ground3 = createSprite(windowWidth / 2, windowHeight - 662, width, 5);
    ground3.visible = false;

    parede = createSprite(windowWidth - 100, windowHeight / 2, 5, height);
    parede.visible = true;

    parede2 = createSprite(100, windowHeight / 2, 5, height);
    parede2.visible = true;

    escada = createSprite(340, windowHeight - 220, 73, 312);
    escada.visible = false;

    escada2 = createSprite(820, 305, 73, 312);
    escada2.visible = false;
}

function draw() {
    background(255, 255, 255);
    drawSprites();

    if (keyIsDown(RIGHT_ARROW)) {
        Spc.changeAnimation("Pc_crri", pc);
        Spc.position.x = Spc.position.x + 7;
        Spc.mirrorX(+1);
    }

    if (keyIsDown(LEFT_ARROW)) {
        Spc.changeAnimation("Pc_crri", pc);
        Spc.position.x = Spc.position.x - 7;
        Spc.mirrorX(-1);
    }

    console.log(Spc.y);
    console.log(Spc.x);
    if (keyIsDown(UP_ARROW) && frameCount % 38 === 0) {
        Spc.changeAnimation("pc_parado", Pparado);
        Spc.position.y = Spc.position.y - 100;
        //Spc.velocityY = -10
    }

    if (Spc.isTouching(escada) && keyIsDown(UP_ARROW)) {
        Spc.position.y = Spc.position.y - 30;
    }

    if (Spc.isTouching(escada2) && keyIsDown(UP_ARROW)) {
        Spc.position.y = Spc.position.y - 30;
    }

    if (frameCount % 130 === 0) {
        inimigo = createSprite(300, 500, 5, 5);
        inimigo2 = createSprite(200, 400, 5, 5);
        inimigo3 = createSprite(200, 450, 5, 5);

        inimigo.addAnimation("Animigo", Animigo);
        inimigo2.addAnimation("Animigo", Animigo);
        inimigo3.addAnimation("Animigo", Animigo);

        inimigo.scale = 0.38;
        inimigo2.scale = 0.38;
        inimigo3.scale = 0.38;

        inimigo.velocityX = Math.round(random(4, 10));
        inimigo2.velocityX = Math.round(random(4, 10));
        inimigo3.velocityX = Math.round(random(4, 10));

        inimigos.add(inimigo);
        inimigos2.add(inimigo2);
        inimigos3.add(inimigo3);
    }

    inimigos.bounceOff(parede);
    inimigos.bounceOff(parede2);

    inimigos2.bounceOff(parede);
    inimigos2.bounceOff(parede2);

    inimigos3.bounceOff(parede);
    inimigos3.bounceOff(parede2);
    Spc.velocityY = Spc.velocityY + 0.5;
    Spc.collide(ground);
    Spc.collide(ground2);
    Spc.collide(ground3);
    Spc.collide(parede);
    Spc.collide(parede2);
}
