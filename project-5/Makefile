APP?=retail-app
IMG?=retailco/$(APP):0.0.1
# DTR/MSR settings
DTR_DOMAIN?=dtr.example.com
DTR_ORG?=retailco
DTR_IMG?=$(DTR_DOMAIN)/$(DTR_ORG)/$(APP):0.0.1

.PHONY: build run stop clean docker-build docker-run docker-stop scan trivy-install push dtr-login dtr-tag push-dtr

build:
	mvn -B -DskipTests package

run:
	mvn spring-boot:run

docker-build:
	docker build -t $(IMG) .

docker-run:
	docker run --rm -p 8081:8081 $(IMG)

docker-stop:
	@echo "Use Ctrl+C or 'docker ps' and 'docker stop <id>'"

compose:
	docker compose up --build

scan:
	./scripts/scan.sh $(IMG)

push:
	docker push $(IMG)

# DTR helpers
dtr-login:
	@echo "Logging into $(DTR_DOMAIN) ..."
	docker login $(DTR_DOMAIN) -u $(DTR_USER) -p '$(DTR_PASS)'

dtr-tag:
	@echo "Tagging $(IMG) as $(DTR_IMG) ..."
	docker tag $(IMG) $(DTR_IMG)

push-dtr: dtr-tag
	docker push $(DTR_IMG)


