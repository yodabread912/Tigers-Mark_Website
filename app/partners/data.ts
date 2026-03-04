export type Partner = {
  id: number;
  name: string;
  logo?: string;
  logoMaxWidth?: string;
  logoMaxHeight?: string;
  industries: string;
  services: string;
  details: string;
};

const DEFAULT_PARTNER_DETAILS = {
  industries: "Lorem Ipsum Lorem Ipsum",
  services: "Lorem Ipsum Lorem Ipsum",
  details:
    "*Information/Details about the Project* Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim.",
};

export const PARTNERS: Partner[] = [
  {
    id: 1,
    name: "AMSI Supply",
    logo: "/partners/01-amsi.png",
    ...DEFAULT_PARTNER_DETAILS,
  },
  {
    id: 2,
    name: "Bottom Blocks Inc.",
    logo: "/partners/02-bottom-blocks.png",
    logoMaxWidth: "90%",
    logoMaxHeight: "78%",
    ...DEFAULT_PARTNER_DETAILS,
  },
  {
    id: 3,
    name: "CT Consigna Construction Corp",
    logo: "/partners/03-ct-consigna.png",
    ...DEFAULT_PARTNER_DETAILS,
  },
  {
    id: 4,
    name: "DUCATI Philippines",
    logo: "/partners/04-ducati.png",
    ...DEFAULT_PARTNER_DETAILS,
  },
  {
    id: 5,
    name: "Fursys Philippines",
    logo: "/partners/05-fursys.png",
    ...DEFAULT_PARTNER_DETAILS,
  },
  {
    id: 6,
    name: "Goldshine Pharmaceuticals",
    logo: "/partners/06-goldshine.png",
    ...DEFAULT_PARTNER_DETAILS,
  },
  {
    id: 7,
    name: "Dreambuilders Pro, Inc.",
    logo: "/partners/07-dreambuilders.png",
    ...DEFAULT_PARTNER_DETAILS,
  },
  {
    id: 8,
    name: "Krispy Kreme",
    logo: "/partners/08-krispy-kreme.png",
    ...DEFAULT_PARTNER_DETAILS,
  },
  {
    id: 9,
    name: "Llaollao",
    logo: "/partners/09-llaollao.png",
    ...DEFAULT_PARTNER_DETAILS,
  },
  {
    id: 10,
    name: "Metal Alliance Rolling Mills Corporation",
    logo: "/partners/10-metal-alliance.png",
    ...DEFAULT_PARTNER_DETAILS,
  },
  {
    id: 11,
    name: "Balai Pandesal",
    logo: "/partners/11-balai-pandesal.png",
    ...DEFAULT_PARTNER_DETAILS,
  },
  {
    id: 12,
    name: "Dylan Patisserie",
    logo: "/partners/12-dylan-patisserie.png",
    ...DEFAULT_PARTNER_DETAILS,
  },
  { id: 13, name: "EO Executive Optical", ...DEFAULT_PARTNER_DETAILS },
  { id: 14, name: "Golden Gibbon", ...DEFAULT_PARTNER_DETAILS },
  { id: 15, name: "Jamaican", ...DEFAULT_PARTNER_DETAILS },
  { id: 16, name: "MINISO", ...DEFAULT_PARTNER_DETAILS },
  { id: 17, name: "SHAKA", ...DEFAULT_PARTNER_DETAILS },
  {
    id: 18,
    name: "Philippine National Bank",
    ...DEFAULT_PARTNER_DETAILS,
  },
];
