from pydantic import BaseModel

class Text(BaseModel):
    text : str
    dest_lang : list[str]