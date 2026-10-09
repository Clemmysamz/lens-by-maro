export type NavItem = {
  label: string;
  href: string;
};

export type Service = {
  slug: string;
  title: string;
  description: string;
  price: string;
  duration: string;
  image: string;
};

export type PortfolioProject = {
  slug: string;
  title: string;
  category: string;
  location: string;
  year: string;
  image: string;
  description: string;
  featured?: boolean;
};

export type Testimonial = {
  name: string;
  event: string;
  quote: string;
  rating: number;
};

export type Partner = {
  name: string;
  category: string;
  description: string;
  logo: string;
};

export type JournalPost = {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  date: string;
  image: string;
};

export type FAQItem = {
  question: string;
  answer: string;
  category: string;
};

export const navigation: NavItem[] = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Portfolio", href: "/portfolio" },
  { label: "Journal", href: "/journal" },
  { label: "Testimonials", href: "/testimonials" },
  { label: "Contact", href: "/contact" },
];

export const founderProfile = {
  name: "Maro",
  bio: "LensByMaro is a premium photography and filmmaking studio dedicated to telling honest, emotionally rich stories through cinematic visuals.",
  title: "Founder & Creative Director",
  image:
    "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=900&q=80",
};

export const services: Service[] = [
  {
    slug: "wedding-photography",
    title: "Wedding Photography",
    description: "Artful coverage of your ceremony, portraits, and the intimate details that make your story unique.",
    price: "From ₦280,000",
    duration: "8 hours",
    image:
      "https://images.unsplash.com/photo-1520854221256-17451cc331bf?auto=format&fit=crop&w=900&q=80",
  },
  {
    slug: "wedding-videography",
    title: "Wedding Videography",
    description: "Cinematic films that preserve movement, sound, and the atmosphere of your celebration.",
    price: "From ₦360,000",
    duration: "8-12 hours",
    image:
      "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=900&q=80",
  },
  {
    slug: "corporate-events",
    title: "Corporate Events",
    description: "Confident coverage for launches, conferences, team experiences, and brand activations.",
    price: "From ₦180,000",
    duration: "6 hours",
    image:
      "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&w=900&q=80",
  },
  {
    slug: "portraits",
    title: "Portraits & Branding",
    description: "Clean, elevated imagery for personal brands, founders, creatives, and family milestones.",
    price: "From ₦120,000",
    duration: "2-3 hours",
    image:
      "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=900&q=80",
  },
];

export const portfolioProjects: PortfolioProject[] = [
  {
    slug: "lagos-sunset-wedding",
    title: "Lagos Sunset Wedding",
    category: "Weddings",
    location: "Lagos",
    year: "2025",
    image:
      "https://images.unsplash.com/photo-1520854221256-17451cc331bf?auto=format&fit=crop&w=900&q=80",
    description: "An intimate ceremony with editorial portraits, emotional ceremony coverage, and a cinematic recap.",
    featured: true,
  },
  {
    slug: "abuja-brand-story",
    title: "Abuja Brand Story",
    category: "Commercial",
    location: "Abuja",
    year: "2025",
    image:
      "https://images.unsplash.com/photo-1556740749-887f6717d7e4?auto=format&fit=crop&w=900&q=80",
    description: "A founder-led brand campaign designed around atmosphere, confidence, and authenticity.",
  },
  {
    slug: "benin-community-celebration",
    title: "Benin Community Celebration",
    category: "Traditional ceremonies",
    location: "Benin City",
    year: "2024",
    image:
      "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?auto=format&fit=crop&w=900&q=80",
    description: "A vibrant multi-day story with cultural reverence, movement, and joy at every turn.",
  },
  {
    slug: "creative-film-pilot",
    title: "Creative Film Pilot",
    category: "Films and videography",
    location: "Port Harcourt",
    year: "2025",
    image:
      "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&w=900&q=80",
    description: "A cinematic commercial short focusing on texture, rhythm, and rich storytelling.",
  },
  {
    slug: "family-portrait-session",
    title: "Family Portrait Session",
    category: "Portraits",
    location: "Ibadan",
    year: "2024",
    image:
      "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=900&q=80",
    description: "A relaxed portrait session focused on emotional connection and natural light.",
  },
  {
    slug: "fashion-editorial-elegance",
    title: "Fashion Editorial Elegance",
    category: "Fashion",
    location: "Lagos",
    year: "2025",
    image:
      "https://images.unsplash.com/photo-1529139574466-a303027c1d8b?auto=format&fit=crop&w=900&q=80",
    description: "A styled editorial blending movement, detail, and visual precision.",
  },
];

export const testimonials: Testimonial[] = [
  {
    name: "Chiamaka & Tunde",
    event: "Wedding film",
    quote:
      "From the first enquiry to final delivery, everything felt thoughtful and beautifully organised. We felt truly seen.",
    rating: 5,
  },
  {
    name: "Nosa Eze",
    event: "Corporate event coverage",
    quote:
      "The team translated our event atmosphere into striking visuals that our brand still uses months later.",
    rating: 5,
  },
  {
    name: "Aisha Bello",
    event: "Brand portraits",
    quote:
      "Professional, creative, and calm. The final images were exactly the tone we wanted for our business.",
    rating: 5,
  },
];

export const partners: Partner[] = [
  { name: "The Venue Atelier", category: "Venue Partner", description: "Luxury event venue network in Lagos and Abuja.", logo: "https://placehold.co/240x120/171717/F7F5F0?text=Venue+Atelier" },
  { name: "Nebu Works", category: "Creative Partner", description: "Event styling and visual direction for brand experiences.", logo: "https://placehold.co/240x120/171717/F7F5F0?text=Nebu+Works" },
  { name: "Aso Oke Collective", category: "Cultural Collaborator", description: "Cultural storytelling and wedding styling support.", logo: "https://placehold.co/240x120/171717/F7F5F0?text=Aso+Oke" },
];

export const journalPosts: JournalPost[] = [
  {
    slug: "how-to-prepare-for-a-premium-wedding-shoot",
    title: "How to prepare for a premium wedding shoot",
    excerpt: "A gentle guide to planning your wardrobe, timeline, and emotional comfort before the cameras arrive.",
    category: "Wedding planning",
    date: "May 12, 2025",
    image:
      "https://images.unsplash.com/photo-1520854221256-17451cc331bf?auto=format&fit=crop&w=900&q=80",
  },
  {
    slug: "behind-the-scenes-event-filmmaking",
    title: "Behind-the-scenes of event filmmaking",
    excerpt: "What it really takes to capture a celebration in a way that feels natural, cinematic, and honest.",
    category: "Behind the scenes",
    date: "April 3, 2025",
    image:
      "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=900&q=80",
  },
  {
    slug: "nigeria-location-tips-for-creative-brands",
    title: "Location ideas for creative brand shoots in Nigeria",
    excerpt: "From textured urban streets to timeless interiors, here are inspiring places for visual storytelling.",
    category: "Brand stories",
    date: "March 10, 2025",
    image:
      "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=900&q=80",
  },
];

export const faqItems: FAQItem[] = [
  {
    question: "How far in advance should I book?",
    answer: "We recommend booking as early as possible, especially for weddings and busy seasons. Most clients reserve their date 3-12 months in advance.",
    category: "Bookings",
  },
  {
    question: "Do you travel across Nigeria?",
    answer: "Yes. LensByMaro covers events across Nigeria, including Lagos, Abuja, Benin City, Port Harcourt, Ibadan, Enugu, Asaba, and more.",
    category: "Travel",
  },
  {
    question: "What is included in the final delivery?",
    answer: "Every package includes the agreed deliverables listed in the quote, including edited images or films, final export formats, and delivery timelines.",
    category: "Deliverables",
  },
];

export const homeStats = [
  { value: "150+", label: "Events covered" },
  { value: "8+", label: "Years of experience" },
  { value: "24h", label: "Average enquiry response" },
];
