from flask import Flask, render_template, request
from search import search

app = Flask(__name__)

@app.route("/", methods=["GET", "POST"])
def index():
    if request.method == "POST":
        query = request.form.get("query")
        results_df = search(query)
        results = format_results(results_df)
        return render_template("results.html", query=query, results=results)
    return render_template("index.html")

def format_results(results_df):
    results = []
    for index, row in results_df.iterrows():
        result = {
            "id": index + 1,
            "query": row["query"],
            "ranks": row["ranks"],
            "link": row["link"],
            "title": row["title"],
            "snippet": row["snippet"],
            "html": row["html"],
            "created": row["created"]
        }
        results.append(result)
    return results

if __name__ == "__main__":
    app.run()
