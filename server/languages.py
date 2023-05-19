import pandas as pd

class Languages:
    def __init__(self) -> None:
        # read csv file
        self.df = pd.read_csv("./languages.csv")
        pass
    
    def get_language_code(self, languages : list) -> list:
        """returns the coresponding language codes"""
        language_codes = []
        for language in languages:
            language_row = self.df[self.df["Language"] == language]
            language_code = language_row.iloc[0]["Language Code"]
            language_codes.append(language_code)
        return language_codes

