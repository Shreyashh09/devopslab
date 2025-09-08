package com.retailco.retailapp.web;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import java.time.Instant;
import java.util.Map;

@RestController
public class HelloController {

    @GetMapping("/")
    public Map<String, Object> root() {
        return Map.of(
                "service", "retail-app",
                "status", "ok",
                "timestamp", Instant.now().toString()
        );
    }

    @GetMapping("/hello")
    public Map<String, Object> hello() {
        return Map.of(
                "message", "Welcome to RetailCo!",
                "timestamp", Instant.now().toString()
        );
    }
}


