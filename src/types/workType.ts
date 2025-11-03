import { StaticImageData } from "next/image";

import { ButtonVariantTypes } from "./buttonType";

export interface WorkDetail {
  image: string | StaticImageData;
  text: string;
  text_tr?: string;
}

export interface WorkLink {
  type: ButtonVariantTypes;
  url: string;
}

export interface WorkCard {
  id: string;
  title: string;
  src: string | StaticImageData;
  highlighted?: boolean;
  tags?: string[];
  body?: string;
  body_tr?: string;
  details?: WorkDetail[];
  links?: WorkLink[];
}
