package com.example.bd4.exception;

public class DeniedAccessException extends RuntimeException{
    public DeniedAccessException() {
        super();
    }

    public DeniedAccessException(String message) {
        super(message);
    }
}
