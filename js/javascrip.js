	/*검색창*/
		function searchbar() {
			//console.log(1)
			var inputTxt=document.search;
//			console.log(inputTxt)
			if(inputTxt.searchbox.value=="검색어를 입력해주세요"){
//				console.log(1)
				inputTxt.searchbox.value='';
				return;
			}
		}


		function searchBtn(){
//			console.log(1)
			var inputTxt=document.search; 
			if(inputTxt.searchbox.value=="검색어를 입력해주세요"||inputTxt.searchbox.value==''){
//				console.log(1)
				alert('검색어를 입력해주세요!')
				inputTxt.searchbox.value='';
				inputTxt.searchbox.focus();
				return;
			}
		}

	/*검색창 e*/










///*배너모음*/
//     function leftbanner(){
//         
//     }
//     function rghtbanner(){}

/*배너모음e*/