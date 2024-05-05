JSON.stringify({
  year: Array.from(document.querySelectorAll('.problem-topic-tag')).map(
    (v) => v.innerText,
  ),
});
