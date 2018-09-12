<!-- HEADER -->
<?php 
  include_once("./includes/config.php");
  include(ROOT_PATH . "/includes/arrays.php");
  include('./includes/header.php');
?>


<!-- BEGIN  -->
<main class="main" id="main">
  <ul class="proj-gallery">

    <?php foreach($projs as $proj) {
      echo "
        <li> 
          <div class=\"proj-gallery-cont1\">     
            <a href=\"$proj[link]\">
              <img src=\"$proj[thumb]\" alt=\"$proj[title]\">
            </a>
          </div>
        </li>
        ";
    }
    ?>
  
  </ul>
  
</main>

<!-- FOOTER -->
<?php include('./includes/footer.php'); ?>