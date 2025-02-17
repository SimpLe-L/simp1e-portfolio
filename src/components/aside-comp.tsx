import { IMenu } from "@/types";
import MenuItem from "./menu-item";

const SideBar = ({ menuList }: { menuList: IMenu[] }) => {
  return (
    <div className="p-[20px] h-full border-r border-[--split-line]">
      <div>
        {menuList.map((menu) => (
          <div key={menu.menuName} className="flex flex-col gap-2">
            <div className="font-bold">{menu.menuName}</div>
            {menu.list.map((item) => (
              <MenuItem item={item} key={item.title} />
            ))}
          </div>
        ))}
      </div>
    </div>
  )
}

export default SideBar;