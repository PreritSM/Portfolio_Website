/**
 * Smooth scroll to element by ID
 */
export const scrollToId = (id: string): void => {
  const element = document.getElementById(id);
  if (element) {
    element.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    });
  }
};

/**
 * Handle navigation click with smooth scroll
 */
export const handleNavClick = (
  e: React.MouseEvent<HTMLAnchorElement>,
  id: string
): void => {
  e.preventDefault();
  scrollToId(id);
};
