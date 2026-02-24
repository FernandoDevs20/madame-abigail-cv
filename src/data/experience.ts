export interface ExperienceEntry {
	period: string;
	role: string;
	description: string;
	highlight?: boolean;
}

export const experienceContent = {
	title: "Recorrido Profesional",
	entries: [
		{
			period: "2023 - ACTUALIDAD",
			role: "Language Consultant & Freelance Educator",
			description:
				"Diseno de curriculos personalizados para perfiles de alto rendimiento. Especialista en la creacion de recursos digitales de lujo para el autoaprendizaje.",
			highlight: true
		},
		{
			period: "2022 - 2023",
			role: "Assistant d Education Primaria",
			description:
				"Inmersion linguistica temprana. Desarrollo de materiales ludicos que elevan el estandar de la ensenanza publica."
		},
		{
			period: "2021 - 2022",
			role: "Modern Languages Resident",
			description:
				"Soporte estrategico en academias de lenguas, enfocada en la preparacion de grupos B2-C1."
		}
	] satisfies ExperienceEntry[]
} as const;
