import css from "./titleBar.module.css";
import { getCurrentWindow } from "@tauri-apps/api/window";
import MinusIcon from "@/assets/icons/minus.svg";
import SwapIcon from "@/assets/icons/swap.svg";
import CloseIcon from "@/assets/icons/close.svg";
import clsx from "clsx";
import { ContextMenu } from "@/widgets/contextMenu";

const appWindow = getCurrentWindow();

export const TitleBar = () => {
  return (
    <ContextMenu
      isDisabled={true}
      data-tauri-drag-region
      className={css.wrapper}
    >
      <div className={css.logoWrapper}>
        <span className={css.logoText}>Pantheon</span>
      </div>
      <div className={css.buttonsWrapper}>
        <div
          className={css.button}
          id="titlebar-minimize"
          onClick={() => {
            appWindow.minimize();
          }}
        >
          <MinusIcon />
        </div>
        <div
          className={css.button}
          id="titlebar-maximize"
          onClick={() => appWindow.toggleMaximize()}
        >
          <SwapIcon />
        </div>
        <div
          className={clsx([css.button, css.close])}
          id="titlebar-close"
          onClick={() => appWindow.close()}
        >
          <CloseIcon />
        </div>
      </div>
    </ContextMenu>
  );
};
