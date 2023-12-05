from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
import requests as r
import json


origins = [
    "http://localhost",
    "http://localhost:3000",
]

class GenerateReportVO(BaseModel):
    token: str
    ucode: str

app = FastAPI()
app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.post("/generate/report")
def generateReport(generateReportVO: GenerateReportVO):
    url = "https://api-v2.idwall.co/relatorios"
    payload = json.dumps({
        "matriz": <matriz>,
        "parametros": {
            "token_sdk": generateReportVO.token
        }
    })
    headers = {
        'Content-Type': 'application/json',
        'Authorization': <authorization.token>
    }

    response = r.request("POST", url, headers=headers, data=payload, verify=False)
    return response