export interface NavbarItem {
  label: string;
  link: string;
  icon?: string;
  children?: NavbarItem[];
}
