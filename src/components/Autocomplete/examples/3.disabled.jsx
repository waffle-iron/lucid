import React from 'react';
import Autocomplete from '../Autocomplete';

export default React.createClass({
	render() {

		return (
			<section style={{ minHeight: 100 }}>
				<Autocomplete placeholder='Enter a word...' isDisabled />
			</section>
		);
	}
});
