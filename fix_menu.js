const fs = require('fs');

const files = ["index.html", "about.html", "services.html", "coverage.html", "claims-risk.html", "resources.html", "contact.html", "home-2.html"];

files.forEach(f => {
  if (fs.existsSync(f)) {
    let content = fs.readFileSync(f, 'utf8');
    
    // The duplicate block starts right after the new mobile menu ends with </div>
    // It contains <nav class="mobile-nav-links"> and ends with Access Client Portal</a> </div>
    
    const regex = /(<a href="login\.html" class="btn btn-primary" style="text-align: center;">Login<\/a>\s*<\/div>)\s*<nav class="mobile-nav-links">[\s\S]*?<a href="dashboard\.html"[^>]*>Access Client Portal<\/a>\s*<\/div>/;
    
    if (regex.test(content)) {
        content = content.replace(regex, '$1');
        fs.writeFileSync(f, content, 'utf8');
        console.log('Fixed ' + f);
    }
  }
});
