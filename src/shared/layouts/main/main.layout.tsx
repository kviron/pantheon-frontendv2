import { TitleBar } from "@/widgets/titleBar/titleBar.tsx";
import css from "./main.module.css";

type MainLayoutProps = {
  children: any;
};

export const MainLayout = ({ children }: MainLayoutProps) => {
  return (
    <>
      <TitleBar />
      <main className={css.wrapper}>{children}</main>
    </>
  );
};
