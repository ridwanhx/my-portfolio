export const BOOT_SEEN_KEY = "portfolio_boot_seen";

export const shouldShowBoot = () => {
  try {
    if (sessionStorage.getItem(BOOT_SEEN_KEY)) return false;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return false;
  } catch {
    // storage tidak tersedia -> tetap tampilkan splash
  }
  return true;
};
