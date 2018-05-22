export default function ({params, route, redirect}) {
  // hypothetical set of all supported locales
  const locales = ['en', 'fr'];

  // if the current prefix is neither 'en' nor 'ge'
  if (!locales.indexOf(params.locale)) {
    // redirect to the same path with default locale as prefix
    redirect('301', '/' + locales[0] + route.fullPath);
  }
}
