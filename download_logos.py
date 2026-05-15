import urllib.request
import os

files = [
    ("logo-1.png", "https://ui-avatars.com/api/?name=CBRE&background=fff&color=000&font-size=0.33"),
    ("logo-2.png", "https://ui-avatars.com/api/?name=JLL&background=fff&color=000&font-size=0.33"),
    ("logo-3.png", "https://ui-avatars.com/api/?name=SVS&background=fff&color=000&font-size=0.33")
]
public_dir = r"c:\Users\damel\OneDrive\Escritorio\JoseSierraalta\terravia\public"

for filename, url in files:
    try:
        urllib.request.urlretrieve(url, os.path.join(public_dir, filename))
        print(f"Downloaded {filename}")
    except Exception as e:
        print(f"Failed to download {filename}: {e}")
