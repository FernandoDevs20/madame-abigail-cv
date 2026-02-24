export type LanguageTone = "muted" | "gold" | "primary";

export interface LanguageSkill {
	label: string;
	tone: LanguageTone;
}

export interface EducationItem {
	title: string;
	meta: string;
}

export const skillsContent = {
	title: "Aptitudes",
	expertiseLabel: "EXPERTICIA",
	expertise: ["Pedagogia critica", "Diseno editorial", "Gamificacion premium"],
	languagesLabel: "IDIOMAS",
	languages: [
		{ label: "Espanol Nativo", tone: "muted" },
		{ label: "Frances C1", tone: "gold" },
		{ label: "Ingles C1", tone: "primary" }
	] satisfies LanguageSkill[],
	educationTitle: "Formacion Academica",
	education: [
		{
			title: "Grado en Lenguas Modernas",
			meta: "U. COMPLUTENSE | 2019-2023"
		},
		{
			title: "Master en Formacion del Profesorado",
			meta: "EN CURSO | 2023-2024"
		},
		{
			title: "Certificacion TOEFL iBT Excellence",
			meta: "105 PTS | 2022"
		}
	] satisfies EducationItem[]
} as const;
