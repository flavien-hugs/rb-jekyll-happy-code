---
layout: default
title: Qui sommes-nous ?
permalink: /a-propos/
---

<section class="hero with-pattern py-5 bg-light">
    <div class="container py-5 mt-5">
        <div class="row mb-4">
            <div class="col-md-7 mx-auto text-center">
                <p class="h6 text-uppercase text-primary">Qui sommes-nous ?</p>
                <h1>A propos de "Je Me Forme"</h1>
                <p class="text-muted">Besoin d'en savoir plus sur notre entreprise, ce que nous faisons et des services que nous faisons ?</p>
            </div>
        </div>
        <div class="row text-justify">
            <div class="col-md-6">
                <p class="lead"><strong>Je Me Forme</strong> est un service de formation proposé par Cyber Indice. Créée en Janvier 2017 par Mr Nanou, l'un des cofondateur et Président-Directeur Général.</p>
            </div>
            <div class="col-md-6">
                <p class="lead">Elle est spécialisée dans la conception des technologies de l’éducation et dans l’ingénierie pédagogique dans lesquelles l’équipe exécutive a plus de dix-huit (10) années d’expérience cumulée.</p>
            </div>
        </div>
    </div>
</section>

<section class="bg-primary text-white with-pattern-full">
    <div class="container py-5">
        <div class="row">
          <div class="col-lg-4 mb-4 mb-lg-0">
            <div class="media align-items-center">
              <div class="icon-block icon-block-lg bg-white shadow">
                <svg class="svg-icon text-primary">
                  <use xlink:href="#mental-health-1"> </use>
                </svg>
              </div>
              <div class="media-body ml-3">
                <h5>Partages d'idées</h5>
                <p class="text-small mb-0">Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
              </div>
            </div>
          </div>
          <div class="col-lg-4 mb-4 mb-lg-0">
            <div class="media align-items-center">
              <div class="icon-block icon-block-lg bg-white shadow">
                <svg class="svg-icon text-primary">
                  <use xlink:href="#quality-1"> </use>
                </svg>
              </div>
              <div class="media-body ml-3">
                <h5>Formation de qualité</h5>
                <p class="text-small mb-0">Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
              </div>
            </div>
          </div>
          <div class="col-lg-4">
            <div class="media align-items-center">
              <div class="icon-block icon-block-lg bg-white shadow">
                <svg class="svg-icon text-primary">
                  <use xlink:href="#paper-stack-1"> </use>
                </svg>
              </div>
              <div class="media-body ml-3">
                <h5>Conception d'application</h5>
                <p class="text-small mb-0">Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
              </div>
            </div>
          </div>
        </div>
    </div>
</section>

<section class="hero with-pattern py-5 bg-light">
    <div class="container py-5 my-5">
        <div class="row">
          <div class="col-md-7 mx-auto text-center">
            <p class="h6 text-uppercase text-primary">Contatez-nous</p>
            <h4>Nous aimerions avoir de vos nouvelles</h4>
            <p class="text-muted">Appelez-nous, laissez-nous un mail ou venez nous rendre visite dans nos locaux. Nous sommes disponible pour tout échange.</p>
          </div>
        </div>
    </div>
</section>
    
<section class="pulled-up-section pb-5">
    <div class="container text-center">
        <div class="card shadow with-pattern-full">
            <div class="card-body index-forward">
                <div class="row">
                    <div class="col-md-4 mb-4 mb-lg-0">
                        <div class="icon-block icon-block-lg mb-4 mx-auto"><svg class="svg-icon text-primary"><use xlink:href="#landline-1"></use></svg>
                        </div>
                        <h3 class="h4">Téléphone</h3>
                        <ul class="list-unstyled mb-0"><li class="text-muted"><a class="reset-anchor" href="tel:{{ site.tel }}">{{ site.tel }}</a></li></ul>
                    </div>
                    <div class="col-md-4 mb-4 mb-lg-0"><div class="icon-block icon-block-lg mb-4 mx-auto"><svg class="svg-icon text-primary">
                    <use xlink:href="#envelope-1"></use></svg></div>
                    <h3 class="h4">Email</h3>
                    <ul class="list-unstyled mb-0">
                        <li class="text-muted"><a class="reset-anchor" href="mailto:{{ site.email }}">{{ site.email }}</a></li>
                    </ul>
                </div>
                <div class="col-md-4">
                    <div class="icon-block icon-block-lg mb-4 mx-auto"><svg class="svg-icon text-primary"><use xlink:href="#pin-1"></use></svg>
                    </div>
                    <h3 class="h4">Location</h3><ul class="list-unstyled mb-0 px-5"><li class="text-muted"><a class="reset-anchor" href="#">Air-france II, Bouaké, Côte d'Ivoire</a></li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
</div>
</section>

<!--<section class="py-4">
    <div class="container py-5">
        <div class="row">
            <div class="col-lg-7 mx-auto text-center mb-5">
                <h2>Looking for a excellent Business idea?</h2>
                <p class="text-muted">Seamlessly deliver pandemic e-services and next-generation initiatives.</p><a class="btn btn-primary" href="#"><i class="fas fa-globe-americas mr-2"></i>Get directions</a>
            </div>
        </div>
    </div>
</section>-->

{% include testimonial.html %}
