import Head from 'next/head';

export function SiteHead({ title }: { title: string }) {
  return (
    <Head>
      {/* <title>Trifunovic & Co Law Office - {title}</title> */}
      <title>{title ? `${title} - TCL` : 'TCL'}</title>
      <link rel="icon" href={`${process.env.basePath}/favicon.png`} />
      <meta
        name="description"
        content={
          'Members of TC law team have been assisting international ' +
          'and national clients from various industries to establish, ' +
          'build and operate their business in Serbia.'
        }
      ></meta>
    </Head>
  );
}
