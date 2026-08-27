package com.dhruva.controller;

import com.dhruva.model.ContactSubmission;
import com.dhruva.model.QuoteSubmission;
import com.dhruva.service.ExcelService;
import jakarta.validation.Valid;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.io.IOException;
import java.util.Map;

@RestController
@RequestMapping("/api")
public class FormController {

    private final ExcelService excelService;

    public FormController(ExcelService excelService) {
        this.excelService = excelService;
    }

    /** Health check */
    @GetMapping("/health")
    public ResponseEntity<Map<String, String>> health() {
        return ResponseEntity.ok(Map.of("status", "OK", "service", "Dhruva Infotech Backend"));
    }

    /** Receive Contact form submissions */
    @PostMapping("/contact")
    public ResponseEntity<Map<String, String>> submitContact(
            @Valid @RequestBody ContactSubmission submission) {
        try {
            excelService.saveContact(submission);
            return ResponseEntity.ok(Map.of(
                "status", "success",
                "message", "Contact enquiry saved successfully"
            ));
        } catch (IOException e) {
            return ResponseEntity.internalServerError().body(Map.of(
                "status", "error",
                "message", "Failed to save submission: " + e.getMessage()
            ));
        }
    }

    /** Receive Quote request form submissions */
    @PostMapping("/quote")
    public ResponseEntity<Map<String, String>> submitQuote(
            @Valid @RequestBody QuoteSubmission submission) {
        try {
            excelService.saveQuote(submission);
            return ResponseEntity.ok(Map.of(
                "status", "success",
                "message", "Quote request saved successfully"
            ));
        } catch (IOException e) {
            return ResponseEntity.internalServerError().body(Map.of(
                "status", "error",
                "message", "Failed to save submission: " + e.getMessage()
            ));
        }
    }
}
