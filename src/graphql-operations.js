import gql from "graphql-tag";

export const FIND_HIVE = gql`
  query FindHive($query: HiveQueryInput!) {
    hive(query: $query) {
      _id
      _owner
      created
      identifier
      name
    }
  }
`;

export const UPDATE_HIVE = gql`
  mutation UpdateHive($query: HiveQueryInput!, $set: HiveUpdateInput!) {
    updateOneHive(query: $query, set: $set) {
      _id
      name
    }
  }
`;