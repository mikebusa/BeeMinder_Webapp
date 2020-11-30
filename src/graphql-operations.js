import gql from "graphql-tag";

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
			time_recorded
			sensor_data {
				temp
				humidity
				weight
			}
		}
	}
}
`;

export const FIND_HIVES = gql`
query FindHive($query: HiveQueryInput!) {
	hives(query: $query) {
		_id
		_owner
		created
		identifier
		name
		reports {
			_id
			time_recorded
			sensor_data {
				temp
				humidity
				weight
			}
		}
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