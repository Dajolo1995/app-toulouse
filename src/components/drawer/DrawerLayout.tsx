import React, { ReactNode } from "react";
import { Drawer } from "../../utils/Desing";

interface DrawerLayoutProps {
  open: boolean;
  onClose: () => void;
  placement: "top" | "right" | "bottom" | "left";
  content: ReactNode;
  title?: string;
  size?: number // Cambiado a un número
}

const DrawerLayout: React.FC<DrawerLayoutProps> = ({
  open,
  onClose,
  placement,
  content,
  title,
  size,
}) => {
  return (
    <Drawer
      width={size} // Corregido aquí
      title={title}
      placement={placement}
      onClose={onClose}
      open={open}
    >
      {content}
    </Drawer>
  );
};

export default DrawerLayout;
