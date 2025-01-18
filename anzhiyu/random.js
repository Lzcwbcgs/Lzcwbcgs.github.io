var posts=["2025/01/18/C-游戏开发-提瓦特幸存者/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };