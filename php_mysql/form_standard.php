<form action="index_insert.php" method="POST">
    Title:<input type="text" name="title"><br>
    Details: <input type="text" name="details"><br>
    TimeStamp:<input type="text" name="timestamp"><br>
    USER ID: <input type="text" name="user_id"><br>
    <input type="submit">
</form>
<?PHP
    print_r($_POST);
?>