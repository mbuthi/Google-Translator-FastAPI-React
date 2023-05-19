from googletrans import Translator

translator = Translator()

sentences = ['Bienvenu', 'Comment allez-vous', 'je vais bien']

result = translator.translate(sentences, src='fr', dest='am')
print(result[0].text)