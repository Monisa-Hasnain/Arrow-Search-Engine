import requests
from requests.exceptions import RequestException
import pandas as pd
from datetime import datetime
from urllib.parse import quote_plus
import settings
from storage import MySQLDBStorage, create_results_table

def search_api(query, pages=int(settings.RESULT_COUNT/10)):
    results = []
    for i in range(0, pages):
        start = i*10+1
        url = settings.SEARCH_URL.format(
            key=settings.SEARCH_KEY,
            cx=settings.SEARCH_ID,
            query=quote_plus(query),
            start=start
        )
        response = requests.get(url)
        data = response.json()
        results += data["items"]
    res_df = pd.DataFrame.from_dict(results)
    res_df["ranks"] = list(range(1, res_df.shape[0] + 1))
    res_df = res_df[["link", "ranks", "snippet", "title"]]
    return res_df

def scrape_page(links):
    html = []
    for link in links:
        print(link)
        try:
            data = requests.get(link, timeout=5)
            html.append(data.text)
        except RequestException:
            html.append("")
    return html

def search(query):
    columns = ["query", "ranks", "link", "title", "snippet", "html", "created"]
    storage = MySQLDBStorage()

    stored_results = storage.query_results(query)
    if stored_results.shape[0] > 0:
        stored_results["created"] = pd.to_datetime(stored_results["created"])
        return stored_results[columns]

    print("No results in database. Using the API.")
    results = search_api(query)
    html = scrape_page(results["link"])
    results["html"] = html
    results = results[results["html"].str.len() > 0].copy()
    results["query"] = query
    results["created"] = datetime.utcnow().strftime("%Y-%m-%d %H:%M:%S")
    results = results[columns]
    results.apply(lambda x: storage.insert_row(x), axis=1)
    print(f"Inserted {results.shape[0]} records.")
    return results