const express = require('express');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.static(path.join(__dirname, 'public')));

// API: 徐佳乐个人信息
app.get('/api/profile', (req, res) => {
  res.json({
    name: '徐佳乐',
    title: '服装设计师 · 应届毕业生',
    bio: '内蒙古工业大学轻工与纺织学院服装设计与工程专业2026届毕业生。热爱服装设计，关注民族文化的现代表达与功能性纺织品的创新应用。正在寻找服装设计/面料开发方向的就业机会。',
    education: {
      school: '内蒙古工业大学',
      college: '轻工与纺织学院',
      degree: '本科',
      major: '服装设计与工程',
      class: '服装22-1',
      studentId: '202211805007',
      graduationYear: 2026,
      advisor: '史慧 教授'
    },
    graduationProject: {
      title: '蒙古族服饰配色特征的小学生校服系列设计——自然色',
      description: '以蒙古族传统"五色说"色彩哲学为灵感，探索传统配色在现代校服设计中的创新应用',
      colors: ['呼和蓝', '查干白', '诺干绿', '乌兰红', '西尔黄'],
      series: ['春季工装款', '制式校服款', '夏季运动款', '秋季运动款']
    },
    skills: {
      design: ['女装/男装设计', '系列企划', '趋势调研', '手绘效果图', '款式图绘制'],
      tech: ['服装CAD制版（富怡/ET）', 'Style3D虚拟试衣', '工艺单制作', '面辅料性能评估', '国家标准检测（GB）'],
      software: ['Adobe Photoshop', 'Adobe Illustrator', 'Style3D', '服装CAD', 'Xmind'],
      coding: ['Node.js', 'HTML/CSS', 'AI API集成', 'Git', 'WPS Office']
    },
    contact: {
      phone: '17280343262',
      email: '860824847@qq.com',
      location: '内蒙古 · 呼和浩特'
    }
  });
});

// API: 作品列表
app.get('/api/projects', (req, res) => {
  res.json([
    {
      id: 1,
      title: '毕业设计：蒙古族服饰配色——自然色',
      category: '毕业设计',
      year: 2026,
      description: '以蒙古族"五色说"为灵感的小学生校服系列设计，包含4大系列完整设计',
      tags: ['校服设计', '蒙古族配色', '系列设计', 'Style3D'],
      coverImage: null
    },
    {
      id: 2,
      title: '雅戈尔双省双褶休闲男西裤',
      category: '课程设计',
      year: 2025,
      description: '独立完成CAD结构图、毛样板、效果图、款式图、工艺流程图全套技术文档',
      tags: ['男装', '西裤', 'CAD制版', '工艺设计'],
      coverImage: null
    },
    {
      id: 3,
      title: '蒙古袍效果图',
      category: '课程作业',
      year: 2024,
      description: '使用Adobe Illustrator完成的蒙古族传统服饰效果图设计',
      tags: ['AI', '民族服饰', '效果图'],
      coverImage: null
    },
    {
      id: 4,
      title: '实习：江苏苏创纺织新材料',
      category: '毕业实习',
      year: 2026,
      description: '生产部/技术部/质量检测中心轮岗，功能性面料全流程实践',
      tags: ['轮岗实习', '面料检测', '研发辅助', '功能性纺织品'],
      coverImage: null
    },
    {
      id: 5,
      title: '钩针编织作品',
      category: '手工艺',
      year: 2024,
      description: '手工钩针编织实践，探索传统手工艺与现代审美的结合',
      tags: ['钩针', '手工艺', '编织'],
      coverImage: null
    },
    {
      id: 6,
      title: '清正廉洁主题海报',
      category: '平面设计',
      year: 2024,
      description: 'Adobe Illustrator完成的廉政主题平面设计作品',
      tags: ['AI', '海报设计', '平面设计'],
      coverImage: null
    }
  ]);
});

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.listen(PORT, () => {
  console.log(`🧵 徐佳乐 · 服装设计作品集: http://localhost:${PORT}`);
  console.log(`📡 个人信息API: http://localhost:${PORT}/api/profile`);
  console.log(`📁 作品列表API: http://localhost:${PORT}/api/projects`);
});
