import React from 'react';
import './styles.css';

function Header() {
  return (
    <header className="header">
         <div>
      <link rel="shortcut icon" href="./favicon.svg" type="image/svg+xml" />
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
      <link href="https://fonts.googleapis.com/css2?family=Oxanium:wght@600;700;800&family=Poppins:wght@400;500;600;700;800;900&display=swap" rel="stylesheet" />
      
    </div>
    <div class="header-top">
      <div class="container">
        <div class="countdown-text">
          Oferta Exclusiva Por Tempo Limitado!<span class="span skewBg">2</span> Dias Restantes
        </div>

        <div class="social-wrapper">
          <p class="social-title">Siga a gente nas nossas redes sociais: </p>
          <ul class="social-list">

            <li>
              <a href="#" class="social-link">
                <ion-icon name="logo-facebook"></ion-icon>
              </a>
            </li>

            <li>
              <a href="#" class="social-link">
                <ion-icon name="logo-twitter"></ion-icon>
              </a>
            </li>

            <li>
              <a href="#" class="social-link">
                <ion-icon name="logo-pinterest"></ion-icon>
              </a>
            </li>

            <li>
              <a href="#" class="social-link">
                <ion-icon name="logo-linkedin"></ion-icon>
              </a>
            </li>

          </ul>

        </div>

      </div>
    </div>

    <div class="header-bottom skewBg" data-header>
      <div class="container">

        <a href="#" class="logo">Chronicles of Igris</a>

        <nav class="navbar" data-navbar>
          <ul class="navbar-list">

            <li class="navbar-item">
              <a href="#home" class="navbar-link skewBg" data-nav-link>Home</a>
            </li>
            <li class="navbar-item">
              <a href="#sobreOjogo" class="navbar-link skewBg" data-nav-link>Sobre o jogo!</a>
            </li>
            <li class="navbar-item">
              <a href="#features" class="navbar-link skewBg" data-nav-link>Sobre Nós!</a>
            </li>
            <li class="navbar-item">
              <a href="#footer" class="navbar-link skewBg" data-nav-link>Entre em contato!</a>
            </li>
            <li class="navbar-item">
              <a href="/post" class="navbar-link skewBg" data-nav-link>Forum</a>
            </li>
          </ul>
        </nav>

        <div class="header-actions">

          

          <button class="search-btn" aria-label="open search" data-search-toggler>
            <ion-icon name="search-outline"></ion-icon>
          </button>

          <button class="nav-toggle-btn" aria-label="toggle menu" data-nav-toggler>
            <ion-icon name="menu-outline" class="menu"></ion-icon>
            <ion-icon name="close-outline" class="close"></ion-icon>
          </button>

        </div>

      </div>
    </div>
    <div className="search-container" data-search-box>
      <div className="input-wrapper">
        <input type="search" name="search" aria-label="search" placeholder="Pesquise Aqui!" className="search-field" />
        <button className="search-submit" aria-label="submit search" data-search-toggler>
          <ion-icon name="search-outline"></ion-icon>
        </button>
        <button className="search-close" aria-label="close search" data-search-toggler></button>
      </div>
    </div>
    </header>
    
  );
}

function MainContent() {
  return (
    <main>
      <article>
      <section className="section hero" id="home" aria-label="home"
      style={{ backgroundImage: `url('./images/vista.jpg')` }}>
      <div className="container">

        <div className="hero-content">

          <p className="hero-subtitle">Ohh, então nos encontramos de novo?!</p>

          <h1 className="h1 hero-title">
            Seja <span className="span">Bem-Vindo</span> a Aeldaria!
          </h1>
          <br />
          <a href="#shop"><button className="btn skewBg">LER MAIS</button></a>
        </div>

        <figure className="hero-banner img-holder" style={{ "--width": 850, "--height": 850 }}>
          <img src="./images/MerchantChar.png" width="850" height="850" alt="CharBanner" className="w-100" />
        </figure>
      </div>
    </section>
      <div className="container">

        <ul className="has-scrollbar">
          <li className="brand-item">
            <img src="./images/brand-1.png" width="90" height="90" loading="lazy" alt="brand logo" />
          </li>
          <li className="brand-item">
            <img src="./images/brand-2.png" width="90" height="90" loading="lazy" alt="brand logo" />
          </li>
          <li className="brand-item">
            <img src="./images/brand-3.png" width="90" height="90" loading="lazy" alt="brand logo" />
          </li>
          <li className="brand-item">
            <img src="./images/brand-4.png" width="90" height="90" loading="lazy" alt="brand logo" />
          </li>
          <li className="brand-item">
            <img src="./images/brand-5.png" width="90" height="90" loading="lazy" alt="brand logo" />
          </li>
          <li className="brand-item">
            <img src="./images/brand-6.png" width="90" height="90" loading="lazy" alt="brand logo" />
          </li>
        </ul>

      </div>
      <section className="section latest-game" aria-label="latest game">
        <div className="container">

          <p className="section-subtitle">Sobre o Jogo!</p>

          <h2 className="h2 section-title">
            Criado & <span className="span">Gerenciado por Nós</span>
          </h2>

          <ul className="has-scrollbar">

            <li className="scrollbar-item">
              <div className="latest-game-card">

                <figure className="card-banner img-holder" style={{ "--width": 400, "--height": 470 }}>
                  <img src="./assets/images/slime2sprite.png" width="400" height="470" loading="lazy" alt="Slime" className="img-cover" />
                </figure>

                <div className="card-content">

                  <a href="#" className="card-badge skewBg">Monstro</a>

                  <h3 className="h3">
                    <a href="#" className="card-title">Slime <span className="span">Azul</span></a>
                  </h3>

                  <p className="card-price">
                    É uma slime pequena, fofa e<span className="span">azul!</span>
                  </p>

                </div>

              </div>
            </li>

            <li className="scrollbar-item">
              <div className="latest-game-card">

                <figure className="card-banner img-holder" style={{ "--width": 100, "--height": 170 }}>
                  <img src="./images/hero2sprite.png" width="100" height="170" loading="lazy" alt="Heroi" className="img-cover" />
                </figure>

                <div className="card-content">

                  <a href="#" className="card-badge skewBg">Personagem Principal</a>

                  <h3 className="h3">
                    <a href="#" className="card-title">Kenneth <span className="span">Drablood</span></a>
                  </h3>

                  <p className="card-price">
                    Nosso Héroi principal é o Kenneth, ele é jovem, ele é medroso e não tem a menor ideia do que o aguarda em<span className="span">sua aventura.</span>
                  </p>

                </div>

              </div>
            </li>

            <li className="scrollbar-item">
              <div className="latest-game-card">

                <figure className="card-banner img-holder" style={{ "--width": 400, "--height": 470 }}>
                  <img src="./images/backgroundSprite.jpeg" width="400" height="470" loading="lazy" alt="Cenario" className="img-cover" />
                </figure>

                <div className="card-content">

                  <a href="#" className="card-badge skewBg">Cenário</a>

                  <h3 className="h3">
                    <a href="#" className="card-title">Vale <span className="span">Florestal</span></a>
                  </h3>

                  <p className="card-price">
                    Nunca se sabe quando uma caminhada pelo vale pode se tornar perigosa, você vai entender que um lugar lindo nem sempre é<span className="span">Seguro...</span>
                  </p>

                </div>

              </div>
            </li>

          </ul>

        </div>
      </section>

      <section className="section shop" id="shop" aria-label="shop" style={{ backgroundImage: "url('./assets/images/shop-bg.jpg')" }}>
      <div className="container">

        <h2 className="h2 section-title">
          Bem-Vindo a nossa <span className="span">História</span>
        </h2>

        <p className="section-text">
          Agora iremos contar um pouco mais sobre a história e sobre os personagens, tentamos trazer ao máximo a ideia fantasiosa de "Salvar a princesa" para o nosso jogo!
        </p>

        <ul className="has-scrollbar">

          <li className="scrollbar-item">
            <div className="shop-card">
              Há muito tempo, numa terra distante, mais precisamente na cidade de Aeldaria, havia um homem chamado Kenneth, cujo sonho era se tornar o maior guerreiro que o mundo já viu. Mas mal ele sabia que esse sonho estava tão perto de se tornar real.<br /><br />
              Num belo dia, enquanto estava caçando seu café da manhã pelo vale florestal, Kenneth ouviu um barulho. Pareciam gritos, mas estavam tão distantes, tão baixos, que resolveu ignorar e continuar sua caçada matinal. Porém, à medida que adentrava na floresta, os gritos começaram a ficar mais altos e mais repentinos. Mesmo sendo um pouco medroso, Kenneth era muito curioso, e continuou seguindo os sons que ouvia. Consigo, só tinha uma espada, que afinal nem era tão boa assim, já que era do seu falecido pai.<br /><br />
              Após alguns minutos procurando o caminho para seguir a voz, os gritos cessaram. Tudo ficou calmo, e o mais inacreditável foi que o dia virou noite num piscar de olhos.
              "Eu acho que já está na hora de eu voltar", afirmou Kenneth, logo após perceber que estava tudo escuro.<br /><br />
              Não deu nem tempo de dar meia volta e começaram a aparecer criaturas. Eram pequenas, azuis, extremamente fofas, próximas a ele, e como se tudo que já estava ruim pudesse piorar, elas começaram a atacá-lo.<br /> A única coisa que conseguiu fazer foi correr, e o único lugar onde podia se esconder era uma caverna, esquisita, mas não teve jeito.<br />
              Assim que entrou, começaram a se acender várias tochas, fazendo um caminho. Parecia até magia, onde não podia se ver o fim, e como não dava para voltar, o jeito foi seguir em frente. Como não era bobo nem nada, pegou uma das tochas que estavam na parede para levar consigo, e assim seguiu, olhando mais de perto as paredes. Parecia que estavam queimadas. Chegou até pensar que poderia ser a moradia de um dragão.
              "Com licença, senhor dragão, só estou de passagem, ok?" - Riu e continuou - "Até parece, dragões foram extintos há milhões de anos."<br /><br />
              Sem saber muito bem para onde estava indo, acabou encontrando um lago. Parou para beber água rapidamente, e quando levantou a cabeça, viu uma mulher desacordada do outro lado do lago. Havia escoriações em volta do rosto dela. Não pensou muito e já se levantou como um bravo guerreiro para ir ao outro lado ajudá-la. Assim que ele levantou, sentiu um bafo extremamente quente nas suas costas, como se estivesse pegando fogo. Ele não conseguia acreditar, mas ele sabia o que veria assim que virasse...<br /><br />
            </div>
          </li>

        </ul>

      </div>
    </section>
    <section className="section featured-game" id="features" aria-label="featured game">
      <div className="container">

        <h2 className="h2 section-title">
          Conheça os <span className="span">Criadores</span>
        </h2>

        <ul className="has-scrollbar">

          <li className="scrollbar-item">
            <div className="featured-game-card">

              <figure className="card-banner img-holder" style={{ '--width': 450, '--height': 600 }}>
                <img src="./assets/images/raulll.jpeg" width="450" height="600" loading="lazy"
                  alt="Raul" className="img-cover" />
              </figure>

              <div className="card-content">
                <h3 className="h3">
                  <a href="#" className="card-title" tabIndex="-1">
                    Raul <span className="span">Cruzati</span>
                  </a>
                </h3>

                <span className="card-meta">
                  <ion-icon name="notifications"></ion-icon>
                  <span className="dados">25 anos, Desenvolvedor da História do Jogo</span>
                </span>

              </div>

              <div className="card-content-overlay">
                <img src="./assets/images/featured-game-icon.png" width="36" height="61" loading="lazy" alt=""
                  className="card-icon" />

                <h3 className="h3">
                  <a href="#" className="card-title">
                    <span className="span">Intagram DEV</span>
                  </a>
                </h3>

                <span className="card-meta">
                  <span className="span"><u>@crvzati</u></span>
                </span>
              </div>

            </div>
          </li>

          <li className="scrollbar-item">
            <div className="featured-game-card">

              <figure className="card-banner img-holder" style={{ '--width': 450, '--height': 600 }}>
                <img src="./assets/images/gabrielllll.jpeg" width="450" height="600" loading="lazy"
                  alt="Gabs" className="img-cover" />
              </figure>

              <div className="card-content">

                <h3 className="h3">
                  <a href="#" className="card-title" tabIndex="-1">
                    Gabriel <span className="span">Silva</span>
                  </a>
                </h3>

                <span className="card-meta">
                  <ion-icon name="notifications"></ion-icon>
                  <span className="dados">20 anos, Desenvolvedor do Game</span>
                </span>

              </div>

              <div className="card-content-overlay">

                <img src="./images/featured-game-icon.png" width="36" height="61" loading="lazy" alt=""
                  className="card-icon" />

                <h3 className="h3">
                  <a href="#" className="card-title">
                    <span className="span">Intagram DEV</span>
                  </a>
                </h3>

                <span className="card-meta">
                  <ion-icon name="notifications"></ion-icon>
                  <span className="span"><u>@bielss</u></span>
                </span>

              </div>

            </div>
          </li>

          {/* Repita o mesmo padrão para os outros criadores */}

        </ul>

      </div>
    </section>

    </article>

    </main>
  );
}

function Footer() {
  return (
    <footer className="footer">
      {/* Conteúdo do rodapé aqui */}
    </footer>
  );
}

function sla() {
  return (
    <div className="sla">
      <Header />
      <MainContent />
      <Footer />
    </div>
  );
}

export default sla;
