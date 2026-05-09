"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import ReactLenis from "lenis/react";
import ContactSplitForm from '@/components/sections/contact/ContactSplitForm';
import FaqSplitMedia from '@/components/sections/faq/FaqSplitMedia';
import FeatureHoverPattern from '@/components/sections/feature/featureHoverPattern/FeatureHoverPattern';
import FooterLogoReveal from '@/components/sections/footer/FooterLogoReveal';
import HeroLogo from '@/components/sections/hero/HeroLogo';
import MediaAbout from '@/components/sections/about/MediaAbout';
import MetricCardTwo from '@/components/sections/metrics/MetricCardTwo';
import NavbarLayoutFloatingOverlay from '@/components/navbar/NavbarLayoutFloatingOverlay/NavbarLayoutFloatingOverlay';
import TestimonialCardSixteen from '@/components/sections/testimonial/TestimonialCardSixteen';
import { Code, Palette, Rocket } from "lucide-react";

export default function LandingPage() {
  return (
    <ThemeProvider
        defaultButtonVariant="directional-hover"
        defaultTextAnimation="entrance-slide"
        borderRadius="rounded"
        contentWidth="mediumSmall"
        sizing="large"
        background="none"
        cardStyle="gradient-radial"
        primaryButtonStyle="double-inset"
        secondaryButtonStyle="layered"
        headingFontWeight="bold"
    >
      <ReactLenis root>
  <div id="nav" data-section="nav">
      <NavbarLayoutFloatingOverlay
      navItems={[
        {
          name: "About",          id: "about"},
        {
          name: "Projects",          id: "projects"},
        {
          name: "Contact",          id: "contact"},
      ]}
      brandName="Shuvo ZiaN"
    />
  </div>

  <div id="hero" data-section="hero" style={{ backgroundImage: "url('https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3DTj4X7M8sj3Q8UP6QsbJBOWvOB/uploaded-1778317307122-i0bk2t4o.jpg')", backgroundSize: 'cover', backgroundPosition: 'center' }}>
      <HeroLogo
      logoText="Shuvo ZiaN"
      description="I transform complex business requirements into high-performance digital products that scale revenue and enhance user engagement."
      buttons={[
        {
          text: "Get in touch",          href: "#contact"},
      ]}
      buttonAnimation="slide-up"
      imageSrc="https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3DTj4X7M8sj3Q8UP6QsbJBOWvOB/uploaded-1778317503429-8ktycvpt.jpg"
    />
  </div>

  <div id="about" data-section="about">
      <MediaAbout
      useInvertedBackground={false}
      title="About Me"
      description="I'm a passionate creative professional with a deep focus on crafting intuitive digital experiences that combine aesthetics with high-performance functionality."
      imageSrc="https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3DTj4X7M8sj3Q8UP6QsbJBOWvOB/uploaded-1778317654184-jgu9kwq6.jpg"
    />
  </div>

  <div id="features" data-section="features">
      <FeatureHoverPattern
      animationType="slide-up"
      textboxLayout="split"
      useInvertedBackground={false}
      features={[
        {
          title: "Web Development",          description: "High-performance websites built on modern stacks.",          icon: Code,
        },
        {
          title: "UI/UX Design",          description: "User-centric design systems for seamless engagement.",          icon: Palette,
        },
        {
          title: "Digital Strategy",          description: "Data-driven roadmaps to maximize your market reach.",          icon: Rocket,
        },
      ]}
      title="Core Services"
      description="Comprehensive digital services designed to scale your vision."
    />
  </div>

  <div id="testimonials" data-section="testimonials">
      <TestimonialCardSixteen
      animationType="slide-up"
      textboxLayout="split"
      useInvertedBackground={false}
      testimonials={[
        {
          id: "1",          name: "Sarah J.",          role: "Project Manager",          company: "Tech Innovate",          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/casual-smile-street-style-background-spring_1139-777.jpg"},
        {
          id: "2",          name: "Mark D.",          role: "Creative Lead",          company: "Design Studio",          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/coffee-time-me-please_329181-17310.jpg"},
        {
          id: "3",          name: "Linda W.",          role: "Founder",          company: "Startup Hub",          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/happy-successful-business-team-taking-selfie-outside_74855-2930.jpg"},
        {
          id: "4",          name: "David M.",          role: "Marketing Dir",          company: "Growth Agency",          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/woman-wearing-pajamas-while-sitting-bed_273609-13213.jpg"},
        {
          id: "5",          name: "Elena R.",          role: "Engineer",          company: "Web Solutions",          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/portrait-smiley-business-man_23-2148514859.jpg"},
      ]}
      kpiItems={[
        {
          value: "50+",          label: "Projects Completed"},
        {
          value: "100%",          label: "Client Satisfaction"},
        {
          value: "5+",          label: "Years Experience"},
      ]}
      title="Trusted by Peers"
      description="Hear what collaborators and partners have to say."
    />
  </div>

  <div id="metrics" data-section="metrics">
      <MetricCardTwo
      animationType="slide-up"
      textboxLayout="split"
      gridVariant="bento-grid"
      useInvertedBackground={false}
      metrics={[
        {
          id: "m1",          value: "1.2M",          description: "Users Impacted"},
        {
          id: "m2",          value: "99.9%",          description: "Uptime Record"},
        {
          id: "m3",          value: "200+",          description: "Deployed Features"},
      ]}
      title="Key Accomplishments"
      description="Quantifiable results driving success."
    />
  </div>

  <div id="faq" data-section="faq">
      <FaqSplitMedia
      textboxLayout="split"
      useInvertedBackground={false}
      faqs={[
        {
          id: "f1",          title: "What is your typical project timeline?",          content: "Timelines vary depending on project complexity."},
        {
          id: "f2",          title: "Do you offer ongoing support?",          content: "Yes, I offer monthly maintenance packages."},
        {
          id: "f3",          title: "How can we start a project?",          content: "Fill out the contact form and I'll get back to you."},
      ]}
      mediaAnimation="slide-up"
      title="Frequently Asked Questions"
      description="Common questions regarding my workflow and services."
      faqsAnimation="slide-up"
      imageSrc="https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3DTj4X7M8sj3Q8UP6QsbJBOWvOB/uploaded-1778316626205-bad99016.jpg"
    />
  </div>

  <div id="contact" data-section="contact">
      <ContactSplitForm
      useInvertedBackground={false}
      title="Let's Collaborate"
      description="Send a message and start building something amazing together."
      inputs={[
        {
          name: "name",          type: "text",          placeholder: "Your Name"},
        {
          name: "email",          type: "email",          placeholder: "Your Email"},
      ]}
      imageSrc="http://img.b2bpic.net/free-photo/architectural-black-white-background_23-2150530907.jpg"
    />
  </div>

  <div id="footer" data-section="footer">
      <FooterLogoReveal
      logoText="Shuvo ZiaN"
      leftLink={{
        text: "Privacy Policy",        href: "#"}}
      rightLink={{
        text: "Terms of Service",        href: "#"}}
    />
  </div>
      </ReactLenis>
    </ThemeProvider>
  );
}