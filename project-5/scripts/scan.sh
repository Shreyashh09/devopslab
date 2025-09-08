#!/usr/bin/env bash
set -euo pipefail

IMAGE_NAME=${1:-retailco/retail-app:0.0.1}

if ! command -v trivy >/dev/null 2>&1; then
  echo "Trivy not found. Installing locally..." >&2
  curl -sfL https://raw.githubusercontent.com/aquasecurity/trivy/main/contrib/install.sh | sh -s -- -b ./bin
  export PATH="$(pwd)/bin:$PATH"
fi

mkdir -p reports
echo "Scanning image: ${IMAGE_NAME}"
trivy image --scanners vuln,secret,config --severity HIGH,CRITICAL --format table --output reports/trivy-${IMAGE_NAME//[:\/]/_}.txt ${IMAGE_NAME}
echo "Report written to reports/trivy-${IMAGE_NAME//[:\/]/_}.txt"


