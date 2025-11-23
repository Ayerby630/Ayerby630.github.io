// 个人网站交互脚本

// 平滑滚动功能
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// 导航栏滚动效果
let lastScroll = 0;
const navbar = document.querySelector('.navbar');

window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;

    // 滚动时添加阴影效果
    if (currentScroll > 50) {
        navbar.style.boxShadow = '0 4px 20px rgba(244, 168, 150, 0.2)';
    } else {
        navbar.style.boxShadow = '0 2px 10px rgba(244, 168, 150, 0.1)';
    }

    lastScroll = currentScroll;
});

// 页面加载时的淡入效果
window.addEventListener('load', () => {
    const fadeElements = document.querySelectorAll('.fade-in');
    fadeElements.forEach((element, index) => {
        setTimeout(() => {
            element.style.opacity = '1';
        }, index * 200);
    });
});

// 滚动时元素淡入效果
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// 观察所有卡片元素
document.addEventListener('DOMContentLoaded', () => {
    const cards = document.querySelectorAll('.project-card, .blog-card, .contact-item');
    cards.forEach(card => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(20px)';
        card.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(card);
    });
});

// 移动端菜单切换功能（为未来扩展准备）
function createMobileMenu() {
    const navbar = document.querySelector('.navbar .container');
    const navMenu = document.querySelector('.nav-menu');

    // 检查是否是移动设备
    if (window.innerWidth <= 768) {
        // 创建汉堡菜单按钮
        if (!document.querySelector('.menu-toggle')) {
            const menuToggle = document.createElement('button');
            menuToggle.className = 'menu-toggle';
            menuToggle.innerHTML = '☰';
            menuToggle.style.cssText = `
                background: none;
                border: none;
                font-size: 1.5rem;
                color: var(--primary-color);
                cursor: pointer;
                display: none;
            `;

            navbar.insertBefore(menuToggle, navMenu);

            menuToggle.addEventListener('click', () => {
                navMenu.classList.toggle('active');
            });
        }
    }
}

// 响应式处理
window.addEventListener('resize', () => {
    createMobileMenu();
});

// 初始化
createMobileMenu();

// 为所有外部链接添加新标签页打开
document.querySelectorAll('a[href^="http"]').forEach(link => {
    link.setAttribute('target', '_blank');
    link.setAttribute('rel', 'noopener noreferrer');
});

// 添加一些有趣的交互效果
const skillTags = document.querySelectorAll('.tag');
skillTags.forEach(tag => {
    tag.addEventListener('click', () => {
        tag.style.transform = 'scale(1.1)';
        setTimeout(() => {
            tag.style.transform = 'scale(1)';
        }, 200);
    });
});

// 控制台欢迎信息
console.log('%c欢迎来到我的网站！', 'color: #f4a896; font-size: 20px; font-weight: bold;');
console.log('%c如果你对这个网站感兴趣，欢迎联系我！', 'color: #7a7a7a; font-size: 14px;');

// ========== 旅行足迹功能 ==========

// 旅行心得数据库
const travelNotes = {
    osaka: {
        title: '日本 · 大阪',
        emoji: '🏯',
        date: '2023年春',
        duration: '7天',
        content: `
            <h3>初见大阪</h3>
            <p>大阪是一座充满活力的城市，古老的寺庙与现代的摩天大楼和谐共存。走在道顿堀的街头，霓虹灯闪烁，热闹非凡。</p>

            <h3>难忘的美食</h3>
            <p>不得不提的是大阪的美食文化。章鱼烧、御好烧、串炸...每一样都让人回味无穷。特别是黑门市场，新鲜的海鲜和各种小吃，简直是吃货的天堂。</p>

            <h3>大阪城的樱花</h3>
            <p>三月的大阪城公园，樱花盛开。粉色的花瓣随风飘落，在护城河上形成一层花毯。那一刻，我终于理解了日本人对樱花的执念。</p>

            <h3>心得感悟</h3>
            <p>大阪人的热情和友善让我印象深刻。这座城市教会我，传统与现代可以如此美妙地融合，快节奏的生活中也能保持对美的欣赏。</p>
        `
    },
    'southeast-asia': {
        title: '新马泰之旅',
        emoji: '🌴',
        date: '2022年夏',
        duration: '12天',
        content: `
            <h3>三国风情</h3>
            <p>新加坡的现代化、马来西亚的多元文化、泰国的佛教氛围，三个国家各有特色，却又有着相似的热带风情。</p>

            <h3>新加坡</h3>
            <p>花园城市名不虚传。滨海湾金沙的无边泳池、圣淘沙的海滩、牛车水的美食...这个小小的国家却有着大大的精彩。</p>

            <h3>吉隆坡</h3>
            <p>双子塔在夜晚格外耀眼。云顶高原的凉爽、马六甲的历史、槟城的壁画...马来西亚是一个宝藏国家。</p>

            <h3>曼谷</h3>
            <p>大皇宫的金碧辉煌、水上市场的热闹、考山路的夜生活...曼谷是一座永不停歇的城市。泰式按摩和街边小吃是每天的必修课。</p>

            <h3>旅行感悟</h3>
            <p>东南亚的慢生活节奏让我学会放松。人们的笑容如同这里的阳光一样温暖，提醒我生活不应该总是匆匆忙忙。</p>
        `
    },
    semporna: {
        title: '马来西亚 · 仙本那',
        emoji: '🤿',
        date: '2023年夏',
        duration: '10天',
        content: `
            <h3>潜水员的诞生</h3>
            <p>仙本那，这个名字在马来语中意为"完美"，而这里的海底世界确实完美得令人窒息。决定考潜水证，是我做过最正确的决定之一。</p>

            <h3>第一次下潜</h3>
            <p>还记得第一次背着气瓶潜入水中的紧张。教练耐心的指导，慢慢适应水下呼吸的感觉。当我终于能够自如地在水中游动，看着五彩斑斓的珊瑚和热带鱼从身边游过，那种自由的感觉无法言喻。</p>

            <h3>Sipadan岛</h3>
            <p>世界顶级潜点之一。数不清的海龟、成群的梭鱼风暴、壮观的珊瑚墙...每一次下潜都是一次全新的探险。海底30米的蓝色世界，让我感受到了大自然的神奇与伟大。</p>

            <h3>水上屋生活</h3>
            <p>住在马布岛的水上屋，推开门就是大海。每天清晨被海浪声唤醒，傍晚在甲板上看日落，夜晚数着满天繁星入睡。这种与大海融为一体的感觉，简直是天堂。</p>

            <h3>收获与成长</h3>
            <p>拿到潜水证的那一刻，成就感满满。但更重要的是，潜水让我学会了平静、专注和对自然的敬畏。海洋覆盖了地球70%的面积，而我终于有了探索这个蓝色世界的资格。</p>
        `
    },
    turkey: {
        title: '土耳其 · 卡帕多奇亚',
        emoji: '🎈',
        date: '2023年秋',
        duration: '8天',
        content: `
            <h3>童话般的清晨</h3>
            <p>凌晨四点半起床，只为了那一场热气球之旅。当上百个热气球在日出时分缓缓升空，整个天空都被染成了金色和粉色。</p>

            <h3>空中视角</h3>
            <p>热气球缓缓上升，卡帕多奇亚奇特的地貌在脚下展开。那些被风雨侵蚀形成的"精灵烟囱"、玫瑰谷的红色岩石、鸽子谷的洞穴...这一切看起来如此不真实，像是走进了另一个星球。</p>

            <h3>洞穴酒店</h3>
            <p>住在由古老洞穴改造的酒店里，别有一番风味。千年前的石头房间，现代化的设施，历史与现代在这里完美融合。</p>

            <h3>地下城探险</h3>
            <p>参观了代林库尤地下城，这座可以容纳2万人的地下避难所令人震撼。古人的智慧让我惊叹，那些复杂的通道和房间系统，在当年是如何建造的？</p>

            <h3>伊斯坦布尔</h3>
            <p>横跨欧亚两洲的城市，圣索菲亚大教堂、蓝色清真寺、博斯普鲁斯海峡...每一处都在诉说着这座城市辉煌的历史。</p>

            <h3>旅行的意义</h3>
            <p>土耳其之行让我明白，世界之大，总有一些地方能够超越想象。那个漂浮在空中的清晨，会永远留在我的记忆中。</p>
        `
    },
    russia: {
        title: '俄罗斯 · 摩尔曼斯克',
        emoji: '✨',
        date: '2024年冬',
        duration: '6天',
        content: `
            <h3>追光之旅</h3>
            <p>零下30度的摩尔曼斯克，我裹着厚厚的羽绒服，站在北极圈内的荒原上，等待着那场大自然的魔法表演。</p>

            <h3>极光乍现</h3>
            <p>晚上9点多，天空突然开始变化。一抹淡淡的绿色出现在天边，然后越来越亮，开始舞动。紧接着，整个天空都被绿色、紫色、粉色的光带覆盖，像是天空在跳舞。</p>

            <h3>难以置信的美</h3>
            <p>极光在头顶翻滚、旋转，变化莫测。那种美是照片和视频完全无法表达的。站在那里，我感受到了人类的渺小和大自然的伟大。眼泪不知不觉就流了下来，不是因为寒冷，而是因为震撼。</p>

            <h3>极夜中的生活</h3>
            <p>摩尔曼斯克的冬天几乎没有白天，但这座城市依然充满生机。当地人热情好客，俄式桑拿和伏特加帮我们抵御严寒。</p>

            <h3>破冰船之旅</h3>
            <p>乘坐核动力破冰船航行在冰封的巴伦支海上，看着厚厚的冰层被轻易破开，感受到了人类科技的力量。</p>

            <h3>永生难忘</h3>
            <p>这次追光之旅是一次心灵的洗礼。在那片极寒之地，我找到了内心的平静。极光提醒我，这个世界上还有那么多美好的事物值得我们去追寻，去体验。</p>

            <h3>献给未来的自己</h3>
            <p>当生活变得平淡，当工作让人疲惫，我会想起那个北极圈的夜晚，想起那漫天舞动的极光。它告诉我：永远不要停止探索，永远保持对世界的好奇心。</p>
        `
    }
};

// 获取弹窗元素
const modal = document.getElementById('travel-modal');
const modalBody = document.getElementById('modal-body');
const closeBtn = document.querySelector('.close-modal');

// 显示旅行心得
function showTravelNotes(location) {
    const note = travelNotes[location];
    if (!note) return;

    modalBody.innerHTML = `
        <h2>${note.emoji} ${note.title}</h2>
        <div class="travel-meta">
            <div class="travel-meta-item">
                <span>📅</span>
                <span>${note.date}</span>
            </div>
            <div class="travel-meta-item">
                <span>⏱️</span>
                <span>${note.duration}</span>
            </div>
        </div>
        ${note.content}
    `;

    modal.style.display = 'block';
    document.body.style.overflow = 'hidden'; // 防止背景滚动
}

// 关闭弹窗
function closeModal() {
    modal.style.display = 'none';
    document.body.style.overflow = 'auto';
}

// 事件监听
document.addEventListener('DOMContentLoaded', () => {
    // 为所有"查看心得"按钮添加点击事件
    document.querySelectorAll('.view-notes-btn').forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.stopPropagation(); // 防止事件冒泡
            const card = btn.closest('.travel-card');
            const location = card.getAttribute('data-location');
            showTravelNotes(location);
        });
    });

    // 也可以直接点击卡片查看心得
    document.querySelectorAll('.travel-card').forEach(card => {
        card.addEventListener('click', () => {
            const location = card.getAttribute('data-location');
            showTravelNotes(location);
        });
    });

    // 点击关闭按钮
    if (closeBtn) {
        closeBtn.addEventListener('click', closeModal);
    }

    // 点击弹窗外部区域关闭
    modal.addEventListener('click', (e) => {
        if (e.target === modal) {
            closeModal();
        }
    });

    // ESC键关闭弹窗
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && modal.style.display === 'block') {
            closeModal();
        }
    });

    // 为旅行卡片添加淡入动画
    const travelCards = document.querySelectorAll('.travel-card');
    travelCards.forEach(card => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(30px)';
        card.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(card);
    });
});
