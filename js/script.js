// function to create new cookie
function createCookie(name, value, days) {
    var expires = "";
    if (days) {
        var date = new Date();
        date.setTime(date.getTime() + (days*24*60*60*1000));
        expires = "; expires=" + date.toUTCString();
    }
    document.cookie = name + "=" + value + expires + "; path=/";
}

// function to read cookie by name
function readCookie(name) {
    var nameEQ = name + "=";
    var ca = document.cookie.split(';');
    for(var i=0;i < ca.length;i++) {
        var c = ca[i];
        while (c.charAt(0)==' ') c = c.substring(1,c.length);
        if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length,c.length);
    }
    return null;
}

// This is the only way I can do to manipulate the progress bar for now
function updateProgressBar(eosDistributedForPublic) {
  var totalEos = Math.pow(10, 9) // Total tokens available for sale is 1,000,000,000
  var eosDistributedForShareHolder = totalEos / 10 // 10% is received for sharedholder
  // We display the total eos distributed for shareholder and public
  var eosDistributed = eosDistributedForPublic + 100000000
  var barPercentage = Math.floor(eosDistributed / totalEos * 100)

  var t = $('.progress-bar');
  t.data('percentage', barPercentage);

  // add some "gimme" percentage when data-percentage is <2
  if (parseInt((t.data('percentage')), 10) < 2) barPercentage = 2;
  // fill in bars and labels
  t.find('.label-text').text(eosDistributed + ' EOS');
  t.find(".label").css("right", -$('.label').width()/2)
  t.children('.bar').animate({
    width: barPercentage + '%'
  }, 500);
  t.find('.label').animate({
    opacity: 1
  }, 1000);
}

$(document).ready(function () {
  var scrollTop = $(window).scrollTop();
  if(scrollTop > 100){
    $(".header").addClass("header-animate");
  }
  $(window).scroll(function () {
    var scrollTop = $(window).scrollTop();
    if(scrollTop > 100){
      $(".header").addClass("header-animate");
    }else{
      $(".header").removeClass("header-animate");
    }
  });
  $("a[data-scroll]").on("click", function (event) {
    event.preventDefault();
    if($(this).attr('data-scroll')){
      $("body, html").animate({
        scrollTop: $('#'+$(this).attr('data-scroll')).offset().top - $('.header').height()
      },"ease-in");
    }
  });

  $(".copy").on("click", function (event) {
    event.preventDefault();
      var copyTextarea = $(this).parents('li, .col').find(".copy-area");
      copyTextarea.select();

      try {
          var successful = document.execCommand('copy');
          var msg = successful ? 'successful' : 'unsuccessful';
          console.log('Copying text command was ' + msg);
      } catch (err) {
          console.log('Oops, unable to copy');
      }
  });

  $(document).on("click",".navigation.open a", function (event) {
    //event.preventDefault();
    //console.log($(this).parents('.navigation'));
    $(this).parents('.navigation').removeClass('open');
    $("#nav-icon").removeClass("open");
    $(".header").removeClass("open");
    $("body").removeClass("overflow-hidden");
  });

  $(document).on("click", "#nav-icon", function () {
    $(this).toggleClass('open');
    $('.navigation').toggleClass('open');
    $(".header").toggleClass("open");
    $("body").toggleClass("overflow-hidden");
  });

    // Token distribution countdown
    // var tokenDistrubutionStart = moment.tz("2017-06-26 13:00:00", "UTC");
    // $('#presale-countdown').countdown(tokenDistrubutionStart.toDate(), function(event) {
    //     $(this).html(event.strftime('%D:%H:%M:%S'));
    // }).on('finish.countdown', function(event) {
    //     // Reload The Page
    //     console.log("Reload");
    //     top.location.reload(true);
    // });

    if(location.hash){
        $("body, html").animate({
            scrollTop: $(location.hash).offset().top - $('.header').height()
        },"ease-in").stop(true,true);
    }
    $('#buy-eos-tokens, #more-information').click(function (event) {
        event.preventDefault();
        var dataSoruce = this.id;
        $('#buy-token').modal('show');
        $("#token-purchase-agreement-continue").attr("data-source", dataSoruce);
    });

    // Buy EOS Terms and Conditions Check
    $(".accept").click(function (event) {
      var counter = 0;
      $(".accept").each(function(key, checkbox) {
        if(checkbox.checked == false) {
          $("#token-purchase-agreement-continue").attr("disabled", "disabled");
          return false;
        } else {
          counter++;
          if(counter == $(".accept").length) {
            $("#token-purchase-agreement-continue").attr("disabled", false);
          }
        }
      });
    });
    $('#buy-token').on($.modal.AFTER_CLOSE, function(event, modal) {
      $(".accept").prop('checked', false);
      $("#token-purchase-agreement-continue").attr("disabled", "disabled");
    });

    $("#token-purchase-agreement-continue").click(function() {
        switch($(this).attr("data-source")) {
            case "more-information":
                top.location.href = "information";
                break;

            case "buy-eos-tokens":
                top.location.href = "instructions";
                break;
        }
    });
    if($('.bxslider').length) $('.bxslider').bxSlider({
        slideMargin: 20
    });

    // tabs functionality in the instructions page
    $('.tabs-main a').on('click', function (event) {
        event.preventDefault();
        $('.tab-links a').removeClass('active');
        $('a[href="'+$(this).attr('href')+'"]').addClass('active');
        $('.tab-contents-main > div').css('height', 0);
        $('div[id="'+$(this).attr('href').replace('#','')+'"]').css('height', 'auto');
        $('body,html').animate({
            scrollTop: $('.participation-instruction .tabs-main').offset().top - $('.header').outerHeight()
        })
    });
    $(document).on('click','.inner-tabs a' ,function (event) {
        event.preventDefault();
        var parent = $(this).parents('.recommended-configuaration');
        console.log(parent);
        parent.find('.inner-tabs a').removeClass('active');
        $(this).addClass('active');
        parent.find('.inner-tabs-content > div').hide();
        parent.find('div[class="'+$(this).attr('href').replace('#','')+'"]').show();
    });

    $(document).on('click','#generate-eos-key', function (event) {
        event.preventDefault();
        var section = $(this).next();
        $(this).fadeOut(1000, function () {
            section.fadeIn();
        });
        var result = genKeyPair();
        section.find('.private-key span').text(result.privkey);
        section.find('.public-key span').text(result.pubkey);


    });

    var privateKeyPair = null
    // Helper function for generate() to actually generate public/private key pair
    function genKeyPair() {
        var _eos_ecc = eos_ecc,
            PrivateKey = _eos_ecc.PrivateKey;

        var d = PrivateKey.randomKey();
        var privkey = d.toWif();
        var pubkey = d.toPublic().toString();
        return { pubkey: pubkey, privkey: privkey };
    }


    // Handle signup submit button
    $('#signup-submit').click(function(event) {
        event.preventDefault();
        //disable so that user does not click it multiple times
        $('#signup-submit').attr("disabled","disabled");
        $('#signup-submit').text("submitting");
        var fullName = $("#full_name").val();
        var companyName = $("#company_name").val();
        var companyEmail = $("#company_email").val();
        var jobTitle = $("#job_title").val();
        var description = $("#description").val();
        var eventTitle = $("#event-title-1").text() + $("#event-title-2").text();
        $.post( "signup-smtp.php", {
            fullName: fullName,
            companyName: companyName,
            companyEmail: companyEmail,
            jobTitle: jobTitle,
            description: description,
            eventTitle: eventTitle
        }, function( response ) {
            //do something on success
        }).always(function() {
            //re-enable the button for next time
            $('#signup-submit').removeAttr("disabled");
            $('#signup-submit').text("submit");
            $('#signup-form').fadeOut(100, function () {
                $('#signup-success').fadeIn(1000);
            });
        });
    });
    $("#company_email").on("blur", function() {
        var emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,4}))$/;
        if(!emailRegex.test($(this).val()) || !$(this).val()) {
            $(this).addClass("input-error").next().show();
        } else {
            $(this).removeClass("input-error").next().hide();
        }
    });
    $("#description").on("blur keyup", function() {
        if($(this).val().length > 250 || !$(this).val()) {
            $(this).addClass("input-error").next().show();
        } else {
            $(this).removeClass("input-error").next().hide();
        }
    });
    $(".form-control").on('blur keyup',function() {
        $(".form-control").each(function(index, input) {
            if(!input.value) {
                $(input).addClass('error');
            }else{
                $(input).removeClass('error');
            }
        });
        if(!($('.input-error').length || $('.error').length)){
            $('#signup-submit').attr('disabled', false)
        }else{
            $('#signup-submit').attr('disabled', true)
        }

    });

    $('#signup-modal').on($.modal.OPEN, function(event, modal) {
        //resetting the signup form
        $('.step-2').hide();
        $('.step-1').show();
        $('body').addClass('modal-open');
        if($(window).width() > 767){
            setModalMaxHeight(this);
        }

    });

    $('.signup-modal-link').on("click", function (event) {
        event.preventDefault();
        $('#event-title-1').html($(this).find('h5.title').html());
        $('#signup-modal .signup-banner a.cta').attr('href',$(this).attr('data-url'))
    });


    $('#signup-modal').on($.modal.CLOSE, function(event, modal) {
        $('body').find('form')[1].reset();
        $('body').removeClass('modal-open');
        $('.form-control').removeClass('input-error');
        $('.error-text').hide();
        $('#signup-submit').attr('disabled', true)
    });


    // polyfills for Jqery find function for IE11 support
    if (!Array.prototype.find) {
        Object.defineProperty(Array.prototype, 'find', {
            value: function(predicate) {
                // 1. Let O be ? ToObject(this value).
                if (this == null) {
                    throw new TypeError('"this" is null or not defined');
                }

                var o = Object(this);

                // 2. Let len be ? ToLength(? Get(O, "length")).
                var len = o.length >>> 0;

                // 3. If IsCallable(predicate) is false, throw a TypeError exception.
                if (typeof predicate !== 'function') {
                    throw new TypeError('predicate must be a function');
                }

                // 4. If thisArg was supplied, let T be thisArg; else let T be undefined.
                var thisArg = arguments[1];

                // 5. Let k be 0.
                var k = 0;

                // 6. Repeat, while k < len
                while (k < len) {
                    // a. Let Pk be ! ToString(k).
                    // b. Let kValue be ? Get(O, Pk).
                    // c. Let testResult be ToBoolean(? Call(predicate, T, « kValue, k, O »)).
                    // d. If testResult is true, return kValue.
                    var kValue = o[k];
                    if (predicate.call(thisArg, kValue, k, o)) {
                        return kValue;
                    }
                    // e. Increase k by 1.
                    k++;
                }

                // 7. Return undefined.
                return undefined;
            }
        });
    }

    //function for setting the max height of the content in the modal when modal content bigger than the viewport height
    function setModalMaxHeight(element) {
        this.$element     = $(element);
        this.$content     = this.$element.find('.modal-content');
        var borderWidth   = this.$content.outerHeight() - this.$content.innerHeight();
        var dialogMargin  = 40;
        var contentHeight = $(window).height() - (dialogMargin + borderWidth);
        var headerHeight  = this.$element.find('.modal-header').outerHeight() || 0;
        var footerHeight  = this.$element.find('.modal-footer').outerHeight() || 0;
        var maxHeight     = contentHeight - (headerHeight + footerHeight);

        this.$content.css({
            'overflow': 'hidden'
        });

        this.$element
            .find('.modal-body').css({
            'max-height': maxHeight,
            'overflow-y': 'auto'
        });
    }
});
