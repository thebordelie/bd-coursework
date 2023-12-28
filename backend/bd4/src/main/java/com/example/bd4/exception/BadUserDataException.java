package com.example.bd4.exception;

public class BadUserDataException extends RuntimeException{
    public BadUserDataException() {
        super();
    }

    public BadUserDataException(String message) {
        super(message);
    }
}
