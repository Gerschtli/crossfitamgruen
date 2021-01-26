export const breakpoints = {
  sm: 30,
  md: 50,
}

export const mediaQuery = (breakpoint) => {
  return `@media (min-width: ${breakpoint}em)`
}
