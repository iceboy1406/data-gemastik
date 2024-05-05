const data = JSON.parse('[JSON Data Here]');
const allTags = [].concat(...Object.values(data));
const allTagsSet = new Set(allTags);
const baseTags = allTags.map((val) => val.split(':')[0]);
const baseTagsSet = new Set(baseTags);

const allTagsObj = Object.fromEntries(
  Array.from(allTagsSet)
    .map((val) => [val, allTags.filter((t) => t == val).length])
    .sort((a, b) => b[1] - a[1]),
);

const baseTagsObj = Object.fromEntries(
  Array.from(baseTagsSet)
    .map((val) => [val, baseTags.filter((t) => t == val).length])
    .sort((a, b) => b[1] - a[1]),
);

const allTagsJson = JSON.stringify(allTagsObj)
const baseTagsJson = JSON.stringify(baseTagsObj)