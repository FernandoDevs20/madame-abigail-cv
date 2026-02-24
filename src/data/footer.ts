export interface FooterLink {
	label: string;
	href: string;
}

export const footerContent = {
	brand: "ABIGAIL VERGARA",
	links: [
		{ label: "LINKEDIN", href: "#" },
		{ label: "INSTAGRAM", href: "#" },
		{ label: "CURRICULUM", href: "#" }
	] satisfies FooterLink[],
	copyright: "© 2024 ABIGAIL VERGARA. ALL RIGHTS RESERVED.",
	signature: "MADE WITH ELEGANCE"
} as const;
