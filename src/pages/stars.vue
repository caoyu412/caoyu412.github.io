<template>
  <div class="content">
    <nav-menu></nav-menu>
    <div class="htmleaf-container">
      <canvas id="canvas"></canvas>
    </div>
  </div>
</template>

<script>
import NavMenu from '../components/Navmenu'

export default {
  data() {
    return {
    };
  },
  methods: {
    init() {
      const _this = this
      const canvas = document.getElementById('canvas')
      const ctx = canvas.getContext('2d') // 创建context对象 getContext("2d") 对象是内建的 HTML5 对象，拥有多种绘制路径、矩形、圆形、字符以及添加图像的方法
      canvas.width = window.innerWidth
      const w = canvas.width
      canvas.height = window.innerHeight
      const h = canvas.height
      const hue = 217 // 色调
      const stars = []
      let count = 0
      const maxStars = 1400

      const canvas2 = document.createElement('canvas')
      const ctx2 = canvas2.getContext('2d')
      canvas2.width = 100
      canvas2.height = 100
      const half = canvas2.width / 2
      const gradient2 = ctx2.createRadialGradient(half, half, 0, half, half, half) // createRadialGradient(x,y,r,x1,y1,r1) - 创建一个径向/圆渐变
      gradient2.addColorStop(0.025, '#fff'); // addColorStop()方法指定颜色停止，参数使用坐标来描述，可以是0至1.
      gradient2.addColorStop(0.1, 'hsl(' + hue + ', 61%, 33%)');
      gradient2.addColorStop(0.25, 'hsl(' + hue + ', 64%, 6%)');
      gradient2.addColorStop(1, 'transparent');

      ctx2.fillStyle = gradient2;
      ctx2.beginPath();
      ctx2.arc(half, half, half, 0, Math.PI * 2);
      ctx2.fill();

      const Star = function () {
        this.orbitRadius = _this.random((w / 2) - 50);
        this.radius = _this.random(100, this.orbitRadius) / 10;
        this.orbitX = w / 2;
        this.orbitY = h / 2;
        this.timePassed = _this.random(0, maxStars);
        this.speed = _this.random(this.orbitRadius) / 100000;
        this.alpha = _this.random(2, 10) / 10;

        count++;
        stars[count] = this;
      }

      Star.prototype.draw = function () {
        const x = Math.sin(this.timePassed + 1) * this.orbitRadius + this.orbitX
        const y = Math.cos(this.timePassed) * this.orbitRadius / 2 + this.orbitY
        const twinkle = _this.random(10)

        if (twinkle === 1 && this.alpha > 0) {
          this.alpha -= 0.05;
        } else if (twinkle === 2 && this.alpha < 1) {
          this.alpha += 0.05;
        }

        ctx.globalAlpha = this.alpha;
        ctx.drawImage(canvas2, x - this.radius / 2, y - this.radius / 2, this.radius, this.radius);
        this.timePassed += this.speed;
      }

      for (let i = 0; i < maxStars; i++) {
        new Star();
      }
      const animation = function () {
        ctx.globalCompositeOperation = 'source-over'; // 设置或返回如何将一个源（新的）图像绘制到目标（已有）的图像上
        ctx.globalAlpha = 0.8;
        ctx.fillStyle = 'hsla(' + hue + ', 64%, 6%, 1)'; // 色调 饱和度 亮度 透明度 -- 设置fillStyle属性可以是CSS颜色，渐变，或图案。fillStyle 默认设置是#000000（黑色）
        ctx.fillRect(0, 0, w, h) // fillRect(x,y,width,height) 方法定义了矩形当前的填充方式。

        ctx.globalCompositeOperation = 'lighter';
        for (let i = 1, l = stars.length; i < l; i++) {
          stars[i].draw();
        }

        window.requestAnimationFrame(animation); // 告诉浏览器您希望执行动画并请求浏览器调用指定的函数在下一次重绘之前更新动画。该方法使用一个回调函数作为参数，这个回调函数会在浏览器重绘之前调用
      }
      animation()
    },
    random(min, max) {
      if (arguments.length < 2) {
        max = min;
        min = 0;
      }

      if (min > max) {
        const hold = max;
        max = min;
        min = hold;
      }

      return Math.floor(Math.random() * (max - min + 1)) + min;
    },
  },
  components: {
    NavMenu,
  },
  mounted() {
    this.init()
  },
};
</script>

<style scoped>
  .content {
    width: 100%;
    height: 100%;
  }
  .htmleaf-container {
    width: 100%;
    height: 100%;
  }
  #canvas {
    width: 100%;
    height: 100%;
  }
</style>
