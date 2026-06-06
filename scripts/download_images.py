import urllib.request
import os

files = [
    ("hero-bg.jpg", "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?q=80&w=2075&auto=format&fit=crop"),
    ("logo-1.png", "https://logo.clearbit.com/cbre.com"),
    ("logo-2.png", "https://logo.clearbit.com/jll.com"),
    ("logo-3.png", "https://logo.clearbit.com/savills.com"),
    ("property-1.jpg", "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=2070&auto=format&fit=crop"),
    ("property-2.jpg", "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=2053&auto=format&fit=crop"),
    ("property-3.jpg", "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?q=80&w=2070&auto=format&fit=crop"),
    ("ecosystem-interior.jpg", "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2070&auto=format&fit=crop")
]

public_dir = r"c:\Users\damel\OneDrive\Escritorio\JoseSierraalta\terravia\public"
os.makedirs(public_dir, exist_ok=True)

req_headers = {
    'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64)'
}

for filename, url in files:
    try:
        req = urllib.request.Request(url, headers=req_headers)
        with urllib.request.urlopen(req) as response, open(os.path.join(public_dir, filename), 'wb') as out_file:
            data = response.read()
            out_file.write(data)
        print(f"Downloaded {filename}")
    except Exception as e:
        print(f"Failed to download {filename}: {e}")
