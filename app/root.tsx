import {
  Link,
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from 'remix'
import type { LinksFunction, MetaFunction } from 'remix'
import globalStyles from './global.css'

export const meta: MetaFunction = () => {
  return {
    title: 'Leonardo Lepsch',
    keywords: 'photography,software,photos,digital darkroom,gallery,image,photographer,adobe,photoshop,lightroom'
  }
}

export const links: LinksFunction = () => {
  return [
    {
      rel: 'stylesheet',
      href: globalStyles,
    },
  ]
}

export default function App() {
  return (
    <html lang='en'>
      <head>
        <meta charSet='utf-8' />
        <meta name='viewport' content='width=device-width,initial-scale=1' />
        <Meta />
        <Links />
      </head>
      <body>
        <Link className='home' to='/'><h1>leonardo lepsch</h1></Link>
        <hr />
        <Outlet />
        <ScrollRestoration />
        <Scripts />
        <LiveReload />
      </body>
    </html>
  )
}
