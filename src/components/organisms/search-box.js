import React from 'react';
import Button from '../atoms/button.js';
import Result from '../molecules/result.js';
import Text from '../atoms/text.js';

// const apiUrl = "https://api.thecatapi.com/v1/breeds/search"

export default class SearchBox extends React.Component {
	constructor(props){
		super(props);

		this.state = {
			length: 1,
			results: [
				{
					imageSrc: "https://placekitten.com/200/200",
					breedName: 'Gato',
					breedDescription: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean sit amet consequat ipsum. Vivamus suscipit erat id nisi porta, sed pellentesque nibh faucibus. Pellentesque nec turpis aliquet mauris sagittis pharetra nec sodales orci. Nullam et ante a ligula luctus placerat in in ligula.',
					temperaments: [
						{
							ratingType: "Affection Level",
							stars: [1, 2, 3, 4, 5]
						},
						{
							ratingType: "Adaptability",
							stars: [1, 2, 3, 4, 5]
						},
						{
							ratingType: "Child Friendly",
							stars: [1, 2, 3, 4, 5]
						},
						{
							ratingType: "Dog Friendly",
							stars: [1, 2, 3, 4, 5]
						},
						
					]
				}
			],
		}
	}

	render() {
		const searchResults = this.state.results.map((breedData) =>
			<Result imageSrc={breedData.imageSrc}
				alterText={breedData.breedName}
				breedName={breedData.breedName}
				breedDescription={breedData.breedDescription}
				temperaments={breedData.temperaments} />
		);

		const lengthText = this.state.length > 1 ? ' results found' : ' result found';

		return(
			<section className='search-box'>
				<label htmlFor='search'>
					Search the breed: <input type='search' id='search' />
				</label>
				<Text text={this.state.length + lengthText} />
				{ searchResults }
				<Button btnContent='Load more' className="load-more" />
			</section>
		);
	}
}
