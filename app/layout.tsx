import "./globals.css";

export const metadata = {
  title: "Handwashing Order Game",
  description: "Arrange the handwashing steps in the correct order"
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
