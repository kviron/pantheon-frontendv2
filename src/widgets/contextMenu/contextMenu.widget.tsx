import { HTMLAttributes, ReactNode } from "react";

type ContextMenuProps = HTMLAttributes<HTMLDivElement> & {
  children: any;
  isDisabled?: boolean;
  contextMenu?: ReactNode;
};

export const ContextMenu = ({
  children,
  isDisabled,
  contextMenu,
  ...other
}: ContextMenuProps) => {
  const handleContextMenu = (e) => {
    if (isDisabled || contextMenu) {
      e.preventDefault(); // Блокируем стандартное меню
    }
  };

  return (
    <div {...other} onContextMenu={handleContextMenu}>
      {children}
    </div>
  );
};
