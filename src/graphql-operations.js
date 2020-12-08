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
			time_recorded
			sensor_data {
				temp
				humidity
				weight
				fft_data
				bee_flags {
					queen_present
					multiple_queen
					possible_mites
					three_day_in_range
					six_day_in_range
					nine_day_in_range
				}
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
				fft_data
				bee_flags {
					queen_present
					multiple_queen
					possible_mites
					three_day_in_range
					six_day_in_range
					nine_day_in_range
				}
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

export const DELETE_HIVE = gql`
  mutation DeleteHiveHive($query: HiveQueryInput!) {
    deleteOneHive(query: $query) {
      _id
      name
    }
  }
`;