function ListItem(props) {
  return (
    <div className="list-item-wrap">
      {/* <h1 className="font-bold mb-3 text-lg text-slate-800">{props.heading}</h1> */}
      <div className=" w-full p-28 flex justify-center items-center border-2 border-gray-200 rounded-md">
        {props.children}
      </div>
    </div>
  );
}
export default ListItem;
