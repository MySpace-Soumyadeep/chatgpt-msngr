import { SessionProvider } from '../components/SessionProvider'
import SideNav from '../components/SideNav'
import '../styles/globals.css'
import { getServerSession } from 'next-auth'
import { authOptions } from '../pages/api/auth/[...nextauth]'
import Login from '../components/Login'
import ClientProvider from '../components/ClientProvider'


export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {

  const session = await getServerSession(authOptions)

  return (
    <html>
      <head />
      <body>
        <SessionProvider session={session}>
          {!session ? (
            <Login/>
          ): (
            <div className='flex'>
            {/* side nav */}
            <div className='bg-[#202123] max-w-xs h-screen overflow-y-auto md:min-w-[14rem]'>
              <SideNav />
            </div>

            {/* Client Provider - Notification */}
            <ClientProvider/>

            <div className="bg-[#343541] flex-1">
              {children}
            </div>
          </div>
          )
          }
        </SessionProvider>
      </body>
    </html>
  )
}
