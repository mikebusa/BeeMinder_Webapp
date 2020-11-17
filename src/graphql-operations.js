import { gql } from '@apollo/client';

export const FIND_HIVE = gql`
  query FindHive($query: HiveQueryInput!) {
    hive(query: $query) {
      _id
      _owner
      created
      identifier
      name
      reports {
        _id
      }
      test
    }
  }
`;

export const FIND_HIVE2 = gql`
  query FindHive {
    hive (query: {name: "Hive1"}){
      _id
      _owner
      created
      identifier
      name
      reports {
        _id
      }
      test
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

export const CREATE_HIVE = gql`
  mutation CreateHiveHive($data: HiveInsertInput!) {
    insertOneHive(data: $data) {
      _id
      name
    }
  }
`;