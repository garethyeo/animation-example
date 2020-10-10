const easeOutExpo = (x) => { return x == 1 ? 1 : 1 - Math.pow(2, -10 * x) }

const animate = (s, e, d, a, f) => {
  const step = (t) => {
    if (s<e) a(s+(e-s)*easeOutExpo(t/d))
    else a(s-(s-e)*easeOutExpo(t/d))
    if (t<d) requestAnimationFrame(()=>step(++t))
    else f()
  }
  requestAnimationFrame(()=>step(0))
}

const setWidthForBar1 = (val) => {
  document.getElementById("bar1").setAttribute("style", `width: ${val}px`)
}

const setWidthForBar2 = (val) => {
  document.getElementById("bar2").setAttribute("style", `width: ${val}px`)
}

const finalCallbackForBar1 = () => {
  console.log("Bar 1 finished animation.")
}

const finalCallbackForBar2 = () => {
  console.log("Bar 2 finished animation.")
}

let flip = 0

document.getElementById("animate-btn").onclick = () => {  
  if (!flip) {
    animate(10, 300, 30, setWidthForBar1, finalCallbackForBar1)
    animate(300, 10, 30, setWidthForBar2, finalCallbackForBar2)
  } else {
    animate(300, 10, 30, setWidthForBar1, finalCallbackForBar1)
    animate(10, 300, 30, setWidthForBar2, finalCallbackForBar2)
  }
  
  flip = 1 - flip
}