import React from "react";

const Website = () => {
  return (
    <div className="font-sans text-gray-800 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Hero Section */}
      <section className="py-16 md:py-24 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-6">
          We design custom-built websites that deliver real business results
        </h1>
        <p className="text-xl md:text-2xl max-w-3xl mx-auto">
          Your website should be the mirror of your business. We listen to your
          story carefully, understand your marketing objectives, and craft
          beautiful websites that are{" "}
          <span className="font-bold">search engine</span> friendly and help in
          achieving your business perception as well as lead generation goals.
        </p>
      </section>

      {/* Client Logos */}
      <section className="py-12 border-t border-b border-gray-200">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <h1 className="text-2xl font-bold justify-center">Logo Section</h1>
          <div>
            <ul className="space-y-2">
              <li>LOGO 1</li>
              <li>LOGO 2</li>
              <li>LOGO 3</li>
              <li>LOGO 4</li>
            </ul>
          </div>
          <div>
            <ul className="space-y-2">
              <li>LOGO 1</li>
              <li>LOGO 2</li>
              <li>LOGO 3</li>
              <li>LOGO 4</li>
            </ul>
          </div>
        </div>
        <button className="bg-black text-white px-8 py-3 rounded-md font-medium hover:bg-gray-800 transition">
          View our work
        </button>
        <button className="bg-black text-white ml-20 px-8 py-3 rounded-md font-medium hover:bg-gray-800 transition">
          Lets Connect
        </button>
      </section>

      {/* Services Section */}
      <section className="py-16">
        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <h2 className="text-3xl font-bold mb-6">
              Corporate & Business Websites
            </h2>
            <p className="text-lg">
              We help large-scale Corporates to traditional Family-run
              businesses, first-generation Startups to institutions across all
              verticals in telling their story with smart websites.
            </p>
          </div>
          <div>
            <h2 className="text-3xl font-bold mb-6">
              Product & Brand Websites
            </h2>
            <p className="text-lg">
              Brand & Product websites need a different approach. Being mostly
              consumer and channel focussed, we help them develop websites that
              are highly interactive and engaging.
            </p>
          </div>
          <div>
            <h2 className="text-3xl font-bold mb-6">
              eCommerce & Web Applications
            </h2>
            <p>
              Be it fashion, jewellery, retail or B2B- we help businesses move
              Online real fast. Our digital know-how further helps us to set up
              online stores as per their marketing needs
            </p>
          </div>
          <div>
            <h2 className="text-3xl font-bold mb-6">Mobile App Development</h2>
            <p>
              We help clients in planning their new Mobile App defining
              objectives, user journeys and interfaces to develop successful
              applications across iOS & Android platforms.
            </p>
          </div>
        </div>
      </section>

      {/* Unique Offer Section */}
      <section className="py-16 bg-gray-50 rounded-xl px-8 mb-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Looking for something unique & exclusive?
          </h2>
          <button className="bg-black text-white px-8 py-3 rounded-md font-medium hover:bg-gray-800 transition">
            LET'S CONNECT
          </button>
        </div>

        <div className="max-w-4xl mx-auto">
          <h3 className="text-2xl font-bold text-center mb-12">
            Our Secret Recipe
          </h3>
          <p className="text-center mb-12">
            Four ingredients that make up our super successful website recipe.
          </p>

          <div className="row mt-10">
            <div className="col-xs-12 col-sm-5 col-md-4 col-lg-4 col-xl-4 col-xxl-4 full800">
              <div className="bs-text-block" data-aos="fade-up">
                <div className="bs-text-block-container">
                  <div className="bs-text-block-inner">
                    <h3>
                   Brand Positioning
Visual Communication
                     
                    </h3>
                    <h5>Creative Storytelling</h5>
                    <p>
                     Brand Positioning
Visual Communication
Creative Storytelling
Our copywriters and designers with years of advertising experience help in crafting the right visual story for your brand.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className=" col-xs-12 col-sm-7 col-md-8 col-lg-8 col-xl-8 col-xxl-8 full800">
              <div className="bs-media-elements" data-aos="fade-up">
                <div className="bs-common-image ">
                  <img
                    src="https://www.brandwizz.com/images/website/website-011.webp"
                    alt="Strategizing &amp; Planning"
                    title=""
                  />{" "}
                </div>
              </div>
            </div>
          </div>

          <div className="row mt-20">
            <div className="col-xs-12 col-sm-5 col-md-4 col-lg-4 col-xl-4 col-xxl-4 full800">
              <div className="bs-text-block" data-aos="fade-up">
                <div className="bs-text-block-container">
                  <div className="bs-text-block-inner">
                    <h3>
                     Engaging User Navigation
Easy Content Navigation
                    
                    </h3>
                    <h5>Design & Control UX</h5>
                    <p>
                     
Engaging User Navigation
Easy Content Navigation
Design & Control UX
Your website is a stranger to the visitor. We help design an experience that guides the user to navigate through the content easily.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className=" col-xs-12 col-sm-7 col-md-8 col-lg-8 col-xl-8 col-xxl-8 full800">
              <div className="bs-media-elements" data-aos="fade-up">
                <div className="bs-common-image ">
                  <img
                    src="https://www.brandwizz.com/images/website/website-02.webp"
                    alt="Strategizing &amp; Planning"
                    title=""
                  />{" "}
                </div>
              </div>
            </div>
          </div>

          <div className="row mt-20">
            <div className="col-xs-12 col-sm-5 col-md-4 col-lg-4 col-xl-4 col-xxl-4 full800">
              <div className="bs-text-block" data-aos="fade-up">
                <div className="bs-text-block-container">
                  <div className="bs-text-block-inner">
                    <h3>
                   Invisible Programming
Better Performance
                   
                    </h3>
                    <h5>Superior Technology</h5>
                    <p>
                     An experience of more than a decade helps offer updated technology for a faster performance & easy-to-use visitor interfaces.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className=" col-xs-12 col-sm-7 col-md-8 col-lg-8 col-xl-8 col-xxl-8 full800">
              <div className="bs-media-elements" data-aos="fade-up">
                <div className="bs-common-image ">
                  <img
                    src="https://www.brandwizz.com/images/website/website-03.webp"
                    alt="Strategizing &amp; Planning"
                    title=""
                  />{" "}
                </div>
              </div>
            </div>
          </div>

          <div className="row mt-20">
            <div className="col-xs-12 col-sm-5 col-md-4 col-lg-4 col-xl-4 col-xxl-4 full800">
              <div className="bs-text-block" data-aos="fade-up">
                <div className="bs-text-block-container">
                  <div className="bs-text-block-inner">
                    <h3>Lead Generation
Conversion Funnel</h3>
                    <h5>Align Marketing Strategy</h5>
                    <p>
                     At the core of our Design Strategy, we complement your sales and marketing goals to achieve real business results.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className=" col-xs-12 col-sm-7 col-md-8 col-lg-8 col-xl-8 col-xxl-8 full800">
              <div className="bs-media-elements" data-aos="fade-up">
                <div className="bs-common-image ">
                  <img
                    src="https://www.brandwizz.com/images/website/website-04.webp"
                    alt="Strategizing &amp; Planning"
                    title=""
                  />{" "}
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>

    

      {/* Stats Section */}
      <section className="py-16 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
        <div>
          <h3 className="text-4xl font-bold mb-2">16</h3>
          <p>YEARS OF CORE</p>
          <p>WEB DESIGN</p>
          <p>EXPERIENCE</p>
        </div>
        <div>
          <h3 className="text-4xl font-bold mb-2">250</h3>
          <p>HIGHLY</p>
          <p>SATISFIED CLIENTS</p>
        </div>
        <div>
          <h3 className="text-4xl font-bold mb-2">350</h3>
          <p>AND MORE</p>
          <p>PROJECTS HANDLED</p>
        </div>
        <div>
          <h3 className="text-4xl font-bold mb-2">37</h3>
          <p>DIVERSE</p>
          <p>INDUSTRY VERTICALS</p>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gray-900 text-white rounded-xl px-8 mb-16">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Starting a New Project, or Want to Collaborate with Us?
          </h2>
          <button className="bg-white text-black px-8 py-3 rounded-md font-medium hover:bg-gray-200 transition mb-12">
            LET'S CONNECT
          </button>

          <div className="grid md:grid-cols-2 gap-8 text-left mb-12">
            <div>
              <h3 className="font-bold text-lg mb-4">Jamshedpur</h3>
              <p>Gangotri Enclave , Kadma , Jamshedpur</p>
            </div>
           
          </div>

          <div className="mb-8">
          
            <p>+91 9973134651</p>
          </div>

          <div className="border-t border-gray-700 pt-8">
            <h3 className="font-bold text-lg mb-4">
              NOT SURE, WHERE TO START?
            </h3>
            <p className="mb-4">7 points to remember before hiring an agency</p>
            <button className="border border-white px-6 py-2 rounded-md hover:bg-white hover:text-black transition">
              DOWNLOAD FREE WHITE PAPER
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Website;
