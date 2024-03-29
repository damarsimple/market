import type { AppProps } from 'next/app';
import { useRouter } from 'next/router';
import { ManagedUIContext } from '@contexts/ui.context';
import ManagedModal from '@components/common/modal/managed-modal';
import ManagedDrawer from '@components/common/drawer/managed-drawer';
import React, { useEffect, useRef } from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';
import { Hydrate } from 'react-query/hydration';
import { ToastContainer } from 'react-toastify';
// import { ReactQueryDevtools } from 'react-query/devtools';
import { appWithTranslation } from 'next-i18next';
import { DefaultSeo } from '@components/seo/default-seo';

// external
import 'react-toastify/dist/ReactToastify.css';

// base css file
import '@assets/css/scrollbar.css';
import '@assets/css/swiper-carousel.css';
import '@assets/css/custom-plugins.css';
import '@assets/css/globals.css';
import '@assets/css/rc-drawer.css';
import { getDirection } from '@utils/get-direction';

import { GoogleOAuthProvider } from '@react-oauth/google';
import { ApolloProvider } from '@apollo/client';
import client from '@framework/utils/http';




const GOOGLE_ID = process.env.NEXT_PUBLIC_GOOGLE_ID

function Noop({ children }: React.PropsWithChildren<{}>) {
  return <>{children}</>;
}



const CustomApp = ({ Component, pageProps }: AppProps) => {
  const queryClientRef = useRef<any>();
  if (!queryClientRef.current) {
    queryClientRef.current = new QueryClient();
  }
  const router = useRouter();
  const dir = getDirection(router.locale);
  useEffect(() => {
    document.documentElement.dir = dir;
  }, [dir]);
  const Layout = (Component as any).Layout || Noop;

  return (
    <ApolloProvider client={client}>

      <GoogleOAuthProvider
        clientId={GOOGLE_ID!}
      >

        <QueryClientProvider client={queryClientRef.current}>
          {/* @ts-ignore */}
          <Hydrate state={pageProps.dehydratedState}>
            <ManagedUIContext>
              <>
                <DefaultSeo />
                <Layout pageProps={pageProps}>
                  <Component {...pageProps} key={router.route} />
                </Layout>
                <ToastContainer />
                <ManagedModal />
                <ManagedDrawer />
              </>
            </ManagedUIContext>
          </Hydrate>
          {/* <ReactQueryDevtools /> */}
        </QueryClientProvider>
      </GoogleOAuthProvider>
    </ApolloProvider>
  );
};

export default appWithTranslation(CustomApp);
