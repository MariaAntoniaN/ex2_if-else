# Exercicio 2 - IF E ELSE

Neste exercício, após muita indecisão, decidi criar uma composição a partir de triângulos multicoloridos, que juntos criam um pentágono.
Em meus objetivos, defini que os triângulos mudassem de cor entre si de acordo com seu grupo e, ao aproximar o rato, a sua presença os afeta, diminuindo o seu tamanho, e clicar nos triângulos e produzir sons para criar uma sinfonia.
Para mudar a cor, usei de base o que já tinha feito no exercício anterior, mas esta tarefa não se mostrou fácil,pois eu queria que a cor só mudasse quando se clicasse nos triângulos. A solução a que cheguei foi criar uma função própria para mousePressed para dar indicações da zona na qual a condição devia ser ativada. 
Outros dois problemas que tive ao usar originalmente o random foram as cores repetirem-se entre os grupos. Foi na pesquisa para encontrar soluções que encontrei o shuffle(). O outro foi ter de criar grupos através da função para o if não ficar caótico.
Em seguida, tentei criar o efeito de diminuir primeiro com o size(), depois com o scale(), baseado no exemplo que encontrei no site da p5.js, mas não estava a conseguir criar o efeito por conta própria, então usei o Gemini para fazer a condição com o prompt de  “como eu faço para, quando passar o rato em cima de um dos triângulos, ele diminuir de tamanho”.
Por fim o efeito musical que por algum motivo não funciona na página online mesmo a pasta com os áudios esteja no repositório. Originalmente, tinha a intenção de que cada grupo tivesse um som específico, mas isso mostrou-se impossível para minha compreensão. Por isso, usei o Gemini outra vez, pois dependendo do lado do Pentágono em que o utilizador clica, um diferente som vai emergir. Sendo a função a única parte usei a IA, para fazer o loadSound() baseei-me no próprio site da p5.js.  

# Referências
https://p5js.org/reference/p5/random/ 
https://p5js.org/reference/p5/if/ 
https://p5js.org/reference/p5/Boolean/ 
https://p5js.org/reference/p5/Number/ 
https://p5js.org/reference/p5/shuffle/ 
https://editor.p5js.org/melisa_cald/sketches/r1QwbX2JQ 
https://p5js.org/reference/p5/scale/ 
https://p5js.org/reference/p5/loadSound/ 
