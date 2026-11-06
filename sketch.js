//cores
let c_rosa = '#F37B89';
let c_amarelo = '#FBEC86';
let c_azul = '#57B0E3';

async function setup() {
  //som
  campainha = await loadSound('/mp3/campainha.MP3');
  erro = await loadSound('/mp3/erro.MP3');
  morte = await loadSound('/mp3/morte.MP3');
  
  //canvas
  let cnv = createCanvas(900, 800);
  let x = (windowWidth - width) / 2;
  let y = (windowHeight - height) / 2;
  cnv.position(x, y);  

}

function draw() {
background('#ffffff');

//triagulos
strokeWeight(0);

  //triangulo rosa
  fill(c_rosa);
  rosa();

  //triangulo amarelo
  fill(c_amarelo);
  amarelo();

  //triangulo azul
  fill(c_azul);
  azul();

}

function mousePressed() {

    if (mouseX >= 65 && mouseX <= 833 && mouseY >= 58 && mouseY <= 744) {  
      
      // Função feita com auxilio de AI (apenas a parte com som)
      if (mouseX < 350) {
      morte.currentTime = 0;
      morte.play().catch(e => {});
    } else if (mouseX < 600) {
      campainha.currentTime = 0;
      campainha.play().catch(e => {});
    } else {
      erro.currentTime = 0;
      erro.play().catch(e => {});
    }
   
    // Função da mudança de cores
    let colors = ['#FBEC86','#57B0E3','#F37B89'];
    let baralharcores = shuffle(colors);
    c_rosa = baralharcores[0];
    c_azul = baralharcores[1];
    c_amarelo = baralharcores[2];

  }

}

// Função feita com auxilio da AI - Modificar a escala dos triangulos
function customTriangle(x1, y1, x2, y2, x3, y3) {
  let cx = (x1 + x2 + x3) / 3;
  let cy = (y1 + y2 + y3) / 3;

  let areaOrig = abs((x2 - x1) * (y3 - y1) - (x3 - x1) * (y2 - y1));
  let area1 = abs((x1 - mouseX) * (y2 - mouseY) - (x2 - mouseX) * (y1 - mouseY));
  let area2 = abs((x2 - mouseX) * (y3 - mouseY) - (x3 - mouseX) * (y2 - mouseY));
  let area3 = abs((x3 - mouseX) * (y1 - mouseY) - (x1 - mouseX) * (y3 - mouseY));
  let isInside = (abs(area1 + area2 + area3 - areaOrig) < 1);
  push();
  if (isInside) {
    translate(cx, cy);
    scale(0.7); 
    translate(-cx, -cy);
  }
  triangle(x1, y1, x2, y2, x3, y3);
  pop();
}

// Triangulos 
function rosa() {
  
//coluna 1
  customTriangle(196, 163, 253, 65, 310, 163);
  customTriangle(394, 58, 451, 157, 507, 58);
  customTriangle(525, 58, 581, 157, 638, 58);

  //coluna 2
  customTriangle(133, 281, 189, 182, 246, 281);
  customTriangle(393, 280, 450, 181, 507, 280);
  customTriangle(526, 279, 582, 181, 639, 279);
  
  //coluna 3
  customTriangle(65, 396, 122, 297, 179, 396);
  customTriangle(262, 290, 319, 388, 376, 290);
  customTriangle(460, 396, 517, 298, 574, 396);
  customTriangle(653, 290, 710, 388, 767, 290);
  
  //coluna 4
  customTriangle(132, 513, 189, 415, 246, 513);
  customTriangle(384, 505, 328, 406, 441, 406);
  customTriangle(525, 514, 582, 416, 638, 514);
  customTriangle(718, 407, 775, 505, 832, 407);
  
  //coluna 5
  customTriangle(319, 620, 375, 522, 262, 522);
  customTriangle(394, 522, 450, 620, 507, 522);
  customTriangle(712, 620, 655, 522, 769, 522);

  //coluna 6
  customTriangle(199, 638, 256, 736, 312, 638);
  customTriangle(395, 744, 452, 645, 509, 744);
  customTriangle(525, 743, 582, 645, 638, 743);

}

function amarelo() {
  //coluna 1
  customTriangle(319, 157, 260, 58, 379, 58);
  customTriangle(458, 163, 515, 64, 572, 163);
  customTriangle(647, 272, 590, 173, 704, 173);
  
  //coluna 2
  customTriangle(196, 173, 253, 272, 309, 173);
  customTriangle(385, 272, 329, 173, 442, 173);
    
  //coluna 3
  customTriangle(196, 396, 253, 298, 310, 396);
  customTriangle(452, 388, 395, 290, 509, 290);
  customTriangle(589, 396, 646, 298, 702, 396);
  customTriangle(719, 396, 776, 297, 833, 396);

  //coluna 4
  customTriangle(66, 407, 122, 505, 179, 407);
  customTriangle(264, 514, 321, 415, 378, 514);
  customTriangle(393, 514, 450, 415, 507, 514);
  customTriangle(655, 514, 712, 416, 768, 514);
    
  //coluna 5
  customTriangle(132, 522, 189, 620, 246, 522);
  customTriangle(328, 628, 385, 530, 442, 628);
  customTriangle(582, 620, 525, 522, 639, 522);
  
  //coluna 6
  customTriangle(264, 743, 321, 645, 378, 743);
  customTriangle(518, 736, 461, 638, 574, 638);
  customTriangle(646, 736, 703, 638, 590, 638);
}

function azul() {
  //coluna 1
  customTriangle(328, 163, 385, 65, 442, 163);
  customTriangle(590, 163, 646, 65, 703, 163);

  //coluna 2
  customTriangle(261, 281, 318, 182, 375, 281);
  customTriangle(516, 272, 459, 174, 572, 174);
  customTriangle(654, 281, 711, 182, 767, 281);
    
  //coluna 3
  customTriangle(132, 290, 188, 388, 245, 290);
  customTriangle(331, 396, 387, 298, 444, 396);
  customTriangle(524, 290, 581, 388, 638, 290);

  //coluna 4
  customTriangle(255, 505, 198, 406, 312, 406);
  customTriangle(459, 406, 516, 505, 573, 406);
  customTriangle(590, 406, 647, 505, 704, 406);
    
  //coluna 5
  customTriangle(197, 628, 253, 529, 310, 628);
  customTriangle(459, 627, 516, 529, 573, 627);
  customTriangle(590, 628, 646, 529, 703, 628);
  
  //coluna 6
  customTriangle(387, 736, 330, 638, 444, 638);
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
