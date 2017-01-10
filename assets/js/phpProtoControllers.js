//PHP Intro
app.controller('phpIntroController', function() {
    this.title = ['PHP Introduction', 'PHP Intro'];
    this.description = "<p>Welcome to the backend! This prototype will introduce you to PHP and show you where it is like JavaScript and where it is not.</p><p>This prototype is based on the information that you obtained through the following resources <b>(If you haven't gone through these then please do so now).</b></p>";
    this.branch = 'php_intro';
    this.protoId = 32;

    this.links = {
        Reading:{
            'About PHP': 'http://php.net/'
        },
        Presentation: {
            'PHP Intro': 'https://docs.google.com/presentation/d/14aYoinOCJSQS2BvRgAjNUtsGFzfggnZoWoEkQiZ00GA/pub?start=false&loop=false&delayms=3000&slide=id.p'
        },
        Resource: {
            'PHP Fiddle': 'http://phpfiddle.org/'
        },
        Video: {
            'PHP Introduction': 'https://www.youtube.com/watch?v=NpE6FkF1wBM'
        }
    };

    this.demo = {
        'Video Prototype Demo': {
            title: "PHP Introduction",
            link: "",
            live: false
        }
    };

    this.features = {
        'Getting Started': {
            html: "<ol class='left-border'><li>Two files have been included in this prototype<ol class='nested-1'><li><code>from.php</code></li><li><code>to.js</code></li></ol></li><li>You will be entering your code directly into the <code>to.js</code> file<ul><li>Enter your translated code into the appropriate section in the <code>to.js</code> file</li></ul></li></ol>"
        },
        "Conjunto de Caracter&iacute;sticas 1 - Traducir el PHP": {
            html: "<ol class='left-border'><li>Look through the <code>from.php</code> file<ul><li>Try figuring out what each exercise is doing </li></ul></li><li>Translate the PHP code into JavaScript<ul><li>Place your translated code into the <code>to.js</code> file</li><li>Put the translated code into its corresponding section</li></ul></li></ol>"
        }
    }

});

//PHP MySQL
app.controller('phpMysqlController', function() {
    this.title = ['PHP MySQL', 'PHP MySQL'];
    this.description = "<p>This prototype builds from the MySQL Basics and walks you through incorporating PHP into the mix.</p><p>This prototype is based on the information that you obtained through the following resources <b>(If you haven't gone through these then please do so now).</b></p>";
    this.branch = 'php_mysql';
    this.protoId = 34;

    this.links = {
        Presentation: {
            'PHP/MySQL - mysqli Functions': 'https://docs.google.com/presentation/d/1KRSYSqiX_eTVajF40yQnvptbhlKLRWD_vJVwy4Zs2A4/pub?start=false&loop=false&delayms=3000&slide=id.p'
        },
        Video: {
            'PHP/MySQL - mysqli Functions': 'https://www.youtube.com/watch?v=utqahML_ONg&feature=youtu.be'
        }
    };

    this.demo = {
        'Video Prototype Demo': {
            title: "PHP MySQL",
            link: "",
            live: false
        }
    };

    this.features = {
        'Getting Started': {
            html: "<ol class='left-border'><li>The following files have been included in the <code>php_mysql</code> folder<ol class='nested-1'><li><code>index_insert.php</code></li><li><code>index_select.php</code></li><li><code>mysql_connect.php.config</code></li></ol></li></ol>"
        },
        'Feature Set 1 - Setup Connect File': {
            html: "<ul class='left-border'><li class='clean-list'><h4>You should never store your database credentials on github, even if it is a private repo.</h4><ol><li>Add the <code>mysql_connect.php</code> file to the <code>.gitignore</code> file</li><li>Create a copy of <code>mysql_connect.php.config</code>, name it <code>mysql_connect.php</code></li><li>Change the values in <code>mysql_connect.php</code> to your database credentials<ol class='nested-1'><li>Default MAMP mysql <b>username</b> is: <code>root</code></li><li>Default MAMP mysql <b>password</b> is: <code>root</code></li><li><em>NOTE:</em> If you go to the MAMP start page <code>http://localhost/MAMP/</code> it displays the MySQL credentials</li><li>Use the database you created in the <code>mysql-basics</code> prototype</li><li>Keep in mind that for production environments, using the root account for an application is not a good idea, but sufficient for now.</li></ol></li></ol></li></ul>"
        },
        'Feature Set 2 - PHP and MySQL join Forces': {
            html: "<ul class='left-border'><li class='clean-list'><b>In <code>index_select.php</code>:</b><ol><li>Require your <code>mysql_connect.php</code> file at the top of <code>index_select.php</code>. Now the mysql connection will be available to any code below the require</li><li>Make a variable, <code>$query</code>, and put in the <code>SELECT</code> query that you made in the mysql-basics <i>Feature Set 2</i></li><li>Using <code>mysqli_query($conn, $query)</code>, execute the query. Make sure to save the return value from <code>mysqli_query()</code> into a variable called <code>$result</code></li><li>Check if the query resulted in any data with <code>mysqli_num_rows()</code>. It needs to know which result to check on!</li><li>If <code>mysqli_num_rows()</code> tells you that there were rows found, use <code>mysqli_fetch_assoc()</code> to get the data, one row at a time<ul><li>You might get any number of rows, find each of them</li></ul></li><li>Print out each row returned</li></ol><li class='clean-list'><strong>NOTE:</strong> Notice the <strong>i</strong> at the end of <code>mysql</code> for the mysql functions ex: <code>mysql<strong>i</strong>_query()</code>, it is very important. If something isn't functioning as planned or you are getting weird errors check to make sure you didn't mistype the function name by leaving the <strong>i</strong> off the end of <code>mysql</code></li></li></ul>"
        },
        'Feature Set 3 - Add to the Database': {
            html: "<ul class='left-border'><li class='clean-list'><b>In <code>index_insert.php</code>:</b><ol><li><b>Postman</b> is a great way to test this file</li><li>Make another require to <code>mysql_connect.php</code></li><li>Make another <code>$query</code> variable, but this time use your <code>INSERT</code> query from mysql-basics <i>Feature Set 2</i></li><li>Instead of <code>mysqli_num_rows()</code>, use <code>mysqli_affected_rows()</code> to detect how many rows are changed by a query<ul><li><code>mysqli_affected_rows()</code> doesn't require the result variable, it always tells you the last update/insert/delete</li></ul></li><li>Run your <code>index_insert.php</code> then run <code>index_select.php</code> to see the new data</li></ol></li></ul>"
        },
        'Feature Set 4': {
            html: "<h4>Feature Set 4.1 - All in Good Form</h4><ol class='left-border'><li>Create a new page: <code>form_standard.php</code></li><li>Create a form that has inputs that match your database table<ul class='nested-1'><li>Title</li><li>Details</li><li>Timestamp (allow this in any human form)</li><li>Choose an arbitrary field to add in</li></ul></li><li>In the form <code>action</code> attribute, specify your <code>index_insert.php</code> file</li><li>in the form <code>method</code> attribute, use <code>POST</code></li><li>This will call your <code>index_insert.php</code> file with the form data.</li></ol><h4>Feature Set 4.2 - Catching the Sent Data</h4><ul class='left-border'><li class='clean-list'><b>In your <code>index_insert.php</code></b><ol><li>Print out your <code>$_POST</code> variable to ensure you are getting all of your data</li><li>If you get the data you should have, change your <code>INSERT</code> query to take the data from your <code>$_POST</code> variable instead of hard coding data in.</li><li>Assume a user ID will come from your user table</li></ol></li><li class='clean-list'><b>Review your todo item list from <code>index_select.php</code>, to verify everything is working.</b></li></ul>"
        },
        'Feature Set 5 - AJAX': {
            html: "<ul class='left-border'><li class='clean-list'><b>Create a new page, <code>form_ajax.php</code></b><ol><li>Copy the form from your <code>form_standard.php</code></li><li>Rather than sending data to <code>index_insert.php</code> via the form method, send the data via an AJAX call</li></ol></li><li class='clean-list'><b>Review your item list from <code>index_select.php</code>, to verify everything is working.</b></li></ul>"
        }
    }

});

//PHP Directory Operations
app.controller('phpDirOpsController', function() {
    this.title = ['PHP Directory Operations', 'PHP Directory Operations'];
    this.description = "<p>This prototype builds from previous PHP prototypes and introduces you to directory operations in PHP. Unlike JavaScript PHP allows access to the servers file system. This prototype will guide you through accessing files in a given directory on your server and manually building out a carousel.</p><p>This prototype is based on the information that you obtained through the following resources <b>(If you haven't gone through these then please do so now).</b></p>";
    this.branch = 'php_dir_ops';
    this.protoId = 35;

    this.links = {
        Presentation: {
            'PHP Directory Operations': 'https://docs.google.com/presentation/d/1ZS2acm9eB0Nsz-yPQE2Ci9mxMHfcdioBlUfTwhrv5rU/pub?start=false&loop=false&delayms=3000&slide=id.p'
        },
        Video: {
            'PHP Directory Operations': 'https://www.youtube.com/watch?v=YLfwIFvUZLQ'
        }
    };

    this.demo = {
        'Video Prototype Demo': {
            title: "PHP Directory Operations",
            link: "",
            live: false
        }
    };

    this.features = {
        'Getting Started': {
            html: "<ol class='left-border'><li><p>The following files and folders have been included for you inside the <code>php_directory_operations</code> folder</p><ol class='nested-1'><li>images folder<ul><li>Contains 7 image files</li></ul></li><li><code>dir_listings.php</code></li><li><code>index.php</code></li></ol></li></ol>"
        },
        'Feature Set 1': {
            html: "<b>In <code>index.php</code></b><ol class='left-border'><li>Make a div to hold all the photos, with an <b>ID</b> of <code>image_container</code></li><li>Use the <code>glob()</code> PHP function to get a directory listing of images<ul><li><button class='btn btn-danger btn-xs' type='button' data-toggle='collapse' data-target='#hint1' aria-expanded='false' aria-controls='hint1'>View Hint</button><ul id='hint1' class='collapse'><li>Look it up!</li><li>For <code>glob()</code>'s argument, use <b>*</b> as the wildcard character to select all files</li><li>Make sure it is looking inside the <code>images</code> directory</li></ul></li></ul></li><li>Use the values returned by <code>glob()</code> to create images in the <code>image_container</code> div<ul><li><button class='btn btn-danger btn-xs' type='button' data-toggle='collapse' data-target='#hint2' aria-expanded='false' aria-controls='hint1'>View Hint</button><ul id='hint2' class='collapse'><li>Set the <code>src</code> attribute <kbd>=</kbd> to the file value returned by <code>glob()</code></li><li>One image per value returned</li><li>Loop?</li></ul></li></ul></li></ol>"
        },
        'Feature Set 2': {
            html: "<b>In <code>get_images.php</code> - use the same <code>glob()</code> code as above, however:</b><ol class='left-border'><li>Make an associative array named, <code>output</code>, give it the following keys:<ul><li><b>success</b>: operation is successful or not</li><li><b>error</b>: any errors that might have occurred</li><li><b>files</b>: an array of files from the images directory</li></ul></li><li><code>json_encode</code> the <code>output</code> variable</li><li><code>print</code> the encoded variable</li></ol><b>Make a file called <code>gallery.php</code> - In it make a JS function named <code>load_files()</code></b><ol class='left-border'><li>Using AJAX, access your get_images.php file, getting the encoded JSON output</li><li>Using jQuery DOM Creation<ol class='nested-1'><li>Create an image, and set the source appropriately</li><li>Append the image into a countainer. Each image should be a maximum width of 25% of the container.</li><li>Make a click handler for each image. It will do the following:<ol class='nested-2'><li>open a BOOTSTRAP modal</li><li>Make the image 100% of the modal's size</li></ol></li></ol></li></ol>"
        },
        'Feature Set 3': {
            html: "<b>Create a file, <code>carousel.php</code></b><ol class='left-border'><li>Make a JS function: <code>load_files()</code><ol class='nested-1'><li>Using AJAX, access your get_images.php file, getting the encoded JSON output</li><li>Using jQuery DOM Creation<ol class='nested-2'><li>Create an image, and set the source appropriately</li><li>Append the image into a container</li><li>Each image should be<ul><li>100% of the width of the container</li><li>Positioned absolutely</li><li>Left and top at 0</li></ul></li><li>Keep each image in an array: <code>image_array</code></li><li>Add a variable to keep track of which image is currently being displayed.By default this should be 0</li></ol></li></ol></li><li>Make JS functions: <code>prev_image()</code> and <code>next_image()</code><ol class='nested-1'><li>If <code>next_image</code> is clicked, display the next photo in <code>image_array</code></li><li>If <code>prev_image</code> is clicked, display the previous photo in <code>image_array</code></li></ol></li><li>Make a button, previous, that calls the function <code>prev_image()</code></li><li>Make a button, next, that calls the function <code>next_image()</code></li><li>Put the previous and next buttons somewhere where you can click on them, around the image.</li></ol>"
        },
        'Feature Set 4 - Add Some Animation': {
            html: "<b>In <code>carousel.php</code></b><ol class='left-border'><li>Put all images into a container, <code>image_container</code><ul><li>Make that container the size of the images - (800x600 in this case)</li></ul></li><li>Stack the images on top of each other with position, top, and left styles </li><li>Make a function, <code>initialize()</code><ul><li>Move every image, except the first, to the right side of the container - (probably using <code>left: 100%</code>)</li></ul></li><li>Make a global variable, <code>current_image</code>, set it to <code>0</code></li><li>In your <code>prev_image</code> function:<ol class='nested-1'><li>Animate the current image out of the <code>image_container</code></li><li>Decrement the current image counter</li><li>Animate the new current image into the <code>image_container</code></li></ol></li><li>In your <code>next_image</code> function:<ul><li>Do the same thing as <code>prev_image</code>, but in the <b>opposite</b> direction</li></ul></li><li>Go back to your <code>prev_image </code> and <code>next_image</code> function, and test if the <b>NEW</b> <code>current_image</code> would be out of bounds (<i>less than 0 or greatger than the amount of images</i>) and either:<ul><li>Prevent the animation from triggering again (<i>cannot go past the bounds</i>)</li><li>Or make the new index \"wrap\" around.<ul><li><button class='btn btn-danger btn-xs' type='button' data-toggle='collapse' data-target='#hint3' aria-expanded='false' aria-controls='hint1'>View Hint</button><ul id='hint3' class='collapse'><li>If <code>current_image = -1</code> It becomes image_array.length-1, or if <code>current_image = image_array.length</code> It becomes 0, depending on which end you are at</li></ul></li></ul></li></ul></li></ol>"
        },
        'Feature Set 5 - Additional Functionality: Dots! (optional)': {
            html: "<b>In <code>carousel.php</code></b><ol class='left-border'><li>For each image created, also create a \"dot\" somewhere on the page to serve as an indicator</li><li>Make a class, <code>dot</code>, which causes the element to look like a dot that is unselected</li><li>Make a class, <code>active_dot</code>, which causes the element to look like a selected dot</li><li>In your <code>next_image</code> and <code>prev_image</code> functions:<ul><li>Find the current <code>active_dot</code>, and <b>remove</b> the class</li><li>Find the new current dot, and give it a class of <code>active_dot</code><ul><li><button class='btn btn-danger btn-xs' type='button' data-toggle='collapse' data-target='#hint4' aria-expanded='false' aria-controls='hint1'>View Hint</button><ul id='hint4' class='collapse'><li>Using the <code>current_image</code> variable and jQuery to get an array of all <code>.dot</code> elements could be one way of finding the current dot to make active</li></ul></li></ul></li></ul></li></ol>"
        },
        'Feature Set 6 - Additional Functionality: Nav Dots! (optional)': {
            html: "<b>In <code>carousel.php</code></b><ol class='left-border'><li>Add a click handler onto each dot</li><li>When the dot is clicked, the <code>prev_image</code> or <code>next_image</code> function should be called</li><li>Modify <code>next_image</code> and <code>prev_image</code> to receive an argument.<ul><li>The argument will specify what the next <code>current_image</code> will be (Rather than simply incrementing / decrementing)</li></ul></li></ol>"
        }
    }
});

//PHP File Upload
app.controller('phpFileUploadController', function() {
    this.title = ['PHP File Upload', 'PHP File Upload'];
    this.description = "<p>This prototype builds from previous PHP prototypes and introduces you to uploading files to your server. Unlike JavaScript PHP allows access to the servers file system. This prototype will guide you through uploading a file from a user input and saving it to a directory on your server. </p><p>This prototype is based on the information that you obtained through the following resources <b>(If you haven't gone through these then please do so now).</b></p>";
    this.branch = 'php_file_upload';
    this.protoId = 36;

    this.links = {
        Presentation: {},
        Video: {}
    };

    this.demo = {
        'Video Prototype Demo': {
            title: "PHP File Upload",
            link: "",
            live: false
        }
    };

    this.features = {
        'Getting Started': {
            html: "<ol class='left-border'><li><p>The following files have been included for you inside the <code>php_file_upload</code> folder</p><ol class='nested-1'><li><code>file_handler.php</code></li><li><code>uploader_ajax.php</code></li><li><code>uploader_form.php</code></li></ol></li></ol>"
        },
        'Feature Set 1 - Good Form': {
            html: "<b>In <code>uploader_form.php</code></b><ol class='left-border'><li>Add a file upload field, called <code>upload_file</code></li><li>Add an input text field, name it <code>description</code></li><li>Configure the form to send <code>POST</code> data to <code>file_handler.php</code></li><li>Add the encoding type to the form of <code>multipart/form-data</code>:<ul><li><button class='btn btn-danger btn-xs' type='button' data-toggle='collapse' data-target='#hint1' aria-expanded='false' aria-controls='hint1'>View Hint</button><ul id='hint1' class='collapse'><li><b>Hint:</b></li><li class='clean-list'><div class='highlight highlight-text-html-basic'><pre>&lt;<span class='pl-ent'>form</span> <span class='pl-e'>action</span>=<span class='pl-s'><span class='pl-pds'>\"</span>file_handler.php<span class='pl-pds'>\"</span></span> <span class='pl-e'>method</span>=<span class='pl-s'><span class='pl-pds'>\"</span>POST<span class='pl-pds'>\"</span></span> <span class='pl-e'>enctype</span>=<span class='pl-s'><span class='pl-pds'>\"</span>multipart/form-data<span class='pl-pds'>\"</span></span>&gt;\n...\n&lt;/<span class='pl-ent'>form</span>&gt;</pre></div></li></ul></li></ul><li>Add a submit button<ul><li><button class='btn btn-danger btn-xs' type='button' data-toggle='collapse' data-target='#hint2' aria-expanded='false' aria-controls='hint1'>View Hint</button><ul id='hint2' class='collapse'><li><b>Hint:</b></li><li class='clean-list'><div class='highlight highlight-text-html-basic'><pre>&lt;<span class='pl-ent'>button</span> <span class='pl-e'>type</span>=<span class='pl-s'><span class='pl-pds'>\"</span>submit<span class='pl-pds'>\"</span></span>&gt;Submit&lt;/<span class='pl-ent'>button</span>&gt;</pre></div></li></ul></li></ul></ol><b>In <code>file_handler.php</code></b><ol class='left-border'><li>Print out the values inside the super-global <code>$_FILES</code>:<ul><li><b>Note</b>: Your file is inside <code>upload_file</code></li></ul></li><li>Print out the values inside the super-global <code>$_POST</code></li><li>Upload an image file. Make sure it isn't over <b>2 megs</b> in size</li></ol>"
        },
        'Feature Set 2 - Accepting the Image': {
            html: "<b>In <code>file_handler.php</code></b><ol class='left-border'><li>Check if the directory, <code>uploads</code>, exists</li><li>If it exists, use the <code>pathinfo()</code> function on your upload file's name</li><li>Use the <code>extension</code> element of the array returned by <code>pathinfo()</code> to determine if the file extension is valid:<ul><li>Valid file extensions<ol class='nested-1'><li><code>.gif</code></li><li><code>.jpeg</code></li><li><code>.jpg</code></li><li><code>.png</code></li></ol></li></ul></li><li>Check the file size from <code>$_FILES</code> to determine if the file is too large or not.<ol class='nested-1'><li><code>getimagesize()</code> is helpful, as is the size from the <code>$_FILES</code> super-global</li><li>Limit it to 2 megabytes</li><li>You probably want to use the <code>tmp_name</code> element of the <code>$_FILES</code> super-global to test the file</li></ol></li><li>If the file size is correct, and the extension is correct:<ol class='nested-1'><li>Use <code>move_uploaded_file()</code> to move the file so it is permanent.<ol class='nested-2'><li>You need to move it from the <code>tmp_name</code> to the desired file name</li><li>Put the new file into the uploads directory</li><li><b>MAKE SURE YOU TEST <code>move_uploaded_file</code></b> to see if it actually worked. File permissions can be a problem.</li></ol></li></ol></li><li>If there are any errors, you should be collecting them so you can give feedback to the user</li><li>The user should also be notified of <b>success</b> or <b>failure</b></li></ol>"
        },
        'Feature Set 3 - AJAX': {
            html: "<b>In <code>uploader_ajax.php</code></b><ol class='left-border'><li>Add the same form elements as you added to <code>uploader_form.php</code><li>Make the submit button into <code>type=\"button\"</code> and add a click handler in JS</li><li>Make an AJAX call triggered by the click handler, the following properties need to be part of your AJAX call<ul><li><code>processData: false</code></li><li><code>contentType: false</code></li><li><code>data:</code> should use a new FormData object, targeted to the form in question<ul><li> <button class='btn btn-danger btn-xs' type='button' data-toggle='collapse' data-target='#hint3' aria-expanded='false' aria-controls='hint1'>View Hint</button><ul id='hint3' class='collapse'><li>Assuming your form has an ID of: <code>ajax-upload</code></li><li><div class='highlight highlight-source-js'><pre><span class='pl-k'>var</span> formEle <span class='pl-k'>=</span> <span class='pl-en'>$</span>(<span class='pl-s'><span class='pl-pds'>'</span>#ajax-upload<span class='pl-pds'>'</span></span>);\n\n<span class='pl-smi'>$</span>.<span class='pl-en'>ajax</span>({\n&nbsp;&nbsp;&nbsp;&nbsp;data<span class='pl-k'>:</span> <span class='pl-k'>new</span> <span class='pl-en'>FormData</span>(formEle)\n});</pre></div></li><li><b>Note</b>: The above is just an example of setting the data property and not a full representation of how your AJAX call needs to look</li></ul></li></ul></li></ul></li></ol>"
        }
    }
});

//PHP Includes
app.controller('phpIncludesController', function() {
    this.title = ['PHP Includes', 'PHP Includes'];
    this.description = "<p>This prototype builds from previous PHP prototypes and introduces you to using the include function. This prototype will show some examples of how the different include functions will work within your code and how they effect each other. At the end you will create a very simple web-page that uses includes for the two different sections. </p><p>This prototype is based on the information that you obtained through the following resources <b>(If you haven't gone through these then please do so now).</b></p>";
    this.branch = 'php_includes';
    this.protoId = 37;

    this.links = {
        Presentation: {
            'PHP Include and Require': 'https://docs.google.com/presentation/d/1ALrrTHbJSKNaylTJc-FS_zc6kL4hwf-Wbh3XsNLXAy4/pub?start=false&loop=false&delayms=3000&slide=id.p'
        },
        Video: {
            'PHP Include and Require': 'https://www.youtube.com/watch?feature=player_embedded&v=SGc5wtLGKhM'
        }
    };

    this.demo = {
        'Video Prototype Demo': {
            title: "PHP Includes",
            link: "",
            live: false
        }
    };

    this.features = {
        'Getting Started': {
            html: "<ol class='left-border'><li>There are no files included in this prototype</li></ol>"
        },
        'Feature Set 1': {
            html: "<ol class='left-border'><li>Create <code>index.php</code></li><li>Include the following code in it<br><div class=\"highlight highlight-text-html-php\"><pre><span class=\"pl-pse\">&lt;?php</span><span class=\"pl-s1\"></span>\n<span class=\"pl-s1\">&nbsp;&nbsp;<span class=\"pl-smi\">$a</span> <span class=\"pl-k\">=</span> <span class=\"pl-c1\">1</span>; </span>\n<span class=\"pl-s1\">&nbsp;&nbsp;<span class=\"pl-smi\">$b</span> <span class=\"pl-k\">=</span> <span class=\"pl-c1\">5</span>;</span>\n<span class=\"pl-s1\">&nbsp;&nbsp;<span class=\"pl-k\">include</span>(<span class=\"pl-s\"><span class=\"pl-pds\">'</span>includes/data.php<span class=\"pl-pds\">'</span></span>);</span>\n<span class=\"pl-s1\">&nbsp;&nbsp;<span class=\"pl-smi\">$result</span> <span class=\"pl-k\">=</span> <span class=\"pl-smi\">$a</span> <span class=\"pl-k\">*</span> <span class=\"pl-smi\">$b</span>;</span>\n<span class=\"pl-s1\">&nbsp;&nbsp;<span class=\"pl-c1\">print</span>(<span class=\"pl-s\"><span class=\"pl-pds\">\"</span>&lt;br&gt;Result is <span class=\"pl-smi\">$result</span><span class=\"pl-pds\">\"</span></span>);</span>\n<span class=\"pl-s1\"></span><span class=\"pl-pse\"><span class=\"pl-s1\">?</span>&gt;</span></pre></div></li><li>Create a folder called <code>includes</code></li><li>In the includes folder, create a file called <code>data.php</code></li><li>In the <code>data.php</code> file, include the following code:<br><div class=\"highlight highlight-text-html-php\"><pre><span class=\"pl-s1\"><span class=\"pl-k\">&lt;</span>?<span class=\"pl-c1\">php</span> </span>\n<span class=\"pl-s1\">&nbsp;&nbsp;<span class=\"pl-smi\">$a</span> <span class=\"pl-k\">=</span> <span class=\"pl-c1\">3</span>;</span>\n<span class=\"pl-s1\">&nbsp;&nbsp;<span class=\"pl-smi\">$b</span> <span class=\"pl-k\">=</span> <span class=\"pl-c1\">2</span>; </span>\n<span class=\"pl-s1\"></span><span class=\"pl-pse\"><span class=\"pl-s1\">?</span>&gt;</span></pre></div></li><li>Run <code>index.html</code> and note the value of <code>result</code></li></ol>"
        },
        'Feature Set 2': {
            html: "<ol class='left-border'><li>Add the following code to the bottom of <code>index.php</code><br><div class=\"highlight highlight-text-html-php\"><pre><span class=\"pl-pse\">&lt;?php</span><span class=\"pl-s1\"></span>\n<span class=\"pl-s1\">&nbsp;&nbsp;<span class=\"pl-smi\">$c</span> <span class=\"pl-k\">=</span> <span class=\"pl-c1\">2</span>;</span>\n<span class=\"pl-s1\">&nbsp;&nbsp;<span class=\"pl-k\">include</span>(<span class=\"pl-s\"><span class=\"pl-pds\">'</span>includes/data2.php<span class=\"pl-pds\">'</span></span>);</span>\n<span class=\"pl-s1\">&nbsp;&nbsp;<span class=\"pl-k\">include_once</span>(<span class=\"pl-s\"><span class=\"pl-pds\">'</span>includes/data2.php<span class=\"pl-pds\">'</span></span>);</span>\n<span class=\"pl-s1\">&nbsp;&nbsp;<span class=\"pl-k\">include</span>(<span class=\"pl-s\"><span class=\"pl-pds\">'</span>includes/data2.php<span class=\"pl-pds\">'</span></span>);</span>\n<span class=\"pl-s1\">&nbsp;&nbsp;<span class=\"pl-smi\">$result2</span> <span class=\"pl-k\">=</span> <span class=\"pl-smi\">$c</span>;</span>\n<span class=\"pl-s1\">&nbsp;&nbsp;<span class=\"pl-c1\">print</span>(<span class=\"pl-s\"><span class=\"pl-pds\">\"</span>&lt;br&gt;Result 2 = <span class=\"pl-smi\">$result2</span><span class=\"pl-pds\">\"</span></span>);</span>\n<span class=\"pl-s1\"></span><span class=\"pl-pse\"><span class=\"pl-s1\">?</span>&gt;</span></pre></div></li><li>In the includes folder, create a file called <code>data2.php</code></li><li>In the <code>data2.php</code> file, include the following code:<br><div class=\"highlight highlight-text-html-php\"><pre><span class=\"pl-s1\"><span class=\"pl-k\">&lt;</span>?<span class=\"pl-c1\">php</span> </span>\n<span class=\"pl-s1\">&nbsp;&nbsp;<span class=\"pl-smi\">$c</span> <span class=\"pl-k\">=</span> <span class=\"pl-smi\">$c</span> <span class=\"pl-k\">*</span> <span class=\"pl-c1\">2</span>; </span>\n<span class=\"pl-s1\"></span><span class=\"pl-pse\"><span class=\"pl-s1\">?</span>&gt;</span></pre></div></li><li>Run <code>index.php</code> and note the value of <code>result2</code></li></ol>"
        },
        'Feature Set 3': {
            html: "<ol class='left-border'><li>Create a new file, <code>index_main.php</code></li><li>In the <code>index_main.php</code> file include the following code:<br><div class=\"highlight highlight-text-html-basic\"><pre>&lt;<span class=\"pl-ent\">main</span> <span class=\"pl-e\">id</span>=<span class=\"pl-s\"><span class=\"pl-pds\">\"</span>main_content<span class=\"pl-pds\">\"</span></span>&gt;\n&nbsp;&nbsp;Main Content\n&lt;/<span class=\"pl-ent\">main</span>&gt;\n&lt;<span class=\"pl-ent\">div</span>&gt;I'm not in the main content or the footer&lt;/<span class=\"pl-ent\">div</span>&gt;\n&lt;<span class=\"pl-ent\">footer</span>&gt;\n&nbsp;&nbsp;&lt;<span class=\"pl-ent\">nav</span> <span class=\"pl-e\">id</span>=<span class=\"pl-s\"><span class=\"pl-pds\">\"</span>site_map<span class=\"pl-pds\">\"</span></span>&gt;\n&nbsp;&nbsp;&nbsp;&nbsp;&lt;<span class=\"pl-ent\">ul</span>&gt;\n&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;<span class=\"pl-ent\">li</span>&gt;Location&lt;/<span class=\"pl-ent\">li</span>&gt;\n&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;<span class=\"pl-ent\">li</span>&gt;Contact Us&lt;/<span class=\"pl-ent\">li</span>&gt;\n&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;<span class=\"pl-ent\">li</span>&gt;Hours&lt;/<span class=\"pl-ent\">li</span>&gt;\n&nbsp;&nbsp;&nbsp;&nbsp;&lt;/<span class=\"pl-ent\">ul</span>&gt;\n&nbsp;&nbsp;&lt;/<span class=\"pl-ent\">nav</span>&gt;\n&lt;/<span class=\"pl-ent\">footer</span>&gt;</pre></div></li><li>Add filler text into the main content, as well as a link to an image</li><li>Run the file to ensure it looks correct</li><li>Create a new file, <code>main.php</code><ul><li>Take everything in between the <code>&lt;main&gt;</code> tags and move it into <code>main.php</code></li></ul></li><li>Create a new file, <code>footer.php</code><ul><li>Take everything in between the <code>&lt;footer&gt;</code> tags and move it into <code>footer.php</code></li></ul></li><li>Run <code>index_main.php</code> again, to ensure that the only visible text is the content of the <code>&lt;div&gt;</code> tag</li><li>Use include to include <code>main.php</code> and <code>footer.php</code> into their appropriate places</li><li>Run <code>index_main.php</code> a final time, do you see all the content from <code>main.php</code> and <code>footer.php</code></li></ol>"
        }
    }
});

//PHP Mailer
app.controller('phpMailerController', function() {
    this.title = ['PHP Mailer', 'PHP Mailer'];
    this.description = "<p>This prototype builds from previous PHP prototypes and introduces you to sending an email using PHP. This prototype will cover two ways of sending an email, the first way will be by just using the default mail function built into PHP (this way is not always effective). The second method will be using a pre-built mailer library (this method has a much higher chance of working than the previous method)</p><p>This prototype is based on the information that you obtained through the following resources <b>(If you haven't gone through these then please do so now).</b></p>";
    this.branch = 'php_mailer';
    this.protoId = 38;

    this.links = {
        Presentation: {},
        Video: {}
    };

    this.demo = {
        'Video Prototype Demo': {
            title: "PHP Mailer",
            link: "",
            live: false
        }
    };

    this.features = {
        'Getting Started': {
            html: "<ol class='left-border'><li>Make a new email account (gmail preferred) to handle your email sending.  You shouldn't use your real account as you have to limit this account's security.<li>Follow these <a href='https://support.google.com/accounts/answer/6010255?hl=en' target='_blank'>instructions</a> to enable 'less secure access' on the email account so it can receive messages from your server</li></li><li><code>mail_sender.html</code> is a basic form to send data to your email handler.  You must complete this to send data to your <code>mail_handler.php</code></li><li><code>mail_handler.php</code> Handles mail messages and sends an email through your actual email account. Configure this to use the incoming post data<li>You must make a copy of <code>email_config.default.php</code> and place the copy into <code>email_config.php</code>, and then set it to your email information.</li><li><b>Reminder</b>: Do not add your <code>email_config.php</code> file in your git repo: <code>mail_example</code><ul><li>There is a <code>.gitignore</code> file included with this repo</li><li>Check the <code>.gitignore</code> file to make sure it matches your file name</li></ul></li></ol>"
        },
        'Feature Set 1': {
            html: "<ol class='left-border'><li>Update your form to use ajax calls instead</li><li>Have your mail handler respond back with json</li><li>show feedback from the mail send on the original sending page</li></ol>"
        },
        'Feature Set 2': {
            html: "<ol class='left-border'><li>In your mail handler, and your form, validate the data</li><li>Show the feedback on the main page.  For best results, show feedback pertinent feedback for each individual input</li><li>Remember to show that you are sending data to your mail handler when you click the submit button.  It can take quite a while to send mail!</li></ol>"
        }
    }
});

//PHP Sessions
app.controller('phpSessionsController', function() {
    this.title = ['PHP Sessions', 'PHP Sessions'];
    this.description = "<p>This prototype builds from previous PHP prototypes and introduces you to PHP sessions. Sessions allow you to remember data about a specific user even when navigating to different pages on the site.</p><p>This prototype is based on the information that you obtained through the following resources <b>(If you haven't gone through these then please do so now).</b></p>";
    this.branch = 'php_sessions';
    this.protoId = 39;

    this.links = {
        Presentation: {
            'PHP Sessions': 'https://docs.google.com/presentation/d/1qGS1DuTrMcowgHhcFh6SsWwybrTXwahUe2Fnq4YrXRg/pub?start=false&loop=false&delayms=15000&slide=id.p'
        },
        Video: {
            'PHP Sessions': 'https://www.youtube.com/watch?v=7liiRMYBysU'
        }
    };

    this.demo = {
        'Video Prototype Demo': {
            title: "PHP Sessions",
            link: "",
            live: false
        }
    };

    this.features = {
        'Getting Started': {
            html: "<ol class='left-border'><li>The following two files have been included your <code>php_sessions</code> folder<ol class='nested-1'><li><code>session_reader.php</code></li><li><code>session_setter.php</code></li></ol></li><li>Add your code to the appropriate files based on the below instructions</li></ol>"
        },
        'Feature Set 1': {
            html: "<b>In <code>session_setter.php</code></b><ol class='left-border'><li>Create a form with 3 fields<ol class='nested-1'><li>Name</li><li>Age</li><li>Occupation</li></ol></li><li>In the form <code>action</code>, send the data to <code>session_reader.php</code></li></ol><b>In <code>session_reader.php</code></b><ol class='left-border'><li value='3'>Print out the data coming from the form</li><li>Save the form data to the <code>$_SESSION</code> super-global</li></ol><b>Go back to your <code>session_setter.php</code></b><ol class='left-border'><li value='5'>In the <code>value</code> for each input, print the appropriate <code>$_SESSION</code> element to remember the previous value<ul><li><button class='btn btn-danger btn-xs' type='button' data-toggle='collapse' data-target='#hint1' aria-expanded='false' aria-controls='hint1'>View Hint</button><ol id='hint1' class='collapse nested-1'><li>Check if the value exists before assigning it to the inputs <code>value</code> attribute</li><li>If it is not set choose a default value, most likely an empty string <code>''</code></li></ol></li></ul></li></ol>"
        },
        'Feature Set 2': {
            html: "<b>In <code>session_reader.php</code></b><ol class='left-border'><li>Perform regex checks on the incoming data</li><li>If any data has an error<ul><li>Save it to an array inside <code>$_SESSION</code> called <code>errors</code></li></ul></li><li>Use the <code>header()</code> PHP function to redirect the page back to <code>session_setter.php</code><ul><li><div class='highlight highlight-text-html-php'><pre><span class='pl-s1'><span class='pl-c1'>header</span>(<span class='pl-s'><span class='pl-pds'>'</span>location: session_setter.php<span class='pl-pds'>'</span></span>);</span></pre></div></li><li><b>IMPORTANT</b>: Make sure that you <b>DO NOT</b> print anything before calling <code>header()</code> or it will not work</li></ul></li></ol><b>In <code>session_setter.php</code></b><ol class='left-border'><li value='4'>Underneath each input, print the corresponding error message <b>IF IT IS SET</b></li></ol>"
        }
    }
});

//PHP Super Globals
app.controller('phpSuperGlobalsController', function() {
    this.title = ['PHP Super Globals', 'PHP Super Globals'];
    this.description = "<p>This prototype builds from previous PHP prototypes and introduces you to PHP Super Globals. This prototype will cover the $_GET and $_POST super globals. PHP has several different super globals, more of which will be covered in upcoming lessons and prototypes.</p><p>This prototype is based on the information that you obtained through the following resources <b>(If you haven't gone through these then please do so now).</b></p>";
    this.branch = 'php_super_globals';
    this.protoId = 40;

    this.links = {
        Presentation: {
            'PHP Super Globals': 'https://docs.google.com/presentation/d/1Lj3C7m6bHcixreDZT9_Tct7448YKDmeKmmECKWAWKio/pub?start=false&loop=false&delayms=3000&slide=id.p'
        },
        Video: {
            'PHP Super Globals': 'https://www.youtube.com/watch?feature=player_embedded&v=sctNIja-oZE'
        }
    };

    this.demo = {
        'Video Prototype Demo': {
            title: "PHP Super Globals",
            link: "",
            live: false
        }
    };

    this.features = {
        'Getting Started': {
            html: "<ol class='left-border'><li>There are no files included in this prototype.</li></ol>"
        },
        'Feature Set 1': {
            html: "<b>Create <code>index.php</code></b><ol class='left-border'><li>Use <code>print_r</code> to print the <code>GET</code> super-global array</li><li>Use <code>var_dump</code> to print the <code>POST</code> super-global array</li></ol><b>Using Postman</b><ol class='left-border'><li value='3'>Make <code>POST</code> and <code>GET</code> requests to your <code>index.php</code> file</li><li>Note the response</li></ol>"
        },
        'Feature Set 2': {
            html: "<ul class='left-border'><li class='clean-list'>Create <code>form.html</code>, in it create a <code>&lt;form&gt;</code><ol><li>Add an <code>input</code> to your form with the following attributes<ul><li><code>type=\"text\"</code></li><li><code>name=\"name\"</code></li><li><code>id=\"my_name\"</code></li></ul></li><li>Add a <code>select</code> to your form with the following attributes and options<ul><li><code>name=\"gender\"</code></li><li>Options:<ol class='nested-1'><li>Male</li><li>Female</li><li>Other</li></ol></li></ul></li><li>Add <b>3</b> <code>inputs</code> with identical attributes<ul><li><code>placeholder=\"favorite fruit\"</code></li><li><code>name=\"fav_fruit[]\"</code> (Yes, including the brackets)</li></ul></li><li>Add a submit button</li><li>For the form <code>action</code>, put your <code>index.php</code> file</li><li>For the <code>method</code>, choose <code>GET</code> or <code>POST</code>, but try both and note the differences in the output</li></ol></li></ul>"
        },
        'Feature Set 3': {
            html: "<ol class='left-border'><li>Create <code>ajax.html</code></li><li>Create a new <code>form</code> with the the following fields<ol class='nested-1'><li><code>checkbox</code><ul><li><code>value=\"howdy\"</code></li></ul></li><li><code>textarea</code></li><li>Add a regular button that triggers an AJAX call (<i>Make sure it doesn't submit the form</i>)</li></ol></li><li>Create an ajax call<ol class='nested-1'><li>For <cpde>url</cpde>, choose the <code>index.php</code> from above</li><li>For <code>method</code>, choose <code>GET</code> or <code>POST</code> at your discretion</li><li>For <code>data</code>, add the values of the form fields above</li><li>For <code>dataType</code>, choose <code>text</code></li><li><code>console.log</code> the response from <code>index.php</code></li></ol></li></ol>"
        }
    }
});

//PHP User Auth
app.controller('phpUserAuthController', function() {
    this.title = ['PHP Basic User Auth', 'PHP User Auth'];
    this.description = "<p>This prototype builds from previous PHP prototypes and introduces you to basic user authentication through PHP.</p><p>This prototype is based on the information that you obtained through the following resources <b>(If you haven't gone through these then please do so now).</b></p>";
    this.branch = 'php_user_auth';
    this.protoId = 41;

    this.links = {
        Presentation: {
            'User Authentication': "https://docs.google.com/presentation/d/1VVocAhqWCeRhTpwlIWZ7aNuguYWf2RNJu-uj_IvL1aQ/pub?start=false&loop=false&delayms=15000"
        },
        Video: {
            'User Authentication': "https://www.youtube.com/watch?feature=player_embedded&v=Xea32aJl8GY"
        }
    };

    this.demo = {
        'Video Prototype Demo': {
            title: "PHP Basic User Auth",
            link: "",
            live: false
        }
    };

    this.features = {
        'Getting Started': {
            html: "<ol class='left-border'><li>The following two files have been included your php_user_auth_basic folder<ol class='nested-1'><li><code>login_form.php</code></li><li><code>login_handler.php</code></li></ol></li><li>Add your code to the appropriate files based on the below instructions</li></ol>"
        },
        'Feature Set 1': {
            html: "<ul class='left-border'><li class='clean-list'><b>In <code>login_form.php</code> do the following:</b><ol><li>Create an input for <b>username</b></li><li>Create an input for <b>password</b></li><li>Create a <b>login button</b> that will be used to submit the form via AJAX</li><li>Create a JS click handler for the login button<ol class='nested-1'><li>That calls a function that performs an AJAX call</li><li><code>url: 'login_handler.php'</code></li><li><code>data: username, password</code></li><li><code>cache: false</code></li><li><code>method: 'post'</code></li><li><code>dataType: 'text'</code></li><li><code>success:</code> Inform user if they successfully logged in or not<ul><li>for now just <code>console.log</code> the response from the 'server' </li></ul></li></ol></li></ol></li><li class='clean-list'><b>In <code>login_handler.php</code> do the following:</b><ol><li value='5'>Create a nested associative array to hold several users: <code>$user_info</code><ul><li>The array should hold all the users for your 'site', add at least <b>5</b> users</li><li>You will use this array to validate a user or reject them if there info doesn't match<ul><li><button class='btn btn-danger btn-xs' type='button' data-toggle='collapse' data-target='#hint1' aria-expanded='false' aria-controls='hint1'>View Hint</button><ul id='hint1' class='collapse'><li class='clean-list'><div class='highlight highlight-text-html-php'><pre><span class='pl-s1'><span class='pl-smi'>$user_info</span> <span class='pl-k'>=</span> [</span>\n<span class='pl-s1'>&nbsp;&nbsp;&nbsp;&nbsp;[<span class='pl-s'><span class='pl-pds'>'</span>id<span class='pl-pds'>'</span></span><span class='pl-k'>=&gt;</span> <span class='pl-c1'>0</span>, <span class='pl-s'><span class='pl-pds'>'</span>username<span class='pl-pds'>'</span></span><span class='pl-k'>=&gt;</span><span class='pl-s'><span class='pl-pds'>'</span>dpaschal<span class='pl-pds'>'</span></span>, <span class='pl-s'><span class='pl-pds'>'</span>password<span class='pl-pds'>'</span></span> <span class='pl-k'>=&gt;</span> <span class='pl-s'><span class='pl-pds'>'</span>fluffybunnies<span class='pl-pds'>'</span></span>],</span>\n<span class='pl-s1'>&nbsp;&nbsp;&nbsp;&nbsp;[<span class='pl-s'><span class='pl-pds'>'</span>id<span class='pl-pds'>'</span></span><span class='pl-k'>=&gt;</span> <span class='pl-c1'>0</span>, <span class='pl-s'><span class='pl-pds'>'</span>username<span class='pl-pds'>'</span></span><span class='pl-k'>=&gt;</span><span class='pl-s'><span class='pl-pds'>'</span>rickybobby<span class='pl-pds'>'</span></span>, <span class='pl-s'><span class='pl-pds'>'</span>password<span class='pl-pds'>'</span></span> <span class='pl-k'>=&gt;</span> <span class='pl-s'><span class='pl-pds'>'</span>shakeandbake<span class='pl-pds'>'</span></span>],</span>\n<span class='pl-s1'>&nbsp;&nbsp;&nbsp;&nbsp;[<span class='pl-s'><span class='pl-pds'>'</span>id<span class='pl-pds'>'</span></span><span class='pl-k'>=&gt;</span> <span class='pl-c1'>0</span>, <span class='pl-s'><span class='pl-pds'>'</span>username<span class='pl-pds'>'</span></span><span class='pl-k'>=&gt;</span><span class='pl-s'><span class='pl-pds'>'</span>darkhelmet<span class='pl-pds'>'</span></span>, <span class='pl-s'><span class='pl-pds'>'</span>password<span class='pl-pds'>'</span></span> <span class='pl-k'>=&gt;</span> <span class='pl-s'><span class='pl-pds'>'</span>12345<span class='pl-pds'>'</span></span>]</span>\n<span class='pl-s1'>];</span></pre></div></li></ul></li></ul></li></ul></li><li>Get the data you received from your <code>login_form.php</code><ul><li>Declare a variable to hold the <code>username</code></li><li>Declare a variable to hold the <code>password</code></li></ul></li><li>Loop through the <code>$user_info</code> array till you find a matching <code>username</code>.<ul><li>Compare the user given data to the values in the <code>$user_info</code> array to see if there is a match</li></ul></li><li>Once you get the correct record, check the password within that record</li><li><b>NOTE:</b> Any response from <code>login_handler.php</code> will show up in the AJAX call's network call in <code>login_form.php</code></li><li>If the username and password match:<ul><li>Use sessions, and save the user's ID into the session variable under <code>user_id</code><ul><li><button class='btn btn-danger btn-xs' type='button' data-toggle='collapse' data-target='#hint2' aria-expanded='false' aria-controls='hint2'>View Hint</button><ul id='hint2' class='collapse'><li><div class='highlight highlight-text-html-php'><pre><span class='pl-s1'><span class='pl-smi'>$_SESSION</span>[<span class='pl-s'><span class='pl-pds'>'</span>user_id<span class='pl-pds'>'</span></span>] <span class='pl-k'>=</span> <span class='pl-c1'>5</span>;</span></pre></div></li></ul></li></ul></li><li>Print out a <span class='label label-success'>Success</span> message</li></ul></li><li>If the username and password <b>DON'T</b> match:<ul><li>Print out an <code class='label label-danger'>Error</code> message</li></ul></li></ol></li></ul>"
        },
        'Feature Set 2': {
            html: "<ul class='left-border'><li class='clean-list'><b>In <code>login_handler.php</code></b><ol><li>Make a php array called <code>$output</code><ol class='nested-1'><li>Give it an element of <cpde>success</cpde>. Set it to <b>true</b> if login was successful, <b>false</b> if not</li><li><b>If successful</b>, give it an element of <b>user_id</b>. Set it to the logging in user</li><li>Give it an element of <b>message</b>. Put an appropriate login message depending on login result</li></ol></li><li>Use <code>json_encode()</code> to encode <code>$output</code> into a string, <code>$output_string</code></li><li>Print: <code>$output_string</code></li><li>Remember: If any other text is printed out alongside the json, the json conversion in the AJAX call will fail. <b>The only thing printed can be json</b></li></ol></li><li class='clean-list'><b>In <code>login_form.php</code></b><ol><li value='5'>Change <code>dataType</code> to 'json'</li><li>In the <code>success</code> handler, handle the incoming json data to inform the user of <span class='label label-success'>success</span> or <span class='label label-danger'>failure</span></li></ol></li></ul>"
        },
        'Feature Set 3': {
            html: "<ul class='left-border'><li class='clean-list'><b>In phpfiddle</b><ol><li>Use <code>sha1</code> to encrypt your password<ul><button class='btn btn-danger btn-xs' type='button' data-toggle='collapse' data-target='#hint3' aria-expanded='false' aria-controls='hint3'>View Hint</button><ul id='hint3' class='clean-list collapse'><li><div class='highlight highlight-text-html-php'><pre><span class='pl-s1'><span class='pl-smi'>$encrypted_pass</span> <span class='pl-k'>=</span> <span class='pl-c1'>sha1</span>(<span class='pl-s'><span class='pl-pds'>'</span>fluffybunnies<span class='pl-pds'>'</span></span>);</span>\n<span class='pl-s1'><span class='pl-c1'>print</span>(<span class='pl-smi'>$encrypted_pass</span>);</span>\n<span class='pl-s1'><span class='pl-c'>// outputs 2beb0192eb1ca5a8756bc89a09b93036e1854049</span></span></pre></div></li></ul></ul></li></ol></li><li class='clean-list'><b>In <code>login_handler.php</code></b><ol><li value='2'>Update the password in your <code>$user_info</code> array to use <code>sha1()</code></li><li>Validate your user using <code>sha1()</code><ul><li>Update your user variable that holds the user given password to use <code>sha1()</code></li><li><button class='btn btn-danger btn-xs' type='button' data-toggle='collapse' data-target='#hint4' aria-expanded='false' aria-controls='hint4'>View Hint</button></li><li id='hint4' class='clean-list collapse'><div class='highlight highlight-text-html-php'><pre><span class='pl-s1'><span class='pl-smi'>$user_info</span> <span class='pl-k'>=</span> [[<span class='pl-s'><span class='pl-pds'>'</span>id<span class='pl-pds'>'</span></span><span class='pl-k'>=&gt;</span> <span class='pl-c1'>0</span>, <span class='pl-s'><span class='pl-pds'>'</span>username<span class='pl-pds'>'</span></span><span class='pl-k'>=&gt;</span><span class='pl-s'><span class='pl-pds'>'</span>dpaschal<span class='pl-pds'>'</span></span>, <span class='pl-s'><span class='pl-pds'>'</span>password<span class='pl-pds'>'</span></span> <span class='pl-k'>=&gt;</span> <span class='pl-s'><span class='pl-pds'>'</span>2beb0192eb1ca5a8756bc89a09b93036e1854049<span class='pl-pds'>'</span></span>]];</span></pre></div></li></li></ul></li></ol></li></ul>"
        }
    }
});

//PHP Regex
app.controller('phpRegexController', function() {
    this.title = ['PHP Regular Expressions', 'PHP Regex'];
    this.description = "<p>This prototype builds from previous PHP prototypes and introduces you to Regular Expressions in PHP. You will be obtaining </p><p>This prototype is based on the information that you obtained through the following resources <b>(If you haven't gone through these then please do so now).</b></p>";
    this.branch = 'php_regex';
    this.protoId = 42;

    this.links = {
        Presentation: {},
        Video: {}
    };

    this.demo = {
        'Video Prototype Demo': {
            title: "PHP Regex",
            link: "",
            live: false
        }
    };

    this.features = {
        'Getting Started': {
            html: "<ol class='left-border'><li><p>The following two files have been included</p><ol class='nested-1'><li><code>receiver.php</code></li><li><code>sender.php</code></li></ol></li><li><p>Add your code to the appropriate files based on the below instructions</p></li></ol>"
        },
        'Feature Set 1': {
            html: "<ul class='left-border'><li class='clean-list'><b>In <code>receiver.php</code></b><ol><li>Write a PHP statement to print out the <code>$_POST</code> data coming from <code>sender.php</code></li></ol></li></ul>"
        },
        'Feature Set 2': {
            html: "<ul class='left-border'><li class='clean-list'><b>In <code>receiver.php</code></b><ol><li>write a PHP statement to loop through the <code>$_POST</code> data coming from <code>sender.php</code><ul><li><button class='btn btn-danger btn-xs' type='button' data-toggle='collapse' data-target='#hint1' aria-expanded='false' aria-controls='hint1'>View Hint</button><ul id='hint1' class='collapse'><li>For a for loop, <code>count([variable])</code> will tell you the length of an array</li><li>If you use a <code>foreach</code> loop, information can be found here:<ul><li><a href='http://php.net/manual/en/control-structures.foreach.php' target='_blank'>PHP Foreach Info</a></li></ul></li></ul></li></ul></li><li>On a separate line (in the browser output), print out each element key/value in <code>$_POST</code><ul><li><button class='btn btn-danger btn-xs' type='button' data-toggle='collapse' data-target='#hint2' aria-expanded='false' aria-controls='hint2'>View Hint</button><ul id='hint2' class='collapse'><li class='clean-list'><div class='highlight highlight-text-html-php'><pre><span class='pl-s1'><span class='pl-en'>first_name</span> : <span class='pl-c1'>John</span></span>\n<span class='pl-s1'><span class='pl-en'>age</span>: <span class='pl-c1'>32</span></span>\n<span class='pl-s1'><span class='pl-en'>phone</span>: <span class='pl-c1'>555</span><span class='pl-k'>-</span><span class='pl-c1'>555</span><span class='pl-k'>-</span><span class='pl-c1'>5555</span></span></pre></div></li></ul></li></ul></li></ol></li></ul>"
        },
        'Feature Set 3': {
            html: "<ul class='left-border'><li class='clean-list'>In <code>receiver.php</code>, in the loop<ol><li>Create a switch statement based on the key of the <code>$_POST</code> array</li><li>Make a different <code>case</code> for each validation<ul><li><button class='btn btn-danger btn-xs' type='button' data-toggle='collapse' data-target='#hint3' aria-expanded='false' aria-controls='hint3'>View Example</button><ul id='hint3' class='collapse'><li class='clean-list'><div class='highlight highlight-text-html-php'><pre><span class='pl-s1'><span class='pl-k'>case</span> <span class='pl-c1'>first_name</span>:</span>\n<span class='pl-s1'>&nbsp;&nbsp;&nbsp;&nbsp;<span class='pl-c1'>print</span>(<span class='pl-s'><span class='pl-pds'>\"</span>checking first_name : <span class='pl-smi'>$_POST</span>[first_name]<span class='pl-pds'>\"</span>);</span></span>\n<span class='pl-s1'><span class='pl-c'>&nbsp;&nbsp;&nbsp;&nbsp;//note that I didn't use quotes on the array key when used inside double quotes</span></span>\n<span class='pl-s1'><span class='pl-s'>&nbsp;&nbsp;&nbsp;&nbsp;break;</span></span></pre></div></li></ul></li></ul></li><li>Inside your case statements, use <code>preg_match()</code> to determine if the value matches anappropriate RegEx<ul><li><button class='btn btn-danger btn-xs' type='button' data-toggle='collapse' data-target='#hint4' aria-expanded='false' aria-controls='hint4'>View Example</button><ul id='hint4' class='collapse'><li class='clean-list'><div class='highlight highlight-text-html-php'><pre><span class='pl-s1'><span class='pl-k'>if</span>(<span class='pl-c1'>preg_match</span>( <span class='pl-sr'><span class='pl-pds'>'/</span><span class='pl-k'>^</span><span class='pl-pds'>[a-zA-Z0-9{2,}$/' , $_POST['first_name']</span>) != 1)</span></span>\n<span class='pl-s1'><span class='pl-sr'>{</span></span>\n<span class='pl-s1'><span class='pl-c'>&nbsp;&nbsp;&nbsp;&nbsp;//The text didn't match the given criteria, print an error message,\n&nbsp;&nbsp;&nbsp;&nbsp;//Add to an error array, or whatever you deem appropriate</span></span>\n<span class='pl-s1'><span class='pl-sr'>}</span></span></pre></div></li></ul></li></ul></li><li>Match the following conditions:<ol class='nested-1'><li><b>First Name</b>: At least 2 characters (a-zA-Z) only</li><li><b>Age</b>: No more than 3 numbers</li><li><b>Phone</b>: Standard <b>US</b> phone number with these variations:<ul><li class='clean-list'><b>Examples</b>:<ol class='nested-2'><li>(###) ###-####</li><li>### ### ####</li><li>###-###-####</li><li>1 ### ### ####</li></ol></li></ul></li><li><b>Username</b>:<ol class='nested-2'><li>Must start with a letter</li><li>Must have at least 6 characters total</li><li>Only characters and numbers (a-zA-Z0-9) (no special characters)</li></ol></li><li><b>Extra Challenge!</b>:<ul><li>Find if the value from the <code>textarea</code> has <b>3</b> consecutive numbersanywhere within its contents</li></ul></li></ol></li></ol></li></ul>"
        }
    }
});