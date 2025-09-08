# syntax=docker/dockerfile:1.7-labs

FROM maven:3.9.8-eclipse-temurin-17 AS build
WORKDIR /workspace
COPY pom.xml .
RUN --mount=type=cache,target=/root/.m2 mvn -q -e -B -DskipTests dependency:go-offline
COPY src src
RUN --mount=type=cache,target=/root/.m2 mvn -q -e -B -DskipTests package

FROM eclipse-temurin:17-jre
ENV TZ=UTC
WORKDIR /app
RUN useradd -u 10001 -r -s /sbin/nologin spring
COPY --from=build /workspace/target/retail-app-0.0.1-SNAPSHOT.jar app.jar
EXPOSE 8081
USER 10001
ENTRYPOINT ["java","-XX:MaxRAMPercentage=75.0","-XX:+UseG1GC","-Djava.security.egd=file:/dev/./urandom","-jar","/app/app.jar"]


