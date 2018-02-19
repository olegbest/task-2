(function (root) {
    var WATER = root.SHRI_ISLANDS.WATER;
    var ISLAND = root.SHRI_ISLANDS.ISLAND;

    /**
     * Функция находит кол-во островов на карте
     * ВАЖНО! Сигнатуру функции изменять нельзя!
     *
     * @param {number[][]} map карта островов представленная двумерной матрицей чисел
     * @returns {number} кол-во островов
     */
    function solution(map) {
		var remember =[], count=0;
		for (let i = 0; i< map.length; i++){
			for (let j =0; j< map[i].length; j++){
				let check = true;
				for(let k = 0; k < remember.length; k++){
					if(remember[k]==(i+''+j)){
						check = false;
					}
				}
				if(map[i][j]==1 && check == true){
					remember.push(i+''+j);
					prov = checkHasOne(i,j,map);
					count++;
					
				}
			}
		}
		
		function checkHasOne(a,b,arr){
			if(a+1 < arr.length){
				let check = true;
				for(let k = 0; k < remember.length; k++){
					if(remember[k]==((a+1)+''+b)){
						check = false;
					}
		        }
		
				if(arr[a+1][b] == 1 && check == true){
					remember.push(a+1+''+b);
					checkHasOne(a+1,b,arr);
				}
			}
			if(b+1 < arr[a].length){
				let check = true;
				for(let k = 0; k < remember.length; k++){
					if(remember[k]==(a+''+(b+1))){
						check = false;
					}
		        }
				if(arr[a][b+1] == 1 && check == true){
					remember.push(a+''+(b+1));
					checkHasOne(a,b+1,arr);
				}
			}
		
			if(b-1 >= 0){
				let check = true;
				for(let k = 0; k < remember.length; k++){
					if(remember[k]==(a+''+(b-1))){
						check = false;
					}
		        }
				if(arr[a][b-1] == 1 && check == true){
					remember.push(a+''+(b-1));
					checkHasOne(a,b-1,arr);
				}
			}
		
		}
        return count;
    }

    root.SHRI_ISLANDS.solution = solution;
})(this);
