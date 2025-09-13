export type Locale = 'fr-FR' | 'en-US' | 'es-ES';
const SUPPORTED: Locale[] = ['fr-FR', 'en-US', 'es-ES'];
export function getInitialLocale(): Locale {
  try {
    const saved = localStorage.getItem('app.lang') as Locale | null;
    if (saved && SUPPORTED.includes(saved)) return saved;
    const nav = (navigator.language || '').toLowerCase();
    if (nav.startsWith('en')) return 'en-US';
    if (nav.startsWith('es')) return 'es-ES';
    if (nav.startsWith('fr')) return 'fr-FR';
  } catch {
    /* empty */
  }
  return 'fr-FR';
}
