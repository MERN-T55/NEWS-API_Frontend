import React from "react";
import spinner from "./spinner.gif"; // Make sure to import your spinner GIF

class News extends React.Component {
  constructor(props) {
    super(props);
    console.log("i am constructor");
    this.state = { name1: [], count: 0, loading: false };
  }

  async fetchData() {
    console.log("Fetching data...");
    this.setState({ loading: true }); // Set loading state

    try {
      let res = await fetch(
        `https://newsapi.org/v2/everything?q=${this.props.newsName}&apiKey=3aad5964299e46df80136a78b25f63be`
      );
      let data = await res.json();
      let arr = data.articles.map((p) => {
        return (
          <div class="p-8" key={p.title}>
            {/* <!--Card 1--> */}
            <div class="max-w-sm rounded overflow-hidden shadow-lg">
              <img class="w-full" src={p.urlToImage} alt={p.title} />
              <div class="px-6 py-4">
                <div class="font-bold text-xl mb-2">{p.title}</div>
                <p class="text-gray-700 text-base">{p.description}</p>
                <button class="font-bold text-xl mb-2">
                  <a href={p.url}>Read more</a>
                </button>
              </div>
              <div class="px-6 pt-4 pb-2">
                <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#{p.author}</span>
                <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#{p.source.name}</span>
                <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#{p.publishedAt}</span>
              </div>
            </div>
          </div>
        );
      });
      console.log("Data fetched successfully");
      this.setState({ name1: arr, loading: false }); // Clear loading state
    } catch (error) {
      console.error("Error fetching data: ", error);
      this.setState({ loading: false }); // Clear loading state
    }
  }

  componentDidMount() {
    this.fetchData();
  }

  render() {
    return (
      <div class="p-2 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 gap-1">
        {this.state.loading ? (
          <img src={spinner} alt="Loading" style={{ width: "300px", margin: "auto" }} />
        ) : (
          this.state.name1
        )}
        <button
          class="font-bold text-xl mb-2"
          onClick={() => this.fetchData()} // Reload icon, calls fetchData when clicked
        >
          <i class="fas fa-sync"></i> <h1>Fetching DATA</h1>
        </button>
      </div>
    );
  }
}

export default News;
