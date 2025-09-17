from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
from typing import Optional, Dict
import requests
import json
import os
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

@app.get("/")
async def root():
    return {"message": "🏠 Agent IA Immobilier", "status": "running"}

@app.post("/chat", response_model=AgentResponse)
async def chat_immobilier(request: ConversationRequest):
    # Simple response for cloud deployment
    responses = {
        "acheteur": f"Bonjour ! Je suis Marc, votre conseiller immobilier IA. Vous cherchez {request.message}. Puis-je connaître votre budget et vos préférences de secteur ?",
        "vendeur": f"Enchanté ! Pour votre projet de vente concernant {request.message}, j'aimerais connaître plus de détails sur votre bien."
    }
    
    response_text = responses.get(request.client_type, "Bonjour ! Comment puis-je vous aider avec votre projet immobilier ?")
    
    return AgentResponse(
        response=response_text,
        next_questions=["Quel est votre budget ?", "Secteur préféré ?", "Timing d'achat ?"],
        actions_suggested=["Planifier visite", "Envoyer brochures", "Rappel dans 3 jours"]
    )

if __name__ == "__main__":
    import uvicorn
    port = int(os.environ.get("PORT", 8000))
    uvicorn.run(app, host="0.0.0.0", port=port)

from veille_marche import get_veille_data

@app.get("/veille-marche")
async def get_veille_marche():
    try:
        data = get_veille_data()
        return {"success": True, "data": data}
    except Exception as e:
        return {"success": False, "error": str(e)}
