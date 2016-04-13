import _ from 'lodash';
import React from 'react';
import Table from '../Table';
import Checkbox from '../../Checkbox/Checkbox';
import Button from '../../Button/Button';
import TextField from '../../TextField/TextField';

const {
	Thead,
	Tbody,
	Tr,
	Th,
	Td,
} = Table;

const stateData = [{
    'abbreviation': 'AL',
    'name': 'Alabama',
    'capital': 'Montgomery',
    'date': 'December 14, 1819'
}, {
    'abbreviation': 'AK',
    'name': 'Alaska',
    'capital': 'Juneau',
    'date': 'January 3, 1959'
}, {
    'abbreviation': 'AZ',
    'name': 'Arizona',
    'capital': 'Phoenix',
    'date': 'February 14, 1912'
}, {
    'abbreviation': 'AR',
    'name': 'Arkansas',
    'capital': 'Little Rock',
    'date': 'June 15, 1836'
}, {
    'abbreviation': 'CA',
    'name': 'California',
    'capital': 'Sacramento',
    'date': 'September 9, 1850'
}, {
    'abbreviation': 'CO',
    'name': 'Colorado',
    'capital': 'Denver',
    'date': 'August 1, 1876'
}, {
    'abbreviation': 'CT',
    'name': 'Connecticut',
    'capital': 'Hartford',
    'date': 'January 9, 1788'
}, {
    'abbreviation': 'DE',
    'name': 'Delaware',
    'capital': 'Dover',
    'date': 'December 7, 1787'
}, {
    'abbreviation': 'FL',
    'name': 'Florida',
    'capital': 'Tallahassee',
    'date': 'March 3, 1845'
}, {
    'abbreviation': 'GA',
    'name': 'Georgia',
    'capital': 'Atlanta',
    'date': 'January 2, 1788'
}, {
    'abbreviation': 'HI',
    'name': 'Hawaii',
    'capital': 'Honolulu',
    'date': 'August 21, 1959'
}, {
    'abbreviation': 'ID',
    'name': 'Idaho',
    'capital': 'Boise',
    'date': 'July 3, 1890'
}, {
    'abbreviation': 'IL',
    'name': 'Illinois',
    'capital': 'Springfield',
    'date': 'December 3, 1818'
}, {
    'abbreviation': 'IN',
    'name': 'Indiana',
    'capital': 'Indianapolis',
    'date': 'December 11, 1816'
}, {
    'abbreviation': 'IA',
    'name': 'Iowa',
    'capital': 'Des Moines',
    'date': 'December 28, 1846'
}, {
    'abbreviation': 'KS',
    'name': 'Kansas',
    'capital': 'Topeka',
    'date': 'January 29, 1861'
}, {
    'abbreviation': 'KY',
    'name': 'Kentucky',
    'capital': 'Frankfort',
    'date': 'June 1, 1792'
}, {
    'abbreviation': 'LA',
    'name': 'Louisiana',
    'capital': 'Baton Rouge',
    'date': 'April 30, 1812'
}, {
    'abbreviation': 'ME',
    'name': 'Maine',
    'capital': 'Augusta',
    'date': 'March 15, 1820'
}, {
    'abbreviation': 'MD',
    'name': 'Maryland',
    'capital': 'Annapolis',
    'date': 'April 28, 1788'
}, {
    'abbreviation': 'MA',
    'name': 'Massachusetts',
    'capital': 'Boston',
    'date': 'February 6, 1788'
}, {
    'abbreviation': 'MI',
    'name': 'Michigan',
    'capital': 'Lansing',
    'date': 'January 26, 1837'
}, {
    'abbreviation': 'MN',
    'name': 'Minnesota',
    'capital': 'Saint Paul',
    'date': 'May 11, 1858'
}, {
    'abbreviation': 'MS',
    'name': 'Mississippi',
    'capital': 'Jackson',
    'date': 'December 10, 1817'
}, {
    'abbreviation': 'MO',
    'name': 'Missouri',
    'capital': 'Jefferson City',
    'date': 'August 10, 1821'
}, {
    'abbreviation': 'MT',
    'name': 'Montana',
    'capital': 'Helena',
    'date': 'November 8, 1889'
}, {
    'abbreviation': 'NE',
    'name': 'Nebraska',
    'capital': 'Lincoln',
    'date': 'March 1, 1867'
}, {
    'abbreviation': 'NV',
    'name': 'Nevada',
    'capital': 'Carson City',
    'date': 'October 31, 1864'
}, {
    'abbreviation': 'NH',
    'name': 'New Hampshire',
    'capital': 'Concord',
    'date': 'June 21, 1788'
}, {
    'abbreviation': 'NJ',
    'name': 'New Jersey',
    'capital': 'Trenton',
    'date': 'December 18, 1787'
}, {
    'abbreviation': 'NM',
    'name': 'New Mexico',
    'capital': 'Santa Fe',
    'date': 'January 6, 1912'
}, {
    'abbreviation': 'NY',
    'name': 'New York',
    'capital': 'Albany',
    'date': 'July 26, 1788'
}, {
    'abbreviation': 'NC',
    'name': 'North Carolina',
    'capital': 'Raleigh',
    'date': 'November 21, 1789'
}, {
    'abbreviation': 'ND',
    'name': 'North Dakota',
    'capital': 'Bismarck',
    'date': 'November 2, 1889'
}, {
    'abbreviation': 'OH',
    'name': 'Ohio',
    'capital': 'Columbus',
    'date': 'March 1, 1803'
}, {
    'abbreviation': 'OK',
    'name': 'Oklahoma',
    'capital': 'Oklahoma City',
    'date': 'November 16, 1907'
}, {
    'abbreviation': 'OR',
    'name': 'Oregon',
    'capital': 'Salem',
    'date': 'February 14, 1859'
}, {
    'abbreviation': 'PA',
    'name': 'Pennsylvania',
    'capital': 'Harrisburg',
    'date': 'December 12, 1787'
}, {
    'abbreviation': 'RI',
    'name': 'Rhode Island',
    'capital': 'Providence',
    'date': 'May 19, 1790'
}, {
    'abbreviation': 'SC',
    'name': 'South Carolina',
    'capital': 'Columbia',
    'date': 'May 23, 1788'
}, {
    'abbreviation': 'SD',
    'name': 'South Dakota',
    'capital': 'Pierre',
    'date': 'November 2, 1889'
}, {
    'abbreviation': 'TN',
    'name': 'Tennessee',
    'capital': 'Nashville',
    'date': 'June 1, 1796'
}, {
    'abbreviation': 'TX',
    'name': 'Texas',
    'capital': 'Austin',
    'date': 'December 29, 1845'
}, {
    'abbreviation': 'UT',
    'name': 'Utah',
    'capital': 'Salt Lake City',
    'date': 'January 4, 1896'
}, {
    'abbreviation': 'VT',
    'name': 'Vermont',
    'capital': 'Montpelier',
    'date': 'March 4, 1791'
}, {
    'abbreviation': 'VA',
    'name': 'Virginia',
    'capital': 'Richmond',
    'date': 'June 25, 1788'
}, {
    'abbreviation': 'WA',
    'name': 'Washington',
    'capital': 'Olympia',
    'date': 'November 11, 1889'
}, {
    'abbreviation': 'WV',
    'name': 'West Virginia',
    'capital': 'Charleston',
    'date': 'June 20, 1863'
}, {
    'abbreviation': 'WI',
    'name': 'Wisconsin',
    'capital': 'Madison',
    'date': 'May 29, 1848'
}, {
    'abbreviation': 'WY',
    'name': 'Wyoming',
    'capital': 'Cheyenne',
    'date': 'July 10, 1890'
}];

export default React.createClass({
	getInitialState() {
		return {
			searchValue: '',
			states: stateData.slice()
		};
	},

	render() {
		return (
			<article>
				<header style={{
					alignItems: 'center',
					display: 'flex'
				}}>
					<section style={{
						alignItems: 'center',
						display: 'flex'
					}}>
						<span>Search:</span>
						<TextField value={this.state.searchValue} onChange={this.handleChangedSearchValue} />
						<Button onClick={this.handleClickedSearchButton}>Search</Button>
					</section>
				</header>
				<Table>
					<Thead>
						<Tr>
							<Th>Abbreviation</Th>
							<Th>State Name</Th>
							<Th>Capital</Th>
							<Th>Became a State</Th>
						</Tr>
					</Thead>
					<Tbody>
						{_.map(this.state.states, ({ abbreviation, name, capital, date }) => (
							<Tr key={abbreviation}>
								<Td>{abbreviation}</Td>
								<Td>{name}</Td>
								<Td>{capital}</Td>
								<Td>{date}</Td>
							</Tr>
						))}
					</Tbody>
				</Table>
			</article>
		);
	},

	handleChangedSearchValue(value) {
		this.setState({
			searchValue: value
		});
	},

	handleClickedSearchButton() {
		this.setState({
			states: _.filter(stateData, ({ name }) => _.includes(_.lowerCase(name), _.lowerCase(this.state.searchValue)))
		});
	}
});
