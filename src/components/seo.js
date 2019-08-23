//! Fonts are link imported from Google in this component below in <Helmet>
// Below per https://www.gatsbyjs.org/docs/add-seo-component/
import React from 'react';
import Helmet from 'react-helmet';
import PropTypes from 'prop-types';
import { StaticQuery, graphql } from 'gatsby';

const detailsQuery = graphql`
  query DefaultSEOQuery {
    site {
      siteMetadata {
        defaultTitle: title
        titleTemplate
        defaultDescription: description
        siteUrl: url
        author
        socialImage
        keywordsList: keywords
      }
    }
  }
`;

function SEO({ pathname, title, description, lang, meta, article, keywords }) { //eslint-disable-line
  return (
    <StaticQuery
      query={detailsQuery}
      render={(data) => {
        const { socialImage, defaultTitle, titleTemplate, defaultDescription, siteUrl, author, keywordsList } = data.site.siteMetadata;
        const seo = {
          title: title || defaultTitle,
          description: description || defaultDescription,
          url: `${siteUrl}${pathname || "/"}`,
          author: author,
          image: socialImage,
          keywords: keywords.length > 0 ? keywordsList.concat(keywords) : keywordsList
        };
        return (
          <>
            <Helmet
              htmlAttributes={{ lang }}
              title={seo.title}
              titleTemplate={titleTemplate}
            >
              <link href="https://fonts.googleapis.com/css?family=Jacques+Francois|Open+Sans&display=swap" rel="stylesheet" />
              <meta name="description" content={seo.description} />
              <meta name="keywords" content={seo.keywords.join(', ')} />
              {seo.url && (<meta property="og:url" content={seo.url} />)}
              {article ? (<meta property="og:type" content="article" />) : (<meta property="og:type" content="website" />)}
              {seo.title && (<meta property="og:title" content={seo.title} />)}
              {seo.description && (<meta property="og:description" content={seo.description} />)}
              {seo.image && (<meta property="og:image" content={seo.image} />)}
              {seo.image && (<meta property="og:image:alt" content="Promo Image for Alisa Szatrowski Website" />)}

              <meta name="twitter:card" content="summary" />
              {seo.title && (<meta name="twitter:title" content={seo.title} />)}
              {seo.author && (<meta name="twitter:creator" content={seo.author} />)}
              {seo.description && (<meta name="twitter:description" content={seo.description} />)}
              {seo.image && (<meta name="twitter:image" content={seo.image} />)}
              {seo.image && (<meta name="twitter:image:alt" content="Promo Image for Alisa Szatrowski Website" />)}
            </Helmet>
          </>);
      }}
    />
  );
}

SEO.propTypes = {
  lang: PropTypes.string,
  title: PropTypes.string.isRequired,
  description: PropTypes.string,
  article: PropTypes.bool,
  keywords: PropTypes.arrayOf(PropTypes.string),
  meta: PropTypes.array,
  pathname: PropTypes.string,
};

SEO.defaultProps = {
  lang: 'en',
  title: null,
  description: null,
  article: false,
  keywords: [],
  meta: [],
  pathname: null,
};

export default SEO;