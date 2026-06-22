#!/bin/bash
###############################################################################
# Rozgar Native Production Server Setup
#
# Run this once on the server before the first production release deploy.
#
# Usage:
#   ssh kisvps@YOUR_SERVER "bash -s" < server-setup.sh
###############################################################################

set -euo pipefail

APP_DIR="/home/kisvps/public_html/rozgar.app"
APP_USER="kisvps"
APP_GROUP="kisvps"
APP_PORT="3005"
SECRET_ENV_FILE="${HOME}/.config/rozgar.secret.env"

print_header() {
  echo
  echo "============================================================"
  echo "$1"
  echo "============================================================"
}

print_success() {
  echo "OK: $1"
}

print_warning() {
  echo "WARN: $1"
}

print_error() {
  echo "ERROR: $1" >&2
}

if [ "${USER:-}" != "$APP_USER" ]; then
  print_error "Run this script as user: $APP_USER"
  exit 1
fi

print_header "Step 1: Check Runtime Tools"

for tool in git curl tar gzip node npm; do
  if ! command -v "$tool" >/dev/null 2>&1; then
    print_error "$tool is not installed."
    exit 1
  fi
done

print_success "Required runtime tools are available"

print_header "Step 2: Create Application Directory"

mkdir -p "$APP_DIR"
chmod 755 "$APP_DIR"
cd "$APP_DIR"

print_success "Using application directory: $APP_DIR"

print_header "Step 3: Create Runtime Directories"

mkdir -p log tmp "$HOME/.config"
print_success "Runtime directories created"

print_header "Step 4: Create Production Environment File"

if [ ! -f "$APP_DIR/.env" ]; then
  cat > "$APP_DIR/.env" <<ENVFILE
NODE_ENV=production
PORT=$APP_PORT
NUXT_PUBLIC_CV_STORAGE_DRIVER=mysql
CV_DATABASE_HOST=localhost
CV_DATABASE_PORT=3306
CV_DATABASE_NAME=change_me
CV_DATABASE_USER=change_me
CV_DATABASE_PASSWORD=change_me
ENVFILE
  print_success "Created .env"
else
  print_warning ".env already exists"
fi

if [ ! -f "$SECRET_ENV_FILE" ]; then
  cat > "$SECRET_ENV_FILE" <<'ENVFILE'
# Optional secret overrides for production deploys.
ENVFILE
  print_success "Created $SECRET_ENV_FILE"
else
  print_warning "$SECRET_ENV_FILE already exists"
fi

chmod 600 "$APP_DIR/.env" "$SECRET_ENV_FILE"
chown "$APP_USER:$APP_GROUP" "$APP_DIR/.env" "$SECRET_ENV_FILE" 2>/dev/null || true

print_header "Step 5: Verify Node Runtime"

if ! command -v node >/dev/null 2>&1; then
  print_error "node is not installed."
  exit 1
fi

print_success "Node runtime is available"

print_header "Step 6: Final Checks"

echo "Application directory: $APP_DIR"
echo "Node version: $(node --version)"
echo "npm version: $(npm --version)"
echo "Suggested proxy target: 127.0.0.1:$APP_PORT"

print_success "Server bootstrap completed"
print_warning "Next: upload code, set real DB values in .env, and run ./bin/server-deploy"
