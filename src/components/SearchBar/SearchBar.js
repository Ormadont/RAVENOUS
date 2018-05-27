import React from 'react';
import './SearchBar.css';

let sortByOptions = {};
sortByOptions["Best Match"] = "best_match";
sortByOptions["Highest Rated"] = "rating";
sortByOptions["Most Reviewed"] = "review_count";

class SearchBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      term:'',
      location:'',
      sortBy:'best_match'
    };
  }

  handleSortByChange(sortByOption) {
    this.setState = {
      sortBy: sortByOption
    }
  }

  getSortByClass(sortByOption) {
    if (this.state.sortBy === sortByOption) {
      return 'active'
    }
    else {
      return ''
    }
  }

  renderSortByOptions() {
    return Object.keys(sortByOptions).map( sortByOption => {
      let sortByOptionValue = sortByOptions[sortByOption];
      return <li key = {sortByOptionValue} className={this.getSortByClass(sortByOptionValue)}> {sortByOption} </li>;
    });
  }
  render() {
    return (
      <div className="SearchBar">
        <div className="SearchBar-sort-options">
          <ul>
            {this.renderSortByOptions()}
          </ul>
        </div>
        <div className="SearchBar-fields">
          <input placeholder="Search Businesses" />
          <input placeholder="Where?" />
        </div>
        <div className="SearchBar-submit">
          <a>Let&prime;s Go</a>
        </div>
      </div>
    )
  }
}
// module.exports = SearchBar;
export default SearchBar;
