import Script from 'next/script'

export default function GoogleAnalytics() {
  const GA_TRACKING_ID = 'G-ZE9X6MMX4G'; // AW-797999341
  return (
    <>
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${GA_TRACKING_ID}`}
        strategy="afterInteractive"
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${GA_TRACKING_ID}');
        `}
      </Script>
      <Script id="gtag-conversion-helper" strategy="afterInteractive">
        {`
          function gtagSendEvent(url) {
            var callback = function () {
              if (typeof url === 'string') {
                window.location = url;
              }
            };
            gtag('event', 'ads_conversion_Contact_1', {
              'event_callback': callback,
              'event_timeout': 2000,
            });
            return false;
          }
        `}
      </Script>
    </>
  )
}