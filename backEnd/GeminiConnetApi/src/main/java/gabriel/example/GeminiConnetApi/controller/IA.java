package gabriel.example.GeminiConnetApi.controller;

import gabriel.example.GeminiConnetApi.DTO.response.IAPostResponse;
import gabriel.example.GeminiConnetApi.util.GeminiApiConnet;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
@RestController

@CrossOrigin("*")
@RequestMapping("/api")
public class IA {
    @PostMapping("/ia")
    public ResponseEntity<IAPostResponse> ia (@RequestBody String texto){
        String resposta = new GeminiApiConnet().geradorDeRespostas(texto);
        return  ResponseEntity.ok().body(new IAPostResponse(resposta));
    }
}
