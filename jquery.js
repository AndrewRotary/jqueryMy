  <script>
    $(document).ready(function () {
      $('.wr-img-car, .btn-bid').on('click', function (e) {
        e.preventDefault();
        window.location.href = $(this).closest('.wr-info-car').find('a').attr('href');
      })
    });
  </script>