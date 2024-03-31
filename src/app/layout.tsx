import "@/styles/global.scss";

export const metadata = {
  title: "TypeRim",
  description: "キーボードをカタカタ言わせちゃおう",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
        <meta property="og:title" content={metadata.title} />
        <meta property="og:description" content={metadata.description} />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="./OGP.png" />
      </head>

      <body className="bg-neutral-800">{children}</body>
    </html>
  );
}
