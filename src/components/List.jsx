import { Calendar, Dropdown, ProfileDropdown } from "./CommonComponenets";
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
      <ListItem heading="calander input">
        <ProfileDropdown />
      </ListItem>
      <ListItem heading="calander input"></ListItem>
    </div>
  );
}
export default List;
