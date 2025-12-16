
        let input1 = document.getElementById("number")
        let input2 = document.getElementById("number1")

        function selectNumber(input){

            input2.value = ""
            input1.value += input
        }



        function clearInput(){
            input1.value = "";
            input2.value = ""
        }



        function deleteInput(){
            input1.value = input1.value.slice(0, -1);
            input2.value = input2.value.slice(0, -1);
        }


        function operation(){
            input2.value = eval(input1.value)
            // input2 = input2.value.rounded(2)
            input1.value = ""
        }

    //  button activeness

        const allBtn = document.querySelectorAll(".btn")
        let activeBtn = null;

        allBtn.forEach(btn => {
            btn.addEventListener("click", () => {
                if(activeBtn !== null){
                    activeBtn.classList.remove("btn-active");
                }
                btn.classList.add("btn-active");
                activeBtn = btn;
            })
        })