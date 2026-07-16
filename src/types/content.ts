export interface EducationEntry {
  degree: string;
  school: string;
  year: number | null;
}

export interface ServiceEntry {
  name: string;
  description: string;
}

export interface Testimonial {
  name: string;
  quote: string;
  date: string;
}

export interface CredentialImage {
  src: string;
  alt: string;
  label: string;
}

export interface SiteContent {
  doctor: {
    name: string;
    title: string;
    bio: string;
    education: EducationEntry[];
    experienceYears: number;
    cofeprisRegistration: string;
    cedulaProfesional: string;
    cedulaEspecialidad: string;
    certifications: string[];
    additionalProcedures: string;
    credentialImages: CredentialImage[];
  };
  services: ServiceEntry[];
  reviews: {
    source: string;
    sourceUrl: string;
    totalReviews: number;
    items: Testimonial[];
  };
  contact: {
    whatsappNumber: string;
    whatsappMessage: string;
    instagramUrl: string;
    facebookUrl: string;
  };
  location: {
    address: string;
    mapQuery: string;
    hours: string;
  };
}
