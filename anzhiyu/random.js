var posts=["2025/01/18/hello-world/","2025/01/18/C-游戏开发-提瓦特幸存者/","2025/02/04/A-B高精度/","2025/02/18/欧拉筛/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };