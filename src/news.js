// News.js

import React from "react";
import spinner from "./spinner.gif"; // Make sure to import your spinner GIF
import { Link } from "react-router-dom";

class News extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      articles: [],
      loading: false,
      searchTerm: "",
    };
  }

  async fetchData() {
    this.setState({ loading: true });

    try {
      let url;

      if (this.state.searchTerm) {
        // If there's a search term, fetch data based on the search term
        url = `https://newsapi.org/v2/everything?q=${encodeURIComponent(this.state.searchTerm)}&apiKey=3aad5964299e46df80136a78b25f63be`;
      } else {
        // Fetch data based on the default news category (this.props.newsName)
        url = `https://newsapi.org/v2/everything?q=${this.props.newsName}&apiKey=3aad5964299e46df80136a78b25f63be`;
      }

      let res = await fetch(url);
      let data = await res.json();
      let articles = data.articles.map((article) => {
        return (
          <div className="p-8" key={article.title}>
            <div className="max-w-sm rounded overflow-hidden shadow-lg">
              <img className="w-full" src={article.urlToImage} alt={article.title} />
              <div className="px-6 py-4">
                <div className="font-bold text-xl mb-2">{article.title}</div>
                <p className="text-gray-700 text-base">{article.description}</p>
                <button className="font-bold text-xl mb-2">
                  <a href={article.url}>Read more</a>
                </button>
              </div>
              <div className="px-6 pt-4 pb-2">
                <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#{article.author}</span>
                <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#{article.source.name}</span>
                <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#{article.publishedAt}</span>
              </div>
            </div>
          </div>
        );
      });

      this.setState({ articles, loading: false });
    } catch (error) {
      console.error("Error fetching data: ", error);
      this.setState({ loading: false });
    }
  }

  handleSearchChange = (event) => {
    this.setState({ searchTerm: event.target.value });
  }

  handleSearchSubmit = (event) => {
    event.preventDefault();
    this.fetchData();
  }

  componentDidMount() {
    this.fetchData();
  }

  render() {
    return (
      <div className="mx-4 p-2 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 gap-1">
        <form onSubmit={this.handleSearchSubmit} className="flex mb-4">
          <input
            type="text"
            value={this.state.searchTerm}
            onChange={this.handleSearchChange}
            placeholder="Search for news..."
            className="text-base h-10"
          />
          <button type="submit" className="bg-blue-500 text-white p-2 ml-2 rounded h-10">
            Search
          </button>
        </form>

        {this.state.loading ? (
          <img src={spinner} alt="Loading" style={{ width: "300px", margin: "auto" }} />
        ) : (
          this.state.articles
        )}
        <Link to="/reload" className="font-bold text-xl mb-2">
          <i className="fas fa-sync"></i> <h1>Fetching DATA</h1>
        </Link>
      </div>
    );
  }
}

export default News;
