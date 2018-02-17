<?php
include('include/lang.php');
include('include/head.php');
?>

<script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/Chart.js/2.7.1/Chart.bundle.js"></script>

<div class="ui container vertical stripe">
    <h3 class="ui horizontal divider"><?php __('stats.heading'); ?></h3>

    <div id="charts" class="ui stackable grid">

        <div class="ui sixteen wide column">
            <div class="ui equal width stackable grid">
                <div class="ui statistic column">
                    <div class="label">
						<?php __('stats.token-supply'); ?>
                    </div>
                    <div class="value" id="epy-supply">
                        0 EPY
                    </div>
                </div>
                <div class="ui statistic column">
                    <div class="label">
						<?php __('stats.total-volume'); ?>
                    </div>
                    <div class="value" id="total-volume">
                        0 ETH
                    </div>
                </div>
                <div class="ui statistic column">
                    <div class="label">
						<?php __('stats.eth-balance'); ?>
                    </div>
                    <div class="value" id="contract-balance">
                        0 EPY
                    </div>
                </div>
                <div class="ui statistic column">
                    <div class="label">
						<?php __('stats.total-divs'); ?>
                    </div>
                    <div class="value" id="total-dividends">
                        0 ETHt s
                    </div>
                </div>
            </div>
        </div>

        <div class="ui eight wide column">
            <h3><?php __('stats.top25.heading'); ?></h3>
            <p><?php __('stats.top25.comment'); ?></p>
            <canvas id="top-holders" width="800" height="700" style="margin-top: 25px;"></canvas>
        </div>

        <div class="ui eight wide column">
            <h3><?php __('stats.daily.heading'); ?></h3>
            <p><?php __('stats.daily.comment'); ?></p>
            <canvas id="daily-volume" width="800" height="700" style="margin-top: 25px;"></canvas>
        </div>
    </div>

    <script type="text/javascript">
      /**
       * Converts an HSL color value to RGB. Conversion formula
       * adapted from http://en.wikipedia.org/wiki/HSL_color_space.
       * Assumes h, s, and l are contained in the set [0, 1] and
       * returns r, g, and b in the set [0, 255].
       *
       * @param   {number}  h       The hue
       * @param   {number}  s       The saturation
       * @param   {number}  l       The lightness
       * @return  {string}           The RGB representation
       */
      function hslToRgb (h, s, l) {
        var r, g, b

        if (s == 0) {
          r = g = b = l // achromatic
        } else {
          var hue2rgb = function hue2rgb (p, q, t) {
            if (t < 0) t += 1
            if (t > 1) t -= 1
            if (t < 1 / 6) return p + (q - p) * 6 * t
            if (t < 1 / 2) return q
            if (t < 2 / 3) return p + (q - p) * (2 / 3 - t) * 6
            return p
          }

          var q = l < 0.5 ? l * (1 + s) : l + s - l * s
          var p = 2 * l - q
          r = hue2rgb(p, q, h + 1 / 3)
          g = hue2rgb(p, q, h)
          b = hue2rgb(p, q, h - 1 / 3)
        }

        return '#' + Math.round(r * 255).toString(16) + Math.round(g * 255).toString(16) + Math.round(b * 255).toString(16)
      }

      function selectColor (colorNum, colors) {
        colorNum = (colorNum * colorNum) % colors
        return hslToRgb(1 / colors * colorNum, 0.6, 0.5)
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

      $.getJSON('https://api.ethpyramid.io/stats.php', function (data) {
        $('#epy-supply').html(data.total_supply.toFixed(0) + ' EPY')
        $('#total-volume').html(data.total_volume.toFixed(0) + ' ETH')
        $('#contract-balance').html(data.contract_balance.toFixed(0) + ' ETH')
        $('#total-dividends').html((data.total_volume / 10).toFixed(0) + ' ETH')
      })
    </script>

</div>

<?php include('include/foot.php'); ?>
