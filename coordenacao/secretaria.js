var alunos = '1234';

function validar() {
  console.log('teste');
  var divErro = document.querySelector('#msgErro');
  divErro.innerHTML = '';
  var texto = document.querySelector('#senha').value;
  console.log(texto);

  if (texto == alunos) {
    document.querySelector('#datas').innerHTML = datas;
  }
  else {

    divErro.innerHTML = 'Senha incorreta. Tente novamente';
  }
}

function validarTarefas() {
  var divErro = document.querySelector('#msgErro');
  divErro.innerHTML = '';
  var texto = document.querySelector('#senha').value;
  var turma = document.querySelector('#turma').value;

  if (texto == alunos) {
    document.querySelector('#tarefas').innerHTML = getTurma(turma);
  }
  else {

    divErro.innerHTML = 'Senha incorreta. Tente novamente';
  }

}

var datas = `<section class="hero-wrap hero-wrap-2"
style="background-image: url('images/279359-saiba-como-sua-radio-pode-vender-mais-na-pascoa-636x363.jpg');">
<div class="overlay"></div>
<div class="container">
    <div class="row no-gutters slider-text align-items-center justify-content-center">
        <div class="col-md-9  text-center">
            <h1 class="mb-2 bread">Semana da Páscoa</h1>
            <p class="breadcrumbs"><span class="mr-2"><a href="index.html">Home <i
                            class="ion-ios-arrow-forward"></i></a></span> <span> Semana da Páscoa <i
                        class="ion-ios-arrow-forward"></i></span></p>
        </div>
    </div>
</div>
</section>
<section class="ftco-section ftco-no-pt ftc-no-pb">
<div class="container">
    <div class="row">
        <!-- <div class="col-md-5 order-md-last wrap-about py-5 wrap-about bg-light">
  <div class="text px-4 ">
    <h2 class="mb-4">Bem vindo ao Colégio Jardim Getsêmani</h2>
    <p>Texto.</p>
    <p>Texto.</p>
    <p><a href="#" class="btn btn-secondary px-4 py-3">Read More</a></p>
  </div>
</div> -->
        <div class="col-md-7 wrap-about py-5 pr-md-4">
            <h2 class="mb-4">Semana da Páscoa (video 01) </h2>
            <h3 class="mb-4"> Amor Escrito com sangue</h3>
            <div class="video-container">

                <iframe width="1311" height="480" src="https://www.youtube.com/embed/0cVGDSOOaYg"
                    frameborder="0"
                    allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                    allowfullscreen></iframe>

            </div>
            <h2 class="mb-4">Semana da Páscoa (video 02) </h2>
            <h3 class="mb-4">Cristo, nosso criador </h3>
            <div class="video-container">

                <iframe width="1311" height="480" src="https://www.youtube.com/embed/0tPfRLcjVf4"
                    frameborder="0"
                    allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                    allowfullscreen></iframe>

            </div>
            <h2 class="mb-4">Semana da Páscoa (video 03) </h2>
            <h3 class="mb-4"> Cristo nosso substituto</h3>
            <div class="video-container">

                <iframe width="1311" height="480" src="https://www.youtube.com/embed/V2l1CSrFlvA"
                    frameborder="0"
                    allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                    allowfullscreen></iframe>

            </div>
            <h2 class="mb-4">Semana da Páscoa (video 04) </h2>
            <h3 class="mb-4"> Cristo, nosso primogênito</h3>
            <div class="video-container">

                <iframe width="1311" height="480" src="https://www.youtube.com/embed/cfWlDB65e3A"
                    frameborder="0"
                    allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                    allowfullscreen></iframe>

            </div>
            <h2 class="mb-4">Semana da Páscoa (video 05) </h2>
            <h3 class="mb-4"> Cristo, nossa oferta</h3>
            <div class="video-container">

                <iframe width="1311" height="480" src="https://www.youtube.com/embed/4aan0msq5P0"
                    frameborder="0"
                    allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                    allowfullscreen></iframe>

            </div>
            <h2 class="mb-4">Semana da Páscoa (video 06) </h2>
            <h3 class="mb-4"> Cristo, nosso Advogado</h3>
            <div class="video-container">

                <iframe width="1311" height="480" src="https://www.youtube.com/embed/R8NVlz3Ngqg"
                    frameborder="0"
                    allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                    allowfullscreen></iframe>
            </div>
        </div>
        <h2 class="mb-4">Semana da Páscoa: </h2>
        <h3 class="mb-4"> A cada dia será postado um novo vídeo referente a semana da Páscoa, em seguida disponível para
            download ideias caseiras para crianças, caderno de atividades e livro A história da páscoa. </h3>
        <ul>
            <li><a class="lista-sugestoes" href="./sugestoes/SemanaSanta.pdf">Caderno de atividades</a></li>
            <li><a class="lista-sugestoes" href="./sugestoes/IdeiasCaseiras.pdf">Ideias caseiras para crianças</a></li>
            <li><a class="lista-sugestoes" href="./sugestoes/AHistóriadaPáscoa.pdf">A hitória da Páscoa</a></li>
        </ul>
        </div>
</section>`;

function getTurma(turma) {
  if (turma == 1) {
    return (bercario);
  }
  if (turma == 2) {
    return (turma2);
  }
  if (turma == 3) {
    return (turma3);
  }
  if (turma == 4) {
    return (turma4);
  }
  if (turma == 5) {
    return (turma5);
  }
  if (turma == 6) {
    return (turma6);
  }
  if (turma == 7) {
    return (turma7);
  }
  if (turma == 8) {
    return (turma8);
  }
  if (turma == 9) {
    return (turma9);
  }
}

var bercario = ` <section class="hero-wrap hero-wrap-2"
style="background-image: url('./images/gerenciamento-de-tarefas-670x419.png');">
<div class="overlay"></div>
<div class="container">
    <div class="row no-gutters slider-text align-items-center justify-content-center">
        <div class="col-md-9  text-center">
            <h1 class="mb-2 bread">Tarefas</h1>
            <p class="breadcrumbs"><span class="mr-2"><a href="./index.html">Home <i
                            class="ion-ios-arrow-forward"></i></a></span> <span>Tarefas <i
                        class="ion-ios-arrow-forward"></i></span> <span>Berçário I & II <i
                        class="ion-ios-arrow-forward"></i></span>
            </p>
        </div>
    </div>
</div>
</section>

<section class="ftco-section ftco-no-pt ftc-no-pb">
<div class="container">
  <div class="row">
    <!-- <div class="col-md-5 order-md-last wrap-about py-5 wrap-about bg-light">
      <div class="text px-4 ">
        <h2 class="mb-4">Bem vindo ao Colégio Jardim Getsêmani</h2>
        <p>Texto.</p>
        <p>Texto.</p>
        <p><a href="#" class="btn btn-secondary px-4 py-3">Read More</a></p>
      </div>
    </div> -->
    <div class="col-md-7 wrap-about py-5 pr-md-4 ">
      <h2 class="mb-4">Vídeo Aula semanal </h2>
      <h3 class=mb-4> Educação Infantil</h3>
      <h3 class=mb-4> Berçário I & II </h3>


    </div>
    <!-- <div class="col-md-3 ">
      <a href="images/image_4.jpg" class="gallery image-popup img d-flex align-items-center"
        style="background-image: url(images/image_4.jpg);">
        <div class="icon mb-4 d-flex align-items-center justify-content-center">
          <span class="icon-instagram"></span>
        </div>
      </a>
    </div> -->
  </div>
</div>
</section>

<div class="col-md-7 wrap-about py-5 pr-md-4 ">
<div class="video-container">

  <iframe width="1311" height="480" src="https://www.youtube.com/embed/kZvow_QvuJo" frameborder="0"
    allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

</div>

<section class="ftco-section ftco-no-pt ftc-no-pb">
<div class="container">
    <div class="row">
        <!-- <div class="col-md-5 order-md-last wrap-about py-5 wrap-about bg-light">
  <div class="text px-4 ">
    <h2 class="mb-4">Bem vindo ao Colégio Jardim Getsêmani</h2>
    <p>Texto.</p>
    <p>Texto.</p>
    <p><a href="#" class="btn btn-secondary px-4 py-3">Read More</a></p>
  </div>
</div> -->
        <div class="col-md-7 wrap-about py-5 pr-md-4 ">
            <h2 class="mb-4">Tarefa semanal 02 - 06/abril até 10/abril</h2>
            <h3 class=mb-4> Educação Infantil</h3>
            <h3 class=mb-4> Berçário I & II </h3>
           <!-- <p>Clique nas imagens para baixar a tarefa</p>-->
        </div>

        <div class="col-md-7 wrap-about py-5 pr-md-4 ">
            <h2 class="mb-4">Vídeos da Tarefa semanal (vídeo 01) </h2>
            <h3 class= "mb-6">Faça o desenho do CARANGUEJO com o auxílio da mamãe e DEPOIS COLE COM PAPEL LARANJA.</h3>
            <div class="video-container">

                <iframe width="1311" height="480" src="https://www.youtube.com/embed/h9DDiQLAVW0"
                    frameborder="0"
                    allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                    allowfullscreen></iframe>

            </div>
            <h2 class="mb-4">Vídeos da Tarefa semanal (vídeo 02) </h2>
            <h3 class="mb-4">Faça um painel de CORES com ajuda da mamãe. CAPRICHE!</h3>
            <div class="video-container">

                <iframe width="1311" height="480" src="https://www.youtube.com/embed/Qoxg3pmM4DI"
                    frameborder="0"
                    allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                    allowfullscreen></iframe>

            </div>
        </div>
    </div>
</se        ction>`;

var turma2 = `<section class="hero-wrap hero-wrap-2"
style="background-image: url('./images/gerenciamento-de-tarefas-670x419.png');">
<div class="overlay"></div>
<div class="container">
  <div class="row no-gutters slider-text align-items-center justify-content-center">
    <div class="col-md-9  text-center">
      <h1 class="mb-2 bread">Tarefas</h1>
      <p class="breadcrumbs"><span class="mr-2"><a href="./index.html">Home <i
              class="ion-ios-arrow-forward"></i></a></span> <span>Tarefas <i
            class="ion-ios-arrow-forward"></i></span> <span>Turma II <i class="ion-ios-arrow-forward"></i></span>
      </p>
    </div>
  </div>
</div>
</section>

<section class="ftco-section ftco-no-pt ftc-no-pb">
<div class="container">
  <div class="row">
    <!-- <div class="col-md-5 order-md-last wrap-about py-5 wrap-about bg-light">
      <div class="text px-4 ">
        <h2 class="mb-4">Bem vindo ao Colégio Jardim Getsêmani</h2>
        <p>Texto.</p>
        <p>Texto.</p>
        <p><a href="#" class="btn btn-secondary px-4 py-3">Read More</a></p>
      </div>
    </div> -->
    <div class="col-md-7 wrap-about py-5 pr-md-4 ">
      <h2 class="mb-4">Vídeo Aula semanal </h2>
      <h3 class=mb-4> Educação Infantil</h3>
      <h3 class=mb-4> Turma Infantil II (2 anos)</h3>


    </div>
    <!-- <div class="col-md-3 ">
      <a href="images/image_4.jpg" class="gallery image-popup img d-flex align-items-center"
        style="background-image: url(images/image_4.jpg);">
        <div class="icon mb-4 d-flex align-items-center justify-content-center">
          <span class="icon-instagram"></span>
        </div>
      </a>
    </div> -->
  </div>
</div>
</section>

<div class="col-md-7 wrap-about py-5 pr-md-4 ">
<div class="video-container">

  <iframe width="1311" height="480" src="https://www.youtube.com/embed/kZvow_QvuJo" frameborder="0"
    allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

</div>

<h3> Vídeo aula 01</h3>
<div class="video-container">

  <iframe width="1311" height="480" src="https://www.youtube.com/embed/Djl6rMmzl7M" frameborder="0"
    allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

</div>


<h3> Vídeo aula 02</h3>
<div class="video-container">

  <iframe width="1311" height="480" src="https://www.youtube.com/embed/fUNoZc_FY1k" frameborder="0"
    allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

</div>

<section class="ftco-section ftco-no-pt ftc-no-pb">
  <div class="container">
    <div class="row">
      <!-- <div class="col-md-5 order-md-last wrap-about py-5 wrap-about bg-light">
      <div class="text px-4 ">
        <h2 class="mb-4">Bem vindo ao Colégio Jardim Getsêmani</h2>
        <p>Texto.</p>
        <p>Texto.</p>
        <p><a href="#" class="btn btn-secondary px-4 py-3">Read More</a></p>
      </div>
    </div> -->
      <div class="col-md-7 wrap-about py-5 pr-md-4 ">
        <h2 class="mb-4">Tarefa semanal 02 - 06/abril até 10/abril</h2>
        <h3 class=mb-4> Educação Infantil</h3>
        <h3 class=mb-4> Turma Infantil II (2 anos)</h3>
        <p>Clique nas imagens para baixar a tarefa</p>

      </div>
      <!-- <div class="col-md-3 ">
      <a href="images/image_4.jpg" class="gallery image-popup img d-flex align-items-center"
        style="background-image: url(images/image_4.jpg);">
        <div class="icon mb-4 d-flex align-items-center justify-content-center">
          <span class="icon-instagram"></span>
        </div>
      </a>
    </div> -->
    </div>
  </div>
</section>

<section>
  <div class="container">
    <div class="row">
      <div class="col-sm">
        <a href="./images/infantil2/semana2/img1.jpg" download> <img class="img-fluid"
            src="./images/infantil2/semana2/img1.jpg" alt=""></a>
      </div>
      <div class="col-sm">
        <a href="./images/infantil2/semana2/img2.jpg" download> <img class="img-fluid"
            src="./images/infantil2/semana2/img2.jpg" alt=""></a>
      </div>
    </div>
    <div class="row">
      <div class="col-sm">
        <a href="./images/infantil2/semana2/img3.jpg" download> <img class="img-fluid"
            src="./images/infantil2/semana2/img3.jpg" alt=""></a>
      </div>
    </div>
  </div>


  <section class="ftco-section ftco-no-pt ftc-no-pb">
    <div class="container">
      <div class="row">
        <!-- <div class="col-md-5 order-md-last wrap-about py-5 wrap-about bg-light">
      <div class="text px-4 ">
        <h2 class="mb-4">Bem vindo ao Colégio Jardim Getsêmani</h2>
        <p>Texto.</p>
        <p>Texto.</p>
        <p><a href="#" class="btn btn-secondary px-4 py-3">Read More</a></p>
      </div>
    </div> -->
        <div class="col-md-7 wrap-about py-5 pr-md-4 ">
          <h2 class="mb-4">Tarefa semanal 01 - 30/março até 03/abril</h2>
          <h3 class=mb-4> Educação Infantil</h3>
          <h3 class=mb-4> Turma Infantil II (2 anos)</h3>
          <p>Clique nas imagens para baixar a tarefa</p>

        </div>
        <!-- <div class="col-md-3 ">
      <a href="images/image_4.jpg" class="gallery image-popup img d-flex align-items-center"
        style="background-image: url(images/image_4.jpg);">
        <div class="icon mb-4 d-flex align-items-center justify-content-center">
          <span class="icon-instagram"></span>
        </div>
      </a>
    </div> -->
      </div>
    </div>
  </section>

  <section>
    <div class="container">
      <div class="row">
        <div class="col-sm">
          <a href="./images/infantil2/semana1/img1.jpg" download> <img class="img-fluid"
              src="./images/infantil2/semana1/img1.jpg" alt=""></a>
        </div>
        <div class="col-sm">
          <a href="./images/infantil2/semana1/img2.jpg" download> <img class="img-fluid"
              src="./images/infantil2/semana1/img2.jpg" alt=""></a>
        </div>
      </div>
      <div class="row">
        <div class="col-sm">
          <a href="./images/infantil2/semana1/img3.jpg" download> <img class="img-fluid"
              src="./images/infantil2/semana1/img3.jpg" alt=""></a>
        </div>
        <div class="col-sm">
          <a href="./images/infantil2/semana1/img4.jpg" download> <img class="img-fluid"
              src="./images/infantil2/semana1/img4.jpg" alt=""></a>
        </div>
      </div>
    </div>

    <div class="col-md-7 wrap-about py-5 pr-md-4 ">
      <h2 class="mb-4">Vídeos da Tarefa semanal (4 vídeos) </h2>
      <div class="video-container">

        <iframe width="853" height="480" src="https://www.youtube.com/embed/kdQ96ZV3PS4" frameborder="0"
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

      </div>

      <div class="video-container">

        <iframe width="853" height="480" src="https://www.youtube.com/embed/ZBX1oXkUExY" frameborder="0"
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

      </div>
      <div class="video-container">

        <iframe width="853" height="480" src="https://www.youtube.com/embed/e-4OJ88DGrc" frameborder="0"
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

      </div>

      <div class="video-container">

        <iframe width="853" height="480" src="https://www.youtube.com/embed/ZDhTzXuGUNw" frameborder="0"
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

      </div>
    </div>
  </section>
`;

var turma3 = `<section class="hero-wrap hero-wrap-2"
style="background-image: url('./images/gerenciamento-de-tarefas-670x419.png');">
<div class="overlay"></div>
<div class="container">
  <div class="row no-gutters slider-text align-items-center justify-content-center">
    <div class="col-md-9  text-center">
      <h1 class="mb-2 bread">Tarefas</h1>
      <p class="breadcrumbs"><span class="mr-2"><a href="./index.html">Home <i
              class="ion-ios-arrow-forward"></i></a></span> <span>Tarefas <i
            class="ion-ios-arrow-forward"></i></span> <span>Turma III <i class="ion-ios-arrow-forward"></i></span>
      </p>
    </div>
  </div>
</div>
</section>

<section class="ftco-section ftco-no-pt ftc-no-pb">
<div class="container">
  <div class="row">
    <!-- <div class="col-md-5 order-md-last wrap-about py-5 wrap-about bg-light">
      <div class="text px-4 ">
        <h2 class="mb-4">Bem vindo ao Colégio Jardim Getsêmani</h2>
        <p>Texto.</p>
        <p>Texto.</p>
        <p><a href="#" class="btn btn-secondary px-4 py-3">Read More</a></p>
      </div>
    </div> -->
    <div class="col-md-7 wrap-about py-5 pr-md-4 ">
      <h2 class="mb-4">Vídeo Aula semanal </h2>
      <h3 class=mb-4> Educação Infantil</h3>
      <h3 class=mb-4> Turma Infantil III (3 anos)</h3>


    </div>
    <!-- <div class="col-md-3 ">
      <a href="images/image_4.jpg" class="gallery image-popup img d-flex align-items-center"
        style="background-image: url(images/image_4.jpg);">
        <div class="icon mb-4 d-flex align-items-center justify-content-center">
          <span class="icon-instagram"></span>
        </div>
      </a>
    </div> -->
  </div>
</div>
</section>

<div class="col-md-7 wrap-about py-5 pr-md-4 ">
<div class="video-container">

  <iframe width="1311" height="480" src="https://www.youtube.com/embed/kZvow_QvuJo" frameborder="0"
    allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

</div>

<h3> Vídeo aula 01</h3>
<div class="video-container">

  <iframe width="1311" height="480" src="https://www.youtube.com/embed/Djl6rMmzl7M" frameborder="0"
    allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

</div>


<h3> Vídeo aula 02</h3>
<div class="video-container">

  <iframe width="1311" height="480" src="https://www.youtube.com/embed/fUNoZc_FY1k" frameborder="0"
    allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

</div>

<section class="ftco-section ftco-no-pt ftc-no-pb">
<div class="container">
  <div class="row">
    <!-- <div class="col-md-5 order-md-last wrap-about py-5 wrap-about bg-light">
      <div class="text px-4 ">
        <h2 class="mb-4">Bem vindo ao Colégio Jardim Getsêmani</h2>
        <p>Texto.</p>
        <p>Texto.</p>
        <p><a href="#" class="btn btn-secondary px-4 py-3">Read More</a></p>
      </div>
    </div> -->
    <div class="col-md-7 wrap-about py-5 pr-md-4 ">
      <h2 class="mb-4">Tarefa semanal 02 - 06/abril até 10/abril</h2>
      <h3 class=mb-4> Educação Infantil</h3>
      <h3 class=mb-4> Turma Infantil III (3 anos)</h3>
      <p>Clique nas imagens para baixar a tarefa</p>
    </div>
    <!-- <div class="col-md-3 ">
      <a href="images/image_4.jpg" class="gallery image-popup img d-flex align-items-center"
        style="background-image: url(images/image_4.jpg);">
        <div class="icon mb-4 d-flex align-items-center justify-content-center">
          <span class="icon-instagram"></span>
        </div>
      </a>
    </div> -->
  </div>
</div>
</section>


<section>
<div class="container">
  <div class="row">
    <div class="col-sm">
      <a href="./images/infantil3/semana2/img1.jpg" download><img class="img-fluid"
          src="./images/infantil3/semana2/img1.jpg" alt="">
      </a>
    </div>
    <div class="col-sm">
      <a href="./images/infantil3/semana2/img2.jpg" download> <img class="img-fluid"
          src="./images/infantil3/semana2/img2.jpg" alt=""></a>
    </div>
  </div>
  <div class="row">
    <div class="col-sm">
      <a href="./images/infantil3/semana2/img3.jpg" download> <img class="img-fluid"
          src="./images/infantil3/semana2/img3.jpg" alt=""></a>
    </div>
    <div class="col-sm">
      <a href="./images/infantil3/semana2/img4.jpg" download> <img class="img-fluid"
          src="./images/infantil3/semana2/img4.jpg" alt=""></a>
    </div>
  </div>
  <div class="row">
    <div class="col-sm">
      <a href="./images/infantil3/semana2/img5.jpg" download> <img class="img-fluid"
          src="./images/infantil3/semana2/img5.jpg" alt=""></a>
    </div>
    <div class="col-sm">
      <a href="./images/infantil3/semana2/img6.jpg" download> <img class="img-fluid"
          src="./images/infantil3/semana2/img6.jpg" alt=""></a>
    </div>
  </div>
</div>
</section>



<section class="ftco-section ftco-no-pt ftc-no-pb">
<div class="container">
  <div class="row">
    <!-- <div class="col-md-5 order-md-last wrap-about py-5 wrap-about bg-light">
      <div class="text px-4 ">
        <h2 class="mb-4">Bem vindo ao Colégio Jardim Getsêmani</h2>
        <p>Texto.</p>
        <p>Texto.</p>
        <p><a href="#" class="btn btn-secondary px-4 py-3">Read More</a></p>
      </div>
    </div> -->
    <div class="col-md-7 wrap-about py-5 pr-md-4 ">
      <h2 class="mb-4">Tarefa semanal 01 - 30/março até 03/abril</h2>
      <h3 class=mb-4> Educação Infantil</h3>
      <h3 class=mb-4> Turma Infantil III (3 anos)</h3>
      <p>Clique nas imagens para baixar a tarefa</p>
    </div>
    <!-- <div class="col-md-3 ">
      <a href="images/image_4.jpg" class="gallery image-popup img d-flex align-items-center"
        style="background-image: url(images/image_4.jpg);">
        <div class="icon mb-4 d-flex align-items-center justify-content-center">
          <span class="icon-instagram"></span>
        </div>
      </a>
    </div> -->
  </div>
</div>
</section>

<section>
<div class="container">
  <div class="row">
    <div class="col-sm">
      <a href="./images/infantil3/semana1/img1.jpg" download> <img class="img-fluid"
          src="./images/infantil3/semana1/img1.jpg" alt="">
      </a>
    </div>
    <div class="col-sm">
      <a href="./images/infantil3/semana1/img2.jpg" download> <img class="img-fluid"
          src="./images/infantil3/semana1/img2.jpg" alt=""></a>
    </div>
  </div>
  <div class="row">
    <div class="col-sm">
      <a href="./images/infantil3/semana1/img3.jpg" download> <img class="img-fluid"
          src="./images/infantil3/semana1/img3.jpg" alt=""></a>
    </div>
    <div class="col-sm">
      <a href="./images/infantil3/semana1/img4.jpg" download> <img class="img-fluid"
          src="./images/infantil3/semana1/img4.jpg" alt=""></a>
    </div>
  </div>
  <div class="row">
    <div class="col-sm">
      <a href="./images/infantil3/semana1/img5.jpg" download> <img class="img-fluid"
          src="./images/infantil3/semana1/img5.jpg" alt=""></a>
    </div>
    <div class="col-sm">
      <a href="./images/infantil3/semana1/img6.jpg" download> <img class="img-fluid"
          src="./images/infantil3/semana1/img6.jpg" alt=""></a>
    </div>
  </div>
  <div class="row">
    <div class="col-sm">
      <a href="./images/infantil3/semana1/img7.jpg" download> <img class="img-fluid"
          src="./images/infantil3/semana1/img7.jpg" alt=""></a>
    </div>
    <div class="col-sm">
      <a href="./images/infantil3/semana1/img8.jpg" download> <img class="img-fluid"
          src="./images/infantil3/semana1/img8.jpg" alt=""></a>
    </div>
  </div>
</div>
</section>
`;

var turma4 = `  <section class="hero-wrap hero-wrap-2"
style="background-image: url('./images/gerenciamento-de-tarefas-670x419.png');">
<div class="overlay"></div>
<div class="container">
  <div class="row no-gutters slider-text align-items-center justify-content-center">
    <div class="col-md-9  text-center">
      <h1 class="mb-2 bread">Tarefas</h1>
      <p class="breadcrumbs"><span class="mr-2"><a href="./index.html">Home <i
              class="ion-ios-arrow-forward"></i></a></span> <span>Tarefas <i
            class="ion-ios-arrow-forward"></i></span> <span>Turma IV <i class="ion-ios-arrow-forward"></i></span>
      </p>
    </div>
  </div>
</div>
</section>

<section class="ftco-section ftco-no-pt ftc-no-pb">
<div class="container">
  <div class="row">
    <!-- <div class="col-md-5 order-md-last wrap-about py-5 wrap-about bg-light">
      <div class="text px-4 ">
        <h2 class="mb-4">Bem vindo ao Colégio Jardim Getsêmani</h2>
        <p>Texto.</p>
        <p>Texto.</p>
        <p><a href="#" class="btn btn-secondary px-4 py-3">Read More</a></p>
      </div>
    </div> -->
    <div class="col-md-7 wrap-about py-5 pr-md-4 ">
      <h2 class="mb-4">Vídeo Aula semanal </h2>
      <h3 class=mb-4> Educação Infantil</h3>
      <h3 class=mb-4> Turma Infantil IV (4 anos)</h3>


    </div>
    <!-- <div class="col-md-3 ">
      <a href="images/image_4.jpg" class="gallery image-popup img d-flex align-items-center"
        style="background-image: url(images/image_4.jpg);">
        <div class="icon mb-4 d-flex align-items-center justify-content-center">
          <span class="icon-instagram"></span>
        </div>
      </a>
    </div> -->
  </div>
</div>
</section>

<div class="col-md-7 wrap-about py-5 pr-md-4 ">
<div class="video-container">

  <iframe width="1311" height="480" src="https://www.youtube.com/embed/kZvow_QvuJo" frameborder="0"
    allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

</div>

<h3> Vídeo aula 01</h3>
<div class="video-container">

  <iframe width="1311" height="480" src="https://www.youtube.com/embed/aceTS2Z4F-M" frameborder="0"
    allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

</div>

<section class="ftco-section ftco-no-pt ftc-no-pb">
  <div class="container">
    <div class="row">
      <!-- <div class="col-md-5 order-md-last wrap-about py-5 wrap-about bg-light">
      <div class="text px-4 ">
        <h2 class="mb-4">Bem vindo ao Colégio Jardim Getsêmani</h2>
        <p>Texto.</p>
        <p>Texto.</p>
        <p><a href="#" class="btn btn-secondary px-4 py-3">Read More</a></p>
      </div>
    </div> -->
      <div class="col-md-7 wrap-about py-5 pr-md-4 ">
        <h2 class="mb-4">Tarefa semanal 02 - 06/abril até 10/abril</h2>
        <h3 class=mb-4> Educação Infantil</h3>
        <h3 class=mb-4> Turma Infantil IV (4 anos)</h3>
        <p>Clique nas imagens para baixar a tarefa</p>
      </div>
      <!-- <div class="col-md-3 ">
      <a href="images/image_4.jpg" class="gallery image-popup img d-flex align-items-center"
        style="background-image: url(images/image_4.jpg);">
        <div class="icon mb-4 d-flex align-items-center justify-content-center">
          <span class="icon-instagram"></span>
        </div>
      </a>
    </div> -->
    </div>
  </div>
</section>



<section>
  <div class="container">
    <div class="row">
      <div class="col-sm">
        <a href="./images/infantil4/semana2/img1.jpg" download><img class="img-fluid"
            src="./images/infantil4/semana2/img1.jpg" alt="">
        </a>
      </div>
      <div class="col-sm">
        <a href="./images/infantil4/semana2/img2.jpg" download> <img class="img-fluid"
            src="./images/infantil4/semana2/img2.jpg" alt=""></a>
      </div>
    </div>
    <div class="row">
      <div class="col-sm">
        <a href="./images/infantil4/semana2/img3.jpg" download> <img class="img-fluid"
            src="./images/infantil4/semana2/img3.jpg" alt=""></a>
      </div>
      <div class="col-sm">
        <a href="./images/infantil4/semana2/img4.jpg" download> <img class="img-fluid"
            src="./images/infantil4/semana2/img4.jpg" alt=""></a>
      </div>
    </div>
    <div class="row">
      <div class="col-sm">
        <a href="./images/infantil4/semana2/img5.jpg" download> <img class="img-fluid"
            src="./images/infantil4/semana2/img5.jpg" alt=""></a>
      </div>
      <div class="col-sm">
        <a href="./images/infantil4/semana2/img6.jpg" download> <img class="img-fluid"
            src="./images/infantil4/semana2/img6.jpg" alt=""></a>
      </div>
    </div>
  </div>
</section>



<section class="ftco-section ftco-no-pt ftc-no-pb">
  <div class="container">
    <div class="row">
      <!-- <div class="col-md-5 order-md-last wrap-about py-5 wrap-about bg-light">
      <div class="text px-4 ">
        <h2 class="mb-4">Bem vindo ao Colégio Jardim Getsêmani</h2>
        <p>Texto.</p>
        <p>Texto.</p>
        <p><a href="#" class="btn btn-secondary px-4 py-3">Read More</a></p>
      </div>
    </div> -->
      <div class="col-md-7 wrap-about py-5 pr-md-4 ">
        <h2 class="mb-4">Tarefa semanal 01 - 30/março até 03/abril</h2>
        <h3 class=mb-4> Educação Infantil</h3>
        <h3 class=mb-4> Turma Infantil IV (4 anos)</h3>
        <p>Clique nas imagens para baixar a tarefa</p>
      </div>
      <!-- <div class="col-md-3 ">
      <a href="images/image_4.jpg" class="gallery image-popup img d-flex align-items-center"
        style="background-image: url(images/image_4.jpg);">
        <div class="icon mb-4 d-flex align-items-center justify-content-center">
          <span class="icon-instagram"></span>
        </div>
      </a>
    </div> -->
    </div>
  </div>
</section>

<section>
  <div class="container">
    <div class="row">
      <div class="col-sm">
        <a href="./images/infantil4/semana1/img1.jpg" download>
          <img class="img-fluid" src="./images/infantil4/semana1/img1.jpg" alt="">
        </a>
      </div>
      <div class="col-sm">
        <a href="./images/infantil4/semana1/img2.jpg" download> <img class="img-fluid"
            src="./images/infantil4/semana1/img2.jpg" alt=""></a>
      </div>
    </div>
    <div class="row">
      <div class="col-sm">
        <a href="./images/infantil4/semana1/img3.jpg" download> <img class="img-fluid"
            src="./images/infantil4/semana1/img3.jpg" alt=""></a>
      </div>
      <div class="col-sm">
        <a href="./images/infantil4/semana1/img4.jpg" download> <img class="img-fluid"
            src="./images/infantil4/semana1/img4.jpg" alt=""></a>
      </div>
    </div>
    <div class="row">
      <div class="col-sm">
        <a href="./images/infantil4/semana1/img5.jpg" download> <img class="img-fluid"
            src="./images/infantil4/semana1/img5.jpg" alt=""></a>
      </div>
      <div class="col-sm">
        <a href="./images/infantil4/semana1/img6.jpg" download> <img class="img-fluid"
            src="./images/infantil4/semana1/img6.jpg" alt=""></a>
      </div>
    </div>
    <div class="row">
      <div class="col-sm">
        <a href="./images/infantil4/semana1/img7.jpg" download> <img class="img-fluid"
            src="./images/infantil4/semana1/img7.jpg" alt=""></a>
      </div>
      <div class="col-sm">
        <a href="./images/infantil4/semana1/img8.jpg" download> <img class="img-fluid"
            src="./images/infantil4/semana1/img8.jpg" alt=""></a>
      </div>
    </div>
    <div class="row">
      <div class="col-sm">
        <a href="./images/infantil4/semana1/img9.jpg" download> <img class="img-fluid"
            src="./images/infantil4/semana1/img9.jpg" alt=""></a>
      </div>
      <div class="col-sm">
        <a href="./images/infantil4/semana1/img10.jpg" download> <img class="img-fluid"
            src="./images/infantil4/semana1/img10.jpg" alt=""></a>
      </div>
    </div>
  </div>
</se        ction>`;

var turma5 = `  <section class="hero-wrap hero-wrap-2"
style="background-image: url('./images/gerenciamento-de-tarefas-670x419.png');">
<div class="overlay"></div>
<div class="container">
  <div class="row no-gutters slider-text align-items-center justify-content-center">
    <div class="col-md-9  text-center">
      <h1 class="mb-2 bread">Tarefas</h1>
      <p class="breadcrumbs"><span class="mr-2"><a href="./index.html">Home <i
              class="ion-ios-arrow-forward"></i></a></span> <span>Tarefas <i
            class="ion-ios-arrow-forward"></i></span> <span>Turma V <i class="ion-ios-arrow-forward"></i></span></p>
    </div>
  </div>
</div>
</section>

<section class="ftco-section ftco-no-pt ftc-no-pb">
<div class="container">
  <div class="row">
    <!-- <div class="col-md-5 order-md-last wrap-about py-5 wrap-about bg-light">
      <div class="text px-4 ">
        <h2 class="mb-4">Bem vindo ao Colégio Jardim Getsêmani</h2>
        <p>Texto.</p>
        <p>Texto.</p>
        <p><a href="#" class="btn btn-secondary px-4 py-3">Read More</a></p>
      </div>
    </div> -->
    <div class="col-md-7 wrap-about py-5 pr-md-4 ">
      <h2 class="mb-4">Vídeo Aula semanal </h2>
      <h3 class=mb-4> Educação Infantil</h3>
      <h3 class=mb-4> Turma Infantil V (5 anos)</h3>


    </div>
    <!-- <div class="col-md-3 ">
      <a href="images/image_4.jpg" class="gallery image-popup img d-flex align-items-center"
        style="background-image: url(images/image_4.jpg);">
        <div class="icon mb-4 d-flex align-items-center justify-content-center">
          <span class="icon-instagram"></span>
        </div>
      </a>
    </div> -->
  </div>
</div>
</section>

<div class="col-md-7 wrap-about py-5 pr-md-4 ">
<div class="video-container">

  <iframe width="1311" height="480" src="https://www.youtube.com/embed/kZvow_QvuJo" frameborder="0"
    allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

</div>

<h3> Vídeo aula 01</h3>
<div class="video-container">

  <iframe width="1311" height="480" src="https://www.youtube.com/embed/aceTS2Z4F-M" frameborder="0"
    allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

</div>

<section class="ftco-section ftco-no-pt ftc-no-pb">
<div class="container">
  <div class="row">
    <!-- <div class="col-md-5 order-md-last wrap-about py-5 wrap-about bg-light">
      <div class="text px-4 ">
        <h2 class="mb-4">Bem vindo ao Colégio Jardim Getsêmani</h2>
        <p>Texto.</p>
        <p>Texto.</p>
        <p><a href="#" class="btn btn-secondary px-4 py-3">Read More</a></p>
      </div>
    </div> -->
    <div class="col-md-7 wrap-about py-5 pr-md-4 ">
      <h2 class="mb-4">Tarefa semanal 02 - 06/abril até 10/abril</h2>
      <h3 class=mb-4> Educação Infantil</h3>
      <h3 class=mb-4> Turma Infantil V (5 anos)</h3>
      <p>Clique nas imagens para baixar a tarefa</p>
    </div>
    <!-- <div class="col-md-3 ">
      <a href="images/image_4.jpg" class="gallery image-popup img d-flex align-items-center"
        style="background-image: url(images/image_4.jpg);">
        <div class="icon mb-4 d-flex align-items-center justify-content-center">
          <span class="icon-instagram"></span>
        </div>
      </a>
    </div> -->
  </div>
</div>
</section>

<section>
<div class="container">
  <div class="row">
    <div class="col-sm">
      <a href="./images/infantil5/semana2/img1.jpg" download><img class="img-fluid"
          src="./images/infantil5/semana2/img1.jpg" alt=""></a>
    </div>
    <div class="col-sm">
      <a href="./images/infantil5/semana2/img2.jpg" download><img class="img-fluid"
          src="./images/infantil5/semana2/img2.jpg" alt=""></a>
    </div>
  </div>
  <div class="row">
    <div class="col-sm">
      <a href="./images/infantil5/semana2/img3.jpg" download><img class="img-fluid"
          src="./images/infantil5/semana2/img3.jpg" alt=""></a>
    </div>
    <div class="col-sm">
      <a href="./images/infantil5/semana2/img4.jpg" download><img class="img-fluid"
          src="./images/infantil5/semana2/img4.jpg" alt=""></a>
    </div>
  </div>
  <div class="row">
    <div class="col-sm">
      <a href="./images/infantil5/semana2/img5.jpg" download><img class="img-fluid"
          src="./images/infantil5/semana2/img5.jpg" alt=""></a>
    </div>
    <div class="col-sm">
      <a href="./images/infantil5/semana2/img6.jpg" download><img class="img-fluid"
          src="./images/infantil5/semana2/img6.jpg" alt=""></a>
    </div>
  </div>
  <div class="row">
    <div class="col-sm">
      <a href="./images/infantil5/semana2/img7.jpg" download><img class="img-fluid"
          src="./images/infantil5/semana2/img7.jpg" alt=""></a>
    </div>
  </div>
</div>
</section>




<section class="ftco-section ftco-no-pt ftc-no-pb">
<div class="container">
  <div class="row">
    <!-- <div class="col-md-5 order-md-last wrap-about py-5 wrap-about bg-light">
      <div class="text px-4 ">
        <h2 class="mb-4">Bem vindo ao Colégio Jardim Getsêmani</h2>
        <p>Texto.</p>
        <p>Texto.</p>
        <p><a href="#" class="btn btn-secondary px-4 py-3">Read More</a></p>
      </div>
    </div> -->
    <div class="col-md-7 wrap-about py-5 pr-md-4 ">
      <h2 class="mb-4">Tarefa semanal 01 - 30/março até 03/abril</h2>
      <h3 class=mb-4> Educação Infantil</h3>
      <h3 class=mb-4> Turma Infantil V (5 anos)</h3>
      <p>Clique nas imagens para baixar a tarefa</p>
    </div>
    <!-- <div class="col-md-3 ">
      <a href="images/image_4.jpg" class="gallery image-popup img d-flex align-items-center"
        style="background-image: url(images/image_4.jpg);">
        <div class="icon mb-4 d-flex align-items-center justify-content-center">
          <span class="icon-instagram"></span>
        </div>
      </a>
    </div> -->
  </div>
</div>
</section>

<section>
<div class="container">
  <div class="row">
    <div class="col-sm">
      <a href="./images/infantil5/semana1/img1.jpg" download><img class="img-fluid"
          src="./images/infantil5/semana1/img1.jpg" alt=""></a>
    </div>
    <div class="col-sm">
      <a href="./images/infantil5/semana1/img2.jpg" download><img class="img-fluid"
          src="./images/infantil5/semana1/img2.jpg" alt=""></a>
    </div>
  </div>
  <div class="row">
    <div class="col-sm">
      <a href="./images/infantil5/semana1/img3.jpg" download><img class="img-fluid"
          src="./images/infantil5/semana1/img3.jpg" alt=""></a>
    </div>
    <div class="col-sm">
      <a href="./images/infantil5/semana1/img4.jpg" download><img class="img-fluid"
          src="./images/infantil5/semana1/img4.jpg" alt=""></a>
    </div>
  </div>
  <div class="row">
    <div class="col-sm">
      <a href="./images/infantil5/semana1/img5.jpg" download><img class="img-fluid"
          src="./images/infantil5/semana1/img5.jpg" alt=""></a>
    </div>
    <div class="col-sm">
      <a href="./images/infantil5/semana1/img6.jpg" download><img class="img-fluid"
          src="./images/infantil5/semana1/img6.jpg" alt=""></a>
    </div>
  </div>
  <div class="row">
    <div class="col-sm">
      <a href="./images/infantil5/semana1/img7.jpg" download><img class="img-fluid"
          src="./images/infantil5/semana1/img7.jpg" alt=""></a>
    </div>
    <div class="col-sm">
      <a href="./images/infantil5/semana1/img8.jpg" download><img class="img-fluid"
          src="./images/infantil5/semana1/img8.jpg" alt=""></a>
    </div>
  </div>
  <div class="row">
    <div class="col-sm">
      <a href="./images/infantil5/semana1/img9.jpg" download><img class="img-fluid"
          src="./images/infantil5/semana1/img9.jpg" alt=""></a>
    </div>
    <div class="col-sm">
      <a href="./images/infantil5/semana1/img10.jpg" download><img class="img-fluid"
          src="./images/infantil5/semana1/img10.jpg" alt=""></a>
    </div>
  </div>
  <div class="row">
    <div class="col-sm">
      <a href="./images/infantil5/semana1/img11.jpg" download><img class="img-fluid"
          src="./images/infantil5/semana1/img11.jpg" alt=""></a>
    </div>
  </div>
</section>
`;

var turma6 = ` <section class="hero-wrap hero-wrap-2"
style="background-image: url('./images/gerenciamento-de-tarefas-670x419.png');">
<div class="overlay"></div>
<div class="container">
  <div class="row no-gutters slider-text align-items-center justify-content-center">
    <div class="col-md-9  text-center">
      <h1 class="mb-2 bread">Tarefas</h1>
      <p class="breadcrumbs"><span class="mr-2"><a href="./index.html">Home <i
              class="ion-ios-arrow-forward"></i></a></span> <span>Tarefas <i
            class="ion-ios-arrow-forward"></i></span> <span>1º ano<i class="ion-ios-arrow-forward"></i></span>
      </p>
    </div>
  </div>
</div>
</section>

<section class="ftco-section ftco-no-pt ftc-no-pb">
<div class="container">
  <div class="row">
    <!-- <div class="col-md-5 order-md-last wrap-about py-5 wrap-about bg-light">
      <div class="text px-4 ">
        <h2 class="mb-4">Bem vindo ao Colégio Jardim Getsêmani</h2>
        <p>Texto.</p>
        <p>Texto.</p>
        <p><a href="#" class="btn btn-secondary px-4 py-3">Read More</a></p>
      </div>
    </div> -->
    <div class="col-md-7 wrap-about py-5 pr-md-4 ">
      <h2 class="mb-4">Vídeo Aula semanal </h2>
      <h3 class=mb-4> Ensino Fundamental</h3>
      <h3 class=mb-4> 1º ano (6 anos)</h3>


    </div>
    <!-- <div class="col-md-3 ">
      <a href="images/image_4.jpg" class="gallery image-popup img d-flex align-items-center"
        style="background-image: url(images/image_4.jpg);">
        <div class="icon mb-4 d-flex align-items-center justify-content-center">
          <span class="icon-instagram"></span>
        </div>
      </a>
    </div> -->
  </div>
</div>
</section>

<div class="col-md-7 wrap-about py-5 pr-md-4 ">
<div class="video-container">

  <iframe width="1311" height="480" src="https://www.youtube.com/embed/kZvow_QvuJo" frameborder="0"
    allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

</div>

<h3> Vídeo aula 01</h3>
<div class="video-container">

  <iframe width="1311" height="480" src="https://www.youtube.com/embed/2xCXEf5wT1Y" frameborder="0"
    allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

</div>

<section class="ftco-section ftco-no-pt ftc-no-pb">
  <div class="container">
    <div class="row">
      <!-- <div class="col-md-5 order-md-last wrap-about py-5 wrap-about bg-light">
      <div class="text px-4 ">
        <h2 class="mb-4">Bem vindo ao Colégio Jardim Getsêmani</h2>
        <p>Texto.</p>
        <p>Texto.</p>
        <p><a href="#" class="btn btn-secondary px-4 py-3">Read More</a></p>
      </div>
    </div> -->
      <div class="col-md-7 wrap-about py-5 pr-md-4 ">
        <h2 class="mb-4">Tarefa semanal 02 - 06/abril até 10/abril</h2>
        <h3 class=mb-4> Ensino Fundamental</h3>
        <h3 class=mb-4> 1º ano (6 anos)</h3>
        <p>Clique nas imagens para baixar a tarefa</p>
      </div>
      <!-- <div class="col-md-3 ">
      <a href="images/image_4.jpg" class="gallery image-popup img d-flex align-items-center"
        style="background-image: url(images/image_4.jpg);">
        <div class="icon mb-4 d-flex align-items-center justify-content-center">
          <span class="icon-instagram"></span>
        </div>
      </a>
    </div> -->
    </div>
  </div>
</section>

<section>
  <div class="container">
    <div class="row">
      <div class="col-sm">
        <a href="./images/infantil6/semana2/img1.jpg" download><img class="img-fluid"
            src="./images/infantil6/semana2/img1.jpg" alt=""></a>
      </div>
      <div class="col-sm">
        <a href="./images/infantil6/semana2/img2.jpg" download><img class="img-fluid"
            src="./images/infantil6/semana2/img2.jpg" alt=""></a>
      </div>
    </div>
    <div class="row">
      <div class="col-sm">
        <a href="./images/infantil6/semana2/img3.jpg" download><img class="img-fluid"
            src="./images/infantil6/semana2/img3.jpg" alt=""></a>
      </div>
      <div class="col-sm">
        <a href="./images/infantil6/semana2/img4.jpg" download><img class="img-fluid"
            src="./images/infantil6/semana2/img4.jpg" alt=""></a>
      </div>
    </div>
    <div class="row">
      <div class="col-sm">
        <a href="./images/infantil6/semana2/img5.jpg" download><img class="img-fluid"
            src="./images/infantil6/semana2/img5.jpg" alt=""></a>
      </div>
      <div class="col-sm">
        <a href="./images/infantil6/semana2/img6.jpg" download><img class="img-fluid"
            src="./images/infantil6/semana2/img6.jpg" alt=""></a>
      </div>
    </div>
    <div class="row">
      <div class="col-sm">
        <a href="./images/infantil6/semana2/img7.jpg" download><img class="img-fluid"
            src="./images/infantil6/semana2/img7.jpg" alt=""></a>
      </div>
      <div class="col-sm">
        <a href="./images/infantil6/semana2/img8.jpg" download><img class="img-fluid"
            src="./images/infantil6/semana2/img8.jpg" alt=""></a>
      </div>
    </div>
    <div class="row">
      <div class="col-sm">
        <a href="./images/infantil6/semana2/img9.jpg" download><img class="img-fluid"
            src="./images/infantil6/semana2/img9.jpg" alt=""></a>
      </div>
    </div>
  </div>
</section>




<section class="ftco-section ftco-no-pt ftc-no-pb">
  <div class="container">
    <div class="row">
      <!-- <div class="col-md-5 order-md-last wrap-about py-5 wrap-about bg-light">
      <div class="text px-4 ">
        <h2 class="mb-4">Bem vindo ao Colégio Jardim Getsêmani</h2>
        <p>Texto.</p>
        <p>Texto.</p>
        <p><a href="#" class="btn btn-secondary px-4 py-3">Read More</a></p>
      </div>
    </div> -->
      <div class="col-md-7 wrap-about py-5 pr-md-4 ">
        <h2 class="mb-4">Tarefa semanal 01 - 30/março até 03/abril</h2>
        <h3 class=mb-4> Ensino Fundamental</h3>
        <h3 class=mb-4> 1º ano(6 anos)</h3>
        <p>Clique nas imagens para baixar a tarefa</p>
      </div>
      <!-- <div class="col-md-3 ">
      <a href="images/image_4.jpg" class="gallery image-popup img d-flex align-items-center"
        style="background-image: url(images/image_4.jpg);">
        <div class="icon mb-4 d-flex align-items-center justify-content-center">
          <span class="icon-instagram"></span>
        </div>
      </a>
    </div> -->
    </div>
  </div>
</section>

<section>
  <div class="container">
    <div class="row">
      <div class="col-sm">
        <a href="./images/infantil6/semana1/img1.jpg" download><img class="img-fluid"
            src="./images/infantil6/semana1/img1.jpg" alt=""></a>
      </div>
      <div class="col-sm">
        <a href="./images/infantil6/semana1/img2.jpg" download><img class="img-fluid"
            src="./images/infantil6/semana1/img2.jpg" alt=""></a>
      </div>
    </div>
    <div class="row">
      <div class="col-sm">
        <a href="./images/infantil6/semana1/img3.jpg" download><img class="img-fluid"
            src="./images/infantil6/semana1/img3.jpg" alt=""></a>
      </div>
      <div class="col-sm">
        <a href="./images/infantil6/semana1/img4.jpg" download><img class="img-fluid"
            src="./images/infantil6/semana1/img4.jpg" alt=""></a>
      </div>
    </div>
    <div class="row">
      <div class="col-sm">
        <a href="./images/infantil6/semana1/img5.jpg" download><img class="img-fluid"
            src="./images/infantil6/semana1/img5.jpg" alt=""></a>
      </div>
      <div class="col-sm">
        <a href="./images/infantil6/semana1/img6.jpg" download><img class="img-fluid"
            src="./images/infantil6/semana1/img6.jpg" alt=""></a>
      </div>
    </div>
    <div class="row">
      <div class="col-sm">
        <a href="./images/infantil6/semana1/img7.jpg" download><img class="img-fluid"
            src="./images/infantil6/semana1/img7.jpg" alt=""></a>
      </div>
      <div class="col-sm">
        <a href="./images/infantil6/semana1/img8.jpg" download><img class="img-fluid"
            src="./images/infantil6/semana1/img8.jpg" alt=""></a>
      </div>
    </div>
    <div class="row">
      <div class="col-sm">
        <a href="./images/infantil6/semana1/img9.jpg" download><img class="img-fluid"
            src="./images/infantil6/semana1/img9.jpg" alt=""></a>
      </div>
      <div class="col-sm">
        <a href="./images/infantil6/semana1/img10.jp" download><img class="img-fluid"
            src="./images/infantil6/semana1/img10.jpg" alt="" </a>>
      </div>
    </div>
    <div class="row">
      <div class="col-sm">
        <a href="./images/infantil6/semana1/img11.jp" download><img class="img-fluid"
            src="./images/infantil6/semana1/img11.jpg" alt="" </a>>
      </div>
      <div class="col-sm">
        <a href="./images/infantil6/semana1/img12.jpg" download><img class="img-fluid"
            src="./images/infantil6/semana1/img12.jpg" alt="" </a>>
      </div>
    </div>
    <div class="row">
      <div class="col-sm">
        <a href="./images/infantil6/semana1/img13.jpg" download><img class="img-fluid"
            src="./images/infantil6/semana1/img13.jpg" alt="" </a>>
      </div>
      <div class="col-sm">
        <a href="./images/infantil6/semana1/img14.jpg" download><img class="img-fluid"
            src="./images/infantil6/semana1/img14.jpg" alt="" </a>>
      </div>
    </div>
  </div>
</se        ction>`;

var turma7 = `<section class="hero-wrap hero-wrap-2"
style="background-image: url('./images/gerenciamento-de-tarefas-670x419.png');">
<div class="overlay"></div>
<div class="container">
  <div class="row no-gutters slider-text align-items-center justify-content-center">
    <div class="col-md-9  text-center">
      <h1 class="mb-2 bread">Tarefas</h1>
      <p class="breadcrumbs"><span class="mr-2"><a href="./index.html">Home <i
              class="ion-ios-arrow-forward"></i></a></span> <span>Tarefas <i
            class="ion-ios-arrow-forward"></i></span> <span>2º ano <i class="ion-ios-arrow-forward"></i></span>
      </p>
    </div>
  </div>
</div>
</section>

<section class="ftco-section ftco-no-pt ftc-no-pb">
<div class="container">
  <div class="row">
    <!-- <div class="col-md-5 order-md-last wrap-about py-5 wrap-about bg-light">
      <div class="text px-4 ">
        <h2 class="mb-4">Bem vindo ao Colégio Jardim Getsêmani</h2>
        <p>Texto.</p>
        <p>Texto.</p>
        <p><a href="#" class="btn btn-secondary px-4 py-3">Read More</a></p>
      </div>
    </div> -->
    <div class="col-md-7 wrap-about py-5 pr-md-4 ">
      <h2 class="mb-4">Vídeo Aula semanal </h2>
      <h3 class=mb-4> Ensino Fundamental</h3>
      <h3 class=mb-4> 2º ano (7 anos)</h3>


    </div>
    <!-- <div class="col-md-3 ">
      <a href="images/image_4.jpg" class="gallery image-popup img d-flex align-items-center"
        style="background-image: url(images/image_4.jpg);">
        <div class="icon mb-4 d-flex align-items-center justify-content-center">
          <span class="icon-instagram"></span>
        </div>
      </a>
    </div> -->
  </div>
</div>
</section>

<div class="col-md-7 wrap-about py-5 pr-md-4 ">
<div class="video-container">

  <iframe width="1311" height="480" src="https://www.youtube.com/embed/kZvow_QvuJo" frameborder="0"
    allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

</div>

<section class="ftco-section ftco-no-pt ftc-no-pb">
<div class="container">
  <div class="row">
    <!-- <div class="col-md-5 order-md-last wrap-about py-5 wrap-about bg-light">
      <div class="text px-4 ">
        <h2 class="mb-4">Bem vindo ao Colégio Jardim Getsêmani</h2>
        <p>Texto.</p>
        <p>Texto.</p>
        <p><a href="#" class="btn btn-secondary px-4 py-3">Read More</a></p>
      </div>
    </div> -->
    <div class="col-md-7 wrap-about py-5 pr-md-4 ">
      <h2 class="mb-4">Tarefa semanal 02 - 06/abril até 10/abril</h2>
      <h3 class=mb-4> Ensino Fundamental</h3>
      <h3 class=mb-4> 2º ano (7 anos)</h3>
      <p>Clique nas imagens para baixar a tarefa</p>
    </div>
    <!-- <div class="col-md-3 ">
      <a href="images/image_4.jpg" class="gallery image-popup img d-flex align-items-center"
        style="background-image: url(images/image_4.jpg);">
        <div class="icon mb-4 d-flex align-items-center justify-content-center">
          <span class="icon-instagram"></span>
        </div>
      </a>
    </div> -->
  </div>
</div>
</section>


<section>
<div class="container">
  <div class="row">
    <div class="col-sm">
      <a href="./images/infantil7/semana2/img1.jpg" download><img class="img-fluid"
          src="./images/infantil7/semana2/img1.jpg" alt=""></a>
    </div>
    <div class="col-sm">
      <a href="./images/infantil7/semana2/img2.jpg" download><img class="img-fluid"
          src="./images/infantil7/semana2/img2.jpg" alt=""></a>
    </div>
  </div>
  <div class="row">
    <div class="col-sm">
      <a href="./images/infantil7/semana2/img3.jpg" download><img class="img-fluid"
          src="./images/infantil7/semana2/img3.jpg" alt=""></a>
    </div>
    <div class="col-sm">
      <a href="./images/infantil7/semana2/img4.jpg" download><img class="img-fluid"
          src="./images/infantil7/semana2/img4.jpg" alt=""></a>
    </div>
  </div>
  <div class="row">
    <div class="col-sm">
      <a href="./images/infantil7/semana2/img5.jpg" download><img class="img-fluid"
          src="./images/infantil7/semana2/img5.jpg" alt=""></a>
    </div>
    <div class="col-sm">
      <a href="./images/infantil7/semana2/img6.jpg" download><img class="img-fluid"
          src="./images/infantil7/semana2/img6.jpg" alt=""></a>
    </div>
  </div>
  <div class="row">
    <div class="col-sm">
      <a href="./images/infantil7/semana2/img7.jpg" download><img class="img-fluid"
          src="./images/infantil7/semana2/img7.jpg" alt=""></a>
    </div>
    <div class="col-sm">
      <a href="./images/infantil7/semana2/img8.jpg" download><img class="img-fluid"
          src="./images/infantil7/semana2/img8.jpg" alt=""></a>
    </div>
  </div>
</div>
</section>



<section class="ftco-section ftco-no-pt ftc-no-pb">
<div class="container">
  <div class="row">
    <!-- <div class="col-md-5 order-md-last wrap-about py-5 wrap-about bg-light">
      <div class="text px-4 ">
        <h2 class="mb-4">Bem vindo ao Colégio Jardim Getsêmani</h2>
        <p>Texto.</p>
        <p>Texto.</p>
        <p><a href="#" class="btn btn-secondary px-4 py-3">Read More</a></p>
      </div>
    </div> -->
    <div class="col-md-7 wrap-about py-5 pr-md-4 ">
      <h2 class="mb-4">Tarefa semanal 01 - 30/março até 03/abril</h2>
      <h3 class=mb-4> Ensino Fundamental</h3>
      <h3 class=mb-4> 2º ano (7 anos)</h3>
      <p>Clique nas imagens para baixar a tarefa</p>
    </div>
    <!-- <div class="col-md-3 ">
      <a href="images/image_4.jpg" class="gallery image-popup img d-flex align-items-center"
        style="background-image: url(images/image_4.jpg);">
        <div class="icon mb-4 d-flex align-items-center justify-content-center">
          <span class="icon-instagram"></span>
        </div>
      </a>
    </div> -->
  </div>
</div>
</section>

<section>
<div class="container">
  <div class="row">
    <div class="col-sm">
      <a href="./images/infantil7/semana1/img1.jpg" download><img class="img-fluid"
          src="./images/infantil7/semana1/img1.jpg" alt=""></a>
    </div>
    <div class="col-sm">
      <a href="./images/infantil7/semana1/img2.jpg" download><img class="img-fluid"
          src="./images/infantil7/semana1/img2.jpg" alt=""></a>
    </div>
  </div>
  <div class="row">
    <div class="col-sm">
      <a href="./images/infantil7/semana1/img3.jpg" download><img class="img-fluid"
          src="./images/infantil7/semana1/img3.jpg" alt=""></a>
    </div>
    <div class="col-sm">
      <a href="./images/infantil7/semana1/img4.jpg" download><img class="img-fluid"
          src="./images/infantil7/semana1/img4.jpg" alt=""></a>
    </div>
  </div>
  <div class="row">
    <div class="col-sm">
      <a href="./images/infantil7/semana1/img5.jpg" download><img class="img-fluid"
          src="./images/infantil7/semana1/img5.jpg" alt=""></a>
    </div>
    <div class="col-sm">
      <a href="./images/infantil7/semana1/img6.jpg" download><img class="img-fluid"
          src="./images/infantil7/semana1/img6.jpg" alt=""></a>
    </div>
  </div>
  <div class="row">
    <div class="col-sm">
      <a href="./images/infantil7/semana1/img7.jpg" download><img class="img-fluid"
          src="./images/infantil7/semana1/img7.jpg" alt=""></a>
    </div>
    <div class="col-sm">
      <a href="./images/infantil7/semana1/img8.jpg" download><img class="img-fluid"
          src="./images/infantil7/semana1/img8.jpg" alt=""></a>
    </div>
  </div>
  <div class="row">
    <div class="col-sm">
      <a href="./images/infantil7/semana1/img9.jpg" download><img class="img-fluid"
          src="./images/infantil7/semana1/img9.jpg" alt=""></a>
    </div>
    <div class="col-sm">
      <a href="./images/infantil7/semana1/img10.jpg" download><img class="img-fluid"
          src="./images/infantil7/semana1/img10.jpg" alt=""></a>
    </div>
  </div>
  <div class="row">
    <div class="col-sm">
      <a href="./images/infantil7/semana1/img11.jpg" download><img class="img-fluid"
          src="./images/infantil7/semana1/img11.jpg" alt=""></a>
    </div>
    <div class="col-sm">
      <a href="./images/infantil7/semana1/img12.jpg" download><img class="img-fluid"
          src="./images/infantil7/semana1/img12.jpg" alt=""></a>
    </div>
  </div>
  <div class="row">
    <div class="col-sm">
      <a href="./images/infantil7/semana1/img13.jpg" download><img class="img-fluid"
          src="./images/infantil7/semana1/img13.jpg" alt=""></a>
    </div>
    <div class="col-sm">
      <a href="./images/infantil7/semana1/img14.jpg" download><img class="img-fluid"
          src="./images/infantil7/semana1/img14.jpg" alt=""></a>
    </div>
  </div>
  <div class="row">
    <div class="col-sm">
      <a href="./images/infantil7/semana1/img15.jpg" download><img class="img-fluid"
          src="./images/infantil7/semana1/img15.jpg" alt=""></a>
    </div>
    <div class="col-sm">
      <a href="./images/infantil7/semana1/img16.jpg" download><img class="img-fluid"
          src="./images/infantil7/semana1/img16.jpg" alt=""></a>
    </div>
  </div>
</div>
</se        ction>`;

var turma8 = ` <section class="hero-wrap hero-wrap-2"
style="background-image: url('./images/gerenciamento-de-tarefas-670x419.png');">
<div class="overlay"></div>
<div class="container">
  <div class="row no-gutters slider-text align-items-center justify-content-center">
    <div class="col-md-9  text-center">
      <h1 class="mb-2 bread">Tarefas</h1>
      <p class="breadcrumbs"><span class="mr-2"><a href="./index.html">Home <i
              class="ion-ios-arrow-forward"></i></a></span> <span>Tarefas <i
            class="ion-ios-arrow-forward"></i></span> <span>3º ano <i class="ion-ios-arrow-forward"></i></span>
      </p>
    </div>
  </div>
</div>
</section>

<section class="ftco-section ftco-no-pt ftc-no-pb">
<div class="container">
  <div class="row">
    <!-- <div class="col-md-5 order-md-last wrap-about py-5 wrap-about bg-light">
      <div class="text px-4 ">
        <h2 class="mb-4">Bem vindo ao Colégio Jardim Getsêmani</h2>
        <p>Texto.</p>
        <p>Texto.</p>
        <p><a href="#" class="btn btn-secondary px-4 py-3">Read More</a></p>
      </div>
    </div> -->
    <div class="col-md-7 wrap-about py-5 pr-md-4 ">
      <h2 class="mb-4">Vídeo Aula semanal </h2>
      <h3 class=mb-4> Ensino Fundamental</h3>
      <h3 class=mb-4> 3º ano (8 anos)</h3>


    </div>
    <!-- <div class="col-md-3 ">
      <a href="images/image_4.jpg" class="gallery image-popup img d-flex align-items-center"
        style="background-image: url(images/image_4.jpg);">
        <div class="icon mb-4 d-flex align-items-center justify-content-center">
          <span class="icon-instagram"></span>
        </div>
      </a>
    </div> -->
  </div>
</div>
</section>

<div class="col-md-7 wrap-about py-5 pr-md-4 ">
<div class="video-container">

  <iframe width="1311" height="480" src="https://www.youtube.com/embed/kZvow_QvuJo" frameborder="0"
    allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

</div>

<h3> Vídeo aula 01</h3>
<div class="video-container">

  <iframe width="1311" height="480" src="https://www.youtube.com/embed/lp_YBrvNfmE" frameborder="0"
    allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

</div>


<h3> Vídeo aula 02</h3>
<div class="video-container">

  <iframe width="1311" height="480" src="https://www.youtube.com/embed/UDncpTaaA9I" frameborder="0"
    allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

</div>

<section class="ftco-section ftco-no-pt ftc-no-pb">
  <div class="container">
    <div class="row">
      <!-- <div class="col-md-5 order-md-last wrap-about py-5 wrap-about bg-light">
      <div class="text px-4 ">
        <h2 class="mb-4">Bem vindo ao Colégio Jardim Getsêmani</h2>
        <p>Texto.</p>
        <p>Texto.</p>
        <p><a href="#" class="btn btn-secondary px-4 py-3">Read More</a></p>
      </div>
    </div> -->
      <div class="col-md-7 wrap-about py-5 pr-md-4 ">
        <h2 class="mb-4">Tarefa semanal 02 - 06/abril até 10/abril</h2>
        <h3 class=mb-4> Ensino Fundamental</h3>
        <h3 class=mb-4> 3º ano (8 anos)</h3>
        <p>Clique nas imagens para baixar a tarefa</p>
      </div>
      <!-- <div class="col-md-3 ">
      <a href="images/image_4.jpg" class="gallery image-popup img d-flex align-items-center"
        style="background-image: url(images/image_4.jpg);">
        <div class="icon mb-4 d-flex align-items-center justify-content-center">
          <span class="icon-instagram"></span>
        </div>
      </a>
    </div> -->
    </div>
  </div>
</section>

<section>
  <div class="container">
    <div class="row">
      <div class="col-sm">
        <a href="./images/infantil8/semana2/img1.jpgg" download><img class="img-fluid"
            src="./images/infantil8/semana2/img1.jpg" alt=""></a>
      </div>
      <div class="col-sm">
        <a href="./images/infantil8/semana2/img2.jpgg" download><img class="img-fluid"
            src="./images/infantil8/semana2/img2.jpg" alt=""></a>
      </div>
    </div>
    <div class="row">
      <div class="col-sm">
        <a href="./images/infantil8/semana2/img3.jpgg" download><img class="img-fluid"
            src="./images/infantil8/semana2/img3.jpg" alt=""></a>
      </div>
      <div class="col-sm">
        <a href="./images/infantil8/semana2/img4.jpgg" download><img class="img-fluid"
            src="./images/infantil8/semana2/img4.jpg" alt=""></a>
      </div>
    </div>
    <div class="row">
      <div class="col-sm">
        <a href="./images/infantil8/semana2/img5.jpgg" download><img class="img-fluid"
            src="./images/infantil8/semana2/img5.jpg" alt=""></a>
      </div>
      <div class="col-sm">
        <a href="./images/infantil8/semana2/img6.jpgg" download><img class="img-fluid"
            src="./images/infantil8/semana2/img6.jpg" alt=""></a>
      </div>
    </div>
    <div class="row">
      <div class="col-sm">
        <a href="./images/infantil8/semana2/img7.jpgg" download><img class="img-fluid"
            src="./images/infantil8/semana2/img7.jpg" alt=""></a>
      </div>
      <div class="col-sm">
        <a href="./images/infantil8/semana2/img8.jpgg" download><img class="img-fluid"
            src="./images/infantil8/semana2/img8.jpg" alt=""></a>
      </div>
    </div>
  </div>
</section>




<section class="ftco-section ftco-no-pt ftc-no-pb">
  <div class="container">
    <div class="row">
      <!-- <div class="col-md-5 order-md-last wrap-about py-5 wrap-about bg-light">
      <div class="text px-4 ">
        <h2 class="mb-4">Bem vindo ao Colégio Jardim Getsêmani</h2>
        <p>Texto.</p>
        <p>Texto.</p>
        <p><a href="#" class="btn btn-secondary px-4 py-3">Read More</a></p>
      </div>
    </div> -->
      <div class="col-md-7 wrap-about py-5 pr-md-4 ">
        <h2 class="mb-4">Tarefa semanal 01 - 30/março até 03/abril</h2>
        <h3 class=mb-4> Ensino Fundamental</h3>
        <h3 class=mb-4> 3º ano (8 anos)</h3>
        <p>Clique nas imagens para baixar a tarefa</p>
      </div>
      <!-- <div class="col-md-3 ">
      <a href="images/image_4.jpg" class="gallery image-popup img d-flex align-items-center"
        style="background-image: url(images/image_4.jpg);">
        <div class="icon mb-4 d-flex align-items-center justify-content-center">
          <span class="icon-instagram"></span>
        </div>
      </a>
    </div> -->
    </div>
  </div>
</section>

<section>
  <div class="container">
    <div class="row">
      <div class="col-sm">
        <a href="./images/infantil8/semana1/img1.jpgg" download><img class="img-fluid"
            src="./images/infantil8/semana1/img1.jpg" alt=""></a>
      </div>
      <div class="col-sm">
        <a href="./images/infantil8/semana1/img2.jpgg" download><img class="img-fluid"
            src="./images/infantil8/semana1/img2.jpg" alt=""></a>
      </div>
    </div>
    <div class="row">
      <div class="col-sm">
        <a href="./images/infantil8/semana1/img3.jpgg" download><img class="img-fluid"
            src="./images/infantil8/semana1/img3.jpg" alt=""></a>
      </div>
      <div class="col-sm">
        <a href="./images/infantil8/semana1/img4.jpgg" download><img class="img-fluid"
            src="./images/infantil8/semana1/img4.jpg" alt=""></a>
      </div>
    </div>
    <div class="row">
      <div class="col-sm">
        <a href="./images/infantil8/semana1/img5.jpgg" download><img class="img-fluid"
            src="./images/infantil8/semana1/img5.jpg" alt=""></a>
      </div>
      <div class="col-sm">
        <a href="./images/infantil8/semana1/img6.jpgg" download><img class="img-fluid"
            src="./images/infantil8/semana1/img6.jpg" alt=""></a>
      </div>
    </div>
    <div class="row">
      <div class="col-sm">
        <a href="./images/infantil8/semana1/img7.jpgg" download><img class="img-fluid"
            src="./images/infantil8/semana1/img7.jpg" alt=""></a>
      </div>
      <div class="col-sm">
        <a href="./images/infantil8/semana1/img8.jpgg" download><img class="img-fluid"
            src="./images/infantil8/semana1/img8.jpg" alt=""></a>
      </div>
    </div>
    <div class="row">
      <div class="col-sm">
        <a href="./images/infantil8/semana1/img9.jpgg" download><img class="img-fluid"
            src="./images/infantil8/semana1/img9.jpg" alt=""></a>
      </div>
      <div class="col-sm">
        <a href="./images/infantil8/semana1/img10.jpg" download><img class="img-fluid"
            src="./images/infantil8/semana1/img10.jpg" alt=""></a>
      </div>
    </div>
    <div class="row">
      <div class="col-sm">
        <a href="./images/infantil8/semana1/img11.jpg" download><img class="img-fluid"
            src="./images/infantil8/semana1/img11.jpg" alt=""></a>
      </div>
      <div class="col-sm">
        <a href="./images/infantil8/semana1/img12.jpg" download><img class="img-fluid"
            src="./images/infantil8/semana1/img12.jpg" alt=""></a>
      </div>
    </div>
    <div class="row">
      <div class="col-sm">
        <a href="./images/infantil8/semana1/img13.jpg" download><img class="img-fluid"
            src="./images/infantil8/semana1/img13.jpg" alt=""></a>
      </div>
      <div class="col-sm">
        <a href="./images/infantil8/semana1/img14.jpg" download><img class="img-fluid"
            src="./images/infantil8/semana1/img14.jpg" alt=""></a>
      </div>
    </div>
    <div class="row">
      <div class="col-sm">
        <a href="./images/infantil8/semana1/img15.jpg" download><img class="img-fluid"
            src="./images/infantil8/semana1/img15.jpg" alt=""></a>
      </div>
      <div class="col-sm">
        <a href="./images/infantil8/semana1/img16.jpg" download><img class="img-fluid"
            src="./images/infantil8/semana1/img16.jpg" alt=""></a>
      </div>
    </div>
    <div class="row">
      <div class="col-sm">
        <a href="./images/infantil8/semana1/img17.jpg" download><img class="img-fluid"
            src="./images/infantil8/semana1/img17.jpg" alt=""></a>
      </div>
      <div class="col-sm">
        <a href="./images/infantil8/semana1/img18.jpg" download><img class="img-fluid"
            src="./images/infantil8/semana1/img18.jpg" alt=""></a>
      </div>
    </div>
    <div class="row">
      <div class="col-sm">
        <a href="./images/infantil8/semana1/img19.jpg" download><img class="img-fluid"
            src="./images/infantil8/semana1/img19.jpg" alt=""></a>
      </div>
    </div>
  </div>
</se        ction>`;

var turma9 = ` <section class="hero-wrap hero-wrap-2"
style="background-image: url('./images/gerenciamento-de-tarefas-670x419.png');">
<div class="overlay"></div>
<div class="container">
  <div class="row no-gutters slider-text align-items-center justify-content-center">
    <div class="col-md-9  text-center">
      <h1 class="mb-2 bread">Tarefas</h1>
      <p class="breadcrumbs"><span class="mr-2"><a href="./index.html">Home <i
              class="ion-ios-arrow-forward"></i></a></span> <span>Tarefas <i
            class="ion-ios-arrow-forward"></i></span> <span>4º ano <i class="ion-ios-arrow-forward"></i></span>
      </p>
    </div>
  </div>
</div>
</section>

<section class="ftco-section ftco-no-pt ftc-no-pb">
<div class="container">
  <div class="row">
    <!-- <div class="col-md-5 order-md-last wrap-about py-5 wrap-about bg-light">
      <div class="text px-4 ">
        <h2 class="mb-4">Bem vindo ao Colégio Jardim Getsêmani</h2>
        <p>Texto.</p>
        <p>Texto.</p>
        <p><a href="#" class="btn btn-secondary px-4 py-3">Read More</a></p>
      </div>
    </div> -->
    <div class="col-md-7 wrap-about py-5 pr-md-4 ">
      <h2 class="mb-4">Vídeo Aula semanal </h2>
      <h3 class=mb-4> Ensino Fundamental</h3>
      <h3 class=mb-4> 4º ano (9 anos)</h3>


    </div>
    <!-- <div class="col-md-3 ">
      <a href="images/image_4.jpg" class="gallery image-popup img d-flex align-items-center"
        style="background-image: url(images/image_4.jpg);">
        <div class="icon mb-4 d-flex align-items-center justify-content-center">
          <span class="icon-instagram"></span>
        </div>
      </a>
    </div> -->
  </div>
</div>
</section>

<div class="col-md-7 wrap-about py-5 pr-md-4 ">
<div class="video-container">

  <iframe width="1311" height="480" src="https://www.youtube.com/embed/kZvow_QvuJo" frameborder="0"
    allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

</div>

<section class="ftco-section ftco-no-pt ftc-no-pb">
<div class="container">
  <div class="row">
    <!-- <div class="col-md-5 order-md-last wrap-about py-5 wrap-about bg-light">
      <div class="text px-4 ">
        <h2 class="mb-4">Bem vindo ao Colégio Jardim Getsêmani</h2>
        <p>Texto.</p>
        <p>Texto.</p>
        <p><a href="#" class="btn btn-secondary px-4 py-3">Read More</a></p>
      </div>
    </div> -->
    <div class="col-md-7 wrap-about py-5 pr-md-4 ">
      <h2 class="mb-4">Tarefa semanal 02 - 06/abril até 10/abril</h2>
      <h3 class=mb-4> Ensino Fundamental</h3>
      <h3 class=mb-4> 4º ano (9 anos)</h3>
      <p>Clique nas imagens para baixar a tarefa</p>
    </div>
    <!-- <div class="col-md-3 ">
      <a href="images/image_4.jpg" class="gallery image-popup img d-flex align-items-center"
        style="background-image: url(images/image_4.jpg);">
        <div class="icon mb-4 d-flex align-items-center justify-content-center">
          <span class="icon-instagram"></span>
        </div>
      </a>
    </div> -->
  </div>
</div>
</section>

<section>
<div class="container">
  <div class="row">
    <div class="col-sm">
      <a href="./images/infantil9/semana2/img1.jpg" download><img class="img-fluid"
          src="./images/infantil9/semana2/img1.jpg" alt=""></a>
    </div>
    <div class="col-sm">
      <a href="./images/infantil9/semana2/img2.jpg" download><img class="img-fluid"
          src="./images/infantil9/semana2/img2.jpg" alt=""></a>
    </div>
  </div>
  <div class="row">
    <div class="col-sm">
      <a href="./images/infantil9/semana2/img3.jpg" download><img class="img-fluid"
          src="./images/infantil9/semana2/img3.jpg" alt=""></a>
    </div>
    <div class="col-sm">
      <a href="./images/infantil9/semana2/img4.jpg" download><img class="img-fluid"
          src="./images/infantil9/semana2/img4.jpg" alt=""></a>
    </div>
  </div>
  <div class="row">
    <div class="col-sm">
      <a href="./images/infantil9/semana2/img5.jpg" download><img class="img-fluid"
          src="./images/infantil9/semana2/img5.jpg" alt=""></a>
    </div>
    <div class="col-sm">
      <a href="./images/infantil9/semana2/img6.jpg" download><img class="img-fluid"
          src="./images/infantil9/semana2/img6.jpg" alt=""></a>
    </div>
  </div>
  <div class="row">
    <div class="col-sm">
      <a href="./images/infantil9/semana2/img7.jpg" download><img class="img-fluid"
          src="./images/infantil9/semana2/img7.jpg" alt=""></a>
    </div>
  </div>
</div>
</section>






<section class="ftco-section ftco-no-pt ftc-no-pb">
<div class="container">
  <div class="row">
    <!-- <div class="col-md-5 order-md-last wrap-about py-5 wrap-about bg-light">
      <div class="text px-4 ">
        <h2 class="mb-4">Bem vindo ao Colégio Jardim Getsêmani</h2>
        <p>Texto.</p>
        <p>Texto.</p>
        <p><a href="#" class="btn btn-secondary px-4 py-3">Read More</a></p>
      </div>
    </div> -->
    <div class="col-md-7 wrap-about py-5 pr-md-4 ">
      <h2 class="mb-4">Tarefa semanal 01 - 30/março até 03/abril</h2>
      <h3 class=mb-4> Ensino Fundamental</h3>
      <h3 class=mb-4> 4º ano (9 anos)</h3>
      <p>Clique nas imagens para baixar a tarefa</p>
    </div>
    <!-- <div class="col-md-3 ">
      <a href="images/image_4.jpg" class="gallery image-popup img d-flex align-items-center"
        style="background-image: url(images/image_4.jpg);">
        <div class="icon mb-4 d-flex align-items-center justify-content-center">
          <span class="icon-instagram"></span>
        </div>
      </a>
    </div> -->
  </div>
</div>
</section>

<section>
<div class="container">
  <div class="row">
    <div class="col-sm">
      <a href="./images/infantil9/semana1/img1.jpg" download><img class="img-fluid"
          src="./images/infantil9/semana1/img1.jpg" alt=""></a>
    </div>
    <div class="col-sm">
      <a href="./images/infantil9/semana1/img2.jpg" download><img class="img-fluid"
          src="./images/infantil9/semana1/img2.jpg" alt=""></a>
    </div>
  </div>
  <div class="row">
    <div class="col-sm">
      <a href="./images/infantil9/semana1/img3.jpg" download><img class="img-fluid"
          src="./images/infantil9/semana1/img3.jpg" alt=""></a>
    </div>
    <div class="col-sm">
      <a href="./images/infantil9/semana1/img4.jpg" download><img class="img-fluid"
          src="./images/infantil9/semana1/img4.jpg" alt=""></a>
    </div>
  </div>
  <div class="row">
    <div class="col-sm">
      <a href="./images/infantil9/semana1/img5.jpg" download><img class="img-fluid"
          src="./images/infantil9/semana1/img5.jpg" alt=""></a>
    </div>
    <div class="col-sm">
      <a href="./images/infantil9/semana1/img6.jpg" download><img class="img-fluid"
          src="./images/infantil9/semana1/img6.jpg" alt=""></a>
    </div>
  </div>
  <div class="row">
    <div class="col-sm">
      <a href="./images/infantil9/semana1/img7.jpg" download><img class="img-fluid"
          src="./images/infantil9/semana1/img7.jpg" alt=""></a>
    </div>
    <div class="col-sm">
      <a href="./images/infantil9/semana1/img8.jpg" download><img class="img-fluid"
          src="./images/infantil9/semana1/img8.jpg" alt=""></a>
    </div>
  </div>
  <div class="row">
    <div class="col-sm">
      <a href="./images/infantil9/semana1/img9.jpg" download><img class="img-fluid"
          src="./images/infantil9/semana1/img9.jpg" alt=""></a>
    </div>
    <div class="col-sm">
      <a href="./images/infantil9/semana1/img10.jpg" download><img class="img-fluid"
          src="./images/infantil9/semana1/img10.jpg" alt=""></a>
    </div>
  </div>
  <div class="row">
    <div class="col-sm">
      <a href="./images/infantil9/semana1/img11.jpg" download><img class="img-fluid"
          src="./images/infantil9/semana1/img11.jpg" alt=""></a>
    </div>
    <div class="col-sm">
      <a href="./images/infantil9/semana1/img12.jpg" download><img class="img-fluid"
          src="./images/infantil9/semana1/img12.jpg" alt=""></a>
    </div>
  </div>
  <div class="row">
    <div class="col-sm">
      <a href="./images/infantil9/semana1/img13.jpg" download><img class="img-fluid"
          src="./images/infantil9/semana1/img13.jpg" alt=""></a>
    </div>
    <div class="col-sm">
      <a href="./images/infantil9/semana1/img14.jpg" download><img class="img-fluid"
          src="./images/infantil9/semana1/img14.jpg" alt=""></a>
    </div>
  </div>
  <div class="row">
    <div class="col-sm">
      <a href="./images/infantil9/semana1/img15.jpg" download><img class="img-fluid"
          src="./images/infantil9/semana1/img15.jpg" alt=""></a>
    </div>
    <div class="col-sm">
      <a href="./images/infantil9/semana1/img16.jpg" download><img class="img-fluid"
          src="./images/infantil9/semana1/img16.jpg" alt=""></a>
    </div>
  </div>
  <div class="row">
    <div class="col-sm">
      <a href="./images/infantil9/semana1/img17.jpg" download><img class="img-fluid"
          src="./images/infantil9/semana1/img17.jpg" alt=""></a>
    </div>
    <div class="col-sm">
      <a href="./images/infantil9/semana1/img18.jpg" download><img class="img-fluid"
          src="./images/infantil9/semana1/img18.jpg" alt=""></a>
    </div>
  </div>
  <div class="row">
    <div class="col-sm">
      <a href="./images/infantil9/semana1/img19.jpg" download><img class="img-fluid"
          src="./images/infantil9/semana1/img19.jpg" alt=""></a>
    </div>
    <div class="col-sm">
      <a href="./images/infantil9/semana1/img20.jpg" download><img class="img-fluid"
          src="./images/infantil9/semana1/img20.jpg" alt=""></a>
    </div>
  </div>
  <div class="row">
    <div class="col-sm">
      <a href="./images/infantil9/semana1/img21.jpg" download><img class="img-fluid"
          src="./images/infantil9/semana1/img21.jpg" alt=""></a>
    </div>
    <div class="col-sm">
      <a href="./images/infantil9/semana1/img22.jpg" download><img class="img-fluid"
          src="./images/infantil9/semana1/img22.jpg" alt=""></a>
    </div>
  </div>
  <div class="row">
    <div class="col-sm">
      <a href="./images/infantil9/semana1/img19.jpg" download><img class="img-fluid"
          src="./images/infantil9/semana1/img19.jpg" alt=""></a>
    </div>
    <div class="col-sm">
      <a href="./images/infantil9/semana1/img20.jpg" download><img class="img-fluid"
          src="./images/infantil9/semana1/img20.jpg" alt=""></a>
    </div>
  </div>
</div>
</section>`;