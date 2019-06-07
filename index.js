const zenit = {
  zenit0: "000",
  zenit1: "#0d0d0d",
  zenit2: "#111",
  zenit3: "#333",
  zenit4: "#aaa",
  zenit5: '#f00',
  zenit6: "#fff",
};

const bgColor = zenit.zenit0;
const selection = zenit.zenit1
const fgColor = zenit.zenit4
const cursorColor = zenit.zenit6;
const borderColor = zenit.zenit1;

exports.decorateConfig = config => {

  return Object.assign({}, config, {
    fgColor,
    bgColor,
    borderColor,
    cursorColor: config.cursorColor || cursorColor,
    // colors,
    termCSS: `
      ${config.termCSS || ""}
      .terminal .xterm-selection div {
        background: ${selection} !important;
      }
      .terminal-cursor {
        border-left-width: 2px;
      }
    `,
    css: `
      ${config.css || ""}
      * {
        text-rendering: optimizeLegibility !important;
      }
      .header_header {
        background-color: ${bgColor} !important;
        top: 0 !important;
        right: 0 !important;
        left: 0 !important;
      }
      .terminal .xterm-selection div {
        background: ${selection} !important;
      }
      .tab_first {
        margin-left: 0 !important;
        padding: 0 !important;
      }
      .tabs_list,
      .tab_tab {
        border: 0 !important;
      }
      .tab_tab {
        color: ${fgColor} !important;
        transition: color 400ms ease, background 400ms ease;
      }
      .tab_tab.tab_active,
      .tab_tab:hover {
        background-color: ${zenit.zenit0};
      }
      .splitpane_divider {
        background-color: ${zenit.zenit1} !important;
      }
      // plugin support
      // hyper-statusline
      .footer_footer {
        background-color: ${zenit.zenit1};
        transition: opacity 400ms ease;
      }
      .footer_footer .item_item {
        color: ${zenit.zenit3};
      }
      .footer_footer .item_icon.icon_dirty {
        background-color: ${zenit.zenit3};
      }
      .footer_footer .item_icon.icon_pull,
      .footer_footer .item_icon.icon_push {
        background-color: ${zenit.zenit3};
      }
    `
  });
};