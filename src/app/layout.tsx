import Script from "next/script";

export default function RootLayout({
                                     children,
                                   }: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
    <head>
      <Script
        src="/nextjs-partytown-ym/~partytown/partytown.js"
        strategy="beforeInteractive"
      />
      <Script
        src="/nextjs-partytown-ym/~partytown/partytown-sw.js"
        strategy="beforeInteractive"
      />
      <script
        dangerouslySetInnerHTML={{
          __html: `
              partytown = {
                forward: ["dataLayer.push", "ym", "ym.a", "ym.a.push"]
              };
            `,
        }}
      />
      <script
        type="text/partytown"
        dangerouslySetInnerHTML={{
          __html: `
              window.dataLayer = window.dataLayer || [];
              (function(m,e,t,r,i,k,a){m[i]=m[i]||function(){(m[i].a=m[i].a||[]).push(arguments)};
                m[i].l=1*new Date();
                for (var j = 0; j < document.scripts.length; j++) {
                  if (document.scripts[j].src === r) { return; }
                }
                k=e.createElement(t),
                a=e.getElementsByTagName(t)[0],
                k.async=1,k.src=r,a.parentNode.insertBefore(k,a)
              })(window, document, "script", "https://mc.yandex.ru/metrika/tag.js", "ym");

              ym(101262698, "init", {
                clickmap:true,
                trackLinks:true,
                accurateTrackBounce:true,
                webvisor:true
              });
            `,
        }}
      />
      {/*<Partytown forward={["dataLayer.push", "ym", "ym.a", "ym.a.push"]}*/}
      {/*           // lib="/nextjs-partytown-ym/~partytown/"*/}
      {/*/>*/}
      {/*<script*/}
      {/*  id="ym"*/}
      {/*  type="text/partytown"*/}
      {/*  // strategy="worker"*/}
      {/*  // suppressHydrationWarning*/}
      {/*  dangerouslySetInnerHTML={{*/}
      {/*    __html: `*/}
      {/*                window.dataLayer = window.dataLayer || [];*/}
      {/*                (function(m,e,t,r,i,k,a){m[i]=m[i]||function(){(m[i].a=m[i].a||[]).push(arguments)};*/}
      {/*                  m[i].l=1*new Date();*/}
      {/*                  for (var j = 0; j < document.scripts.length; j++) {*/}
      {/*                    if (document.scripts[j].src === r) { return; }*/}
      {/*                  }*/}
      {/*                  k=e.createElement(t),*/}
      {/*                  a=e.getElementsByTagName(t)[0],*/}
      {/*                  k.async=1,k.src=r,a.parentNode.insertBefore(k,a)*/}
      {/*                })(window, document, "script", "https://mc.yandex.ru/metrika/tag.js", "ym");*/}
      {/*  */}
      {/*                ym(101262698, "init", {*/}
      {/*                  clickmap:true,*/}
      {/*                  trackLinks:true,*/}
      {/*                  accurateTrackBounce:true,*/}
      {/*                  webvisor:true*/}
      {/*                });*/}
      {/*              `,*/}
      {/*  }}*/}
      {/*/>*/}
    </head>
    <body>
    {children}
    </body>
    </html>
  );
}
