# RetailCo Spring Boot on Docker (Project 5)

Minimal Spring Boot app for a retail company, containerized and scanned.

## Prerequisites
- Java 17, Maven 3.9+
- Docker Desktop
- (Optional) Trivy for local scans

## Build & Run locally
```bash
mvn -B -DskipTests package
mvn spring-boot:run
curl http://localhost:8081/hello
```

## Containerize
```bash
# Build image
make docker-build IMG=retailco/retail-app:0.0.1
# Run image
make docker-run IMG=retailco/retail-app:0.0.1
# Or with compose
make compose
```

## Scan image with Trivy
```bash
make scan IMG=retailco/retail-app:0.0.1
# Report saved under reports/
```

## Push to Docker Trusted Registry (DTR)
```bash
# Login
docker login <dtr-domain> -u <user> -p '<password>'
# Tag and push
export DTR=<dtr-domain>/<org-or-namespace>
docker tag retailco/retail-app:0.0.1 $DTR/retail-app:0.0.1
docker push $DTR/retail-app:0.0.1
```

## CI
GitHub Actions builds the image and runs Trivy on pushes/PRs to `main`.

## Endpoints
- `/` summary
- `/hello` greeting
- `/actuator/health` health
