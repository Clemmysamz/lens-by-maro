import Link from "next/link";
import { faqItems, homeStats, journalPosts, partners, portfolioProjects, services, testimonials } from "@/src/lib/site-data";

export default function HomePage() {
  return (
    <>
      <section className="bg-[#F7F5F0] px-4 pb-20 pt-12 md:pt-20">
        <div className="section-shell grid items-center gap-10 lg:grid-cols-[1.1fr_0.9fr]">
          <div>
            <p className="text-xs font-medium uppercase tracking-[0.24em] text-[#77736D]">Nigeria-wide photography & videography</p>
            <h1 className="mt-5 max-w-xl text-5xl leading-none text-[#171717] md:text-7xl">
              We Capture Moments. We Tell Stories.
            </h1>
            <p className="mt-6 max-w-lg text-lg text-[#4D4A46]">
              LensByMaro crafts premium photography and cinematic films for weddings, events, brands, and milestones across Nigeria.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <Link href="/book" className="gold-button">Book Your Event</Link>
              <Link href="/portfolio" className="ghost-button">Explore Our Work</Link>
            </div>
            <div className="mt-10 flex items-center gap-8 text-sm text-[#77736D]">
              <div>
                <div className="text-xl font-semibold text-[#171717]">150+</div>
                <div>Sessions complete</div>
              </div>
              <div>
                <div className="text-xl font-semibold text-[#171717]">8+</div>
                <div>Years of craft</div>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="overflow-hidden rounded-[34px] border border-[#E5DED3] bg-white p-3 shadow-[0_30px_70px_rgba(23,23,23,0.1)]">
              <img
                src="https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=1200&q=80"
                alt="Cinematic wedding photography scene"
                className="h-[600px] w-full rounded-[28px] object-cover"
              />
            </div>
            <div className="absolute -bottom-8 left-6 rounded-2xl border border-[#E5DED3] bg-[#F7F5F0]/95 p-4 shadow-[0_20px_50px_rgba(23,23,23,0.08)] backdrop-blur-sm">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#171717] text-[#F7F5F0]">
                  <svg viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5"><path d="M8 6.5v11l9-5.5-9-5.5Z" /></svg>
                </div>
                <div>
                  <div className="text-xs uppercase tracking-[0.18em] text-[#77736D]">Featured film</div>
                  <div className="font-medium text-[#171717]">Lagos wedding story</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#171717] py-16 text-[#F7F5F0] md:py-20">
        <div className="section-shell">
          <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <div className="max-w-2xl">
              <p className="text-xs uppercase tracking-[0.22em] text-[#D2B884]">Moving images</p>
              <h2 className="mt-4 text-4xl font-serif md:text-5xl">Feel the moments as they happened.</h2>
              <p className="mt-4 max-w-xl text-base text-[#D9D2C8]">
                The glances, the laughter, the joyful chaos. Our films bring you back to the feeling of being there.
              </p>
            </div>
            <Link href="/services/wedding-videography" className="ghost-button w-fit border-[#3A3937] text-[#F7F5F0] hover:border-[#B69A68] hover:text-[#F7F5F0]">
              Explore videography
            </Link>
          </div>

          <video
            className="mt-10 aspect-video max-h-[600px] w-full bg-[#2A2927] object-cover"
            width="1920"
            height="1080"
            autoPlay
            muted
            loop
            playsInline
            controls
            preload="metadata"
            poster="https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=1920&q=80"
          >
            <source src="https://videos.pexels.com/video-files/3195394/3195394-hd_1920_1080_25fps.mp4" type="video/mp4" />
            Your browser does not support HTML video.
          </video>
        </div>
      </section>

      <section className="py-20">
        <div className="section-shell">
          <div className="mb-10 flex items-end justify-between gap-4">
            <div>
              <p className="text-xs uppercase tracking-[0.22em] text-[#77736D]">Featured work</p>
              <h2 className="mt-4 text-4xl font-serif text-[#171717] md:text-5xl">A collection of carefully framed stories.</h2>
            </div>
            <Link href="/portfolio" className="hidden text-sm font-medium text-[#171717] md:inline-flex">View all projects →</Link>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {portfolioProjects.slice(0, 3).map((project) => (
              <article key={project.slug} className="card-shell group">
                <div className="relative overflow-hidden">
                  <img src={project.image} alt={project.title} className="h-96 w-full object-cover transition duration-500 group-hover:scale-105" />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#171717]/70 via-transparent to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-5 text-white">
                    <p className="text-xs uppercase tracking-[0.2em] text-[#E8DCC5]">{project.category}</p>
                    <h3 className="mt-2 text-2xl font-serif">{project.title}</h3>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#171717] py-20 text-[#F7F5F0]">
        <div className="section-shell grid gap-10 lg:grid-cols-[0.8fr_1.2fr]">
          <div>
            <p className="text-xs uppercase tracking-[0.22em] text-[#D2B884]">Our philosophy</p>
            <h2 className="mt-4 text-4xl font-serif md:text-5xl">Real moments deserve honest, beautiful storytelling.</h2>
          </div>
          <div className="grid gap-6 md:grid-cols-2">
            <div className="rounded-[24px] border border-[#2A2927] bg-[#1D1D1C] p-6">
              <h3 className="text-2xl font-serif">Creative direction</h3>
              <p className="mt-3 text-sm text-[#D9D2C8]">We shape images and moving frames that feel both cinematic and deeply personal.</p>
            </div>
            <div className="rounded-[24px] border border-[#2A2927] bg-[#1D1D1C] p-6">
              <h3 className="text-2xl font-serif">Visual storytelling</h3>
              <p className="mt-3 text-sm text-[#D9D2C8]">Every frame is composed to preserve atmosphere, emotion, and the essence of the occasion.</p>
            </div>
            <div className="rounded-[24px] border border-[#2A2927] bg-[#1D1D1C] p-6">
              <h3 className="text-2xl font-serif">Authentic detail</h3>
              <p className="mt-3 text-sm text-[#D9D2C8]">We document the quiet gestures and layered moments that make a story unforgettable.</p>
            </div>
            <div className="rounded-[24px] border border-[#2A2927] bg-[#1D1D1C] p-6">
              <h3 className="text-2xl font-serif">Professional delivery</h3>
              <p className="mt-3 text-sm text-[#D9D2C8]">Consistent communication, premium curation, and thoughtful editing from concept to final delivery.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="section-shell">
          <div className="mb-10 text-center">
            <p className="text-xs uppercase tracking-[0.22em] text-[#77736D]">Services</p>
            <h2 className="mt-4 text-4xl font-serif text-[#171717] md:text-5xl">Thoughtful coverage for every meaningful event.</h2>
          </div>
          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {services.map((service) => (
              <article key={service.slug} className="card-shell overflow-hidden">
                <img src={service.image} alt={service.title} className="h-64 w-full object-cover" />
                <div className="p-6">
                  <p className="text-xs uppercase tracking-[0.2em] text-[#77736D]">{service.duration}</p>
                  <h3 className="mt-3 text-2xl font-serif text-[#171717]">{service.title}</h3>
                  <p className="mt-3 text-sm text-[#4D4A46]">{service.description}</p>
                  <div className="mt-5 flex items-center justify-between">
                    <span className="text-lg font-semibold text-[#171717]">{service.price}</span>
                    <Link href={`/services/${service.slug}`} className="text-sm font-medium text-[#171717]">Learn more →</Link>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#F0EAE2] py-20">
        <div className="section-shell">
          <div className="grid gap-8 md:grid-cols-3">
            {homeStats.map((stat) => (
              <div key={stat.label} className="rounded-[26px] border border-[#E5DED3] bg-[#F7F5F0] p-8 text-center">
                <div className="text-4xl font-serif text-[#171717]">{stat.value}</div>
                <p className="mt-2 text-[#4D4A46]">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="section-shell">
          <div className="mb-10 max-w-2xl">
            <p className="text-xs uppercase tracking-[0.22em] text-[#77736D]">Testimonials</p>
            <h2 className="mt-4 text-4xl font-serif text-[#171717] md:text-5xl">Clients remember how we made them feel.</h2>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {testimonials.map((item) => (
              <article key={item.name} className="card-shell p-6">
                <div className="mb-5 flex items-center gap-1 text-[#B69A68]">
                  {Array.from({ length: item.rating }).map((_, index) => (
                    <svg key={index} viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4"><path d="m12 2.8 2.5 5.1 5.6.8-4 3.9 1 5.5L12 0v2.8Zm-6 0 2.5 5.1 5.6.8-4 3.9 1 5.5L6 0v2.8Z" /></svg>
                  ))}
                </div>
                <svg viewBox="0 0 24 24" fill="currentColor" className="h-8 w-8 text-[#B69A68]"><path d="M10 7c-2.2 0-4 1.8-4 4v6h4v-5h2v5h4v-6c0-2.2-1.8-4-4-4h-2Zm8 0c-2.2 0-4 1.8-4 4v6h4v-5h2v5h4v-6c0-2.2-1.8-4-4-4h-2Z" /></svg>
                <p className="mt-4 text-base text-[#4D4A46]">“{item.quote}”</p>
                <div className="mt-6 border-t border-[#EEE5DB] pt-4">
                  <div className="font-medium text-[#171717]">{item.name}</div>
                  <div className="text-sm text-[#77736D]">{item.event}</div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#F3EFE8] py-20">
        <div className="section-shell">
          <div className="mb-10 text-center">
            <p className="text-xs uppercase tracking-[0.22em] text-[#77736D]">Trusted partners</p>
            <h2 className="mt-4 text-4xl font-serif text-[#171717] md:text-5xl">Creative collaborators and event partners.</h2>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {partners.map((partner) => (
              <div key={partner.name} className="rounded-[26px] border border-[#E5DED3] bg-white p-6 text-center">
                <img src={partner.logo} alt={partner.name} className="mx-auto h-16 w-auto rounded-xl object-contain" />
                <h3 className="mt-4 text-xl font-semibold text-[#171717]">{partner.name}</h3>
                <p className="mt-2 text-sm text-[#77736D]">{partner.category}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="section-shell">
          <div className="mb-10 text-center">
            <p className="text-xs uppercase tracking-[0.22em] text-[#77736D]">Journal</p>
            <h2 className="mt-4 text-4xl font-serif text-[#171717] md:text-5xl">Stories, inspiration, and behind-the-scenes notes.</h2>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {journalPosts.map((post) => (
              <article key={post.slug} className="card-shell overflow-hidden">
                <img src={post.image} alt={post.title} className="h-64 w-full object-cover" />
                <div className="p-6">
                  <p className="text-xs uppercase tracking-[0.18em] text-[#77736D]">{post.category}</p>
                  <h3 className="mt-2 text-2xl font-serif text-[#171717]">{post.title}</h3>
                  <p className="mt-3 text-sm text-[#4D4A46]">{post.excerpt}</p>
                  <div className="mt-4 text-sm text-[#171717]">{post.date}</div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="pb-20">
        <div className="section-shell">
          <div className="rounded-[32px] bg-[#171717] px-6 py-14 text-[#F7F5F0] md:px-10">
            <div className="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-center">
              <div>
                <p className="text-xs uppercase tracking-[0.22em] text-[#D2B884]">Ready to plan your story?</p>
                <h2 className="mt-4 text-4xl font-serif md:text-6xl">Let’s build something unforgettable.</h2>
              </div>
              <div className="flex flex-wrap gap-4">
                <Link href="/book" className="gold-button bg-[#B69A68] text-[#171717] hover:bg-[#d3ba8d]">Book a Session</Link>
                <Link href="/contact" className="ghost-button border-[#3A3937] text-[#F7F5F0] hover:border-[#B69A68] hover:text-[#F7F5F0]">Ask a question</Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="pb-20">
        <div className="section-shell">
          <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
            {faqItems.map((item) => (
              <div key={item.question} className="rounded-[24px] border border-[#E5DED3] bg-white p-6">
                <p className="text-xs uppercase tracking-[0.22em] text-[#77736D]">{item.category}</p>
                <h3 className="mt-3 text-xl font-serif text-[#171717]">{item.question}</h3>
                <p className="mt-3 text-sm text-[#4D4A46]">{item.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
