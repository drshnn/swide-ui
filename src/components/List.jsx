import ListItem from "./ListItem";

function List() {
  return (
    <div className="list flex flex-col gap-5 w-full">
      <ListItem heading="select input">
        <div className="dropdown">dropdown</div>
      </ListItem>
    </div>
  );
}
export default List;
