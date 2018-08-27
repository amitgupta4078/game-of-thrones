<template>
  <div class="books container-fluid">
  	<div class="row">
  		<div class="col-10 offset-1 mt-5">
	  		<h1>Books</h1>
	  		<div class="row">
	  			<div class="offset-6 col-3">
	  				Filter by book name: {{ nameQuery }}<input type="text" name="bookname" v-model="nameQuery" @input="filterByBookName" @change="filterByBookName" class="form-control">
	  				<p>
	  					<button class="btn btn-primary btn-sm" @click="clearNameQuery">Clear</button>
	  				</p>
	  			</div>
	  			<div class="col-3">
	  				Filter by book author: <input type="text" name="bookauthor" v-model="authorQuery" @input="filterByBookAuthor" @change="filterByBookAuthor" class="form-control">
	  				<p>
	  					<button class="btn btn-primary btn-sm" @click="clearAuthorQuery">Clear</button>
	  				</p>
	  			</div>
	  		</div>
	  		<div class="loading" v-if="showLoading"><small>Fetching list of books</small></div>
	  		<table class="table table-bordered" v-else>
				<tbody>
					<tr v-for="(book, bookIndex) in sorted">
						<td>
							<router-link :to="`/books/${bookIndex + 1}`">{{ book.name }}</router-link>
							<i class="float-right">by {{ book.authors.join(',')}}</i>
						</td>
					</tr>
				</tbody>
			</table>	
  		</div>
  	</div>
  </div>
</template>

<script>

	import store from '@/store.js';
	import { mapGetters } from 'vuex';
	
	export default {
		name: 'books',
		store,
		data () {
			return {
				books: [],
				nameQuery: '',
				authorQuery: '',
			}
		},
		computed: {
			sorted () {
				return this.books.sort(function(a, b) {
				    return a.name - b.name;
				});
			},
			...mapGetters([
		      'allBooks',
		      'showLoading'
		    ])
		},
		methods: {
			filterByBookName () {
				console.log('triggered..');
				this.books = this.books.filter((book) => {
					return (book.name.toLowerCase().indexOf(this.nameQuery.toLowerCase()) !== -1);
				});
			},
			filterByBookAuthor () {

			},
			clearNameQuery () {

			},
			clearAuthorQuery () {

			}
		},
		created () {
			console.log('TRY NOW......')
			this.showLoading = true;
			store.dispatch('getAllBooks');
		}
	}
</script>
