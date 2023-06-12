export default interface Page {
  name: string;
  subpages: {
    name: string;
    description: string;
    href: string;
    icon: React.ForwardRefExoticComponent<
      Omit<React.SVGProps<SVGSVGElement>, "ref"> & {
        title?: string;
        titleId?: string;
      } & React.RefAttributes<SVGSVGElement>
    >;
  }[];
}
