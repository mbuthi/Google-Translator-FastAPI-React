from googletrans import Translator
from languages import Languages

class TranslatorClass:
    def __init__(self):
        # create a instance of the Translator class
        self.translator = Translator()
        # create a instance of the Languages class
        self.languages = Languages()
    
    def translate_text(self, text : dict):
        """receives text to translate and returns the translated text"""
        lang_codes = []
        translated_text = {}
        text_to_translate = text.text
        dest_languages = text.dest_lang
        if dest_languages is not None:
            lang_codes = self.languages.get_language_code(dest_languages)
        
        for i in range(len(lang_codes)):
            translated_text[dest_languages[i]] = self.translator.translate(
                text=text_to_translate,
                dest=lang_codes[i]).text
        
        return translated_text
        
