package com.example.demo.controller;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.Authentication;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.server.ResponseStatusException;

import com.example.demo.model.Usuario;
import com.example.demo.util.Result;
import com.example.demo.service.TokenService;

@RestController
public class AuthController {

    private final TokenService tokenService;

    public AuthController(TokenService tokenService) {
        this.tokenService = tokenService;
    }

    @PostMapping("/auth/login")
    public ResponseEntity<AuthResponse> token(@RequestBody AuthRequest authRequest) throws Exception {

        Result<String> generarToken = tokenService.generateToken(authRequest.getNombre(), authRequest.getContrasenia());

        if(!generarToken.fueExitoso()){
            throw new ResponseStatusException(HttpStatus.BAD_REQUEST, generarToken.getMensajeError());
        }
    
        return ResponseEntity.ok(AuthResponse.builder().token(generarToken.getResultado()).build());
    }

}
