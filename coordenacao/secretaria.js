var alunos = 'EJG1977';

function validar(link) {
  texto = document.querySelector('#senha');
  if (texto === alunos){
    document.querySelectorAll('#tarefas').text(tarefas);
  }
  else {
    document.querySelectorAll('#msgErro').text('Senha incorreta. Tente novamente');
  }
}

var tarefas = `<section class="hero-wrap hero-wrap-2" style="background-image: url('images/gerenciamento-de-tarefas-670x419.png');">
<div class="overlay"></div>
<div class="container">
  <div class="row no-gutters slider-text align-items-center justify-content-center">
    <div class="col-md-9 ftco-animate text-center">
      <h1 class="mb-2 bread">Tarefas</h1>
      <p class="breadcrumbs"><span class="mr-2"><a href="index.html">Home <i
              class="ion-ios-arrow-forward"></i></a></span> <span>Tarefas <i
            class="ion-ios-arrow-forward"></i></span></p>
    </div>
  </div>
</div>
</section>

<section class="ftco-section ftco-no-pt ftc-no-pb">
<div class="container">
  <div class="row">
    <!-- <div class="col-md-5 order-md-last wrap-about py-5 wrap-about bg-light">
      <div class="text px-4 ftco-animate">
        <h2 class="mb-4">Bem vindo ao Colégio Jardim Getsêmani</h2>
        <p>Texto.</p>
        <p>Texto.</p>
        <p><a href="#" class="btn btn-secondary px-4 py-3">Read More</a></p>
      </div>
    </div> -->
    <div class="col-md-7 wrap-about py-5 pr-md-4 ftco-animate">
      <h2 class="mb-4">Selecione a turma: </h2>
      <ul>
        <li><a class= "lista-turmas" href="./tarefas/Berçario.html">Berçário I & II </a></li>
        <li><a class= "lista-turmas" href="./tarefas/turmaII.html">Infantil II (2 anos)</a></li>
        <li><a class= "lista-turmas" href="./tarefas/turmaIII.html">Infantil III (3 anos)</a></li>
        <li><a class= "lista-turmas" href="./tarefas/turmaIV.html">Infantil  IV (4 anos)</a></li>
        <li><a class= "lista-turmas" href="./tarefas/turmaV.html">Infantil  V (5 anos)</a></li>
        <li><a class= "lista-turmas" href="./tarefas/turmaVI.html">1º Ano (6 anos)</a></li>
        <li><a class= "lista-turmas" href="./tarefas/turmaVII.html">2º Ano (7 anos)</a></li>
        <li><a class= "lista-turmas" href="./tarefas/turmaVIII.html">3º Ano (8 anos)</a></li>
        <li><a class= "lista-turmas" href="./tarefas/turmaIX.html">4º Ano (9 anos)</a></li>
      </ul>
      <h2 class="mb-4">Sugestões Pedagógicas: </h2>
      <ul>
        <li><a class= "lista-sugestoes" href="./sugestoes/atividadeludica.pdf">Caderno de atividade lúdica</a></li>
        </ul>
    </div>
    <!-- <div class="col-md-3 ftco-animate">
      <a href="images/image_4.jpg" class="gallery image-popup img d-flex align-items-center"
        style="background-image: url(images/image_4.jpg);">
        <div class="icon mb-4 d-flex align-items-center justify-content-center">
          <span class="icon-instagram"></span>
        </div>
      </a>
    </div> -->
  </div>
</div>
</section>`;
