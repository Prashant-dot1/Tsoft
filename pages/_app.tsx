import '@/styles/globals.css'
import type { AppProps } from 'next/app';
import { GoogleOAuthProvider } from "@react-oauth/google"
import {Inter} from "next/font/google";
import toast , {Toaster} from 'react-hot-toast';

const inter = Inter({ subsets: ['latin'] })

export default function App({ Component, pageProps }: AppProps) {
  return (
  <div  className={inter.className}>
    <GoogleOAuthProvider clientId="485883842329-9e3ecu9591ib71adcdr5aehkclmh8v5o.apps.googleusercontent.com">
      <Component {...pageProps} />
      <Toaster/>
    </GoogleOAuthProvider>
    </div>);
}
