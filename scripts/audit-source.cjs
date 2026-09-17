const fs = require('fs');
const path = require('path');
const assert = require('assert/strict');
const root = path.resolve(__dirname, '..');
let checked = 0;
const files = [];
function walk(dir) {
  for (const item of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, item.name);
    if (item.isDirectory()) walk(full);
    else if (/\.(tsx?|css)$/.test(item.name)) files.push(full);
  }
}
for (const dir of ['app', 'components', 'lib']) walk(path.join(root, dir));
for (const file of files) {
  const text = fs.readFileSync(file, 'utf8');
  for (const match of text.matchAll(/["'`]((?:\/images\/|\/documents\/)[^"'`]+)["'`]/g)) {
    assert.ok(fs.existsSync(path.join(root, 'public', match[1])), `${file}: missing ${match[1]}`);
    checked++;
  }
}
const source = files.map(f => fs.readFileSync(f, 'utf8')).join('\n');
for (const stale of ['Actively interning', 'Ongoing work at Texas Instruments', 'TI Intern', 'Still figuring out exactly where I land']) {
  assert.ok(!source.includes(stale), `Stale copy: ${stale}`);
}
assert.ok(fs.readFileSync(path.join(root, 'app/page.tsx'), 'utf8').includes('{/* <Testimonials />'));
assert.ok(fs.readFileSync(path.join(root, 'components/sections/about/outside-of-work.tsx'), 'utf8').includes('title: "Hunting"'));
const pdf = fs.readFileSync(path.join(root, 'public/documents/mason-deal-resume-and-portfolio.pdf'));
assert.equal(pdf.subarray(0, 4).toString(), '%PDF');
console.log(`PASS: ${files.length} source files, ${checked} local asset references, current PDF, testimonials disabled, hunting added, stale internship copy absent.`);
