from fastapi import FastAPI
from custom_translator import TranslatorClass
from schemas import Text
from fastapi.middleware.cors import CORSMiddleware


app = FastAPI()

origins = [
    "http://localhost:3000",
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


@app.post("/translate", response_model=dict)
def translate_text(text : Text):
    """returns a translated form of text"""
    print(text)
    trans = TranslatorClass()
    translated_text = trans.translate_text(text=text)
    return translated_text