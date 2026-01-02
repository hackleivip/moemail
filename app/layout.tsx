import { ReactNode } from 'react';
import Script from 'next/script'; // ✅ 注意：这里是 default import，没有花括号！

export default function RootLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <html lang="zh-CN">
      <body>
        {children}

        {/* 51.la 网站统计代码 - 替换两处 "你的51la站点ID" 为真实ID */}
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
