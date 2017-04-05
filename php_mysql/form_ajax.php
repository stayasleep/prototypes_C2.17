
    <script src="https://code.jquery.com/jquery-3.1.0.js"></script>
    <script>
        $(document).ready(initialize);

        function initialize(){
            $('input[name=submit]').click(sendForm);
        }
        function sendForm(){
            $.ajax({
                url: "index_insert.php",
                data:$('form').serialize(),
                method: "POST",
                dataType: 'text',
                success:function(response){
                    console.log("nice: "+response);
                }
        })
        };
    </script>
<form>
    Title:<input type="text" name="title"><br>
    Details: <input type="text" name="details"><br>
    TimeStamp:<input type="text" name="timestamp"><br>
    USER ID: <input type="text" name="user_id"><br>
    <input type="button" name="submit" value="send">
</form>
