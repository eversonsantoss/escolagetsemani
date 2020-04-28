var alunos = 'EJG1977';

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
     
            <h2 class="mb-4">Semana da Páscoa (video 07) </h2>
            <h3 class="mb-4"> Cristo, nosso Juiz</h3>
            <div class="video-container">

            <iframe width="1311" height="480" src="https://www.youtube.com/embed/o9-NJ7UHxPA" 
                   frameborder="0"
                   allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" 
                   allowfullscreen></iframe>
           </div>

           <h2 class="mb-4">Semana da Páscoa (video 08) </h2>
           <h3 class="mb-4"> Cristo, nosso Rei</h3>
           <div class="video-container">

           <iframe width="1311" height="480" src="https://www.youtube.com/embed/hbC4wi_y2dM"
                   frameborder="0" 
                   allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                   allowfullscreen></iframe>
          
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
    <h2 class= "mb-4"> Recado aos pais e/ou responsáveis: </h2>
    <h3 class="mb-4"> Querida FAMÍLIA, ajude os nossos BEBÊS a realizar as atividades.Dê um lindo colorido em cada imagem. Usem a criatividade e caprichem ! </h3> 
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


<h3> Vídeo aula 03</h3>
<div class="video-container">

  <iframe width="1311" height="480" src="https://www.youtube.com/embed/FY7fDIGMEas" frameborder="0"
    allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

</div>

<h3> Vídeo aula 04</h3>
<div class="video-container">

  <iframe width="1311" height="480" src="https://www.youtube.com/embed/m6xCuqMvb7A" frameborder="0"
    allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

</div>

<h3> Vídeo aula 05</h3>
<div class="video-container">

  <iframe width="1311" height="480" src="https://www.youtube.com/embed/3E145UlE1fE" frameborder="0"
    allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

</div>

<h3> Vídeo aula 06</h3>
<div class="video-container">

<iframe width="1311" height="480" src="https://www.youtube.com/embed/dxuI0RVNA4Q" frameborder="0"
 allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

</div>

<h3> Vídeo aula 07(Formas Geométricas 01)</h3>
<div class="video-container">

<iframe width="1311" height="480" src="https://www.youtube.com/embed/AJXH-EPipzY" frameborder="0"
 allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

</div>

<h3> Vídeo aula 08(Formas Geométricas 02)</h3>
<div class="video-container">

<iframe width="1311" height="480" src="https://www.youtube.com/embed/RTpzYDB7WGc" frameborder="0"
 allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

</div>

<h3> Vídeo aula 09(vogais)</h3>
<div class="video-container">

<iframe width="1311" height="480" src="https://www.youtube.com/embed/ry53Tx5SWd0" frameborder="0"
 allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

</div>

<h3> Vídeo aula 10(Cores)</h3>
<div class="video-container">

<iframe width="969" height="480" src="https://www.youtube.com/embed/_lCFJFzkDPE" frameborder="0"
 allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

</div>

<h3> Vídeo aula 11</h3>
<div class="video-container">

<iframe width="969" height="480" src="https://www.youtube.com/embed/TQ7Epb0sheM" frameborder="0"
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
        <h2 class="mb-4">Tarefa semanal 05 - 27/abril até 01/maio</h2>
        <h3 class=mb-4> Educação Infantil</h3>
        <h3 class=mb-4> Turma Berçário I & II</h3>
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
        <a href="./images/berçario/semana5/img1.jpg" download> <img class="img-fluid"
            src="./images/berçario/semana5/img1.jpg" alt=""></a>
      </div>
      <div class="col-sm">
        <a href="./images/berçario/semana5/img2.jpg" download> <img class="img-fluid"
            src="./images/berçario/semana5/img2.jpg" alt=""></a>
      </div>
    </div>
    <div class="row">
      <div class="col-sm">
        <a href="./images/berçario/semana5/img3.jpg" download> <img class="img-fluid"
            src="./images/berçario/semana5/img3.jpg" alt=""></a>
      </div>
      <div class="col-sm">
      <a href="./images/berçario/semana5/img4.jpg" download> <img class="img-fluid"
          src="./images/berçario/semana5/img4.jpg" alt=""></a>
    </div>
    <div class="row">
      <div class="col-sm">
        <a href="./images/berçario/semana5/img5.jpg" download> <img class="img-fluid"
            src="./images/berçario/semana5/img5.jpg" alt=""></a>
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
        <h2 class="mb-4">Tarefa semanal 04 - 20/abril até 24/abril</h2>
        <h3 class=mb-4> Educação Infantil</h3>
        <h3 class=mb-4> Turma Berçário I & II</h3>
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
        <a href="./images/berçario/semana4/img1.jpg" download> <img class="img-fluid"
            src="./images/berçario/semana4/img1.jpg" alt=""></a>
      </div>
      <div class="col-sm">
        <a href="./images/berçario/semana4/img2.jpg" download> <img class="img-fluid"
            src="./images/berçario/semana4/img2.jpg" alt=""></a>
      </div>
    </div>
    <div class="row">
      <div class="col-sm">
        <a href="./images/berçario/semana4/img3.jpg" download> <img class="img-fluid"
            src="./images/berçario/semana4/img3.jpg" alt=""></a>
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
            <h2 class="mb-4">Vídeos da Tarefa semanal - 06/abril até 10/abril (vídeo 01) </h2>
            <h3 class= "mb-6">Faça o desenho do CARANGUEJO com o auxílio da mamãe e DEPOIS COLE COM PAPEL LARANJA.</h3>
            <div class="video-container">

                <iframe width="1311" height="480" src="https://www.youtube.com/embed/h9DDiQLAVW0"
                    frameborder="0"
                    allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                    allowfullscreen></iframe>

            </div>
            <h2 class="mb-4">Vídeos da Tarefa semanal - 06/abril até 10/abril(vídeo 02) </h2>
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


<h3> Vídeo aula 03</h3>
<div class="video-container">

  <iframe width="1311" height="480" src="https://www.youtube.com/embed/FY7fDIGMEas" frameborder="0"
    allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

</div>

<h3> Vídeo aula 04</h3>
<div class="video-container">

  <iframe width="1311" height="480" src="https://www.youtube.com/embed/m6xCuqMvb7A" frameborder="0"
    allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

</div>

<h3> Vídeo aula 05</h3>
<div class="video-container">

  <iframe width="1311" height="480" src="https://www.youtube.com/embed/3E145UlE1fE" frameborder="0"
    allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

</div>

<h3> Vídeo aula 06</h3>
<div class="video-container">

<iframe width="1311" height="480" src="https://www.youtube.com/embed/dxuI0RVNA4Q" frameborder="0"
 allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

</div>

<h3> Vídeo aula 07(Formas Geométricas 01)</h3>
<div class="video-container">

<iframe width="1311" height="480" src="https://www.youtube.com/embed/AJXH-EPipzY" frameborder="0"
 allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

</div>

<h3> Vídeo aula 08(Formas Geométricas 02)</h3>
<div class="video-container">

<iframe width="1311" height="480" src="https://www.youtube.com/embed/RTpzYDB7WGc" frameborder="0"
 allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

</div>

<h3> Vídeo aula 09(vogais)</h3>
<div class="video-container">

<iframe width="1311" height="480" src="https://www.youtube.com/embed/ry53Tx5SWd0" frameborder="0"
 allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

</div>

<h3> Vídeo aula 10(Cores)</h3>
<div class="video-container">

<iframe width="969" height="480" src="https://www.youtube.com/embed/_lCFJFzkDPE" frameborder="0"
 allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

</div>

<h3> Vídeo aula 11</h3>
<div class="video-container">

<iframe width="969" height="480" src="https://www.youtube.com/embed/TQ7Epb0sheM" frameborder="0"
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
        <h2 class="mb-4">Tarefa semanal 05 - 27/abril até 01/maio</h2>
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
        <a href="./images/infantil2/semana5/img1.jpg" download> <img class="img-fluid"
            src="./images/infantil2/semana5/img1.jpg" alt=""></a>
      </div>
      <div class="col-sm">
        <a href="./images/infantil2/semana5/img2.jpg" download> <img class="img-fluid"
            src="./images/infantil2/semana5/img2.jpg" alt=""></a>
      </div>
    </div>
    <div class="row">
      <div class="col-sm">
        <a href="./images/infantil2/semana5/img3.jpg" download> <img class="img-fluid"
            src="./images/infantil2/semana5/img3.jpg" alt=""></a>
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
        <h2 class="mb-4">Tarefa semanal 04 - 20/abril até 24/abril</h2>
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
        <a href="./images/infantil2/semana4/img1.jpg" download> <img class="img-fluid"
            src="./images/infantil2/semana4/img1.jpg" alt=""></a>
      </div>
      <div class="col-sm">
        <a href="./images/infantil2/semana4/img2.jpg" download> <img class="img-fluid"
            src="./images/infantil2/semana4/img2.jpg" alt=""></a>
      </div>
    </div>
    <div class="row">
      <div class="col-sm">
        <a href="./images/infantil2/semana4/img3.jpg" download> <img class="img-fluid"
            src="./images/infantil2/semana4/img3.jpg" alt=""></a>
      </div>
      <div class="col-sm">
      <a href="./images/infantil2/semana4/img4.jpg" download> <img class="img-fluid"
          src="./images/infantil2/semana4/img4.jpg" alt=""></a>
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
        <h2 class="mb-4">Tarefa semanal 03 - 13/abril até 17/abril</h2>
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
        <a href="./images/infantil2/semana3/img1.jpg" download> <img class="img-fluid"
            src="./images/infantil2/semana3/img1.jpg" alt=""></a>
      </div>
      <div class="col-sm">
        <a href="./images/infantil2/semana3/img2.jpg" download> <img class="img-fluid"
            src="./images/infantil2/semana3/img2.jpg" alt=""></a>
      </div>
    </div>
    <div class="row">
      <div class="col-sm">
        <a href="./images/infantil2/semana3/img3.jpg" download> <img class="img-fluid"
            src="./images/infantil2/semana3/img3.jpg" alt=""></a>
      </div>
      <div class="col-sm">
      <a href="./images/infantil2/semana3/img4.jpg" download> <img class="img-fluid"
          src="./images/infantil2/semana3/img4.jpg" alt=""></a>
    </div>
    <div class="row">
      <div class="col-sm">
        <a href="./images/infantil2/semana3/img5.jpg" download> <img class="img-fluid"
            src="./images/infantil2/semana3/img5.jpg" alt=""></a>
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


<h3> Vídeo aula 03</h3>
<div class="video-container">

  <iframe width="1311" height="480" src="https://www.youtube.com/embed/FY7fDIGMEas" frameborder="0"
   allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

</div>

<h3> Vídeo aula 04</h3>
<div class="video-container">

  <iframe width="1311" height="480" src="https://www.youtube.com/embed/m6xCuqMvb7A" frameborder="0"
    allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

</div>

<h3> Vídeo aula 05</h3>
<div class="video-container">

  <iframe width="1311" height="480" src="https://www.youtube.com/embed/3E145UlE1fE" frameborder="0"
    allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

</div>

<h3> Vídeo aula 06</h3>
<div class="video-container">

<iframe width="1311" height="480" src="https://www.youtube.com/embed/dxuI0RVNA4Q" frameborder="0"
 allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

</div>

<h3> Vídeo aula 07(Formas Geométricas 01)</h3>
<div class="video-container">

<iframe width="1311" height="480" src="https://www.youtube.com/embed/AJXH-EPipzY" frameborder="0"
 allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

</div>

<h3> Vídeo aula 08(Formas Geométricas 02)</h3>
<div class="video-container">

<iframe width="1311" height="480" src="https://www.youtube.com/embed/RTpzYDB7WGc" frameborder="0"
 allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

</div>

<h3> Vídeo aula 09(vogais)</h3>
<div class="video-container">

<iframe width="1311" height="480" src="https://www.youtube.com/embed/ry53Tx5SWd0" frameborder="0"
 allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

</div>

<h3> Vídeo aula 10(Cores)</h3>
<div class="video-container">

<iframe width="969" height="480" src="https://www.youtube.com/embed/_lCFJFzkDPE" frameborder="0"
 allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

</div>

<h3> Vídeo aula 11</h3>
<div class="video-container">

<iframe width="969" height="480" src="https://www.youtube.com/embed/TQ7Epb0sheM" frameborder="0"
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
      <h2 class="mb-4">Tarefa semanal 05 - 27/abril até 01/maio</h2>
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
      <a href="./images/infantil3/semana5/img1.jpg" download><img class="img-fluid"
          src="./images/infantil3/semana5/img1.jpg" alt="">
      </a>
    </div>
    <div class="col-sm">
      <a href="./images/infantil3/semana5/img2.jpg" download> <img class="img-fluid"
          src="./images/infantil3/semana5/img2.jpg" alt=""></a>
    </div>
  </div>
  <div class="row">
    <div class="col-sm">
      <a href="./images/infantil3/semana5/img3.jpg" download> <img class="img-fluid"
          src="./images/infantil3/semana5/img3.jpg" alt=""></a>
    </div>
    <div class="col-sm">
      <a href="./images/infantil3/semana5/img4.jpg" download> <img class="img-fluid"
          src="./images/infantil3/semana5/img4.jpg" alt=""></a>
    </div>
  </div>
  <div class="row">
    <div class="col-sm">
      <a href="./images/infantil3/semana5/img5.jpg" download> <img class="img-fluid"
          src="./images/infantil3/semana5/img5.jpg" alt=""></a>
    </div>
    <div class="col-sm">
      <a href="./images/infantil3/semana5/img6.jpg" download> <img class="img-fluid"
          src="./images/infantil3/semana5/img6.jpg" alt=""></a>
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
      <h2 class="mb-4">Tarefa semanal 04 - 20/abril até 24/abril</h2>
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
      <a href="./images/infantil3/semana4/img1.jpg" download><img class="img-fluid"
          src="./images/infantil3/semana4/img1.jpg" alt="">
      </a>
    </div>
    <div class="col-sm">
      <a href="./images/infantil3/semana4/img2.jpg" download> <img class="img-fluid"
          src="./images/infantil3/semana4/img2.jpg" alt=""></a>
    </div>
  </div>
  <div class="row">
    <div class="col-sm">
      <a href="./images/infantil3/semana4/img3.jpg" download> <img class="img-fluid"
          src="./images/infantil3/semana4/img3.jpg" alt=""></a>
    </div>
    <div class="col-sm">
      <a href="./images/infantil3/semana4/img4.jpg" download> <img class="img-fluid"
          src="./images/infantil3/semana4/img4.jpg" alt=""></a>
    </div>
  </div>
  <div class="row">
    <div class="col-sm">
      <a href="./images/infantil3/semana4/img5.jpg" download> <img class="img-fluid"
          src="./images/infantil3/semana4/img5.jpg" alt=""></a>
    </div>
    <div class="col-sm">
      <a href="./images/infantil3/semana4/img6.jpg" download> <img class="img-fluid"
          src="./images/infantil3/semana4/img6.jpg" alt=""></a>
    </div>
    <div class="row">
    <div class="col-sm">
      <a href="./images/infantil3/semana4/img7.jpg" download> <img class="img-fluid"
          src="./images/infantil3/semana4/img7.jpg" alt=""></a>
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
      <h2 class="mb-4">Tarefa semanal 03 - 13/abril até 17/abril</h2>
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
      <a href="./images/infantil3/semana3/img1.jpg" download><img class="img-fluid"
          src="./images/infantil3/semana3/img1.jpg" alt="">
      </a>
    </div>
    <div class="col-sm">
      <a href="./images/infantil3/semana3/img2.jpg" download> <img class="img-fluid"
          src="./images/infantil3/semana3/img2.jpg" alt=""></a>
    </div>
  </div>
  <div class="row">
    <div class="col-sm">
      <a href="./images/infantil3/semana3/img3.jpg" download> <img class="img-fluid"
          src="./images/infantil3/semana3/img3.jpg" alt=""></a>
    </div>
    <div class="col-sm">
      <a href="./images/infantil3/semana3/img4.jpg" download> <img class="img-fluid"
          src="./images/infantil3/semana3/img4.jpg" alt=""></a>
    </div>
  </div>
  <div class="row">
    <div class="col-sm">
      <a href="./images/infantil3/semana3/img5.jpg" download> <img class="img-fluid"
          src="./images/infantil3/semana3/img5.jpg" alt=""></a>
    </div>
    <div class="col-sm">
      <a href="./images/infantil3/semana3/img6.jpg" download> <img class="img-fluid"
          src="./images/infantil3/semana3/img6.jpg" alt=""></a>
    </div>
    <div class="row">
    <div class="col-sm">
      <a href="./images/infantil3/semana3/img7.jpg" download> <img class="img-fluid"
          src="./images/infantil3/semana3/img7.jpg" alt=""></a>
    </div>
    <div class="col-sm">
      <a href="./images/infantil3/semana3/img8.jpg" download> <img class="img-fluid"
          src="./images/infantil3/semana3/img8.jpg" alt=""></a>
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

<h3> Vídeo aula 02(Português)</h3>
<div class="video-container">

<iframe width="1311" height="480" src="https://www.youtube.com/embed/7kjXTeRdVmA" frameborder="0"
 allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

</div>

<h3> Vídeo aula 03(Matemática)</h3>
<div class="video-container">

<iframe width="1311" height="480" src="https://www.youtube.com/embed/Fms1FdvvF2g" frameborder="0"
 allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

</div>

<h3> Vídeo aula 04(Datas comemorativas)</h3>
<div class="video-container">

<iframe width="1311" height="480" src="https://www.youtube.com/embed/_taECuBe2oI" frameborder="0"
 allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

</div>

<h3> Vídeo aula 05(Linguagem 01)</h3>
<div class="video-container">

<iframe width="1311" height="480" src="https://www.youtube.com/embed/ed4W-USjh6o" frameborder="0"
 allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

</div>
<h3> Vídeo aula 06(Linguagem 02)</h3>
<div class="video-container">

<iframe width="1311" height="480" src="https://www.youtube.com/embed/MyScaaf2RIo" frameborder="0"
 allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

</div>
<h3> Vídeo aula 07(Linguagem 03)</h3>
<div class="video-container">

<iframe width="1311" height="480" src="https://www.youtube.com/embed/v_CUJhYxYVk" frameborder="0"
 allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

</div>
<h3> Vídeo aula 08(Matemática 01)</h3>
<div class="video-container">

<iframe width="1311" height="480" src="https://www.youtube.com/embed/1Jzr4CSCD8A" frameborder="0"
 allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

</div>
<h3> Vídeo aula 09(Matemática 02)</h3>
<div class="video-container">

<iframe width="1311" height="480" src="https://www.youtube.com/embed/KL7tKmjs6Is" frameborder="0"
 allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

</div>

<h3> Vídeo aula 10(Matemática 03)</h3>
<div class="video-container">

<iframe width="1311" height="480" src="https://www.youtube.com/embed/ufZgdjU0wfg" frameborder="0"
 allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

</div>

<h3> Vídeo aula 11(Linguagem 04)</h3>
<div class="video-container">

<iframe width="1311" height="480" src="https://www.youtube.com/embed/YIyjOv6xNDM" frameborder="0"
 allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

</div>

<h3> Vídeo aula 12(Linguagem 01)</h3>
<div class="video-container">

<iframe width="969" height="480" src="https://www.youtube.com/embed/wKKwF1W3P48" frameborder="0"
 allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

</div>

<h3> Vídeo aula 13(Linguagem 02)</h3>
<div class="video-container">

<iframe width="969" height="480" src="https://www.youtube.com/embed/1g8YEjuSFJI" frameborder="0"
 allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

</div>

<h3> Vídeo aula 14(Linguagem 03)</h3>
<div class="video-container">

<iframe width="969" height="480" src="https://www.youtube.com/embed/H2cmtl3DKZQ" frameborder="0"
 allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

</div>

<h3> Vídeo aula 15(Matemática)</h3>
<div class="video-container">

<iframe width="969" height="480" src="https://www.youtube.com/embed/8fL_nszEnsE" frameborder="0"
 allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

</div>

<h3> Vídeo aula 16(Natureza e Sociedade)</h3>
<div class="video-container">

<iframe width="969" height="480" src="https://www.youtube.com/embed/_RSetW3zB2I" frameborder="0"
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
        <h2 class="mb-4">Tarefa semanal 05 - 27/abril até 01/maio</h2>
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
        <a href="./images/infantil4/semana5/img1.jpg" download><img class="img-fluid"
            src="./images/infantil4/semana5/img1.jpg" alt="">
        </a>
      </div>
      <div class="col-sm">
        <a href="./images/infantil4/semana5/img2.jpg" download> <img class="img-fluid"
            src="./images/infantil4/semana5/img2.jpg" alt=""></a>
      </div>
    </div>
    <div class="row">
      <div class="col-sm">
        <a href="./images/infantil4/semana5/img3.jpg" download> <img class="img-fluid"
            src="./images/infantil4/semana5/img3.jpg" alt=""></a>
      </div>
      <div class="col-sm">
        <a href="./images/infantil4/semana5/img4.jpg" download> <img class="img-fluid"
            src="./images/infantil4/semana5/img4.jpg" alt=""></a>
      </div>
    </div>
    <div class="row">
      <div class="col-sm">
        <a href="./images/infantil4/semana5/img5.jpg" download> <img class="img-fluid"
            src="./images/infantil4/semana5/img5.jpg" alt=""></a>
      </div>
      <div class="col-sm">
        <a href="./images/infantil4/semana5/img6.jpg" download> <img class="img-fluid"
            src="./images/infantil4/semana5/img6.jpg" alt=""></a>
      </div>
      <div class="row">
      <div class="col-sm">
        <a href="./images/infantil4/semana5/img7.jpg" download> <img class="img-fluid"
            src="./images/infantil4/semana5/img7.jpg" alt=""></a>
      </div>
      <div class="col-sm">
        <a href="./images/infantil4/semana5/img8.jpg" download> <img class="img-fluid"
            src="./images/infantil4/semana5/img8.jpg" alt=""></a>
      </div>
      <div class="row">
      <div class="col-sm">
        <a href="./images/infantil4/semana5/img9.jpg" download> <img class="img-fluid"
            src="./images/infantil4/semana5/img9.jpg" alt=""></a>
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
        <h2 class="mb-4">Tarefa semanal 04 - 20/abril até 24/abril</h2>
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
        <a href="./images/infantil4/semana4/img1.jpg" download><img class="img-fluid"
            src="./images/infantil4/semana4/img1.jpg" alt="">
        </a>
      </div>
      <div class="col-sm">
        <a href="./images/infantil4/semana4/img2.jpg" download> <img class="img-fluid"
            src="./images/infantil4/semana4/img2.jpg" alt=""></a>
      </div>
    </div>
    <div class="row">
      <div class="col-sm">
        <a href="./images/infantil4/semana4/img3.jpg" download> <img class="img-fluid"
            src="./images/infantil4/semana4/img3.jpg" alt=""></a>
      </div>
      <div class="col-sm">
        <a href="./images/infantil4/semana4/img4.jpg" download> <img class="img-fluid"
            src="./images/infantil4/semana4/img4.jpg" alt=""></a>
      </div>
    </div>
    <div class="row">
      <div class="col-sm">
        <a href="./images/infantil4/semana4/img5.jpg" download> <img class="img-fluid"
            src="./images/infantil4/semana4/img5.jpg" alt=""></a>
      </div>
      <div class="col-sm">
        <a href="./images/infantil4/semana4/img6.jpg" download> <img class="img-fluid"
            src="./images/infantil4/semana4/img6.jpg" alt=""></a>
      </div>
      <div class="row">
      <div class="col-sm">
        <a href="./images/infantil4/semana4/img7.jpg" download> <img class="img-fluid"
            src="./images/infantil4/semana4/img7.jpg" alt=""></a>
      </div>
      <div class="col-sm">
        <a href="./images/infantil4/semana4/img8.jpg" download> <img class="img-fluid"
            src="./images/infantil4/semana4/img8.jpg" alt=""></a>
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
        <h2 class="mb-4">Tarefa semanal 03 - 13/abril até 17/abril</h2>
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
        <a href="./images/infantil4/semana3/img1.jpg" download><img class="img-fluid"
            src="./images/infantil4/semana3/img1.jpg" alt="">
        </a>
      </div>
      <div class="col-sm">
        <a href="./images/infantil4/semana3/img2.jpg" download> <img class="img-fluid"
            src="./images/infantil4/semana3/img2.jpg" alt=""></a>
      </div>
    </div>
    <div class="row">
      <div class="col-sm">
        <a href="./images/infantil4/semana3/img3.jpg" download> <img class="img-fluid"
            src="./images/infantil4/semana3/img3.jpg" alt=""></a>
      </div>
      <div class="col-sm">
        <a href="./images/infantil4/semana3/img4.jpg" download> <img class="img-fluid"
            src="./images/infantil4/semana3/img4.jpg" alt=""></a>
      </div>
    </div>
    <div class="row">
      <div class="col-sm">
        <a href="./images/infantil4/semana3/img5.jpg" download> <img class="img-fluid"
            src="./images/infantil4/semana3/img5.jpg" alt=""></a>
      </div>
      <div class="col-sm">
        <a href="./images/infantil4/semana3/img6.jpg" download> <img class="img-fluid"
            src="./images/infantil4/semana3/img6.jpg" alt=""></a>
      </div>
      <div class="row">
      <div class="col-sm">
        <a href="./images/infantil4/semana3/img7.jpg" download> <img class="img-fluid"
            src="./images/infantil4/semana3/img7.jpg" alt=""></a>
      </div>
      <div class="col-sm">
        <a href="./images/infantil4/semana3/img8.jpg" download> <img class="img-fluid"
            src="./images/infantil4/semana3/img8.jpg" alt=""></a>
      </div>
      <div class="row">
      <div class="col-sm">
        <a href="./images/infantil4/semana3/img9.jpg" download> <img class="img-fluid"
            src="./images/infantil4/semana3/img9.jpg" alt=""></a>
      </div>
      <div class="col-sm">
        <a href="./images/infantil4/semana3/img10.jpg" download> <img class="img-fluid"
            src="./images/infantil4/semana3/img10.jpg" alt=""></a>
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
<h3> Vídeo aula 02(Linguagem 01)</h3>
<div class="video-container">

<iframe width="1311" height="480" src="https://www.youtube.com/embed/ed4W-USjh6o" frameborder="0"
 allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

</div>
<h3> Vídeo aula 03(Linguagem 02)</h3>
<div class="video-container">

<iframe width="1311" height="480" src="https://www.youtube.com/embed/MyScaaf2RIo" frameborder="0"
 allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

</div>
<h3> Vídeo aula 04(Linguagem 03)</h3>
<div class="video-container">

<iframe width="1311" height="480" src="https://www.youtube.com/embed/v_CUJhYxYVk" frameborder="0"
 allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

</div>
<h3> Vídeo aula 05(Matemática 01)</h3>
<div class="video-container">

<iframe width="1311" height="480" src="https://www.youtube.com/embed/1Jzr4CSCD8A" frameborder="0"
 allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

</div>
<h3> Vídeo aula 06(Matemática 02)</h3>
<div class="video-container">

<iframe width="1311" height="480" src="https://www.youtube.com/embed/KL7tKmjs6Is" frameborder="0"
 allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

</div>

<h3> Vídeo aula 07(Matemática 03)</h3>
<div class="video-container">

<iframe width="1311" height="480" src="https://www.youtube.com/embed/ufZgdjU0wfg" frameborder="0"
 allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

</div>

<h3> Vídeo aula 08(Linguagem 04)</h3>
<div class="video-container">

<iframe width="1311" height="480" src="https://www.youtube.com/embed/YIyjOv6xNDM" frameborder="0"
 allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

</div>

<h3> Vídeo aula 09(Linguagem 05)</h3>
<div class="video-container">

<iframe width="1311" height="480" src="https://www.youtube.com/embed/J7TmSLwbRfM" frameborder="0"
 allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

</div>

<h3> Vídeo aula 10(Linguagem 06)</h3>
<div class="video-container">

<iframe width="1311" height="480" src="https://www.youtube.com/embed/vHfv2bkL3M0" frameborder="0"
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
      <h2 class="mb-4">Tarefa semanal 05 - 27/abril até 01/maio</h2>
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
      <a href="./images/infantil5/semana5/img1.jpg" download><img class="img-fluid"
          src="./images/infantil5/semana5/img1.jpg" alt=""></a>
    </div>
    <div class="col-sm">
      <a href="./images/infantil5/semana5/img2.jpg" download><img class="img-fluid"
          src="./images/infantil5/semana5/img2.jpg" alt=""></a>
    </div>
  </div>
  <div class="row">
    <div class="col-sm">
      <a href="./images/infantil5/semana5/img3.jpg" download><img class="img-fluid"
          src="./images/infantil5/semana5/img3.jpg" alt=""></a>
    </div>
    <div class="col-sm">
      <a href="./images/infantil5/semana5/img4.jpg" download><img class="img-fluid"
          src="./images/infantil5/semana5/img4.jpg" alt=""></a>
    </div>
  </div>
  <div class="row">
    <div class="col-sm">
      <a href="./images/infantil5/semana5/img5.jpg" download><img class="img-fluid"
          src="./images/infantil5/semana5/img5.jpg" alt=""></a>
    </div>
    <div class="col-sm">
      <a href="./images/infantil5/semana5/img6.jpg" download><img class="img-fluid"
          src="./images/infantil5/semana5/img6.jpg" alt=""></a>
    </div>
  </div>
  <div class="row">
    <div class="col-sm">
      <a href="./images/infantil5/semana5/img7.jpg" download><img class="img-fluid"
          src="./images/infantil5/semana5/img7.jpg" alt=""></a>
    </div>
    <div class="col-sm">
      <a href="./images/infantil5/semana5/img8.jpg" download><img class="img-fluid"
          src="./images/infantil5/semana5/img8.jpg" alt=""></a>
    </div>
    <div class="row">
    <div class="col-sm">
      <a href="./images/infantil5/semana5/img9.jpg" download><img class="img-fluid"
          src="./images/infantil5/semana5/img9.jpg" alt=""></a>
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
      <h2 class="mb-4">Tarefa semanal 04 - 20/abril até 24/abril</h2>
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
      <a href="./images/infantil5/semana4/img1.jpg" download><img class="img-fluid"
          src="./images/infantil5/semana4/img1.jpg" alt=""></a>
    </div>
    <div class="col-sm">
      <a href="./images/infantil5/semana4/img2.jpg" download><img class="img-fluid"
          src="./images/infantil5/semana4/img2.jpg" alt=""></a>
    </div>
  </div>
  <div class="row">
    <div class="col-sm">
      <a href="./images/infantil5/semana4/img3.jpg" download><img class="img-fluid"
          src="./images/infantil5/semana4/img3.jpg" alt=""></a>
    </div>
    <div class="col-sm">
      <a href="./images/infantil5/semana4/img4.jpg" download><img class="img-fluid"
          src="./images/infantil5/semana4/img4.jpg" alt=""></a>
    </div>
  </div>
  <div class="row">
    <div class="col-sm">
      <a href="./images/infantil5/semana4/img5.jpg" download><img class="img-fluid"
          src="./images/infantil5/semana4/img5.jpg" alt=""></a>
    </div>
    <div class="col-sm">
      <a href="./images/infantil5/semana4/img6.jpg" download><img class="img-fluid"
          src="./images/infantil5/semana4/img6.jpg" alt=""></a>
    </div>
  </div>
  <div class="row">
    <div class="col-sm">
      <a href="./images/infantil5/semana4/img7.jpg" download><img class="img-fluid"
          src="./images/infantil5/semana4/img7.jpg" alt=""></a>
    </div>
    <div class="col-sm">
      <a href="./images/infantil5/semana4/img8.jpg" download><img class="img-fluid"
          src="./images/infantil5/semana4/img8.jpg" alt=""></a>
    </div>
    <div class="row">
    <div class="col-sm">
      <a href="./images/infantil5/semana4/img9.jpg" download><img class="img-fluid"
          src="./images/infantil5/semana4/img9.jpg" alt=""></a>
    </div>
    <div class="col-sm">
      <a href="./images/infantil5/semana4/img10.jpg" download><img class="img-fluid"
          src="./images/infantil5/semana4/img10.jpg" alt=""></a>
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
      <h2 class="mb-4">Tarefa semanal 03 - 13/abril até 17/abril</h2>
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
      <a href="./images/infantil5/semana3/img1.jpg" download><img class="img-fluid"
          src="./images/infantil5/semana3/img1.jpg" alt=""></a>
    </div>
    <div class="col-sm">
      <a href="./images/infantil5/semana3/img2.jpg" download><img class="img-fluid"
          src="./images/infantil5/semana3/img2.jpg" alt=""></a>
    </div>
  </div>
  <div class="row">
    <div class="col-sm">
      <a href="./images/infantil5/semana3/img3.jpg" download><img class="img-fluid"
          src="./images/infantil5/semana3/img3.jpg" alt=""></a>
    </div>
    <div class="col-sm">
      <a href="./images/infantil5/semana3/img4.jpg" download><img class="img-fluid"
          src="./images/infantil5/semana3/img4.jpg" alt=""></a>
    </div>
  </div>
  <div class="row">
    <div class="col-sm">
      <a href="./images/infantil5/semana3/img5.jpg" download><img class="img-fluid"
          src="./images/infantil5/semana3/img5.jpg" alt=""></a>
    </div>
    <div class="col-sm">
      <a href="./images/infantil5/semana3/img6.jpg" download><img class="img-fluid"
          src="./images/infantil5/semana3/img6.jpg" alt=""></a>
    </div>
  </div>
  <div class="row">
    <div class="col-sm">
      <a href="./images/infantil5/semana3/img7.jpg" download><img class="img-fluid"
          src="./images/infantil5/semana3/img7.jpg" alt=""></a>
    </div>
    <div class="col-sm">
      <a href="./images/infantil5/semana3/img8.jpg" download><img class="img-fluid"
          src="./images/infantil5/semana3/img8.jpg" alt=""></a>
    </div>
    <div class="row">
    <div class="col-sm">
      <a href="./images/infantil5/semana3/img9.jpg" download><img class="img-fluid"
          src="./images/infantil5/semana3/img9.jpg" alt=""></a>
    </div>
    <div class="col-sm">
      <a href="./images/infantil5/semana3/img10.jpg" download><img class="img-fluid"
          src="./images/infantil5/semana3/img10.jpg" alt=""></a>
    </div>
    <div class="row">
    <div class="col-sm">
      <a href="./images/infantil5/semana3/img11.jpg" download><img class="img-fluid"
          src="./images/infantil5/semana3/img11.jpg" alt=""></a>
    </div>
    <div class="col-sm">
      <a href="./images/infantil5/semana3/img12.jpg" download><img class="img-fluid"
          src="./images/infantil5/semana3/img12.jpg" alt=""></a>
    </div>
    <div class="row">
    <div class="col-sm">
      <a href="./images/infantil5/semana3/img13.jpg" download><img class="img-fluid"
          src="./images/infantil5/semana3/img13.jpg" alt=""></a>
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

<h3> Vídeo aula 02 (Português) </h3>
<div class="video-container">

  <iframe width="1311" height="480" src="https://www.youtube.com/embed/55aEBClI-W4" frameborder="0"
    allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

</div>

<h3> Vídeo aula 03 (Matemática) </h3>
<div class="video-container">

  <iframe width="1311" height="480" src="https://www.youtube.com/embed/io_rqxM4NnI" frameborder="0"
   allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
</div>

<h3> Vídeo aula 04(Matemática)</h3>
<div class="video-container">

<iframe width="1311" height="480" src="https://www.youtube.com/embed/_2wiHNXO4bw" frameborder="0"
 allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

</div>

<h3> Vídeo aula 05(História)</h3>
<div class="video-container">

<iframe width="1311" height="480" src="https://www.youtube.com/embed/xc7pfDXh_no" frameborder="0"
 allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

</div>

<h3> Vídeo aula 06(Português)</h3>
<div class="video-container">

<iframe width="969" height="480" src="https://www.youtube.com/embed/sx70do3F7MY" frameborder="0"
 allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

</div>

<h3> Vídeo aula 07(Ciências)</h3>
<div class="video-container">

<iframe width="969" height="480" src="https://www.youtube.com/embed/Lf7SRGwnfBc" frameborder="0"
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
        <h2 class="mb-4">Tarefa semanal 04 - 20/abril até 24/abril</h2>
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
        <a href="./images/infantil6/semana4/img1.jpg" download><img class="img-fluid"
            src="./images/infantil6/semana4/img1.jpg" alt=""></a>
      </div>
      <div class="col-sm">
        <a href="./images/infantil6/semana4/img2.jpg" download><img class="img-fluid"
            src="./images/infantil6/semana4/img2.jpg" alt=""></a>
      </div>
    </div>
    <div class="row">
      <div class="col-sm">
        <a href="./images/infantil6/semana4/img3.jpg" download><img class="img-fluid"
            src="./images/infantil6/semana4/img3.jpg" alt=""></a>
      </div>
      <div class="col-sm">
        <a href="./images/infantil6/semana4/img4.jpg" download><img class="img-fluid"
            src="./images/infantil6/semana4/img4.jpg" alt=""></a>
      </div>
    </div>
    <div class="row">
      <div class="col-sm">
        <a href="./images/infantil6/semana4/img5.jpg" download><img class="img-fluid"
            src="./images/infantil6/semana4/img5.jpg" alt=""></a>
      </div>
      <div class="col-sm">
        <a href="./images/infantil6/semana4/img6.jpg" download><img class="img-fluid"
            src="./images/infantil6/semana4/img6.jpg" alt=""></a>
      </div>
    </div>
    <div class="row">
      <div class="col-sm">
        <a href="./images/infantil6/semana4/img7.jpg" download><img class="img-fluid"
            src="./images/infantil6/semana4/img7.jpg" alt=""></a>
      </div>
      <div class="col-sm">
        <a href="./images/infantil6/semana4/img8.jpg" download><img class="img-fluid"
            src="./images/infantil6/semana4/img8.jpg" alt=""></a>
      </div>
    </div>
    <div class="row">
      <div class="col-sm">
        <a href="./images/infantil6/semana4/img9.jpg" download><img class="img-fluid"
            src="./images/infantil6/semana4/img9.jpg" alt=""></a>
      </div>
      <div class="col-sm">
      <a href="./images/infantil6/semana4/img10.jpg" download><img class="img-fluid"
          src="./images/infantil6/semana4/img10.jpg" alt=""></a>
    </div>
    <div class="row">
      <div class="col-sm">
        <a href="./images/infantil6/semana4/img11.jpg" download><img class="img-fluid"
            src="./images/infantil6/semana4/img11.jpg" alt=""></a>
      </div>
      <div class="col-sm">
        <a href="./images/infantil6/semana4/img12.jpg" download><img class="img-fluid"
            src="./images/infantil6/semana4/img12.jpg" alt=""></a>
      </div>
      <div class="row">
      <div class="col-sm">
        <a href="./images/infantil6/semana4/img13.jpg" download><img class="img-fluid"
            src="./images/infantil6/semana4/img13.jpg" alt=""></a>
      </div>
      <div class="col-sm">
        <a href="./images/infantil6/semana4/img14.jpg" download><img class="img-fluid"
            src="./images/infantil6/semana4/img14.jpg" alt=""></a>
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
        <h2 class="mb-4">Tarefa semanal 03 - 13/abril até 17/abril</h2>
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
        <a href="./images/infantil6/semana3/img1.jpg" download><img class="img-fluid"
            src="./images/infantil6/semana3/img1.jpg" alt=""></a>
      </div>
      <div class="col-sm">
        <a href="./images/infantil6/semana3/img2.jpg" download><img class="img-fluid"
            src="./images/infantil6/semana3/img2.jpg" alt=""></a>
      </div>
    </div>
    <div class="row">
      <div class="col-sm">
        <a href="./images/infantil6/semana3/img3.jpg" download><img class="img-fluid"
            src="./images/infantil6/semana3/img3.jpg" alt=""></a>
      </div>
      <div class="col-sm">
        <a href="./images/infantil6/semana3/img4.jpg" download><img class="img-fluid"
            src="./images/infantil6/semana3/img4.jpg" alt=""></a>
      </div>
    </div>
    <div class="row">
      <div class="col-sm">
        <a href="./images/infantil6/semana3/img5.jpg" download><img class="img-fluid"
            src="./images/infantil6/semana3/img5.jpg" alt=""></a>
      </div>
      <div class="col-sm">
        <a href="./images/infantil6/semana3/img6.jpg" download><img class="img-fluid"
            src="./images/infantil6/semana3/img6.jpg" alt=""></a>
      </div>
    </div>
    <div class="row">
      <div class="col-sm">
        <a href="./images/infantil6/semana3/img7.jpg" download><img class="img-fluid"
            src="./images/infantil6/semana3/img7.jpg" alt=""></a>
      </div>
      <div class="col-sm">
        <a href="./images/infantil6/semana3/img8.jpg" download><img class="img-fluid"
            src="./images/infantil6/semana3/img8.jpg" alt=""></a>
      </div>
    </div>
    <div class="row">
      <div class="col-sm">
        <a href="./images/infantil6/semana3/img9.jpg" download><img class="img-fluid"
            src="./images/infantil6/semana3/img9.jpg" alt=""></a>
      </div>
      <div class="col-sm">
      <a href="./images/infantil6/semana3/img10.jpg" download><img class="img-fluid"
          src="./images/infantil6/semana3/img10.jpg" alt=""></a>
    </div>
    <div class="row">
      <div class="col-sm">
        <a href="./images/infantil6/semana3/img11.jpg" download><img class="img-fluid"
            src="./images/infantil6/semana3/img11.jpg" alt=""></a>
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
<h3> Vídeo aula 01</h3>
<div class="video-container">

  <iframe width="1311" height="480" src="https://www.youtube.com/embed/GoK6bZOfEzs" frameborder="0"
    allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

</div>

<h3> Vídeo aula 02</h3>
<div class="video-container">

  <iframe width="1311" height="480" src="https://www.youtube.com/embed/CrakjZmsi-k" frameborder="0"
    allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

</div>

<h3> Vídeo aula 03(Português)</h3>
<div class="video-container">

<iframe width="1311" height="480" src="https://www.youtube.com/embed/a3T6_QfukDs" frameborder="0"
 allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

</div>

<h3> Vídeo aula 04(Matemática)</h3>
<div class="video-container">

<iframe width="1311" height="480" src="https://www.youtube.com/embed/q9iLvFu3_s8" frameborder="0"
 allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

</div>

<h3> Vídeo aula 05(História)</h3>
<div class="video-container">

<iframe width="1311" height="480" src="https://www.youtube.com/embed/xqOFHnncj98" frameborder="0"
 allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

</div>

<h3> Vídeo aula 06(Geografia)</h3>
<div class="video-container">

<iframe width="1311" height="480" src="https://www.youtube.com/embed/6y4jS2m8Mg0" frameborder="0"
 allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

</div>

<h3> Vídeo aula 07(Ciências)</h3>
<div class="video-container">

<iframe width="1311" height="480" src="https://www.youtube.com/embed/5MfZ2p1DeCM" frameborder="0"
 allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

</div>

<h3> Vídeo aula 08(História)</h3>
<div class="video-container">

<iframe width="1311" height="480" src="https://www.youtube.com/embed/xc7pfDXh_no" frameborder="0"
 allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

</div>

<h3> Vídeo aula 09(Ciências)</h3>
<div class="video-container">

<iframe width="969" height="480" src="https://www.youtube.com/embed/Hqkndg6IQC4" frameborder="0"
 allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

</div>

<h3> Vídeo aula 10(Geografia)</h3>
<div class="video-container">

<iframe width="969" height="480" src="https://www.youtube.com/embed/t3xiWYDb8tU" frameborder="0"
 allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

</div>
<h3> Vídeo aula 11(Geografia 02)</h3>
<div class="video-container">

<iframe width="969" height="480" src="https://www.youtube.com/embed/sTFU3VhupUI" frameborder="0"
 allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

</div>

<h3> Vídeo aula 12(História)</h3>
<div class="video-container">

<iframe width="969" height="480" src="https://www.youtube.com/embed/5NDgpXGBJ4g" frameborder="0"
 allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

</div>

<h3> Vídeo aula 13(História 02)</h3>
<div class="video-container">

<iframe width="969" height="480" src="https://www.youtube.com/embed/clkpTq5Xwz8" frameborder="0"
 allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

</div>

<h3> Vídeo aula 14(Matemática)</h3>
<div class="video-container">

<iframe width="969" height="480" src="https://www.youtube.com/embed/4reGtnzDddw" frameborder="0"
 allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

</div>

<h3> Vídeo aula 15(Português)</h3>
<div class="video-container">

<iframe width="969" height="480" src="https://www.youtube.com/embed/gAstseeFbRI" frameborder="0"
 allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

</div>

<h3> Vídeo aula 16(Ciências)</h3>
<div class="video-container">

<iframe width="969" height="480" src="https://www.youtube.com/embed/FAWZvCLHzGM" frameborder="0"
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
      <h2 class="mb-4">Tarefa semanal 04 - 20/abril até 24/abril</h2>
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
      <a href="./images/infantil7/semana4/img1.jpg" download><img class="img-fluid"
          src="./images/infantil7/semana4/img1.jpg" alt=""></a>
    </div>
    <div class="col-sm">
      <a href="./images/infantil7/semana4/img2.jpg" download><img class="img-fluid"
          src="./images/infantil7/semana4/img2.jpg" alt=""></a>
    </div>
  </div>
  <div class="row">
    <div class="col-sm">
      <a href="./images/infantil7/semana4/img3.jpg" download><img class="img-fluid"
          src="./images/infantil7/semana4/img3.jpg" alt=""></a>
    </div>
    <div class="col-sm">
      <a href="./images/infantil7/semana4/img4.jpg" download><img class="img-fluid"
          src="./images/infantil7/semana4/img4.jpg" alt=""></a>
    </div>
  </div>
  <div class="row">
    <div class="col-sm">
      <a href="./images/infantil7/semana4/img5.jpg" download><img class="img-fluid"
          src="./images/infantil7/semana4/img5.jpg" alt=""></a>
    </div>
    <div class="col-sm">
      <a href="./images/infantil7/semana4/img6.jpg" download><img class="img-fluid"
          src="./images/infantil7/semana4/img6.jpg" alt=""></a>
    </div>
  </div>
  <div class="row">
    <div class="col-sm">
      <a href="./images/infantil7/semana4/img7.jpg" download><img class="img-fluid"
          src="./images/infantil7/semana4/img7.jpg" alt=""></a>
    </div>
    <div class="col-sm">
      <a href="./images/infantil7/semana4/img8.jpg" download><img class="img-fluid"
          src="./images/infantil7/semana4/img8.jpg" alt=""></a>
    </div>
 </div>
 <div class="row">
    <div class="col-sm">
      <a href="./images/infantil7/semana4/img9.jpg" download><img class="img-fluid"
          src="./images/infantil7/semana4/img9.jpg" alt=""></a>
    </div>
    <div class="col-sm">
      <a href="./images/infantil7/semana4/img10.jpg" download><img class="img-fluid"
          src="./images/infantil7/semana4/img10.jpg" alt=""></a>
    </div>
    <div class="row">
    <div class="col-sm">
      <a href="./images/infantil7/semana4/img11.jpg" download><img class="img-fluid"
          src="./images/infantil7/semana4/img11.jpg" alt=""></a>
    </div>
    <div class="col-sm">
      <a href="./images/infantil7/semana4/img12.jpg" download><img class="img-fluid"
          src="./images/infantil7/semana4/img12.jpg" alt=""></a>
    </div>
  </div>
  <div class="row">
    <div class="col-sm">
      <a href="./images/infantil7/semana4/img13.jpg" download><img class="img-fluid"
          src="./images/infantil7/semana4/img13.jpg" alt=""></a>
    </div>
    <div class="col-sm">
      <a href="./images/infantil7/semana4/img14.jpg" download><img class="img-fluid"
          src="./images/infantil7/semana4/img14.jpg" alt=""></a>
    </div>
 </div>
 <div class="row">
    <div class="col-sm">
      <a href="./images/infantil7/semana4/img15.jpg" download><img class="img-fluid"
          src="./images/infantil7/semana4/img15.jpg" alt=""></a>
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
      <h2 class="mb-4">Tarefa semanal 03 - 13/abril até 17/abril</h2>
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
      <a href="./images/infantil7/semana3/img1.jpg" download><img class="img-fluid"
          src="./images/infantil7/semana3/img1.jpg" alt=""></a>
    </div>
    <div class="col-sm">
      <a href="./images/infantil7/semana3/img2.jpg" download><img class="img-fluid"
          src="./images/infantil7/semana3/img2.jpg" alt=""></a>
    </div>
  </div>
  <div class="row">
    <div class="col-sm">
      <a href="./images/infantil7/semana3/img3.jpg" download><img class="img-fluid"
          src="./images/infantil7/semana3/img3.jpg" alt=""></a>
    </div>
    <div class="col-sm">
      <a href="./images/infantil7/semana3/img4.jpg" download><img class="img-fluid"
          src="./images/infantil7/semana3/img4.jpg" alt=""></a>
    </div>
  </div>
  <div class="row">
    <div class="col-sm">
      <a href="./images/infantil7/semana3/img5.jpg" download><img class="img-fluid"
          src="./images/infantil7/semana3/img5.jpg" alt=""></a>
    </div>
    <div class="col-sm">
      <a href="./images/infantil7/semana3/img6.jpg" download><img class="img-fluid"
          src="./images/infantil7/semana3/img6.jpg" alt=""></a>
    </div>
  </div>
  <div class="row">
    <div class="col-sm">
      <a href="./images/infantil7/semana3/img7.jpg" download><img class="img-fluid"
          src="./images/infantil7/semana3/img7.jpg" alt=""></a>
    </div>
    <div class="col-sm">
      <a href="./images/infantil7/semana3/img8.jpg" download><img class="img-fluid"
          src="./images/infantil7/semana3/img8.jpg" alt=""></a>
    </div>
 </div>
 <div class="row">
    <div class="col-sm">
      <a href="./images/infantil7/semana3/img9.jpg" download><img class="img-fluid"
          src="./images/infantil7/semana3/img9.jpg" alt=""></a>
    </div>
    <div class="col-sm">
      <a href="./images/infantil7/semana3/img10.jpg" download><img class="img-fluid"
          src="./images/infantil7/semana3/img10.jpg" alt=""></a>
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

<h3> Vídeo aula 01(Português)</h3>
<div class="video-container">

  <iframe width="1311" height="480" src="https://www.youtube.com/embed/2gv7wYKjsXA" frameborder="0"
    allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

</div>


<h3> Vídeo aula 02(Matemática)</h3>
<div class="video-container">

  <iframe width="1311" height="480" src="https://www.youtube.com/embed/UDncpTaaA9I" frameborder="0"
    allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

</div>

<h3> Vídeo aula 03(português)</h3>
<div class="video-container">

  <iframe width="1311" height="480" src="https://www.youtube.com/embed/mZVqXMQlDzg" frameborder="0" 
    allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
 
</div>

<h3> Vídeo aula 04(Ciências)</h3>
<div class="video-container">

  <iframe width="1311" height="480" src="https://www.youtube.com/embed/IWE_gUl79xI" frameborder="0"
    allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
 
</div>

<h3> Vídeo aula 05(História)</h3>
<div class="video-container">

  <iframe width="1311" height="480" src="https://www.youtube.com/embed/5ecAMuP1RQk" frameborder="0"
    allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
 
</div>

<h3> Vídeo aula 06(Geografia)</h3>
<div class="video-container">

  <iframe width="1311" height="480" src="https://www.youtube.com/embed/9MyRKwqZBUo" frameborder="0"
    allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
 
</div>

<h3> Vídeo aula 07(Artes)</h3>
<div class="video-container">

  <iframe width="1311" height="480" src="https://www.youtube.com/embed/rvA8kY1R5DI" frameborder="0"
   allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
 
</div>

<h3> Vídeo aula 08(Português 01)</h3>
<div class="video-container">

<iframe width="1311" height="480" src="https://www.youtube.com/embed/KDoE3Y-c96o" frameborder="0"
 allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
 
</div>

<h3> Vídeo aula 09(Português 02)</h3>
<div class="video-container">

<iframe width="1311" height="480" src="https://www.youtube.com/embed/ftQm1bnCZuA" frameborder="0"
 allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
 
</div>

<h3> Vídeo aula 10(Matemática)</h3>
<div class="video-container">

<iframe width="1311" height="480" src="https://www.youtube.com/embed/jEwE2NIRsC0" frameborder="0"
 allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
 
</div>

<h3> Vídeo aula 11(História)</h3>
<div class="video-container">

<iframe width="1311" height="480" src="https://www.youtube.com/embed/xc7pfDXh_no" frameborder="0"
 allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
 
</div>

<h3> Vídeo aula 12(Matemática 01)</h3>
<div class="video-container">

<iframe width="969" height="480" src="https://www.youtube.com/embed/PF9qlpR8Xfs" frameborder="0"
 allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
 
</div>

<h3> Vídeo aula 13(Matemática 02)</h3>
<div class="video-container">

<iframe width="969" height="480" src="https://www.youtube.com/embed/e0lHWt7rA3c" frameborder="0"
 allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
 
</div>
<h3> Vídeo aula 14(Matemática 03)</h3>
<div class="video-container">

<iframe width="969" height="480" src="https://www.youtube.com/embed/XVU4ABRXqbM" frameborder="0"
 allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
 
</div>

<h3> Vídeo aula 15(Ciências)</h3>
<div class="video-container">

<iframe width="969" height="480" src="https://www.youtube.com/embed/Y1er3OsM1Ds" frameborder="0"
 allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
 
</div>

<h3> Vídeo aula 16(Geografia 01)</h3>
<div class="video-container">

<iframe width="969" height="480" src="https://www.youtube.com/embed/rPoGwHpBIyk" frameborder="0"
 allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
 
</div>

<h3> Vídeo aula 17(Geografia 02)</h3>
<div class="video-container">

<iframe width="969" height="480" src="https://www.youtube.com/embed/Koyq2BILmSU" frameborder="0"
 allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
 
</div>

<h3> Vídeo aula 18(Português)</h3>
<div class="video-container">

<iframe width="969" height="480" src="https://www.youtube.com/embed/_6b9lINqi6E" frameborder="0"
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
        <h2 class="mb-4">Tarefa semanal 04 - 20/abril até 24/abril</h2>
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
        <a href="./images/infantil8/semana4/img1.jpgg" download><img class="img-fluid"
            src="./images/infantil8/semana4/img1.jpg" alt=""></a>
      </div>
      <div class="col-sm">
        <a href="./images/infantil8/semana4/img2.jpgg" download><img class="img-fluid"
            src="./images/infantil8/semana4/img2.jpg" alt=""></a>
      </div>
    </div>
    <div class="row">
      <div class="col-sm">
        <a href="./images/infantil8/semana4/img3.jpgg" download><img class="img-fluid"
            src="./images/infantil8/semana4/img3.jpg" alt=""></a>
      </div>
      <div class="col-sm">
        <a href="./images/infantil8/semana4/img4.jpgg" download><img class="img-fluid"
            src="./images/infantil8/semana4/img4.jpg" alt=""></a>
      </div>
    </div>
    <div class="row">
      <div class="col-sm">
        <a href="./images/infantil8/semana4/img5.jpgg" download><img class="img-fluid"
            src="./images/infantil8/semana4/img5.jpg" alt=""></a>
      </div>
      <div class="col-sm">
        <a href="./images/infantil8/semana4/img6.jpgg" download><img class="img-fluid"
            src="./images/infantil8/semana4/img6.jpg" alt=""></a>
      </div>
    </div>
    <div class="row">
      <div class="col-sm">
        <a href="./images/infantil8/semana4/img7.jpgg" download><img class="img-fluid"
            src="./images/infantil8/semana4/img7.jpg" alt=""></a>
      </div>
      <div class="col-sm">
        <a href="./images/infantil8/semana4/img8.jpgg" download><img class="img-fluid"
            src="./images/infantil8/semana4/img8.jpg" alt=""></a>
      </div>
      <div class="row">
      <div class="col-sm">
        <a href="./images/infantil8/semana4/img9.jpgg" download><img class="img-fluid"
            src="./images/infantil8/semana4/img9.jpg" alt=""></a>
      </div>
      <div class="col-sm">
        <a href="./images/infantil8/semana4/img10.jpgg" download><img class="img-fluid"
            src="./images/infantil8/semana4/img10.jpg" alt=""></a>
      </div>
    </div>
    <div class="row">
      <div class="col-sm">
        <a href="./images/infantil8/semana4/img11.jpgg" download><img class="img-fluid"
            src="./images/infantil8/semana4/img11.jpg" alt=""></a>
      </div>
      <div class="col-sm">
        <a href="./images/infantil8/semana4/img12.jpgg" download><img class="img-fluid"
            src="./images/infantil8/semana4/img12.jpg" alt=""></a>
      </div>
    </div>
    <div class="row">
      <div class="col-sm">
        <a href="./images/infantil8/semana4/img13.jpgg" download><img class="img-fluid"
            src="./images/infantil8/semana4/img13.jpg" alt=""></a>
      </div>
      <div class="col-sm">
        <a href="./images/infantil8/semana4/img14.jpgg" download><img class="img-fluid"
            src="./images/infantil8/semana4/img14.jpg" alt=""></a>
      </div>
    </div>
    <div class="row">
      <div class="col-sm">
        <a href="./images/infantil8/semana4/img15.jpgg" download><img class="img-fluid"
            src="./images/infantil8/semana4/img15.jpg" alt=""></a>
      </div>
      <div class="col-sm">
        <a href="./images/infantil8/semana4/img16.jpgg" download><img class="img-fluid"
            src="./images/infantil8/semana4/img16.jpg" alt=""></a>
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
        <h2 class="mb-4">Tarefa semanal 03 - 13/abril até 17/abril</h2>
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
        <a href="./images/infantil8/semana3/img1.jpgg" download><img class="img-fluid"
            src="./images/infantil8/semana3/img1.jpg" alt=""></a>
      </div>
      <div class="col-sm">
        <a href="./images/infantil8/semana3/img2.jpgg" download><img class="img-fluid"
            src="./images/infantil8/semana3/img2.jpg" alt=""></a>
      </div>
    </div>
    <div class="row">
      <div class="col-sm">
        <a href="./images/infantil8/semana3/img3.jpgg" download><img class="img-fluid"
            src="./images/infantil8/semana3/img3.jpg" alt=""></a>
      </div>
      <div class="col-sm">
        <a href="./images/infantil8/semana3/img4.jpgg" download><img class="img-fluid"
            src="./images/infantil8/semana3/img4.jpg" alt=""></a>
      </div>
    </div>
    <div class="row">
      <div class="col-sm">
        <a href="./images/infantil8/semana3/img5.jpgg" download><img class="img-fluid"
            src="./images/infantil8/semana3/img5.jpg" alt=""></a>
      </div>
      <div class="col-sm">
        <a href="./images/infantil8/semana3/img6.jpgg" download><img class="img-fluid"
            src="./images/infantil8/semana3/img6.jpg" alt=""></a>
      </div>
    </div>
    <div class="row">
      <div class="col-sm">
        <a href="./images/infantil8/semana3/img7.jpgg" download><img class="img-fluid"
            src="./images/infantil8/semana3/img7.jpg" alt=""></a>
      </div>
      <div class="col-sm">
        <a href="./images/infantil8/semana3/img8.jpgg" download><img class="img-fluid"
            src="./images/infantil8/semana3/img8.jpg" alt=""></a>
      </div>
      <div class="row">
      <div class="col-sm">
        <a href="./images/infantil8/semana3/img9.jpgg" download><img class="img-fluid"
            src="./images/infantil8/semana3/img9.jpg" alt=""></a>
      </div>
      <div class="col-sm">
        <a href="./images/infantil8/semana3/img10.jpgg" download><img class="img-fluid"
            src="./images/infantil8/semana3/img10.jpg" alt=""></a>
      </div>
    </div>
    <div class="row">
      <div class="col-sm">
        <a href="./images/infantil8/semana3/img11.jpgg" download><img class="img-fluid"
            src="./images/infantil8/semana3/img11.jpg" alt=""></a>
      </div>
      <div class="col-sm">
        <a href="./images/infantil8/semana3/img12.jpgg" download><img class="img-fluid"
            src="./images/infantil8/semana3/img12.jpg" alt=""></a>
      </div>
    </div>
    <div class="row">
      <div class="col-sm">
        <a href="./images/infantil8/semana3/img13.jpgg" download><img class="img-fluid"
            src="./images/infantil8/semana3/img13.jpg" alt=""></a>
      </div>
      <div class="col-sm">
        <a href="./images/infantil8/semana3/img14.jpgg" download><img class="img-fluid"
            src="./images/infantil8/semana3/img14.jpg" alt=""></a>
      </div>
    </div>
    <div class="row">
      <div class="col-sm">
        <a href="./images/infantil8/semana3/img15.jpgg" download><img class="img-fluid"
            src="./images/infantil8/semana3/img15.jpg" alt=""></a>
      </div>
      <div class="col-sm">
        <a href="./images/infantil8/semana3/img16.jpgg" download><img class="img-fluid"
            src="./images/infantil8/semana3/img16.jpg" alt=""></a>
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

<h3> Vídeo aula 01(Português)</h3>
<div class="video-container">

  <iframe width="1311" height="480" src="https://www.youtube.com/embed/2gv7wYKjsXA" frameborder="0"
    allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

</div>


<h3> Vídeo aula 02(Matemática)</h3>
<div class="video-container">

  <iframe width="1311" height="480" src="https://www.youtube.com/embed/UDncpTaaA9I" frameborder="0"
    allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

</div>

<h3> Vídeo aula 03(português)</h3>
<div class="video-container">

  <iframe width="1311" height="480" src="https://www.youtube.com/embed/mZVqXMQlDzg" frameborder="0" 
    allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
 
</div>

<h3> Vídeo aula 04(Ciências)</h3>
<div class="video-container">

  <iframe width="1311" height="480" src="https://www.youtube.com/embed/IWE_gUl79xI" frameborder="0"
    allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
 
</div>

<h3> Vídeo aula 05(História)</h3>
<div class="video-container">

  <iframe width="1311" height="480" src="https://www.youtube.com/embed/5ecAMuP1RQk" frameborder="0"
    allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
 
</div>

<h3> Vídeo aula 06(Geografia)</h3>
<div class="video-container">

  <iframe width="1311" height="480" src="https://www.youtube.com/embed/9MyRKwqZBUo" frameborder="0"
    allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
 
</div>

<h3> Vídeo aula 07(Artes)</h3>
<div class="video-container">

  <iframe width="1311" height="480" src="https://www.youtube.com/embed/rvA8kY1R5DI" frameborder="0"
   allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
 
</div>

<h3> Vídeo aula 08(Português 01)</h3>
<div class="video-container">

<iframe width="1311" height="480" src="https://www.youtube.com/embed/KDoE3Y-c96o" frameborder="0"
 allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
 
</div>

<h3> Vídeo aula 09(Português 02)</h3>
<div class="video-container">

<iframe width="1311" height="480" src="https://www.youtube.com/embed/ftQm1bnCZuA" frameborder="0"
 allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
 
</div>

<h3> Vídeo aula 10(Matemática)</h3>
<div class="video-container">

<iframe width="1311" height="480" src="https://www.youtube.com/embed/jEwE2NIRsC0" frameborder="0"
 allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
 
</div>

<h3> Vídeo aula 11(História)</h3>
<div class="video-container">

<iframe width="1311" height="480" src="https://www.youtube.com/embed/xc7pfDXh_no" frameborder="0"
 allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
 
</div>

<h3> Vídeo aula 12(Matemática 01)</h3>
<div class="video-container">

<iframe width="969" height="480" src="https://www.youtube.com/embed/PF9qlpR8Xfs" frameborder="0"
 allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
 
</div>

<h3> Vídeo aula 13(Matemática 02)</h3>
<div class="video-container">

<iframe width="969" height="480" src="https://www.youtube.com/embed/e0lHWt7rA3c" frameborder="0"
 allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
 
</div>
<h3> Vídeo aula 14(Matemática 03)</h3>
<div class="video-container">

<iframe width="969" height="480" src="https://www.youtube.com/embed/XVU4ABRXqbM" frameborder="0"
 allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
 
</div>

<h3> Vídeo aula 15(Ciências)</h3>
<div class="video-container">

<iframe width="969" height="480" src="https://www.youtube.com/embed/Y1er3OsM1Ds" frameborder="0"
 allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
 
</div>

<h3> Vídeo aula 16(Geografia 01)</h3>
<div class="video-container">

<iframe width="969" height="480" src="https://www.youtube.com/embed/rPoGwHpBIyk" frameborder="0"
 allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
 
</div>

<h3> Vídeo aula 17(Geografia 02)</h3>
<div class="video-container">

<iframe width="969" height="480" src="https://www.youtube.com/embed/Koyq2BILmSU" frameborder="0"
 allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
 
</div>

<h3> Vídeo aula 18(Português)</h3>
<div class="video-container">

<iframe width="969" height="480" src="https://www.youtube.com/embed/_6b9lINqi6E" frameborder="0"
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
      <h2 class="mb-4">Tarefa semanal 04 - 20/abril até 24/abril</h2>
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
      <a href="./images/infantil9/semana4/img1.jpg" download><img class="img-fluid"
          src="./images/infantil9/semana4/img1.jpg" alt=""></a>
    </div>
    <div class="col-sm">
      <a href="./images/infantil9/semana4/img2.jpg" download><img class="img-fluid"
          src="./images/infantil9/semana4/img2.jpg" alt=""></a>
    </div>
  </div>
  <div class="row">
    <div class="col-sm">
      <a href="./images/infantil9/semana4/img3.jpg" download><img class="img-fluid"
          src="./images/infantil9/semana4/img3.jpg" alt=""></a>
    </div>
    <div class="col-sm">
      <a href="./images/infantil9/semana4/img4.jpg" download><img class="img-fluid"
          src="./images/infantil9/semana4/img4.jpg" alt=""></a>
    </div>
  </div>
  <div class="row">
    <div class="col-sm">
      <a href="./images/infantil9/semana4/img5.jpg" download><img class="img-fluid"
          src="./images/infantil9/semana4/img5.jpg" alt=""></a>
    </div>
    <div class="col-sm">
      <a href="./images/infantil9/semana4/img6.jpg" download><img class="img-fluid"
          src="./images/infantil9/semana4/img6.jpg" alt=""></a>
    </div>
  </div>
  <div class="row">
    <div class="col-sm">
      <a href="./images/infantil9/semana4/img7.jpg" download><img class="img-fluid"
          src="./images/infantil9/semana4/img7.jpg" alt=""></a>
    </div>
    <div class="col-sm">
      <a href="./images/infantil9/semana4/img8.jpg" download><img class="img-fluid"
          src="./images/infantil9/semana4/img8.jpg" alt=""></a>
    </div>
  </div>
  <div class="row">
    <div class="col-sm">
      <a href="./images/infantil9/semana4/img9.jpg" download><img class="img-fluid"
          src="./images/infantil9/semana4/img9.jpg" alt=""></a>
    </div>
    <div class="col-sm">
      <a href="./images/infantil9/semana4/img10.jpg" download><img class="img-fluid"
          src="./images/infantil9/semana4/img10.jpg" alt=""></a>
    </div>
    <div class="row">
    <div class="col-sm">
      <a href="./images/infantil9/semana4/img11.jpg" download><img class="img-fluid"
          src="./images/infantil9/semana4/img11.jpg" alt=""></a>
    </div>
    <div class="col-sm">
      <a href="./images/infantil9/semana4/img12.jpg" download><img class="img-fluid"
          src="./images/infantil9/semana4/img12.jpg" alt=""></a>
    </div>
  </div>
  <div class="row">
    <div class="col-sm">
      <a href="./images/infantil9/semana4/img13.jpg" download><img class="img-fluid"
          src="./images/infantil9/semana4/img13.jpg" alt=""></a>
    </div>
    <div class="col-sm">
      <a href="./images/infantil9/semana4/img14.jpg" download><img class="img-fluid"
          src="./images/infantil9/semana4/img14.jpg" alt=""></a>
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
      <h2 class="mb-4">Tarefa semanal 03 - 13/abril até 17/abril</h2>
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
      <a href="./images/infantil9/semana3/img1.jpg" download><img class="img-fluid"
          src="./images/infantil9/semana3/img1.jpg" alt=""></a>
    </div>
    <div class="col-sm">
      <a href="./images/infantil9/semana3/img2.jpg" download><img class="img-fluid"
          src="./images/infantil9/semana3/img2.jpg" alt=""></a>
    </div>
  </div>
  <div class="row">
    <div class="col-sm">
      <a href="./images/infantil9/semana3/img3.jpg" download><img class="img-fluid"
          src="./images/infantil9/semana3/img3.jpg" alt=""></a>
    </div>
    <div class="col-sm">
      <a href="./images/infantil9/semana3/img4.jpg" download><img class="img-fluid"
          src="./images/infantil9/semana3/img4.jpg" alt=""></a>
    </div>
  </div>
  <div class="row">
    <div class="col-sm">
      <a href="./images/infantil9/semana3/img5.jpg" download><img class="img-fluid"
          src="./images/infantil9/semana3/img5.jpg" alt=""></a>
    </div>
    <div class="col-sm">
      <a href="./images/infantil9/semana3/img6.jpg" download><img class="img-fluid"
          src="./images/infantil9/semana3/img6.jpg" alt=""></a>
    </div>
  </div>
  <div class="row">
    <div class="col-sm">
      <a href="./images/infantil9/semana3/img7.jpg" download><img class="img-fluid"
          src="./images/infantil9/semana3/img7.jpg" alt=""></a>
    </div>
    <div class="col-sm">
      <a href="./images/infantil9/semana3/img8.jpg" download><img class="img-fluid"
          src="./images/infantil9/semana3/img8.jpg" alt=""></a>
    </div>
  </div>
  <div class="row">
    <div class="col-sm">
      <a href="./images/infantil9/semana3/img9.jpg" download><img class="img-fluid"
          src="./images/infantil9/semana3/img9.jpg" alt=""></a>
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