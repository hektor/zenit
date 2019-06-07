const zenit = {
  zenit0: "#2E3440",
  zenit1: "#000",
  zenit2: "#434C5E",
  zenit3: "#0d0d0d",
  zenit4: "#aaa",
  zenit5: "#E5E9F0",
  zenit6: "#ECEFF4",
  zenit7: "#8FBCBB",
  zenit8: "#88C0D0",
  zenit9: "#81A1C1",
  zenit10: "#5E81AC",
  zenit11: "#BF616A",
  zenit12: "#D08770",
  zenit13: "#EBCB8B",
  zenit14: "#A3BE8C",
  zenit15: "#B48EAD"
};

const backgroundColor = zenit.zenit0;
const foregroundColor = zenit.zenit4;
const cursorColor = zenit.zenit4;
const borderColor = backgroundColor;

const colors = {
  black: zenit.zenit1,
  red: zenit.zenit11,
  green: zenit.zenit14,
  yellow: zenit.zenit13,
  blue: zenit.zenit9,
  magenta: zenit.zenit15,
  cyan: zenit.zenit8,
  white: zenit.zenit5,
  lightBlack: zenit.zenit3,
  lightRed: zenit.zenit11,
  lightGreen: zenit.zenit14,
  lightYellow: zenit.zenit13,
  lightBlue: zenit.zenit9,
  lightMagenta: zenit.zenit15,
  lightCyan: zenit.zenit7,
  lightWhite: zenit.zenit6,
  colorCubes: zenit.zenit6,
  grayscale: foregroundColor
};

exports.decorateConfig = config => {

  return Object.assign({}, config, {
    foregroundColor,
    backgroundColor,
    borderColor,
    cursorColor: config.cursorColor || cursorColor,
    colors,
    // cursorShape: config.cursorShape || "BEAM",
    // fontSize: config.fontSize || 16,
    // fontFamily: config.fontFamily || "'Source Code Pro', Hack",
    termCSS: `
      ${config.termCSS || ""}
      .terminal .xterm-selection div {
        background: rgba(67, 76, 94, 0.8) !important;
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
        background-color: ${backgroundColor} !important;
        top: 0 !important;
        right: 0 !important;
        left: 0 !important;
      }
      .terminal .xterm-selection div {
        background: rgba(67, 76, 94, 0.8) !important;
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
        color: ${foregroundColor} !important;
        transition: color 400ms ease, background 400ms ease;
      }
      .tab_tab.tab_active,
      .tab_tab:hover {
        background-color: ${zenit.zenit1};
      }
      .splitpane_divider {
        background-color: rgba(67, 76, 94, 0.8) !important;
      }
      /*+---------------+
       + Plugin Support +
       +----------------+*/
      /*+--- hyper-statusline ---+*/
      .footer_footer {
        background-color: ${zenit.zenit1};
        transition: opacity 400ms ease;
      }
      .footer_footer .item_item {
        color: ${zenit.zenit4};
      }
      .footer_footer .item_icon.icon_dirty {
        background-color: ${zenit.zenit13};
      }
      .footer_footer .item_icon.icon_pull,
      .footer_footer .item_icon.icon_push {
        background-color: ${zenit.zenit7};
      }
    `
  });
};