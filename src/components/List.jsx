import { Calendar, Dropdown } from "./CommonComponenets";
import ListItem from "./ListItem";

function List() {
  return (
    <div className="list flex flex-col gap-5 w-full">
      <ListItem heading="select input">
        <Dropdown />
      </ListItem>
      <ListItem heading="calander input">
        <Calendar />
      </ListItem>
    </div>
  );
}
export default List;
