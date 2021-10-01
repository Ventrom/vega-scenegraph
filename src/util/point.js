export default function(event, el) {
  if (isFinite(event.offsetX) && !isNaN(event.offsetX)) {
    return [
      event.offsetX - (el.clientLeft || 0),
      event.offsetY - (el.clientTop || 0)
    ];
  }
  var rect = el.getBoundingClientRect();
  return [
    event.clientX - rect.left - (el.clientLeft || 0),
    event.clientY - rect.top - (el.clientTop || 0)
  ];
}
