import gql from "graphql-tag";

const ARTICLES_QUERY = gql`
  query Articles {
    navigation {
      navbar
      footer
    }
    articles(sort: "published_at:desc") {
      slug
      title
      description
      published_at
      content
      category {
        name
        color
      }
      user {
        username
        avatar {
          alt
          media {
            url
          }
        }
      }
    }
  }
`;

export default ARTICLES_QUERY;