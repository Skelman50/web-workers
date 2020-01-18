export default function() {
  this.addEventListener("message", e => {
    if (!e) return;
    let sum = 0;
    for (let i = 0; i < e.data; i++) {
      sum += Math.random();
    }
    postMessage(sum);
  });
}
