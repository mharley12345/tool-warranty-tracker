import React, { Component } from 'react';
import PropTypes from 'prop-types';
import algoliasearch from 'algoliasearch/lite';
import {
  InstantSearch,
  Configure,
  Hits,
  Highlight,
  connectSearchBox,
} from 'react-instantsearch-dom';
import  Autocomplete from './Mentions'


const VirtalSearchBox = connectSearchBox(() => null);

const searchClient = algoliasearch(
  'PZOC7DTZQ5',
  '20450ecd5c6d060bf74997d783b6570e'
);

class Auto extends Component {
  state = {
    query: '',
  };

  onSuggestionSelected = (_, { suggestion }) => {
    this.setState({
      query: suggestion.name,
    });
  };

  onSuggestionCleared = () => {
    this.setState({
      query:"",
    });
  };

  render() {
    const { query } = this.state;

    return (
      <div className="container">
     
        <InstantSearch indexName="tools_2" searchClient={searchClient}>
          <Configure hitsPerPage={10} />
          <Autocomplete
            onSuggestionSelected={this.onSuggestionSelected}
            
            onSuggestionCleared={this.onSuggestionCleared}
          />
        </InstantSearch>

        <InstantSearch indexName="tools_2" searchClient={searchClient}>
          <VirtalSearchBox defaultRefinement={query} />
          <Hits hitComponent={Hit} />
        </InstantSearch>
      </div>
    );
  }
}

function Hit(props) {

  return (
    <div>
      <Highlight attribute='Id' hit={props.hit} />
    </div>
  );
}

Hit.propTypes = {
  hit: PropTypes.object.isRequired,
};

export default Auto;
