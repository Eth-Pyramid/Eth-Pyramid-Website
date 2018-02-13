<?php
include('include/lang.php');
$main_class = 'faq-main';
include('include/head.php');
?>

<script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/Chart.js/2.7.1/Chart.bundle.js"></script>

<div class="faq-main-content">
    <div class="faq-header text-center">
        <h2 style="color:#d69361"><?php __('EthPyramid Statistics'); ?></h2>
        <div id="quoteDisplay">A collection of statistics relating to the pyramid.</div>
    </div>

    <div style="width: 850px; margin: 25px auto; background: white; padding: 25px;">
        <h3>Top 20 Token Holders</h3>
        <p>Aliases of dev team members are shown in place of address if known.</p>
        <canvas id="top-holders" width="800" height="700" style="margin-top: 25px;"></canvas>
    </div>

    <div style="width: 850px; margin: 25px auto; background: white; padding: 25px;">
        <h3>Daily Volume in ETH (Last 5 days)</h3>
        <canvas id="daily-volume" width="800" height="700" style="margin-top: 25px;"></canvas>
    </div>

    <script type="text/javascript">
      function randomColor (i, d) {
        return '#' + Math.floor(16777215 / (d + 1) * (i + 1)).toString(16)
      }

      var background_colors = []
      for (var i = 0; i < 21; i++) {
        background_colors.push(randomColor(i, 21))
      }

      $.getJSON('https://api.ethpyramid.io/holders.php', function (data) {
        var ctx = document.getElementById('top-holders')
        data.datasets[0].backgroundColor = background_colors
        new Chart(ctx, {
          type: 'pie',
          data: data,
          options: {
            responsive: false,
            cutoutPercentage: 50
          }
        })
      })

      $.getJSON('https://api.ethpyramid.io/volume.php', function (data) {
        var ctx = document.getElementById('daily-volume')
        new Chart(ctx, {
          type: 'bar',
          data: data,
          options: {
            responsive: false,
          }
        })
      })
    </script>

</div>

<?php include('include/foot.php'); ?>
