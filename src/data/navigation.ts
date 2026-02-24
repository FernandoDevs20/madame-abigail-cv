export interface NavItem {
	label: string;
	href: `#${string}`;
}

export const navigationItems: NavItem[] = [
	{ label: "INICIO", href: "#inicio" },
	{ label: "BIOGRAFIA", href: "#biografia" },
	{ label: "SERVICIOS", href: "#servicios" },
	{ label: "EXPERIENCIA", href: "#experiencia" },
	{ label: "HABILIDADES", href: "#habilidades" }
];

export const contactNavItem: NavItem = {
	label: "CONTACTO",
	href: "#contacto"
};
