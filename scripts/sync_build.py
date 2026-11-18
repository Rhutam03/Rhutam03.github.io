"""Copy the checked Vite output to this repository's GitHub Pages root."""

from pathlib import Path
import shutil

root = Path(__file__).resolve().parents[1]
build = root / "site-source" / "dist"
required = [
    "index.html", "CNAME", "portfolio-preview.png",
    "Rhutam_Mahajan_one_page_resume.pdf", "academic_cv.pdf",
    "Rhutam_Mahajan_Data_Science_Resume.pdf",
    "Rhutam_Mahajan_Data_Engineering_Resume.pdf",
    "Rhutam_Mahajan_AI_ML_Engineering_Resume.pdf",
]
for name in required:
    path = build / name
    if not path.is_file() or path.stat().st_size == 0:
        raise SystemExit(f"Missing build output: {path}. Run npm run build in site-source first.")

for path in build.iterdir():
    dest = root / path.name
    if path.is_dir():
        # Retain previously published hashed assets for cached pages.
        shutil.copytree(path, dest, dirs_exist_ok=True)
    else:
        shutil.copy2(path, dest)
print("Copied the Vite build to the GitHub Pages root.")
