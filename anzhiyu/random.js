var posts=["2025/02/04/A-B高精度/","2025/04/08/倍增、ST表、RMQ/","2025/02/18/欧拉筛/","2025/01/18/hello-world/","2025/03/29/线段树/","2025/01/18/C-游戏开发-提瓦特幸存者/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };