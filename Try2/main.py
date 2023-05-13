from flask import Flask, render_template, request
from search import search

app = Flask(__name__)

@app.route("/", methods=["GET", "POST"])
def index():
    if request.method == "POST":
        query = request.form.get("query")
        results_df = search(query)
        results = results_df.to_dict('records')
        return render_template("results.html", query=query, results=results)
    return render_template("index.html")

if __name__ == "__main__":
    app.run()
