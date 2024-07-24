import './globals.css'
import Header from './header'

import Loading from './loading'
import { Suspense } from 'react'

export const metadata = {
  title: 'Burhanuddin Vora',
  description: 'Portfolio 2024',
}

export default function RootLayout({ children }) {
  async function pause()
  {
    await new Promise(resolve => setTimeout(resolve,5000))
  }

  return (
    <html lang="en">
      <head><link rel="preconnect" href="https://fonts.googleapis.com" />
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
<link href="https://fonts.googleapis.com/css2?family=Kalnia:wght@400;700&display=swap" rel="stylesheet" />
<link rel="preconnect" href="https://fonts.googleapis.com"/>
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
<link href="https://fonts.googleapis.com/css2?family=Rubik+Glitch&display=swap" rel="stylesheet"></link>
<link rel="preconnect" href="https://fonts.googleapis.com" />
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
<link href="https://fonts.googleapis.com/css2?family=Kalnia:wght@400;700&family=Ubuntu&display=swap" rel="stylesheet" />  
<link rel="preconnect" href="https://fonts.googleapis.com"/>
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin/>
<link href="https://fonts.googleapis.com/css2?family=Kalnia:wght@400;700&family=Permanent+Marker&family=Ubuntu&display=swap" rel="stylesheet"></link>   
      </head>
      <body>
      <Suspense fallback={<Loading/>}>
      {pause()}
            <header>
            <Header/>
          </header>
          <main>
          {children}
          </main>
          </Suspense>
          </body>
    </html>
  )
}