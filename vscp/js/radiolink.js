document.addEventListener('DOMContentLoaded', function() {
    let list_radio = document.getElementById('list_radio');
    
    // Chỉ thực hiện nếu list_radio tồn tại
    if (list_radio) {
        let links = list_radio.getElementsByTagName('a');
        
        for (let i = 0; i < links.length; i++) {
            links[i].addEventListener("click", function(e) {
                e.preventDefault();  
                
                let radio = this.querySelector('input[type="radio"]');
                
                // Kiểm tra nếu radio tồn tại
                if (radio) {
                    radio.checked = !radio.checked;
                }
            });
        }
    }
});
