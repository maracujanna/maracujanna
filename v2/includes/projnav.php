<?php 
    define("ROOT_PATH", $_SERVER["DOCUMENT_ROOT"] . "/");
    include_once(ROOT_PATH . "includes/config.php");
    include(ROOT_PATH . "/includes/arrays.php");
?>

<ul class="proj-list">
    <?php foreach($projs as $proj) {
        echo "  <li>
                    <a href=\"/$proj[link]\">$proj[title]</a>
                </li>
        ";
        }
    ?>
</ul>

 
      
      