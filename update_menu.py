import os

path = "/mnt/c/Users/Lcfr/Desktop/KiOS Project"
os.chdir(path)

files = [
    'quick-start.html', 'installation.html', 'overview.html', 
    'kernel.html', 'memory.html', 'syscalls.html', 'contributing.html',
    'kilang.html', 'file-formats.html', 'kifs.html'
]

for f in files:
    if os.path.exists(f):
        with open(f, 'r', encoding='utf-8') as file:
            content = file.read()
        
        # Add id to aside
        content = content.replace('<aside class="sidebar">', '<aside class="sidebar" id="sidebar">')
        
        # Add button before nav
        content = content.replace(
            '<nav class="top-nav">',
            '<button class="mobile-menu-btn" onclick="toggleMenu()">☰</button>\n            <nav class="top-nav">'
        )
        
        # Add script before </body>
        content = content.replace(
            '<script src="js/main.js"></script>\n</body>',
            '<script src="js/main.js"></script>\n    <script>\n    function toggleMenu() {\n        document.getElementById("sidebar").classList.toggle("open");\n    }\n    </script>\n</body>'
        )
        
        with open(f, 'w', encoding='utf-8') as file:
            file.write(content)
        
        print(f"Updated {f}")

print("Done!")
