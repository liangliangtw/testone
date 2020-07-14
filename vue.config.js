module.exports = {
  devServer: {
    proxy: {
      "/api": {
        target: "https://119.equiplink.cn", //路径
        ws: true,
        changeOrigin: true, //本地会虚拟一个服务端接受你的请求并代你发送请求
        pathRewite: {
          // 重定向，路径重写
          "^/api": "/" //^首匹配
        }
      }
    }
  }
};
