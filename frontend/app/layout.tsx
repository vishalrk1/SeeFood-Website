import './globals.css'
import { Figtree } from 'next/font/google';

import SideBar from '../components/sidebar/sidebar'

const font = Figtree({ subsets: ['latin'] })

export const metadata = {
  title: 'See Food',
  description: 'Get Your Food',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={font.className}>
        <SideBar>
          {children}
        </SideBar>
      </body>
    </html>
  )
}
