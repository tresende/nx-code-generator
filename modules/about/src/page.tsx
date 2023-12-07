export function About() {
  console.log('page view: [About]')
  return <h1>About</h1>
}

export const route = {
  path: '/about',
  name: 'About',
  element: <About />
}
