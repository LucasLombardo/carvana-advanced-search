import { useQuery } from "@apollo/react-hooks";
import gql from "graphql-tag";
import Container from "@material-ui/core/Container";
import VehicleCards from "../components/vehicleCards";

const QUERY = gql`
  query {
    vehicles(limit: 3) {
      id
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
    <Container maxWidth="sm">
      <h1>Hello Apollo & Material UI</h1>
      <VehicleCards vehicles={data.vehicles} title={"3 Vehicles"} />
    </Container>
  );
};
