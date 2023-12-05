// eslint-disable-next-line @nx/workspace/no-fc
const Home: React.FunctionComponent<unknown> = () => {
  return <>Home</>
}

export const route = {
  path: '/',
  name: 'Home',
  element: <Home />
}
