const fs = require('fs');

const files = [
  'assets/css/style.css', 
  'index.html', 
  'dashboard.html', 
  'home-2.html', 
  'about.html', 
  'services.html', 
  'coverage.html', 
  'claims-risk.html', 
  'resources.html', 
  'contact.html', 
  'login.html', 
  'register.html', 
  'assets/js/main.js', 
  'assets/js/dashboard.js', 
  'assets/js/animations.js'
];

const replacements = [
    { from: /orange-primary/g, to: 'blue-primary' },
    { from: /orange-hover/g, to: 'blue-hover' },
    { from: /orange-light/g, to: 'blue-light' },
    { from: /text-orange/g, to: 'text-blue' },
    { from: /#E65C00/gi, to: '#0066CC' },
    { from: /#FF7315/gi, to: '#0052A3' },
    { from: /230, 92, 0/g, to: '0, 102, 204' },
    { from: /Sophisticated Orange/gi, to: 'Sophisticated Blue' }
];

files.forEach(f => {
  if (fs.existsSync(f)) {
    let content = fs.readFileSync(f, 'utf8');
    let original = content;
    
    replacements.forEach(r => {
        content = content.replace(r.from, r.to);
    });
    
    if (content !== original) {
        fs.writeFileSync(f, content, 'utf8');
        console.log('Updated theme in ' + f);
    }
  }
});
