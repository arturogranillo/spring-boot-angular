package com.example.demo.model;

import lombok.Builder;
import lombok.Data;
import java.util.Map;

@Data
@Builder
public class RespuestaError {
    private String mensaje;
}
