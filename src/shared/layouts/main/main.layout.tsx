import { TitleBar } from "@/widgets/titleBar/titleBar.tsx";
import css from "./main.module.css";
import { Container, ScrollArea } from "@radix-ui/themes";

type MainLayoutProps = {
  children: any;
};

export const MainLayout = ({ children }: MainLayoutProps) => {
  return (
    <>
      <TitleBar />
      <Container maxWidth={"100%"} px="2">
        <ScrollArea scrollbars="vertical" className={css.wrapper}>
          {children}
        </ScrollArea>
      </Container>
    </>
  );
};
