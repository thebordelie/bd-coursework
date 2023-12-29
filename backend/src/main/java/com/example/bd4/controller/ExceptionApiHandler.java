package com.example.bd4.controller;

import com.example.bd4.exception.BadUserDataException;
import com.example.bd4.exception.DeniedAccessException;
import org.postgresql.util.PSQLException;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.RestControllerAdvice;

@RestControllerAdvice
public class ExceptionApiHandler {

    @ExceptionHandler(BadUserDataException.class)
    public ResponseEntity<String> badUserDataForRegisterException(BadUserDataException e) {
        return ResponseEntity
                .status(HttpStatus.BAD_REQUEST)
                .body(e.getMessage());
    }

    @ExceptionHandler(PSQLException.class)
    public ResponseEntity<String> invalidInputData(PSQLException e) {
        return ResponseEntity
                .status(HttpStatus.BAD_REQUEST)
                .body(e.getMessage());
    }

    @ExceptionHandler(DeniedAccessException.class)
    public ResponseEntity<String> accessDenied(DeniedAccessException e) {
        return ResponseEntity
                .status(HttpStatus.FORBIDDEN)
                .body(e.getMessage());
    }
}
