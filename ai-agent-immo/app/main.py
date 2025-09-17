from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
from typing import Optional, Dict
import requests
import json
from datetime import datetime

app = FastAPI(title="AI Agent Immobilier", version="1.0.0")

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

class ConversationRequest(BaseModel):
    message: str
    client_type: str = "acheteur"

class AgentResponse(BaseModel):
    response: str
    next_questions: list
    actions_suggested: list

OLLAMA_URL = "http://localhost:11434/api/generate"
MODEL_NAME = "llama3.1:8b"

@app.get("/")
async def root():
    return {"message": "🏠 Agent IA Immobilier", "status": "running"}

@app.post("/chat", response_model=AgentResponse)
async def chat_immobilier(request: ConversationRequest):
    system_prompt = f"""Tu es Marc, agent immobilier IA expert.
    
RÔLE : Aide les {request.client_type}s avec professionnalisme.
SPÉCIALITÉS : Qualification, infos biens, visites, conseils.
STYLE : Professionnel mais chaleureux."""

    try:
        response = requests.post(OLLAMA_URL, json={
            "model": MODEL_NAME,
            "prompt": f"{system_prompt}\n\nClient: {request.message}\n\nMarc:",
            "stream": False
        }, timeout=30)
        
        ai_response = response.json()["response"].strip()
        
        return AgentResponse(
            response=ai_response,
            next_questions=["Budget en tête ?", "Secteur préféré ?"],
            actions_suggested=["Planifier visite", "Envoyer infos"]
        )
    
    except Exception as e:
        raise HTTPException(status_code=500, detail=f"Erreur: {str(e)}")

if __name__ == "__main__":
    import uvicorn
    uvicorn.run(app, host="0.0.0.0", port=8000)
