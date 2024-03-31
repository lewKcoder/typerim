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
    <html lang="ja">
      <head>
        <title>{metadata.title}</title>
        <meta charSet="utf-8"></meta>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1"
        ></meta>
        <meta name="description" content={metadata.description} />
        <meta property="og:title" content={metadata.title} />
        <meta property="og:description" content={metadata.description} />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="./OGP.png" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@lew_yumei" />
      </head>

      <body className="bg-neutral-800">{children}</body>
    </html>
  );
}
