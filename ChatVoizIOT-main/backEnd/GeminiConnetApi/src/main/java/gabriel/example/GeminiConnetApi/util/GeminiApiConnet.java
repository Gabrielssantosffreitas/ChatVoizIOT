package gabriel.example.GeminiConnetApi.util;


import com.google.genai.Client;
import com.google.genai.types.GenerateContentResponse;

public class GeminiApiConnet {
        private Client client = new Client();
        public String geradorDeRespostas (String texto){
            GenerateContentResponse response = this.client.models.generateContent("gemini-2.5-flash",texto,null);
            return response.text();
        }
}
