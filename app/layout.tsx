
import "./globals.css";

interface RootLayoutProps {
  children: React.ReactNode;
}
import { DM_Sans } from "@next/font/google";
const dm_sans = DM_Sans({
  subsets:['latin'],
  weight:'400'
})
export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en">
      <body className={dm_sans.className}>
        {children}
      </body>
    </html>
  );
}
