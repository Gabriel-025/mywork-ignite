import { List, X } from "phosphor-react";
import { Logo } from "./Svgs/Logo";

interface OpenedProps {
  onSidebarOpened(): any;
  sidebarOpened: boolean;
}

export function Header(props: OpenedProps) {
  return (
    <header className="w-full py-5 flex  items-center justify-between px-4 bg-gray-700 border-b border-gray-600 lg:justify-center md:px-4 ">
      <Logo />
      <div className="lg:hidden flex flex-row items-center">
        <strong className="text-sm text-[#4ADE80] px-2">Aulas</strong>
        {!props.sidebarOpened ? (
          <List
            size={40}
            className=" hover:cursor-pointer text-green-400"
            onClick={props.onSidebarOpened}
          />
        ) : (
          <X
            size={40}
            className=" hover:cursor-pointer text-green-500"
            onClick={props.onSidebarOpened}
          />
        )}
      </div>
    </header>
  );
}
