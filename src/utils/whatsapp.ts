import { site } from '../content/site';

export const whatsappUrl = (message: string = site.whatsappMessage) =>
  `https://wa.me/${site.phone}?text=${encodeURIComponent(message)}`;