// eslint-disable-next-line @nx/workspace/no-fc
const Home: React.FunctionComponent<unknown> = () => {
  console.log('page view: [Home]')
  return <h1>Home</h1>
}

export const route = {
  path: '/',
  name: 'Home',
  element: <Home />
}
