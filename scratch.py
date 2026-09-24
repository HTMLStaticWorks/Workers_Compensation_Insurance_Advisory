import glob, re

for f in glob.glob('*.html'):
    with open(f, 'r', encoding='utf-8') as file:
        content = file.read()
    
    # regex to match: <section class="...section-dark..."><div class="..." style="max-width: XXXpx;">
    def repl(m):
        # We replace max-width: XXXpx; with max-width: 1200px;
        # But we also want to ensure the paragraph below is constrained so it doesn't span 1200px
        # We will do that in a second step if necessary, but 1200px for h1 is good.
        return m.group(1) + '1200px' + m.group(2)
        
    # Find all max-width inside style attribute of a container inside section-dark
    pattern = re.compile(r'(<section[^>]*section-dark[^>]*>\s*<div[^>]*class=\"[^\"]*container[^\"]*\"[^>]*style=\"[^\"]*max-width:\s*)\d+px([^>]*>)', re.IGNORECASE)
    
    new_content = pattern.sub(repl, content)
    
    # Also some might not have it strictly formatted, let's just do a simpler search
    # If the file has a container in section-dark with max-width: 700px or 800px
    # Let's just find and replace max-width: 700px and max-width: 800px in the specific lines that come after section-dark
    
    if new_content != content:
        with open(f, 'w', encoding='utf-8') as file:
            file.write(new_content)
        print('Updated max-width in', f)
