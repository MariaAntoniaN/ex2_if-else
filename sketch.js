
function setup() {
  let cnv = createCanvas(900, 800);
  let x = (windowWidth - width) / 2;
  let y = (windowHeight - height) / 2;
  cnv.position(x, y);  
  background('#ffffff');
}

function draw() {

//triagulos
strokeWeight(0);
rosa();
amarelo();
azul();

// IF/ ELSE
  // Cores
  if (mouseIsPressed === true ) {
    frameRate(0.5);
    let colors = ['#FBEC86','#57B0E3','#F37B89'];
    let baralharcores = shuffle(colors);
    fill(baralharcores[0]);
    rosa();  
    fill(baralharcores[1]);
    azul();
    fill(baralharcores[2]);
    amarelo();

  } else{
    frameRate(60);
    fill('#F37B89');
    rosa();
    fill('#FBEC86');
    amarelo();
    fill('#57B0E3');
    azul();
  }

  //Tamanho
  // if (mouseX < 300 && mouseY < 300) {
  //   rosa.size(0.5);

  // }

}

function rosa() {
  
//coluna 1
  triangle(196, 163, 253, 65, 310, 163);
  triangle(394, 58, 451, 157, 507, 58);
  triangle(525, 58, 581, 157, 638, 58);

  //coluna 2
  triangle(133, 281, 189, 182, 246, 281);
  triangle(393, 280, 450, 181, 507, 280);
  triangle(526, 279, 582, 181, 639, 279);
  
  //coluna 3
  triangle(65, 396, 122, 297, 179, 396);
  triangle(262, 290, 319, 388, 376, 290);
  triangle(460, 396, 517, 298, 574, 396);
  triangle(653, 290, 710, 388, 767, 290);
  
  //coluna 4
  triangle(132, 513, 189, 415, 246, 513);
  triangle(384, 505, 328, 406, 441, 406);
  triangle(525, 514, 582, 416, 638, 514);
  triangle(718, 407, 775, 505, 832, 407);
  
  //coluna 5
  triangle(319, 620, 375, 522, 262, 522);
  triangle(394, 522, 450, 620, 507, 522);
  triangle(712, 620, 655, 522, 769, 522);

  //coluna 6
  triangle(199, 638, 256, 736, 312, 638);
  triangle(395, 744, 452, 645, 509, 744);
  triangle(525, 743, 582, 645, 638, 743);

}

function amarelo() {
  //coluna 1
  triangle(319, 157, 260, 58, 379, 58);
  triangle(458, 163, 515, 64, 572, 163);
  triangle(647, 272, 590, 173, 704, 173);
  
  //coluna 2
  triangle(196, 173, 253, 272, 309, 173);
  triangle(385, 272, 329, 173, 442, 173);
    
  //coluna 3
  triangle(196, 396, 253, 298, 310, 396);
  triangle(452, 388, 395, 290, 509, 290);
  triangle(589, 396, 646, 298, 702, 396);
  triangle(719, 396, 776, 297, 833, 396);

  //coluna 4
  triangle(66, 407, 122, 505, 179, 407);
  triangle(264, 514, 321, 415, 378, 514);
  triangle(393, 514, 450, 415, 507, 514);
  triangle(655, 514, 712, 416, 768, 514);
    
  //coluna 5
  triangle(132, 522, 189, 620, 246, 522);
  triangle(328, 628, 385, 530, 442, 628);
  triangle(582, 620, 525, 522, 639, 522);
  
  //coluna 6
  triangle(264, 743, 321, 645, 378, 743);
  triangle(518, 736, 461, 638, 574, 638);
  triangle(646, 736, 703, 638, 590, 638);
}

function azul() {
  //coluna 1
  triangle(328, 163, 385, 65, 442, 163);
  triangle(590, 163, 646, 65, 703, 163);

  //coluna 2
  triangle(261, 281, 318, 182, 375, 281);
  triangle(516, 272, 459, 174, 572, 174);
  triangle(654, 281, 711, 182, 767, 281);
    
  //coluna 3
  triangle(132, 290, 188, 388, 245, 290);
  triangle(331, 396, 387, 298, 444, 396);
  triangle(524, 290, 581, 388, 638, 290);

  //coluna 4
  triangle(255, 505, 198, 406, 312, 406);
  triangle(459, 406, 516, 505, 573, 406);
  triangle(590, 406, 647, 505, 704, 406);
    
  //coluna 5
  triangle(197, 628, 253, 529, 310, 628);
  triangle(459, 627, 516, 529, 573, 627);
  triangle(590, 628, 646, 529, 703, 628);
  
  //coluna 6
  triangle(387, 736, 330, 638, 444, 638);
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
