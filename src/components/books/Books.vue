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
					<tr v-for="(book, bookIndex) in books">
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
	import { mapGetters, mapState } from 'vuex';
	
	export default {
		name: 'books',
		store,
		data () {
			return {
				nameQuery: '',
				authorQuery: '',
			}
		},
		computed: {
			...mapGetters([
		      'showLoading',
		      'books'
		    ])
		},
		methods: {
			filterByBookName () {
				store.dispatch('filterBooks', {'query': this.nameQuery.toLowerCase()})
			},
			filterByBookAuthor () {

			},
			clearNameQuery () {

			},
			clearAuthorQuery () {

			}
		},
		created () {
			store.dispatch('getAllBooks');
		}
	}
</script>
