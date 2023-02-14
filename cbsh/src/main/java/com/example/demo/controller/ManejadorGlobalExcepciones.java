package com.example.demo.controller;

import com.example.demo.model.RespuestaError;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.HttpStatusCode;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.FieldError;
import org.springframework.validation.ObjectError;
import org.springframework.web.HttpRequestMethodNotSupportedException;
import org.springframework.web.bind.MethodArgumentNotValidException;
import org.springframework.web.bind.annotation.RestControllerAdvice;
import org.springframework.web.context.request.WebRequest;
import org.springframework.web.server.ResponseStatusException;
import org.springframework.web.servlet.mvc.method.annotation.ResponseEntityExceptionHandler;
import org.springframework.web.bind.annotation.ExceptionHandler;

import java.util.Map;
import java.util.TreeMap;

@RestControllerAdvice
public class ManejadorGlobalExcepciones {

    @ExceptionHandler(ResponseStatusException.class)
    public ResponseEntity<RespuestaError> handleStatusException(ResponseStatusException ex){
        RespuestaError respuesta = RespuestaError.builder()
            .mensaje(ex.getReason())
            .build();

        return ResponseEntity.badRequest().body(respuesta);
    }
}