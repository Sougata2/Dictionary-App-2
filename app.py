from flask import Flask, render_template, request
import requests

app = Flask(__name__)


@app.route('/', methods=["GET", "POST"])
def index():
    if request.method == "POST":
        word = request.form.get("searchBox").lower()
        response = requests.get(f"https://api.dictionaryapi.dev/api/v2/entries/en/{word}")
        response = response.json()
        word = word.title()
        if type(response) == dict and "message" in response.keys():
            return render_template("index.html", error=True,  word=word, message=response["title"])

        return render_template("index.html", error=False, word=word, meanings=response)
    return render_template('index.html')


if __name__ == "__main__":
    app.run(debug=True)
