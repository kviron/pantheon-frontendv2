import { ThemeProvider } from "@/app/providers";
import { ErrorBoundary } from "@/app/providers";
import { SwithTheme } from "@/widgets/swithTheme";
import { MainLayout } from "@/shared/layouts/main/main.layout.tsx";
import "@radix-ui/themes/styles.css";
import "./style/style.css";
import { Heading } from "@radix-ui/themes";

export const App = () => {
  return (
    <ErrorBoundary>
      <ThemeProvider>
        <MainLayout>
          <div>
            <Heading as={"h1"} size="7">
              Настройки
            </Heading>
            <SwithTheme />
            <Heading as={"h2"} size="5">
              Проверка шрифта
            </Heading>
          </div>
        </MainLayout>
      </ThemeProvider>
    </ErrorBoundary>
  );
};
