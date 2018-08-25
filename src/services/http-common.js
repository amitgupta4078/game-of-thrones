import axios from 'axios';

export default {
	getBooks () {
		return axios.get('/books');
	},
	getCharacters () {
		return axios.get('/characters');
	},
	getHouses () {
		return axios.get('/houses');
	},
	getBook(bookId) {
		return axios.get(`/books/${bookId}`);
	},
	getCharacter(id) {
		return axios.get(`/characters/${id}`);
	},
	getHouse(id) {
		return axios.get(`/houses/${id}`);
	}
}