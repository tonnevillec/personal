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
        @include('sections.about')
    </section>
    <!-- About Section End -->

    <!-- Services Section Start -->
    <section id="services" class="services section-padding">
        @include('sections.services')
    </section>
    <!-- Services Section End -->

    <!-- Resume Section Start -->
    <div id="resume" class="section-padding">
        @include('sections.resume')
    </div>
    <!-- Resume Section End -->

    <!-- Portfolio Section -->
    <section id="portfolios" class="section-padding">
        @include('sections.portfolios')
    </section>
    <!-- Portfolio Section Ends -->

    <!-- Counter Area Start-->
    <section class="counter-section section-padding">
        @include('sections.counter')
    </section>
    <!-- Counter Area End-->

    <!-- Contact Section Start -->
    <section id="contact" class="section-padding">
        @include('sections.contact')
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