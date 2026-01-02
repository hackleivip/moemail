import { ReactNode } from 'react';
import { Script } from 'next/script';

export default function RootLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <html lang="zh-CN"> {/* 支持中文 */}
      <body>
        {children}

        {/* 👇 51.la 统计代码 - 请替换 "你的ID" 为真实站点ID */}
        <Script
          id="51-la-analytics"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              var _51la = _51la || [];
              _51la.push(["_sid", "22002147"]);
              (function() {
                var la = document.createElement("script");
                la.type = "text/javascript";
                la.async = true;
                la.src = "https://js.users.51.la/22002147.js";
                var s = document.getElementsByTagName("script")[0];
                s.parentNode.insertBefore(la, s);
              })();
            `,
          }}
        />
      </body>
    </html>
  );
}
