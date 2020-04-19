import { useQuery } from "@apollo/react-hooks";
import gql from "graphql-tag";

const QUERY = gql`
  query {
    vehicles {
      make
      model
      price
    }
  }
`;

export default () => {
  const { loading, data } = useQuery(QUERY);
  if (loading || !data) {
    return <h1>loading...</h1>;
  }

  return (
    <div>
      <p>Hello Apollo</p>
      <ul>
        {data.vehicles.map(({ make, model, price }) => (
          <li>{make + " " + model + " $" + price}</li>
        ))}
      </ul>
    </div>
  );
};
