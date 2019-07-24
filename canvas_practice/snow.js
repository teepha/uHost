window.onload = function() {
  // get the canvas and context and store in variables
  const canvas = document.getElementById("sky");
  const ctx = canvas.getContext("2d");

  // set canvas dimensions to window height and width
  const W = window.innerWidth;
  const H = window.innerHeight;
  canvas.width = W;
  canvas.height = H;

  // generate the snowflake and apply attributes
  const mf = 100; // max flakes
  const flakes = [];

  // loop through the empty flakes and apply attributes
  for (let i = 0; i < mf; i++) {
    flakes.push({
      x: Math.random() * W,
      y: Math.random() * H,
      r: Math.random() * 5 + 2, // min of 2px and max of 7px
      d: Math.random() + 1 // density of the flake=how quickly the snowflakes fall
    });
  }

  // draw flakes onto canvas
  drawFlakes = () => {
    ctx.clearRect(0, 0, W, H);
    ctx.fillStyle = "white";
    ctx.beginPath();
    for (let i = 0; i < mf; i++) {
      const f = flakes[i];
      ctx.moveTo(f.x, f.y);
      ctx.arc(f.x, f.y, f.r, 0, Math.PI * 2, true);
    }
    ctx.fill();
    moveFlakes();
  };

  // animate the flakes
  let angle = 0;
  moveFlakes = () => {
    angle += 0.01;
    for (i = 0; i < mf; i++) {
      // store current flake
      const f = flakes[i];

      // update X and Y coordinates of each snowflake
      f.y += Math.pow(f.d, 2) + 1;
      f.x += Math.sin(angle) * 2;

      // if the snowflake reaches the bottom, send a new one to the top
      if (f.y > H) {
        flakes[i] = { x: Math.random() * W, y: 0, r: f.r, d: f.d };
      }
    }
  };

  setInterval(drawFlakes, 50);
};
