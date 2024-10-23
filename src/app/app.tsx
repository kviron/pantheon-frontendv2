import { ThemeProvider } from "@/app/providers";
import { ErrorBoundary } from "@/app/providers";
import { SwithTheme } from "@/widgets/swithTheme";
import { MainLayout } from "@/shared/layouts/main/main.layout.tsx";

export const App = () => {
  return (
    <ErrorBoundary>
      <ThemeProvider>
        <MainLayout>
          <div>
            <h1>Настройки</h1>
            <SwithTheme />
            <h2>Проверка шрифта</h2>
          </div>
        </MainLayout>
      </ThemeProvider>
    </ErrorBoundary>
  );
};
