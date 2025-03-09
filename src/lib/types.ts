// For HeadSEO.astro
export interface HeadSEOProps {
  title: string;
  description: string;
  image: string;
  imageAlt: string;
  contentType: string;
}

// For BaseLayout.astro
export interface BaseLayoutProps extends HeadSEOProps { }

