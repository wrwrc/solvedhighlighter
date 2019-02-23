import re

with open('data.md', 'r') as f:
    text = f.read()

urls = set(re.findall(r'https://leetcode.com/problems/[^/\)]+', text))
urls = sorted(url.replace('https://leetcode.com', '') for url in urls)

with open('script.template', 'r') as f:
    data = f.read().replace('{{urls}}', '"' + '",\n  "'.join(urls) + '"')

with open('../out/script.user.js', 'w') as f:
    f.write(data);
