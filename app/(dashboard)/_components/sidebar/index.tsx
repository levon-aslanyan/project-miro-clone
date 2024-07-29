import List from "./list";
import NewButton from "./new-button";

type Props = {};

const Sidebar = (props: Props) => {
  return (
    <aside className="fixed z-[1] p-5 flex flex-col gap-y-4 left-0 bg-blue-950 w-[60px] h-full text-white">
      <List />
      <NewButton />
    </aside>
  );
};

export default Sidebar;
