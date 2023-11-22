import '@/app/ui/global.css'; //el arroba hace referencia al root de nuestra aplicacion, evita poner ../../../
import { inter } from '@/app/ui/fonts';
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased`}>{children}</body>
    </html>
  );
}
