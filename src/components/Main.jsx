import List from "./List";

function Main() {
  return (
    <div className="main-wrap w-full">
      <div className="main max-width mt-12 py-8 flex flex-col gap-6">
        <h1 className="text-2xl font-bold">
          Pre-built componenets in react and tailwind.
        </h1>
        <List />
      </div>
    </div>
  );
}
export default Main;
