@extends('layout')

@section('body')
    <!-- Header Area wrapper Starts -->
    <header id="header-wrap">
        <!-- Navbar Start -->
        <nav class="navbar navbar-expand-lg fixed-top scrolling-navbar carbon">
            <div class="container">
                <!-- Brand and toggle get grouped for better mobile display -->
                <div class="navbar-header">
                    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#main-navbar" aria-controls="main-navbar" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                        <span class="icon-menu"></span>
                        <span class="icon-menu"></span>
                        <span class="icon-menu"></span>
                    </button>
                    <a href="{{ route('home') }}" class="navbar-brand">
                        <span class="firstName">Cyril</span> Tonneville
                    </a>
                </div>
                <div class="collapse navbar-collapse" id="main-navbar">
                    <ul class="onepage-nev navbar-nav mr-auto w-100 justify-content-end clearfix">
                        <li class="nav-item active">
                            <a class="nav-link" href="#hero-area">
                                Suspect
                            </a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#about">
                                Accusation
                            </a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#services">
                                Complices
                            </a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#resume">
                                Parcours
                            </a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#portfolios">
                                Délits
                            </a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#contact">
                                Avis de recherche
                            </a>
                        </li>
                    </ul>
                </div>
            </div>

            <!-- Mobile Menu Start -->
            <ul class="onepage-nev mobile-menu">
                <li>
                    <a href="#home">Suspect</a>
                </li>
                <li>
                    <a href="#about">Accusation</a>
                </li>
                <li>
                    <a href="#services">Complices</a>
                </li>
                <li>
                    <a href="#resume">Parcours</a>
                </li>
                <li>
                    <a href="#portfolio">Délits</a>
                </li>
                <li>
                    <a href="#contact">Avis de recherche</a>
                </li>
            </ul>
            <!-- Mobile Menu End -->
        </nav>
        <!-- Navbar End -->

        <!-- Hero Area Start -->
        <div id="hero-area" class="hero-area-bg">
            <div class="overlay"></div>
            <div class="container">
                <div class="row">
                    <div class="col-md-12 col-sm-12 text-center">
                        <div class="contents">
                            <h5 class="script-font wow fadeInUp" data-wow-delay="0.2s">Suspect</h5>
                            <h2 class="head-title wow fadeInUp" data-wow-delay="0.4s">Cyril Tonneville</h2>
                            <p class="script-font wow fadeInUp" data-wow-delay="0.6s">Directeur Technique et Développeur PHP</p>
                            <ul class="social-icon wow fadeInUp" data-wow-delay="0.8s">
                                <li>
                                    <a class="twitter" href="https://twitter.com/tonnevillec" target="blank"><i class="icon-social-twitter"></i></a>
                                </li>
                                <li>
                                    <a class="linkedin" href="https://www.linkedin.com/in/cyriltonneville/" target="blank"><i class="icon-social-linkedin"></i></a>
                                </li>
                                <li>
                                    <a class="viadeo" href="https://www.viadeo.com/p/002l8x02sqvfwcn" target="blank"><i class="fab fa-viadeo"></i></a>
                                </li>
                                <li>
                                    <a class="google" href="https://plus.google.com/u/0/+CyrilTonneville" target="blank"><i class="icon-social-google"></i></a>
                                </li>
                                <li>
                                    <a class="github" href="https://github.com/tonnevillec" target="blank"><i class="icon-social-github"></i></a>
                                </li>
                            </ul>
                            <div class="header-button wow fadeInUp" data-wow-delay="1s">
                                <a href="/pdf/CV_Cyril_TONNEVILLE.pdf" target="_blank" class="btn btn-common"><i class="far fa-file-pdf"></i> Télécharger mon casier</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <!-- Hero Area End -->

    </header>
    <!-- Header Area wrapper End -->

    <!-- About Section Start -->
    <section id="about" class="section-padding bg-sombre">
        <div class="container">
            <div class="row">
                <div class="col-lg-6 col-md-6 col-sm-12 col-xs-12">
                    <div class="img-thumb wow fadeInLeft" data-wow-delay="0.3s">
                        <img class="img-fluid" src="img/about/profil.png" alt="">
                    </div>
                </div>
                <div class="col-lg-6 col-md-6 col-sm-12 col-xs-12">
                    <div class="profile-wrapper wow fadeInRight" data-wow-delay="0.3s">
                        <h3>Accusation</h3>
                        <p>Depuis 2002 je sévis dans l'informatique. D'abord dans l'administration de réseau (de 2002 à 2008) puis dans le développement d'applications Web.
                            Aujourd'hui mes armes sont diverses avec une préférence pour le développement en PHP avec le framework Laravel.
                        </p>
                        <div class="about-profile">
                            <ul class="admin-profile">
                                <li><span class="pro-title"> Nom </span> <span class="pro-detail">Tonneville</span></li>
                                <li><span class="pro-title"> Prénom </span> <span class="pro-detail">Cyril</span></li>
                                <li><span class="pro-title"> Age </span> <span class="pro-detail">36 Ans</span></li>
                                <li><span class="pro-title"> Expérience </span> <span class="pro-detail">16 Années</span></li>
                                <li><span class="pro-title"> Pays </span> <span class="pro-detail">FRANCE</span></li>
                                <li><span class="pro-title"> E-mail </span> <span class="pro-detail">tonnevillec@gmail.com</span></li>
                                <li><span class="pro-title"> Téléphone </span> <span class="pro-detail">06.50.49.24.05</span></li>
                                <li><span class="pro-title"> Poste actuel </span> <span class="pro-detail">Directeur Technique - PRODIGIT</span></li>
                            </ul>
                        </div>
                        <a href="/pdf/CV_Cyril_TONNEVILLE.pdf" class="btn btn-common"><i class="far fa-file-pdf"></i> Télécharger mon casier</a>
                        <a href="#contact" class="btn btn-danger"><i class="icon-speech"></i> Rechercher</a>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <!-- About Section End -->

    <!-- Services Section Start -->
    <section id="services" class="services section-padding">
        <h2 class="section-title wow flipInX" data-wow-delay="0.4s">Complices</h2>
        <div class="container">
            <div class="row">
                <!-- Services item -->
                <div class="col-md-6 col-lg-3 col-xs-12">
                    <div class="services-item wow fadeInDown" data-wow-delay="0.3s">
                        <div class="icon">
                            <i class="fab fa-laravel"></i>
                        </div>
                        <div class="services-content">
                            <h3><a href="#">Back Office</a></h3>
                            <p>
                                <img src="/img/skills/php.png" class="skills" data-toggle="tooltip" title="<i class='fas fa-star'></i><i class='fas fa-star'></i><i class='fas fa-star'></i><i class='fas fa-star'></i><i class='far fa-star fa-w-18'></i> PHP 4/5/7"/>
                                <img src="/img/skills/laravel.png" class="skills" data-toggle="tooltip" title="<i class='fas fa-star'></i><i class='fas fa-star'></i><i class='fas fa-star'></i><i class='fas fa-star'></i><i class='far fa-star fa-w-18'></i> Laravel 5"/>
                                <img src="/img/skills/symfony.png" class="skills" data-toggle="tooltip" title="<i class='fas fa-star'></i><i class='fas fa-star'></i><i class='fas fa-star'></i><i class='far fa-star fa-w-18'></i><i class='far fa-star fa-w-18'></i> Symfony 2.7/3"/>
                            </p>
                        </div>
                    </div>
                </div>
                <!-- Services item -->
                <div class="col-md-6 col-lg-3 col-xs-12">
                    <div class="services-item wow fadeInDown" data-wow-delay="0.6s">
                        <div class="icon">
                            <i class="fab fa-html5"></i>
                        </div>
                        <div class="services-content">
                            <h3><a href="#">Front Office</a></h3>
                            <p><img src="/img/skills/html5.png" class="skills" data-toggle="tooltip" title="<i class='fas fa-star'></i><i class='fas fa-star'></i><i class='fas fa-star'></i><i class='fas fa-star'></i><i class='far fa-star fa-w-18'></i> HTML 5"/>
                                <img src="/img/skills/css3.png" class="skills" data-toggle="tooltip" title="<i class='fas fa-star'></i><i class='fas fa-star'></i><i class='fas fa-star'></i><i class='fas fa-star'></i><i class='far fa-star fa-w-18'></i> CSS 3"/>
                                <img src="/img/skills/jquery.png" class="skills" data-toggle="tooltip" title="<i class='fas fa-star'></i><i class='fas fa-star'></i><i class='fas fa-star'></i><i class='fas fa-star'></i><i class='far fa-star fa-w-18'></i> JQuery"/>
                                <img src="/img/skills/bootstrap.png" class="skills" data-toggle="tooltip" title="<i class='fas fa-star'></i><i class='fas fa-star'></i><i class='fas fa-star'></i><i class='fas fa-star'></i><i class='far fa-star fa-w-18'></i> Bootstrap 3/4"/>
                            </p>
                        </div>
                    </div>
                </div>
                <!-- Services item -->
                <div class="col-md-6 col-lg-3 col-xs-12">
                    <div class="services-item wow fadeInDown" data-wow-delay="0.9s">
                        <div class="icon">
                            <i class="fas fa-database"></i>
                        </div>
                        <div class="services-content">
                            <h3><a href="#">Bases de données</a></h3>
                            <p><img src="/img/skills/mysql.png" class="skills" data-toggle="tooltip" title="<i class='fas fa-star'></i><i class='fas fa-star'></i><i class='fas fa-star'></i><i class='fas fa-star'></i><i class='far fa-star fa-w-18'></i> MySQL"/>
                                <img src="/img/skills/oracle.png" class="skills" data-toggle="tooltip" title="<i class='fas fa-star'></i><i class='fas fa-star'></i><i class='fas fa-star'></i><i class='fas fa-star'></i><i class='far fa-star fa-w-18'></i> Oracle + PL/SQL"/>
                                <img src="/img/skills/postgresql.png" class="skills" data-toggle="tooltip" title="<i class='fas fa-star'></i><i class='fas fa-star'></i><i class='fas fa-star'></i><i class='far fa-star fa-w-18'></i><i class='far fa-star fa-w-18'></i> PostGre SQL"/></p>
                        </div>
                    </div>
                </div>
                <!-- Services item -->
                <div class="col-md-6 col-lg-3 col-xs-12">
                    <div class="services-item wow fadeInDown" data-wow-delay="1.2s">
                        <div class="icon">
                            <i class="fab fa-linux"></i>
                        </div>
                        <div class="services-content">
                            <h3><a href="#">Environnements</a></h3>
                            <p><img src="/img/skills/microsoft.png" class="skills" data-toggle="tooltip" title="<i class='fas fa-star'></i><i class='fas fa-star'></i><i class='fas fa-star'></i><i class='fas fa-star'></i><i class='far fa-star'></i> Windows toutes versions server et professionel"/>
                                <img src="/img/skills/linux.png" class="skills" data-toggle="tooltip" title="<i class='fas fa-star'></i><i class='fas fa-star'></i><i class='fas fa-star'></i><i class='far fa-star fa-w-18'></i><i class='far fa-star fa-w-18'></i> Linux / Ubuntu / Debian"/>
                                <img src="/img/skills/github.png" class="skills" data-toggle="tooltip" title="<i class='fas fa-star'></i><i class='fas fa-star'></i><i class='far fa-star fa-w-18'></i><i class='far fa-star fa-w-18'></i><i class='far fa-star fa-w-18'></i> Git + Github / Gitlab"/>
                                <img src="/img/skills/vagrant.png" class="skills" data-toggle="tooltip" title="<i class='fas fa-star'></i><i class='fas fa-star'></i><i class='fas fa-star'></i><i class='far fa-star fa-w-18'></i><i class='far fa-star fa-w-18'></i> Vagrant"/>
                                <img src="/img/skills/nginx.png" class="skills" data-toggle="tooltip" title="<i class='fas fa-star'></i><i class='fas fa-star'></i><i class='fas fa-star'></i><i class='far fa-star fa-w-18'></i><i class='far fa-star fa-w-18'></i> Serveur Web Nginx"/>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <!-- Services Section End -->

    <!-- Resume Section Start -->
    <div id="resume" class="section-padding">
        <div class="container">
            <div class="row">
                <div class="col-lg-6 col-md-6 col-sm-6">
                    <div class="education wow fadeInRight" data-wow-delay="0.3s">
                        <ul class="timeline">
                            <li>
                                <i class="icon-trophy"></i>
                                <h2 class="timelin-title">Formations</h2>
                            </li>
                            <li>
                                <div class="content-text">
                                    <h3 class="line-title">Développeur Web PHP / SYMFONY</h3>
                                    <span>Oct. 2015 : OpenClassroom</span>
                                </div>
                            </li>
                            <li>
                                <div class="content-text">
                                    <h3 class="line-title">MAGENTO - Découverte</h3>
                                    <span>Sept. 2015 : Formation interne GFI Informatique</span>
                                </div>
                            </li>
                            <li>
                                <div class="content-text">
                                    <h3 class="line-title">Intégrateur Web</h3>
                                    <span>Janv. 2015 : OpenClassroom</span>
                                </div>
                            </li>
                            <li>
                                <div class="content-text">
                                    <h3 class="line-title">PRESTASHOP</h3>
                                    <span>Oct. 2013 : AVOLYS</span>
                                </div>
                            </li>
                            <li>
                                <div class="content-text">
                                    <h3 class="line-title">Expert Accessiweb 2.0 en évaluation de sites</h3>
                                    <span>Déc. 2011 : BRAILLENET</span>
                                </div>
                            </li>
                            <li>
                                <div class="content-text">
                                    <h3 class="line-title">Développement Web avec SYMFONY 2</h3>
                                    <span>Sept. 2011 : SENSIOLAB</span>
                                </div>
                            </li>
                            <li>
                                <div class="content-text">
                                    <h3 class="line-title withDetails" data-toggle="collapse" data-target="#moreFormations" aria-expanded="false" aria-controls="moreFormations"><i class="icon-arrow-right"></i> Et bien d'autres...</h3>
                                    {{--<span>Depuis Fév. 2017</span>--}}
                                    <p class="line-text collapse" id="moreFormations">
                                        <i class="fas fa-dot-circle"></i> Oct. 2010: MySQL Administration - AVOLYS<br />
                                        <i class="fas fa-dot-circle"></i> Mai 2009: TOMCAT Administration - v<br />
                                        <i class="fas fa-dot-circle"></i> Fev. 2009: PHP5 Perfectionnement - ORSYS<br />
                                        <i class="fas fa-dot-circle"></i> Sept. 2008: Développer en Visual Basic - ORSYS<br />
                                        <i class="fas fa-dot-circle"></i> Juin 2008: Développer en PL/SQL - ORSYS<br />
                                        <i class="fas fa-dot-circle"></i> Avr. 2008: Websphere Application Server V6.1 - Administration - IBM<br />
                                        <i class="fas fa-dot-circle"></i> Avr. 2008: Websphere J2EE - Concepts et architecture - IBM<br />
                                        <i class="fas fa-dot-circle"></i> Juil. 2007: Flash avec Action Script - ORSYS<br />
                                        <i class="fas fa-dot-circle"></i> Nov. 2006: LAMP - AVOLYS<br />
                                        <i class="fas fa-dot-circle"></i> Mars 2004: Mise à niveau des connaissances d’administrateur système Microsoft Windows 2000 vers Microsoft Windows Server 2003 – Cours Microsoft 2212 - CPI<br />
                                        <i class="fas fa-dot-circle"></i> Mars 2004: Mise à niveau des connaissances d’ingénieur système Microsoft Windows 2000 vers Microsoft Windows Server 2003 – Cours Microsoft 2105 - CPI<br />
                                    </p>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
                <div class="col-lg-6 col-md-6 col-sm-6">
                    <div class="experience wow fadeInRight" data-wow-delay="0.6s">
                        <ul class="timeline">
                            <li>
                                <i class="icon-briefcase"></i>
                                <h2 class="timelin-title">Expériences</h2>
                            </li>
                            <li>
                                <div class="content-text">
                                    <h3 class="line-title withDetails" data-toggle="collapse" data-target="#experience1" aria-expanded="false" aria-controls="experience2"><i class="icon-arrow-right"></i> PRODIGIT - Directeur Technique Back office</h3>
                                    <span>Depuis Fév. 2017</span>
                                    <p class="line-text collapse" id="experience1">
                                        <i class="fas fa-dot-circle"></i> Développement du back office des applications avec Laravel<br />
                                        <i class="fas fa-dot-circle"></i> Développement des API utilisée par les applications mobiles
                                    </p>
                                </div>
                            </li>
                            <li>
                                <div class="content-text">
                                    <h3 class="line-title withDetails" data-toggle="collapse" data-target="#experience2" aria-expanded="false" aria-controls="experience2"><i class="icon-arrow-right"></i> FIDUCIAL - Lead Developer PHP / Symfony</h3>
                                    <span>Déc. 2015 - Fév. 2017</span>
                                    <p class="line-text collapse" id="experience2">
                                        <i class="fas fa-dot-circle"></i> Développement d’applications web en PHP avec Symfony 2.7<br/>
                                        <i class="fas fa-dot-circle"></i> Gestion de projet et encadrement d’une équipe de 4 développeurs<br/>
                                        <i class="fas fa-dot-circle"></i> Support informatique des applications et des bases de données RH
                                    </p>
                                </div>
                            </li>
                            <li>
                                <div class="content-text">
                                    <h3 class="line-title withDetails" data-toggle="collapse" data-target="#experience3" aria-expanded="false" aria-controls="experience2"><i class="icon-arrow-right"></i> GFI INFORMATIQUE - Ingénieur d'études</h3>
                                    <span>Sept. 2015 - Déc. 2015</span>
                                    <p class="line-text collapse" id="experience3">
                                        <i class="fas fa-dot-circle"></i> Développement d’applications et support aux clients<br/>
                                        <i class="fas fa-dot-circle"></i> Installation et configuration d’un serveur de monitoring sous Nagios<br/>
                                        <i class="fas fa-dot-circle"></i> Développement d’une interface de gestion du serveur de monitoring sous Symfony 2.7<br/>
                                        <i class="fas fa-dot-circle"></i> Création d’un plugin pour monitorer des sites Magento (scénario de tests fonctionnels avec CasperJS)
                                    </p>
                                </div>
                            </li>
                            <li>
                                <div class="content-text">
                                    <h3 class="line-title withDetails" data-toggle="collapse" data-target="#experience4" aria-expanded="false" aria-controls="experience2"><i class="icon-arrow-right"></i> TOSHIBA TEIS - Analyste programmeur</h3>
                                    <span>Juil. 2008 – Aout 2015</span>
                                    <p class="line-text collapse" id="experience4">
                                        <i class="fas fa-dot-circle"></i> Développement d’applications web en PHP pour les besoins des services<br/>
                                        <i class="fas fa-dot-circle"></i> Support informatique des applications et des bases de données du centre logistique<br/>
                                        <i class="fas fa-dot-circle"></i> éveloppement et maintenance des interfaces informatiques avec l’UGAP<br/>
                                        <i class="fas fa-dot-circle"></i> Support aux utilisateurs
                                    </p>
                                </div>
                            </li>
                            <li>
                                <div class="content-text">
                                    <h3 class="line-title withDetails" data-toggle="collapse" data-target="#experience5" aria-expanded="false" aria-controls="experience2"><i class="icon-arrow-right"></i> TOSHIBA TEIS - Administrateur réseaux</h3>
                                    <span>Oct. 2002 – Juin 2008</span>
                                    <p class="line-text collapse" id="experience5">
                                        <i class="fas fa-dot-circle"></i> Installation, configuration de serveurs<br/>
                                        <i class="fas fa-dot-circle"></i> Installation, configuration de postes clients sous Windows
                                    </p>
                                </div>
                            </li>
                        </ul>
                        <ul class="timeline">
                            <li>
                                <i class="icon-graduation"></i>
                                <h2 class="timelin-title">Diplômes</h2>
                            </li>
                            <li>
                                <div class="content-text">
                                    <h3 class="line-title">Bac Scientifique</h3>
                                    <span>2001</span>
                                    <p class="line-text">
                                        <i class="fas fa-dot-circle"></i> Lycée de la Côte d’Albâtre à Saint Valéry en Caux (76)
                                    </p>
                                </div>
                            </li>
                            <li>
                                <div class="content-text">
                                    <h3 class="line-title">Technicien Supérieur en Administration de Réseaux</h3>
                                    <span>2002 - 2004</span>
                                    <p class="line-text">
                                        <i class="fas fa-dot-circle"></i> Alternance CESI Haute-Normandie / TOSHIBA TEIS
                                    </p>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <!-- Resume Section End -->

    <!-- Portfolio Section -->
    <section id="portfolios" class="section-padding">
        <!-- Container Starts -->
        <div class="container">
            <h2 class="section-title wow flipInX" data-wow-delay="0.4s">Délits</h2>
            <div class="row">
                <div class="col-md-12">
                    <!-- Portfolio Controller/Buttons -->
                    <div class="controls text-center">
                        <a class="filter active btn btn-common" data-filter="all">
                            Tout
                        </a>
                        <a class="filter btn btn-common" data-filter=".prodigit">
                            Prodigit
                        </a>
                        <a class="filter btn btn-common" data-filter=".toshiba">
                            Toshiba
                        </a>
                        <a class="filter btn btn-common" data-filter=".laravel">
                            Laravel
                        </a>
                        <a class="filter btn btn-common" data-filter=".php">
                            Php
                        </a>
                        <a class="filter btn btn-common" data-filter=".html">
                            Html
                        </a>
                        <a class="filter btn btn-common" data-filter=".css">
                            Css
                        </a>
                        <a class="filter btn btn-common" data-filter=".jQuery">
                            jQuery
                        </a>
                        <a class="filter btn btn-common" data-filter=".api">
                            Api pour applications mobiles
                        </a>
                        <a class="filter btn btn-common" data-filter=".wordpress">
                            Wordpress
                        </a>
                    </div>
                    <!-- Portfolio Controller/Buttons Ends-->
                </div>

                <!-- Portfolio Recent Projects -->
                <div id="portfolio" class="row wow fadeInDown" data-wow-delay="0.4s">
                    <div class="col-sm-6 col-md-4 col-lg-4 col-xl-4 mix prodigit html css php api laravel" data-bound="" style="display: inline-block;">
                        <div class="portfolio-item">
                            <div class="shot-item">
                                <img src="{{ asset('img/gallery/applux.png') }}" alt="" />
                                <div class="overlay">
                                    <div class="icons">
                                        <a class="lightbox preview" href="{{ asset('img/gallery/applux.png') }}">
                                            <i class="icon-eye"></i>
                                        </a>
                                        <a class="link" href="#">
                                            <i class="icon-link"></i>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-sm-6 col-md-4 col-lg-4 col-xl-4 mix prodigit php html css jQuery api laravel" data-bound="" style="display: inline-block;">
                        <div class="portfolio-item">
                            <div class="shot-item">
                                <img src="{{ asset('img/gallery/cality.png') }}" alt="" />
                                <div class="overlay">
                                    <div class="icons">
                                        <a class="lightbox preview" href="{{ asset('img/gallery/cality.png') }}">
                                            <i class="icon-eye"></i>
                                        </a>
                                        <a class="link" href="#">
                                            <i class="icon-link"></i>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-sm-6 col-md-4 col-lg-4 col-xl-4 mix toshiba wordpress" data-bound="" style="display: inline-block;">
                        <div class="portfolio-item">
                            <div class="shot-item">
                                <img src="{{ asset('img/gallery/ceweb01.png') }}" alt="" />
                                <div class="overlay">
                                    <div class="icons">
                                        <a class="lightbox preview" href="{{ asset('img/gallery/ceweb01.png') }}">
                                            <i class="icon-eye"></i>
                                        </a>
                                        <a class="link" href="#">
                                            <i class="icon-link"></i>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-sm-6 col-md-4 col-lg-4 col-xl-4 mix toshiba php html css jQuery" data-bound="" style="display: inline-block;">
                        <div class="portfolio-item">
                            <div class="shot-item">
                                <img src="{{ asset('img/gallery/comptaCe01.png') }}" alt="" />
                                <div class="overlay">
                                    <div class="icons">
                                        <a class="lightbox preview" href="{{ asset('img/gallery/comptaCe01.png') }}">
                                            <i class="icon-eye"></i>
                                        </a>
                                        <a class="link" href="#">
                                            <i class="icon-link"></i>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-sm-6 col-md-4 col-lg-4 col-xl-4 mix toshiba php html css jQuery" data-bound="" style="display: inline-block;">
                        <div class="portfolio-item">
                            <div class="shot-item">
                                <img src="{{ asset('img/gallery/extranet01.png') }}" alt="" />
                                <div class="overlay">
                                    <div class="icons">
                                        <a class="lightbox preview" href="{{ asset('img/gallery/extranet01.png') }}">
                                            <i class="icon-eye"></i>
                                        </a>
                                        <a class="link" href="#">
                                            <i class="icon-link"></i>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-sm-6 col-md-4 col-lg-4 col-xl-4 mix toshiba php html css jQuery" data-bound="" style="display: inline-block;">
                        <div class="portfolio-item">
                            <div class="shot-item">
                                <img src="{{ asset('img/gallery/files01.png') }}" alt="" />
                                <div class="overlay">
                                    <div class="icons">
                                        <a class="lightbox preview" href="{{ asset('img/gallery/files01.png') }}">
                                            <i class="icon-eye"></i>
                                        </a>
                                        <a class="link" href="#">
                                            <i class="icon-link"></i>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-sm-6 col-md-4 col-lg-4 col-xl-4 mix toshiba php html css" data-bound="" style="display: inline-block;">
                        <div class="portfolio-item">
                            <div class="shot-item">
                                <img src="{{ asset('img/gallery/filesOld01.png') }}" alt="" />
                                <div class="overlay">
                                    <div class="icons">
                                        <a class="lightbox preview" href="{{ asset('img/gallery/filesOld01.png') }}">
                                            <i class="icon-eye"></i>
                                        </a>
                                        <a class="link" href="#">
                                            <i class="icon-link"></i>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-sm-6 col-md-4 col-lg-4 col-xl-4 mix toshiba php html css jQuery" data-bound="" style="display: inline-block;">
                        <div class="portfolio-item">
                            <div class="shot-item">
                                <img src="{{ asset('img/gallery/p2c01.png') }}" alt="" />
                                <div class="overlay">
                                    <div class="icons">
                                        <a class="lightbox preview" href="{{ asset('img/gallery/p2c01.png') }}">
                                            <i class="icon-eye"></i>
                                        </a>
                                        <a class="link" href="#">
                                            <i class="icon-link"></i>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-sm-6 col-md-4 col-lg-4 col-xl-4 mix toshiba php html css jQuery" data-bound="" style="display: inline-block;">
                        <div class="portfolio-item">
                            <div class="shot-item">
                                <img src="{{ asset('img/gallery/pat01.png') }}" alt="" />
                                <div class="overlay">
                                    <div class="icons">
                                        <a class="lightbox preview" href="{{ asset('img/gallery/pat01.png') }}">
                                            <i class="icon-eye"></i>
                                        </a>
                                        <a class="link" href="#">
                                            <i class="icon-link"></i>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-sm-6 col-md-4 col-lg-4 col-xl-4 mix toshiba php html css jQuery" data-bound="" style="display: inline-block;">
                        <div class="portfolio-item">
                            <div class="shot-item">
                                <img src="{{ asset('img/gallery/susi01.png') }}" alt="" />
                                <div class="overlay">
                                    <div class="icons">
                                        <a class="lightbox preview" href="{{ asset('img/gallery/susi01.png') }}">
                                            <i class="icon-eye"></i>
                                        </a>
                                        <a class="link" href="#">
                                            <i class="icon-link"></i>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-sm-6 col-md-4 col-lg-4 col-xl-4 mix toshiba php html css" data-bound="" style="display: inline-block;">
                        <div class="portfolio-item">
                            <div class="shot-item">
                                <img src="{{ asset('img/gallery/susiOld01.png') }}" alt="" />
                                <div class="overlay">
                                    <div class="icons">
                                        <a class="lightbox preview" href="{{ asset('img/gallery/susiOld01.png') }}">
                                            <i class="icon-eye"></i>
                                        </a>
                                        <a class="link" href="#">
                                            <i class="icon-link"></i>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-sm-6 col-md-4 col-lg-4 col-xl-4 mix toshiba php html css jQuery" data-bound="" style="display: inline-block;">
                        <div class="portfolio-item">
                            <div class="shot-item">
                                <img src="{{ asset('img/gallery/tasks01.png') }}" alt="" />
                                <div class="overlay">
                                    <div class="icons">
                                        <a class="lightbox preview" href="{{ asset('img/gallery/tasks01.png') }}">
                                            <i class="icon-eye"></i>
                                        </a>
                                        <a class="link" href="#">
                                            <i class="icon-link"></i>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-sm-6 col-md-4 col-lg-4 col-xl-4 mix toshiba php html css" data-bound="" style="display: inline-block;">
                        <div class="portfolio-item">
                            <div class="shot-item">
                                <img src="{{ asset('img/gallery/tasksOld02.png') }}" alt="" />
                                <div class="overlay">
                                    <div class="icons">
                                        <a class="lightbox preview" href="{{ asset('img/gallery/tasksOld02.png') }}">
                                            <i class="icon-eye"></i>
                                        </a>
                                        <a class="link" href="#">
                                            <i class="icon-link"></i>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-sm-6 col-md-4 col-lg-4 col-xl-4 mix toshiba php html css" data-bound="" style="display: inline-block;">
                        <div class="portfolio-item">
                            <div class="shot-item">
                                <img src="{{ asset('img/gallery/teis01.png') }}" alt="" />
                                <div class="overlay">
                                    <div class="icons">
                                        <a class="lightbox preview" href="{{ asset('img/gallery/teis01.png') }}">
                                            <i class="icon-eye"></i>
                                        </a>
                                        <a class="link" href="#">
                                            <i class="icon-link"></i>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-sm-6 col-md-4 col-lg-4 col-xl-4 mix toshiba php html css jQuery" data-bound="" style="display: inline-block;">
                        <div class="portfolio-item">
                            <div class="shot-item">
                                <img src="{{ asset('img/gallery/teris02.png') }}" alt="" />
                                <div class="overlay">
                                    <div class="icons">
                                        <a class="lightbox preview" href="{{ asset('img/gallery/teris02.png') }}">
                                            <i class="icon-eye"></i>
                                        </a>
                                        <a class="link" href="#">
                                            <i class="icon-link"></i>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-sm-6 col-md-4 col-lg-4 col-xl-4 mix toshiba php html css" data-bound="" style="display: inline-block;">
                        <div class="portfolio-item">
                            <div class="shot-item">
                                <img src="{{ asset('img/gallery/vialog01.png') }}" alt="" />
                                <div class="overlay">
                                    <div class="icons">
                                        <a class="lightbox preview" href="{{ asset('img/gallery/vialog01.png') }}">
                                            <i class="icon-eye"></i>
                                        </a>
                                        <a class="link" href="#">
                                            <i class="icon-link"></i>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <!-- Container Ends -->
    </section>
    <!-- Portfolio Section Ends -->

    <!-- Counter Area Start-->
    <section class="counter-section section-padding">
        <div class="container">
            <div class="row">
                <!-- Counter Item -->
                <div class="col-md-4 col-sm-6 work-counter-widget text-center">
                    <div class="counter wow fadeInDown" data-wow-delay="0.3s">
                        <div class="icon"><i class="fas fa-birthday-cake"></i></div>
                        <div class="counterUp">36</div>
                        <p>Ans</p>
                    </div>
                </div>
                <div class="col-md-4 col-sm-6 work-counter-widget text-center">
                    <div class="counter wow fadeInDown" data-wow-delay="0.3s">
                        <div class="icon"><i class="fas fa-child"></i></div>
                        <div class="counterUp">2</div>
                        <p>Enfants</p>
                    </div>
                </div>
                <div class="col-md-4 col-sm-6 work-counter-widget text-center">
                    <div class="counter wow fadeInDown" data-wow-delay="0.3s">
                        <div class="icon"><i class="fas fa-address-card"></i></div>
                        <div class="counterUp">B</div>
                        <p>Permis</p>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <!-- Counter Area End-->

    <!-- Contact Section Start -->
    <section id="contact" class="section-padding">
        <div class="contact-form">
            <div class="container">
                <div class="row contact-form-area wow fadeInUp" data-wow-delay="0.4s">
                    <div class="col-md-6 col-lg-6 col-sm-12">
                        <div class="contact-block">
                            <h2>Avis de recherche</h2><br/>
                            <div class="text-center">
                                <form>
                                    <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                                        <div class="form-group">
                                            <label class="control-label sr-only " for="Name"></label>
                                            <input id="name" type="text" placeholder="Nom" class="form-control" required>
                                        </div>
                                    </div>
                                    <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                                        <div class="form-group">
                                            <label class="control-label sr-only " for="email"></label>
                                            <input id="email" type="text" placeholder="Adresse email" class="form-control" required>
                                        </div>
                                    </div>
                                    <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12 mb20">
                                        <div class="form-group">
                                            <label class="control-label sr-only" for="textarea">Message</label>
                                            <textarea class="form-control pdt20" id="textarea" name="textarea" rows="5" placeholder="Votre message"></textarea>
                                        </div>
                                    </div>
                                    <div class="col-lg-12 col-md-12 col-sm-6 col-xs-12">
                                        <button class="btn btn-primary btn-lg "><i class="far fa-envelope"></i> Envoyer</button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-6 col-lg-6 col-sm-12">
                        <div class="footer-right-area wow fadeIn">
                            <h2>Shérif</h2>
                            <div class="footer-right-contact">
                                <div class="single-contact">
                                    <div class="contact-icon">
                                        <i class="fa fa-map-marker"></i>
                                    </div>
                                    <p>Lyon, 69</p>
                                </div>
                                <div class="single-contact">
                                    <div class="contact-icon">
                                        <i class="fa fa-envelope"></i>
                                    </div>
                                    <p><a href="mailto:tonnevillec@gmail.com">tonnevillec@gmail.com</a></p>
                                </div>
                                <div class="single-contact">
                                    <div class="contact-icon">
                                        <i class="fa fa-phone"></i>
                                    </div>
                                    <p><a href="#">06.50.49.24.05</a></p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <!-- Contact Section End -->

    <!-- Footer Section Start -->
    <footer class="footer-area section-padding">
        <div class="container">
            <div class="row">
                <div class="col-md-12">
                    <div class="footer-text text-center wow fadeInDown" data-wow-delay="0.3s">
                        <ul class="social-icon">
                            <li>
                                <a class="twitter" href="https://twitter.com/tonnevillec" target="blank"><i class="icon-social-twitter"></i></a>
                            </li>
                            <li>
                                <a class="linkedin" href="https://www.linkedin.com/in/cyriltonneville/" target="blank"><i class="icon-social-linkedin"></i></a>
                            </li>
                            <li>
                                <a class="viadeo" href="https://www.viadeo.com/p/002l8x02sqvfwcn" target="blank"><i class="fab fa-viadeo"></i></a>
                            </li>
                            <li>
                                <a class="google" href="https://plus.google.com/u/0/+CyrilTonneville" target="blank"><i class="icon-social-google"></i></a>
                            </li>
                            <li>
                                <a class="github" href="https://github.com/tonnevillec" target="blank"><i class="icon-social-github"></i></a>
                            </li>
                        </ul>
                        <p>Copyright © 2018 - Cyril Tonneville</p>
                    </div>
                </div>
            </div>
        </div>
    </footer>
    <!-- Footer Section End -->

    <!-- Go to Top Link -->
    <a href="#" class="back-to-top">
        <i class="icon-arrow-up"></i>
    </a>
@endsection