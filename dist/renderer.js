// node_modules/.pnpm/@harborclient+sdk@1.0.33_@babel+runtime@8.0.0_@codemirror+search@6.7.1_@codemirror+them_f39ff3884637cfd15f954ae52c8cfc3e/node_modules/@harborclient/sdk/dist/runtime/index.js
function registerTheme(hc, theme) {
  const disposable = hc.themes.register(theme);
  hc.subscriptions.push(disposable);
  return disposable;
}

// src/renderer.tsx
function activate(hc) {
  registerTheme(hc, {
    id: "dracula",
    title: "Dracula",
    type: "dark",
    colors: {
      surface: "#282a36",
      sidebar: "#21222c",
      "sidebar-section": "#343746",
      control: "#44475a",
      field: "rgba(255, 255, 255, 0.06)",
      separator: "rgba(255, 255, 255, 0.1)",
      text: "#f8f8f2",
      "text-secondary": "#e2e2de",
      muted: "#6272a4",
      accent: "#bd93f9",
      selection: "rgba(189, 147, 249, 0.25)",
      danger: "#ff5555",
      warning: "#ffb86c",
      success: "#50fa7b"
    }
  });
}
export {
  activate
};
