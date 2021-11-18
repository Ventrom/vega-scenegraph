export default function(event, el) {
  const rect = el.getBoundingClientRect();
  return [
    (event.clientX - rect.left - (el.clientLeft || 0)) / (Math.round(rect.width) / el.clientWidth),
    (event.clientY - rect.top - (el.clientTop || 0)) / (Math.round(rect.height) / el.clientHeight)
  ];
}
