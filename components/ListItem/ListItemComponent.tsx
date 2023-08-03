import { IListItemProps } from "./types";
export const ListItemComponent = ({ title, description }: IListItemProps) => {
  return (
    <div className="flex flex-col justify-start items-start m-2 p-4 text-zinc-700 hover:bg-gray-100 hover:rounded-md hover:cursor-pointer">
      <h5 className="text-md font-bold">{title}</h5>
      <p className="text-xs">{description}</p>
    </div>
  );
};
