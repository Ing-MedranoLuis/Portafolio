import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import ScrollReveal from "@/components/ScrollReveal";
import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";
import { Mailmme } from "@/components/Mailme";
import { UsePost } from "@/hooks/UsePost";
import { MailmeCarousel } from "@/components/MailmeCarousel";
import { HorizontalCarousel } from "@/components/HoritzontalCarousel";
import { useData } from "@/hooks/useData";

const Index = () => {
  const { onSubmit, user, handleUser, allUser } = UsePost();
  const { images,projectsTitles,skills,gitHubLinks,viewLinks,socialMedias,detailsProjects} = useData();
  return (
    <>
   <Helmet>
        <title>Portfolio | Luis Medrano</title>
        <meta
          name="description"
          content="I design and build beautiful websites and applications that combine stunning aesthetics with seamless functionality."
        />
      </Helmet>


      <div className="min-h-screen bg-background font-poppins">
        <Navbar />
        <main>
          <Hero />

          {/* About Section */}
          <section id="about" className="min-h-screen flex items-center justify-center px-6 py-24">
            <div className="container max-w-4xl text-center">
              <ScrollReveal>
                <p className="text-primary font-Roboto text-sm uppercase tracking-[0.3em] mb-4">
                  About Me
                </p>
              </ScrollReveal>
              <ScrollReveal delay={0.1}>
                <h2 className="font-body text-xs md:text-5xl lg:text-6xl font-medium mb-8">
                  Passionate about creating{" "}
                  <span className="text-gradient">meaningful</span> experiences
                </h2>
              </ScrollReveal>
              <ScrollReveal delay={0.2}>
                <p className=" text-muted-foreground text-xs md:text-xl leading-relaxed max-w-2xl mx-auto">
                  A passionate developer and designer focused on creating impactful digital experiences.
                  With expertise in modern web technologies, I bring ideas to life through clean code
                  and stunning visuals.
                </p>
              </ScrollReveal>
              
              {/* Skills */}
              <div className="    mt-16">
               
                 
                      <HorizontalCarousel arr={skills}/>
                  
               
              </div>
            </div>
          </section>

          {/* Work Section */}
          <section id="work" className="min-h-screen flex items-center justify-center px-6 py-24 bg-card">
            <div className="container max-w-6xl">
              <div className="text-center mb-16">
                <ScrollReveal>
                  <p className="text-primary text-sm uppercase tracking-[0.3em] mb-4">
                    My Work
                  </p>
                </ScrollReveal>
                <ScrollReveal delay={0.1}>
                  <h2 className="font-display font-body text-xs md:text-5xl lg:text-6xl font-medium">
                    Selected <span className="text-gradient font-body">Projects</span>
                  </h2>
                </ScrollReveal>
              </div>
              
              {/* Project Grid */}
              <div className="grid md:grid-cols-2 gap-8">
                {images.map((project, index) => (
                  <ScrollReveal
                    key={index}
                    delay={0.2 + index * 0.1}
                    direction={index % 2 === 0 ? "left" : "right"}
                  >
                    <motion.div 
                      whileHover={{ y: -10 }}
                      transition={{ duration: 0.3 }}
                      className=" group relative overflow-hidden rounded-2xl bg-background border border-border hover:border-primary/50 transition-all duration-500"
                    >
                      <div className="  bg-muted flex items-center justify-center">
                        <img src={`${project}`} alt="" />
                      </div>
                      <div className="p-6">
                        <h3 className="font-body font-display md:text-xl text-xs font-medium mb-2 group-hover:text-primary transition-colors duration-300">
                           {projectsTitles[index]}
                        </h3>
                        <p className="text-muted-foreground text-xs md:text-sm">
                          {detailsProjects[index]}
                        </p>
                        <div className="pt-10">
                          <a className="hover:bg-primary  hover:text-white border rounded mx-1 text-xs  px-1 py-2   md:px-2 md:py-3 text-white transition" href={`${viewLinks[index]}`}><i className="bi bi-eye px-1"></i>View</a>
                            <a className="hover:bg-primary hover:text-white border rounded mx-1 px-1 py-2 text-xs  md:px-2 md:py-3 text-white transition" href={`${gitHubLinks[index]}`}><i className="bi bi-github px-1"></i>Git hub</a>
                         
                          
                        </div>
                       
                      </div>
                        
                      <div>
                     
                      </div>
                      <motion.div
                        className="absolute inset-0 bg-gradient-to-t from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                      />
                    </motion.div>
                  </ScrollReveal>
                ))}
              </div>
            </div>
          </section>

          {/* Contact Section */}
          <section id="contact" className="min-h-screen flex items-center justify-center px-6 py-24">
            <div className="container max-w-4xl text-center">
              <ScrollReveal>
                <p className="text-primary text-sm uppercase tracking-[0.3em] mb-4">
                  Get in Touch
                </p>
              </ScrollReveal>
              <ScrollReveal delay={0.1}>
                <h2 className="font-display font-body text-xs md:text-5xl lg:text-6xl font-medium mb-8">
                  Let's create something{" "}
                  <span className="text-gradient">amazing</span> together
                </h2>
              </ScrollReveal>
              <ScrollReveal delay={0.2}>
                <p className="font-body text-muted-foreground text-xs md:text-xl leading-relaxed max-w-2xl mx-auto mb-12">
                  Have a project in mind? I'd love to hear about it. Drop me a message
                  and let's discuss how we can bring your vision to life.
                </p>
              </ScrollReveal>
              <ScrollReveal delay={0.3}>
                <motion.a
                  href="mailto:hello@example.com"
                  whileHover={{ scale: 1.05, y: -3 }}
                  whileTap={{ scale: 0.98 }}
                  className="font-body inline-flex px-5 py-3 md:px-10 md:py-5 bg-primary text-primary-foreground rounded-full text-xs md:text-lg font-medium transition-shadow duration-300 hover:shadow-xl hover:shadow-primary/30"
                >
                  Say Hello
                </motion.a>
              </ScrollReveal>
               <ScrollReveal delay={0.3}>
                <div className=" md:pt-20  mt-10 md:justify-center  md:flex-row flex flex-col items-center md:flex">
                  <div className="md:w-1/2 w-2/2 ">
                    <Mailmme onSubmit={onSubmit} handleUser={handleUser}user={user}/>
                  </div>
                  <div className="md:w-1/2 w-2/2 pt-10 md:pt-0 ">
                    <MailmeCarousel user={allUser}/>
                  </div>
               </div>
              </ScrollReveal>
              
              {/* Social Links */}
              <ScrollReveal delay={0.4}>
                <div className="flex items-center justify-center gap-8 mt-16">
                  {[ "LinkedIn", "GitHub", "Gmail"].map((social,index) => (
                    <motion.a
                      key={index}
                      href={`${socialMedias[index]}`}
                      whileHover={{ y: -3 }}
                      className="text-muted-foreground hover:text-foreground transition-colors duration-300 text-sm uppercase tracking-wider"
                    >
                      {social}
                    </motion.a>
                  ))}
                </div>
              </ScrollReveal>
            </div>
          </section>

          {/* Footer */}
          <footer className="py-8 border-t border-border">
            <div className="container text-center">
              <p className="text-muted-foreground text-sm">
                © 2025 Ing Luis Medrano. All rights reserved.
              </p>
            </div>
          </footer>
        </main>
      </div>
    </>
  );
};

export default Index;
