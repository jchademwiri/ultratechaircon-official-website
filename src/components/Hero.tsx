import { ButtonOutline, ButtonSolid } from "./Button";

const Hero = () => {
  return (
    <section className="relative flex min-h-screen flex-col justify-center bg-blue-800 bg-[url('https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=1600')] bg-cover bg-fixed bg-center text-white">
      {/* Darker overlay for better text contrast */}
      <div className="absolute inset-0 bg-gradient-to-b from-blue-950/80 to-blue-950/90"></div>
      
      <div className="relative z-10 mx-auto w-[90%] max-w-4xl py-20 text-center">
        {/* Trust badge */}
        <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-sm font-medium backdrop-blur-sm">
          <svg className="h-5 w-5 text-green-400" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
          </svg>
          <span>Licensed & Insured • 15+ Years Experience</span>
        </div>

        {/* Main headline - more specific and benefit-driven */}
        <h1 className="mb-6 text-5xl font-bold leading-tight md:text-6xl lg:text-7xl">
          Professional Air Conditioning
          <span className="block text-blue-300">Installation & Repair</span>
        </h1>

        {/* Clearer value props */}
        <p className="mx-auto mb-4 max-w-2xl text-xl leading-relaxed md:text-2xl">
          Expert commercial & industrial AC services across Cape Town
        </p>
        
        <div className="mb-10 flex flex-wrap items-center justify-center gap-4 text-base md:text-lg">
          <div className="flex items-center gap-2">
            <svg className="h-5 w-5 text-green-400" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
            </svg>
            <span>Same-Day Service Available</span>
          </div>
          <div className="flex items-center gap-2">
            <svg className="h-5 w-5 text-green-400" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
            </svg>
            <span>12-Month Service Guarantee</span>
          </div>
          <div className="flex items-center gap-2">
            <svg className="h-5 w-5 text-green-400" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
            </svg>
            <span>Free Consultation</span>
          </div>
        </div>

        {/* CTA buttons - more prominent */}
        <div className="flex flex-wrap items-center justify-center gap-4">
          <ButtonSolid href="https://wa.me/1234567890" label="Get Free Quote" />
          <ButtonOutline href="#services" label="Our Services" />
        </div>

        {/* Social proof */}
        <div className="mt-12 flex flex-wrap items-center justify-center gap-8 text-sm opacity-90">
          <div className="text-center">
            <div className="text-3xl font-bold">500+</div>
            <div>Projects Completed</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold">4.9★</div>
            <div>Average Rating</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold">24/7</div>
            <div>Emergency Service</div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 z-10 -translate-x-1/2 animate-bounce">
        <svg className="h-6 w-6 text-white/70" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>
    </section>
  );
};

export default Hero;