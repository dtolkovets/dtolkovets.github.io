# build-site.ps1 — produce the published tree in docs\
#
# GitHub Pages serves this repository from main -> /docs, so docs\ is the
# ONLY folder that gets a web address. Everything else here is visible on
# github.com but is not part of the website.
#
# uploads\ and archive\ are reference material: excluded from the build and
# from git (see .gitignore). Portfolio.dc.html is the source of record and
# keeps its name; it becomes index.html only in the output.
#
# Re-run after any change to the source files, then commit and push.
# docs\ is generated — never edit it by hand, your edits will be wiped.

$ErrorActionPreference = 'Stop'
$src  = $PSScriptRoot
$out  = Join-Path $src 'docs'

if (Test-Path $out) { Remove-Item $out -Recurse -Force }
New-Item -ItemType Directory -Path $out | Out-Null

# Entry file, renamed on the way out
Copy-Item (Join-Path $src 'Portfolio.dc.html') (Join-Path $out 'index.html')

# Runtime, data, static SEO files
foreach ($f in 'support.js','trial-data.js','robots.txt','sitemap.xml','404.html') {
    Copy-Item (Join-Path $src $f) (Join-Path $out $f)
}

# Media, documents, favicons, vendored libraries
Copy-Item (Join-Path $src 'assets') (Join-Path $out 'assets') -Recurse

# GitHub Pages: do not run the files through Jekyll
New-Item -ItemType File -Path (Join-Path $out '.nojekyll') | Out-Null

# Fail loudly if the vendored runtime is missing — without it the site
# silently falls back to unpkg and needs a network connection to render.
foreach ($v in 'react.production.min.js','react-dom.production.min.js') {
    $p = Join-Path $out "assets\vendor\$v"
    if (-not (Test-Path $p)) { Write-Warning "MISSING vendored library: assets\vendor\$v - the site will fall back to unpkg." }
}

# Nothing in the output may point back at the excluded folders.
$leaks = Select-String -Path (Join-Path $out '*.html'),(Join-Path $out '*.js') -Pattern 'uploads/|archive/' -SimpleMatch -ErrorAction SilentlyContinue
if ($leaks) {
    Write-Warning "References to excluded folders found in docs:"
    $leaks | ForEach-Object { Write-Warning ("  {0}:{1}" -f $_.Filename, $_.LineNumber) }
}

$size  = '{0:N1} MB' -f ((Get-ChildItem $out -Recurse -File | Measure-Object Length -Sum).Sum / 1MB)
$count = (Get-ChildItem $out -Recurse -File).Count
Write-Host "docs\ built: $count files, $size"
Write-Host ""
Write-Host "Preview locally:"
Write-Host "  Start-Process -WindowStyle Hidden -FilePath (Get-Command python.exe).Source -WorkingDirectory '$out' -ArgumentList '-m http.server 8001 --bind localhost'"
Write-Host "Then publish:"
Write-Host "  git add -A ; git commit -m 'update site' ; git push"
