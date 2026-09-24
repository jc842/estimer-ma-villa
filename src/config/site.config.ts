export interface SiteConfig {
  name: string;
  siteName: string;
  domain: string;
  url: string;
  siteUrl: string;
  description: string;
  siteDescription: string;
  defaultAuthor: string;
  repo: string;
  i18n: { defaultLocale: string; locales: string[]; prefixDefaultLocale: boolean; };
  theme: { style: string; fontFamily: string; colorScheme: string; };
  matomo: { url: string; siteId: string; containerId: string; };
  revive: { reviveId: string; scriptUrl: string; zones: Record<string, { zoneId: number; format: string }>; };
  legal: { editor: string; address: string; contactEmail: string; hostName: string; hostAddress: string; };
  categories: Array<{ id: string; label: string }>;
}

export const siteConfig: SiteConfig = {
  name: "Estimer Ma Villa — Expertises Vénales & Valorisation Immobilière de Prestige",
  siteName: "estimer-ma-villa.com",
  domain: "estimer-ma-villa.com",
  url: "https://estimer-ma-villa.com",
  siteUrl: "https://estimer-ma-villa.com",
  description: "Le baromètre d'expertise indépendant de la valorisation de villas de luxe aux Antilles : méthodes d'évaluation vénale, prix au m² bord de mer, transactions confidentielles off-market et rentabilité.",
  siteDescription: "Le baromètre d'expertise indépendant de la valorisation de villas de luxe aux Antilles : méthodes d'évaluation vénale, prix au m² bord de mer, transactions confidentielles off-market et rentabilité.",
  defaultAuthor: "Le Collège des Experts Estimer Ma Villa",
  repo: "jc842/estimer-ma-villa",

  i18n: {
    defaultLocale: "fr",
    locales: ["fr", "en", "es"],
    prefixDefaultLocale: false,
  },

  theme: {
    style: "lexington-riflesso",
    fontFamily: "Outfit, Playfair Display, sans-serif",
    colorScheme: "stone",
  },

  matomo: {
    url: "https://analytics.les4h.fr/",
    siteId: "106",
    containerId: "mMunnISx",
  },

  revive: {
    reviveId: "ac119b122a644588953c74c4c1daee06",
    scriptUrl: "//ads.les4h.fr/www/delivery/asyncjs.php",
    zones: {
      mobileSticky: { zoneId: 656, format: "mobileBanner" },
      inContent: { zoneId: 655, format: "mediumRectangle" },
      header: { zoneId: 654, format: "leaderboard" },
      halfPage: { zoneId: 652, format: "halfPage" },
      largeRectangle: { zoneId: 653, format: "largeRectangle" },
      skyscraper: { zoneId: 657, format: "skyscraper" },
    },
  },

  legal: {
    editor: "Estimer Ma Villa — Conseil & Évaluations Immobilières Haut de Gamme",
    address: "BP 402, 97163 Le Moule Cedex",
    contactEmail: "contact@estimer-ma-villa.com",
    hostName: "Cloudflare Inc.",
    hostAddress: "101 Townsend St, San Francisco, CA 94107, USA",
  },

  categories: [
    { id: "methodes-estimation", label: "Méthodes d'Estimation Vénales" },
    { id: "prix-bord-de-mer", label: "Prix au m² Bord de Mer" },
    { id: "ventes-off-market", label: "Transactions Off-Market" },
    { id: "fiscalite-plus-value", label: "Fiscalité & Plus-Values" },
    { id: "audits-techniques", label: "Audits Techniques Côtiers" },
  ],
};
