---
layout: page
title: Welcome to IVHQ
---
<!-- banner start -->
<!-- ================ -->
<div class="banner">
    <section class="bannerTxt" id="bannerTxt">
        <div class="container">
            <div class="row">
                <div class="col-md-8 col-md-offset-2 text-center inner">
                  <h2 class="animated fadeInDown">Welcome to <span>IVHQ</span></h2>
                  <p class="animated fadeInUp delay-05s">
                    Welcome!

                    Established in 2007, IVHQ is the world's leading volunteer abroad organization, offering a variety of projects in over 30 international destinations. Whether you are traveling abroad, taking a gap year, wanting to experience a volunteer vacation, or simply wishing to provide assistance in a community abroad, IVHQ has the program for you.
                  </p>
                </div>
            </div>
        </div>
    </section>

    <div class="videobox">
        <video autoplay loop poster="{{site.url}}/assets/images/banner.jpg" id="bgvid">
            <source width="100%" src="https://www.volunteerhq.org/sites/all/themes/ivhq/video/hero-video.mp4" type="video/mp4"/>
            <source src="https://www.volunteerhq.org/sites/all/themes/ivhq/video/hero-video.webm" type="video/webm"/>
        </video>
    </div>
</div>
<!-- banner end -->

<!-- testimonial start -->
<!-- ================ -->
<section class="testimonial text-center section-padding" >
	<div class="container">
		<div class="row">
			<div class="col-md-12">
				<h1 class="arrow">TESTIMONIALS</h1>
			</div>
		</div>
		<div class="row">
			<div class="testimonial-wrapper">
				<div id="testimonialSlider">
					<ul class="slides">
						<li>
							<div class="col-md-4">
								{% include testimonial-vert.html testimonial=site.data.testimonials.bob %}
							</div>							
						</li>
						<li>
							<div class="col-md-4">
								{% include testimonial-vert.html testimonial=site.data.testimonials.sally %}
							</div>									
						</li>
						<li>
							<div class="col-md-4">
								{% include testimonial-vert.html testimonial=site.data.testimonials.andy %}
							</div>									
						</li>
					</ul>
				</div>
			</div>
		</div>
	</div>
</section>

<!-- testimonial end -->
