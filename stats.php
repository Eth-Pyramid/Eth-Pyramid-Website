<?php
include('include/lang.php');
include('include/head.php');
?>

<script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/Chart.js/2.7.1/Chart.bundle.js"></script>

<div class="ui container vertical stripe">
	<h3 class="ui horizontal divider"><?php __('EthPyramid Statistics'); ?></h3>

    <div id="charts" class="ui stackable grid">
        <div class="ui eight wide column">
            <h3>Top 25 Token Holders</h3>
            <p>Aliases of dev team members are shown in place of address if known.</p>
            <canvas id="top-holders" width="800" height="700" style="margin-top: 25px;"></canvas>
        </div>

		<div class="ui eight wide column">
            <h3>Daily Volume (Last 5 days)</h3>
            <p>Volume is in ETH and timezone is UTC.</p>
            <canvas id="daily-volume" width="800" height="700" style="margin-top: 25px;"></canvas>
        </div>
    </div>

    <script type="text/javascript">
      function selectColor (colorNum, colors) {
        colorNum = (colorNum * colorNum) % colors
        if (colors < 1) colors = 1
        return 'hsl(' + (colorNum * (360 / colors) % 360) + ',60%,50%)'
      }

      var background_colors = []
      for (var i = 0; i < 26; i++) {
        background_colors.push(selectColor(i, 26))
      }

      $.getJSON('https://api.ethpyramid.io/holders.php', function (data) {
        var ctx = document.getElementById('top-holders')
        data.datasets[0].backgroundColor = background_colors
        new Chart(ctx, {
          type: 'pie',
          data: data,
          options: {
            responsive: true,
            cutoutPercentage: 50,
            legend: {
              display: false
            }
          }
        })
      })

      $.getJSON('https://api.ethpyramid.io/volume.php', function (data) {
        var ctx = document.getElementById('daily-volume')
        new Chart(ctx, {
          type: 'bar',
          data: data,
          options: {
            responsive: true,
            scales: {
              yAxes: [{
                stacked: true,
              }],
              xAxes: [{
                stacked: true,
              }]
            }
          }
        })
      })
    </script>

</div>

<?php include('include/foot.php'); ?>
