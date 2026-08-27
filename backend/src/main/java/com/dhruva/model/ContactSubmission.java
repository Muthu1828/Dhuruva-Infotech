package com.dhruva.model;

import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotBlank;
import lombok.Data;

@Data
public class ContactSubmission {

    @NotBlank(message = "Name is required")
    private String name;

    private String company;

    @NotBlank(message = "Phone is required")
    private String phone;

    @NotBlank(message = "Email is required")
    @Email(message = "Valid email is required")
    private String email;

    private String serviceRequired;

    @NotBlank(message = "Message is required")
    private String message;
}
