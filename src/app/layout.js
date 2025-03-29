import '@styles/global.scss'
import Navigation from '@components/Navigation'
import Providers from './provider'

export const metadata = {
  title: "Next Js Tutorial",
  description: "This is a next js tutorial",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;700&display=swap"
        />
      </head>
      <body>
        <Navigation/>
        <Providers>
        {children}
        </Providers>
      </body>
    </html>
  );
}
