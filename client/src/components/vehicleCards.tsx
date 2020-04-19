// prettier-ignore
import { GridList, GridListTile, GridListTileBar, ListSubheader } from "@material-ui/core";
import { formatCurrency } from "../utils";

export default ({ vehicles, title }) => (
  <GridList cellHeight={60}>
    <GridListTile key="Subheader" cols={2}>
      <ListSubheader component="h2">{title}</ListSubheader>
    </GridListTile>
    {vehicles.map(({ id, make, model, price }) => (
      <GridListTile cols={2} key={id}>
        <GridListTileBar
          title={make + " " + model}
          subtitle={formatCurrency(price)}
        />
      </GridListTile>
    ))}
  </GridList>
);
