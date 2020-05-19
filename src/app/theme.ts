import { ElectronWindow } from '../common';

const defaultBlue: string = `:root {
--text-color: #c0c0c0;
--text-hover: #adadad;
--darker-text: #a8a8a8;
--dark-bg: #111c31;
--main-color: #212e44;
--bright: #fffff;
--confirm-color: #63C090;
--dark-green: #485b4a;
--unupvoted: #3f403f;
--upvote: rgba(255, 255, 255, 15%);
--upvoted: rgba(255, 255, 255, 90%);
--announcements: #232528;
--blue-text: #4183c4
}

body,
div,
span:not(.view-line span),
.board-post-list-item-footer {

}

.game-jam-header {
background-color: var(--announcements)!important;
}
.dynamic-header,
.file-tree,
.file-tree-header,
.side-nav-options,
.libsearch,
.libsearch-search-input,
.libsearch-header,
.livecoding,
.livecoding-header,
.side-nav-active-pane,
.workspacePreferences,
.file-header,
.file-header-name,
.file-header-format-button,
.webview-url-bar,
.board-container,
#page,
.repls-dashboard-recent,
.star-toggle-control,
.jsx-467725132,
.board-nav-order-by-selected,
#root,
.lite-header,
.profile-header,
.tab:active,
/* .profile-icon, */
#root > div > div:nth-child(2) > div:nth-child(1),
#root > div > div:nth-child(2) > div:nth-child(1) > h3,
#root > div > div:nth-child(2) > div:nth-child(2) > div:nth-child(2),
#root > div > div:nth-child(2) > div:nth-child(2) > div:nth-child(2) > div:nth-child(2) > div > div,
#root > div > div:nth-child(2) > div:nth-child(2) > div:nth-child(3) > div > div,
section.marketingSection,
.landing-title,
header,
.marketing-section-root,
.marketing-header-root,
#page > div.marketingPage > section.jsx-1355667539.marketingSection > div.jsx-1700174850.landing-search-box > div,
#page > div.marketingPage > section.jsx-1355667539.marketingSection > div.jsx-1700174850.landing-search-box > div > div:nth-child(1) > span:nth-child(1) > input,
.new-post-modal,
.edit-repl,
.edit-repl-privacy,
.dashboard-search-menu,
.dashboard-search-option-label,
.dashboard-search-menu-footer,
#root > div > div:nth-child(2) > div > div:nth-child(1) > div > div:nth-child(2) > form > div:nth-child(1),
.delete-modal-wrapper,
.dynamic-header-nav-right > div > div > div:nth-child(2),
.post,
.widgetContainer,
#classroomsPage > div > div > div:nth-child(2) > div a,
#classroomsPage > div:first-child > div:first-child > div:nth-child(2) > div:first-child div:first-child,
.action-modal,
#root > div > div:nth-child(2) > div:nth-child(2) > section:nth-child(3) > section > div:nth-child(2),
#root > div > div:nth-child(2) > div:nth-child(2) > section:nth-child(3) > section > div:nth-child(3),
#root > div > div:nth-child(2) > div:nth-child(2) > section:nth-child(3) > section > div:nth-child(1),
#root > div > div:nth-child(2) > div:nth-child(2) > section:nth-child(3) > section > div:nth-child(1) > *,
.not-found,
footer,
#__next > div,
#react-tabs-0,
.box,
#root > div > div:nth-child(1) > div:nth-child(2) > div > div:nth-child(2) > div,
#classroomsPage > div:nth-child(2),
.react-tabs__tab-list .react-tabs__tab,
#root > div > div:nth-child(2) > div:nth-child(2) > section:nth-child(1) > div > section:nth-child(1),
#root > div > div:nth-child(2) > div:nth-child(2) > section:nth-child(1) > div > section:nth-child(1) > div:nth-child(1) > h3 > div > a,
#root > div > div:nth-child(2) > div:nth-child(2) > section:nth-child(1) > div > section:nth-child(1) > div:nth-child(1) > h3,
.modal-content,
.workspace-preferences,
body,
.docs-sidebar-container,
#classroomsPage > div > div > div:nth-child(2) > div > div,
.replsDashboard-folder-home,
.rendered-markdown,
/* .board-post-list-item, */
.repl-item, /* Repls inside multiplayer folder */
.repls-dashboard-list .replsDashboard-repl-home, /* Repls in main list and other folders */
div.jsx-3451078682.dynamic-header-nav-right div div,
.posts-feed-page, /* background of repl talk */
.posts-feed-header,
.paper,
.board-container .board-post-list-item, /* Makes the board item blue in old repl talk */
.notifications-page,
.clui-bg-content, /* background in main "/~" page */
.paper-action, /* recently edited in main page */
.sidebar-layout-nav,
.sidebar-layout-header,
.sidebar-layout-nav-header-blanket,
.new-repl, .root, /* background in the new repl popup */
.menu, /* languages/repos in create new repl/import from github */
.sentry-error-embed,
.clui-bg-blanket /* background in hey, lets get started! */
{

background-color: var(--dark-bg)!important;



}
.side-nav-item-active,
.jsx-30497461,
.replsDashboard-repl-card-icon,
.replsDashboard-repl-card,
.jsx-2699242107,
.star-toggle,
.node-row:hover,
.replsDashboard-repl-root:hover,
.dynamic-header-nav-item-active,
.ws-header-cta,
h3[data-radium="true"],
.button-base,
.repl-item-wrapper:hover,
/* .dynamic-header-dropdown-nav-items,
.dynamic-header-dropdown-option, */
.dynamic-header-dropdown-menu,
form input,
form textarea,
.static-header,
input.jsx-3169500625,#root > div > div:nth-child(2) > div:nth-child(2) > div:nth-child(1) > div > input,
.Select-control,
input[type=text],
textarea[type=text],
.file-tree-dropzone-tooltip,
.HistoryRevisionItem__revisionItem:hover,
.FileSelector__fileItem:hover,
.FileSelector__fileItem--selected,
.HistoryRevisionItem__revisionItem--selected,
.HistoryRevisionDay__parentWrapper:hover,
input.jsx-3927860116,
.autoResizeTextarea,
.textInput,
.language-option,
#classroomsPage > div:nth-child(3) > div:nth-child(4) > div:nth-child(3) > div:hover,
.RichEditor-code .public-DraftStyleDefault-ltr,
.landing-search-box div,
.examples div,
.multiplayer-game-banner,
.contextMenu,
/* button:not(.jsx-3173217138):not(.slick-arrow):not(.jsx-832526556):not(.clear-button):not(.input-wrapper):not(.jsx-314647297), */
textarea,
.Select-value-label,
#root > div > div:nth-child(2) > div:nth-child(2) > section:nth-child(1) > div > section:nth-child(1) > div:nth-child(1) > div:nth-child(3) > div > div > div,
.Select-value,
.Select-menu,
.Select-menu div,
.Select-noresults,
.Select-placeholder,
.tooltip-wrap-tooltip,
.embed-url-bar,
.mobileNavShow,
.notification-banner,
.tooltip-container,
code,
.jsx-1279517306.expandableSection-sectionTitle.jsx-561167517,
.expandableSection-sectionTitle,
.repls-dashboard-list .replsDashboard-repl-home:hover,
.status-banner,
.replsDashboard-folder-home:hover,
.folder-picker-container > div > div,
input,
.new-repl-button,
.downshift,
.dropdown,
div[role=option],
.input-container,
a.jsx-2449423843:hover,
.notification-item-unseen,
.notification-item:hover,
.dynamic-header-dropdown-option-active,
.dynamic-header-dropdown-option:hover,
.dashboard-search-option-focused,
.dashboard-search-option-focused .dashboard-search-option-label,
button.block.jsx-133885951, /* create new repl / import from github */
.active:not(a), /* selected lang/repo in repl creation */
a.jsx-803695828, /* some buttons */
.sc-iyvyFf, /* graphql schema docs */
.doc-category-item, /* graphql schema docs item */
.post-settings /* moderator post settings */
{

background-color:var(--main-color)!important;

}
svg.add-folder-icon-svg rect,
.talk-icon-fill,
.add-file-icon-svg .cls-2,
.globe-svg-icon g .cls-2 /* privacy globe */
.lock-svg-icon g .cls-1, .lock-svg-icon g .cls-3 /* privacy lock */
{
fill:var(--main-color)!important;
}
svg.add-folder-icon-svg path,
.sidebar-layout-nav-item-icon svg:nth-last-child(1) /* icons on sidebar */
{
fill:var(--text-color)!important;
}
body,
.jsx-1644989226,
.dynamic-header-nav-item,
.board-content-header-title,
.jsx-504746135,
.board-post-title,
.board-header-description,
div.jsx-3064916967 div a,
.profile-languages-header,
.repl-item-title,
input,
.button-base,
.jsx-2702929484,
.dynamic-header-dropdown-option,
/* .board-post-detail-title, */
.board-post-list-item-post-title,
.board-post-body,
.dashboard-search-option-label-container,
.dynamic-header-dropdown-label,
textarea,
.Select-value-label,
h3,
form,
.post-votes-heading,
.comments-header,
.profile-no-repls,
.profile-header-content,
.edit-repl-privacy,
/* .vote-control-active, */
.comment-page-warning,
.profile-comments-post-title,
.file-tree-dropzone-tooltip,
.HistoryRevisionDay__parentWrapper,
.HistoryRevisionItem__revisionItem,
.HistorySideBar__fileName,
.FileSelector__fileSelector,
.expandableSection-sectionTitle,
.language-item-name,
.repls-dashboard-recent-title,
.widgetError,
.commentBody,
.postTitle *,
.details > p > span,
.description,
.selectedName,
.postVotes,
.userInfo > .name,
.value > span > p > span *,
.mergeDescription,
.mergeContainer > .title,
.details > p > span *,
.action-modal-title,
.action-modal-body,
.static-loading,
#root > div > div:nth-child(2) > div:nth-child(2) > div:nth-child(2) > div:nth-child(2) > div > div > a > div:nth-child(2) > div:nth-child(1),
#classroomsPage > div:nth-child(3) > div:nth-child(4) > div:nth-child(1),
#classroomsPage > div:nth-child(3) > div:nth-child(4) > div:nth-child(3) > div > span,
#root > div > div:nth-child(2) > div.customScroll > div > div > div:nth-child(1),
h2,#root > div > div:nth-child(2) > div > div:nth-child(3) > div > div > div > label > span:nth-child(2),
#root > div > div:nth-child(2) > div > div:nth-child(4) > div > div > span,
#root > div > div:nth-child(2) > div > div:nth-child(5) > div > div > span,
.ReplsDashboard__noRepls__text,
.text span,
h1,
h2,
h3,
h4,
h5,
h6,
.docs-sidebar-link,
#classroomsPage > div > div > div > div > div:nth-child(1),
#react-tabs-2 > span,
#react-tabs-0 span,
#react-tabs-1 > div > div > div:nth-child(1) > div > span:nth-child(1),
.file-tree-heading,
.libsearch-heading,
a,
li,
.postCommentCount span,
.title,
#root > div > div:nth-child(1) > div:nth-child(2) > div > div:nth-child(2) > div > div:nth-child(1),
.tabbedList > div,
#classroomsPage > div > div > div,
#classroomsPage > div > div:nth-child(3) > div:nth-child(2) > div:nth-child(1),
#classroomsPage > div > div:nth-child(5) > div:nth-child(1) > span:nth-child(2),
.Select-menu,
.Select-menu div,
.Select-noresults,
.tooltip-wrap-tooltip,
.docs-sidebar-heading,
#root > div > div:nth-child(2) > div:nth-child(2) > div:nth-child(2) > div:nth-child(1),
#root > div > div:nth-child(2) > div:nth-child(2) > div:nth-child(3) > div > div > a > div:nth-child(2) > div:nth-child(1),
.tooltip-container,
code,
.help-container div,
.DiffViewer__guide,
.jsx-4023577944 div,
#classroomsPage > div > div > div:nth-child(2) > div > div > a > div:nth-child(2) > div:nth-child(1),
.folder-title-link,
.replsDashboard-repl-lang,
.github-title,
.jsx-791766956,
a span,
body .Select-value-label,
.Select-value span,
#root > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(6) > div:nth-child(2) > div:nth-child(1) > span:nth-child(1),
#root > div:nth-child(1) > div:nth-child(3) > div:nth-child(1) > div:nth-child(5) > div:nth-child(2) > div > span:nth-child(1),
.user-info-card,
.notification-item-container,
.clui-bg-content,
.home-tuorial-card-title, /* title for tutorials on ~, there's a typo here, change when it gets fixed */
.dropdown-username, /* your username in the hamburger menu */
.post-title, /* post title in explore trending repls */
button.block.jsx-3677849883, /* create new repl / import from github */
.active,
.paper
{

color:var(--text-color)!important;

}
.d2h-cntx{
background-color:#fff!important;
}
p,
.user-hover-card-info-card .paper,
.desc, /* description for repos in run your repos */
.language, /* repo language in run your repos */
.language-label /* repl language in explore trending repls */
{
color:var(--darker-text)!important;
}
::-webkit-scrollbar, ::-webkit-scrollbar-corner {
background-color:var(--dark-bg)!important;
}
::-webkit-scrollbar-thumb {
background-color:var(--main-color)!important;
border-radius: 5px!important;
}
iframe:not(#canny-iframe), .board-repl-embed, .lite-header, .side-nav-options,
.sidebar-layout-header, /* top bar below search your repls */
.button-base-kind-secondary /* cancel button */
{
border-color:var(--main-color)!important;
}
header,
.mobileNavShow,
.board-content-header,
.board-post-list-item,
.paper,
.top-leaders-leaderbard-cta,
input,
.dashboard-search-menu,
.paper-action, /* recently edited in main page */
.sidebar-layout-header-border,
.sidebar-layout-nav-bottom,
.sidebar-layout-nav-border
{
border-color:var(--main-color)!important;
}

.public-DraftStyleDefault-pre {
border:1px solid var(--text-color)!important;
padding:0px!important;
}
:not(div#classroomsPage) code {
filter: invert(100%)!important;
}

a:hover,
.dynamic-header-together span:hover,
.folder-title-link:hover,
a span:hover,
a div:hover,
a:hover span,
.tab-active.jsx-2134961465 {
color:var(--text-hover)!important;
}
.profile-tab-active {
filter: brightness(120%);
}
.profile-icon,
.dynamic-header,
.RichEditor-code {
border:none!important;
}
.dynamic-header-dropdown-nav-items {
border-color:var(--dark-bg)!important;
margin-bottom: 0;
}
.dynamic-header-dropdown-menu {
background-color: var(--dark-bg)!important;
}
#page {
padding-top:59px;
}
footer {
margin-top:0!important;
}
.upvote{
color:var(--unupvoted)!important;
}
.button-base-kind-confirm {
border-color:var(--confirm-color)!important;
background-color: var(--confirm-color)!important;
color: var(--dark-bg)!important;
}
.profile-hacker-label {
animation:rainbowColor 5s infinite linear!important;
}

#__next > div > header > div > div > nav > div {
padding-left: 10px!important;
}
.rendered-markdown pre {
padding:0!important;
}
#react-tabs-1 > div > div > div:nth-child(1), /* make add a post dark green */
.posts-feed-add-cta {
background-color:var(--dark-green)!important;
}

#react-tabs-1 > div > div > div:nth-child(1):hover {
background-color:#7998a6!important
}
.jsx-3768271232,
.jsx-1988436997,
.jsx-4221397789,
.jsx-1350117355,
a,
button,
a span,
a div {
transition-duration:100ms
}
/*.jsx-4273308143::after {*/
#copyright:after {
content: " Dark theme by @mat1";
font-family: Lato, Sans-Serif;
}
.board-nav-nav-item-active,
.multiplayer-game-banner-cta a:not(:hover),
.profile-hacker-label,
#classroomsPage > div > div:nth-child(5) > div:nth-child(2) > div > span,
.repls-dashboard-welcome-actions .btn,
.posts-feed-add-cta,
.user-roles-label
{
color: var(--dark-bg)!important;
}
@keyframes rainbowColor {
0% {
background-color:#FF1493;
}
12.5% {
background-color:red;
}

25% {
background-color:orange;
}

37.5% {
background-color:#FF0;
}

50% {
background-color:#7FFF00;
}

62.5% {
background-color:#0FF;
}

75% {
background-color:#00F;
}

87.5% {
background-color:#9932CC;
}

100% {
background-color:#FF1493;
}
}
@keyframes textrainbowColor {
0% {
color:#FF1493;
}

12.5% {
color:red;
}

25% {
color:orange;
}

37.5% {
color:#FF0;
}

50% {
color:#7FFF00;
}

62.5% {
color:#0FF;
}

75% {
color:#00F;
}

87.5% {
color:#9932CC;
}

100% {
color:#FF1493;
}
}
a.user-label[href="/@ReplTalk"]:not(.user-post-image)::after,
a.leaderboard-list-item[href="/@ReplTalk"]::after{
content:"BOT";
background-color:#7289DA;
color:#fff;
font-family: Tahoma, Geneva, sans-serif;
font-size:10px;
padding:2px;
border-radius:3px;
margin-left:2px;
}
a[href="/@mat1"]:hover{
animation: textrainbowColor 5s infinite linear!important;
}
/* .dynamic-header-logo.jsx-4273308143 img.jsx-4273308143,
.logo {
filter: grayscale(100%) brightness(2.5);
} */

.dynamic-header-logo.jsx-4273308143 {
  display: block;
  -moz-box-sizing: border-box;
  box-sizing: border-box;
  background: url(https://repl.it/public/images/light-logo.svg) no-repeat;
  padding-left: 116px;
  width: 116px;
  height: 42.3167px;
}



.example.jsx-2982526117:hover {
background:none!important;
}
.error.jsx-3462284709 {
color: white !important;
background: var(--dark-bg) !important;
}
/* .vote-control-heavy {
border: 1px solid var(--upvote)!important;
}
.vote-control-arrow,
.vote-control-count {
color: var(--upvote)!important;
}
.vote-control-active div {
color: var(--upvoted)!important;
} */
div.jsx-2072925792:nth-child(2) > div:nth-child(2) > div:nth-child(2),
.dynamic-header-dropdown-menu,
.board-post-list-item-link-blanket,
.profile-comments-post
{
border-color: var(--main-color)!important;
background: var(--dark-bg)!important;
}


.talk-posts-search-input {
border: 1px solid var(--main-color);
}
.board-post-list-item.jsx-1745538886 {
border-color: var(--main-color)!important
}
/* 
.monaco-editor:not(.vs-dark) * {
color:transparent!important;
width:0!important;
height:0!important;
overflow:hidden!important;
position: relative!important;
}
.monaco-editor:not(.vs-dark)::before {
content:"Please enable editor dark theme.\\\\A \\\\A 1) Click the settings icon at the left. \\\\A 2) Select theme, then choose dark.\\\\A 3) Profit!\\\\A \\\\A \\\\A Why? Because not being not blind is good.\\\\A You're welcome.";
position: absolute;
display: block;
top: 50%;
transform: translateY(-50%);
text-align: center;
width: 100%;
overflow: auto;
white-space:pre-line;
font-family: Consolas, "Courier New", monospace;
} */
.user-info-card {
background-color: var(--dark-bg)!important;
}
.board-post-list-item-board, /* in repl talk */
.jsx-2249553778 /* in notifications */
{
color: var(--dark-bg)!important;
}
.user-hover-card-inline a, /* User mentions in Repl Talk */
.jsx-4044439717, /* Users in notifications */
.notification-item-post-title /* Notification post title */
{ /* Blue links */
color: var(--blue-text) !important;
}
.close-icon-svg g line, .private-icon-container {
stroke: var(--text-color)!important;
}
.notification-item {
border-bottom-color: var(--main-color)!important;
}
.sidebar-layout-header-toggle-bars {border-color: var(--text-color)!important}
.sidebar-layout-header-toggle-bar {background-color: var(--text-color)!important}
* {
scrollbar-color: var(--main-color) var(--dark-bg);
}
.jsx-995443416 /* gradient in main page */
{
background: none!important;
}
.post-answered-by-card .user-label span {
color: var(--blue-text)!important;
}

.comment-detail-is-answer {
background-color: rgba(180,230,180, 0.2)!important;
}
.comment-detail-is-answer .rendered-markdown {
background-color: initial!important;
}`;

class themeHandler {
    windowArray: Array<ElectronWindow>;

    constructor() {}
    addWindow(window: ElectronWindow) {
        this.windowArray.push(window);
        //window.on('')
    }
    async addTheme(windowObj: ElectronWindow, CSSString: string) {
        for (let i = 1; i <= 3; i++) {
            try {
                windowObj.webContents.insertCSS(CSSString);

                console.debug(
                    `Theme Added for window ${windowObj.InternalId} attempt ${i}`
                );
            } catch (e) {
                console.error(`Error adding theme on window ${e} attempt ${i}`);
            }
        }
        windowObj.setBackgroundColor('#FFF');
    }
}
