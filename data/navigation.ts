export type NavigationItem = { label: string; href: string; children?: {label:string;href:string;desc?:string;tag?:string}[] };
export const mainNav: NavigationItem[] = [{label:"Services",href:"/services"},{label:"Portfolio",href:"/portfolio"},{label:"About",href:"/about"},{label:"Contact",href:"/contact"}];
