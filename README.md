# 个人网站使用说明

## 📁 文件说明

你的个人网站包含以下文件：
- `index.html` - 网站主页面
- `style.css` - 网站样式文件（颜色、布局等）
- `script.js` - 网站交互脚本（动画、滚动等）
- `README.md` - 本说明文档

## 🚀 如何打开网站

**方法1：直接双击**
1. 找到 `index.html` 文件
2. 双击打开，会在浏览器中显示

**方法2：拖拽到浏览器**
1. 将 `index.html` 文件拖到浏览器窗口中
2. 网站就会打开

## ✏️ 如何修改网站内容

### 修改个人信息

打开 `index.html` 文件，用记事本或任何文本编辑器编辑：

**修改名字：**
找到第 24 行：
```html
<h1 class="fade-in">你好，我是 <span class="highlight">张三</span></h1>
```
把"张三"改成你的名字

**修改个人简介：**
找到第 38-53 行的"关于我"部分，修改里面的文字

**修改兴趣标签：**
找到第 48-54 行，修改或添加你的兴趣：
```html
<span class="tag">你的兴趣</span>
```

### 修改作品展示

找到第 59-112 行的作品部分：
- 修改 `<h3>项目标题 1</h3>` 改成你的项目名称
- 修改 `<p>这是我的第一个项目...</p>` 改成项目描述
- 修改标签内容

**添加更多作品：**
复制整个 `<div class="project-card">...</div>` 块，粘贴到其他项目卡片后面

### 修改博客文章

找到第 117-158 行的博客部分：
- 修改日期：`<div class="blog-date">2024年11月20日</div>`
- 修改标题：`<h3>我的第一篇博客文章</h3>`
- 修改摘要：`<p>这是博客文章的摘要...</p>`

**添加更多文章：**
复制整个 `<article class="blog-card">...</article>` 块

### 修改联系方式

找到第 177-202 行：
- 邮箱：修改 `your.email@example.com` 为你的真实邮箱
- 微信：修改 `your_wechat_id` 为你的微信号
- 社交媒体链接：修改 `<a href="#">微博</a>` 的 `#` 为实际链接

## 🎨 如何修改网站颜色

打开 `style.css` 文件，找到第 9-16 行的颜色定义：

```css
:root {
    --primary-color: #f4a896;      /* 主色调（粉橙色） */
    --secondary-color: #f8d7c1;    /* 次要颜色（浅桃色） */
    --accent-color: #e89e8b;       /* 强调色（深粉色） */
    --bg-color: #fef9f5;           /* 背景色（米白色） */
    --bg-light: #ffffff;           /* 亮背景（纯白） */
    --text-dark: #4a4a4a;          /* 深色文字 */
    --text-light: #7a7a7a;         /* 浅色文字 */
}
```

修改这些颜色代码就可以改变整个网站的配色。

**推荐配色网站：**
- https://colorhunt.co
- https://coolors.co

## 📸 如何添加图片

### 添加头像照片

1. 准备一张你的照片，命名为 `avatar.jpg`
2. 将照片放在与 `index.html` 同一个文件夹
3. 打开 `index.html`，找到第 40 行：
```html
<div class="avatar-placeholder">👤</div>
```
替换为：
```html
<img src="avatar.jpg" alt="我的头像" style="width: 250px; height: 250px; border-radius: 50%; object-fit: cover;">
```

### 添加项目图片

1. 准备项目图片，命名为 `project1.jpg`, `project2.jpg` 等
2. 放在同一个文件夹
3. 找到项目卡片的图片部分（如第 63 行）：
```html
<div class="project-image">📸</div>
```
替换为：
```html
<div class="project-image" style="background-image: url('project1.jpg'); background-size: cover; background-position: center;"></div>
```

## 🌐 如何发布到网上

### 方法1：使用 GitHub Pages（免费）

1. 注册 GitHub 账号：https://github.com
2. 创建新仓库，命名为 `你的用户名.github.io`
3. 上传这三个文件（index.html, style.css, script.js）
4. 访问 `https://你的用户名.github.io` 就能看到你的网站

### 方法2：使用 Netlify（免费）

1. 访问 https://www.netlify.com
2. 注册账号
3. 将包含这三个文件的文件夹拖拽到 Netlify
4. 会自动生成一个网址

### 方法3：使用 Vercel（免费）

1. 访问 https://vercel.com
2. 注册账号
3. 导入你的项目文件夹
4. 自动部署并生成网址

## 💡 常见问题

**Q: 修改后为什么看不到变化？**
A: 按 Ctrl+F5 强制刷新浏览器缓存

**Q: 可以用手机访问吗？**
A: 可以！这个网站已经做了响应式设计，手机上也能正常显示

**Q: 怎么添加更多页面？**
A: 复制 index.html，重命名为其他名字（如 about.html），修改内容，然后在导航栏添加链接

**Q: 样式乱了怎么办？**
A: 确保 index.html、style.css、script.js 三个文件在同一个文件夹中

## 📝 快速定制检查清单

完成以下步骤，让网站变成你自己的：

- [ ] 修改首页的名字
- [ ] 修改"关于我"部分的个人简介
- [ ] 修改兴趣标签
- [ ] 添加/修改作品展示
- [ ] 添加/修改博客文章
- [ ] 修改联系方式（邮箱、微信、社交媒体）
- [ ] 添加个人头像照片
- [ ] 添加项目图片
- [ ] 修改页脚的版权信息
- [ ] （可选）修改网站配色

## 🎯 下一步

- 学习 HTML/CSS 基础，能做更多自定义
- 添加更多功能（如联系表单、评论系统）
- 定期更新博客内容
- 分享你的网站链接给朋友

祝你使用愉快！如有问题，欢迎随时咨询。
