<template>
  <div class="books container-fluid">
  	<div class="row">
  		<div class="col-10 offset-1 mt-5">
	  		<h1>Books</h1>
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
	import httpService from '@/services/http-common.js';
	
	export default {
		name: 'books',
		data () {
			return {
				books: [],
				showLoading: false,
			}
		},
		created () {
			console.log('Inside created books hook')
			this.showLoading = true;
			httpService.getBooks()
				.then(response => {
					this.books = response.data;
				})
				.catch(error => {
					swal({
			          position: 'top-end',
			          type: 'error',
			          title: 'Error occured while fetching the books list',
			          showConfirmButton: false,
			          timer: 2000,
			          backdrop: false,
			        });
				})
				.finally(() => {
					this.showLoading = false;
				});
		}
	}
</script>
