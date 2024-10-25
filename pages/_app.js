import React from "react";
import "./style.css";
import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from '@vercel/speed-insights/react';
import { useRouter } from 'next/router';


function MyApp({ Component, pageProps }) {
  const router = useRouter();  // Get the current route

  return (
    <>
      <Component {...pageProps} />
      <Analytics />
      <SpeedInsights route={router.pathname} />  {/* Add Speed Insights with route */}
    </>
  );
}

export default MyApp;
