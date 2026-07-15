import type { SiteContent } from "@/types/content";

export const content: SiteContent = {
  doctor: {
    name: "Dra. Julieta Colín Garnica",
    title: "Gastroenteróloga · Alta Especialidad en Endoscopia Gastrointestinal",
    bio: "La historia de la Dra. Julieta Colín Garnica empieza en las aulas de la Universidad Westhill, incorporada a la UNAM, pero se termina de escribir en los pasillos de dos de los hospitales más exigentes del país. En el Hospital Regional \"Lic. Adolfo López Mateos\" del ISSSTE se especializó en gastroenterología; en el Hospital General de México \"Dr. Eduardo Liceaga\" cursó su alta especialidad en endoscopia gastrointestinal. Ahí, entre guardias largas y casos que no admiten margen de error, aprendió algo que ningún libro enseña: que detrás de cada síntoma digestivo hay una persona con miedo a lo que puede significar. Esa lección la trajo consigo a Ensenada, donde hoy se toma el tiempo de explicar cada estudio y cada procedimiento con calma, en un lenguaje que cualquiera pueda entender, antes de decidir juntos el siguiente paso. Sigue certificada por el Consejo Mexicano de Gastroenterología y es socia activa de la Asociación Mexicana de Endoscopia Gastrointestinal, porque para ella seguir aprendiendo es, simplemente, otra forma de cuidar bien a quien confía en ella.",
    education: [
      {
        degree: "Médica Cirujana",
        school: "Universidad Westhill, incorporada a la UNAM",
        year: 2014,
      },
      {
        degree: "Especialidad en Gastroenterología",
        school: "Hospital Regional \"Lic. Adolfo López Mateos\", ISSSTE, CDMX",
        year: null,
      },
      {
        degree: "Alta Especialidad en Endoscopia Gastrointestinal",
        school: "Hospital General de México \"Dr. Eduardo Liceaga\", CDMX",
        year: null,
      },
    ],
    experienceYears: 15,
    cofeprisRegistration: "2602035036X00150",
    cedulaProfesional: "10809403",
    cedulaEspecialidad: "15541935",
    certifications: [
      "Consejo Mexicano de Gastroenterología",
      "Asociación Mexicana de Endoscopia Gastrointestinal (socia activa)",
    ],
    additionalProcedures:
      "También realiza CPRE (colangiopancreatografía retrógrada endoscópica) diagnóstica y terapéutica, colocación de gastrostomías, sondas de alimentación y balones intragástricos para el manejo de sobrepeso y obesidad.",
    credentialImages: [
      {
        src: "/images/credenciales/diploma-medica-cirujana.png",
        alt: "Diploma de Médica Cirujana, Universidad Westhill incorporada a la UNAM",
        label: "Médica Cirujana — UNAM",
      },
      {
        src: "/images/credenciales/cert-especialidad-gastro-unam.jpg",
        alt: "Certificado de Especialista en Medicina (Gastroenterología), UNAM",
        label: "Especialista en Gastroenterología — UNAM",
      },
      {
        src: "/images/credenciales/cert-alta-especialidad-unam.jpg",
        alt: "Diploma de Alta Especialidad en Endoscopia Gastrointestinal, UNAM",
        label: "Alta Especialidad en Endoscopia — UNAM",
      },
      {
        src: "/images/credenciales/cert-hospital-general-mexico.jpg",
        alt: "Diploma de Alta Especialidad en Endoscopia Gastrointestinal, Hospital General de México",
        label: "Alta Especialidad — Hospital General de México",
      },
      {
        src: "/images/credenciales/cert-consejo-mexicano.jpg",
        alt: "Certificación del Consejo Mexicano de Gastroenterología",
        label: "Certificación — Consejo Mexicano de Gastroenterología",
      },
    ],
  },
  services: [
    {
      name: "Consulta de Gastroenterología",
      description:
        "Diagnóstico, tratamiento y seguimiento de enfermedades del aparato digestivo: dolor abdominal, colitis, reflujo, síndrome de intestino irritable o cualquier molestia que no termina de resolverse. Empieza por escuchar, no por recetar.",
    },
    {
      name: "Endoscopía y Panendoscopia",
      description:
        "Revisa el esófago, el estómago y la primera parte del intestino delgado con una cámara flexible.",
    },
    {
      name: "Colonoscopía",
      description:
        "Examina el colon completo para detectar pólipos, inflamación o sangrado a tiempo. Es el estudio de referencia para la prevención de cáncer de colon, sobre todo después de los 45 años.",
    },
    {
      name: "CPRE",
      description:
        "Colangiopancreatografía retrógrada endoscópica, diagnóstica y terapéutica. Se usa para revisar y tratar problemas en las vías biliares y el páncreas sin necesidad de cirugía abierta.",
    },
    {
      name: "Cápsula Endoscópica",
      description:
        "Una cápsula del tamaño de una pastilla con cámara integrada que recorre el intestino delgado, útil cuando la endoscopia o colonoscopía tradicional no alcanzan a ver la zona afectada.",
    },
    {
      name: "Balón Intragástrico",
      description:
        "Un balón de silicona que se coloca en el estómago por endoscopía, sin cirugía, para ayudar en el manejo de sobrepeso y obesidad al generar una sensación de saciedad temprana.",
    },
    {
      name: "Gastrostomías",
      description:
        "Colocación de una sonda de alimentación directamente en el estómago a través de una pequeña abertura en el abdomen, guiada por endoscopía. Está pensada para quienes no pueden alimentarse por la boca de forma segura — por dificultad para tragar o tras ciertas cirugías — y permite recibir nutrición, líquidos y medicamentos sin pasar por la garganta ni el esófago.",
    },
  ],
  reviews: {
    source: "Doctoralia",
    sourceUrl: "https://www.doctoralia.com.mx/julieta-colin-garnica/gastroenterologo/ensenada",
    totalReviews: 62,
    items: [
      {
        name: "Montserrat",
        quote: "Muy atenta y dedicada, la doctora! Calidad humana, profesionalismo!",
        date: "julio 2026",
      },
      {
        name: "Paola Vera",
        quote: "Muy buena, me gustó mucho, genera confianza, recomendada al 100.",
        date: "julio 2026",
      },
      {
        name: "Alfonso Aguirre Muñoz",
        quote: "La doctora Colín Garnica es muy capaz, inteligente... muy preparada y clara.",
        date: "julio 2026",
      },
      {
        name: "José R.",
        quote: "Excelente atención, una persona muy humana y profesional.",
        date: "junio 2026",
      },
      {
        name: "Martha L.",
        quote: "Excelente atención, explicó todo a detalle, escuchó todos mis síntomas.",
        date: "junio 2026",
      },
      {
        name: "Julia Medina Gaos",
        quote: "Excelente trato, muy empática y amable. Explica todo con detalle.",
        date: "junio 2026",
      },
      {
        name: "Herminia Chaires",
        quote: "Super dedicada, explicó a detalle y respondió todas nuestras dudas.",
        date: "junio 2026",
      },
      {
        name: "Ricardo Cobián",
        quote: "Excelente atención a los pacientes, explica de manera detallada.",
        date: "junio 2026",
      },
      {
        name: "José Luis",
        quote: "Muy buena atención, en el procedimiento me sentí muy cómodo.",
        date: "junio 2026",
      },
      {
        name: "Marcela",
        quote: "Me encantó cómo nos explicó el tratamiento... es muy linda persona.",
        date: "junio 2026",
      },
    ],
  },
  contact: {
    whatsappNumber: "522211726761",
    whatsappMessage: "Hola, quiero agendar una consulta de gastroenterología",
  },
  location: {
    address: "Av. Delante 1000, Costa Azul, 22890 Ensenada, B.C.",
    mapQuery: "Av. Delante 1000, Costa Azul, 22890 Ensenada, B.C.",
    hours: "8:00 a.m. – 9:00 p.m. Verifica disponibilidad por WhatsApp antes de tu visita.",
  },
};
