import React from "react";
import Helmet from "react-helmet";

export default function SEO({ description, lang, meta, keywords, title, metaDescription}) {
    
    return (
        <Helmet htmlAttributes={{ lang }}  title={title}  titleTemplate={`%s | interaudio`}
          meta={[  {
              name: `description`,
              content: metaDescription
            },
            {
              property: `og:title`,
              content: title
            },
            {
              property: `og:description`,
              content: metaDescription
            },
            {
              property: `og:type`,
              content: `website`
            },
            {
              name: `twitter:card`,
              content: `summary`
            },
            {
              name: `twitter:creator`,
              content: `danielifg.dev@gmail.com`
            },
            {
              name: `twitter:title`,
              content: title
            },
            {
              name: `twitter:description`,
              content: metaDescription
            }
          ] .concat(  keywords.length > 0 ? {
                    name: `keywords`,
                    content: keywords.join(`, `) }  : []  ).concat(meta)}
                     >         

                <script async src="https://www.googletagmanager.com/gtag/js?id=UA-141110306-1"></script>
                <script>                    
                      {`window.dataLayer = window.dataLayer || [];
                      function gtag(){dataLayer.push(arguments);}
                      gtag('js', new Date());

                      gtag('config', '{process.env.GA_TAG}');`}
                </script>
        </Helmet>
      );
  }
  