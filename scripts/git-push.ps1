# One-time setup + push to glasz-cloud/studentsabroad main
# Run from repo root: .\scripts\git-push.ps1

$ErrorActionPreference = "Stop"
Set-Location $PSScriptRoot\..

$remoteUrl = "https://github.com/glasz-cloud/studentsabroad.git"

if (-not (Test-Path .git)) {
    git init
    git branch -M main
}

$existing = git remote get-url origin 2>$null
if (-not $existing) {
    git remote add origin $remoteUrl
} elseif ($existing -ne $remoteUrl) {
    git remote set-url origin $remoteUrl
}

Write-Host "Remote:" (git remote -v)
Write-Host ""
Write-Host "Status:"
git status

$untracked = git status --porcelain
if ($untracked) {
    git add -A
    git commit -m @"
Compact hero, Hungary-wide messaging, and 21st.dev-style UI polish.

Hero fits above the fold; copy covers universities nationwide, not only Budapest.
"@
}

git fetch origin 2>$null
$hasRemoteMain = git rev-parse --verify origin/main 2>$null
if ($LASTEXITCODE -eq 0) {
    git pull --rebase origin main
}

git push -u origin main
Write-Host ""
Write-Host "Done. Future pushes: git push"
