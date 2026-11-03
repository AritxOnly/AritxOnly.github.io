# 个人站 Material 3 主题

个人站的共享布局使用 Material 3 的语义色彩、圆角容器和胶囊按钮；Deadliner 保留独立布局。首页优先呈现个人介绍与文章，再展示项目、音乐、合集与 GitHub 活动。

## 头像与动态色彩

- `src/lib/material-theme.ts` 中的 `profile` 管理 GitHub 用户名、头像 URL 与默认种子色。
- `ProfileAvatar.astro` 直接使用 GitHub 头像；图片失败时回退到仓库已有头像。
- `AvatarTheme.astro` 在浏览器中用匿名 CORS 加载头像，以 96 × 96 像素采样。Material 官方 `sourceColorFromImage` 进行量化与评分，`themeFromSourceColor` 生成 light/dark 两套语义色板。
- primary、secondary、tertiary 及对应 on/container 色彩分别用于主操作、导航与辅助操作、音乐与个性化区域。正文和背景使用中性色角色，不直接把种子色当文字色。
- 色板缓存有效期 24 小时，键包含用户名；头像更新会在缓存过期后重新取色。缓存首屏内联恢复，主题切换不需要再次下载头像。
- 跨域、断网、图片加载超时或存储不可用时，保留完整默认色板，不阻塞正文。禁用 JavaScript 时仍有浅色默认样式。
- 静态社交分享图继续使用本地头像；它们不是浏览器实时头像。

## 验证

运行 `npm run build`（包含 Pagefind 索引），再运行 `npm run preview` 检查生产版搜索。`npm run dev` 适合样式调试，但不提供搜索索引。检查浅色/深色/跟随系统、手机导航、文章阅读，以及 GitHub 请求失败时的回退。

MCU 0.4 的部分 ESM 导入省略扩展名，所以 Astro 的 Vite SSR 配置通过 `noExternal` 打包该依赖。

官方算法说明：https://github.com/material-foundation/material-color-utilities/tree/main/typescript

## 故事首页与内容

首页 `StoryView.astro` 以五幕展示个人介绍、应用、博客、音乐、经历与朋友，每幕 10 秒。章节按钮支持左右方向键；手动选幕后暂停，播放按钮可恢复。鼠标停留、内容获得焦点、标签页隐藏或故事区域离开视口时暂缓计时；系统减少动态效果时默认暂停。下方正文仍可正常滚动，禁用 JS 时保留第一幕与完整内容。

`apps.json` 为共享项目目录，首页精选前三项，`/app` 展示完整七项。作品信息核对自各 GitHub 仓库，开源分支单独标注；没有伪造应用界面。

- HyperModifier 图标来自 `AritxOnly/HyperModifier` 的 `design/settings-icons/hypermodifier-launcher.png`。
- F1Info 实机截图来自 `AritxOnly/F1Info` 的 `docs/screenshots/home-settings-icon-056.png`。
- 原有 `/logo-trimmed.webp` 用于首页 banner；顶栏按用户截图恢复为最初的 a. 字标与音唯名称。
- `journey.ts` 集中维护经历，日期与角色依据用户提供的简历 v3.1，公开展示为简要介绍。简历原文件、手机号及内部业务指标未复制到站点。
- `/friends` 保留原友链、关系备注与社交入口，邮箱统一为 mailto；`/music` 使用已有真实封面与歌曲链接。

## 经历图与文章卡片

`ExperienceTimeline.astro` 将经历按开始月份排序，按月份计算跨度（结束月份包含在内），持续经历延伸到构建当月。年份轴自动覆盖最早经历到当前年份。点选一行后显示对应详情；键盘 Enter 同样可操作；禁用 JS 时保留全部介绍和锚点导航。手机端将每条经历的标题放在时间条上方，保持共同的年份比例，无需横向拖动。

首页、博客归档和分类页共享 `PostPreview.astro` 与同一套卡片样式。动态主题补充完整的中性色容器层级，深色背景使用 tone 6，卡片使用 tone 10 及以上，靠明暗差而非描边区分层级。

## Story View 与顶栏动效

章节切换由 Web Animations API 管理：旧幕短暂淡出，新幕的文字分段进入，主视觉稍后跟上；反向选择反向运动。时间条使用逐帧计时，切换期间暂缓计时。连续选择会取消上一组动画并清理非当前场景；退场内容立即标为 inert 并从辅助技术隐藏。减少动态效果时直接切换，不播放位移动画。BFCache 恢复后重新启动计时。

顶栏保留 a. 字标与原有导航结构，统一工具按钮底色。移动菜单支持开关动效、点击外部关闭、Esc 关闭并归还焦点、方向下键展开并聚焦首个链接。

## 字体与公开署名

公开署名统一为 Aritx Zhou，保留音唯与 GitHub 用户名 AritxOnly。

`typography.css` 集中维护字形与排版角色：Manrope Variable 处理英文与界面，中文界面使用系统无衬线字体；Noto Serif SC Variable 用于中文展示标题与引语，形成编辑式层次；JetBrains Mono 保留给日期、编号和代码。文章正文优化字号、行距和标题间距，数学与代码保持专用字体。首页和博客卡片仍复用相同标题样式。

新增字体均由 Fontsource npm 包自托管、使用 font-display: swap；Manrope 仅引入拉丁字集并预加载，Noto Serif SC 使用 unicode-range 分片按需加载，不依赖外部字体 CDN。字体许可证随站点放在 `/fonts/`。
