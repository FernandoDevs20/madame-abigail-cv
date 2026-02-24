export type ServiceTone = "gold" | "primary";

export interface ServiceItem {
	code: string;
	title: string;
	description: string;
	href: `#${string}`;
	tone: ServiceTone;
}

export const servicesContent = {
	eyebrow: "PORTAFOLIO DE SERVICIOS",
	title: "Propuestas Educativas",
	ctaLabel: "CONSULTAR",
	items: [
		{
			code: "FR",
			title: "L Art du Francais",
			description:
				"Desde niveles iniciales hasta la maestria del C1, con un enfoque en la elegancia del discurso.",
			href: "#contacto",
			tone: "gold"
		},
		{
			code: "EN",
			title: "English Mastery",
			description:
				"Ingles corporativo y academico disenado para profesionales que buscan proyectar seguridad.",
			href: "#contacto",
			tone: "primary"
		},
		{
			code: "CONV",
			title: "Eloquentia",
			description: "Sesiones de alta intensidad enfocadas en la oratoria y la fluidez espontanea.",
			href: "#contacto",
			tone: "gold"
		},
		{
			code: "CERT",
			title: "Certificaciones",
			description:
				"Estrategias de exito para Cambridge, TOEFL y DELF/DALF con materiales exclusivos.",
			href: "#contacto",
			tone: "primary"
		}
	] satisfies ServiceItem[]
} as const;
