import re

def html_to_jsx(html):
    # Basic replacements
    jsx = html.replace('class=', 'className=')
    jsx = jsx.replace('for=', 'htmlFor=')
    
    # Self-closing tags
    for tag in ['img', 'input', 'br', 'hr']:
        jsx = re.sub(rf'<{tag}([^>]*)>', lambda m: f'<{tag}{m.group(1).rstrip("/")} />' if not m.group(1).endswith('/') else m.group(0), jsx)
    
    # Comments
    jsx = re.sub(r'<!--(.*?)-->', r'{/* \1 */}', jsx, flags=re.DOTALL)
    
    return jsx

with open('.references/homePage.html', 'r', encoding='utf-8') as f:
    content = f.read()

# Extract body content
body_match = re.search(r'<body[^>]*>(.*?)</body>', content, re.DOTALL)
if body_match:
    body_content = body_match.group(1)
else:
    body_content = content

jsx_content = html_to_jsx(body_content)

with open('app/page.tsx', 'w', encoding='utf-8') as f:
    f.write('''import Image from "next/image";

export default function Home() {
  return (
    <>
''' + jsx_content + '''
    </>
  );
}
''')

# Now let's extract tailwind config
config_match = re.search(r'tailwind\.config = (\{.*?\});', content, re.DOTALL)
if config_match:
    import json
    # Use ast to safely evaluate the JS object? It might not be strict JSON.
    # We will just write a regex to extract colors.
pass

