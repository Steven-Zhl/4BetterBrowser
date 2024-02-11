(function () {
    'use strict';
    const menuList = [
        ['menu_enable', '深色模式 - ✅启用', '深色模式 - ❌禁用', true],
        ['menu_block_ad', '清除广告 - ✅启用', '清除广告 - ❌禁用', true]
    ];
    const css = `
    @charset "UTF-8";
@media (prefers-color-scheme: dark) {
  /* PC端界面 */
  div.frame-main-cont-body {
    background-color: #000;
    color: #8f8f8f;
  }
  div.frame-main-cont-body div.gWel-recommend.gWel-promt-radius.nui-closeable {
    background-color: #1e1e1e;
    border-color: #252525;
    color: #8f8f8f;
  }
  div.frame-main-cont-body div.gWel-recommend.gWel-promt-radius.nui-closeable ul {
    background-color: #272727;
    border-color: #252525;
  }
  div.frame-main-cont-body div.gWel-recommend.gWel-promt-radius.nui-closeable ul li {
    background-color: #272727;
  }
  div.frame-nav {
    background-color: #000;
    border-color: #252525;
    color: #8f8f8f;
  }
  div.frame-nav div#dvNavTop {
    background-color: #272727;
  }
  div.frame-nav div#dvNavTop ul li {
    color: #272727;
    background-color: #272727;
    background-image: none;
  }
  div.frame-nav div#dvNavTop ul li span {
    text-shadow: none;
  }
  div.frame-nav div#dvNavTree {
    background-color: #1e1e1e;
  }
  div.frame-nav div#dvNavTree ul {
    background-color: #1e1e1e;
    border-color: #252525;
    color: #8f8f8f;
  }
  div.frame-nav div#dvNavTree ul li {
    border-color: #252525;
    color: #8f8f8f;
  }
  div.frame-nav div#dvNavTree ul li div.js-component-component.nui-tree-item-label-hover, div.frame-nav div#dvNavTree ul li div.js-component-component.nui-tree-item-label-active {
    background-color: #272727;
    background-image: none;
  }
  div.frame-nav div#dvNavTree ul li div.js-component-component.nui-tree-item-label-selected {
    background-color: #272727;
    background-image: none;
  }
  div.frame-nav div#dvNavTree ul li div.js-component-component.nui-tree-item-label-selected span {
    color: #cdcdcd;
    text-shadow: none;
  }
  div.frame-nav div#dvNavTree ul li#dvNavFoot ::before {
    background-color: #8f8f8f;
  }
  div.frame-nav div#dvNavTree ul li#dvNavFoot div.GV0 div:hover {
    background-image: none;
    background-color: #272727;
  }
  div#dvContainer header {
    background-color: #1e1e1e;
  }
  div#dvContainer header div.nui-toolbar-item div {
    background-color: #272727;
    color: #8f8f8f;
  }
  div#dvContainer header div.nui-toolbar-item div span {
    background-color: #272727;
    border-color: #252525;
    color: #8f8f8f;
  }
  /* 移动端界面 */
  div.js-component-menu.menu {
    background-color: #272727;
  }
  div.js-component-menu.menu div.js-component-menuitem.menu-item {
    background-color: #272727;
    border-color: #252525;
    color: #cdcdcd;
  }
  div.js-component-button.btn-normal2 {
    background-color: #1e1e1e;
    box-shadow: none;
    border-color: #252525;
    border-width: 1px;
    color: #1e1e1e;
  }
  div.js-component-button.btn-normal2 span.btn-inner {
    color: #8f8f8f;
    border-color: #252525;
    background-image: linear-gradient(#272727, #272727);
  }
  div.js-component-button.btn-main {
    background-color: #0e5500;
    background-image: none;
    border-color: #252525;
    color: #1e1e1e;
  }
  div.js-component-button.btn-main span.btn-inner {
    color: #cdcdcd;
    border-color: #252525;
    background-color: #0e5500;
    background-image: none;
  }
  div.js-component-input.ipt-multiLine.ipt {
    background-image: linear-gradient(#272727, #272727);
    box-shadow: none;
    border-color: #1e1e1e;
    border-width: 1.5px;
    color: #1e1e1e;
  }
  div.js-component-input.ipt-multiLine.ipt label {
    color: #8f8f8f;
  }
  div.frame div.frame-top {
    background-color: #000;
    color: #8f8f8f;
  }
  div.frame div.frame-nav, div.frame div.frame-main {
    background-color: #272727;
    color: #8f8f8f;
  }
  div.frame div.frame-nav h2.subject, div.frame div.frame-main h2.subject {
    color: #cdcdcd;
  }
  div.frame div.frame-nav div.inputBar.mInbox-searchBar, div.frame div.frame-main div.inputBar.mInbox-searchBar {
    background-color: #1e1e1e;
    color: #8f8f8f;
  }
  div.frame div.frame-nav div.inputBar.mInbox-searchBar div.mInbox-searchBar-inner div.ipt.bdr-cFocus, div.frame div.frame-main div.inputBar.mInbox-searchBar div.mInbox-searchBar-inner div.ipt.bdr-cFocus {
    background-color: #272727;
    color: #8f8f8f;
  }
  div.frame div.frame-nav div.frame-toolbar, div.frame div.frame-main div.frame-toolbar {
    background-color: #1e1e1e !important;
    border-color: #1e1e1e !important;
    color: #1e1e1e !important;
  }
  div.frame div.frame-nav div.js-component-toolbar, div.frame div.frame-main div.js-component-toolbar {
    background-color: #1e1e1e !important;
    background-image: none !important;
    border-color: #1e1e1e !important;
    color: #cdcdcd;
  }
  div.frame div.frame-nav div.js-component-toolbar div.toolbar-optItem, div.frame div.frame-main div.js-component-toolbar div.toolbar-optItem {
    background-color: transparent;
    color: #cdcdcd;
  }
  div.frame div.frame-nav div.scroll, div.frame div.frame-main div.scroll {
    background-color: #272727;
    color: #8f8f8f;
  }
  div.frame div.frame-nav div.scroll div.js-component-component, div.frame div.frame-main div.scroll div.js-component-component {
    background-color: #1e1e1e;
    color: #8f8f8f;
  }
  div.frame div.frame-nav div.scroll div.g-null::after, div.frame div.frame-main div.scroll div.g-null::after {
    background-color: #272727;
    color: #8f8f8f;
  }
  div.js-component-msgbox div.toolbar-colCenter {
    background-color: #1e1e1e;
    color: #cdcdcd;
  }
  div.mask.mCompose-wrapper {
    background-color: #272727;
  }
  div.mask.mCompose-wrapper div.msgbox.mCompose {
    background-color: #272727;
    color: #8f8f8f;
  }
  div.mask.mCompose-wrapper div.msgbox.mCompose div#composeContentArea {
    color: #8f8f8f;
  }
  div.mask.mCompose-wrapper div.msgbox.mCompose div.js-component-toolbar {
    background-color: #1e1e1e !important;
    background-image: none !important;
    border-color: #1e1e1e !important;
    color: #cdcdcd;
  }
  div.mask.mCompose-wrapper div.msgbox.mCompose div.js-component-toolbar div.toolbar-optItem {
    background-color: transparent;
    color: #cdcdcd;
  }
  div.mask.mCompose-wrapper span.mCompose-item-frome-name {
    color: #cdcdcd;
  }
  div.mask.mCompose-wrapper input.ipt-input {
    color: #cdcdcd;
  }
  div.list-item, div.list-item-unread.list-item {
    background-color: #272727 !important;
    border-color: #252525 !important;
  }
  div.list-item span.mail-list-subject, div.list-item-unread.list-item span.mail-list-subject {
    color: #cdcdcd;
  }
  div.list-item span.mail-list-frome, div.list-item span.mail-list-time, div.list-item-unread.list-item span.mail-list-frome, div.list-item-unread.list-item span.mail-list-time {
    color: #8f8f8f;
  }
  div.js-component-msgbox.msgbox-simple.msgbox {
    background-color: #1e1e1e;
  }
  div.js-component-msgbox.msgbox-simple.msgbox div.msgbox-hd {
    background-color: #1e1e1e;
    color: #cdcdcd;
  }
  div.js-component-msgbox.msgbox-simple.msgbox div.msgbox-bd {
    background-color: #1e1e1e;
    color: #8f8f8f;
  }
  /* 移除多余的元素 */
  div.list-item.list-item-sptln {
    display: none;
  }
}

/*# sourceMappingURL=temp.css.map */

    `;

    for (let i = 0; i < menuList.length; i++) { // 菜单项为null的，分配默认值
        if (GM_getValue(menuList[i][0]) == null) { GM_setValue(menuList[i][0], menuList[i][3]) }
    }

    // 主程序
    if (GM_getValue(menuList[0][0])) injectCSS();
    if (GM_getValue(menuList[1][0])) blockAD();

    generateMenu();
    function generateMenu() { // 生成菜单
        // 注册菜单
        if (GM_getValue(menuList[0][0])) {
            GM_registerMenuCommand(`${menuList[0][1]}`, function () { enableDark(!GM_getValue(menuList[0][0])) })
        } else {
            GM_registerMenuCommand(`${menuList[0][2]}`, function () { enableDark(!GM_getValue(menuList[0][0])) })
        }
        if (GM_getValue(menuList[1][0])) {
            GM_registerMenuCommand(`${menuList[1][1]}`, function () { enableBlock(!GM_getValue(menuList[1][0])) })
        } else {
            GM_registerMenuCommand(`${menuList[1][2]}`, function () { enableBlock(!GM_getValue(menuList[1][0])) })
        }
    }
    function enableDark(type) { // 启用/禁用脚本
        GM_setValue(menuList[0][0], type);
        window.location.reload();
    }
    function enableBlock(type) { // 启用/禁用清理广告
        GM_setValue(menuList[1][0], type);
        window.location.reload();
    }
    function injectCSS() {
        const style = document.createElement('style');
        style.innerHTML = css;
        document.head.appendChild(style);
    }
    function blockAD() {

    }

})();