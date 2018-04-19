<div class="contact-form">
    <div class="container">
        <div class="row contact-form-area wow fadeInUp" data-wow-delay="0.4s">
            <div class="col-md-6 col-lg-6 col-sm-12">
                <div class="contact-block">
                    <h2>Avis de recherche</h2><br/>
                    <div class="text-center">
                        <form name="contactForm" method="POST" action="{{ route('contact.send') }}">
                            {{ csrf_field() }}
                            <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                                <div class="form-group">
                                    <label class="control-label sr-only " for="Name"></label>
                                    <input id="name" name="name" type="text" placeholder="Nom" class="form-control"
                                           required>
                                </div>
                            </div>
                            <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                                <div class="form-group">
                                    <label class="control-label sr-only " for="email"></label>
                                    <input id="email" name="email" type="text" placeholder="Adresse email"
                                           class="form-control" required>
                                </div>
                            </div>
                            <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12 mb20">
                                <div class="form-group">
                                    <label class="control-label sr-only" for="textarea">Message</label>
                                    <textarea class="form-control pdt20" id="textarea" name="message" rows="5"
                                              placeholder="Votre message"></textarea>
                                </div>
                            </div>
                            <div class="col-lg-12 col-md-12 col-sm-6 col-xs-12">
                                <button class="btn btn-primary btn-lg" type="submit"><i class="far fa-envelope"></i>
                                    Envoyer
                                </button>
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