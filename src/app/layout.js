import './globals.css'
import Header from './header'

export const metadata = {
  title: 'Burhanuddin Vora',
  description: 'Portfolio 2024',
}

export default function RootLayout({ children }) {
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
        <header>
            <Header/>
          </header>
          <main>
          {children}
          </main>
          </body>
    </html>
  )
}